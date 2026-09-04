import Link from "next/link";

export type ProgramCard = {
  icon: string;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
  external?: boolean;
};

type ProgramCardsProps = {
  cards: ProgramCard[];
  columns?: 1 | 2 | 3;
};

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
        <article
          key={card.title}
          className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 focus-within:shadow-lg focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
        >
          <div className="mb-4 text-3xl" aria-hidden="true">
            {card.icon}
          </div>
          <h3 className="text-xl">{card.title}</h3>
          <p className="mt-3 text-text-muted">{card.description}</p>
          {card.external ? (
            <a
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-md font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              {card.linkLabel ?? "Learn more"}
              <span className="ml-1 transition-transform group-hover:translate-x-1 group-focus-within:translate-x-1">
                →
              </span>
            </a>
          ) : (
            <Link
              href={card.href}
              className="mt-4 inline-flex items-center rounded-md font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              {card.linkLabel ?? "Learn more"}
              <span className="ml-1 transition-transform group-hover:translate-x-1 group-focus-within:translate-x-1">
                →
              </span>
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}

export const homeProgramCards: ProgramCard[] = [
  {
    icon: "🎨",
    title: "Creative Expression",
    description:
      "Music, movement, creative drama, drawing, painting, collage, photography, storytelling, poetry, and personal reflection — illustrated by artist Diana Magnuson.",
    href: "/programs/book",
    linkLabel: "Explore the book",
  },
  {
    icon: "💛",
    title: "Healing & Identity",
    description:
      "Comforting and effective aid for children dealing with identity and self-identification issues, whether induced by loss and trauma or by ordinary life.",
    href: "/programs/mission",
    linkLabel: "Read the mission",
  },
  {
    icon: "📋",
    title: "11 Guided Activities",
    description:
      'From "My Big Self" to "My Thoughts Have Wings" — structured modules that guide children through self-discovery at their own pace.',
    href: "/programs/activities",
    linkLabel: "View activities",
  },
];

export const homeServeCards: ProgramCard[] = [
  {
    icon: "🌍",
    title: "Global Reach",
    description:
      "Guided by a community of professionals, Endeavor serves orphans and vulnerable children across continents, bringing community-based intervention where it matters most.",
    href: "/about",
    linkLabel: "About us",
  },
  {
    icon: "💚",
    title: "Holistic Care",
    description:
      "Beyond material needs, children deeply need sustained psycho-social support. We provide food, health care access, education, and emotional healing.",
    href: "/programs",
    linkLabel: "Our programs",
  },
  {
    icon: "🤝",
    title: "Volunteer-Led",
    description:
      "Our board, staff, and expert advisors all volunteer their time and expertise. Every dollar you give goes directly toward carrying out our mission.",
    href: "/get-involved",
    linkLabel: "Get involved",
  },
];

export const homeFlagshipCards: ProgramCard[] = [
  {
    icon: "📖",
    title: "Mission",
    description:
      "Hope and healing for children dealing with identity and self-identification issues, whether from loss and trauma or ordinary life.",
    href: "/programs/mission",
    linkLabel: "Read the mission",
  },
  {
    icon: "📚",
    title: "The Book",
    description:
      "A year of uplifting integrated activities — a child's memory book to be kept and treasured for a lifetime.",
    href: "/programs/book",
    linkLabel: "Explore the book",
  },
  {
    icon: "🎨",
    title: "Activities",
    description:
      'Eleven creative modules from "My Big Self" to "My Thoughts Have Wings" guide children through self-discovery.',
    href: "/programs/activities",
    linkLabel: "View activities",
  },
];
