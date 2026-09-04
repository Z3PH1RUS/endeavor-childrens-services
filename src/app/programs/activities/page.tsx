import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/Hero";
import { siteImages } from "@/lib/images";
import { programActivities } from "@/lib/site";

export const metadata: Metadata = {
  title: "I Am Who? Activities",
  description:
    "I Am Who? Activities — eleven creative modules guiding children through self-discovery and healing.",
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero
        title="I Am Who? Activities"
        lead="Myself: There Is Only One of Me! — eleven guided modules for self-discovery and healing."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "Activities" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:items-start">
            <ContentImage
              src={siteImages.childrenProgram.src}
              alt={siteImages.childrenProgram.alt}
              width={siteImages.childrenProgram.width}
              height={siteImages.childrenProgram.height}
              className="h-auto w-full rounded-2xl border border-border shadow-sm"
            />
            <div>
              <h2>Guided Creative Modules</h2>
              <p className="mt-4 text-text-muted">
                Each activity begins with a creative &ldquo;game.&rdquo; When
                completed, the child makes an entry in their book — photos,
                artwork, reflections, and memories that build a lasting record of
                their resilience.
              </p>
            </div>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programActivities.map((activity, index) => (
              <li
                key={activity}
                className="flex items-center gap-4 rounded-xl border border-border bg-white p-5 shadow-sm"
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light font-display font-bold text-primary"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="font-medium text-text">{activity}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2>Designed for Sensitivity</h2>
              <p className="mt-4 text-text-muted">
                Activities are completed over time to allow children&apos;s
                comfort with the process to grow, involve family members in
                supporting children&apos;s efforts, and let children create
                items or seek information at their own pace.
              </p>
              <p className="mt-4 text-text-muted">
                Because some subjects are very sensitive, children must be made
                comfortable at all times, offered the opportunity to express
                their feelings, and allowed to substitute activities of their own
                choosing.
              </p>
            </div>
            <div>
              <h2>A Lasting Record</h2>
              <p className="mt-4 text-text-muted">
                The I Am Who? book is the personal and permanent possession of
                each child. It contains all activity information so children can
                complete activities at any time in the future and return to this
                memory book&apos;s evidence of their own resilience.
              </p>
              <Link
                href="/programs/book"
                className="mt-6 inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-light"
              >
                Learn About the Book
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Fund I Am Who? books for children in need"
        description="Your donation provides books and supplies for caregivers delivering the program worldwide."
        buttonLabel="Donate Now"
        buttonHref="/get-involved"
      />
    </>
  );
}
