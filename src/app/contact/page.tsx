import type { Metadata } from "next";

import { contactDetails, locations } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "Kontakti",
  description: "Kontakto Pekon Bakery për porosi, informata dhe pikat në Shkup.",
};

export default function ContactPage() {
  return (
    <div className="page-offset-red">
      <section className="section-red">
        <div className="page-frame page-hero-block">
          <div className="hero-copy-wide space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">Kontakti</p>
            <h1 className="display-title text-5xl font-black uppercase sm:text-6xl">
              Na kontakto
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Pyet për produktet, porositë dhe pikën më të afërt të Pekon në Shkup.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-frame grid gap-8 py-10 sm:py-14 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6 rounded-[1rem] bg-[var(--surface)] p-6">
            <div>
              <p className="eyebrow">Informata</p>
              <div className="mt-4 space-y-1 text-sm leading-7 text-[var(--ink-soft)]">
                <p>{contactDetails.city}</p>
                <p>{contactDetails.summary}</p>
                {contactDetails.phones.map((phone) => (
                  <p key={phone}>{phone}</p>
                ))}
                <p>Instagram: {contactDetails.social}</p>
              </div>
            </div>

            <div className="soft-rule-dark" />

            <div>
              <p className="eyebrow">Orari</p>
              <p className="mt-4 text-sm text-[var(--ink-soft)]">{contactDetails.hours}</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-[1rem] bg-[var(--surface)] p-6">
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Emri
              <input
                type="text"
                placeholder="Emri juaj"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              E-mail
              <input
                type="email"
                placeholder="email@juaj.com"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Tema
              <input
                type="text"
                placeholder="Porosi, oferta, informata"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Mesazhi
              <textarea
                rows={5}
                placeholder="Shkruani kërkesën tuaj"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <button type="button" className="button-chip w-fit">
              Dërgo mesazhin
            </button>
          </form>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-10 sm:py-14">
          <div className="space-y-3">
            <p className="eyebrow text-[var(--brand-gold)]">Pikat Tona</p>
            <h2 className="section-title text-4xl font-black uppercase sm:text-5xl">
              Gjej pikën më të afërt
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
