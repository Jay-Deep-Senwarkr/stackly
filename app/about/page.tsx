import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import WhyStackly from "@/components/sections/why-stackly";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stackly & Co. is an ecommerce studio designing premium storefronts, recovering carts, and running campaigns for stores serious about growth.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About"
        title="A studio obsessed with"
        accent="your upside"
        description="We're a small team of designers and engineers who believe a store should be as premium as the products it sells — and just as hardworking."
      />
      <WhyStackly />
      <Process />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
