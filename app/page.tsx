import Header from "./components/header";
import Hero from "./components/hero";
import Vehicles from "./components/vehicles";
import HowItWorks from "./components/how-it-works";
import WhyUs from "./components/why-us";
import Testimonials from "./components/testimonials";
import Message from "./components/message";
import PromoBanner from "./components/promo-banner";
import Tours from "./components/tours";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";
import MessengerButton from "./components/messenger-button";

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
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MessengerButton />
    </div>
  );
}
