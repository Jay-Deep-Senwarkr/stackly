import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/ui/reveal";

const caseStudies = [
  {
    title: "Velour Skin",
    category: "DTC Skincare",
    description:
      "Full storefront redesign with editorial product storytelling and a streamlined checkout.",
    metric: "+41%",
    metricLabel: "conversion rate",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Atlas Gear Co.",
    category: "Outdoor & Travel Gear",
    description:
      "Speed overhaul and mobile-first catalog UX for a fast-growing adventure brand.",
    metric: "+38%",
    metricLabel: "revenue per visitor",
    image:
      "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Maison Noir",
    category: "Fashion Boutique",
    description:
      "A luxury lookbook-style shopping experience with look-to-cart flows and refined PDPs.",
    metric: "+64%",
    metricLabel: "mobile sales",
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fern & Field",
    category: "Home Goods",
    description:
      "Cart recovery flows and email campaigns that brought window-shoppers back to checkout.",
    metric: "$28k",
    metricLabel: "carts recovered / qtr",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WorkPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Client receipts"
          title="Redesigns measured in"
          accent="revenue"
          description="Real stores, real numbers — the kind you can take to the bank."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {caseStudies.map((project, i) => (
            <Reveal key={project.title} delay={(i % 4) * 0.07}>
              <article className="group relative flex h-full flex-col bg-white ring-1 ring-ink/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_-24px_rgb(26_24_20/0.35)]">
                {/* hang-tag punch */}
                <div
                  aria-hidden
                  className="absolute -top-2 left-6 h-4 w-4 rounded-full bg-paper ring-1 ring-ink/15"
                />

                <div className="relative overflow-hidden border-b border-ink/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.category}`}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-graphite uppercase">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-display text-2xl font-medium">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-graphite">
                    {project.description}
                  </p>

                  <p className="mt-5 flex items-baseline gap-2 border-t border-dashed border-ink/20 pt-4">
                    <TrendingUp
                      className="h-4 w-4 self-center text-ledger"
                      aria-hidden
                    />
                    <span className="font-display text-xl font-semibold text-ledger">
                      {project.metric}
                    </span>
                    <span className="font-mono text-[11px] tracking-wide text-graphite uppercase">
                      {project.metricLabel}
                    </span>
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 text-center">
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 border-b-2 border-ink/25 pb-1 font-semibold transition-colors hover:border-stamp hover:text-stamp"
            >
              All client receipts
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
