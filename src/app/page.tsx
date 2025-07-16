import { Metadata } from "next";
import Hero from "../components/Hero";
import ValueProps from "../components/ValueProps";
import FeaturesTable from "../components/FeaturesTable";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Rext.js - The Ultimate Rust Fullstack Framework | Build Modern Web Apps",
  description: "Discover Rext.js, the revolutionary Rust fullstack framework that combines Rust's blazing performance with modern JavaScript. Build type-safe, production-ready web applications with zero configuration. The best alternative to Next.js for Rust developers.",
  openGraph: {
    title: "Rext.js - The Ultimate Rust Fullstack Framework",
    description: "Build modern fullstack apps at the speed of Rust. Zero configuration, end-to-end type safety, blazingly fast performance.",
    url: "https://rext.js.org",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "Rext.js Homepage - Build Modern Full Stack Apps at the Speed of Rust",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <main className="max-w-screen-xl mx-auto px-6 py-12">
        <Hero />
        <ValueProps />
        <FeaturesTable />
        <HowItWorks />
        <WhyChoose />
        <CTA />
      </main>
      
      {/* Additional structured data for homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Rext.js - The Rust Fullstack Framework",
            "description": "Build modern fullstack applications with Rext.js, the Rust-powered framework that delivers blazing performance and type safety.",
            "url": "https://rext.js.org",
            "mainEntity": {
              "@type": "SoftwareApplication",
              "name": "Rext.js",
              "applicationCategory": "WebFramework",
              "description": "A fullstack web framework built on Rust with modern frontend tooling support",
              "operatingSystem": "Cross-platform",
              "programmingLanguage": ["Rust", "JavaScript"],
              "featureList": [
                "Zero Configuration",
                "File-based Routing", 
                "Type-safe APIs",
                "Hot Reload",
                "SSR/SSG Support",
                "Built-in Middleware"
              ]
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://rext.js.org"
                }
              ]
            }
          })
        }}
      />
    </>
  );
}
