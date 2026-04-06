import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-offset section-red flex min-h-[80vh] items-center">
      <div className="page-frame space-y-5 py-12">
        <p className="eyebrow text-[var(--brand-gold)]">Not found</p>
        <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.94] sm:text-6xl">
          This page is off the shelf.
        </h1>
        <p className="max-w-md text-sm leading-7 text-white/82">
          The route is missing from the current Pekon storefront build.
        </p>
        <Link href="/products" className="button-chip button-chip-light">
          Back to products
        </Link>
      </div>
    </div>
  );
}
