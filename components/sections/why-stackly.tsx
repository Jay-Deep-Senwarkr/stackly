import Reveal from "@/components/ui/reveal";

const principles = [
  {
    title: "Conversion-first",
    body: "Every layout, headline, and button earns its place. If it doesn't help a shopper buy, it doesn't ship.",
  },
  {
    title: "Brand-grade craft",
    body: "Your store should look like the premium product you sell. Templates can't fake that; we don't use them.",
  },
  {
    title: "Partners after launch",
    body: "Traffic grows when your store keeps evolving. We stay on to run recovery flows, campaigns, and tests with you.",
  },
];

export default function WhyStackly() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="border-t border-ink pt-5">
                <h3 className="font-display text-xl font-semibold italic">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
