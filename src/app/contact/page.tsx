import { Contact } from "lucide-react";
import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import MapSection from "../components/contact/MapSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Industrial Scrap & Metal Recycling Company",
  description:
    "Get in touch with Vee Yen Traders for industrial scrap collection, bulk scrap trading, and metal recycling inquiries.",
  keywords: [
    "contact scrap metal company",
    "industrial scrap inquiry",
    "metal recycling contact",
    "bulk scrap trading contact",
  ],
  alternates: {
    canonical: "/contact",
  },
};

export default function contact() {
  return (
    <>
      <Hero />
      <ContactDetails />
      {/* <ContactForm/> */}
      <MapSection />
    </>
  );
}