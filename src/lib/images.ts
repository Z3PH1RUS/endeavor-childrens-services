export const siteImages = {
  logo: {
    src: "/images/logo-banner.png",
    alt: "Endeavor Children's Services logo",
    width: 1001,
    height: 288,
  },
  homepageBanner: {
    src: "/images/homepage-banner.png",
    alt: "Endeavor Children's Services — changing the world, one child at a time",
    width: 1001,
    height: 288,
  },
  childrenProgram: {
    src: "/images/children-program-2008.jpg",
    alt: "Children participating in an Endeavor program activity",
    width: 1024,
    height: 768,
  },
  childrenCommunity: {
    src: "/images/children-community.jpg",
    alt: "Children and caregivers in a community Endeavor serves",
    width: 1024,
    height: 768,
  },
  janiceWithChildren: {
    src: "/images/janice-with-children.jpg",
    alt: "Janice Neilson with children in an international program",
    width: 300,
    height: 263,
  },
  janiceNeilson: {
    src: "/images/janice-neilson.jpg",
    alt: "Janice Secord Neilson, Executive Director of Endeavor Children's Services",
    width: 1035,
    height: 723,
  },
  iamwhoMission: {
    src: "/images/iamwho-mission.jpg",
    alt: "I Am Who? program — creative activities for children's emotional well-being",
    width: 886,
    height: 487,
  },
  iamwhoBookCover: {
    src: "/images/iamwho-book-cover.jpg",
    alt: "I Am Who? book cover — a therapeutic life book for children",
    width: 260,
    height: 300,
  },
  scottNeilson: {
    src: "/images/scott-neilson.jpg",
    alt: "Scott Neilson, Board Chair of Endeavor Children's Services",
    width: 280,
    height: 275,
  },
  carolynGilman: {
    src: "/images/carolyn-gilman.jpg",
    alt: "Carolyn Gilman, Board Member of Endeavor Children's Services",
    width: 200,
    height: 234,
  },
  laurelShelton: {
    src: "/images/laurel-shelton.jpg",
    alt: "Laurel Shelton, Board Member of Endeavor Children's Services",
    width: 200,
    height: 255,
  },
} as const;

export type SiteImageKey = keyof typeof siteImages;
