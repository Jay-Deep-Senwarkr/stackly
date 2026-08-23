import Hero from "@/components/hero";
import CtaBanner from "@/components/sections/cta-banner";
import IndustriesStrip from "@/components/sections/industries-strip";
import Process from "@/components/sections/process";
import ServicesSnapshot from "@/components/sections/services-snapshot";
import Testimonials from "@/components/sections/testimonials";
import WhyStackly from "@/components/sections/why-stackly";
import WorkPreview from "@/components/sections/work-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSnapshot />
      <WorkPreview />
      <Process />
      <IndustriesStrip />
      <Testimonials />
      <WhyStackly />
      <CtaBanner />
    </main>
  );
}
