import Hero from "../components/services/Hero";
import Serviceslist from "../components/services/Serviceslist";
import HowWeWork from "../components/services/HowWeWork";
import FAQ from "../components/services/FAQ";
import CTASection from "../components/services/CTASection";
import { FaQ } from "react-icons/fa6";

export default function Services() {
  return (
    <>
      <Hero />
      <Serviceslist />
      <HowWeWork />
      <FAQ/>
      <CTASection />
    </>
  );
}
