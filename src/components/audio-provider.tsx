"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AUDIO_SRC,
  AUDIO_STORAGE_KEY,
  AUDIO_VOLUME,
  INTRO_SESSION_KEY,
} from "@/lib/audio";

type SiteExperienceContextValue = {
  hasEntered: boolean;
  isPlaying: boolean;
  isReady: boolean;
  prefersReducedMotion: boolean;
  enter: (withSound: boolean) => void;
  toggle: () => void;
  pause: () => void;
};

const SiteExperienceCtx = createContext<SiteExperienceContextValue | null>(
  null,
);

export function useSiteExperience() {
  const ctx = useContext(SiteExperienceCtx);
  if (!ctx) {
    throw new Error("useSiteExperience must be used within AudioProvider");
  }
  return ctx;
}

/** @deprecated use useSiteExperience */
export const useAudio = useSiteExperience;

export function AudioProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const onChange = () => setPrefersReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_SESSION_KEY) === "1") {
        setHasEntered(true);
      }
    } catch {
      /* private mode */
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = hasEntered ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hasEntered]);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.preload = "none";
    audio.volume = AUDIO_VOLUME;
    audioRef.current = audio;

    const onCanPlay = () => setIsReady(true);
    const onEnded = () => setIsPlaying(false);

    audio.addEventListener("canplay", onCanPlay);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("canplay", onCanPlay);
      audio.removeEventListener("ended", onEnded);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  const pause = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    setIsPlaying(false);
    try {
      localStorage.setItem(AUDIO_STORAGE_KEY, "off");
    } catch {
      /* private mode */
    }
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || prefersReducedMotion) return false;

    audio.volume = AUDIO_VOLUME;
    try {
      await audio.play();
      setIsPlaying(true);
      try {
        localStorage.setItem(AUDIO_STORAGE_KEY, "on");
      } catch {
        /* private mode */
      }
      return true;
    } catch {
      setIsPlaying(false);
      return false;
    }
  }, [prefersReducedMotion]);

  const enter = useCallback(
    (withSound: boolean) => {
      try {
        sessionStorage.setItem(INTRO_SESSION_KEY, "1");
      } catch {
        /* private mode */
      }
      setHasEntered(true);
      if (withSound) {
        void play();
      }
    },
    [play],
  );

  const toggle = useCallback(() => {
    if (isPlaying) {
      pause();
    } else {
      void play();
    }
  }, [isPlaying, pause, play]);

  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden && audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
      } else if (
        !document.hidden &&
        isPlaying &&
        audioRef.current &&
        audioRef.current.paused
      ) {
        void audioRef.current.play().catch(() => setIsPlaying(false));
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [isPlaying]);

  return (
    <SiteExperienceCtx.Provider
      value={{
        hasEntered,
        isPlaying,
        isReady,
        prefersReducedMotion,
        enter,
        toggle,
        pause,
      }}
    >
      {children}
    </SiteExperienceCtx.Provider>
  );
}
