const propertyDatabase = [
  {
    id: "greenwood-estate",
    title: "Greenwood Estate",
    location: "Beverly Hills, California",
    city: "Beverly Hills",
    country: "USA",
    price: "$4,850,000",
    priceValue: 4850000,
    status: "Featured",
    type: "Estate",
    bedrooms: 5,
    bathrooms: 6,
    area: "5,800 sq ft",
    yearBuilt: 2026,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Set behind mature landscaping in one of Beverly Hills' most sought-after residential enclaves, Greenwood Estate balances contemporary architecture with the warmth of natural materials. Expansive glazing opens the main living spaces toward a private garden and pool terrace.",
    shortDescription: "Contemporary family residence with a private pool, guest wing, and long-range city views.",
    propertyType: "Private Residence",
    highlights: [
      "Floating glass staircase",
      "Private wellness suite",
      "Chef's kitchen with marble island",
      "Integrated smart home system"
    ],
    amenities: ["Private Pool", "Garage", "Garden", "Smart Home", "Home Office", "Staff Quarters"],
    investment: "A rare combination of architectural presence and enduring Beverly Hills value, this estate appeals to both lifestyle buyers and long-term capital preservation investors.",
    featured: true,
    featuredLabel: "Private Collection"
  },
  {
    id: "casa-verde",
    title: "Casa Verde",
    location: "Miami, Florida",
    city: "Miami",
    country: "USA",
    price: "$3,200,000",
    priceValue: 3200000,
    status: "New Listing",
    type: "Villa",
    bedrooms: 4,
    bathrooms: 5,
    area: "4,250 sq ft",
    yearBuilt: 2021,
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Casa Verde brings a highly considered tropical modernism to Miami's most desirable residential corridor, pairing indoor-outdoor living with a warm, resort-like atmosphere. Light-filled rooms and a substantial terrace create effortless daily comfort.",
    shortDescription: "Tropical modern villa with panoramic glazing, resort-grade outdoor living, and elevated urban access.",
    propertyType: "Villa",
    highlights: ["Indoor-outdoor entertaining", "Glass-walled living pavilion", "Private courtyard pool", "Waterfront-adjacent lifestyle"],
    amenities: ["Private Pool", "Covered Terrace", "Smart Lighting", "Built-in Bar", "Two-Car Garage", "Guest Suite"],
    investment: "Well positioned in a resilient coastal market, this residence has strong appeal among buyers seeking long-term value and immediate lifestyle utility.",
    featured: true,
    featuredLabel: "For Sale"
  },
  {
    id: "the-oak-residence",
    title: "The Oak Residence",
    location: "London, United Kingdom",
    city: "London",
    country: "UK",
    price: "$2,750,000",
    priceValue: 2750000,
    status: "New Listing",
    type: "Townhouse",
    bedrooms: 4,
    bathrooms: 4,
    area: "3,900 sq ft",
    yearBuilt: 2018,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Crafted around timeless materials and expertly balanced proportion, The Oak Residence sits in one of London’s most discreetly coveted neighborhoods. A refined sequence of reception rooms leads to a private garden and generous family quarters.",
    shortDescription: "Elegant London townhouse with limestone finishes, walled garden, and strong family lifestyle appeal.",
    propertyType: "Townhouse",
    highlights: ["Double-height reception room", "Mature private garden", "Guest suite on lower level", "Natural stone interiors"],
    amenities: ["Garden", "Garage", "Home Gym", "Media Room", "Air Conditioning", "EV Charging"],
    investment: "A strong entry point in the London market for clients prioritizing central access, prestige, and capital resilience.",
    featured: false,
    featuredLabel: "For Sale"
  },
  {
    id: "emerald-house",
    title: "Emerald House",
    location: "Dubai, UAE",
    city: "Dubai",
    country: "UAE",
    price: "$5,900,000",
    priceValue: 5900000,
    status: "Private Collection",
    type: "Penthouse",
    bedrooms: 6,
    bathrooms: 7,
    area: "7,200 sq ft",
    yearBuilt: 2024,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Emerald House occupies a privileged address within Dubai’s most elevated residential enclave, defined by wraparound views and exceptional indoor volume. Layered dining, lounge, and entertainment spaces open seamlessly to one another.",
    shortDescription: "Skyline penthouse with generous entertaining spaces, a wellness suite, and panoramic hotel-caliber views.",
    propertyType: "Penthouse",
    highlights: ["Panoramic skyline terraces", "Private cinema", "Spa-quality wellness room", "Sky lounge entertainment"],
    amenities: ["Helipad Access", "Private Elevator", "Sky Pool", "Concierge", "Smart Security", "Wine Cellar"],
    investment: "This statement residence aligns with strong demand from global buyers seeking luxury, convenience, and long-term yield in Dubai's premium market.",
    featured: true,
    featuredLabel: "Private Collection"
  },
  {
    id: "saffron-hill",
    title: "Saffron Hill",
    location: "Bengaluru, India",
    city: "Bengaluru",
    country: "India",
    price: "$7,500,000",
    priceValue: 75000000,
    status: "Featured",
    type: "Villa",
    bedrooms: 5,
    bathrooms: 4,
    area: "5,100 sq ft",
    yearBuilt: 2020,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Saffron Hill is a warm, layered villa crafted for modern family life and gracious entertaining. Landscaped courtyards and premium detailing create a calm, private setting just beyond the city’s busiest corridors.",
    shortDescription: "Modern Indian villa with open planning, landscaped courtyards, and a quietly luxurious family layout.",
    propertyType: "Villa",
    highlights: ["Courtyard-focused living", "Private double-height lounge", "Library and study", "Landscape integration"],
    amenities: ["Pool", "Garden", "Family Lounge", "Staff Room", "Security System", "Gym"],
    investment: "A highly considered family residence that blends privacy, architecture, and long-term appreciation in a high-demand urban location.",
    featured: false,
    featuredLabel: "Featured"
  },
  {
    id: "harbor-point",
    title: "Harbor Point",
    location: "New York, New York",
    city: "New York",
    country: "USA",
    price: "$2,980,000",
    priceValue: 2980000,
    status: "For Sale",
    type: "Apartment",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,960 sq ft",
    yearBuilt: 2019,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Harbor Point balances contemporary luxury with a quietly confident New York sophistication. The residence feels spacious and composed, with a refined palette and commanding views over the city skyline.",
    shortDescription: "Upper-floor Manhattan apartment with skyline views, warm natural finishes, and exceptional flexibility.",
    propertyType: "Apartment",
    highlights: ["Corner layout with natural light", "Statement oak joinery", "Library lounge", "High-spec kitchen"],
    amenities: ["Concierge", "Doorman", "Fitness Club", "Sky Lounge", "Private Storage", "Parking"],
    investment: "An investment-grade residence in a globally recognized market, delivering both lifestyle and strategic capital performance.",
    featured: false,
    featuredLabel: "For Sale"
  }
];

