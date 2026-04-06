import type { Metadata } from "next";
import Image from "next/image";

import { locations } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "About",
  description: "Short Pekon brand story with image-led bakery sections.",
};

export default function AboutPage() {
  return (
    <div className="page-offset bg-white">
      <section className="section-red">
        <div className="page-frame grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">About</p>
            <h1 className="text-5xl font-black uppercase leading-[0.94] sm:text-6xl">
              Built for the daily line.
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Bread first, sweets next, coffee close by. Short copy and fast shelves.
            </p>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden rounded-[1rem] lg:min-h-[30rem]">
            <Image
              src="/pekon1.jpg"
              alt="Pekon sandwich line"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-frame grid gap-6 py-10 sm:py-14 lg:grid-cols-2">
          <article className="rounded-[1rem] bg-[var(--surface)] p-6">
            <p className="eyebrow">Morning</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-[var(--brand-red)]">
              Fast shelf
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              Quick display, clean counters, and product-first browsing across the whole site.
            </p>
          </article>

          <article className="rounded-[1rem] bg-[var(--surface)] p-6">
            <p className="eyebrow">Craft</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-[var(--brand-red)]">
              Short story
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              Fewer boxes, tighter sections, and one strong color system from header to footer.
            </p>
          </article>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-10 sm:py-14">
          <div className="space-y-3">
            <p className="eyebrow text-[var(--brand-gold)]">Locations</p>
            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
              Visit Pekon
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {locations.map((location) => (
              <article key={location.city} className="rounded-[1rem] bg-white p-5 text-[var(--ink)]">
                <h3 className="text-2xl font-black uppercase text-[var(--brand-red)]">
                  {location.city}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">{location.address}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{location.hours}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
