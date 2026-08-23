import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import WorkPreview from "@/components/sections/work-preview";
import Testimonials from "@/components/sections/testimonials";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Client Receipts",
  description:
    "Ecommerce redesigns, cart recovery, and campaigns measured in conversions and revenue — see the numbers behind the work.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Client receipts"
        title="The numbers behind"
        accent="the pretty"
        description="A selection of stores we've transformed — with results you can take to the bank."
      />
      <WorkPreview />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
