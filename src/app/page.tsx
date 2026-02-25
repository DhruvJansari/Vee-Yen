import Hero from "./components/home/Hero";
import About from "./components/home/About";
import KeyServices from "./components/home/KeyServices";
import WhyChooseUs from "./components/home/WhyChooseUs";
import Testimonials from "./components/home/Testimonials"
import CallToAction from "./components/CallToAction"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Scrap Metal Trading & Industrial Recycling Company",
  description:
    "Vee Yen Traders provides industrial scrap collection, bulk scrap trading, and metal recycling solutions for businesses across India.",
  keywords: [
    "scrap metal trading company",
    "industrial metal recycling",
    "bulk scrap buyers",
    "scrap metal suppliers India",
  ],
  alternates: {
    canonical: "/",
  },
};

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