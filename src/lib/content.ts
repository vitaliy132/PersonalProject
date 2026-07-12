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
    id: "wealth",
    title: "Arden Wealth",
    category: "Wealth Management",
    description:
      "Private wealth platform — cinematic GSAP storytelling, portfolio dashboard, planning tools and advisory flow.",
    tech: ["Next.js", "GSAP", "Product UX"],
    href: "/work/arden-wealth",
    tone: "oak" as const,
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Arden Wealth website — full-bleed architectural hero",
    },
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
    image: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      alt: "FORMA Studio website — minimal lifestyle retail hero",
    },
  },
  {
    id: "restaurant",
    title: "BRICK & SALT",
    category: "Hospitality",
    description:
      "Industrial-elegant small plates restaurant — cinematic scroll, seasonal menu and reservation flow.",
    tech: ["Next.js", "UX", "Booking Flow"],
    href: "/work/the-copper-pan",
    tone: "copper" as const,
    image: {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
      alt: "BRICK & SALT website — plated dishes on a warmly lit restaurant table",
    },
  },
  {
    id: "hospitality",
    title: "Savoy Sip",
    category: "Coffee / Café",
    description:
      "Specialty Mayfair café — cinematic GSAP scroll, menu storytelling and visit-led conversion.",
    tech: ["Next.js", "GSAP", "Brand"],
    href: "/work/savoy-sip",
    tone: "stone" as const,
    image: {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
      alt: "Savoy Sip website — ceramic coffee cup in soft window light",
    },
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
