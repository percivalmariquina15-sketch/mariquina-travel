export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
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
      "A deposit via GCash or bank transfer secures your vehicle, and the balance is settled on pickup. We'll confirm the exact deposit amount when you book.",
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
      "Yes — cancellations and date changes are free up to 24 hours before your pickup. Within 24 hours of pickup, your deposit is applied to a rebooking at no extra fee.",
  },
];
