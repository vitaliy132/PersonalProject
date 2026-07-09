export {
  type FormaCategory,
  type FormaProduct,
  formaCategories,
  formaProducts,
  getProductBySlug,
  getFeaturedProducts,
  getRelatedProducts,
  formatPrice,
} from "./forma/products";

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
