import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-offset-red section-red flex min-h-[80vh] items-center">
      <div className="page-frame space-y-5 py-12">
        <p className="eyebrow text-[var(--brand-gold)]">Nuk u gjet</p>
        <h1 className="display-title max-w-4xl text-5xl font-black uppercase sm:text-6xl">
          Kjo faqe nuk është në dispozicion.
        </h1>
        <p className="max-w-md text-sm leading-7 text-white/82">
          Rruga që kërkove nuk ekziston në faqen aktuale të Pekon Bakery.
        </p>
        <Link href="/products" className="button-chip button-chip-light">
          Kthehu te produktet
        </Link>
      </div>
    </div>
  );
}
