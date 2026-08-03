import Header from "./components/header";
import Hero from "./components/hero";
import Vehicles from "./components/vehicles";
import HowItWorks from "./components/how-it-works";
import WhyUs from "./components/why-us";
import Testimonials from "./components/testimonials";
import Message from "./components/message";
import PromoBanner from "./components/promo-banner";
import Tours from "./components/tours";
import TravelPhotos from "./components/travel-photos";
import { LazyFaq, LazyContact } from "./components/lazy-sections";
import Footer from "./components/footer";
import MessengerButton from "./components/messenger-button";
import { faqs } from "./lib/faqs";

const siteUrl = "https://mariquinatravel.com";

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRental",
      "@id": `${siteUrl}/#business`,
      name: "Mariquina Travel",
      url: siteUrl,
      telephone: "+639926723651",
      email: "percivalmariquina15@gmail.com",
      image: `${siteUrl}/images/og-image.jpg`,
      priceRange: "₱₱",
      currenciesAccepted: "PHP",
      paymentAccepted: "Cash, GCash, Bank Transfer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cavite",
        addressCountry: "PH",
      },
      areaServed: [
        { "@type": "City", name: "Cavite" },
        { "@type": "City", name: "Metro Manila" },
        { "@type": "City", name: "Baguio" },
        { "@type": "City", name: "Tagaytay" },
        { "@type": "City", name: "La Union" },
        { "@type": "City", name: "Batangas" },
        { "@type": "City", name: "Zambales" },
        { "@type": "City", name: "Vigan" },
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      sameAs: ["https://www.messenger.com/t/256559060865144"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex-1">
        <Hero />
        <Vehicles />
        <HowItWorks />
        <WhyUs />
        <Testimonials />
        <Message />
        <PromoBanner />
        <Tours />
        <TravelPhotos />
        <LazyFaq />
        <LazyContact />
      </main>
      <Footer />
      <MessengerButton />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
    </div>
  );
}
