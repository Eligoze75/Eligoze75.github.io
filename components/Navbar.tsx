"use client";

import { navLinks, site } from "@/lib/content";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[var(--color-border)] bg-[rgba(10,10,10,0.88)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          <span className="text-[var(--color-accent)]">/</span>
          {site.name}
        </a>
        <ul className="flex items-center gap-1 sm:gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mono-label rounded-[var(--radius-control)] px-3 py-1.5 text-[var(--color-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-white sm:px-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
