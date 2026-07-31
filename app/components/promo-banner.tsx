import Image from "next/image";
import { MessengerIcon } from "./icons";

export default function PromoBanner() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2 lg:h-60">
          <div className="flex flex-col justify-center bg-gradient-to-r from-primary to-primary-deep p-8 sm:p-10">
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
              Long-Term Rentals &amp; Promos
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-[26px]">
              Get the Best Rates for Monthly Rentals
            </h2>
            <p className="mt-3 max-w-md text-[13px] font-light leading-relaxed text-white">
              Choose from flexible weekly and monthly options with competitive
              rates. Message us today and drive home your perfect vehicle.
            </p>
            <a
              href="https://www.messenger.com/t/100039285796209"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-fit items-center gap-2 rounded-lg bg-white px-6 py-3 text-[13px] font-bold text-primary transition-colors hover:bg-fog"
            >
              <MessengerIcon className="h-4 w-4" />
              Ask About Promos
            </a>
          </div>

          <div className="relative hidden lg:block">
            <Image
              src="/images/vehicles/van-10-staria.jpg"
              alt="Van on the road for long-term rental"
              fill
              sizes="(min-width: 1024px) 50vw, 0vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
