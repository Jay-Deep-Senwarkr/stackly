import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import IndustriesStrip from "@/components/sections/industries-strip";
import WorkPreview from "@/components/sections/work-preview";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Verticals",
  description:
    "Ecommerce design expertise across fashion, beauty, home, food and beverage, and jewelry verticals.",
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Verticals"
        title="We speak your customers'"
        accent="language"
        description="Every category shops differently. Here's how we tailor stores to the way your niche actually buys."
      />
      <IndustriesStrip />
      <WorkPreview />
      <CtaBanner />
    </main>
  );
}
