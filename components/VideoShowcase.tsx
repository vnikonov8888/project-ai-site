"use client";

import { useEffect, useRef } from "react";
import { TELEGRAM_CONTACT_URL } from "@/lib/config";

type VideoItem = {
  number: string;
  title: string;
  description: string;
  src: string;
  glow: "yellow" | "purple";
};

const VIDEOS: VideoItem[] = [
  {
    number: "01",
    title: "Premium Brand Video",
    description:
      "Стильные визуальные ролики для продукта, эксперта или компании: эстетика, имидж и сильное первое впечатление.",
    src: "/videos/stylish_web.mp4",
    glow: "yellow",
  },
  {
    number: "02",
    title: "Cinematic Action",
    description:
      "Динамичные сцены с движением, конфликтом и трейлерным вайбом для роликов, которые должны цеплять с первых секунд.",
    src: "/videos/action_web.mp4",
    glow: "purple",
  },
  {
    number: "03",
    title: "Character / Cartoon",
    description:
      "AI-персонажи, маскоты и мультяшные ролики для брендов, которым нужна запоминающаяся подача.",
    src: "/videos/cartoon_web.mp4",
    glow: "yellow",
  },
];

function VideoCard({ number, title, description, src, glow }: VideoItem) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const glowShadow =
    glow === "yellow"
      ? "shadow-[0_0_60px_-12px_rgba(245,216,61,0.35)]"
      : "shadow-[0_0_70px_-12px_rgba(108,108,245,0.45)]";

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black ${glowShadow}`}
    >
      <div className="aspect-[9/16]">
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          suppressHydrationWarning
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-base font-bold text-accent sm:text-lg">
            {number}
          </span>
          <h3 className="font-serif text-base font-semibold leading-tight text-white sm:text-lg">
            {title}
          </h3>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-neutral-400 sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(50% 40% at 20% 60%, rgba(245,216,61,0.06) 0%, transparent 70%), radial-gradient(50% 40% at 80% 40%, rgba(108,108,245,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
          Форматы, которые мы создаём
        </h2>

        {/* ── Mobile carousel — hidden on lg+ ── */}
        <div className="mt-8 lg:hidden">
          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {VIDEOS.map((v) => (
              <div
                key={v.number}
                className="w-[85vw] flex-shrink-0 snap-center sm:w-[68vw]"
              >
                <VideoCard {...v} />
              </div>
            ))}
            <div aria-hidden className="w-4 flex-shrink-0 sm:w-6" />
          </div>
          {/* Static indicators */}
          <div className="mt-5 flex items-center justify-center gap-6">
            {VIDEOS.map((v) => (
              <span
                key={v.number}
                className="font-serif text-xs font-bold tracking-[0.25em] text-white/25"
              >
                {v.number}
              </span>
            ))}
          </div>
        </div>

        {/* ── Desktop floating collage — hidden below lg ── */}
        <div className="mt-10 hidden lg:grid lg:grid-cols-[1fr_1.45fr_1fr] lg:items-center lg:gap-5">
          <div className="translate-y-10">
            <VideoCard {...VIDEOS[0]} />
          </div>
          <div>
            <VideoCard {...VIDEOS[1]} />
          </div>
          <div className="translate-y-6">
            <VideoCard {...VIDEOS[2]} />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-8 lg:mt-14">
          <p className="font-serif text-xl font-semibold text-white sm:text-2xl">
            Хотите такой формат под свой бренд?
          </p>
          <a
            href={TELEGRAM_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            Обсудить видео
          </a>
        </div>
      </div>
    </section>
  );
}
