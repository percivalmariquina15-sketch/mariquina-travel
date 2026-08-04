import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CarIcon,
  ChevronLeftIcon,
  ClockIcon,
  MessengerIcon,
  RouteIcon,
  WhatsAppIcon,
} from "../../components/icons";
import DestinationFaq from "../../components/destination-faq";
import { destinations } from "../../lib/destinations";

const siteUrl = "https://www.mariquinatravel.com";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return {};
  const canonical = `${siteUrl}/destinations/${slug}`;
  return {
    title: destination.pageTitle,
    description: destination.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: "Mariquina Travel",
      title: destination.pageTitle,
      description: destination.description,
      images: [
        {
          url: `${siteUrl}${destination.image}`,
          alt: `${destination.name} trip by van or car from Cavite`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: destination.pageTitle,
      description: destination.description,
      images: [destination.image],
    },
  };
}

function schema(destination: (typeof destinations)[number], slug: string) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: destination.name,
            item: `${siteUrl}/destinations/${slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: destination.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const others = destinations.filter((d) => d.slug !== slug);
  const vehicleHref = `/vehicles/${destination.bestVehicleSlug}`;

  return (
    <div className="flex min-h-screen flex-col bg-light">
      <div className="sticky top-0 z-50 border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/images/logo/logo.png"
              alt="Mariquina Travel logo"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="flex flex-col">
              <span className="text-xl font-bold leading-none tracking-tight">
                <span className="text-ink">Mariquina</span>{" "}
                <span className="text-amber">Travel</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
                Van and Car Rental
              </span>
            </span>
          </Link>
        </div>
      </div>

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-10 sm:px-6 sm:py-14">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-[13px] font-medium text-muted"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/#destinations"
            className="transition-colors hover:text-primary"
          >
            Tours
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-ink">{destination.name}</span>
        </nav>

        <Link
          href="/#destinations"
          className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
        >
          <ChevronLeftIcon className="h-4 w-4" />
          Back to Destinations
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
          Van &amp; Car Rental to{" "}
          <span className="text-amber">{destination.name}</span>
        </h1>
        <p className="mt-2 text-base font-medium text-muted">
          {destination.tagline}
        </p>

        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-border">
          <Image
            src={destination.image}
            alt={`${destination.name} — van and car rental trip from Cavite`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tint">
              <ClockIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                Travel Time
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                {destination.travelTime}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-xl border border-border bg-white p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tint">
              <RouteIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                Pickup Area
              </p>
              <p className="mt-0.5 text-sm font-semibold text-ink">
                Cavite — metro &amp; province-wide on request
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-muted">
          {destination.intro}
        </p>

        <div className="mt-8 flex flex-col gap-5 rounded-xl border border-border bg-white p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tint">
              <CarIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
                Recommended Vehicle
              </p>
              <p className="mt-0.5 text-lg font-bold text-ink">
                {destination.bestVehicleName}
              </p>
              <p className="mt-1 text-sm text-muted">
                {destination.vehicleNote}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={vehicleHref}
              className="flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
            >
              View Photos &amp; Rates
            </Link>
            <a
              href="https://www.messenger.com/t/256559060865144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-lg border border-primary px-6 text-sm font-semibold text-primary transition-colors hover:bg-tint"
            >
              <MessengerIcon className="h-4 w-4" />
              Book This Trip
            </a>
          </div>
        </div>

        <section className="mt-12 max-w-3xl">
          <h2 className="text-2xl font-bold text-ink">
            {destination.name} Rental — FAQs
          </h2>
          <p className="mt-2 text-sm text-muted">
            Answers to the questions we get about {destination.name} trips.
          </p>
          <div className="mt-6">
            <DestinationFaq questions={destination.faqs} />
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-ink">Other Routes We Cover</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/destinations/${other.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-primary"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={other.image}
                    alt={`${other.name} tour destination`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-lg font-bold text-ink">{other.name}</h3>
                  <p className="mt-1 text-sm text-muted">{other.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-navy to-navy-deep px-6 py-12 text-center sm:px-8 sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-[28px]">
            Ready to head to {destination.name}?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
            Message us your dates and group size — we&apos;ll confirm your
            vehicle and rate right away.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.messenger.com/t/256559060865144"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
            >
              <MessengerIcon className="h-4 w-4" />
              Chat on Messenger
            </a>
            <a
              href="https://wa.me/639628408580"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(destination, slug)) }}
      />
    </div>
  );
}