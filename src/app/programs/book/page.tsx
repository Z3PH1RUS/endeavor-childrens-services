import type { Metadata } from "next";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { PageHero } from "@/components/Hero";
import { siteImages } from "@/lib/images";

export const metadata: Metadata = {
  title: "I Am Who? Book",
  description:
    "I Am Who? Book — a year of creative activities and a child's memory book to treasure for a lifetime.",
};

const beneficiaries = [
  "Children experiencing grief or loss",
  "Children of divorced or blended families",
  "Adopted children",
  "Children in foster care",
  "Immigrant children",
  "Homeless children",
  "Children with disabilities",
  "Children in counseling",
];

export default function BookPage() {
  return (
    <>
      <PageHero
        title="I Am Who? Book"
        lead="A year of uplifting activities — a child's memory book to be kept and treasured for a lifetime."
        image={siteImages.iamwhoBookCover}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: "The Book" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 flex justify-center lg:hidden">
            <ContentImage
              src={siteImages.iamwhoBookCover.src}
              alt={siteImages.iamwhoBookCover.alt}
              width={siteImages.iamwhoBookCover.width}
              height={siteImages.iamwhoBookCover.height}
              className="h-auto w-full max-w-[231px] rounded-2xl border border-border shadow-lg"
            />
          </div>
          <blockquote className="mb-12 rounded-2xl border-l-4 border-primary bg-primary-light p-6 font-display text-xl italic text-text">
            &ldquo;This painting game makes me feel warm in my heart.&rdquo;
          </blockquote>

          <p className="text-text-muted">
            &ldquo;I Am Who?&rdquo; provides children a year of uplifting
            integrated activities including literature, art, music, movement,
            drawing, painting, collage, photography, poetry, creative writing,
            drama and personal reflection.
          </p>
          <p className="mt-4 text-text-muted">
            The accomplishments captured in the book help the children to
            recognize their own unique gifts and skills, to acknowledge their
            losses, to gain strength from their memories of people who have loved
            them, and to believe they each have a place in the future of a world
            that needs their contribution.
          </p>

          <h2 className="mt-10">For Caregivers &amp; Facilitators</h2>
          <p className="mt-4 text-text-muted">
            Adult family members, teachers, social workers, or counselors can
            readily use I Am Who? with school-age children in either group or
            one-on-one settings. A manual that provides the adult with a
            step-by-step guide is available.
          </p>

          <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-primary-light p-6 font-display text-xl italic text-text">
            &ldquo;Whenever I open my I Am Who? book, I feel my father is close
            to me.&rdquo;
          </blockquote>

          <h2>Who Benefits</h2>
          <p className="mt-4 text-text-muted">
            The book&apos;s activities are especially helpful for children
            experiencing difficulty in their lives:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-text-muted">
            {beneficiaries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-text-muted">
            Older children can enjoy the book on their own, as a unique
            journal/diary/scrapbook.
          </p>

          <blockquote className="my-8 rounded-2xl border-l-4 border-primary bg-primary-light p-6 font-display text-xl italic text-text">
            &ldquo;I love this imagination game. The tiny tree is growing with
            no sorrow or sadness.&rdquo;
          </blockquote>

          <h2>How It Works</h2>
          <p className="mt-4 text-text-muted">
            Each section of I Am Who? begins with a creative activity or
            &ldquo;game.&rdquo; When the game has been completed, an entry is
            made in the book: something formed or found by the child, photos of
            the child on that day, thoughts from the child or adult about the
            activity day, etc.
          </p>
          <p className="mt-4 text-text-muted">
            The activities and accompanying reflections are to be completed over
            time in order to allow children&apos;s comfort with the process to
            grow, to involve family members in supporting the children&apos;s
            efforts, and to allow children to create items or seek information
            to enter in their books.
          </p>
          <p className="mt-4 text-text-muted">
            Because some subjects in the book are very sensitive, the children
            must be made comfortable at all times, offered the opportunity to
            express their feelings, allowed to move at their own pace and to
            substitute activities of their own choosing.
          </p>

          <h2 className="mt-10">A Permanent Possession</h2>
          <p className="mt-4 text-text-muted">
            The I Am Who? book is the personal and permanent possession of each
            child and contains all activity information so that children have
            the option to complete an activity at any time in the future and to
            return as needed to this memory book&apos;s evidence of their own
            resilience, which will help them to cope with hardships in their
            on-going lives.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt py-16 text-center md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2>See the Activities</h2>
          <p className="mt-4 text-text-muted">
            Explore the eleven guided modules that make up the I Am Who?
            program.
          </p>
          <Link
            href="/programs/activities"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-lg font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            View All Activities
          </Link>
        </div>
      </section>
    </>
  );
}
