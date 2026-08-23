import Reveal, { SectionHeading } from "@/components/ui/reveal";
import { Stamp } from "@/components/ui/receipt";

const testimonials = [
  {
    quote:
      "The redesign paid for itself in six weeks. Same traffic, double the orders — the store finally feels like a brand people trust with their card details.",
    name: "Amelia Ross",
    role: "Founder, Velour Skin",
  },
  {
    quote:
      "Our load time went from four seconds to under one. Bounce rate dropped off a cliff and mobile sales jumped 64% in the first quarter after launch.",
    name: "Daniel Okafor",
    role: "CEO, Atlas Gear Co.",
  },
  {
    quote:
      "The cart recovery flow alone covers our retainer. Stackly didn't just make the store prettier — they made it sell while we sleep.",
    name: "Camille Laurent",
    role: "Creative Director, Maison Noir",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Verified"
          title="Store owners who stopped"
          accent="leaving money on the table"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08}>
              <figure className="relative flex h-full flex-col bg-white p-8 ring-1 ring-ink/10">
                <Stamp className="-mt-5 mb-2 self-start rotate-[-4deg] bg-white/80 text-[10px]">
                  Verified client
                </Stamp>

                <blockquote className="flex-1 font-display text-lg leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className="mt-6 border-t border-dashed border-ink/20 pt-4">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] tracking-wide text-graphite uppercase">
                    {item.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
