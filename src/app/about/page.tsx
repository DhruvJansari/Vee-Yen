
import AboutBanner from "../components/about/Hero";
import CompanyOverview from "../components/about/CompanyOverview";
import MissionVision from "../components/about/Missionvision ";
import WhyReliable from "../components/about/Whyreliable";
import CTASection from "../components/services/CTASection";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Vee Yen Traders – Industrial Metal Recycling Company",
  description:
    "Learn about Vee Yen Traders and our commitment to sustainable industrial scrap management and responsible metal recycling solutions.",
  keywords: [
    "industrial metal recycling company",
    "scrap trading business",
    "metal waste management company",
    "industrial recycling solutions",
  ],
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      {/* Section 1: Page Banner */}
      <AboutBanner />
      
      {/* Section 2: Company Overview */}
      <CompanyOverview />
      
      {/* Section 3: Mission & Vision */}
      <MissionVision />
      
      {/* Section 4: Why We Are Reliable */}
      <WhyReliable />
      
      {/* Section 5: Call to Action */}
      <CTASection />
    </main>
  );
}

