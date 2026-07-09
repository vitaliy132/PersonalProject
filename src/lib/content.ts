export const agency = {
  name: "Northline Digital",
  tagline: "UK digital studio",
  email: "hello@northlinedigital.co.uk",
  linkedIn: "#",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  brand: "Northline Digital",
  headline: "We build digital experiences that grow businesses.",
  subheadline:
    "Web design, branding and digital marketing strategies designed to attract customers, increase conversions and help brands grow online.",
  primaryCta: { label: "Book a free consultation", href: "#contact" },
  secondaryCta: { label: "View our work", href: "#work" },
  trust: ["Modern websites", "Performance focused", "Results driven"],
};

export const services = [
  {
    id: "web",
    title: "Web design & development",
    description:
      "High-performance websites built to convert visitors into customers — crafted for speed, clarity and growth.",
    icon: "monitor" as const,
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "Distinctive brand identities that make your business memorable and consistent across every touchpoint.",
    icon: "palette" as const,
  },
  {
    id: "marketing",
    title: "Digital marketing",
    description:
      "SEO, paid media and growth campaigns focused on attracting the right customers and delivering ROI.",
    icon: "megaphone" as const,
  },
];

export const caseStudies = [
  {
    id: "coffee",
    title: "North & Oak Coffee",
    industry: "Specialty coffee",
    summary:
      "Premium specialty coffee brand site with editorial storytelling, product collection and café experience.",
    problem:
      "A growing specialty coffee brand relied on Instagram alone. Their outdated site struggled to convert interest into orders and ranked poorly for local search.",
    solution:
      "We designed a conversion-led landing experience with online ordering, refined brand storytelling, and a technical SEO foundation built for discovery.",
    results: [
      { label: "Organic traffic", value: "+120%" },
      { label: "Online orders", value: "+68%" },
      { label: "Page load", value: "1.2s" },
    ],
    tags: ["Website", "SEO", "E-commerce"],
    href: "/work/north-and-oak",
  },
  {
    id: "restaurant",
    title: "Local Restaurant Growth Campaign",
    industry: "Hospitality",
    summary: "Website redesign, Google Ads, and increased enquiries.",
    problem:
      "A neighbourhood restaurant had strong reviews but weak digital presence. Booking enquiries were inconsistent and paid ads were underperforming.",
    solution:
      "We rebuilt their website around reservations, launched tightly targeted Google Ads, and aligned messaging with peak dining demand.",
    results: [
      { label: "Enquiries", value: "+85%" },
      { label: "Cost per acquisition", value: "-30%" },
      { label: "Ad ROAS", value: "4.2x" },
    ],
    tags: ["Website", "Google Ads", "CRO"],
  },
  {
    id: "ecommerce",
    title: "FORMA Studio",
    industry: "Retail",
    summary:
      "Premium DTC storefront with product storytelling, conversion-focused PDP and modern checkout UX.",
    problem:
      "An online retailer had solid traffic but a leaky funnel. Product pages were slow, checkout friction was high, and paid spend was inefficient.",
    solution:
      "We rebuilt the storefront in Next.js, streamlined product and checkout flows, and iterated on CRO tests informed by analytics.",
    results: [
      { label: "Conversion rate", value: "+45%" },
      { label: "Revenue", value: "+62%" },
      { label: "Bounce rate", value: "-28%" },
    ],
    tags: ["Next.js", "CRO", "Performance"],
    href: "/work/forma-studio",
  },
];

export const whyUs = [
  {
    title: "Business-focused approach",
    description:
      "Every recommendation ties back to customers, revenue, and measurable growth — not vanity metrics.",
  },
  {
    title: "Modern technology",
    description:
      "We build on fast, maintainable stacks so your site stays sharp long after launch.",
  },
  {
    title: "Marketing expertise",
    description:
      "Design, SEO and paid media work together as one growth system, not disconnected services.",
  },
  {
    title: "Fast performance",
    description:
      "Speed is part of the product. We obsess over Core Web Vitals because they affect conversions.",
  },
  {
    title: "Transparent communication",
    description:
      "Clear timelines, honest reporting, and no jargon walls — you always know what is happening.",
  },
  {
    title: "Long-term partnership",
    description:
      "Launch is the start. We stay close to refine, optimise and scale what works.",
  },
];

