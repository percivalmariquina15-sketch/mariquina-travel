import Image from "next/image";
import Link from "next/link";
import { MessengerIcon } from "./icons";
import { destinations } from "../lib/destinations";

export default function Tours() {
  return (
    <section id="destinations" className="bg-light py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-ink">
          Destinations We Cover
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          Joiners and group-exclusive tours to the country&apos;s most loved
          destinations — pick a route to see rates and trip info.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-primary"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={destination.image}
                  alt={`${destination.name} tour destination`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-bold text-ink">
                  {destination.name}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {destination.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.messenger.com/t/256559060865144"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            <MessengerIcon className="h-4 w-4" />
            Message Us to Book
          </a>
        </div>
      </div>
    </section>
  );
}