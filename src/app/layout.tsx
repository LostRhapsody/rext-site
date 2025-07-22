import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rextstack.org"),
  title: "Rext - The Rust Fullstack Framework for Modern Web Development",
  description: "Rext - The Rust Fullstack Framework for Modern Web Development",
  keywords: [
    "Rust fullstack framework",
    "Rust web framework", 
    "fullstack Rust",
    "Rust JavaScript framework",
    "fast web framework",
    "type-safe web development",
    "Rust backend JavaScript frontend",
    "zero configuration framework",
    "modern Rust framework",
    "Rust Next.js alternative"
  ],
  authors: [{ name: "Rext Team" }],
  creator: "Rext",
  publisher: "Rext",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rextstack.org",
    siteName: "Rext",
    title: "Rext - The Rust Fullstack Framework",
    description: "Build modern fullstack apps at the speed of Rust. Zero configuration, type-safe, blazingly fast web development with Rust backend and JavaScript frontend.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rext - The Rust Fullstack Framework",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@rextstack",
    creator: "@rextstack",
    title: "Rext - The Rust Fullstack Framework",
    description: "Build modern fullstack apps at the speed of Rust. Zero configuration, type-safe, blazingly fast.",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "https://rextstack.org",
  },
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Rext",
              "description": "The Rust fullstack framework for modern web development. Build blazingly fast, type-safe applications with zero configuration.",
              "url": "https://rextstack.org",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Cross-platform",
              "programmingLanguage": ["Rust", "JavaScript", "TypeScript"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Rext Team"
              },
              "keywords": "Rust fullstack framework, web development, type-safe, performance, zero configuration"
            })
          }}
        />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
