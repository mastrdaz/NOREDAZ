export type IconName =
  | "people"
  | "spark"
  | "progress"
  | "shield"
  | "calendar"
  | "server"
  | "grid"
  | "arrow";
export type Solution = {
  id: string;
  title: string;
  category: string;
  description: string;
  detail: string;
  icon: IconName;
  href: string;
};

// Public copy and replaceable launch details live here. A null URL never becomes a fake link.
export const site = {
  name: "NOIRDAZ INDUSTRIES",
  brand: "NOIRDAZ",
  descriptor: "INDUSTRIES",
  tagline: "Real possibilities. Lasting impact.",
  description:
    "Noirdaz Industries builds practical software, services, and business solutions that help people and organizations work smarter, operate stronger, and move forward.",
  domainDirection: "www.noirdaz.com", // Intended direction only; ownership is not verified.
  nav: [
    { label: "Products", href: "/products/" },
    { label: "Services", href: "/services/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  contact: {
    email: null as string | null,
    phone: null as string | null,
    address: null as string | null,
    notice:
      "Contact details are being finalized. This preview form is not connected and does not send or save messages.",
  },
  socials: [
    { label: "LinkedIn", href: null as string | null },
    { label: "Instagram", href: null as string | null },
  ],
  legal: [
    { label: "Privacy", href: "/privacy/" },
    { label: "Terms", href: "/terms/" },
  ],
  hero: {
    eyebrow: "PEOPLE. IDEAS. PROGRESS.",
    title: "Real possibilities for what’s next.",
    lead: "Practical software. Thoughtful services. A stronger way forward.",
    primary: "Explore Our Solutions",
    secondary: "Get in Touch",
  },
  cta: {
    eyebrow: "A BRIGHTER TOMORROW BUILDS HERE",
    title: "Let’s build what’s next.",
    description:
      "A practical idea. An everyday challenge. A new possibility. It starts with a conversation.",
    label: "Get in Touch",
    href: "/contact/",
  },
};

export const values: { title: string; description: string; icon: IconName }[] =
  [
    {
      title: "People Focused",
      description:
        "Useful solutions start with understanding the people who use them.",
      icon: "people",
    },
    {
      title: "Innovation Driven",
      description: "Fresh thinking, grounded in the problems that matter.",
      icon: "spark",
    },
    {
      title: "Built for Progress",
      description: "Practical steps today. Room to grow tomorrow.",
      icon: "progress",
    },
    {
      title: "Trusted Partner",
      description:
        "Clear communication and a thoughtful approach to working together.",
      icon: "shield",
    },
  ];

export const products: Solution[] = [
  {
    id: "sync-coverage",
    title: "Sync Coverage",
    category: "WORKFORCE SOFTWARE",
    description:
      "Workforce scheduling and coverage management, with people at the center.",
    detail:
      "A clearer way to approach schedules, staffing needs, and day-to-day coverage. Product details and availability will be shared here as they are finalized.",
    icon: "calendar",
    href: "/products/#sync-coverage",
  },
  {
    id: "operational-tools",
    title: "Operational Tools",
    category: "BUSINESS SOFTWARE",
    description: "Practical software for everyday operational problems.",
    detail:
      "Focused tools for organizing work, making information useful, and simplifying everyday processes. Specific products and availability are still being developed.",
    icon: "grid",
    href: "/products/#operational-tools",
  },
];

export const services: Solution[] = [
  {
    id: "managed-services",
    title: "Managed Services",
    category: "DIGITAL SERVICES",
    description:
      "Website hosting, maintenance, digital infrastructure, and ongoing support.",
    detail:
      "A considered approach to the digital foundations small organizations and businesses rely on. Scope, support arrangements, and pricing are agreed for each project.",
    icon: "server",
    href: "/services/#managed-services",
  },
  {
    id: "website-care",
    title: "Website Care",
    category: "WEBSITES & MAINTENANCE",
    description: "A useful home for your business, with room to evolve.",
    detail:
      "Website planning, updates, and ongoing maintenance shaped around the needs of your organization. Specific services are confirmed through a conversation.",
    icon: "grid",
    href: "/services/#website-care",
  },
  {
    id: "digital-foundations",
    title: "Digital Foundations",
    category: "INFRASTRUCTURE & SUPPORT",
    description:
      "Thoughtful digital systems for the way your organization works.",
    detail:
      "Help make sense of your hosting, digital workflows, and support needs. Service availability and technical requirements are assessed before any commitment.",
    icon: "shield",
    href: "/services/#digital-foundations",
  },
];

export const featuredSolutions = [products[0], services[0], products[1]];
