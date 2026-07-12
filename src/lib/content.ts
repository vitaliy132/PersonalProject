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
    slug: "arden-wealth",
    title: "Arden Wealth",
    category: "Wealth Management",
    role: "Design & build",
    description:
      "Private wealth platform — cinematic GSAP storytelling, portfolio dashboard, planning tools and advisory flow.",
    brief:
      "A private-client digital presence as considered as the advice itself — cinematic marketing, portfolio tools, and advisory flow.",
    challenge:
      "Wealth platforms often look interchangeable: dense dashboards, stock photography, and language that talks past the client. Arden needed a presence that felt private and considered — equal parts brand story and product — without sliding into generic fintech tropes.\n\nThe brief asked for more than a brochure site: a marketing narrative that could hand off into real client tools, from portfolio views to goal planning and advisory booking.",
    approach: [
      {
        title: "Frame the brand first",
        body: "Lead with atmosphere and clarity — architecture, light, and restrained motion — so the first impression signals trust before any product UI appears.",
      },
      {
        title: "Build the product surface",
        body: "Design portfolio dashboard and planning tools as calm, readable interfaces that feel continuous with the marketing story rather than bolted on.",
      },
      {
        title: "Close with advisory flow",
        body: "Shape the booking path so high-intent visitors can move from narrative to conversation without friction or visual drop-off.",
      },
    ],
    outcomes: [
      "Cinematic marketing site with GSAP-led storytelling",
      "Portfolio dashboard and goal-planning tools in one experience",
      "Advisory booking flow that continues the brand language",
    ],
    closing:
      "Explore the live Arden Wealth experience — marketing story through to client tools.",
    deliverables: [
      "Brand marketing site",
      "Portfolio dashboard",
      "Planning tools",
      "Advisory booking flow",
      "Motion & storytelling",
    ],
    tech: ["Next.js", "GSAP", "Product UX"],
    href: "/case-studies/arden-wealth",
    demoHref: "/work/arden-wealth",
    tone: "oak" as const,
    image: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
      alt: "Arden Wealth website — full-bleed architectural hero",
    },
  },
  {
    id: "fashion",
    slug: "forma-studio",
    title: "E-Commerce Fashion Brand",
    category: "Fashion / Retail",
    role: "Design & build",
    description:
      "Premium DTC storefront with product storytelling, wishlist and modern checkout UX.",
    brief:
      "A premium DTC storefront that puts product storytelling first — editorial shop, wishlist, and checkout tuned for quiet luxury.",
    challenge:
      "Premium fashion brands lose the room when the storefront feels like a template: crowded grids, loud promos, and checkout that breaks the editorial mood. FORMA Studio needed a direct-to-consumer experience that stayed quiet and intentional from first look to purchase.\n\nConversion still mattered — wishlist, cart, and checkout had to feel modern and clear without undercutting the brand’s restraint.",
    approach: [
      {
        title: "Lead with editorial product",
        body: "Structure the homepage and shop around storytelling and imagery so product discovery feels curated, not catalogue-driven.",
      },
      {
        title: "Design the path to purchase",
        body: "Build PDP, wishlist, and cart as calm, high-clarity surfaces that keep attention on the piece, not on UI chrome.",
      },
      {
        title: "Finish the checkout cleanly",
        body: "Shape a modern checkout flow that converts without introducing visual noise or breaking the quiet-luxury tone.",
      },
    ],
    outcomes: [
      "Full DTC storefront with editorial homepage and shop",
      "Product detail, wishlist, and cart tuned for clarity",
      "Checkout UX that protects brand feel while converting",
    ],
    closing:
      "Open the live FORMA Studio storefront and walk the full retail path.",
    deliverables: [
      "DTC storefront",
      "Product storytelling",
      "Shop & PDP",
      "Wishlist & cart",
      "Checkout UX",
    ],
    tech: ["Next.js", "E-Commerce", "CRO"],
    href: "/case-studies/forma-studio",
    demoHref: "/work/forma-studio",
    tone: "forma" as const,
    image: {
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      alt: "FORMA Studio website — minimal lifestyle retail hero",
    },
  },
  {
    id: "restaurant",
    slug: "brick-salt",
    title: "BRICK & SALT",
    category: "Hospitality",
    role: "Design & build",
    description:
      "Industrial-elegant small plates restaurant — cinematic scroll, seasonal menu and reservation flow.",
    brief:
      "An industrial-elegant restaurant site — cinematic, menu-led, and built to turn atmosphere into bookings.",
    challenge:
      "Hospitality sites often split the job: pretty photos on one page, a buried booking widget on another. BRICK & SALT needed a presence that matched the room — industrial, warm, considered — and made reserving feel like a natural continuation of the story.\n\nSeasonal menus, drinks, and gallery had to carry atmosphere without slowing the path to a table.",
    approach: [
      {
        title: "Match the room on screen",
        body: "Use cinematic scroll, material texture, and plated imagery so the site feels continuous with the dining room before a single CTA appears.",
      },
      {
        title: "Lead with menu and season",
        body: "Structure food, drinks, and seasonal storytelling so guests understand the offer quickly and want to come in.",
      },
      {
        title: "Convert with reservation",
        body: "Place a clear booking flow at the close of the narrative so atmosphere turns into visits without a hard stop.",
      },
    ],
    outcomes: [
      "Brand hospitality site with cinematic scroll and atmosphere",
      "Seasonal menu, drinks, and gallery as one narrative",
      "Reservation flow designed to convert intent into bookings",
    ],
    closing:
      "Experience the live BRICK & SALT site — from room to reservation.",
    deliverables: [
      "Brand hospitality site",
      "Seasonal menu",
      "Gallery & atmosphere",
      "Reservation flow",
      "Location & visit cues",
    ],
    tech: ["Next.js", "UX", "Booking Flow"],
    href: "/case-studies/brick-salt",
    demoHref: "/work/brick-salt",
    tone: "brick" as const,
    image: {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
      alt: "BRICK & SALT website — plated dishes on a warmly lit restaurant table",
    },
  },
  {
    id: "hospitality",
    slug: "savoy-sip",
    title: "Savoy Sip",
    category: "Coffee / Café",
    role: "Design & build",
    description:
      "Specialty Mayfair café — cinematic GSAP scroll, menu storytelling and visit-led conversion.",
    brief:
      "A specialty café presence as crafted as the coffee — cinematic scroll, clear menu story, and a visit-led close.",
    challenge:
      "Café brands often flatten into menu lists and Instagram embeds. Savoy Sip needed a Mayfair specialty presence that felt crafted — craft, origin, and space — while still pushing guests toward a visit.\n\nThe site had to read as brand first, then guide people to the door without looking like a generic booking funnel.",
    approach: [
      {
        title: "Tell craft and origin",
        body: "Build a scroll narrative around coffee craft, origin, and space so the brand feels as intentional as the cup.",
      },
      {
        title: "Make the menu readable",
        body: "Present offerings with clear hierarchy and storytelling so guests know what to expect before they arrive.",
      },
      {
        title: "Close on the visit",
        body: "End with location and visit cues that convert curiosity into footfall — not a detached contact dump.",
      },
    ],
    outcomes: [
      "Brand café site with cinematic GSAP storytelling",
      "Menu, craft, and origin woven into one narrative",
      "Visit-led close that points guests to the door",
    ],
    closing:
      "Step through the live Savoy Sip experience — craft to visit.",
    deliverables: [
      "Brand café site",
      "Menu storytelling",
      "Craft & origin narrative",
      "Space photography",
      "Visit-led conversion",
    ],
    tech: ["Next.js", "GSAP", "Brand"],
    href: "/case-studies/savoy-sip",
    demoHref: "/work/savoy-sip",
    tone: "stone" as const,
    image: {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80",
      alt: "Savoy Sip website — ceramic coffee cup in soft window light",
    },
  },
] as const;

