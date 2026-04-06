import Image from "next/image";
import Link from "next/link";

import { getCategoryLabel, type Product } from "@/lib/storefront-data";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[2rem] border border-[rgba(209,35,40,0.14)] bg-white px-5 pb-7 pt-6 text-center text-[var(--ink)] sm:px-6 sm:pb-8">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative mx-auto aspect-square w-full max-w-[13rem]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 22vw"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col items-center pt-4">
        <Link href={`/products/${product.slug}`} className="inline-block">
          <h3 className="min-h-[4.6rem] text-[1.35rem] font-black leading-tight text-[var(--ink)] group-hover:text-[var(--brand-red)]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 min-h-[3rem] max-w-[15rem] text-sm leading-6 text-[var(--ink-soft)]">
          {product.note}
        </p>
        <p className="mt-2 text-sm leading-6 text-[var(--ink)]">
          {getCategoryLabel(product.category)}
        </p>
        <div className="mt-7">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex min-h-[3rem] items-center justify-center rounded-full bg-[var(--brand-red)] px-7 text-[0.82rem] font-extrabold uppercase tracking-[0.18em] text-white"
          >
            View product
          </Link>
        </div>
      </div>
    </article>
  );
}
