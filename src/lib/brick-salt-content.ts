export const brickSalt = {
  name: "BRICK & SALT",
  tagline: "Food. Fire. Friends.",
  location: "Northern England",
  city: "Leeds, UK",
  address: "12 The Calls, Leeds LS2 7EW",
  email: "hello@brickandsalt.co.uk",
  phone: "+44 113 496 0182",
  instagram: "https://www.instagram.com/",
};

export const brickSaltNav = [
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Chef", href: "#chef" },
  { label: "Dining", href: "#gallery" },
  { label: "Drinks", href: "#drinks" },
  { label: "Visit", href: "#location" },
] as const;

export const brickSaltTimes = [
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
];

export const brickSaltPartySizes = [1, 2, 3, 4, 5, 6, 7, 8];

export const brickSaltHero = {
  lineOne: "Small plates.",
  lineTwo: "Big flavours.",
  ctaPrimary: "Book a Table",
  ctaSecondary: { label: "Explore Menu", href: "#menu" },
  image: {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2400&q=80",
    alt: "Plated dishes on a warmly lit restaurant table",
  },
};

export const brickSaltStory = {
  id: "story",
  headline: "Built around food,\nfire and conversation.",
  body: "BRICK & SALT brings together seasonal ingredients, creative cooking and the energy of Northern dining culture. A neighbourhood restaurant for shared plates, craft drinks and evenings that linger.",
  image: {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80",
    alt: "Chef plating a small dish with careful attention",
  },
  secondaryImage: {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Candlelit dining room with brick walls and wooden tables",
  },
};

export const brickSaltMenu = [
  {
    id: "small",
    category: "Small Plates",
    items: [
      {
        name: "Charred Octopus",
        ingredients: "Smoked paprika, citrus, herbs",
        price: "£14",
      },
      {
        name: "Wild Mushroom",
        ingredients: "Truffle, parmesan, sourdough",
        price: "£12",
      },
      {
        name: "Heritage Tomato",
        ingredients: "Stracciatella, basil oil, aged balsamic",
        price: "£11",
      },
      {
        name: "Crispy Pig Cheek",
        ingredients: "Apple mustard, pickled fennel",
        price: "£13",
      },
    ],
  },
  {
    id: "large",
    category: "Large Plates",
    items: [
      {
        name: "Slow-Braised Short Rib",
        ingredients: "Bone marrow jus, roasted celeriac",
        price: "£28",
      },
      {
        name: "Line-Caught Cod",
        ingredients: "Brown butter, samphire, new potatoes",
        price: "£26",
      },
      {
        name: "Yorkshire Duck",
        ingredients: "Cherry, chicory, toasted grain",
        price: "£27",
      },
      {
        name: "Charred Cauliflower",
        ingredients: "Tahini, chilli oil, soft herbs",
        price: "£18",
      },
    ],
  },
  {
    id: "desserts",
    category: "Desserts",
    items: [
      {
        name: "Dark Chocolate Salt",
        ingredients: "Sea salt caramel, crème fraîche",
        price: "£10",
      },
      {
        name: "Buttermilk Panna Cotta",
        ingredients: "Yorkshire rhubarb, oat crumb",
        price: "£9",
      },
      {
        name: "Cheese Board",
        ingredients: "Northern cheeses, chutney, crackers",
        price: "£14",
      },
    ],
  },
  {
    id: "menu-drinks",
    category: "Drinks",
    items: [
      {
        name: "House Natural Wine",
        ingredients: "By the glass · rotating growers",
        price: "£8",
      },
      {
        name: "Brick Negroni",
        ingredients: "Bitter orange, local gin, vermouth",
        price: "£11",
      },
      {
        name: "Northern Pale",
        ingredients: "Craft ale · Leeds brewery",
        price: "£5.50",
      },
    ],
  },
] as const;

