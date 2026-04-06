"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/storefront-data";
import pekonLogo from "../../pekon-logo.png";

const leftNavLinks = navLinks.slice(0, 2);
const rightNavLinks = navLinks.slice(2);

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === href;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3">
        <div className="page-frame">
          <div className="nav-shell hidden h-[5.4rem] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center px-8 lg:grid">
            <nav className="flex items-center justify-end gap-7 pr-10">
              {leftNavLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[var(--brand-red)] hover:text-[var(--brand-gold)]"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/" className="flex items-center justify-center px-3">
              <Image
                src={pekonLogo}
                alt="Pekon 1995"
                width={190}
                height={176}
                priority
                className="h-[3.6rem] w-auto object-contain"
              />
            </Link>

            <nav className="flex items-center gap-7 pl-10">
              {rightNavLinks.map((link) => {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-[var(--brand-red)] hover:text-[var(--brand-gold)]"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="nav-shell relative flex h-[4.8rem] items-center justify-between px-4 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-red)] hover:text-[var(--brand-gold)]"
              aria-expanded={isMenuOpen}
              aria-label="Open menu"
            >
              Menu
            </button>

            <Link
              href="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={pekonLogo}
                alt="Pekon 1995"
                width={150}
                height={139}
                priority
                className="h-[3rem] w-auto object-contain"
              />
            </Link>

            <Link
              href="/products"
              className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-red)] hover:text-[var(--brand-gold)]"
            >
              Shop
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-[var(--brand-red)] text-white transition-all duration-300 lg:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="page-frame flex min-h-screen flex-col justify-between py-6">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <Image
                src={pekonLogo}
                alt="Pekon 1995"
                width={170}
                height={158}
                className="h-[3.2rem] w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[var(--brand-gold)]"
            >
              Close
            </button>
          </div>

          <nav className="grid gap-4 py-12">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-4xl font-black uppercase tracking-[0.05em] ${
                    active ? "text-[var(--brand-gold)]" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="space-y-4">
            <div className="soft-rule" />
            <div className="space-y-1 text-sm text-white/78">
              <p>Open daily</p>
              <p>07:00 - 22:00</p>
            </div>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="button-chip button-chip-light"
            >
              Find bakery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
