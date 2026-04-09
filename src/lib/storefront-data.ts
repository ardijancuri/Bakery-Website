export const siteName = "Pekon Bakery";

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
  name: string;
  city: string;
  address: string;
  hours: string;
  note: string;
};

export type ContactDetails = {
  city: string;
  summary: string;
  phones: string[];
  social: string;
  hours: string;
};

export const navLinks = [
  { href: "/", label: "Ballina" },
  { href: "/products", label: "Produktet" },
  { href: "/about", label: "Rreth Nesh" },
  { href: "/offers", label: "Oferta" },
  { href: "/contact", label: "Kontakti" },
] as const;

export const categories: Category[] = [
  { key: "bread", label: "Bukë", note: "Të freskëta çdo ditë" },
  { key: "bake", label: "Brumëra", note: "Të kripura dhe specialitete" },
  { key: "sweet", label: "Ëmbëlsira", note: "Për kafe dhe desert" },
];

export const products: Product[] = [
  {
    slug: "baget-i-rrumbullaket",
    name: "Baget i Rrumbullakët",
    category: "bread",
    note: "Bukë bagetë e rrumbullakët",
    ingredients:
      "Miell gruri, miell elbi, grizë gruri, yndyrë bimore, kripë kuzhine, maja buke.",
    story: "Bukë e përditshme me kore të lehtë dhe brendi të butë.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/24.jpg",
    featured: true,
  },
  {
    slug: "baget-me-qepe",
    name: "Baget me Qepë",
    category: "bread",
    note: "Bagetë me qepë të thekur",
    ingredients:
      "Miell gruri, përforcues për bagetë, maja buke, miell elbi i pjekur, kripë kuzhine, qepë të thara.",
    story: "Shije më e plotë me nuancë të lehtë qepësh në fund.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/25.jpg",
  },
  {
    slug: "baget-sandwich",
    name: "Baget Sanduiç",
    category: "bread",
    note: "Bukë e lehtë për sanduiçe",
    ingredients:
      "Miell gruri, përforcues për bagetë, kripë kuzhine, maja buke, vaj për gatim.",
    story: "Për sanduiçe të shpejta dhe tost të ngrohtë.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/26-1.jpg",
  },
  {
    slug: "baget-thekre-sandwich",
    name: "Baget Thekre për Sanduiç",
    category: "bread",
    note: "Bagetë sanduiçi me thekër",
    ingredients:
      "Miell gruri, miell thekre, miell thekre i pjekur, miell elbi, kripë kuzhine, maja buke, thartirë.",
    story: "Shije e thellë thekre me brendi të butë dhe fund të pastër.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/27.jpg",
    featured: true,
  },
  {
    slug: "broqe-integrale",
    name: "Broqe Integrale",
    category: "bread",
    note: "Broqe me miell integral",
    ingredients:
      "Miell gruri, miell elbi, kripë kuzhine, maja buke, miell integral.",
    story: "Broqe kompakte me strukturë më të fortë dhe profil të pastër drithërash.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/28.jpg",
  },
  {
    slug: "buke-ciabatta-integrale",
    name: "Bukë Ciabatta Integrale",
    category: "bread",
    note: "Ciabatta integrale me vaj ulliri",
    ingredients:
      "Miell gruri, përforcues për ciabatta, vaj ulliri, maja buke.",
    story: "Brendi e ajrosur, kore e hollë dhe notë e lehtë ulliri.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/29.jpg",
  },
  {
    slug: "buke-fitnesi",
    name: "Bukë Fitnesi",
    category: "bread",
    note: "Bukë me fara për mëngjes të plotë",
    ingredients:
      "Miell thekre i shtypur, miell elbi i pjekur, miell gruri, fara liri, fara luledielli, susam, kripë kuzhine, maja buke.",
    story: "E dendur, me fara dhe e përshtatshme për tryeza të gjata mëngjesi.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/30-1.jpg",
    featured: true,
  },
  {
    slug: "buke-malesie",
    name: "Bukë Malësie",
    category: "bread",
    note: "Bukë fshati me thekër",
    ingredients:
      "Miell gruri, miell thekre, kripë kuzhine, maja buke, thartirë, vaj për gatim.",
    story: "Bukë më e rëndë për konsum të përditshëm familjar.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/31.jpg",
  },
  {
    slug: "buke-me-arra",
    name: "Bukë me Arra",
    category: "bake",
    note: "Bukë me arra dhe drithëra",
    ingredients:
      "Miell thekre, tërshërë e shtypur, arra natyrale, fara luledielli, kripë kuzhine, maja buke.",
    story: "Specialitet me shije arrash, më shumë strukturë dhe fund më të errët.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/32.jpg",
  },
  {
    slug: "buke-me-fara-kungulli",
    name: "Bukë me Fara Kungulli",
    category: "bake",
    note: "Bukë me fara kungulli",
    ingredients:
      "Përzierje e farave të bluara, fara kungulli, miell gruri, miell elbi, kripë kuzhine, maja buke, yndyrë bimore.",
    story: "Krokante sipër, e butë brenda dhe me shije të pasur farash.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/33.jpg",
    featured: true,
  },
  {
    slug: "buke-simiti",
    name: "Bukë Simiti",
    category: "bake",
    note: "Bukë e rrumbullakët me susam",
    ingredients:
      "Miell gruri, yndyrë bimore, kripë kuzhine, maja buke, miell elbi.",
    story: "E butë dhe me fund klasik susami.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/38.jpg",
  },
  {
    slug: "trekendesh-me-susam",
    name: "Trekëndësh me Susam",
    category: "bake",
    note: "Specialitet trekëndor me susam",
    ingredients:
      "Miell gruri, susam, vaj për gatim, kripë kuzhine, maja buke.",
    story: "Formë e mprehtë, skaje të thekura dhe shije e shpejtë e kripur.",
    image: "https://bukabakery.com/wp-content/uploads/2021/07/40.jpg",
  },
  {
    slug: "torte-me-karrote",
    name: "Tortë me Karrotë",
    category: "sweet",
    note: "Fetë tortë me karrotë",
    ingredients:
      "Vaj për gatim, sheqer, kripë kuzhine, vezë, kanellë, xhenxhefil, miell gruri, sodë bikarbone, karrota, arra natyrale, gjalpë, krem djathi, aromë vanilje, sheqer pluhur, pluhur për pjekje.",
    story: "Brendi e butë, erëza të ngrohta dhe krem djathi në fund.",
    image: "https://bukabakery.com/wp-content/uploads/2021/08/21-1.jpg",
    featured: true,
  },
  {
    slug: "biskote-natyrale-cokollate-e-bardhe",
    name: "Biskotë Natyrale me Çokollatë të Bardhë",
    category: "sweet",
    note: "Biskotë me çokollatë të bardhë",
    ingredients:
      "Gjalpë, sheqer, vezë, tërshërë e shtypur, arra natyrale, miell gruri, pluhur për pjekje, kanellë, fara kungulli, rrush i thatë, mjaltë, çokollatë e bardhë.",
    story: "Qendër e butë, strukturë drithërash dhe fund më i ëmbël.",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-1-630x693.jpg",
  },
  {
    slug: "biskote-natyrale-cokollate-e-zeze",
    name: "Biskotë Natyrale me Çokollatë të Zezë",
    category: "sweet",
    note: "Biskotë me çokollatë të zezë",
    ingredients:
      "Gjalpë, sheqer, vezë, tërshërë e shtypur, arra natyrale, miell gruri, pluhur për pjekje, kanellë, fara kungulli, rrush i thatë, mjaltë, çokollatë e zezë.",
    story: "Biskotë më e thellë në kakao me teksturë të lehtë drithërash.",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-2-630x693.jpg",
  },
];

