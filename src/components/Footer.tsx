import Link from "next/link";
import { navLinks, programLinks, siteConfig } from "@/lib/site";

export function Footer() {
  const exploreLinks = navLinks.filter(
    (l) => l.href !== "/" && l.href !== "/contact",
  );

  return (
    <footer className="bg-bg-dark text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              A 501(c)(3) nonprofit private foundation working to change the
              world, one child at a time. Founded {siteConfig.founded}.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {link.label === "Board" ? "Board of Directors" : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Programs
            </h4>
            <ul className="space-y-2 text-sm">
              {programLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/75 transition-colors hover:text-white"
                  >
                    {link.label === "I Am Who? Overview"
                      ? link.label
                      : `I Am Who? ${link.label}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="text-white/75 transition-colors hover:text-white"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/60 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </span>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/75 transition-colors hover:text-white"
          >
            Follow us on Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
