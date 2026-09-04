"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { programLinks, siteConfig } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function isProgramsActive(pathname: string) {
  return pathname.startsWith("/programs");
}

const navItemClass =
  "block rounded-lg px-4 py-2 font-medium transition-colors hover:bg-primary-light hover:text-primary-dark";

export function Header() {
  const pathname = usePathname();
  const programsMenuId = useId();
  const programsRef = useRef<HTMLLIElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setProgramsOpen(false);
  }, []);

  useEffect(() => {
    if (!mobileOpen && !programsOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setProgramsOpen(false);
        setMobileOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (
        programsOpen &&
        programsRef.current &&
        !programsRef.current.contains(event.target as Node)
      ) {
        setProgramsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [mobileOpen, programsOpen]);

  const renderNavLink = (href: string, label: string) => {
    const active = isActive(pathname, href);
    return (
      <li key={href}>
        <Link
          href={href}
          className={`${navItemClass} ${active ? "text-primary" : "text-text"}`}
          aria-current={active ? "page" : undefined}
          onClick={closeMobile}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="relative mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-text no-underline"
          aria-label={`${siteConfig.name} home`}
          onClick={closeMobile}
        >
          <div
            className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-gradient-to-br from-primary to-primary-dark font-display text-xl font-bold text-white"
            aria-hidden="true"
          >
            E
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold">
              {siteConfig.shortName}
            </span>
            <span className="text-[0.7rem] tracking-wide text-text-muted">
              {siteConfig.tagline}
            </span>
          </div>
        </Link>

        <button
          type="button"
          className="rounded-lg p-2 text-text md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
            aria-hidden="true"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <nav
          id="mobile-nav"
          className={`${
            mobileOpen
              ? "absolute left-0 right-0 top-[72px] flex flex-col border-b border-border bg-white p-6 shadow-lg md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:items-center"
          }`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-0">
            {renderNavLink("/", "Home")}
            {renderNavLink("/about", "About")}

            <li ref={programsRef} className="group relative">
              <button
                type="button"
                id={`${programsMenuId}-button`}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-2 font-medium transition-colors hover:bg-primary-light hover:text-primary-dark md:w-auto ${
                  isProgramsActive(pathname) ? "text-primary" : "text-text"
                }`}
                aria-expanded={programsOpen}
                aria-haspopup="true"
                aria-controls={programsMenuId}
                onClick={() => setProgramsOpen(!programsOpen)}
              >
                Programs
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`ml-1 h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""} md:group-hover:rotate-180`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              <ul
                id={programsMenuId}
                role="menu"
                aria-labelledby={`${programsMenuId}-button`}
                className={`${
                  programsOpen ? "block" : "hidden"
                } mt-1 rounded-xl border border-border bg-white py-2 shadow-md md:absolute md:left-0 md:mt-0 md:min-w-[220px] md:group-hover:block md:group-focus-within:block`}
              >
                {programLinks.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <li key={link.href} role="none">
                      <Link
                        href={link.href}
                        role="menuitem"
                        className={`block px-4 py-2 text-sm transition-colors hover:bg-primary-light hover:text-primary-dark ${
                          active ? "font-semibold text-primary" : "text-text"
                        }`}
                        aria-current={active ? "page" : undefined}
                        onClick={closeMobile}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>

            {renderNavLink("/board", "Board")}
            {renderNavLink("/get-involved", "Get Involved")}
            {renderNavLink("/contact", "Contact")}
          </ul>

          <div className="mt-4 md:ml-4 md:mt-0">
            <a
              href={siteConfig.paypalDonate}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-2.5 font-semibold text-white transition-colors hover:bg-primary-dark md:w-auto"
              onClick={closeMobile}
            >
              Donate
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
