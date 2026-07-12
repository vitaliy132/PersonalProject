export const savoySip = {
  name: "The Savoy Sip",
  location: "London, UK",
  address: "14 Charlotte Street, Fitzrovia, London W1T 2LU",
  email: "hello@thesavoysip.co.uk",
  instagram: "https://www.instagram.com/",
  phone: "+44 20 7946 0182",
};

export const savoyNav = [
  { label: "Story", href: "#story" },
  { label: "Experience", href: "#experience" },
  { label: "Menu", href: "#menu" },
  { label: "Roastery", href: "#roastery" },
  { label: "Gallery", href: "#gallery" },
  { label: "Shop", href: "#shop" },
  { label: "Visit", href: "#location" },
] as const;

export const savoyHero = {
  eyebrow: "Specialty coffee boutique",
  lineOne: "Specialty coffee,",
  lineTwo: "crafted in London.",
  ctaPrimary: { label: "Visit The Roastery", href: "#roastery" },
  ctaSecondary: { label: "Explore Our Coffee", href: "#shop" },
  image: {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=2400&q=80",
    alt: "Barista pouring specialty coffee with steam rising from the cup",
  },
};

export const savoyStory = {
  id: "story",
  headline: "More than coffee.\nA ritual.",
  body: "The Savoy Sip brings exceptional coffee experiences to London, combining world-class beans, careful preparation and a welcoming Northern spirit. Inspired by European coffee culture, Japanese precision, and the quiet creativity of the capital.",
  image: {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1800&q=80",
    alt: "Hands cradling a ceramic cup of black coffee in soft morning light",
  },
};

export const savoyExperiences = [
  {
    id: "single-origin",
    title: "Single Origin",
    description: "Discover coffees from remarkable farms around the world.",
    image: {
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1600&q=80",
      alt: "Single origin coffee beans scattered on a stone surface",
    },
  },
  {
    id: "precision-brewing",
    title: "Precision Brewing",
    description: "Every extraction carefully measured.",
    image: {
      src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1600&q=80",
      alt: "Precision pour-over coffee being prepared at the bar",
    },
  },
  {
    id: "coffee-culture",
    title: "Coffee Culture",
    description: "A place where people slow down.",
    image: {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
      alt: "Quiet specialty coffee interior with guests at the bar",
    },
  },
] as const;

export const savoyMenu = [
  {
    id: "espresso",
    category: "Espresso",
    items: [
      { name: "Espresso", detail: "Signature blend · 18g", price: "£3.20" },
      { name: "Macchiato", detail: "A touch of milk foam", price: "£3.40" },
      { name: "Flat White", detail: "Silky microfoam", price: "£3.80" },
      { name: "Cortado", detail: "Equal parts espresso & milk", price: "£3.60" },
    ],
  },
  {
    id: "filter",
    category: "V60 & Filter",
    items: [
      {
        name: "V60 Pour Over",
        detail: "Rotating single origin",
        price: "£4.50",
      },
      {
        name: "Batch Brew",
        detail: "Daily filter of the house",
        price: "£3.40",
      },
      {
        name: "Cold Brew",
        detail: "14-hour steep · seasonal",
        price: "£4.20",
      },
    ],
  },
  {
    id: "seasonal",
    category: "Seasonal Drinks",
    items: [
      {
        name: "Yuzu Espresso Tonic",
        detail: "Bright · citrus · limited",
        price: "£4.80",
      },
      {
        name: "Hojicha Latte",
        detail: "Roasted green tea · oat",
        price: "£4.40",
      },
      {
        name: "Spiced Cascara",
        detail: "Coffee cherry · warming spices",
        price: "£4.00",
      },
    ],
  },
  {
    id: "pastries",
    category: "Pastries",
    items: [
      { name: "Butter Croissant", detail: "Baked each morning", price: "£3.50" },
      {
        name: "Almond Pain au Chocolat",
        detail: "Valrhona · toasted almond",
        price: "£4.20",
      },
      {
        name: "Olive Oil Cake",
        detail: "Citrus · sea salt",
        price: "£4.00",
      },
    ],
  },
  {
    id: "flights",
    category: "Coffee Flights",
    items: [
      {
        name: "Origin Flight",
        detail: "Three single origins · 90ml each",
        price: "£12.00",
      },
      {
        name: "Espresso Flight",
        detail: "Blend vs. single origin comparison",
        price: "£10.00",
      },
      {
        name: "Sensory Flight",
        detail: "Guided tasting with our head barista",
        price: "£18.00",
      },
    ],
  },
] as const;

