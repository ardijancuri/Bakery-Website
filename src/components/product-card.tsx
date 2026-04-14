import Image from "next/image";
import Link from "next/link";

import { getCategoryLabel, type Product } from "@/lib/storefront-data";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-[rgba(209,35,40,0.14)] bg-white px-3 pb-5 pt-4 text-center text-[var(--ink)] sm:rounded-[2rem] sm:px-6 sm:pb-8 sm:pt-6">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative mx-auto aspect-square w-full max-w-[9rem] sm:max-w-[13rem]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority={priority}
            sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 22vw"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col items-center pt-3 sm:pt-4">
        <Link href={`/products/${product.slug}`} className="inline-block">
          <h3 className="card-title clamp-2 text-[1.05rem] font-black text-[var(--ink)] group-hover:text-[var(--brand-red)] sm:text-[1.35rem]">
            {product.name}
          </h3>
        </Link>
        <p className="clamp-2 mt-1.5 max-w-[12rem] text-[0.78rem] leading-5 text-[var(--ink-soft)] sm:mt-2 sm:max-w-[15rem] sm:text-sm sm:leading-6">
          {product.note}
        </p>
        <p className="mt-1.5 text-[0.78rem] leading-5 text-[var(--ink)] sm:mt-2 sm:text-sm sm:leading-6">
          {getCategoryLabel(product.category)}
        </p>
        <div className="mt-auto pt-4 sm:pt-6">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-red)] px-4 py-2.5 text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-white sm:px-7 sm:py-3 sm:text-[0.82rem] sm:tracking-[0.18em]"
          >
            Shih produktin
          </Link>
        </div>
      </div>
    </article>
  );
}
