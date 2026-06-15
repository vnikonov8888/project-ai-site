import { TELEGRAM_CONTACT_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(245,216,61,0.14) 0%, rgba(11,11,15,0) 70%), radial-gradient(50% 40% at 100% 30%, rgba(108,108,245,0.14) 0%, rgba(11,11,15,0) 70%)",
        }}
      />
      <div className="mx-auto grid max-w-5xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32">
        <div className="flex flex-col items-start">
          <span className="section-eyebrow">Project AI</span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            AI-решения для бизнеса
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300 sm:text-xl">
            Видео, сайты, AI-агенты и упаковка под задачи бизнеса.
          </p>
          <p className="mt-4 max-w-xl text-base text-neutral-400 sm:text-lg">
            Мы создаём AI-контент и решения, которые помогают бренду выглядеть
            сильнее и регулярно появляться перед аудиторией.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={TELEGRAM_CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Обсудить задачу
            </a>
            <a href="#services" className="btn-secondary">
              Смотреть услуги
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] sm:aspect-square lg:aspect-[4/5]">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(70% 60% at 30% 20%, rgba(245,216,61,0.22) 0%, rgba(11,11,15,0) 60%), radial-gradient(60% 50% at 80% 80%, rgba(108,108,245,0.22) 0%, rgba(11,11,15,0) 65%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute left-6 top-6 flex items-center gap-2 sm:left-8 sm:top-8">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                AI Video
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_60px_-10px_rgba(245,216,61,0.5)] backdrop-blur-sm sm:h-24 sm:w-24">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent sm:h-10 sm:w-10">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-8 sm:left-8 sm:right-8">
              <span className="font-serif text-lg font-semibold text-white sm:text-xl">
                Project AI
              </span>
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-neutral-300">
                AI · Видео · Сайты
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
