export const siteName = "Pekon 1995";

export type CategoryKey = "bread" | "bake" | "sweet";

export type Category = {
  key: CategoryKey;
  label: string;
  note: string;
};

export type Product = {
  slug: string;
  name: string;
  category: CategoryKey;
  note: string;
  ingredients: string;
  story: string;
  image: string;
  featured?: boolean;
};

export type HomeHero = {
  image: string;
  kicker: string;
  title: string;
  blurb: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
};

export type HomeShortcut = {
  title: string;
  note: string;
  href: string;
  image: string;
};

export type PromoStrip = {
  title: string;
  note: string;
  href: string;
  image: string;
};

export type Location = {
  city: string;
  address: string;
  hours: string;
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/offers", label: "Offers" },
  { href: "/contact", label: "Contact" },
] as const;

export const categories: Category[] = [
  { key: "bread", label: "Bread", note: "Daily loaves" },
  { key: "bake", label: "Bakes", note: "Warm trays" },
  { key: "sweet", label: "Sweets", note: "Soft finish" },
];

export const products: Product[] = [
  {
    slug: "baget-i-rrumbullaket",
    name: "Baget i Rrumbullaket",
    category: "bread",
    note: "Round baguette loaf",
    ingredients:
      "Miell Gruri, Miell Elbi, Grize Gruri, Yndyre Bimore, Kripe Kuzhine, Maje Buke.",
    story: "A round everyday loaf with a light crust and soft pull.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/24.jpg",
    featured: true,
  },
  {
    slug: "baget-me-qepe",
    name: "Baget me Qepe",
    category: "bread",
    note: "Toasted onion baguette",
    ingredients:
      "Miell Gruri, Perforcues per Baget, Maje Buke, Miell Elbi i Pjekur, Kripe Kuzhine, Qepe te Thara.",
    story: "A fuller loaf with onion sweetness through the finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/25.jpg",
  },
  {
    slug: "baget-sandwich",
    name: "Baget Sandwich",
    category: "bread",
    note: "Light sandwich bread",
    ingredients:
      "Miell Gruri, Perforcues per Baget, Kripe Kuzhine, Maje Buke, Vaj per Gatim.",
    story: "Built for quick sandwiches and warm toast.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/26-1.jpg",
  },
  {
    slug: "baget-thekre-sandwich",
    name: "Baget Thekre Sandwich",
    category: "bread",
    note: "Rye sandwich loaf",
    ingredients:
      "Miell Gruri, Miell Thekre, Miell Thekre i Pjekur, Miell Elbi, Kripe Kuzhine, Maje Buke, Thartire.",
    story: "Rye depth, soft crumb, and a cleaner finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/27.jpg",
    featured: true,
  },
  {
    slug: "broqe-integrale",
    name: "Broqe Integrale",
    category: "bread",
    note: "Wholegrain rolls",
    ingredients:
      "Miell Gruri, Miell Elbi, Kripe Kuzhine, Maje per Buke, Miell Integral.",
    story: "Compact rolls with a firmer bite and clean grain profile.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/28.jpg",
  },
  {
    slug: "buke-ciabatta-integrale",
    name: "Buke Ciabatta Integrale",
    category: "bread",
    note: "Olive oil ciabatta",
    ingredients:
      "Miell Gruri, Perforcues per Ciabatta, Vaj Ulliri, Maje Buke.",
    story: "Open texture, thin crust, and a softer olive note.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/29.jpg",
  },
  {
    slug: "buke-fitnesi",
    name: "Buke Fitnesi",
    category: "bread",
    note: "Seeded fitness loaf",
    ingredients:
      "Miell Thekre i Shtypur, Miell Elbi i Pjekur, Miell Gruri, Fara Liri, Fara Luledielli, Susam, Kripe Kuzhine, Maje Buka.",
    story: "Dense, seeded, and made for long breakfast tables.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/30-1.jpg",
    featured: true,
  },
  {
    slug: "buke-malesie",
    name: "Buke Malesie",
    category: "bread",
    note: "Country rye loaf",
    ingredients:
      "Miell Gruri, Miell Thekre, Kripe Kuzhine, Maje Buke, Thartire, Vaj per Gatim.",
    story: "The heavier country loaf in the daily line.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/31.jpg",
  },
  {
    slug: "buke-me-arra",
    name: "Buke me Arra",
    category: "bake",
    note: "Walnut grain loaf",
    ingredients:
      "Miell Thekre, Tershere e Shtypur, Arra Natyrale, Fara Luledielli, Kripe Kuzhine, Maje Buke.",
    story: "A nutty bake with more bite and a darker finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/32.jpg",
  },
  {
    slug: "buke-me-fara-kungulli",
    name: "Buke me Fara Kungulli",
    category: "bake",
    note: "Pumpkin seed bake",
    ingredients:
      "Perzierje e Farave te Bluara, Fara Kungulli, Miell Gruri, Miell Elbi, Kripe Kuzhine, Maje Buke, Yndyre Bimore.",
    story: "Crunch on top, softer middle, and a rich seed finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/33.jpg",
    featured: true,
  },
  {
    slug: "buke-simiti",
    name: "Buke Simiti",
    category: "bake",
    note: "Sesame round bake",
    ingredients:
      "Miell Gruri, Yndyre Bimore, Kripe Kuzhine, Maje Buke, Miell Elbi.",
    story: "A softer bake with the familiar sesame finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/38.jpg",
  },
  {
    slug: "trekendesh-me-susam",
    name: "Trekendesh me Susam",
    category: "bake",
    note: "Sesame triangle",
    ingredients:
      "Miell Gruri, Susam, Vaj per Gatim, Kripe Kuzhine, Maje Buke.",
    story: "Sharp shape, toasted edges, and a quick savory finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/40.jpg",
  },
  {
    slug: "torte-me-karrote",
    name: "Torte me Karrote",
    category: "sweet",
    note: "Carrot cake slice",
    ingredients:
      "Vaj per Gatim, Sheqer, Kripe Kuzhine, Veze, Kanella, Xhenxhefil, Miell Gruri, Sode Bikarbone, Karrota, Arra Natyrale, Butter, Krem Djathi, Arome Vanilje, Sheqer Pluhur, Pluhur per Pjekje.",
    story: "Soft crumb, spice warmth, and a cream cheese finish.",
    image: "https://bukabakery.com/wp-content/uploads/2021/08/21-1.jpg",
    featured: true,
  },
  {
    slug: "biskote-natyrale-cokollate-e-bardhe",
    name: "Biskote Natyrale Cokollate e Bardhe",
    category: "sweet",
    note: "White chocolate cookie",
    ingredients:
      "Gjalpe, Sheqer, Veze, Tershere e Shtypur, Arra Natyrale, Miell Gruri, Pluhur per Pjekurina, Kanella, Fara Kungulli, Rrush i Terur, Mjalte, Cokollate e Bardhe.",
    story: "Soft center, grain texture, and a sweeter finish.",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-1-630x693.jpg",
  },
  {
    slug: "biskote-natyrale-cokollate-e-zeze",
    name: "Biskote Natyrale Cokollate e Zeze",
    category: "sweet",
    note: "Dark chocolate cookie",
    ingredients:
      "Gjalpe, Sheqer, Veze, Tershere e Shtypur, Arra Natyrale, Miell Gruri, Pluhur per Pjekurina, Kanella, Fara Kungulli, Rrush i Terur, Mjalte, Cokollate e Zeze.",
    story: "A darker cookie with more cocoa weight and grain texture.",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-2-630x693.jpg",
  },
];

