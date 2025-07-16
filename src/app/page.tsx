import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import FeaturesTable from "../components/FeaturesTable";
import ComparisonTable from "../components/ComparisonTable";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Hero />
      <ValueProps />
      <FeaturesTable />
      <ComparisonTable />
      <HowItWorks />
      <WhyChoose />
      <CTA />
    </main>
  );
}
