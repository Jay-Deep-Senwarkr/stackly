"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function CtaBanner() {
  return (
    <BackgroundBeamsWithCollision className="h-[70vh] bg-[#0d1b2a]">
      <div className="relative z-20 mx-auto flex max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/10 px-4 py-2 text-sm font-medium text-[#c9a84c]">
          Let's Build Something Great
        </span>

        <h2 className="mt-8 text-5xl font-bold tracking-tight text-[#f5f0e8] md:text-7xl">
          Ready to build
          <span className="block text-[#c9a84c]">
            something?
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#8899aa] md:text-xl">
          Tell us what you need. We'll tell you what's possible.
          Whether it's a business website, custom web application,
          or a complete digital presence — we're ready to help.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center rounded-full bg-[#c9a84c] px-8 py-4 font-semibold text-[#0d1b2a] transition-all duration-300 hover:scale-105"
          >
            Let's Talk
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full border border-[#f5f0e8]/20 px-8 py-4 font-semibold text-[#f5f0e8] transition-all duration-300 hover:bg-[#f5f0e8]/10"
          >
            See Our Work
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm">
          <div>
            <p className="text-2xl font-bold text-[#c9a84c]">
              100%
            </p>
            <p className="text-[#8899aa]">
              Custom Built
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#c9a84c]">
              Mobile
            </p>
            <p className="text-[#8899aa]">
              First Design
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#c9a84c]">
              Fast
            </p>
            <p className="text-[#8899aa]">
              Performance Focused
            </p>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}