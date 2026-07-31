import Image from "next/image";
import { FuelIcon, KeyIcon, PinIcon, UsersIcon } from "./icons";

type Vehicle = {
  name: string;
  trim: string;
  seats: string;
  transmission: string;
  fuel: string;
  location: string;
  rate: string;
  image: string;
};

const vehicles: Vehicle[] = [
  {
    name: "Hatchback",
    trim: "Economy · Everyday city driving",
    seats: "4 seats",
    transmission: "Auto",
    fuel: "Gasoline",
    location: "City Center",
    rate: "₱1,500/day",
    image: "/images/vehicles/hatchback-golf.jpg",
  },
  {
    name: "Sedan",
    trim: "Compact · City & short trips",
    seats: "4 seats",
    transmission: "Auto",
    fuel: "Gasoline",
    location: "City Center",
    rate: "₱1,800/day",
    image: "/images/vehicles/sedan-honda.jpg",
  },
  {
    name: "Compact SUV",
    trim: "Family-friendly · Extra cargo",
    seats: "5 seats",
    transmission: "Auto",
    fuel: "Gasoline",
    location: "City Center",
    rate: "₱2,500/day",
    image: "/images/vehicles/compact-suv.jpg",
  },
  {
    name: "7-Seater SUV",
    trim: "Family trips · Long drives",
    seats: "7 seats",
    transmission: "Auto",
    fuel: "Gasoline",
    location: "City Center",
    rate: "₱2,800/day",
    image: "/images/vehicles/suv-jetour.jpg",
  },
  {
    name: "MPV / AUV",
    trim: "Group trips · Long drives",
    seats: "7 seats",
    transmission: "Auto",
    fuel: "Diesel",
    location: "City Center",
    rate: "₱3,200/day",
    image: "/images/vehicles/mpv-carnival.jpg",
  },
  {
    name: "Van (6-Seater)",
    trim: "Airport pickup · Small tours",
    seats: "6 seats",
    transmission: "Manual",
    fuel: "Diesel",
    location: "City Center",
    rate: "₱3,500/day",
    image: "/images/vehicles/van-6-traveller.jpg",
  },
  {
    name: "Van (10-Seater)",
    trim: "Family reunions · Excursions",
    seats: "10 seats",
    transmission: "Manual",
    fuel: "Diesel",
    location: "City Center",
    rate: "₱4,500/day",
    image: "/images/vehicles/van-10-staria.jpg",
  },
  {
    name: "Van (12-Seater)",
    trim: "Bigger groups · Longer tours",
    seats: "12 seats",
    transmission: "Manual",
    fuel: "Diesel",
    location: "City Center",
    rate: "₱5,000/day",
    image: "/images/vehicles/van-12-hiace.jpg",
  },
];

export default function Vehicles() {
  return (
    <section id="vehicles" className="bg-light py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-ink">Our Vehicles</h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <article
              key={vehicle.name}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={`${vehicle.name} available for rent`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-bold text-ink">{vehicle.name}</h3>
                <p className="mt-0.5 text-xs text-muted">{vehicle.trim}</p>
                <p className="mt-2 text-base font-bold text-ink">
                  {vehicle.rate}
                </p>

                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-muted">
                  <span className="flex items-center gap-1">
                    <UsersIcon className="h-3 w-3" />
                    {vehicle.seats}
                  </span>
                  <span className="flex items-center gap-1">
                    <KeyIcon className="h-3 w-3" />
                    {vehicle.transmission}
                  </span>
                  <span className="flex items-center gap-1">
                    <FuelIcon className="h-3 w-3" />
                    {vehicle.fuel}
                  </span>
                </p>

                <p className="mt-2 flex items-center gap-1 text-[11px] text-muted">
                  <PinIcon className="h-3 w-3" />
                  {vehicle.location}
                </p>

                <a
                  href="#inquiry-form"
                  className="mt-4 flex h-10 items-center justify-center rounded-lg bg-primary text-[13px] font-semibold text-white transition-colors hover:bg-primary-hover"
                >
                  Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
