import Image from "next/image";
import Link from "next/link";

import { locations, navLinks, socialHandle } from "@/lib/storefront-data";
import pekonLogo from "../../pekon-logo.png";

const mainLocations = locations.slice(0, 2);
const footerNav = navLinks.slice(0, 5);

export function SiteFooter() {
  return (
    <footer className="section-red relative mt-0 overflow-visible">
      <div className="relative z-20">
        <div className="footer-pattern-strip h-32 sm:h-36" />
        <div className="pointer-events-none absolute inset-x-0 top-full flex -translate-y-1/2 justify-center">
          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-white p-4 sm:h-40 sm:w-40">
            <Image
              src={pekonLogo}
              alt="Pekon 1995"
              width={190}
              height={176}
              className="h-auto w-[7.1rem] object-contain sm:w-[7.8rem]"
            />
          </div>
        </div>
      </div>

      <div className="page-frame relative z-10 pb-12 pt-28 text-center sm:pb-14 sm:pt-32">
        <div className="grid gap-8 lg:grid-cols-2">
          {mainLocations.map((location) => (
            <div key={location.city} className="space-y-2">
              <p className="text-[0.82rem] font-extrabold uppercase tracking-[0.1em] text-white">
                {location.city}
              </p>
              <div className="space-y-1 text-sm leading-7 text-white/84">
                <p>{location.address}</p>
                <p>{location.hours}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[0.9rem] font-extrabold uppercase tracking-[0.06em] text-white">
          {footerNav.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-[var(--brand-gold)]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/84">
          <span>{socialHandle}</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>YouTube</span>
        </div>

        <div className="mt-10 pt-5 text-xs uppercase tracking-[0.22em] text-white/72">
          <div className="soft-rule" />
          <div className="flex flex-col gap-2 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p>Pekon Bakery</p>
            <p>{new Date().getFullYear()} all rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
