export type FormaCategory = "backpacks" | "wallets" | "travel" | "everyday";

export type FormaProduct = {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  category: FormaCategory;
  featured?: boolean;
  limited?: boolean;
  colors: { name: string; hex: string }[];
  sizes: string[];
  images: { src: string; alt: string }[];
  benefits: string[];
};

export const formaCategories: { id: FormaCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "backpacks", label: "Backpacks" },
  { id: "wallets", label: "Wallets" },
  { id: "travel", label: "Travel" },
  { id: "everyday", label: "Everyday" },
];

export const formaProducts: FormaProduct[] = [
  {
    id: "everyday-backpack",
    slug: "everyday-backpack",
    name: "FORMA Everyday Backpack",
    description: "Minimal waterproof backpack designed for work and travel.",
    longDescription:
      "A streamlined everyday pack built for commuting, travel days and focused work. Weather-resistant shell, padded laptop sleeve and quiet hardware — designed to disappear into your routine.",
    price: 180,
    rating: 4.9,
    reviewCount: 128,
    category: "backpacks",
    featured: true,
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Stone", hex: "#A8A29E" },
      { name: "Olive", hex: "#6B705C" },
    ],
    sizes: ["20L", "25L"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
        alt: "FORMA Everyday Backpack in black",
      },
      {
        src: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1200&q=80",
        alt: "Backpack detail with straps and zipper",
      },
      {
        src: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1200&q=80",
        alt: "Backpack in a lifestyle travel setting",
      },
    ],
    benefits: [
      "Weather-resistant recycled nylon shell",
      "Padded 15\" laptop sleeve",
      "Quiet magnetic closures",
      "Lifetime repair programme",
    ],
  },
  {
    id: "leather-wallet",
    slug: "leather-wallet",
    name: "FORMA Leather Wallet",
    description: "Slim handcrafted wallet with premium leather.",
    longDescription:
      "A slim bifold that holds what you need and nothing more. Vegetable-tanned leather that softens with use, precise stitching and a silhouette that stays flat in the pocket.",
    price: 75,
    rating: 4.8,
    reviewCount: 214,
    category: "wallets",
    featured: true,
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Cognac", hex: "#8B5E3C" },
      { name: "Olive", hex: "#6B705C" },
    ],
    sizes: ["One size"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=1200&q=80",
        alt: "FORMA Leather Wallet on a clean surface",
      },
      {
        src: "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?auto=format&fit=crop&w=1200&q=80",
        alt: "Close-up of leather wallet stitching",
      },
      {
        src: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?auto=format&fit=crop&w=1200&q=80",
        alt: "Wallet with cards and everyday carry items",
      },
    ],
    benefits: [
      "Vegetable-tanned full-grain leather",
      "RFID-blocking lining",
      "Holds 6–8 cards comfortably",
      "Ages with a natural patina",
    ],
  },
  {
    id: "travel-organiser",
    slug: "travel-organiser",
    name: "FORMA Travel Organiser",
    description: "Smart organisation system for modern travellers.",
    longDescription:
      "A modular organiser for cables, documents and daily tools. Structured compartments keep everything visible and accessible — whether you are boarding a flight or clearing a desk.",
    price: 95,
    rating: 4.7,
    reviewCount: 89,
    category: "travel",
    featured: true,
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Stone", hex: "#A8A29E" },
    ],
    sizes: ["Standard", "Compact"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80",
        alt: "FORMA Travel Organiser with accessories",
      },
      {
        src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
        alt: "Travel organiser packed for a trip",
      },
      {
        src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
        alt: "Minimal travel essentials laid out neatly",
      },
    ],
    benefits: [
      "Modular elastic cable loops",
      "Document sleeve for passport & boarding pass",
      "Water-resistant lining",
      "Fits in most personal-item bags",
    ],
  },
  {
    id: "day-tote",
    slug: "day-tote",
    name: "FORMA Day Tote",
    description: "Structured tote for workdays and weekends.",
    longDescription:
      "A clean, structured tote with a reinforced base and discreet laptop pocket. Built for markets, meetings and everything between.",
    price: 140,
    rating: 4.6,
    reviewCount: 64,
    category: "everyday",
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Stone", hex: "#A8A29E" },
      { name: "Olive", hex: "#6B705C" },
    ],
    sizes: ["One size"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=1200&q=80",
        alt: "FORMA Day Tote standing upright",
      },
      {
        src: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
        alt: "Tote bag carried in an urban setting",
      },
    ],
    benefits: [
      "Structured silhouette that stands open",
      "Interior laptop sleeve",
      "Durable cotton-canvas blend",
      "Magnetic top closure",
    ],
  },
  {
    id: "cable-pouch",
    slug: "cable-pouch",
    name: "FORMA Cable Pouch",
    description: "Compact pouch for chargers and small essentials.",
    longDescription:
      "A small, rigid-soft pouch that keeps cables untangled and easy to find. Ideal for desk drawers, backpack pockets and weekend bags.",
    price: 45,
    rating: 4.8,
    reviewCount: 156,
    category: "everyday",
    colors: [
      { name: "Black", hex: "#111111" },
      { name: "Olive", hex: "#6B705C" },
    ],
    sizes: ["One size"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80",
        alt: "Compact cable pouch with tech accessories",
      },
      {
        src: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1200&q=80",
        alt: "Everyday carry pouch on a desk",
      },
    ],
    benefits: [
      "Soft structure that holds shape",
      "Interior mesh pocket",
      "YKK zipper",
      "Fits chargers, earbuds and keys",
    ],
  },
  {
    id: "limited-sling",
    slug: "limited-sling",
    name: "FORMA Limited Sling",
    description: "Seasonal sling in muted olive — limited run.",
    longDescription:
      "A compact crossbody for days when a backpack is too much. Released in a limited olive run with tonal hardware and a quick-access phone pocket.",
    price: 120,
    compareAt: 145,
    rating: 4.9,
    reviewCount: 42,
    category: "travel",
    limited: true,
    colors: [{ name: "Olive", hex: "#6B705C" }],
    sizes: ["One size"],
    images: [
      {
        src: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=1200&q=80",
        alt: "FORMA Limited Sling in olive",
      },
      {
        src: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=1200&q=80",
        alt: "Sling bag worn across the body",
      },
    ],
    benefits: [
      "Limited seasonal colourway",
      "Adjustable crossbody strap",
      "Quick-access phone pocket",
      "Water-resistant shell",
    ],
  },
];

