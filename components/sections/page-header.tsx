import Reveal from "@/components/ui/reveal";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
}) {
  return (
    <section className="relative pb-16 pt-40">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-[11px] font-bold tracking-[0.3em] text-graphite uppercase">
            {eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-5 font-display text-5xl leading-[1.04] font-medium tracking-tight text-balance sm:text-6xl">
            {title}{" "}
            {accent ? <span className="marked">{accent}</span> : null}
          </h1>
        </Reveal>

        {description ? (
          <Reveal delay={0.16}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-graphite">
              {description}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
