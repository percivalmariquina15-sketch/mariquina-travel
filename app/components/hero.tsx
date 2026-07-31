import Image from "next/image";
import { ChevronDownIcon, MessengerIcon } from "./icons";

export default function Hero() {
  return (
    <section id="home" className="relative -mt-[73px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-van-2.jpg"
          alt="White van parked near mountains on a road trip"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/75 to-navy/40" />
      </div>

      <div className="relative mx-auto flex min-h-svh max-w-[1200px] items-center justify-center px-4 pt-36 pb-20 sm:px-6">
        <div className="flex max-w-[640px] flex-col items-center text-center">
          <h1 className="text-4xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-[52px] lg:text-[56px]">
            Your Journey,{" "}
            <span className="text-amber">Our Wheels</span>
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-white/80">
            Explore our well-maintained cars and vans from trusted local
            operators. Honest rates, easy financing-free monthly options, and a
            booking process as simple as sending a message.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#vehicles"
              className="flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
            >
              Browse Vehicles
            </a>
            <a
              href="https://www.messenger.com/t/100039285796209"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white hover:bg-white/20"
            >
              <MessengerIcon className="h-4 w-4" />
              Message Us
            </a>
          </div>
        </div>
      </div>

      <a
        href="#vehicles"
        aria-label="Scroll down to vehicles"
        className="absolute bottom-6 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
      >
        <ChevronDownIcon className="h-5 w-5 animate-scroll-hint" />
      </a>
    </section>
  );
}
