import Hero from "@/components/hero";
import CtaBanner from "@/components/sections/cta-banner";
import IndustriesStrip from "@/components/sections/industries-strip";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import WhyStackly from "@/components/sections/why-stackly";
import WorkPreview from "@/components/sections/work-preview";

export default function Home() {
  return (
    <main className="snap-y snap-mandatory">
      <Hero />
      <ServicesSnapshot />
      <WorkPreview />
      <IndustriesStrip />
      <WhyStackly />
      <CtaBanner />
    </main>
  );
}