export type CaseStudy = (typeof caseStudies)[number];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug: string): CaseStudy {
  const index = caseStudies.findIndex((study) => study.slug === slug);
  const nextIndex = index < 0 ? 0 : (index + 1) % caseStudies.length;
  return caseStudies[nextIndex];
}

export const pricing = [
  {
    id: "launch",
    name: "Launch",
    price: "£600",
    description: "A professional site for small businesses ready to go live.",
    features: [
      "Custom website design",
      "Responsive design",
      "Up to 5 pages",
      "Contact forms",
      "Basic SEO setup",
      "Performance optimisation",
      "E-commerce optional",
      "14 days post-launch support",
      "Delivery in 2–3 weeks",
    ],
    highlighted: false,
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    id: "growth",
    name: "Growth",
    price: "£1,200",
    description: "For businesses that need CMS, motion, and analytics.",
    features: [
      "Custom website design",
      "Responsive design",
      "Up to 10 pages",
      "Contact forms",
      "Basic SEO setup",
      "Performance optimisation",
      "CMS integration",
      "Advanced animations",
      "Analytics setup",
      "E-commerce optional",
      "Custom integrations optional",
      "30 days post-launch support",
      "Delivery in 3–5 weeks",
    ],
    highlighted: true,
    cta: { label: "Enquire", href: "#contact" },
  },
  {
    id: "premium",
    name: "Premium",
    price: "£2,500+",
    description: "A full digital build with strategy, commerce, and support.",
    features: [
      "Custom website design",
      "Responsive design",
      "Custom page count",
      "Contact forms",
      "Basic SEO setup",
      "Performance optimisation",
      "CMS integration",
      "Advanced animations",
      "Brand strategy workshop",
      "E-commerce included",
      "Custom integrations",
      "Analytics setup",
      "90 days post-launch support",
      "Custom delivery timeline",
    ],
    highlighted: false,
    cta: { label: "Enquire", href: "#contact" },
  },
];

export const pricingAddOns = [
  { service: "Visual Identity", price: "£500" },
  { service: "Brand Strategy", price: "£400" },
  { service: "Logo Design", price: "£250" },
  { service: "Additional Page", price: "£75" },
  { service: "E-Commerce Integration", price: "£800" },
  { service: "Booking System Integration", price: "£300" },
  { service: "SEO Audit & Optimisation", price: "£300" },
  { service: "Digital Marketing", price: "£500/mo" },
  { service: "Google Analytics & Search Console Setup", price: "£100" },
  { service: "Copywriting", price: "£200" },
  { service: "Website Maintenance & Updates", price: "£75/mo" },
  { service: "Priority Support", price: "£150/mo" },
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
