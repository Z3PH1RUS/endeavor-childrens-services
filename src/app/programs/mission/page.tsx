import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/Hero";
import { StatsBand } from "@/components/StatsBand";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "I Am Who? Mission",
  description:
    "I Am Who? Mission — a UNICEF Best Practice therapeutic tool for vulnerable children's emotional well-being.",
};

export default function MissionPage() {
  return (
    <>
      <PageHero
        title="I Am Who? Mission"
        lead="Hope and healing for the hearts of children through creative expression."
        image={siteImages.iamwhoMission}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "Mission" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-text-muted">
            I Am Who? invites children into creative activities designed to
            enhance their well-being. It is also a child&apos;s life book to be
            kept forever.
          </p>

          <p className="mt-4 text-text-muted">
            Cited by UNICEF as a &ldquo;Best Practice&rdquo; therapeutic tool, I
            Am Who? invites children into creative activities designed to
            enhance their emotional well-being. At the same time, I Am Who? is
            a child&apos;s memory book to be kept and treasured for a lifetime.
          </p>

          <p className="mt-4 text-text-muted">
            I Am Who? brings hope and healing to the hearts of children. Each
            child creates their own life book, answering the question,{" "}
            <em>&ldquo;I Am Who?&rdquo;</em>
          </p>

          <h2 className="mt-10">Created by Janice Neilson</h2>
          <p className="mt-4 text-text-muted">
            Author Janice Neilson, drawing upon over thirty years work with
            vulnerable children in ten countries, provides comforting and
            effective aid for children dealing with identity and
            self-identification issues, whether induced by loss and trauma or by
            ordinary life.
          </p>

          <p className="mt-4 text-text-muted">
            Neilson&apos;s book takes the child through increasingly deeper,
            uplifting arts activities including:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
            <li>Music and movement</li>
            <li>Creative drama</li>
            <li>Drawing, painting, collage, and photography</li>
            <li>Story listening and storytelling</li>
            <li>Personal reflection and poetry writing</li>
          </ul>
          <p className="mt-4 text-text-muted">
            Children love these activities and the illustrations by artist Diana
            Magnuson.
          </p>

          <h2 className="mt-10">The Need for Psycho-Social Support</h2>
          <p className="mt-4 text-text-muted">
            Although all children need nutrition, housing, health care, school
            and family support, they also deeply need sustained and effective
            psycho-social intervention.
          </p>
          <p className="mt-4 text-text-muted">
            Studies confirm aid workers&apos; observations that many vulnerable
            children experience depression. Programs are needed to help children
            acknowledge their loss of loved ones, gain a sense of self-worth and
            place in the world, and come to believe that they can and will have
            a future.
          </p>
        </div>
      </section>

      <StatsBand
        title="Program Evaluation Results"
        subtitle="During 2007–2009, over 400 children — already receiving help with material needs — received the psycho-social help provided by this resource over a period of one year."
        stats={[
          {
            value: "89% → 5%",
            label: "Depressed children dramatically reduced",
          },
          { value: "9% → 90%", label: "Self-esteem increased" },
        ]}
        source="A formal evaluation found depression in the children dramatically reduced."
      />

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/programs/book"
              className="inline-flex items-center justify-center rounded-xl border-2 border-primary px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary-light"
            >
              Learn About the Book
            </Link>
            <Link
              href="/programs/activities"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              View Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
