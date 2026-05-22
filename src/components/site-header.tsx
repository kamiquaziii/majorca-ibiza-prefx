"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SoundToggle } from "@/components/sound-toggle";
import { navLinks } from "@/lib/content";

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
      <div className="page-container flex items-center justify-between py-4 sm:py-5">
        <Link
          href="#top"
          className="font-serif text-xl text-slate italic sm:text-2xl"
        >
          Pre-F(x)
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="type-kicker transition-colors hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <SoundToggle />

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
          className="rule-line border-t bg-cream px-5 py-8 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-5">
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
        </nav>
      )}
    </header>
  );
}
