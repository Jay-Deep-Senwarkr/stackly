// components/hero.tsx
"use client"
import Link from "next/link";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function Hero() {
  return (
    
    <section className="relative min-h-screen snap-start overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="#0d1b2a"
        gradientBackgroundEnd="#1e2a38"
        firstColor="13, 27, 42"
        secondColor="30, 42, 56"
        thirdColor="201, 168, 76"
        fourthColor="245, 240, 232"
        fifthColor="136, 153, 170"
        pointerColor="201, 168, 76"
      >
        <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
          <div className="mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center rounded-full border border-[#8899aa]/20 bg-[#1e2a38]/60 px-4 py-2 backdrop-blur-sm">
              <span className="text-sm font-medium text-[#c9a84c]">
                ✦ Custom Websites for Modern Businesses
              </span>
            </div>

            {/* Headline */}
            <h1 className="mx-auto max-w-4xl text-5xl font-bold leading-tight text-[#f5f0e8] md:text-7xl lg:text-8xl">
              Your business deserves better than a{" "}
              <span className="text-[#c9a84c]">template.</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#8899aa] md:text-xl">
              Clean, fast, modern websites built around your business —
              not the other way around.
            </p>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#c9a84c] px-8 py-4 font-semibold text-[#0d1b2a] transition-all duration-300 hover:scale-105"
              >
                Let&apos;s Talk →
              </Link>

              <Link
                href="/work"
                className="rounded-full border border-[#8899aa]/40 px-8 py-4 font-semibold text-[#f5f0e8] transition-all duration-300 hover:border-[#c9a84c] hover:text-[#c9a84c]"
              >
                See Our Work
              </Link>
            </div>

            {/* Bottom Text */}
            <p className="mt-12 text-sm tracking-widest text-[#8899aa] uppercase">
              Fast • Modern • Conversion Focused
            </p>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </section>

    
  );
}