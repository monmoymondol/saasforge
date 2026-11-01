import { Metadata } from "next";
import {
  Hero,
  Features,
  StatsBar,
  Testimonials,
  PricingTable,
  CTASection,
  Footer,
} from "@/components/marketing";
import { Header } from "@/components/layout/header";

export const metadata: Metadata = {
  title: "SaaSForge — Build Better SaaS Products Faster",
  description:
    "The complete Next.js starter kit for modern SaaS applications. Authentication, billing, team management, and more — production-ready out of the box.",
  keywords: [
    "SaaS starter",
    "Next.js boilerplate",
    "React SaaS template",
    "authentication",
    "stripe billing",
    "team management",
  ],
  openGraph: {
    title: "SaaSForge — Build Better SaaS Products Faster",
    description:
      "The complete Next.js starter kit for modern SaaS applications.",
    type: "website",
    siteName: "SaaSForge",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaSForge — Build Better SaaS Products Faster",
    description:
      "The complete Next.js starter kit for modern SaaS applications.",
  },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        <StatsBar />
        <Features />
        <Testimonials />
        <PricingTable />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
