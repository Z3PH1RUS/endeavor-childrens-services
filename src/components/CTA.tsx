import Link from "next/link";

type CTAProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  external?: boolean;
};

export function CTA({
  title,
  description,
  buttonLabel,
  buttonHref,
  external = false,
}: CTAProps) {
  const buttonClasses =
    "inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-lg font-semibold text-bg-dark transition-colors hover:bg-accent-dark";

  return (
    <section className="bg-gradient-to-br from-primary to-primary-dark py-16 text-center text-white md:py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-white">{title}</h2>
        <p className="mt-4 text-lg text-white/85">{description}</p>
        <div className="mt-8">
          {external ? (
            <a
              href={buttonHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses}
            >
              {buttonLabel}
            </a>
          ) : (
            <Link href={buttonHref} className={buttonClasses}>
              {buttonLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
