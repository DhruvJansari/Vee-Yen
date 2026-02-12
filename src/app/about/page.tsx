// Example: app/about/page.jsx or pages/about.jsx
// Complete About Us page with all sections

import AboutBanner from "../components/about/Hero";
import CompanyOverview from "../components/about/CompanyOverview";
import MissionVision from "../components/about/Missionvision ";
import WhyReliable from "../components/about/Whyreliable";
import CTASection from "../components/services/CTASection";

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

// Optional: Add metadata for SEO (Next.js 13+ app directory)
export const metadata = {
  title: 'About Us - VEE YEN Traders | Building Trust in Circular Economy',
  description: 'Learn about VEE YEN Traders - a trusted metal recycling and scrap management company committed to transparency, reliability, and environmental stewardship.',
};