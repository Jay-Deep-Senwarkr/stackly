"use client";

import { motion, type Variants } from "motion/react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.21, 0.65, 0.35, 1] },
  }),
};

export default function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
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
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <p className="font-mono text-[11px] font-bold tracking-[0.3em] text-graphite uppercase">
          {eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl leading-[1.06] font-medium tracking-tight text-balance sm:text-5xl">
          {title}{" "}
          {accent ? <span className="marked">{accent}</span> : null}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-graphite">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
