import Reveal, { SectionHeading } from "@/components/ui/reveal";

const steps = [
  {
    n: "Step 1",
    title: "Audit",
    description:
      "We dig into your analytics, cart abandonment data, and competitors to find exactly where shoppers drop off — and what it costs you.",
  },
  {
    n: "Step 2",
    title: "Direction",
    description:
      "You review a premium design concept shaped around your brand and your buyers' behavior. We refine together until it's unmistakably yours.",
  },
  {
    n: "Step 3",
    title: "Build",
    description:
      "Clean, fast development with recovery flows and campaign infrastructure wired in from the start — not bolted on after launch.",
  },
  {
    n: "Step 4",
    title: "Grow",
    description:
      "We ship, watch real shopper data, and keep testing. Your store keeps improving after launch — campaigns included.",
  },
];

export default function Process() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="How we work"
          title="A clear path from"
          accent="clicks to customers"
          description="Four focused phases. No bloated timelines, no mystery."
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="border-t-2 border-ink pt-5">
                <p className="font-mono text-[11px] font-bold tracking-[0.25em] text-stamp uppercase">
                  {step.n}
                </p>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
