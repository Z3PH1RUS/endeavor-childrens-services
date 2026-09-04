import type { Metadata } from "next";
import { ContentImage } from "@/components/ContentImage";
import { PageHero } from "@/components/Hero";
import { boardMembers } from "@/lib/site";

export const metadata: Metadata = {
  title: "Board of Directors",
  description:
    "Board of Directors — Endeavor Children's Services leadership team.",
};

export default function BoardPage() {
  return (
    <>
      <PageHero
        title="Board of Directors"
        lead="Dedicated leaders who volunteer their time and expertise to guide Endeavor's mission."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Board of Directors" },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-1">
            {boardMembers.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-border bg-white p-8 shadow-sm"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <ContentImage
                    src={member.image.src}
                    alt={member.image.alt}
                    width={member.image.width}
                    height={member.image.height}
                    className="h-auto w-full max-w-[200px] shrink-0 rounded-xl border border-border shadow-sm"
                  />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {member.role}
                    </p>
                    <h2 className="mt-2 text-2xl">{member.name}</h2>
                    <div className="mt-4 space-y-4 text-text-muted">
                      {member.bio.map((paragraph) => (
                        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
