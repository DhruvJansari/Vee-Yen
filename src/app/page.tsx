import Hero from "./components/home/Hero";
import About from "./components/home/About";
import KeyServices from "./components/home/KeyServices";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials"
import CallToAction from "./components/CallToAction"
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <KeyServices />
      <WhyChooseUs />
      <Testimonials />
      <CallToAction />
    </>
  );
}