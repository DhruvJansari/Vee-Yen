import Hero from "../components/services/Hero";
import Serviceslist from "../components/services/Serviceslist";
import HowWeWork from "../components/services/HowWeWork";
import FAQ from "../components/services/FAQ";
import CTASection from "../components/services/CTASection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Industrial Scrap Collection & Metal Recycling Services",
  description:
    "Comprehensive industrial scrap collection, metal recycling, and bulk scrap trading services for manufacturers and industrial businesses.",
  keywords: [
  "industrial scrap collection services",
    "metal recycling services",
    "bulk scrap trading company",
    "scrap waste management solutions",
  ],
  alternates: {
    canonical: "/services",
  },
};

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
