"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/reveal";
import LedgerTicker from "@/components/ui/ledger-ticker";
import PrintReveal, { StampThump } from "@/components/ui/print-reveal";
import { ReceiptLine, Barcode } from "@/components/ui/receipt";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* faint ledger grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgb(26 24 20 / 0.045) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:pt-40">
        {/* Statement */}
        <div>
          <Reveal>
            <p className="font-mono text-[11px] font-bold tracking-[0.3em] text-graphite uppercase">
              Ecommerce design · Cart recovery · Marketing campaigns
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-7 font-display text-[2.9rem] leading-[1.02] font-medium tracking-tight text-balance sm:text-6xl lg:text-[4.4rem]">
              Every abandoned cart is a{" "}
              <span className="marked">customer you already paid for.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">
              Stackly &amp; Co. designs premium storefronts, recovers the
              checkouts shoppers leave behind, and runs campaigns that bring
              buyers back — so the traffic you pay for finally pays you.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-ink px-8 py-4 font-semibold text-paper transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get your free audit
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center border-b-2 border-ink/25 px-1 py-2 font-semibold text-ink transition-colors hover:border-stamp hover:text-stamp"
              >
                See client receipts
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-10 font-mono text-xs tracking-wider text-graphite">
              No obligation · Reply within 24h · Your data stays yours
            </p>
          </Reveal>
        </div>

        {/* The audit receipt */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <PrintReveal>
            <div className="relative -rotate-1 bg-white p-7 shadow-[0_24px_60px_-24px_rgb(26_24_20/0.35)] ring-1 ring-ink/10 transition-transform duration-500 hover:rotate-0">
              {/* punch hole + stub */}
              <div
                aria-hidden
                className="absolute left-1/2 top-2 h-2 w-16 -translate-x-1/2 rounded-full bg-paper shadow-inner"
              />

              <header className="mt-3 pb-4 text-center">
                <p className="font-display text-xl font-semibold">
                  Stackly &amp; Co.
                </p>
                <p className="mt-1 font-mono text-[10px] tracking-[0.28em] text-graphite uppercase">
                  Conversion studio — store audit
                </p>
              </header>

              <div className="perf-seam" />

              <div className="py-4">
                <ReceiptLine label="Storefront redesign" value="+38% CVR" />
                <ReceiptLine label="Cart recovery flow" value="+$2,340/mo" />
                <ReceiptLine label="Campaign creative" value="3.2x ROAS" />
                <ReceiptLine label="Speed overhaul" value="4.1s → 0.9s" />
              </div>

              <div className="perf-seam" />

              <div className="flex items-center justify-between py-4">
                <span className="font-mono text-[13px] font-bold">TOTAL</span>
                <span className="font-mono text-[13px] font-bold text-ledger">
                  YOUR UPSIDE
                </span>
              </div>

              <footer className="border-t border-dashed border-ink/25 pt-5">
                <Barcode serial="NO·RISK·FIRST·LOOK" />
              </footer>

              {/* Stamp */}
              <StampThump className="absolute -right-3 bottom-28">
                <span className="stamp-mark block bg-white/90 px-4 py-2 text-sm font-bold">
                  Free
                  <br />
                  Audit
                </span>
              </StampThump>
            </div>
          </PrintReveal>
        </div>
      </div>

      {/* Ticker band */}
      <div className="scallop-top scallop-bottom relative bg-ink">
        <LedgerTicker />
      </div>
    </section>
  );
}
