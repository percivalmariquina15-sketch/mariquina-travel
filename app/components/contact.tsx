"use client";

import { useRef, useState } from "react";
import {
  CheckIcon,
  MailIcon,
  MessengerIcon,
  PhoneIcon,
  WalletIcon,
  WhatsAppIcon,
} from "./icons";

const contactColumns = [
  {
    icon: PhoneIcon,
    title: "Call Ms. Angie",
    value: "0992 672 3651",
    href: "tel:+639926723651",
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    value: "0962 840 8580",
    href: "https://wa.me/639628408580",
  },
  {
    icon: PhoneIcon,
    title: "Tour Pilot",
    value: "0991 748 4076",
    href: "tel:+639917484076",
  },
  {
    icon: MailIcon,
    title: "Email Us",
    value: "percivalmariquina15@gmail.com",
    href: "mailto:percivalmariquina15@gmail.com",
  },
  {
    icon: WalletIcon,
    title: "GCash — Percival Mariquina",
    value: "0962 840 8580",
    href: "tel:+639628408580",
  },
  {
    icon: WalletIcon,
    title: "GCash — Angelica Tongol",
    value: "0992 672 3651",
    href: "tel:+639926723651",
  },
];

const fieldClass =
  "w-full rounded-lg border border-border bg-light px-4 py-3 text-base text-ink placeholder:text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-tint sm:text-sm";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mqeroolq", {
        method: "POST",
        body: new FormData(event.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };
  return (
    <section id="contact" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-navy to-navy-deep px-6 py-12 text-center sm:px-8 sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-[28px]">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/70">
            Have questions? Our team is here to help you find the perfect
            vehicle for your trip.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.messenger.com/t/256559060865144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
            >
              <MessengerIcon className="h-4 w-4" />
              Chat on Messenger
            </a>
            <a
              href="https://wa.me/639628408580"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {contactColumns.map((column) => (
              <a
                key={column.title}
                href={column.href}
                className="flex items-center gap-2 text-[13px] text-white/85 transition-colors hover:text-white"
              >
                <column.icon className="h-4 w-4 shrink-0" />
                <span>
                  {column.title} ·{" "}
                  <span className="font-semibold">{column.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div id="inquiry-form" className="mx-auto mt-10 max-w-2xl scroll-mt-[73px]">
          {status === "success" ? (
            <div className="flex flex-col items-center rounded-xl border border-border bg-white p-8 text-center sm:p-10">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tint text-primary">
                <CheckIcon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">
                Booking Request Sent!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted">
                We&apos;ll reply to confirm your booking via Messenger or email.
              </p>
              <button
                type="button"
                onClick={() => {
                  formRef.current?.reset();
                  setStatus("idle");
                }}
                className="mt-5 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
              >
                Send another request
              </button>
            </div>
          ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-xl border border-border bg-white p-6 sm:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New booking request — Mariquina Travel"
            />
            <h3 className="text-lg font-bold text-ink">Book Your Vehicle</h3>
            <p className="mt-1 text-sm text-muted">
              Fill this out and we&apos;ll get back to you via Messenger or
              email to confirm your booking.
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="Juan Dela Cruz"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Email or Contact Number
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="you@email.com or your contact number"
                  className={fieldClass}
                />
              </div>

              <div>
                <label
                  htmlFor="vehicle"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Vehicle Needed
                </label>
                <input
                  id="vehicle"
                  name="vehicle"
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="e.g. Van"
                  className={fieldClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="pickup-date"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Pickup Date
                  </label>
                  <input
                    id="pickup-date"
                    name="pickup-date"
                    type="date"
                    required
                    suppressHydrationWarning
                    onClick={(event) => {
                      try {
                        event.currentTarget.showPicker();
                      } catch {
                        /* picker not supported — native focus still works */
                      }
                    }}
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="return-date"
                    className="mb-1.5 block text-sm font-semibold text-ink"
                  >
                    Return Date
                  </label>
                  <input
                    id="return-date"
                    name="return-date"
                    type="date"
                    required
                    suppressHydrationWarning
                    onClick={(event) => {
                      try {
                        event.currentTarget.showPicker();
                      } catch {
                        /* picker not supported — native focus still works */
                      }
                    }}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-semibold text-ink"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  suppressHydrationWarning
                  rows={4}
                  placeholder="Additional details — pickup location, number of passengers, with or without driver..."
                  className={`${fieldClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="flex flex-wrap items-center gap-1 text-sm font-semibold text-amber">
                  Something went wrong — please try again or{" "}
                  <a
                    href="https://www.messenger.com/t/256559060865144"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline transition-colors hover:text-ink"
                  >
                    message us on Messenger
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover disabled:opacity-60"
              >
                <MailIcon className="h-4 w-4" />
                {status === "sending" ? "Sending…" : "Book Now"}
              </button>
            </div>
          </form>
          )}
        </div>
      </div>
    </section>
  );
}
