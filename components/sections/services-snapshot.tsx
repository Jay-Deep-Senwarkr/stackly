"use client";

import { Globe, Code2, Building2 } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const services = [
  {
    title: "Websites That Work",
    description:
      "Fast, mobile-first websites built to convert visitors into customers. No bloat, no templates — just clean code built around your business.",
    icon: Globe,
  },
  {
    title: "Web Apps & Portals",
    description:
      "Need something more than a website? We build custom web applications, dashboards, booking systems, and customer portals that help your business run smoother.",
    icon: Code2,
  },
  {
    title: "Built for Your Industry",
    description:
      "We don't build generic sites. Whether you're running a restaurant, a gym, or a store — we build for how your customers actually use the web.",
    icon: Building2,
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="relative min-h-screen bg-[#0d1b2a] flex items-center snap-start">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#8899aa]/20 bg-[#1e2a38]/60 px-4 py-2 text-sm font-medium text-[#c9a84c] backdrop-blur-sm">
            What We Do
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#f5f0e8] md:text-5xl">
            Websites built for real businesses
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#8899aa]">
            We create fast, modern digital experiences that help businesses
            look credible, attract customers, and grow online.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <CardSpotlight
                key={service.title}
                className="h-full min-h-[320px] border-[#8899aa]/20 bg-[#1e2a38]"
                color="#c9a84c"
              >
                <div className="relative z-20 flex h-full flex-col">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#c9a84c]/20 bg-[#c9a84c]/10">
                    <Icon className="h-7 w-7 text-[#c9a84c]" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-[#f5f0e8]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-[#8899aa]">
                    {service.description}
                  </p>
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </div>
    </section>
  );
}