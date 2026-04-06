import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { offerBanners } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "Offers",
  description: "Fresh promotional shelves and short bakery offers for Pekon Bakery.",
};

export default function OffersPage() {
  return (
    <div className="page-offset bg-white">
      <section className="section-red">
        <div className="page-frame py-12 sm:py-16">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">Offers</p>
            <h1 className="text-5xl font-black uppercase leading-[0.94] sm:text-6xl">
              Fresh offers
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Short sets, quick trays, and promo shelves built around bakery traffic.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-frame py-10 sm:py-14">
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <Link
              href={offerBanners[0].href}
              className="group relative min-h-[24rem] overflow-hidden rounded-[1rem] lg:min-h-[34rem]"
            >
              <Image
                src={offerBanners[0].image}
                alt={offerBanners[0].title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,21,23,0.08),rgba(41,21,23,0.74))]" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-7 text-white">
                <p className="eyebrow text-[var(--brand-gold)]">Featured</p>
                <h2 className="text-5xl font-black uppercase leading-none">{offerBanners[0].title}</h2>
                <p className="text-sm text-white/82">{offerBanners[0].note}</p>
              </div>
            </Link>

            <div className="grid gap-5">
              {offerBanners.slice(1).map((offer) => (
                <Link
                  key={offer.title}
                  href={offer.href}
                  className="group relative min-h-[16rem] overflow-hidden rounded-[1rem]"
                >
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,21,23,0.02),rgba(41,21,23,0.74))]" />
                  <div className="absolute inset-x-0 bottom-0 space-y-2 p-6 text-white">
                    <h3 className="text-3xl font-black uppercase leading-none">{offer.title}</h3>
                    <p className="text-sm text-white/82">{offer.note}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-10 sm:py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Breakfast sets",
              "Weekend trays",
              "Coffee breaks",
            ].map((item) => (
              <article key={item} className="rounded-[1rem] bg-white p-5 text-[var(--ink)]">
                <p className="eyebrow">Offer</p>
                <p className="mt-3 text-2xl font-black uppercase leading-tight text-[var(--brand-red)]">
                  {item}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
