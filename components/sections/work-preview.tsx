"use client";

import { CometCard } from "@/components/ui/comet-card";

const projects = [
  {
    title: "DevEvent",
    category: "Events Platform",
    description:
      "A hub for developers to discover hackathons, meetups, and conferences in one place.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Podcaster",
    category: "Media Platform",
    description:
      "A modern podcasting platform built for creators who want their content to look as good as it sounds.",
    image:
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Gym Site",
    category: "Fitness Website",
    description:
      "A fitness brand website designed to convert visitors into members with strong CTAs.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WorkPreview() {
  return (
    <section className="min-h-screen bg-[#1e2a38] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-[#8899aa]/20 bg-[#0d1b2a]/60 px-4 py-2 text-sm font-medium text-[#c9a84c]">
            Recent Work
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#f5f0e8] md:text-5xl">
            A few things we&apos;ve built
          </h2>

          <p className="mt-6 text-lg text-[#8899aa]">
            A mix of platforms, products, and business websites - all built with
            performance, usability, and growth in mind.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <CometCard key={project.title}>
              <div className="group flex h-full flex-col rounded-3xl border border-[#8899aa]/10 bg-[#0d1b2a] p-4">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <p className="text-sm font-medium text-[#c9a84c]">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-[#f5f0e8]">
                    {project.title}
                  </h3>

                  <p className="mt-4 flex-1 leading-relaxed text-[#8899aa]">
                    {project.description}
                  </p>
                </div>
              </div>
            </CometCard>
          ))}
        </div>
      </div>
    </section>
  );
}
