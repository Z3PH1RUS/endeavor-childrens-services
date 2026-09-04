import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { CTA } from "@/components/CTA";
import { Hero } from "@/components/Hero";
import {
  homeFlagshipCards,
  homeServeCards,
  ProgramCards,
} from "@/components/ProgramCards";
import { StatsBand } from "@/components/StatsBand";
import { siteImages } from "@/lib/images";
import { impactStats, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hope for Every Child",
  description:
    "Endeavor Children's Services brings hope and opportunity to orphans and vulnerable children around the world through innovative programs including I Am Who?",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={`501(c)(3) Nonprofit · Founded ${siteConfig.founded}`}
        title="Changing the world, one child at a time"
        lead="Endeavor Children's Services brings hope and opportunity to orphans and vulnerable children around the world through innovative programs in health, nutrition, education, and psycho-social care."
        quote={siteConfig.quote}
        image={{ ...siteImages.homepageBanner, priority: true }}
        primaryCta={{ href: "/get-involved", label: "Support Our Mission" }}
        secondaryCta={{ href: "/programs", label: "Explore Programs" }}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2>Who We Serve</h2>
            <p className="mt-4 text-text-muted">
              With a special focus on children living in extreme poverty, we draw
              upon the expertise of professionals in health, nutrition, education,
              law, psychology, and art who share a dedication to improving the
              lives of children most in need — anywhere in the world.
            </p>
          </div>
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <ContentImage
              src={siteImages.childrenProgram.src}
              alt={siteImages.childrenProgram.alt}
              width={siteImages.childrenProgram.width}
              height={siteImages.childrenProgram.height}
              className="h-auto w-full rounded-2xl border border-border shadow-sm"
            />
            <ContentImage
              src={siteImages.childrenCommunity.src}
              alt={siteImages.childrenCommunity.alt}
              width={siteImages.childrenCommunity.width}
              height={siteImages.childrenCommunity.height}
              className="h-auto w-full rounded-2xl border border-border shadow-sm"
            />
          </div>
          <ProgramCards cards={homeServeCards} />
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2>Our Flagship Program: I Am Who?</h2>
              <p className="mt-4 text-text-muted">
                Cited by UNICEF as a &ldquo;Best Practice&rdquo; therapeutic
                tool, I Am Who? invites children into creative activities
                designed to enhance their emotional well-being. Each child creates
                their own life book, answering the question:{" "}
                <em>I Am Who?</em>
              </p>
              <p className="mt-4 text-text-muted">
                Through music, movement, creative drama, drawing, painting,
                collage, photography, storytelling, and personal reflection,
                children build confidence, hope, and self-esteem.
              </p>
              <Link
                href="/programs"
                className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                Learn About I Am Who?
              </Link>
            </div>
            <ProgramCards cards={homeFlagshipCards} columns={1} />
          </div>
        </div>
      </section>

      <StatsBand
        title="Proven Impact"
        subtitle="Formal evaluation of the I Am Who? program (2007–2009, 400+ children over one year)"
        stats={[...impactStats]}
        source="Source: I Am Who? program evaluation, as reported on endeavorchildrensservices.org"
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mx-auto mb-10 max-w-3xl">
            <h2>How You Can Help</h2>
            <p className="mt-4 text-text-muted">
              Your tax-deductible gift helps cover food for hungry children, I Am
              Who? books, project supplies, caregiver expenses, and travel for
              trainers and evaluators in the communities we serve.
            </p>
          </div>
          <Link
            href="/get-involved"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-lg font-semibold text-bg-dark transition-colors hover:bg-accent-dark"
          >
            Make a Gift Today
          </Link>
        </div>
      </section>

      <CTA
        title="Every child deserves to be loved, wanted, and nurtured"
        description="Join us in bringing hope and opportunity to the world's most vulnerable children."
        buttonLabel="Donate Now"
        buttonHref="/get-involved"
      />
    </>
  );
}
