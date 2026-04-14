import type { Metadata } from "next";
import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { categories, products, type CategoryKey } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "Produktet",
  description: "Shfleto bukët, brumërat dhe ëmbëlsirat e Pekon Bakery.",
};

const categoryDescriptions: Record<CategoryKey, string> = {
  bread: "Bukë të freskëta për shtëpi, sanduiçe dhe tavolina familjare.",
  bake: "Brumëra të kripura dhe specialitete për ritmin e shpejtë të qytetit.",
  sweet: "Ëmbëlsira të zgjedhura për kafe, desert dhe pauza të vogla gjatë ditës.",
};

export default function ProductsPage() {
  return (
    <div className="page-offset-red">
      <section className="section-red">
        <div className="page-frame page-hero-block">
          <div className="hero-copy-wide space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">Produktet</p>
            <h1 className="display-title text-5xl font-black uppercase sm:text-6xl">
              Vitrina e përditshme
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Bukë, brumëra dhe ëmbëlsira të Pekon për mëngjes, drekë të shpejtë dhe
              pauzë me kafe.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category.key}
                href={`#${category.key}`}
                className="button-chip button-chip-light"
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {categories.map((category, index) => {
        const categoryProducts = products.filter(
          (product) => product.category === category.key,
        );
        const isRed = index % 2 === 1;

        return (
          <section
            key={category.key}
            id={category.key}
            className={isRed ? "section-red scroll-mt-28" : "bg-white scroll-mt-28"}
          >
            <div className="page-frame py-10 sm:py-14">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-3">
                  <p className="eyebrow text-[var(--brand-gold)]">{category.note}</p>
                  <h2
                    className={`section-title text-4xl font-black uppercase sm:text-5xl ${
                      isRed ? "text-white" : "text-[var(--brand-red)]"
                    }`}
                  >
                    {category.label}
                  </h2>
                </div>
                <p
                  className={`max-w-sm text-sm leading-7 ${
                    isRed ? "text-white/78" : "text-[var(--ink-soft)]"
                  }`}
                >
                  {categoryDescriptions[category.key]}
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-4">
                {categoryProducts.map((product, productIndex) => (
                  <ProductCard
                    key={product.slug}
                    product={product}
                    priority={index === 0 && productIndex < 2}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
