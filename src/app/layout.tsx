import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteName } from "@/lib/storefront-data";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description:
    "Pekon Bakery në Maqedoninë e Veriut me bukë, brumëra, ëmbëlsira dhe pika shitjeje në Shkup.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq" className={`${jost.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-white text-[var(--ink)]"
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
