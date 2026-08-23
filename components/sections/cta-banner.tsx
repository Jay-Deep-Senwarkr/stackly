import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import { Barcode } from "@/components/ui/receipt";

export default function CtaBanner() {
  return (
    <section className="scallop-top scallop-bottom relative my-8 bg-ink py-28 text-paper">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-mono text-[11px] font-bold tracking-[0.3em] text-paper/70 uppercase">
            Final call — no charge to look
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] font-medium tracking-tight text-balance sm:text-7xl">
            Stop leaking <span className="marked-dark text-paper">revenue.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-paper/70">
            Book a free store audit. We&apos;ll itemize exactly where your
            design, cart, and campaigns lose shoppers — and what fixing each
            one is worth.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-paper px-9 py-4 font-semibold text-ink transition-transform duration-200 hover:-translate-y-0.5"
            >
              Get your free audit
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center border-b-2 border-paper/30 px-1 py-2 font-semibold text-paper transition-colors hover:border-paper hover:text-ledger"
            >
              See client receipts
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-16 flex flex-col items-center gap-2 opacity-80">
            <Barcode serial="SLY·AUDIT·2026" dark />
            <p className="font-mono text-[10px] tracking-[0.35em] text-paper/60 uppercase">
              Valid for every store · Results itemized honestly
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
