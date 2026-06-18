"use client";

import { useState } from "react";

type ProjectItem = {
  title: string;
  platform: "Instagram" | "TikTok";
  followers: string;
  image: string;
};

const PROJECTS: ProjectItem[] = [
  {
    title: "@project.ai",
    platform: "TikTok",
    followers: "5.1K",
    image: "/projects/project-ai-tiktok.png",
  },
  {
    title: "@ai404show",
    platform: "Instagram",
    followers: "1.3K",
    image: "/projects/ai404show.png",
  },
  {
    title: "@project.ai.404",
    platform: "Instagram",
    followers: "3.3K",
    image: "/projects/project-ai-404.png",
  },
  {
    title: "@ai404project",
    platform: "Instagram",
    followers: "4K",
    image: "/projects/ai404project.png",
  },
];

function ProjectCard({ title, platform, followers, image }: ProjectItem) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d10] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_8px_40px_-12px_rgba(245,216,61,0.18)]">
      {/* Image container */}
      <div className="aspect-[4/5] overflow-hidden bg-black">
        {!imgFailed ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{
              background:
                "radial-gradient(ellipse at 50% 35%, rgba(245,216,61,0.07) 0%, rgba(11,11,15,0) 65%), radial-gradient(ellipse at 80% 80%, rgba(108,108,245,0.08) 0%, rgba(11,11,15,0) 60%)",
            }}
          >
            <span className="font-serif text-7xl font-bold text-white/[0.05]">
              AI
            </span>
          </div>
        )}
      </div>

      {/* Text block */}
      <div className="p-4 sm:p-5">
        <p className="font-semibold text-white">{title}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-xs text-neutral-400">{platform}</span>
          <span className="text-white/20">·</span>
          <span className="text-xs font-semibold text-accent">{followers}</span>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
        Наши проекты
      </h2>

      {/* Mobile swipe — hidden on md+ */}
      <div className="mt-8 md:hidden">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          {PROJECTS.map((p) => (
            <div key={p.title} className="w-[72vw] flex-shrink-0 snap-center">
              <ProjectCard {...p} />
            </div>
          ))}
          <div aria-hidden className="w-4 flex-shrink-0" />
        </div>
      </div>

      {/* Desktop grid 2×2 — hidden below md */}
      <div className="mt-8 hidden md:grid md:grid-cols-2 md:gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
