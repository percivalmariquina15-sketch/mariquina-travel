import Image from "next/image";
import {
  ClockIcon,
  MailIcon,
  MessengerIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";
import { destinations } from "../lib/destinations";

const destinationLinks = destinations
  .map((d) => d.name)
  .map((name, i) => ({
    name,
    href: `/destinations/${destinations[i].slug}`,
  }));

const columns = [
  {
    title: "Vehicles",
    links: [
      "Sedans",
      "7-Seaters",
      "Vans (12–19 Seaters)",
      "Airport Transfers",
      "Monthly Rentals",
    ],
    hrefs: ["#vehicles", "#vehicles", "#vehicles", "#contact", "#contact"],
  },
  {
    title: "Services",
    links: [
      "Self-Drive",
      "With Driver",
      "Group Tours",
      "Corporate Bookings",
      "Long-Term Rentals",
    ],
    hrefs: ["#why-us", "#why-us", "#contact", "#contact", "#contact"],
  },
  {
    title: "Destinations",
    links: destinationLinks.map((d) => d.name),
    hrefs: destinationLinks.map((d) => d.href),
  },
  {
    title: "Help",
    links: [
      "How It Works",
      "Frequently Asked Questions",
      "Terms of Service",
      "Privacy Policy",
    ],
    hrefs: ["#how-it-works", "#faq", "#contact", "#contact"],
  },
  {
    title: "Contact",
    links: [
      "Ms. Angie — 0992 672 3651",
      "WhatsApp — 0962 840 8580",
      "Tour Pilot — 0991 748 4076",
      "mariquinatravelaandtours@gmail.com",
      "GCash — Percival Mariquina 0962 840 8580",
      "GCash — Angelica Tongol 0992 672 3651",
      "Open daily — 24/7 inquiries",
    ],
    hrefs: [
      "tel:+639926723651",
      "https://wa.me/639628408580",
      "tel:+639917484076",
      "mailto:mariquinatravelaandtours@gmail.com",
      "tel:+639628408580",
      "tel:+639926723651",
      "#contact",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-6">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <Image
              src="/images/logo/logo.png"
              alt="Mariquina Travel logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="text-xl font-bold tracking-tight">
              Mariquina <span className="text-white/90">Travel</span>
            </span>
          </a>
          <p className="mt-4 text-[13px] leading-relaxed text-slate-400">
            Your trusted partner for car and van rentals — clean vehicles,
            honest rates, and easy booking via Messenger.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.messenger.com/t/256559060865144"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message us on Facebook Messenger"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
            >
              <MessengerIcon className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/639628408580"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="mailto:mariquinatravelaandtours@gmail.com"
              aria-label="Email us"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
            >
              <MailIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-sm font-bold text-white">{column.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link, index) => (
                <li key={link}>
                  <a
                    href={column.hrefs[index]}
                    className={`text-[13px] transition-colors hover:text-primary ${
                      column.title === "Contact"
                        ? "flex items-center gap-2 text-slate-400"
                        : "text-slate-400"
                    }`}
                  >
                    {column.title === "Contact" && index === 0 && (
                      <PhoneIcon className="h-3.5 w-3.5 shrink-0" />
                    )}
                    {column.title === "Contact" && index === 1 && (
                      <MailIcon className="h-3.5 w-3.5 shrink-0" />
                    )}
                    {column.title === "Contact" && index === 2 && (
                      <ClockIcon className="h-3.5 w-3.5 shrink-0" />
                    )}
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-navy-deep">
        <p className="mx-auto max-w-[1200px] px-4 py-5 text-center text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} Mariquina Travel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
