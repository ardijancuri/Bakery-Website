import type { Metadata } from "next";

import { locations } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pekon Bakery for stock, trays, or bakery details.",
};

export default function ContactPage() {
  return (
    <div className="page-offset bg-white">
      <section className="section-red">
        <div className="page-frame py-12 sm:py-16">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">Contact</p>
            <h1 className="text-5xl font-black uppercase leading-[0.94] sm:text-6xl">
              Talk to Pekon
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Ask about stock, trays, events, or the closest bakery.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-frame grid gap-8 py-10 sm:py-14 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="space-y-6 rounded-[1rem] bg-[var(--surface)] p-6">
            <div>
              <p className="eyebrow">Info</p>
              <div className="mt-4 space-y-1 text-sm leading-7 text-[var(--ink-soft)]">
                <p>Zona Industriale</p>
                <p>Fushe Kosove</p>
                <p>(+383) 38 603 521</p>
                <p>hello@pekonbakery.com</p>
              </div>
            </div>

            <div className="soft-rule-dark" />

            <div>
              <p className="eyebrow">Hours</p>
              <p className="mt-4 text-sm text-[var(--ink-soft)]">Daily, 07:00 - 22:00</p>
            </div>
          </div>

          <form className="grid gap-4 rounded-[1rem] bg-[var(--surface)] p-6">
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Email
              <input
                type="email"
                placeholder="your@email.com"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Topic
              <input
                type="text"
                placeholder="Orders, trays, events"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-[var(--ink-soft)]">
              Message
              <textarea
                rows={5}
                placeholder="Short note"
                className="rounded-[0.95rem] border border-[var(--line)] bg-white px-4 py-3 text-[var(--ink)]"
              />
            </label>
            <button type="button" className="button-chip w-fit">
              Send message
            </button>
          </form>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-10 sm:py-14">
          <div className="space-y-3">
            <p className="eyebrow text-[var(--brand-gold)]">Locations</p>
            <h2 className="text-4xl font-black uppercase leading-none sm:text-5xl">
              Find a bakery
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
