import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/Hero";
import { ProgramCards } from "@/components/ProgramCards";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Support Endeavor Children's Services — make a tax-deductible donation to help vulnerable children worldwide.",
};

const fundingItems = [
  "Food for hungry children",
  '"I Am Who?" books for children in trauma',
  "Project supplies for creative activities",
  "Expenses for caregivers and workers in communities being served",
  "Travel for trainers and evaluators",
  "Other program expenses",
];

const supportCards = [
  {
    icon: "📣",
    title: "Spread the Word",
    description:
      "Follow and share our work on Facebook to help more people learn about the I Am Who? program and Endeavor's global mission.",
    href: siteConfig.facebook,
    linkLabel: "Visit our Facebook page",
    external: true,
  },
  {
    icon: "📞",
    title: "Get in Touch",
    description:
      "Have questions about Endeavor's programs or how to support our work? We'd love to hear from you.",
    href: "/contact",
    linkLabel: "Contact us",
  },
  {
    icon: "📖",
    title: "Learn About I Am Who?",
    description:
      "Understanding our flagship program helps you see the direct impact your support makes in children's lives.",
    href: "/programs",
    linkLabel: "Explore programs",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="How Can You Help?"
        lead="Your gift brings hope, healing, and opportunity to children who need it most."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2>Every Dollar Makes a Difference</h2>
              <p className="mt-4 text-text-muted">
                Endeavor Children&apos;s Services was formed in 2011. It is a
                501(c)(3) non-profit private foundation. Endeavor develops
                programs that are innovative in the field of children&apos;s
                services.
              </p>
              <p className="mt-4 text-text-muted">
                Endeavor&apos;s board, staff and expert advisors all volunteer
                their time and expertise. Help is needed to cover the costs of
                carrying out Endeavor&apos;s mission.
              </p>
              <p className="mt-4 italic text-text-muted">
                Note: As a private foundation, this may limit your tax
                deductions. Please consult your tax advisor.
              </p>

              <h3 className="mt-8 text-xl">Your gift supports:</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
                {fundingItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-primary-light p-8">
              <ContentImage
                src={siteImages.logo.src}
                alt={siteImages.logo.alt}
                width={siteImages.logo.width}
                height={siteImages.logo.height}
                className="mb-6 h-auto w-full max-w-sm"
              />
              <h2 className="text-2xl">Make a Gift</h2>
              <p className="mt-4 text-text-muted">
                If you are able to contribute to our mission, please make a
                tax-deductible gift through our secure PayPal donation link.
              </p>
              <a
                href={siteConfig.paypalDonate}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-lg font-semibold text-bg-dark transition-colors hover:bg-accent-dark"
              >
                Donate via PayPal
              </a>
              <p className="mt-6 text-sm text-text-muted">
                Secure donation processed by PayPal. You do not need a PayPal
                account to donate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2>Other Ways to Support</h2>
            <p className="mt-4 text-text-muted">
              Beyond financial gifts, you can help spread awareness of
              Endeavor&apos;s mission.
            </p>
          </div>
          <ProgramCards cards={supportCards} />
        </div>
      </section>

      <CTA
        title="Together, we can change a child's world"
        description="Thank you for considering a gift to Endeavor Children's Services."
        buttonLabel="Donate Now"
        buttonHref={siteConfig.paypalDonate}
        external
      />
    </>
  );
}
