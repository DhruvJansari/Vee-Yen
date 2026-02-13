import { Contact } from "lucide-react";
import Hero from "../components/contact/Hero";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import MapSection from "../components/contact/MapSection";
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