export const savoyRoastery = {
  id: "roastery",
  headline: "From bean to cup.",
  intro:
    "A quiet process of selection, patience and craft — from farm partnerships to the final pour.",
  steps: [
    {
      id: "origin",
      title: "Origin",
      description:
        "We select lots for character and clarity — elevation, variety, and the hands that harvest them.",
      image: {
        src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80",
        alt: "Coffee cherries ripening on a hillside farm",
      },
    },
    {
      id: "processing",
      title: "Processing",
      description:
        "Washed, natural, or honey — each process chosen to express sweetness, acidity and body.",
      image: {
        src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80",
        alt: "Green coffee beans prepared for roasting",
      },
    },
    {
      id: "roasting",
      title: "Roasting",
      description:
        "Profiles developed slowly in London so sweetness stays intact and origin character leads.",
      image: {
        src: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=1200&q=80",
        alt: "Freshly roasted coffee beans cooling on a tray",
      },
    },
    {
      id: "brewing",
      title: "Brewing",
      description:
        "Every extraction measured — grind, temperature, time — so the cup feels inevitable.",
      image: {
        src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
        alt: "Barista preparing a precise pour-over extraction",
      },
    },
  ],
} as const;

export const savoyGallery = [
  {
    id: "bar",
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1400&q=80",
    alt: "Minimal coffee bar with stone and timber materials",
    caption: "The coffee bar",
  },
  {
    id: "materials",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    alt: "Close detail of ceramic cups and warm lighting",
    caption: "Materials",
  },
  {
    id: "architecture",
    src: "https://images.unsplash.com/photo-1559925393-8be0ec67b7e3?auto=format&fit=crop&w=1400&q=80",
    alt: "Architectural interior of a specialty coffee space",
    caption: "Architecture",
  },
  {
    id: "guests",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1400&q=80",
    alt: "Guests seated quietly in a specialty coffee lounge",
    caption: "Guests",
  },
  {
    id: "baristas",
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1400&q=80",
    alt: "Barista crafting espresso with focused precision",
    caption: "Baristas",
  },
] as const;

export const savoyCommunity = {
  id: "community",
  headline: "Rooted in London.\nInspired by the world.",
  intro:
    "Partnerships, tastings and workshops that connect the capital’s coffee culture with producers abroad.",
  items: [
    {
      title: "Local partnerships",
      description:
        "Collaborations with neighbouring bakeries, galleries and makers across Fitzrovia and beyond.",
    },
    {
      title: "Coffee events",
      description:
        "Seasonal evenings with guest roasters, producers and sensory educators.",
    },
    {
      title: "Tasting sessions",
      description:
        "Intimate cuppings that train the palate — aroma, flavour and finish side by side.",
    },
    {
      title: "Workshops",
      description:
        "Hands-on brewing classes covering grind, extraction and home ritual.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=80",
    alt: "Community gathering around a coffee tasting table",
  },
};

export const savoyProducts = [
  {
    id: "signature-blend",
    name: "Signature Blend",
    category: "Subscription · Blend",
    notes: "Chocolate · caramel · soft spice",
    price: "£14.50",
    weight: "250g",
    image: {
      src: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1000&q=80",
      alt: "Signature blend coffee bag on an ivory surface",
    },
  },
  {
    id: "single-origin",
    name: "Single Origin Coffee",
    category: "Rotating · Origin",
    notes: "Floral · citrus · tea-like",
    price: "£16.50",
    weight: "250g",
    image: {
      src: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=1000&q=80",
      alt: "Single origin roasted beans in a ceramic bowl",
    },
  },
  {
    id: "equipment",
    name: "Coffee Equipment",
    category: "Brew · Tools",
    notes: "V60 · scales · kettles",
    price: "From £28",
    weight: "Curated",
    image: {
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80",
      alt: "Specialty coffee brewing equipment arranged simply",
    },
  },
  {
    id: "gift-card",
    name: "Gift Cards",
    category: "Gift · Experience",
    notes: "Coffee · workshops · flights",
    price: "From £25",
    weight: "Digital",
    image: {
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
      alt: "Elegant coffee service suitable for gifting",
    },
  },
] as const;

export const savoyLocation = {
  id: "location",
  headline: "Visit us in London.",
  name: "The Savoy Sip",
  city: "London, UK",
  address: "14 Charlotte Street, Fitzrovia, London W1T 2LU",
  hours: [
    { day: "Monday – Friday", hours: "07:30 – 17:00" },
    { day: "Saturday", hours: "08:00 – 18:00" },
    { day: "Sunday", hours: "09:00 – 16:00" },
  ],
};

export const savoySeo = {
  title: "The Savoy Sip | Specialty Coffee Boutique · London",
  description:
    "A luxury specialty coffee boutique in London — world-class beans, Japanese precision, and European coffee culture.",
};