export const homeHero: HomeHero = {
  image: "/pekon1.jpg",
  kicker: "Që nga 1995",
  title: "Bukë, brumëra dhe ëmbëlsira çdo ditë.",
  blurb:
    "Pekon Bakery sjell shije të freskëta, shërbim të shpejtë dhe disa pika shitjeje në Shkup.",
  primaryCtaLabel: "Shih produktet",
  primaryCtaHref: "/products",
  secondaryCtaLabel: "Gjej pikën më të afërt",
  secondaryCtaHref: "/contact",
};

export const homeShortcuts: HomeShortcut[] = [
  {
    title: "Bukë",
    note: "Të freskëta çdo ditë",
    href: "/products#bread",
    image: products[0].image,
  },
  {
    title: "Brumëra",
    note: "Të ngrohta nga furra",
    href: "/products#bake",
    image: products[9].image,
  },
  {
    title: "Ëmbëlsira",
    note: "Për kafe dhe desert",
    href: "/products#sweet",
    image: products[12].image,
  },
  {
    title: "Oferta",
    note: "Kombinime ditore",
    href: "/offers",
    image: products[6].image,
  },
];

export const homePromoStrips: PromoStrip[] = [
  {
    title: "Mëngjes",
    note: "Kafe, kroasan dhe ritëm i shpejtë.",
    href: "/contact",
    image: "/pekon.jpg",
  },
  {
    title: "Drekë e shpejtë",
    note: "Sanduiçe dhe brumëra për rrugë.",
    href: "/products#bread",
    image: "/pekon1.jpg",
  },
  {
    title: "Ëmbëlsirë",
    note: "Vitrinë e freskët për çdo ditë.",
    href: "/products#sweet",
    image: "/pekon2.jpg",
  },
];

