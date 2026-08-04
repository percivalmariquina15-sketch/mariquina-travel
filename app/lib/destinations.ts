export type DestinationFaq = {
  question: string;
  answer: string;
};

export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  pageTitle: string;
  description: string;
  intro: string;
  travelTime: string;
  bestVehicleSlug: string;
  bestVehicleName: string;
  vehicleNote: string;
  faqs: DestinationFaq[];
};

export const destinations: Destination[] = [
  {
    slug: "tagaytay",
    name: "Tagaytay",
    tagline: "Cool Breezes & Taal Lake Views",
    image: "/images/destinations/tagaytay.jpg",
    pageTitle: "Van & Car Rental to Tagaytay | Mariquina Travel",
    description:
      "Rent a van, 7-seater, or sedan in Cavite for Tagaytay — about 2 hours away. With or without driver. Book your Tagaytay trip via Messenger.",
    intro:
      "Tagaytay is our most booked weekend route from Cavite — a short, scenic drive up to Taal Lake, cool air, and family-friendly restaurants. Rent a sedan for a couples' escape or a 7-seater or van for the whole barkada or family. We pick up in Cavite, drive you there, and wait or do a round trip with our driver.",
    travelTime: "± 1.5–2 hrs from Cavite",
    bestVehicleSlug: "7-seater",
    bestVehicleName: "7-Seater",
    vehicleNote:
      "Ideal for family day trips — 7 seats with plenty of room for pasalubong and stroller space.",
    faqs: [
      {
        question: "How long does it take to drive from Cavite to Tagaytay?",
        answer:
          "Around 1.5 to 2 hours depending on your pickup point in Cavite and weekend traffic. Via Aguinaldo Highway or the CALAX–Sta. Rosa route.",
      },
      {
        question: "Can you do a round trip to Tagaytay with a driver?",
        answer:
          "Yes — most Tagaytay bookings are round trips with a driver who waits at your stopover or picks you up at an agreed time. Or go self-drive with the sedan or 7-seater.",
      },
      {
        question: "Do you recommend Tagaytay on weekdays or weekends?",
        answer:
          "Weekdays are smoother, but weekends are fine too — our drivers know the highlands routes and the common congestion spots around the Rotonda.",
      },
    ],
  },
  {
    slug: "baguio",
    name: "Baguio",
    tagline: "City of Pines & the Cordilleras",
    image: "/images/destinations/baguio.jpg",
    pageTitle: "Van Rental to Baguio | Mariquina Travel",
    description:
      "Rent a van with driver from Cavite to Baguio — about 6 hours via TPLEX. Groups of up to 15. Book your Baguio trip on Messenger.",
    intro:
      "A Baguio escape is the classic group trip — cool weather, Burnham Park, Session Road, and strawberry picking in La Trinidad. Our 12–15 seat vans take your whole group from Cavite with a seasoned driver who knows TPLEX and Kennon/Marcos Highway. Round trip, with drop-off at your hotel or transient house.",
    travelTime: "± 6 hrs via TPLEX",
    bestVehicleSlug: "van-1",
    bestVehicleName: "Van #1 (12–15 seats)",
    vehicleNote:
      "Best for groups of 8–15. Sleeps and stretches comfortably on the long drive, with cargo space for luggage and pasalubong.",
    faqs: [
      {
        question: "How long is the Cavite to Baguio drive?",
        answer:
          "About 6 hours via TPLEX, excluding stops. We typically depart early morning so you arrive in Baguio before noon.",
      },
      {
        question: "Can the van drop us off at our hotel or transient in Baguio?",
        answer:
          "Yes — door-to-door service. Tell us your accommodation address when booking and the driver takes the group right to it.",
      },
      {
        question: "Do you offer overnight stays for the driver?",
        answer:
          "For multi-day Baguio trips, we arrange the driver's accommodation with your booking. Just include your itinerary dates and we'll quote everything.",
      },
    ],
  },
  {
    slug: "la-union",
    name: "La Union",
    tagline: "Surf Town, Beaches & Sunset",
    image: "/images/destinations/la-union.jpg",
    pageTitle: "Van Rental to La Union | Mariquina Travel",
    description:
      "Rent a van from Cavite to La Union — about 5–6 hours to San Juan surf town. Group van rental with driver, surfboard space included. Book on Messenger.",
    intro:
      "San Juan, La Union is the go-to beach weekend for Cavite road trippers — surf lessons, beach bars, and those famous sunsets. Our vans carry your group plus surfboards on the roof rack. We drive from Cavite straight to your accommodation in San Juan, with a driver who handles the long NLEX–TPLEX haul so you can rest.",
    travelTime: "± 5–6 hrs from Cavite",
    bestVehicleSlug: "van-1",
    bestVehicleName: "Van #1 (12–15 seats)",
    vehicleNote:
      "Great for surf groups — fits 10+ passengers and their boards, with a driver for the long drive.",
    faqs: [
      {
        question: "Can we bring surfboards on the van?",
        answer:
          "Yes — our vans have roof racks or interior space for a few boards. Let us know your board count when booking so we prepare the right setup.",
      },
      {
        question: "Do you do La Union trips with a driver?",
        answer:
          "Always — La Union is a 5–6 hour drive, so we include a driver on every trip. You relax while we handle the highway and the return trip.",
      },
      {
        question: "Can we stop in Baguio on the way to La Union?",
        answer:
          "Yes, many groups stop in Baguio for a day before continuing to La Union. We'll build the itinerary around your stops.",
      },
    ],
  },
  {
    slug: "batangas",
    name: "Batangas",
    tagline: "Beaches, Dive Spots & Countryside",
    image: "/images/destinations/batangas.jpg",
    pageTitle: "Van Rental to Batangas | Mariquina Travel",
    description:
      "Rent a van, 7-seater, or sedan from Cavite to Batangas — Nasugbu, Calatagan, Matabungkay, Talisay, and Batangas City. With or without driver. Book on Messenger.",
    intro:
      "From Nasugbu's sugar-white shores to Calatagan and Matabungkay beach houses, Batangas is Cavite's closest beach neighbor. We rent sedans, 7-seaters, and vans for day trips, beach-house stays, and Batangas City errands — with or without a driver. Airport, port, and resort pickups available.",
    travelTime: "± 1.5–3 hrs from Cavite",
    bestVehicleSlug: "7-seater",
    bestVehicleName: "7-Seater",
    vehicleNote:
      "The sweet spot for beach-house trips — 7 seats and enough cargo room for coolers, bags, and beach gear.",
    faqs: [
      {
        question: "Which Batangas beaches are closest to Cavite?",
        answer:
          "Nasugbu is around 1.5 hours, followed by Matabungkay and Calatagan. Talisay near Taal Lake is close too. Tell us your destination and we'll recommend the best vehicle.",
      },
      {
        question: "Do you allow beach trips with the sedan?",
        answer:
          "Yes, the sedan is fine for 1–4 passengers going to Nasugbu or Batangas City. For groups or beach-house stays, the 7-seater or a van is more comfortable.",
      },
      {
        question: "Can you pick us up from Batangas City port?",
        answer:
          "Yes — we do port and resort pickups across Batangas. Book your vehicle ahead and the driver will meet you at the terminal.",
      },
    ],
  },
  {
    slug: "zambales",
    name: "Zambales",
    tagline: "Subic, Nagsasa & West Philippine Sea",
    image: "/images/destinations/zambales.jpg",
    pageTitle: "Van Rental to Zambales | Mariquina Travel",
    description:
      "Rent a van from Cavite to Zambales — Subic, Nagsasa Cove, Capones Island, and Anawangin. Group van rental with driver for beach camping trips. Book on Messenger.",
    intro:
      "Zambales means off-grid coves — Nagsasa, Capones, Anawangin — plus the easy comforts of Subic. These are group trips: the farther coves need a boat hop after the drive, so our vans carry your whole crew, camping gear, and food. From Cavite, our drivers take NLEX–SCTEX to Subic and the beach towns of San Antonio.",
    travelTime: "± 4–5 hrs from Cavite",
    bestVehicleSlug: "van-1",
    bestVehicleName: "Van #1 (12–15 seats)",
    vehicleNote:
      "Built for cove trips — big group, big gear. Roof space and cargo room for tents, coolers, and cooking kits.",
    faqs: [
      {
        question: "Do you drive to Nagsasa or Capones, or just Subic?",
        answer:
          "We drive all the way to San Antonio, Zambales where the boat trips to Nagsasa, Capones, and Anawangin depart. Overnight parking for the van is arranged near the port.",
      },
      {
        question: "Can the van handle the Zambales road trip?",
        answer:
          "Yes — our vans are maintained for provincial trips and our drivers know the Subic and San Marcelino routes well, including the last stretch to the boat port.",
      },
      {
        question: "Is camping gear allowed on board?",
        answer:
          "Absolutely — tents, coolers, and cooking gear are exactly what our vans carry on Zambales trips. Just tell us the volume when booking.",
      },
    ],
  },
  {
    slug: "vigan",
    name: "Vigan",
    tagline: "Heritage City & Calle Crisologo",
    image: "/images/destinations/vigan.jpg",
    pageTitle: "Van Rental to Vigan | Mariquina Travel",
    description:
      "Rent a van from Cavite to Vigan — a heritage-city road trip through Ilocos. 12–15 seat vans with driver for family and group tours. Book on Messenger.",
    intro:
      "Vigan is a long, memorable road trip — the heritage houses of Calle Crisologo, empanadas straight from the grill, and bagnet that's worth the kilometers. Groups from Cavite ride with us in a 12–15 seat van, overnight in Vigan, and continue to Pagudpud or Laoag. Driver, fuel, and door-to-door service included in the quote.",
    travelTime: "± 7–8 hrs from Cavite",
    bestVehicleSlug: "van-1",
    bestVehicleName: "Van #1 (12–15 seats)",
    vehicleNote:
      "The right choice for multi-day Ilocos tours — roomy for a big family, with overnight arrangements handled.",
    faqs: [
      {
        question: "Is Vigan a one-day trip from Cavite?",
        answer:
          "We recommend an overnight stay — it's a 7–8 hour drive each way. Most groups do 2 days and 1 night in Vigan, or extend to Pagudpud and Laoag.",
      },
      {
        question: "Can we continue from Vigan to Pagudpud or Laoag?",
        answer:
          "Yes — many of our groups continue north from Vigan. We'll quote the full loop itinerary with the driver's overnight accommodation included.",
      },
      {
        question: "Does the van rental include the driver for multi-day tours?",
        answer:
          "Yes. Vigan tours always include a driver, fuel, and driver accommodation. You only pay for tolls and your own meals and lodging.",
      },
    ],
  },
];
