import type { Metadata } from "next";
import Link from "next/link";

import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/storefront-data";

export const metadata: Metadata = {
  title: "Products",
  description: "Browse breads, bakes, and sweets on the Pekon shelf.",
};

export default function ProductsPage() {
  return (
    <div className="page-offset bg-white">
      <section className="section-red">
        <div className="page-frame py-12 sm:py-16">
          <div className="max-w-3xl space-y-5">
            <p className="eyebrow text-[var(--brand-gold)]">Products</p>
            <h1 className="text-5xl font-black uppercase leading-[0.94] sm:text-6xl">
              Daily shelf
            </h1>
            <p className="max-w-md text-sm leading-7 text-white/82">
              Bread, bakes, and sweets in clean square shelves. No extra chrome.
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
                    className={`text-4xl font-black uppercase leading-none sm:text-5xl ${
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
                  Tight product shelves with direct links into the single-product page.
                </p>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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
