import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal, { SectionHeading } from "@/components/ui/reveal";

const verticals = [
  {
    title: "Fashion & Apparel",
    note: "lookbook collections · size-fit confidence · lower returns",
    href: "/industries#fashion",
  },
  {
    title: "Beauty & Skincare",
    note: "routines & bundles · subscription flows · repeat purchase design",
    href: "/industries#beauty",
  },
  {
    title: "Home & Living",
    note: "room-set galleries · big-ticket trust · confident layouts",
    href: "/industries#home",
  },
  {
    title: "Food & Beverage",
    note: "subscriptions · gifting flows · wholesale handled elegantly",
    href: "/industries#food",
  },
  {
    title: "Jewelry & Accessories",
    note: "detail views · high-consideration trust signals · polished checkout",
    href: "/industries#jewelry",
  },
];

export default function IndustriesStrip() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Verticals"
          title="We speak your customers'"
          accent="language"
          description="Every category shops differently. We build around how your niche actually buys."
        />

        <div className="mt-14">
          {verticals.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <Link
                href={v.href}
                className="leader group border-b border-dashed border-ink/20 py-5 transition-colors hover:border-stamp/50"
              >
                <span className="font-display text-2xl font-medium transition-colors group-hover:text-stamp sm:text-3xl">
                  {v.title}
                </span>
                <span className="dots" aria-hidden />
                <span className="hidden font-mono text-[11px] tracking-wide text-graphite md:block">
                  {v.note}
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 self-center text-graphite transition-all duration-300 group-hover:translate-x-1 group-hover:text-stamp" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
