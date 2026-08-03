"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import { faqs } from "../lib/faqs";

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
