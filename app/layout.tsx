import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";

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
  metadataBase: new URL("https://mariquinatravel.com/"),
  title: "Mariquina Travel | Car & Van Rental",
  description:
    "Affordable car and van rental with or without driver. Book easily via Facebook Messenger or call us directly.",
  openGraph: {
    type: "website",
    url: "https://mariquinatravel.com/",
    siteName: "Mariquina Travel",
    title: "Mariquina Travel | Car & Van Rental",
    description:
      "Affordable car and van rental with or without driver. Book easily via Facebook Messenger or call us directly.",
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
    title: "Mariquina Travel | Car & Van Rental",
    description:
      "Affordable car and van rental with or without driver. Book easily via Facebook Messenger or call us directly.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
