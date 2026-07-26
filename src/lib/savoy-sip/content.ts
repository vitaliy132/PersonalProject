import type {
  Cta,
  HeroBlock,
  NavLink,
  SectionBlock,
  SeoMeta,
} from "@/lib/types/microsite";

export const savoySip = {
  name: "Savoy Sip",
  tagline: "Specialty coffee. Mayfair calm.",
  location: "Mayfair, London",
  address: "18 Mount Street, Mayfair, London W1K 2RH",
  email: "hello@savoysip.co.uk",
  instagram: "https://www.instagram.com/",
};

export const savoySipNav: NavLink[] = [
  { label: "Craft", href: "#craft" },
  { label: "Menu", href: "#menu" },
  { label: "Space", href: "#space" },
  { label: "Visit", href: "#visit" },
];

export const savoySipHero = {
  brandLineOne: "Savoy",
  brandLineTwo: "Sip",
  line: "Slow pours for a faster city.",
  place: "Mount Street · Mayfair",
  ctaPrimary: { label: "See the menu", href: "#menu" } satisfies Cta,
  ctaSecondary: { label: "Plan a visit", href: "#visit" } satisfies Cta,
  image: {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=2400&q=80",
    alt: "Ceramic coffee cup on a sunlit table beside a window",
  },
} satisfies HeroBlock & {
  brandLineOne: string;
  brandLineTwo: string;
  line: string;
  place: string;
};

export const savoySipCraft = {
  id: "craft",
  kicker: "01 — Craft",
  headline: "Ceremony,\nnot caffeine.",
  body: "Savoy Sip is built for presence. Precise extraction, soft light, and the kind of quiet that makes a Mayfair morning feel longer than it is.",
  image: {
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1800&q=80",
    alt: "Close-up of freshly ground coffee beans",
  },
} satisfies SectionBlock;

export const savoySipMenuSection = {
  id: "menu",
  kicker: "02 — Menu",
  headline: "What we pour.",
  body: "Three boards. One ritual. Ask what's on filter today.",
} satisfies SectionBlock;

export const savoySipMenu = [
  {
    id: "espresso",
    category: "Espresso",
    blurb: "Dense, chocolate, dialled daily.",
    items: [
      {
        name: "Espresso",
        ingredients: "House blend",
        price: "£3.20",
      },
      {
        name: "Macchiato",
        ingredients: "Cloud of milk",
        price: "£3.50",
      },
      {
        name: "Flat White",
        ingredients: "Double · microfoam",
        price: "£4.20",
      },
      {
        name: "Cappuccino",
        ingredients: "Silk foam",
        price: "£4.40",
      },
    ],
  },
  {
    id: "filter",
    category: "Filter",
    blurb: "Clean cups. Rotating origins.",
    items: [
      {
        name: "V60 Pour Over",
        ingredients: "Single origin",
        price: "£5.50",
      },
      {
        name: "Batch Brew",
        ingredients: "Daily filter",
        price: "£3.80",
      },
      {
        name: "Cold Brew",
        ingredients: "18-hour steep",
        price: "£4.80",
      },
      {
        name: "Aeropress",
        ingredients: "Bar pick",
        price: "£5.20",
      },
    ],
  },
  {
    id: "seasonal",
    category: "Seasonal",
    blurb: "Short runs. Soft experiments.",
    items: [
      {
        name: "Yuzu Espresso Tonic",
        ingredients: "Bright · bitter",
        price: "£5.80",
      },
      {
        name: "Cardamom Oat Latte",
        ingredients: "Warm spice",
        price: "£4.90",
      },
      {
        name: "Honey Matcha",
        ingredients: "Ceremonial",
        price: "£5.40",
      },
      {
        name: "Savoy Mocha",
        ingredients: "70% cacao",
        price: "£5.20",
      },
    ],
  },
] as const;

export const savoySipSpace = {
  id: "space",
  kicker: "03 — Space",
  headline: "Rooms for lingering.",
  beats: [
    {
      id: "bar",
      title: "The Bar",
      description:
        "An open espresso bar where every shot is dialled in — extraction as craft, never spectacle.",
      image: {
        src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1600&q=80",
        alt: "Specialty coffee bar with espresso machine",
      },
    },
    {
      id: "lounge",
      title: "The Lounge",
      description:
        "Low seating and soft corners for reading, meetings, or watching Mount Street pass by.",
      image: {
        src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
        alt: "Bright café interior with wooden tables",
      },
    },
    {
      id: "terrace",
      title: "The Terrace",
      description:
        "A narrow ledge for morning sun — coffee in hand, the city at arm's length.",
      image: {
        src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=80",
        alt: "Café terrace seating along a sunlit street",
      },
    },
  ],
} as const;

export const savoySipOrigin = {
  id: "origin",
  kicker: "04 — Origin",
  headline: "Small lots.\nClear character.",
  body: "We roast in small batches with regenerative farms — so origin stays intact from farm to cup.",
  origins: [
    {
      region: "Yirgacheffe",
      country: "Ethiopia",
      note: "Jasmine · bergamot · tea-like",
    },
    {
      region: "Huila",
      country: "Colombia",
      note: "Caramel · red apple · cocoa",
    },
    {
      region: "Nyeri",
      country: "Kenya",
      note: "Blackcurrant · tomato · bright",
    },
    {
      region: "Antigua",
      country: "Guatemala",
      note: "Chocolate · walnut · soft",
    },
  ],
};

export const savoySipVisit = {
  id: "visit",
  kicker: "05 — Visit",
  headline: "Mount Street.",
  image: {
    src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=2000&q=80",
    alt: "London street scene in soft afternoon light",
  },
  hours: [
    { day: "Mon – Fri", hours: "07:30 – 18:00" },
    { day: "Saturday", hours: "08:30 – 17:00" },
    { day: "Sunday", hours: "09:00 – 16:00" },
  ],
};

export const savoySipSeo: SeoMeta = {
  title: "Savoy Sip | Specialty Coffee · Mayfair, London",
  description:
    "A premium specialty coffee café in Mayfair — slow pours, considered interiors and a quiet corner of London.",
};