export const homeHero: HomeHero = {
  image: "/pekon1.jpg",
  kicker: "Daily shelf",
  title: "Fresh shelf. Bright stop.",
  blurb: "Bread, sweets, coffee, and quick tables in Pekon colors.",
  primaryCtaLabel: "Open products",
  primaryCtaHref: "/products",
  secondaryCtaLabel: "Find bakery",
  secondaryCtaHref: "/contact",
};

export const homeShortcuts: HomeShortcut[] = [
  {
    title: "Bread line",
    note: "Daily loaves",
    href: "/products#bread",
    image: products[0].image,
  },
  {
    title: "Bakes",
    note: "Warm trays",
    href: "/products#bake",
    image: products[9].image,
  },
  {
    title: "Sweets",
    note: "Soft finish",
    href: "/products#sweet",
    image: products[12].image,
  },
  {
    title: "Gift picks",
    note: "Quick sets",
    href: "/offers",
    image: products[6].image,
  },
];

export const homePromoStrips: PromoStrip[] = [
  {
    title: "Morning plate",
    note: "Coffee and one sweet.",
    href: "/contact",
    image: "/pekon.jpg",
  },
  {
    title: "Sandwich line",
    note: "Fast lunch shelf.",
    href: "/products#bread",
    image: "/pekon1.jpg",
  },
  {
    title: "Croissant drop",
    note: "Hot tray, short run.",
    href: "/products#sweet",
    image: "/pekon2.jpg",
  },
];

export const offerBanners: PromoStrip[] = [
  {
    title: "Morning set",
    note: "Bread, coffee, one soft sweet.",
    href: "/products",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/08/21687017_1537133163014949_4897168709845095684_o-630x693.jpg",
  },
  {
    title: "Weekend shelf",
    note: "Round loaves and long table pieces.",
    href: "/products",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-2-630x693.jpg",
  },
  {
    title: "Cafe hour",
    note: "Short menu. Fresh trays.",
    href: "/contact",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-1-630x693.jpg",
  },
];

export const locations: Location[] = [
  {
    city: "Prishtina",
    address: "Rruga B, morning counter",
    hours: "07:00 - 22:00",
  },
  {
    city: "Fushe Kosove",
    address: "Industrial zone, bakery hall",
    hours: "06:30 - 21:00",
  },
  {
    city: "Gjilan",
    address: "City center, coffee corner",
    hours: "07:00 - 21:30",
  },
  {
    city: "Prizren",
    address: "Old town edge, daily shelf",
    hours: "07:30 - 22:00",
  },
];

export const socialHandle = "@pekonbakery";

export const featuredProducts = products.filter((product) => product.featured);

export function getCategoryLabel(category: CategoryKey) {
  return categories.find((item) => item.key === category)?.label ?? "Product";
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getAdjacentProducts(slug: string) {
  const index = products.findIndex((product) => product.slug === slug);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: products[(index - 1 + products.length) % products.length],
    next: products[(index + 1) % products.length],
  };
}

export function getRelatedProducts(product: Product) {
  const related = products.filter(
    (item) => item.category === product.category && item.slug !== product.slug,
  );

  if (related.length >= 3) {
    return related.slice(0, 3);
  }

  return products.filter((item) => item.slug !== product.slug).slice(0, 3);
}
