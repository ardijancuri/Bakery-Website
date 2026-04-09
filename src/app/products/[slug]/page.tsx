import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProductCard } from "@/components/product-card";
import { ProductSpotlight } from "@/components/product-spotlight";
import {
  getAdjacentProducts,
  getCategoryLabel,
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/lib/storefront-data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Produkti nuk u gjet",
    };
  }

  return {
    title: product.name,
    description: product.note,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { previous, next } = getAdjacentProducts(product.slug);
  const relatedProducts = getRelatedProducts(product);

  return (
    <div className="page-offset-red">
      <section className="section-red">
        <div className="page-frame page-hero-block">
          <div className="flex flex-wrap gap-4 text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-white/78">
            <Link href={previous ? `/products/${previous.slug}` : "/products"}>Para</Link>
            <Link href="/products">Te produktet</Link>
            <Link href={next ? `/products/${next.slug}` : "/products"}>Pas</Link>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="hero-copy-wide space-y-4">
              <p className="eyebrow text-[var(--brand-gold)]">{getCategoryLabel(product.category)}</p>
              <h1 className="display-title max-w-4xl text-5xl font-black uppercase sm:text-6xl">
                {product.name}
              </h1>
              <p className="max-w-md text-base text-white/82">{product.note}</p>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/78">
              Një produkt me përbërje të qarta dhe shije të menduara për vitrinën e
              përditshme të Pekon.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="page-frame grid gap-10 py-10 sm:py-14 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <ProductSpotlight product={product} />

          <div className="space-y-8">
            <div className="space-y-3">
              <p className="eyebrow">Përbërësit</p>
              <p className="text-sm leading-7 text-[var(--ink-soft)]">{product.ingredients}</p>
            </div>

            <div className="soft-rule-dark" />

            <div className="space-y-3">
              <p className="eyebrow">Përshkrimi</p>
              <p className="text-sm leading-7 text-[var(--ink-soft)]">{product.story}</p>
            </div>

            <div className="soft-rule-dark" />

            <div className="flex flex-wrap gap-3">
              <Link href="/products" className="button-chip">
                Më shumë produkte
              </Link>
              <Link
                href="/contact"
                className="button-chip button-chip-outline text-[var(--brand-red)]"
              >
                Kontakto Pekon
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-red">
        <div className="page-frame py-10 sm:py-14">
          <div className="space-y-3">
            <p className="eyebrow text-[var(--brand-gold)]">Më shumë nga vitrina</p>
            <h2 className="section-title text-4xl font-black uppercase sm:text-5xl">
              Produkte të ngjashme
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((relatedProduct, index) => (
              <ProductCard
                key={relatedProduct.slug}
                product={relatedProduct}
                priority={index === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
