"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  CloseIcon,
  MenuIcon,
  MessengerIcon,
  PhoneIcon,
} from "./icons";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Vehicles", href: "#vehicles" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const handleMobileNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setMenuOpen(false);
    const id = href.slice(1);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-white" : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#home" className="flex shrink-0 items-center gap-2.5">
          <Image
            src="/images/logo/logo.png"
            alt="Mariquina Travel logo"
            width={28}
            height={28}
            className="h-7 w-7 object-contain"
          />
          <span className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight">
              <span
                className={`transition-colors ${
                  scrolled ? "text-ink" : "text-white"
                }`}
              >
                Mariquina
              </span>{" "}
              <span className="text-amber">Travel</span>
            </span>
            <span
              className={`mt-1 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors ${
                scrolled ? "text-muted" : "text-white/70"
              }`}
            >
              Van and Car Rental
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={
                activeSection === link.href.slice(1) ? "true" : undefined
              }
              className={`relative pb-1 text-sm font-semibold transition-colors ${
                activeSection === link.href.slice(1)
                  ? "text-amber after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-amber"
                  : scrolled
                    ? "text-ink hover:text-primary"
                    : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-5">
          <a
            href="tel:+639926723651"
            className={`hidden items-center gap-2 text-sm font-medium transition-colors md:flex ${
              scrolled
                ? "text-ink hover:text-primary"
                : "text-white/85 hover:text-white"
            }`}
          >
            <PhoneIcon className="h-4 w-4" />
            0992 672 3651
          </a>
          <a
            href="https://www.messenger.com/t/100039285796209"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-hover sm:flex"
          >
            <MessengerIcon className="h-4 w-4" />
            Message Us
          </a>
          <button
            type="button"
            suppressHydrationWarning
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors xl:hidden ${
              scrolled
                ? "text-ink hover:bg-fog"
                : "text-white hover:bg-white/10"
            }`}
          >
            {menuOpen ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-white xl:hidden">
          <nav className="mx-auto flex max-w-[1200px] flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleMobileNavClick(event, link.href)}
                className={`flex h-11 items-center text-sm font-semibold transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "text-amber"
                    : "text-ink hover:text-primary"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-border pt-4">
              <a
                href="tel:+639926723651"
                className="flex h-10 items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-primary"
              >
                <PhoneIcon className="h-4 w-4" />
                0992 672 3651
              </a>
              <a
                href="https://www.messenger.com/t/100039285796209"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-10 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                <MessengerIcon className="h-4 w-4" />
                Message Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
