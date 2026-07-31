"use client";

import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "./icons";

const testimonials = [
  {
    name: "Juan D.",
    trip: "Family trip to Baguio",
    quote:
      "Booked a 10-seater van for our family reunion. Smooth booking via Messenger, the van was clean, and our driver was courteous. Highly recommended!",
  },
  {
    name: "Maria S.",
    trip: "Airport pickup",
    quote:
      "I reserved the sedan for airport pickup at 3 AM — on time, no issues at all. The rates were honest and exactly what was quoted. Salamat po!",
  },
  {
    name: "Ramon C.",
    trip: "Company team outing",
    quote:
      "We rented three vans for our office outing. Easy coordination, fair prices, and the vehicles were in great condition. Will book again.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const step = card ? card.offsetWidth + 24 : 360;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-light py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-ink">
          What Our Customers Say
        </h2>

        <div className="mt-10 flex items-center gap-4">
          <button
            type="button"
            suppressHydrationWarning
            onClick={() => scrollByCard(-1)}
            aria-label="Previous testimonials"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                data-card
                className="w-full shrink-0 snap-start rounded-xl border border-border bg-white p-6 md:w-[calc(33.333%-16px)]"
              >
                <div className="flex gap-1 text-amber">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-3 text-[13px] leading-[1.5] text-ink">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-[13px] font-bold text-ink">
                    {testimonial.name}
                  </p>
                  <p className="text-[11px] text-muted">{testimonial.trip}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            suppressHydrationWarning
            onClick={() => scrollByCard(1)}
            aria-label="Next testimonials"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary hover:text-primary md:flex"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
