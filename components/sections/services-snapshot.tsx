import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/ui/reveal";
import { PerfSeam } from "@/components/ui/receipt";

const services = [
  {
    sku: "DSN-01",
    title: "Store Design & Redesign",
    description:
      "A storefront that looks like the brand your products deserve. We rebuild tired themes into premium, cohesive shopping experiences shoppers trust instantly.",
    href: "/services",
  },
  {
    sku: "CRT-02",
    title: "Cart Recovery",
    description:
      "Abandoned carts aren't lost sales — they're pending ones. Recovery flows, exit moments, and reminder campaigns that bring shoppers back to finish what they started.",
    href: "/services",
  },
  {
    sku: "MKT-03",
    title: "Marketing Campaigns",
    description:
      "Launches, seasonal pushes, and email campaigns with the creative and landing pages built in — traffic campaigns designed to bring buyers, not just visitors.",
    href: "/services",
  },
  {
    sku: "SPD-04",
    title: "Speed & Core Web Vitals",
    description:
      "Every extra second of load time costs sales. We engineer sub-second stores that rank higher on Google and keep mobile shoppers moving.",
    href: "/services",
  },
  {
    sku: "PDP-05",
    title: "Product Pages That Sell",
    description:
      "Rich media, social proof, and persuasive layouts that answer objections before they're asked — built around how people actually decide to buy.",
    href: "/services",
  },
  {
    sku: "CHK-06",
    title: "Checkout & Mobile UX",
    description:
      "Fewer steps, fewer drop-offs. Streamlined mobile-first checkout flows that recover abandoned carts at the last possible moment.",
    href: "/services",
  },
  {
    sku: "CRO-07",
    title: "Conversion Rate Optimization",
    description:
      "We study how real visitors browse, then remove friction and sharpen every call-to-action — turning the traffic you already have into more revenue.",
    href: "/services",
  },
  {
    sku: "SEO-08",
    title: "Traffic-Ready SEO Foundations",
    description:
      "Structured data, clean metadata, and performance baked in from day one — so your store gets found and stays competitive in search.",
    href: "/services",
  },
];

export default function ServicesSnapshot() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Itemized"
          title="Everything your store needs to"
          accent="sell beautifully"
          description="Design, recovery, campaigns, speed — itemized below, billed in results."
        />

        <div className="mt-16 grid gap-x-10 gap-y-2 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.sku} delay={(i % 2) * 0.06}>
              <Link
                href={service.href}
                className="group flex items-baseline gap-4 border-b border-dashed border-ink/20 py-6 transition-colors hover:border-stamp/50"
              >
                <span className="font-mono text-xs font-bold tracking-wider text-graphite transition-colors group-hover:text-stamp">
                  {service.sku}
                </span>

                <span className="flex-1">
                  <span className="flex items-center justify-between gap-3">
                    <span className="font-display text-xl font-medium sm:text-2xl">
                      {service.title}
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-graphite opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-stamp group-hover:opacity-100" />
                  </span>
                  <span className="mt-2 block max-w-lg text-sm leading-relaxed text-graphite">
                    {service.description}
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <PerfSeam className="mt-16" />
      </div>
    </section>
  );
}
