import Image from "next/image";
import Link from "next/link";

import { HomePromoSlider } from "@/components/home-promo-slider";
import { ProductCard } from "@/components/product-card";
import pekonIcon from "../../pekon-icon.png";
import {
  featuredProducts,
  homeHero,
  homePromoStrips,
  homeShortcuts,
  products,
} from "@/lib/storefront-data";

const giftPicks = featuredProducts.slice(0, 4);
const favoritePicks = products.slice(4, 8);
const merchPicks = products.slice(12, 16);

export default function Home() {
  return (
    <>
      <section className="relative min-h-[44rem] overflow-hidden bg-[var(--brand-red)] text-white sm:min-h-[52rem] lg:min-h-[60rem]">
        <Image
          src={homeHero.image}
          alt={homeHero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[rgba(41,21,23,0.34)]" />

        <div className="page-frame relative flex min-h-[44rem] items-center justify-center py-32 text-center sm:min-h-[52rem] sm:py-36 lg:min-h-[60rem] lg:py-44">
          <div className="rise-in max-w-2xl space-y-4">
            <Image
              src={pekonIcon}
              alt="Ikona Pekon"
              width={96}
              height={96}
              priority
              className="mx-auto h-20 w-20 object-contain sm:h-24 sm:w-24"
            />
            <h1 className="display-title mx-auto max-w-[14ch] text-5xl font-black uppercase text-white [text-shadow:0_6px_18px_rgba(41,21,23,0.45)] sm:text-6xl lg:text-7xl">
              {homeHero.title}
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-7 text-white [text-shadow:0_4px_12px_rgba(41,21,23,0.42)]">
              {homeHero.blurb}
            </p>
            <div className="pt-2">
              <Link
                href={homeHero.primaryCtaHref}
                className="button-chip bg-[var(--brand-red)] text-white"
                style={{ borderRadius: "999px" }}
              >
                {homeHero.primaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-16 sm:py-20">
          <div className="text-center">
            <h2 className="section-title text-3xl font-black uppercase sm:text-4xl">
              Çfarë gjen çdo ditë
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {homeShortcuts.map((item, index) => (
              <Link key={item.title} href={item.href} className="group space-y-4">
                <div className="relative mx-auto h-28 w-28 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    priority={index < 2}
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-black uppercase tracking-[0.06em] text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/72">{item.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid gap-0 sm:grid-cols-3">
          <div className="relative h-[24rem] sm:h-[32rem] lg:h-[44rem]">
            <Image
              src="/pekon.jpg"
              alt="Ëmbëlsirë Pekon"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[24rem] sm:h-[32rem] lg:h-[44rem]">
            <Image
              src="/pekon1.jpg"
              alt="Sanduiçe Pekon"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[24rem] sm:h-[32rem] lg:h-[44rem]">
            <Image
              src="/pekon2.jpg"
              alt="Kroasan Pekon"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="logo-pattern-surface">
        <div className="page-frame py-16 sm:py-20">
          <div className="text-center">
            <h2 className="section-title text-3xl font-black uppercase text-[var(--brand-red)] sm:text-4xl">
              Të përzgjedhurat
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {giftPicks.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index < 2} />
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-[18rem] overflow-hidden rounded-[1rem] sm:min-h-[24rem]">
              <Image
                src="/pekon2.jpg"
                alt="Kafe dhe ëmbëlsirë në Pekon"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h2 className="section-title max-w-xl text-4xl font-black uppercase text-[var(--brand-red)] sm:text-5xl">
                Kafe. Ëmbëlsirë. Pauzë e shpejtë.
              </h2>
              <p className="max-w-md text-sm leading-7 text-[var(--ink-soft)]">
                Pika të ndritshme, vitrinë e freskët dhe produkte që merren shpejt për
                në punë, në shtëpi ose gjatë shëtitjes në qytet.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="button-chip">
                  Vizito Pekon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-16 sm:py-20">
          <div className="text-center">
            <h2 className="section-title text-3xl font-black uppercase sm:text-4xl">
              Të preferuarat
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {favoritePicks.map((product, index) => (
              <ProductCard key={product.slug} product={product} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="logo-pattern-surface">
        <div className="page-frame py-16 sm:py-20">
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <HomePromoSlider items={homePromoStrips} />

            <div className="flex h-full flex-col justify-center space-y-4">
              <div>
                <h2 className="section-title text-4xl font-black uppercase text-[var(--brand-red)] sm:text-5xl">
                  Nga vitrina
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {homePromoStrips.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-[1rem] border border-[rgba(41,21,23,0.12)] bg-white p-4"
                  >
                    <p className="eyebrow">{item.title}</p>
                    <p className="mt-3 text-base font-black uppercase leading-tight text-[var(--ink)]">
                      {item.note}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="section-title text-3xl font-black uppercase text-[var(--brand-red)] sm:text-4xl">
              Më shumë shije
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {merchPicks.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/products" className="button-chip">
              Shih katalogun e plotë
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="grid gap-0 sm:grid-cols-3">
          <div className="relative h-[24rem] sm:h-[32rem] lg:h-[44rem]">
            <Image
              src="/pekon3.jpg"
              alt="Specialitet sanduiçi Pekon"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[24rem] sm:h-[32rem] lg:h-[44rem]">
            <Image
              src="/pekon4.jpg"
              alt="Kroasan special Pekon"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative h-[24rem] sm:h-[32rem] lg:h-[44rem]">
            <Image
              src="/pekon5.jpg"
              alt="Ëmbëlsirë me çokollatë nga Pekon"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
