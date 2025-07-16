import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import FeaturesTable from "../components/FeaturesTable";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-12">
      <Hero />
      <ValueProps />
      <FeaturesTable />
      <HowItWorks />
      <WhyChoose />
      <CTA />
    </main>
  );
}
