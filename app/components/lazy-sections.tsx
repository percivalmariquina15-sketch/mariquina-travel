"use client";

import dynamic from "next/dynamic";

export const LazyFaq = dynamic(() => import("./faq"));
export const LazyContact = dynamic(() => import("./contact"));
