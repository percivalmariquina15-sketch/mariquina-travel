import { CalendarIcon, KeyIcon, MessengerIcon } from "./icons";

const steps = [
  {
    number: "01",
    icon: MessengerIcon,
    title: "Message Us",
    body: "Chat with us on Messenger, call, or email — tell us the vehicle, dates, and pickup location.",
  },
  {
    number: "02",
    icon: CalendarIcon,
    title: "Confirm & Reserve",
    body: "We'll quote the exact rate and hold your vehicle with a small deposit.",
  },
  {
    number: "03",
    icon: KeyIcon,
    title: "Pick Up & Drive",
    body: "Pick up at City Center or your location — with or without driver.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <h2 className="text-center text-2xl font-bold text-ink">
          How It Works
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted">
          Renting with us is as simple as sending a message.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-tint text-primary">
                <step.icon className="h-6 w-6" />
              </span>
              <span className="mt-4 text-[11px] font-bold tracking-widest text-primary">
                STEP {step.number}
              </span>
              <h3 className="mt-1 text-sm font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-[260px] text-xs leading-[1.4] text-muted">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.messenger.com/t/100039285796209"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            <MessengerIcon className="h-4 w-4" />
            Message Us to Book
          </a>
        </div>
      </div>
    </section>
  );
}
