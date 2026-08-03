import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "../../components/icons";
import PhotoGallery from "../../components/photo-gallery";
import { vehicles, type Vehicle } from "../../lib/vehicles";

const siteUrl = "https://mariquinatravel.com";

export function generateStaticParams() {
  return vehicles.filter((v) => v.page).map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug && v.page);
  if (!vehicle) return {};
  const title = `${vehicle.name} (${vehicle.seats}) Rental in Cavite | Mariquina Travel`;
  const description = `Rent our ${vehicle.name} — ${vehicle.seats}, ${vehicle.rate}. Car & van rental in Cavite with or without driver. View photos and book via Messenger.`;
  return {
    title,
    description,
    alternates: {
      canonical: `${siteUrl}/vehicles/${slug}`,
    },
    openGraph: {
      type: "website",
      url: `${siteUrl}/vehicles/${slug}`,
      siteName: "Mariquina Travel",
      title,
      description,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${vehicle.name} rental — Mariquina Travel`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}

function parseRate(rate: string): { low: number; high: number } {
  const match = rate.match(/₱([\d,]+)(?:\s*[–-]\s*₱([\d,]+))?/);
  const low = Number((match?.[1] ?? "0").replace(/,/g, ""));
  const high = Number((match?.[2] ?? match?.[1] ?? "0").replace(/,/g, ""));
  return { low, high };
}

function productSchema(vehicle: Vehicle) {
  const { low, high } = parseRate(vehicle.rate);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} (${vehicle.seats}) Rental`,
    image: vehicle.images.map((src) => `${siteUrl}${src}`),
    description: `${vehicle.name} for rent in Cavite — ${vehicle.seats}, ${vehicle.rate}. Rental with or without driver, available for out-of-town trips and group tours.`,
    brand: { "@type": "Brand", name: "Mariquina Travel" },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: low,
      highPrice: high,
      priceCurrency: "PHP",
      availability: "https://schema.org/InStock",
    },
  };
}

export default async function VehiclePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const vehicle = vehicles.find((v) => v.slug === slug && v.page);
  if (!vehicle) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-light">
      <div className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo/logo.png"
              alt="Mariquina Travel logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tight">
                <span className="text-ink">Mariquina</span>{" "}
                <span className="text-amber">Travel</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                Van and Car Rental
              </span>
            </span>
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <Link
          href="/#vehicles"
          className="flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Back to Vehicles
        </Link>

        <h1 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">
          {vehicle.name}
        </h1>

        <PhotoGallery images={vehicle.images} name={vehicle.name} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema(vehicle)),
          }}
        />
      </main>
    </div>
  );
}
