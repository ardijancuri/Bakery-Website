import type { Metadata } from "next";
import Image from "next/image";

import { locations } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "Rreth Nesh",
  description: "Historia e Pekon Bakery nga viti 1995 dhe zgjerimi i saj në Shkup.",
};

export default function AboutPage() {
  return (
    <div className="page-offset-red">
      <section className="section-red">
        <div className="page-frame page-hero-block grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">Rreth Nesh</p>
            <h1 className="display-title text-5xl font-black uppercase sm:text-6xl">
              Nga viti 1995 te pikat e Pekon në Shkup.
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Pekon u hap në vitin 1995, ndërsa koncepti modern Pekon Bakery u zgjerua
              nga Tetova drejt Shkupit për të sjellë bukë, snack dhe ëmbëlsira të
              freskëta çdo ditë.
            </p>
          </div>

          <div className="relative min-h-[20rem] overflow-hidden rounded-[1rem] lg:min-h-[30rem]">
            <Image
              src="/pekon1.jpg"
              alt="Vitrina e sanduiçeve Pekon"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-frame grid gap-6 py-10 sm:py-14 lg:grid-cols-2">
          <article className="surface-card rounded-[1rem] p-6">
            <p className="eyebrow">Traditë</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-[var(--brand-red)]">
              Që nga 1995
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              Brendi u ndërtua mbi bukë të freskët, shërbim të shpejtë dhe cilësi të
              qëndrueshme për konsum të përditshëm familjar.
            </p>
          </article>

          <article className="surface-card rounded-[1rem] p-6">
            <p className="eyebrow">Zgjerim</p>
            <h2 className="mt-3 text-3xl font-black uppercase text-[var(--brand-red)]">
              Nga Tetova në Shkup
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--ink-soft)]">
              Pekon Bakery u rrit nga baza e saj në Tetovë drejt pikave urbane në
              Shkup, përfshirë East Gate Mall dhe lokacione të tjera me frekuencë të
              lartë.
            </p>
          </article>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-10 sm:py-14">
          <div className="space-y-3">
            <p className="eyebrow text-[var(--brand-gold)]">Pikat Tona</p>
            <h2 className="section-title text-4xl font-black uppercase sm:text-5xl">
              Na gjeni në Shkup
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {locations.map((location) => (
              <article key={location.name} className="rounded-[1rem] bg-white p-5 text-[var(--ink)]">
                <h3 className="text-2xl font-black uppercase text-[var(--brand-red)]">
                  {location.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                  {location.city}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{location.address}</p>
                <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">{location.note}</p>
                <p className="mt-2 text-sm font-semibold text-[var(--ink)]">{location.hours}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
