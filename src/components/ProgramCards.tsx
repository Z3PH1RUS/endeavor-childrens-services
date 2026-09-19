import type { ReactNode } from "react";
import Link from "next/link";
import { ContentImage } from "@/components/ContentImage";
import { type SiteImageKey, siteImages } from "@/lib/images";

export type ProgramCard = {
  icon?: string;
  imageKey?: SiteImageKey;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  external?: boolean;
  /** Show Donate + Learn pairing (programs hub cards). */
  showDonatePair?: boolean;
};

type ProgramCardsProps = {
  cards: ProgramCard[];
  columns?: 1 | 2 | 3;
};

const cardShellClass =
  "group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2";

const stretchedLinkClass =
  "rounded-md font-semibold text-primary underline-offset-2 transition-colors after:absolute after:inset-0 after:rounded-2xl after:content-[''] hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const titleLinkClass =
  "rounded-md font-semibold text-primary underline-offset-2 transition-colors hover:text-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

function CardPrimaryLink({
  card,
  children,
  stretched,
}: {
  card: ProgramCard;
  children: ReactNode;
  stretched: boolean;
}) {
  const label = `${card.title}: ${card.linkLabel ?? "Learn more"}`;
  const className = stretched ? stretchedLinkClass : titleLinkClass;

  if (card.external) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={label}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={card.href} className={className} aria-label={label}>
      {children}
    </Link>
  );
}

function ProgramCardArticle({ card }: { card: ProgramCard }) {
  const image = card.imageKey ? siteImages[card.imageKey] : null;
  const linkLabel = card.linkLabel ?? "Learn more";
  const useStretchedTarget = !card.showDonatePair;

  return (
    <article className={cardShellClass}>
      {image ? (
        <div className="relative h-36 overflow-hidden bg-bg-alt">
          <ContentImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 640px) 100vw, 50vw"
            className="h-full w-full object-cover transition-transform duration-300 motion-reduce:transition-none group-hover:scale-105 motion-reduce:group-hover:scale-100"
          />
        </div>
      ) : null}

      <div className={image ? "p-6" : "p-6"}>
        {!image && card.icon ? (
          <div className="mb-4 text-3xl" aria-hidden="true">
            {card.icon}
          </div>
        ) : null}

        <h3 className="text-xl">
          <CardPrimaryLink card={card} stretched={useStretchedTarget}>
            {card.title}
          </CardPrimaryLink>
        </h3>
        <p className="relative mt-3 text-text-muted">{card.description}</p>

        {card.showDonatePair ? (
          <div className="relative z-10 mt-5 flex flex-wrap gap-3">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-bg-dark transition-colors hover:bg-accent-dark"
            >
              Donate Now
            </Link>
            <Link
              href={card.href}
              className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary-light"
            >
              {linkLabel}
            </Link>
          </div>
        ) : (
          <p className="relative mt-4 inline-flex items-center font-semibold text-primary">
            {linkLabel}
            <span
              className="ml-1 transition-transform group-hover:translate-x-1 group-focus-within:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </p>
        )}
      </div>
    </article>
  );
}

export function ProgramCards({ cards, columns = 3 }: ProgramCardsProps) {
  const gridCols =
    columns === 1
      ? "grid-cols-1"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-6 ${gridCols}`}>
      {cards.map((card) => (
        <ProgramCardArticle key={card.title} card={card} />
      ))}
    </div>
  );
}

export const homeProgramCards: ProgramCard[] = [
  {
    imageKey: "iamwhoBookCover",
    title: "Creative Expression",
    description:
      "Music, movement, creative drama, drawing, painting, collage, photography, storytelling, poetry, and personal reflection — illustrated by artist Diana Magnuson.",
    href: "/programs/book",
    linkLabel: "Explore the book",
    showDonatePair: true,
  },
  {
    imageKey: "iamwhoMission",
    title: "Healing & Identity",
    description:
      "Comforting and effective aid for children dealing with identity and self-identification issues, whether induced by loss and trauma or by ordinary life.",
    href: "/programs/mission",
    linkLabel: "Read the mission",
    showDonatePair: true,
  },
  {
    imageKey: "childrenProgram",
    title: "11 Guided Activities",
    description:
      'From "My Big Self" to "My Thoughts Have Wings" — structured modules that guide children through self-discovery at their own pace.',
    href: "/programs/activities",
    linkLabel: "View activities",
    showDonatePair: true,
  },
];

export const homeServeCards: ProgramCard[] = [
  {
    imageKey: "childrenCommunity",
    title: "Global Reach",
    description:
      "Guided by a community of professionals, Endeavor serves orphans and vulnerable children across continents, bringing community-based intervention where it matters most.",
    href: "/about",
    linkLabel: "About us",
  },
  {
    imageKey: "iamwhoMission",
    title: "Holistic Care",
    description:
      "Beyond material needs, children deeply need sustained psycho-social support. We provide food, health care access, education, and emotional healing.",
    href: "/programs",
    linkLabel: "Our programs",
  },
  {
    imageKey: "janiceWithChildren",
    title: "Volunteer-Led",
    description:
      "Our board, staff, and expert advisors all volunteer their time and expertise. Every dollar you give goes directly toward carrying out our mission.",
    href: "/get-involved",
    linkLabel: "Get involved",
  },
];

export const homeFlagshipCards: ProgramCard[] = [
  {
    imageKey: "iamwhoMission",
    title: "Mission",
    description:
      "Hope and healing for children dealing with identity and self-identification issues, whether from loss and trauma or ordinary life.",
    href: "/programs/mission",
    linkLabel: "Read the mission",
  },
  {
    imageKey: "iamwhoBookCover",
    title: "The Book",
    description:
      "A year of uplifting integrated activities — a child's memory book to be kept and treasured for a lifetime.",
    href: "/programs/book",
    linkLabel: "Explore the book",
  },
  {
    imageKey: "childrenProgram",
    title: "Activities",
    description:
      'Eleven creative modules from "My Big Self" to "My Thoughts Have Wings" guide children through self-discovery.',
    href: "/programs/activities",
    linkLabel: "View activities",
  },
];