const articleDatabase = [
  {
    id: "architecture-and-value",
    category: "Architecture",
    title: "WHY ARCHITECTURE MATTERS IN PROPERTY VALUE",
    date: "18 April 2026",
    author: "Elena Hart",
    readTime: "6 min read",
    excerpt: "Exceptional architecture doesn't simply create beauty; it influences how a home performs, how it is experienced, and how it holds value over time.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    content: [
      "When clients begin their search for a property, they often speak in terms of square footage, views, and neighborhood credentials. Yet the homes that hold their value best are the ones with enduring architectural clarity. This is not an aesthetic preference; it is a practical one.",
      "Thoughtful architecture influences proportion, natural light, flow, and how a property can adapt over time. A beautifully composed home feels larger, calmer, and more valuable because it is designed to work. The materials age well, the layout evolves with family life, and the sense of privacy remains intact.",
      "At a market level, architecture is one of the first signals of quality. Distinctive design can raise the emotional appeal of a residence while also playing a role in long-term investment fundamentals. Buyers pay for places that feel considered, and they remember the homes that feel distinctly resolved.",
      "This is why a well-designed property often outperforms a more generic one with comparable dimensions. The difference is not just cosmetic. It is a difference in perception, desirability, and durability."
    ],
    pullQuote: "Architecture that is considered endures because it creates both pleasure and performance."
  },
  {
    id: "private-estate",
    category: "Market Insights",
    title: "THE RETURN OF THE PRIVATE ESTATE",
    date: "04 May 2026",
    author: "Marcus Baines",
    readTime: "7 min read",
    excerpt: "Private estates are once again commanding attention as buyers place greater emphasis on privacy, wellness, and lifestyle resilience.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    content: [
      "The private estate is back—not as a symbol of excess, but as a response to a new era of seek-and-value living. Increasingly, clients want homes that offer serenity, separation, and a clear relationship between indoor and outdoor life.",
      "A genuinely valuable estate does more than widen the footprint. It creates a sense of retreat, security, and ease. This is why private gardens, quiet arrival sequences, wellness amenities, and carefully resolved indoor flow are becoming central to what buyers consider essential.",
      "In investment terms, estates remain compelling because they are finite. A refined property in a prime enclave cannot be replicated easily, which gives it a rare depth of value. It may be luxury in presentation, but it is also a highly practical asset.",
      "What matters most is not scale alone. It is the feeling of permanence and care that a well-composed estate generates."
    ],
    pullQuote: "The most successful estates offer a sense of permanence, not just scale."
  },
  {
    id: "timeless-property",
    category: "Design Philosophy",
    title: "WHAT MAKES A PROPERTY TRULY TIMELESS?",
    date: "12 June 2026",
    author: "Sofia Levin",
    readTime: "5 min read",
    excerpt: "Timeless homes avoid excess. They are resolved, balanced, and quietly confident—qualities that remain desirable across every market cycle.",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    content: [
      "A timeless property is not one that tries to impress everyone instantly. It is a home that understands proportion, site, and materiality. A well-composed residence feels effortless because there is no noise in the design language.",
      "It often features natural materials that mature beautifully, spaces that can adapt across seasons of life, and a sense of calm that remains long after the initial excitement fades. This is what makes a home genuinely enduring.",
      "The most successful luxury residences do not chase novelty. Instead, they create a quiet confidence that stands up to both time and changing tastes. They are grounded in what matters—light, privacy, flow, and a coherent atmosphere.",
      "In a market that moves quickly, timeless design remains one of the clearest indicators of enduring value."
    ],
    pullQuote: "The most enduring homes feel calm, not crowded."
  },
  {
    id: "language-of-luxury",
    category: "Editorial",
    title: "THE NEW LANGUAGE OF LUXURY",
    date: "29 June 2026",
    author: "Aiden Rowe",
    readTime: "8 min read",
    excerpt: "Luxury no longer announces itself loudly. The new language is quiet, architectural, and rooted in genuine lifestyle quality.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Luxury today does not rely on overt decoration or excessive symbolism. It communicates through restraint, material discipline, and the ability to create ease. The modern affluent buyer is often looking for something more subtle: a home that feels deeply considered.",
      "This is why architecture, light, and proportion are central to the new language of luxury. A residence is no longer simply treated as a showpiece; it is a place for living, gathering, and private retreat. The best homes make every detail feel meaningful, not merely expensive.",
      "This change in language also impacts how we evaluate value. Homes that embody proportion, craft, and a sense of calm become more powerful over time because they are aligned with how people actually want to live.",
      "Luxury has become quieter, but no less compelling."
    ],
    pullQuote: "The true signature of luxury is refinement without excess."
  },
  {
    id: "investing-in-location",
    category: "Investment",
    title: "INVESTING IN LOCATION",
    date: "10 July 2026",
    author: "CL. Rowan",
    readTime: "4 min read",
    excerpt: "The most resilient property investments are built around carefully selected locations, not simply short-term market momentum.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Location remains the central pillar of long-term property value. Yet the most compelling locations are no longer simply those with prestige; they are the places that combine access, lifestyle quality, and future resilience.",
      "A carefully chosen address can improve day-to-day experience while sustaining long-term desirability. It shapes both the emotional value and the strategic value of the asset. That is precisely what creates investment strength.",
      "For clients with a long-term perspective, location analysis has to go beyond pricing trends. It includes infrastructure investments, cultural longevity, privacy, quality of life, and future scarcity. Those factors compound over time.",
      "In the right location, even a more restrained property can outperform a grander one in a less resilient area. Value is not about noise; it is about depth."
    ],
    pullQuote: "The strongest investments are defined by scarcity, access, and everyday usefulness."
  }
];

