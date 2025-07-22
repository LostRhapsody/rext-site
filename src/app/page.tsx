import { Metadata } from "next";
import Hero from "../components/Hero";
import DevelopmentCallout from "../components/DevelopmentCallout";
import ValueProps from "../components/ValueProps";
import FeaturesTable from "../components/FeaturesTable";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import Contribute from "../components/Contribute";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Rext - The Future Rust Fullstack Framework | Coming Soon",
  description: "Rext is an upcoming revolutionary Rust fullstack framework that will combine Rust's blazing performance with modern JavaScript. Our planned framework will enable type-safe, production-ready web applications with zero configuration.",
  openGraph: {
    title: "Rext - The Future Rust Fullstack Framework",
    description: "The future of fullstack development: Rust performance meets modern web development. Currently in development.",
    url: "https://rextstack.org",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Rext Homepage - The Future of Full Stack Development with Rust",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-6 py-12">
        <Hero />
        <DevelopmentCallout />
        <ValueProps />
        <FeaturesTable />
        <HowItWorks />
        <WhyChoose />
        <Contribute />
        <CTA />
      </main>

      {/* Additional structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Rext - The Future Rust Fullstack Framework",
            "description": "Rext is a planned Rust-powered framework that will deliver blazing performance and type safety for modern fullstack applications.",
            "url": "https://rextstack.org",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Rext",
              "applicationCategory": "WebFramework",
              "description": "A planned fullstack web framework to be built on Rust with modern frontend tooling support",
              "operatingSystem": "Cross-platform",
              "programmingLanguage": ["Rust", "JavaScript"],
              "featureList": [
                "Planned: Zero Configuration",
                "Planned: File-based Routing",
                "Planned: Type-safe APIs",
                "Planned: Hot Reload",
                "Planned: SSR/SSG Support",
                "Planned: Built-in Middleware"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rextstack.org"
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