export const formaNav = [
  { label: "Shop", href: "/work/forma-studio/shop" },
  { label: "About", href: "/work/forma-studio#story" },
  { label: "Reviews", href: "/work/forma-studio#reviews" },
];

export const formaWhyUs = [
  {
    title: "Premium materials",
    description:
      "Full-grain leather, recycled nylon and hardware chosen for feel, strength and quiet longevity.",
  },
  {
    title: "Designed to last",
    description:
      "Timeless silhouettes and repairable construction — built for years of daily use, not seasons.",
  },
  {
    title: "Sustainable production",
    description:
      "Smaller runs, responsible mills and packaging designed to minimise waste without compromising protection.",
  },
  {
    title: "Worldwide shipping",
    description:
      "Tracked delivery to most countries, with free shipping on orders over £100 within the UK.",
  },
  {
    title: "Easy returns",
    description:
      "30-day returns on unused items. If it is not right, send it back — no complicated process.",
  },
];

export const formaReviews = [
  {
    name: "Marcus Chen",
    role: "Product designer",
    rating: 5,
    quote:
      "The Everyday Backpack replaced three bags I owned. Clean, tough and somehow still understated.",
  },
  {
    name: "Elena Rossi",
    role: "Consultant",
    rating: 5,
    quote:
      "FORMA feels like Apple for carry goods — every detail is considered, nothing is loud.",
  },
  {
    name: "Tom Bradley",
    role: "Photographer",
    rating: 5,
    quote:
      "The travel organiser finally ended my cable chaos. Worth every pound for airport days alone.",
  },
];

export const formaCommunity = [
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    alt: "Urban lifestyle with everyday carry",
  },
  {
    src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
    alt: "Travel journey on the road",
  },
  {
    src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    alt: "Minimal workspace setup",
  },
  {
    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    alt: "Professional daily routine",
  },
  {
    src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80",
    alt: "City travel with luggage",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    alt: "Creative desk with essentials",
  },
];

export const formaImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=80",
    alt: "Minimal lifestyle products arranged in a bright studio",
  },
  story: {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
    alt: "Craftsperson working with premium materials",
  },
};

export function getProductBySlug(slug: string) {
  return formaProducts.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  return formaProducts.filter((p) => p.featured);
}

export function getRelatedProducts(slug: string, limit = 3) {
  const current = getProductBySlug(slug);
  if (!current) return formaProducts.slice(0, limit);
  return formaProducts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      if (a.category === current.category && b.category !== current.category)
        return -1;
      if (b.category === current.category && a.category !== current.category)
        return 1;
      return 0;
    })
    .slice(0, limit);
}

export function formatPrice(amount: number) {
  return `£${amount.toFixed(amount % 1 === 0 ? 0 : 2)}`;
}