export const offerBanners: PromoStrip[] = [
  {
    title: "Seti i mëngjesit",
    note: "Kafe, produkt i freskët dhe fillim i shpejtë i ditës.",
    href: "/products",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/08/21687017_1537133163014949_4897168709845095684_o-630x693.jpg",
  },
  {
    title: "Vikend familjar",
    note: "Bukë, simite dhe ëmbëlsira për tavolinën e shtëpisë.",
    href: "/products",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-2-630x693.jpg",
  },
  {
    title: "Pauza me kafe",
    note: "Ëmbëlsirë e butë dhe pije e ngrohtë në çdo pikë Pekon.",
    href: "/contact",
    image:
      "https://bukabakery.com/wp-content/uploads/2021/05/1-1-630x693.jpg",
  },
];

export const locations: Location[] = [
  {
    name: "East Gate Mall",
    city: "Shkup",
    address: "Belasica 2, East Gate Mall, kati -2",
    hours: "Hapur çdo ditë",
    note: "Pikë urbane në qendrën tregtare më të madhe në vend.",
  },
  {
    name: "Qendra e Shkupit",
    city: "Shkup",
    address: "Sv. Kiril i Metodij 13",
    hours: "Çdo ditë, 07:00 - 22:00",
    note: "Për bukë, snack dhe kafe gjatë gjithë ditës.",
  },
  {
    name: "Hristijan Todorovski Karposh",
    city: "Shkup",
    address: "Hristijan Todorovski Karposh 112",
    hours: "Çdo ditë, 07:00 - 22:00",
    note: "Pikë e afërt për lagje, porosi të shpejta dhe produkte të freskëta.",
  },
];

export const contactDetails: ContactDetails = {
  city: "Shkup, Maqedonia e Veriut",
  summary: "Për porosi, informata dhe orientim drejt pikës më të afërt të Pekon.",
  phones: ["+389 70 348 417", "+389 75 219 644"],
  social: "@pekon_bakery",
  hours: "Çdo ditë, 07:00 - 22:00",
};

export const socialHandle = "@pekon_bakery";

export const featuredProducts = products.filter((product) => product.featured);

export function getCategoryLabel(category: CategoryKey) {
  return categories.find((item) => item.key === category)?.label ?? "Produkt";
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
