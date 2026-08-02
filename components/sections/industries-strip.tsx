"use client";

import Link from "next/link";
import {
  UtensilsCrossed,
  ShoppingBag,
  Dumbbell,
  CalendarDays,
  User,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Restaurants",
    description:
      "Menus, reservations, maps, and websites that make people hungry before they walk in.",
    icon: UtensilsCrossed,
    href: "/industries#restaurants",
  },
  {
    title: "E-commerce",
    description:
      "Fast online stores built to showcase products and improve conversions.",
    icon: ShoppingBag,
    href: "/industries#ecommerce",
  },
  {
    title: "Fitness",
    description:
      "Membership-focused websites with schedules, trainer profiles, and booking flows.",
    icon: Dumbbell,
    href: "/industries#fitness",
  },
  {
    title: "Events",
    description:
      "Event pages that drive registrations, showcase speakers, and create excitement.",
    icon: CalendarDays,
    href: "/industries#events",
  },
  {
    title: "Professionals",
    description:
      "Clean portfolios and business websites that create strong first impressions.",
    icon: User,
    href: "/industries#professionals",
  },
];

export default function IndustriesStrip() {
  return (
    <section className="min-h-screen bg-[#0d1b2a] py-24 flex items-center snap-start">
      <div className="mx-auto max-w-7xl px-6 w-full">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#8899aa]/20 bg-[#1e2a38]/60 px-4 py-2 text-sm font-medium text-[#c9a84c]">
            Industries We Serve
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#f5f0e8] md:text-5xl">
            Built differently for every business
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[#8899aa]">
            Every industry has different customers, goals, and challenges.
            We build around how your business actually works.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.title}
                href={industry.href}
                className="group"
              >
                <div className="flex h-full flex-col rounded-3xl border border-[#8899aa]/20 bg-[#1e2a38] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a84c]/50">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c9a84c]/10">
                    <Icon className="h-7 w-7 text-[#c9a84c]" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#f5f0e8]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#8899aa]">
                    {industry.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[#c9a84c]">
                    <span className="text-sm font-medium">
                      Learn More
                    </span>

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}