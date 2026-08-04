import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.mariquinatravel.com";

export const viewport: Viewport = {
  themeColor: "#0b192e",
};

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const body = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Van & Car Rental in Cavite | Mariquina Travel",
  description:
    "Affordable car & van rental in Cavite with or without driver. Self-drive sedans, 7-seaters, and vans for Manila, Baguio, Tagaytay, La Union, and group tours. Book via Facebook Messenger or call us.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mariquina Travel",
    title: "Van & Car Rental in Cavite | Mariquina Travel",
    description:
      "Affordable car & van rental in Cavite with or without driver. Self-drive sedans, 7-seaters, and vans for Manila, Baguio, Tagaytay, La Union, and group tours. Book via Facebook Messenger or call us.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mariquina Travel — van on the road for car and van rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Van & Car Rental in Cavite | Mariquina Travel",
    description:
      "Affordable car & van rental in Cavite with or without driver. Self-drive sedans, 7-seaters, and vans for Manila, Baguio, Tagaytay, La Union, and group tours.",
    images: ["/images/og-image.jpg"],
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? {
        other: {
          "google-site-verification": process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-PH"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