const testimonials = [
  {
    quote: "Verdant Estates understood exactly what we were looking for before we had even defined it ourselves. The process felt private, considered, and beautifully paced.",
    author: "Alicia & Simon R.",
    detail: "London to Beverly Hills"
  },
  {
    quote: "Their advice was commercial, strategic, and deeply personal. We were guided with intelligence rather than pressure, which made all the difference.",
    author: "Nikhil P.",
    detail: "Investor, Dubai"
  }
];

const leadData = {
  intent: "",
  propertyType: "",
  location: "",
  budget: "",
  expectedPrice: "",
  timeline: "",
  financing: "",
  name: "",
  email: "",
  phone: "",
  company: "",
  message: ""
};

function getPropertyById(propertyId) {
  return propertyDatabase.find((property) => property.id === propertyId) || propertyDatabase[0];
}

function getArticleById(articleId) {
  return articleDatabase.find((article) => article.id === articleId) || articleDatabase[0];
}

function formatCurrency(value) {
  if (typeof value === "number") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
  }
  return value;
}

function initializeNotificationPopup() {
  const popup = document.getElementById("brand-notification");
  if (!popup) return;

  const closeButton = popup.querySelector(".notification-close");
  const dismissedKey = "verdant-notification-dismissed";

  if (localStorage.getItem(dismissedKey) === "true") {
    popup.classList.remove("is-visible");
    return;
  }

  setTimeout(() => {
    popup.classList.add("is-visible");
  }, 900);

  closeButton.addEventListener("click", () => {
    popup.classList.remove("is-visible");
    localStorage.setItem(dismissedKey, "true");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  initializeNotificationPopup();
});

/*
  Future backend integration example:
  fetch("/api/properties")
    .then((response) => response.json())
    .then((data) => {
      // Replace propertyDatabase with API data
    });

  fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(leadData)
  });
*/
