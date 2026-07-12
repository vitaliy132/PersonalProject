export const agency = {
  name: "Northline Digital",
  location: "Leeds, UK",
  email: "hello@northlinedigital.co.uk",
  tagline: "Northern creativity. Digital experiences.",
  linkedIn: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
  twitter: "https://x.com/",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  brand: "Northline Digital",
  lineOne: "Northern creativity.",
  lineTwo: "Digital experiences built to move businesses forward.",
  cta: { label: "Start a project", href: "#contact" },
};

export const intro = {
  id: "about",
  text: "Based in Leeds, creating digital experiences from the North of England for businesses across the UK.",
  stats: [
    { value: 50, suffix: "+", label: "Projects", display: null },
    { value: 4, suffix: "+", label: "Years experience", display: null },
    {
      value: 0,
      suffix: "",
      label: "Location",
      display: "Northern based",
    },
    {
      value: 0,
      suffix: "",
      label: "Approach",
      display: "Digital first",
    },
  ] as const,
};

export const services = [
  {
    id: "visual-identity",
    title: "Visual Identity",
    description:
      "Creating memorable brands through strategy, design systems and visual language.",
  },
  {
    id: "brand-strategy",
    title: "Brand Strategy",
    description:
      "Research-driven positioning that helps businesses stand out.",
  },
  {
    id: "branding",
    title: "Branding",
    description: "Complete brand identities from logos to guidelines.",
  },
  {
    id: "web",
    title: "Web Design & Development",
    description:
      "High-performance websites built with modern technology.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "Online stores designed to convert.",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Helping brands grow through digital channels.",
  },
];

export const caseStudies = [
  {
    id: "coffee",
    title: "Specialty Coffee Brand",
    category: "Specialty Coffee",
    description:
      "Editorial brand site with product storytelling, café atmosphere and conversion-led journeys.",
    tech: ["Next.js", "Brand Design", "E-Commerce"],
    href: "/work/north-and-oak",
    tone: "oak" as const,
  },
  {
    id: "restaurant",
    title: "Luxury Restaurant",
    category: "Hospitality",
    description:
      "Reservation-focused restaurant experience with refined typography and cinematic presentation.",
    tech: ["Next.js", "UX", "Booking Flow"],
    href: "/work/the-copper-pan",
    tone: "copper" as const,
  },
  {
    id: "fashion",
    title: "E-Commerce Fashion Brand",
    category: "Fashion / Retail",
    description:
      "Premium DTC storefront with product storytelling, wishlist and modern checkout UX.",
    tech: ["Next.js", "E-Commerce", "CRO"],
    href: "/work/forma-studio",
    tone: "forma" as const,
  },
  {
    id: "hospitality",
    title: "Hospitality Website",
    category: "Hospitality",
    description:
      "A calm, conversion-led digital presence for an ambitious Northern hospitality brand.",
    tech: ["Web Design", "Brand", "SEO"],
    href: null,
    tone: "stone" as const,
  },
];

export const pricing = [
  {
    id: "starter",
    name: "Starter Website",
    price: "From £600",
    description:
      "Perfect for small businesses needing a professional online presence.",
    features: [
      "Custom designed website",
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact forms",
      "2 rounds of revisions",
    ],
    highlighted: false,
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    id: "business",
    name: "Business Website",
    price: "From £1,200",
    description: "For businesses wanting a stronger digital presence.",
    features: [
      "Custom UX/UI design",
      "Up to 10 pages",
      "Advanced animations",
      "CMS integration",
      "SEO optimisation",
      "Analytics setup",
      "Performance optimisation",
    ],
    highlighted: true,
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    id: "premium",
    name: "Premium Digital Experience",
    price: "From £2,500",
    description: "For brands wanting a complete digital solution.",
    features: [
      "Brand strategy",
      "Custom design system",
      "Advanced animations",
      "E-commerce functionality",
      "Conversion optimisation",
      "Marketing integrations",
      "Ongoing support",
    ],
    highlighted: false,
    cta: { label: "Enquire", href: "#contact" },
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding your business.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Creating a clear digital direction.",
  },
  {
    step: "03",
    title: "Design",
    description: "Building the visual experience.",
  },
  {
    step: "04",
    title: "Development",
    description: "Turning ideas into high-performance websites.",
  },
  {
    step: "05",
    title: "Launch & Growth",
    description: "Optimisation and marketing.",
  },
];

export const story = {
  lines: ["Born in Leeds.", "Built for ambitious brands."],
  body: "Northline Digital combines Northern creativity with modern technology to create digital experiences that help businesses grow.",
};

export const contact = {
  headline: "Have a project in mind?",
  subheadline: "Let's build something remarkable.",
  email: "hello@northlinedigital.co.uk",
};

export const footer = {
  services: [
    "Branding",
    "Web Development",
    "E-Commerce",
    "Digital Marketing",
  ],
};
