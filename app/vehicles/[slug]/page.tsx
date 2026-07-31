import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeftIcon } from "../../components/icons";
import PhotoGallery from "../../components/photo-gallery";
import { vehicles } from "../../lib/vehicles";

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
  return {
    title: `${vehicle.name} Photos | Mariquina Travel`,
    description: `Photos of our ${vehicle.name.toLowerCase()} — ${vehicle.seats}, ${vehicle.rate}.`,
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
      </main>
    </div>
  );
}
