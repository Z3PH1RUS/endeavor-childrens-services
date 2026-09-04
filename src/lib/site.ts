export const siteConfig = {
  name: "Endeavor Children's Services",
  shortName: "Endeavor",
  tagline: "Children's Services",
  description:
    "Endeavor Children's Services brings hope and opportunity to orphans and vulnerable children around the world through innovative programs including I Am Who?",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://z3ph1rus.github.io/endeavor-childrens-services",
  phone: "360-888-3910",
  phoneHref: "tel:+13608883910",
  facebook: "https://www.facebook.com/IAMWHOCHILDREN/",
  facebookHandle: "IAMWHOCHILDREN",
  paypalDonate:
    "https://www.paypal.com/donate?business=4K8UHJPABKAJL",
  founded: 2011,
  quote: "Every child is born with the right to be loved, wanted, and nurtured.",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/board", label: "Board" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
] as const;

export const programLinks = [
  { href: "/programs", label: "I Am Who? Overview" },
  { href: "/programs/mission", label: "Mission" },
  { href: "/programs/book", label: "The Book" },
  { href: "/programs/activities", label: "Activities" },
] as const;

export const impactStats = [
  {
    value: "89% → 5%",
    label: "Reduction in depression among participating children",
  },
  {
    value: "9% → 90%",
    label: "Increase in self-esteem",
  },
  {
    value: "400+",
    label: "Children received psycho-social support alongside material aid",
  },
] as const;

export const programActivities = [
  "My Big Self",
  "My Heritage",
  "My Place in the World",
  "My Family Tree",
  "My Life as a Puzzle",
  "My Special Person – Part 1",
  "My Special Person – Part 2",
  "My Memories",
  "My Goals, Hopes and Dreams",
  "My Paintings from the Heart",
  "My Thoughts Have Wings",
] as const;

export const boardMembers = [
  {
    role: "Board Chair",
    name: "Scott Neilson",
    image: {
      src: "/images/scott-neilson.jpg",
      alt: "Scott Neilson, Board Chair of Endeavor Children's Services",
      width: 280,
      height: 275,
    },
    bio: [
      "Scott received a bachelor's degree in political science from the University of Washington, and received his law degree from Gonzaga University School of Law. From 1973 to 1984, Neilson served as Assistant Attorney General for Washington State. From 1984 to 1993, Neilson worked in private practice. In addition, Neilson served as the sole guardian ad litem for children in foster care in Thurston County.",
      "In 1993, Neilson was appointed Superior Court Commissioner. Since then, he has presided over hundreds of criminal and civil juvenile cases, including dependency (child abuse and neglect), termination of parental rights, youth at risk, children in need of services, and truancy actions.",
      "In addition to his work, Neilson has been an active volunteer in his community. In 1980, he was a founding board member of the World Association for Children and Parents, a nonprofit child welfare agency working in four states and 10 nations, which has now placed more than 8,000 children into adoptive homes and provided child welfare services to more than 200,000 children.",
      "For the Habitat for Humanity International Global Village Project, he recruited and led teams to build homes for low-income families in Nicaragua and Botswana in 1999 and 2001.",
      "After leaving the Thurston County bench, Neilson was the legal and program advisor to the Francois-Xavier Bagnoud Foundation, a Swiss foundation, working four months a year in rural villages of China to improve the lives of children affected by HIV/AIDS. This demonstration project worked in collaboration with UNICEF and Harvard University. Neilson also provided training on the rights of children to government officials, medical providers, and social workers in China, Thailand, Switzerland, Rwanda and India.",
    ],
  },
  {
    role: "Board Member",
    name: "Carolyn Gilman",
    image: {
      src: "/images/carolyn-gilman.jpg",
      alt: "Carolyn Gilman, Board Member of Endeavor Children's Services",
      width: 200,
      height: 234,
    },
    bio: [
      "Carolyn began her career working in children's television at Seattle's ABC-TV affiliate, winning an Emmy award for writing from the National Academy of Television Arts and Sciences.",
      "She has also worked for 18 years in early childhood education, both as a teacher at the University of Washington's Children's Center and at Pacific First Montessori in downtown Seattle.",
      "Carolyn grew up in northern Minnesota and graduated from the University of Minnesota before moving to the Northwest.",
    ],
  },
  {
    role: "Board Member",
    name: "Laurel Shelton",
    image: {
      src: "/images/laurel-shelton.jpg",
      alt: "Laurel Shelton, Board Member of Endeavor Children's Services",
      width: 200,
      height: 255,
    },
    bio: [
      "Laurel Shelton is a talented artist who, after studying elementary education, has pursued all manner of the arts for a lifetime. A small business owner for 15 years, Laurel worked as a professional seamstress in the field of interior design and historic restoration.",
      "Her volunteer work included public school art instruction, art classes at homes for vulnerable children, and pro bono sewing for the Spokane Historical Society restoration program.",
      'When joining the Board of Directors, Laurel explained her support of the I Am Who? Program: "Children need art. A lifetime of learning and creating with my own hands, as well as watching children do the same, has made it abundantly clear that this self expression frees the soul, fosters feelings of well being and self acceptance, and has every potential for magical self healing."',
    ],
  },
] as const;