export const process = [
  {
    step: "01",
    title: "Discovery",
    description: "Understand your business goals, audience and competitive landscape.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Create a digital growth plan with clear priorities and success metrics.",
  },
  {
    step: "03",
    title: "Build",
    description: "Design and develop your solution with performance and conversion in mind.",
  },
  {
    step: "04",
    title: "Launch & Optimise",
    description: "Track performance, learn from data and continuously improve results.",
  },
];

export const testimonials = [
  {
    quote:
      "Northline rebuilt our site and the difference was immediate. Enquiries are steadier, the brand feels sharper, and we finally have a digital presence that matches the quality of our product.",
    name: "Sarah Mitchell",
    role: "Founder",
    company: "Harbour Roast Co.",
    industry: "Specialty coffee",
  },
  {
    quote:
      "They treated our Google Ads like a proper growth channel, not a set-and-forget spend. Within weeks we were booking more tables at a lower cost per enquiry.",
    name: "James Okafor",
    role: "Owner",
    company: "The Copper Pan",
    industry: "Restaurant",
  },
  {
    quote:
      "Clear thinking, excellent execution. The new Next.js storefront is faster, cleaner, and converting far better than what we had before. Feels like a genuine partnership.",
    name: "Emily Chen",
    role: "Marketing Lead",
    company: "Lumen Home",
    industry: "E-commerce",
  },
];

export const pricing = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Website essentials",
    price: "From £30,000",
    description:
      "A polished, high-performance website for businesses ready to look the part online.",
    features: [
      "Custom responsive website",
      "Conversion-focused design",
      "On-page SEO foundations",
      "Performance optimisation",
      "Launch support",
    ],
    highlighted: false,
    cta: { label: "Start with Starter", href: "#contact" },
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Website + branding + marketing",
    price: "From £60,000",
    description:
      "The complete foundation for attracting and converting customers online.",
    features: [
      "Everything in Starter",
      "Brand identity & visual system",
      "SEO strategy & implementation",
      "Google or Meta Ads setup",
      "Analytics & conversion tracking",
    ],
    highlighted: true,
    cta: { label: "Choose Growth", href: "#contact" },
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Full digital growth package",
    price: "From £100,000",
    description:
      "End-to-end brand, website and marketing for businesses ready to invest in sustained results.",
    features: [
      "Everything in Growth",
      "Full-funnel digital strategy",
      "Ongoing CRO programme",
      "Multi-channel paid media",
      "SiteCare partnership",
    ],
    highlighted: false,
    cta: { label: "Talk about Scale", href: "#contact" },
  },
];

export const faqs = [
  {
    question: "How much does web design and development typically cost?",
    answer:
      "The majority of our projects sit between £30k and £150k, but project costs will depend on the final scope of work and vary from project to project. We generally prefer to agree a fixed cost with agreed milestone payments.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "A web design and build project can last around 1-2 weeks, whereas brand-into-website-and-marketing can take 6 months or more. There are always ways to consider business objectives (such as phased launches) so even if your timescales don’t work with this, it’s always worth reaching out. Expect clear milestones and a timeline that respects your urgency, without ever skimping on the quality that makes your site distinctly you.",
  },
  {
    question: "Can your creative agency accommodate tight deadlines?",
    answer:
      "Sure thing! We’re ready to mobilise our design and development teams, prioritising the essentials to turn your dream site from a fast-approaching deadline into a reality. Flexibility and focus are our middle names, ensuring your project crosses the finish line.",
  },
  {
    question: "What ongoing support and maintenance do you offer post-launch?",
    answer:
      "SiteCare is a huge part of what we offer here at Northline Digital. Think of us as the guardians of your digital home, offering a suite of post-launch support and maintenance services to ensure your website continues to thrive. From regular updates to performance tuning, we’re on hand to keep your site smooth, secure, and evolving along with your brand.",
  },
  {
    question: "How do you handle revisions and feedback during the design process?",
    answer:
      "Your feedback is the secret sauce in our design process. We welcome your thoughts, tweaks, and “aha” moments, incorporating them into each iteration to ensure the end product is nothing short of perfection. Our process is built on collaboration, making sure your voice is heard loud and clear at every turn.",
  },
];

export const finalCta = {
  headline: "Ready to grow your business online?",
  subheadline:
    "Tell us where you are today and where you want to be. We will map a clear path to more customers online.",
  cta: { label: "Start your project", href: "#contact" },
};
