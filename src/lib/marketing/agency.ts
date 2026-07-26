export const agency = {
  name: "Northline Digital",
  location: "Leeds, UK",
  email: "hello@northlinedigital.agency",
  tagline: "Northern creativity. Digital experiences.",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
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

export const footer = {
  services: [
    "Branding",
    "Web Development",
    "E-Commerce",
    "Digital Marketing",
  ],
};
