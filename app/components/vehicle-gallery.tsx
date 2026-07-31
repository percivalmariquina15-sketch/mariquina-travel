"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from "./icons";

type Props = {
  images: string[];
  name: string;
};

export default function VehicleGallery({ images, name }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const next = () =>
    setIndex((i) => (i === null ? i : (i + 1) % images.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length]);

  return (
    <>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`View ${name} photo ${i + 1}`}
            className="block overflow-hidden rounded-xl border border-border bg-white text-left transition-colors hover:border-primary"
          >
            <Image
              src={src}
              alt={`${name} photo ${i + 1}`}
              width={800}
              height={600}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-[4/3] w-full object-cover"
            />
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
          >
            <CloseIcon className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <div
            className="relative h-[70vh] max-h-[70vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[index]}
              alt={`${name} photo ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-semibold text-white/80">
            {index + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