export const brickSaltChef = {
  id: "chef",
  headline: "Crafted with intention.",
  intro:
    "From market to fire — every plate is built with patience, technique and Northern produce.",
  beats: [
    {
      id: "ingredients",
      title: "Ingredients",
      description:
        "Seasonal growers, day-boat fish and regional farms supply the kitchen with ingredients worth cooking simply and well.",
      image: {
        src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=1600&q=80",
        alt: "Fresh seasonal vegetables and herbs on a wooden board",
      },
    },
    {
      id: "preparation",
      title: "Preparation",
      description:
        "Butchery, fermentation and careful prep happen before service — so each plate arrives balanced and ready to share.",
      image: {
        src: "/brick-salt/prep.jpg",
        alt: "Chef chopping ingredients on stainless steel in a professional kitchen",
      },
    },
    {
      id: "techniques",
      title: "Cooking techniques",
      description:
        "Live fire, precise pan work and slow braises give BRICK & SALT its industrial soul and Michelin ambition.",
      image: {
        src: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1600&q=80",
        alt: "Flames rising from a restaurant grill",
      },
    },
  ],
} as const;

export const brickSaltGallery = [
  {
    id: "kitchen",
    title: "The Kitchen",
    caption: "Open fire · open pass",
    src: "/brick-salt/kitchen.jpg",
    alt: "Professional restaurant chef plating at the pass under heat lamps",
  },
  {
    id: "bar",
    title: "The Bar",
    caption: "Natural wine · craft cocktails",
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80",
    alt: "Candlelit bar with bottles and glassware",
  },
  {
    id: "dining",
    title: "The Dining Room",
    caption: "Brick · timber · shared tables",
    src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    alt: "Warm restaurant dining room with wooden tables and pendant lights",
  },
] as const;

export const brickSaltSeasonal = {
  id: "seasonal",
  headline: "The season leads.",
  cards: [
    {
      season: "Spring",
      title: "Fresh ingredients.",
      description: "Asparagus, wild garlic and early greens from Yorkshire growers.",
      image: {
        src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80",
        alt: "Spring greens and fresh produce",
      },
    },
    {
      season: "Kitchen",
      title: "New dishes.",
      description: "A menu that shifts weekly — small plates rewritten around what arrives.",
      image: {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
        alt: "Seasonal plated dish on ceramic",
      },
    },
    {
      season: "Suppliers",
      title: "Local partners.",
      description: "Long relationships with farms, bakeries and makers across the North.",
      image: {
        src: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1000&q=80",
        alt: "Market stall with local produce",
      },
    },
  ],
} as const;

export const brickSaltDrinks = [
  {
    id: "natural-wine",
    title: "Natural Wine",
    description: "Low-intervention bottles from growers who farm with care.",
    image: {
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80",
      alt: "Natural wine being poured into a glass",
    },
  },
  {
    id: "cocktails",
    title: "Craft Cocktails",
    description: "House signatures built for food — bitter, bright and balanced.",
    image: {
      src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
      alt: "Craft cocktail on a dark bar surface",
    },
  },
  {
    id: "beer",
    title: "Local Beer",
    description: "Northern ales and lagers from independent breweries.",
    image: {
      src: "https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=1000&q=80",
      alt: "Craft beer poured into a glass",
    },
  },
  {
    id: "spirits",
    title: "Speciality Spirits",
    description: "A focused selection of gins, whiskies and digestifs.",
    image: {
      src: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=1000&q=80",
      alt: "Spirit bottles lined on a bar shelf",
    },
  },
] as const;

export const brickSaltReservation = {
  id: "reservation",
  headline: "Join us for an evening\nworth sharing.",
  cta: "Reserve your table",
};

export const brickSaltLocation = {
  id: "location",
  headline: "Find us in Leeds.",
  hours: [
    { day: "Tuesday – Thursday", hours: "12:00 – 14:30 · 17:30 – 22:00" },
    { day: "Friday – Saturday", hours: "12:00 – 15:00 · 17:00 – 22:30" },
    { day: "Sunday", hours: "12:00 – 16:00" },
    { day: "Monday", hours: "Closed" },
  ],
};

export const brickSaltSeo = {
  title: "BRICK & SALT | Small Plates Restaurant · Leeds",
  description:
    "A modern small plates restaurant in Northern England — seasonal cooking, craft drinks and shared dining in Leeds.",
};
