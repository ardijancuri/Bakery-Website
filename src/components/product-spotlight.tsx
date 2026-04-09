import Image from "next/image";

import { getCategoryLabel, type Product } from "@/lib/storefront-data";

type ProductSpotlightProps = {
  product: Product;
};

export function ProductSpotlight({ product }: ProductSpotlightProps) {
  return (
    <figure className="space-y-4">
      <div className="image-frame bg-[var(--surface)]">
        <div className="relative aspect-square p-6 sm:p-8">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 52vw"
            className="object-contain p-6"
          />
        </div>
      </div>
      <figcaption className="flex flex-wrap items-center justify-between gap-3 text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-[var(--brand-red)]">
        <span>{getCategoryLabel(product.category)}</span>
        <span>Në vitrinë çdo ditë</span>
      </figcaption>
    </figure>
  );
}
