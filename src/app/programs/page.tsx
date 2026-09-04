import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import { ContentImage } from "@/components/ContentImage";
import { homeProgramCards, ProgramCards } from "@/components/ProgramCards";
import { StatsBand } from "@/components/StatsBand";
import { siteImages } from "@/lib/images";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "I Am Who? Program",
  description:
    "I Am Who? — Endeavor Children's Services flagship psycho-social program for vulnerable children.",
};

export default function ProgramsPage() {
  return (
    <>
      <Hero
        eyebrow="Flagship Program"
        title="I Am Who?"
        lead="A UNICEF-recognized therapeutic tool that invites children into creative activities designed to enhance their emotional well-being — and creates a life book to be kept forever."
        image={siteImages.iamwhoMission}
        primaryCta={{ href: "/programs/mission", label: "Program Mission" }}
        secondaryCta={{ href: "/programs/book", label: "About the Book" }}
        compact
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2>Building Confidence, Hope &amp; Self-Esteem</h2>
              <p className="mt-4 text-text-muted">
                Endeavor&apos;s main focus is the I Am Who program — building
                confidence, hope and self-esteem in children with broken hearts.
                Each child creates their own life book, answering the question:{" "}
                <em>I Am Who?</em>
              </p>
            </div>
            <div className="flex justify-center">
              <ContentImage
                src={siteImages.iamwhoBookCover.src}
                alt={siteImages.iamwhoBookCover.alt}
                width={siteImages.iamwhoBookCover.width}
                height={siteImages.iamwhoBookCover.height}
                className="h-auto w-full max-w-[260px] rounded-2xl border border-border shadow-lg"
              />
            </div>
          </div>
          <ProgramCards cards={homeProgramCards} />
        </div>
      </section>

      <StatsBand
        title="Measured Results"
        subtitle="2007–2009 evaluation with 400+ children over one year"
        stats={[
          { value: "89% → 5%", label: "Depression reduced" },
          { value: "9% → 90%", label: "Self-esteem increased" },
        ]}
      />

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2>Beyond Material Needs</h2>
              <p className="mt-4 text-text-muted">
                Although all children need nutrition, housing, health care,
                school and family support, they also deeply need sustained and
                effective psycho-social intervention.
              </p>
              <p className="mt-4 text-text-muted">
                Studies confirm aid workers&apos; observations that many
                vulnerable children experience depression. Programs are needed to
                help children acknowledge their loss of loved ones, gain a sense
                of self-worth and place in the world, and come to believe that
                they can and will have a future.
              </p>
            </div>
            <blockquote className="rounded-2xl border-l-4 border-primary bg-white p-8 font-display text-xl italic text-text shadow-sm">
              &ldquo;{siteConfig.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <CTA
        title="Help us bring I Am Who? to more children"
        description="Your gift funds books, supplies, and training for caregivers in communities worldwide."
        buttonLabel="Donate Now"
        buttonHref="/get-involved"
      />
    </>
  );
}
