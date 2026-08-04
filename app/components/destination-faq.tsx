"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";
import type { DestinationFaq } from "../lib/destinations";

export default function DestinationFaq({
  questions: items,
}: {
  questions: DestinationFaq[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
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
                {item.question}
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
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}