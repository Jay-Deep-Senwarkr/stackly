"use client";

import { Building2, LifeBuoy, MessageSquare } from "lucide-react";

const reasons = [
  {
    title: "We Keep It Simple",
    description:
      "You won't need a manual to understand what we're building or why. We communicate clearly, move quickly, and deliver on time.",
    icon: MessageSquare,
  },
  {
    title: "We Build for Real Businesses",
    description:
      "Not portfolios. Not vanity projects. We build websites and applications that help businesses look credible, attract customers, and grow.",
    icon: Building2,
  },
  {
    title: "We Stay Involved",
    description:
      "Launch isn't the end. Whether you need updates, improvements, or support down the road, we're still here when you need us.",
    icon: LifeBuoy,
  },
];

export default function WhyStackly() {
  return (
    <section className="flex min-h-screen items-center bg-[#1e2a38] py-24">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#8899aa]/20 bg-[#0d1b2a]/60 px-4 py-2 text-sm font-medium text-[#c9a84c]">
            Why Stackly
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#f5f0e8] md:text-5xl">
            A straightforward way to build online
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#8899aa]">
            No bloated processes. No unnecessary complexity. Just thoughtful
            design, clean development, and clear communication from start to
            finish.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-[#8899aa]/20 bg-[#0d1b2a] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a84c]/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#c9a84c]/10">
                  <Icon className="h-8 w-8 text-[#c9a84c]" />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-[#f5f0e8]">
                  {reason.title}
                </h3>

                <p className="mt-5 leading-relaxed text-[#8899aa]">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8899aa]">
            Clean Design / Fast Development / Long-Term Support
          </p>
        </div>
      </div>
    </section>
  );
}
