"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { PromoStrip } from "@/lib/storefront-data";

type HomePromoSliderProps = {
  items: PromoStrip[];
};

export function HomePromoSlider({ items }: HomePromoSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, [items.length]);

  if (!items.length) {
    return null;
  }

  const activeItem = items[activeIndex];

  return (
    <div className="relative w-full max-w-[34rem]">
      <Link
        href={activeItem.href}
        className="group relative block aspect-square overflow-hidden rounded-[1.6rem] bg-[var(--surface)] shadow-[var(--shadow)]"
      >
        <Image
          src={activeItem.image}
          alt={activeItem.title}
          fill
          priority={activeIndex === 0}
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(41,21,23,0.04),rgba(41,21,23,0.32))]" />
      </Link>

      {items.length > 1 ? (
        <>
          <div className="mt-5 flex items-center justify-center gap-2">
            {items.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    isActive ? "w-9 bg-[var(--brand-red)]" : "w-2.5 bg-[rgba(209,35,40,0.22)]"
                  }`}
                  aria-label={`Shfaq figurën ${index + 1}`}
                />
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
