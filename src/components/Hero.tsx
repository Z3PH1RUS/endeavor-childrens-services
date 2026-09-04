import Link from "next/link";

type HeroProps = {
  eyebrow?: string;
  title: string;
  lead: string;
  quote?: string;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  compact?: boolean;
};

export function Hero({
  eyebrow,
  title,
  lead,
  quote,
  primaryCta,
  secondaryCta,
  compact = false,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark text-white ${
        compact ? "py-16 md:py-20" : "py-20 md:py-28"
      }`}
    >
      <svg
        className="pointer-events-none absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 opacity-30"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <circle
          cx="200"
          cy="200"
          r="180"
          fill="none"
          stroke="white"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="140"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="white"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-6">
        {eyebrow && (
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-white/85">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-white">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          {lead}
        </p>
        {quote && (
          <blockquote className="mt-8 max-w-2xl border-l-4 border-accent pl-6 font-display text-xl italic text-white/95">
            &ldquo;{quote}&rdquo;
          </blockquote>
        )}
        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function PageHero({
  title,
  lead,
  breadcrumbs,
}: {
  title: string;
  lead: string;
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="bg-bg-alt py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-1">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.label} className="flex items-center gap-1">
                {i > 0 && (
                  <span aria-hidden="true" className="text-text-muted/60">
                    /
                  </span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-primary hover:text-primary-dark"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-text">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1>{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">{lead}</p>
      </div>
    </section>
  );
}
