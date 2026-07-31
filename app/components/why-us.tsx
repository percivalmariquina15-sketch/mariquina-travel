import Image from "next/image";
import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  MessengerIcon,
  ShieldIcon,
} from "./icons";

const reasons = [
  {
    icon: ShieldIcon,
    title: "Verified & Well-Maintained Vehicles",
    body: "All vehicles are inspected and cleaned before every pickup.",
  },
  {
    icon: CheckIcon,
    title: "Best Price Guarantee",
    body: "No hidden fees — the rate we quote is the rate you pay.",
  },
  {
    icon: MessengerIcon,
    title: "Secure & Easy Booking",
    body: "Reserve in minutes through Messenger, call, or email.",
  },
  {
    icon: CalendarIcon,
    title: "Flexible Daily & Monthly Rates",
    body: "Short trips, long hauls, and promos tailored to your needs.",
  },
  {
    icon: ClockIcon,
    title: "24/7 Support",
    body: "Our team is here to help you anytime, before and during your trip.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-tint py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-ink">
              Why Rent With Mariquina Travel?
            </h2>
            <p className="mt-2 max-w-xl text-sm text-muted">
              We built Mariquina Travel around one idea: renting a vehicle
              should feel simple, honest, and trustworthy.
            </p>

            <ul className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <li key={reason.title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <reason.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-xs leading-[1.4] text-muted">
                      {reason.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              src="/images/why-us-handover.jpg"
              alt="Rental key handover to a happy customer"
              width={1200}
              height={900}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
