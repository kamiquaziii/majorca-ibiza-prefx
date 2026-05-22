"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SoundToggle } from "@/components/sound-toggle";
import { navLinks } from "@/lib/content";

const navLinkClass =
  "type-kicker whitespace-nowrap text-[0.6875rem] tracking-[0.14em] transition-colors hover:text-terracotta sm:text-[0.75rem] sm:tracking-[0.16em]";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "rule-line border-b bg-cream/92 backdrop-blur-md"
          : "bg-cream/80 backdrop-blur-sm"
      }`}
    >
      <div className="page-container relative flex min-h-14 items-center py-4 sm:min-h-[4.25rem] sm:py-5">
        <Link
          href="#top"
          className="relative z-10 shrink-0 whitespace-nowrap font-serif text-xl leading-none text-slate italic sm:text-2xl"
        >
          Pre-F(x)
        </Link>

        {/* Desktop nav — truly centered in the bar */}
        <nav
          className="pointer-events-none absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-5 lg:pointer-events-auto lg:flex xl:gap-7"
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile / tablet: sound centered in the bar */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:hidden">
          <div className="pointer-events-auto">
            <SoundToggle />
          </div>
        </div>

        {/* Right cluster — always aligned end */}
        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-3 pl-3 sm:gap-4">
          <div className="hidden lg:block">
            <SoundToggle />
          </div>

          <button
            type="button"
            className="rule-line rounded-sm border p-3 text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          className="rule-line border-t bg-cream lg:hidden"
          aria-label="Mobile"
        >
          <div className="page-container py-8">
            <ul className="flex flex-col items-center gap-5 text-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-kicker block py-1 text-charcoal"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
