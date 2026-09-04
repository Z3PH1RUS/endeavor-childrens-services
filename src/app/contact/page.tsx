import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/Hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Endeavor Children's Services — phone and social media.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        lead="We'd love to hear from you. Reach out to learn more about our programs or how to support our mission."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
              <div className="text-4xl" aria-hidden="true">
                📞
              </div>
              <h3 className="mt-4 text-xl">Phone</h3>
              <p className="mt-2">
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p className="mt-2 text-sm text-text-muted">USA</p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
              <div className="text-4xl" aria-hidden="true">
                📘
              </div>
              <h3 className="mt-4 text-xl">Facebook</h3>
              <p className="mt-2">
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  {siteConfig.facebookHandle}
                </a>
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Follow our I Am Who? program
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
              <div className="text-4xl" aria-hidden="true">
                💝
              </div>
              <h3 className="mt-4 text-xl">Donate</h3>
              <p className="mt-2">
                <Link
                  href="/get-involved"
                  className="font-semibold text-primary hover:text-primary-dark"
                >
                  Make a gift
                </Link>
              </p>
              <p className="mt-2 text-sm text-text-muted">
                Tax-deductible via PayPal
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-bg-alt p-8 text-center">
              <div className="text-4xl opacity-50" aria-hidden="true">
                ✉️
              </div>
              <h3 className="mt-4 text-xl">Email</h3>
              <p className="mt-2 text-sm font-medium text-text-muted">
                Not published
              </p>
              <p className="mt-2 text-sm text-text-muted">
                No email address was listed on the original Endeavor website.
              </p>
            </div>

            <div className="rounded-2xl border border-dashed border-border bg-bg-alt p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="text-4xl opacity-50" aria-hidden="true">
                📍
              </div>
              <h3 className="mt-4 text-xl">Mailing Address</h3>
              <p className="mt-2 text-sm font-medium text-text-muted">
                Not published
              </p>
              <p className="mt-2 text-sm text-text-muted">
                No physical address was listed on the original Endeavor website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to make a difference?"
        description="Your support helps bring food, education, health care, and healing to vulnerable children worldwide."
        buttonLabel="Support Our Mission"
        buttonHref="/get-involved"
      />
    </>
  );
}
