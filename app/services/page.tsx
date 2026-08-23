import type { Metadata } from "next";
import PageHeader from "@/components/sections/page-header";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import Process from "@/components/sections/process";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Store redesigns, cart recovery, marketing campaigns, speed engineering, product page design, checkout UX, and SEO foundations for online stores.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Itemized"
        title="Design, recovery, campaigns —"
        accent="billed in results"
        description="Everything an ambitious store needs to look premium, recover lost sales, and turn visitors into customers."
      />
      <ServicesSnapshot />
      <Process />
      <CtaBanner />
    </main>
  );
}
