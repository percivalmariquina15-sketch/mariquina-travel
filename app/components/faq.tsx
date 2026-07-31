"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

const faqs = [
  {
    question: "How do I book a vehicle?",
    answer:
      "Message us on Facebook Messenger with your dates, vehicle preference, and pickup location. We'll reply with the rate and confirm your reservation — no need for a complicated online booking system.",
  },
  {
    question: "Do you offer vehicles with a driver?",
    answer:
      "Yes. Rent with or without driver. Self-drive is great for short city trips, while our drivers are available for out-of-town tours, airport pickups, and group trips.",
  },
  {
    question: "How do payments and deposits work?",
    answer:
      "A small deposit via GCash or bank transfer holds your vehicle, and the balance is settled on pickup. Exact deposit amounts are confirmed when you book. (Edit this with your actual policy.)",
  },
  {
    question: "Can I take the vehicle out of town?",
    answer:
      "Absolutely. Popular routes include Tagaytay, Baguio, Batangas, La Union, Zambales, and Manila Airport. Tell us your destination when booking so we can prepare the right vehicle.",
  },
  {
    question: "What do I need to rent a vehicle?",
    answer:
      "For self-drive, bring a valid driver's license and a valid ID. For van rentals with a driver, no license is needed on your end — just confirm your trip details with us.",
  },
  {
    question: "Can I cancel or reschedule?",
    answer:
      "Yes — cancellations and date changes are free up to 24 hours before your pickup. After that, the deposit is applied to a rebooking instead of forfeited. (Edit this with your actual policy.)",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-light py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-ink">
          Frequently Asked Questions
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          Answers to the questions we get asked the most.
        </p>

        <div className="mx-auto mt-10 max-w-[760px] space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-xl border border-border bg-white"
              >
                <button
                  type="button"
                  suppressHydrationWarning
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-ink">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 text-[13px] leading-[1.5] text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
