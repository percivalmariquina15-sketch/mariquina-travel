import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "./icons";
import { vehicles } from "../lib/vehicles";

function VehicleCardContent({ vehicle }: { vehicle: (typeof vehicles)[number] }) {
  return (
    <>
      <div className="relative aspect-[5/6] overflow-hidden">
        <Image
          src={vehicle.images[0]}
          alt={`${vehicle.name} available for rent`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-lg font-bold text-ink">{vehicle.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted">
          <UsersIcon className="h-4 w-4" />
          {vehicle.seats}
        </p>
        <p className="mt-2 text-xl font-bold text-ink">{vehicle.rate}</p>
      </div>
    </>
  );
}

export default function Vehicles() {
  return (
    <section id="vehicles" className="bg-light py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-ink">Our Vehicles</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.slug}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white"
            >
              <VehicleCardContent vehicle={vehicle} />
              <div className="grid grid-cols-2 gap-3 px-4 pb-4">
                <a
                  href="#inquiry-form"
                  className="flex h-10 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Book Now
                </a>
                <Link
                  href={`/vehicles/${vehicle.slug}`}
                  className="flex h-10 items-center justify-center rounded-lg border border-primary text-sm font-semibold text-primary transition-colors hover:bg-tint"
                >
                  View Photos
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
