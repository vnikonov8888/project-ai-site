import { TELEGRAM_CHANNEL_URL, TELEGRAM_LESSON_BOT_URL } from "@/lib/config";

const TABS = ["AI-видео", "Сайты", "AI-агенты", "Упаковка", "Обучение"] as const;

function DashboardPreview() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 20%, rgba(245,216,61,0.1) 0%, transparent 60%), radial-gradient(50% 40% at 20% 80%, rgba(108,108,245,0.13) 0%, transparent 60%)",
        }}
      />

      {/* Title bar */}
      <div className="relative flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-accent" />
        <span className="text-xs font-semibold tracking-wide text-white/50">
          Project AI
        </span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-accent/50" />
        </div>
      </div>

      {/* Tabs */}
      <div className="no-scrollbar relative flex gap-1 overflow-x-auto border-b border-white/[0.06] px-3 py-2">
        {TABS.map((tab, i) => (
          <span
            key={tab}
            className={`shrink-0 cursor-default rounded-full px-3 py-1 text-xs font-medium ${
              i === 0 ? "bg-accent text-neutral-950" : "text-white/35"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Content */}
      <div className="relative space-y-2 p-3">
        {/* Status */}
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-neutral-500">
              Текущий проект
            </p>
            <p className="mt-0.5 text-sm font-semibold text-white">
              AI-видео для бренда
            </p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Live
          </span>
        </div>

        {/* Progress */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <div className="flex items-center justify-between text-[10px] text-neutral-500">
            <span>Выполнение</span>
            <span className="text-accent">80%</span>
          </div>
          <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/[0.08]">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-accent to-accent/60 shadow-[0_0_8px_rgba(245,216,61,0.4)]" />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <p className="text-[10px] text-neutral-500">Форматов</p>
            <p className="mt-0.5 font-serif text-2xl font-bold text-white">6+</p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
            <p className="text-[10px] text-neutral-500">Направлений</p>
            <p className="mt-0.5 font-serif text-2xl font-bold text-white">5</p>
          </div>
        </div>

        {/* Service tags */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
          <p className="text-[10px] uppercase tracking-widest text-neutral-500">
            Услуги
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {["Видео", "Сайты", "AI-агенты", "Упаковка", "Обучение"].map(
              (s) => (
                <span
                  key={s}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[11px] text-neutral-300"
                >
                  {s}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-40"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden={true}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(11,11,15,0.45) 0%, rgba(11,11,15,0.75) 60%, rgba(11,11,15,0.9) 100%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(245,216,61,0.12) 0%, rgba(11,11,15,0) 70%), radial-gradient(50% 40% at 100% 50%, rgba(108,108,245,0.12) 0%, rgba(11,11,15,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-32">
        {/* Text */}
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
              href={TELEGRAM_LESSON_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Забрать бесплатный урок
            </a>
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Подписаться на Telegram
            </a>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
            В канале Project AI — гайды, советы, монетизация роликов и разборы
            того, как применять AI на практике.
          </p>
        </div>

        {/* Dashboard preview */}
        <DashboardPreview />
      </div>
    </section>
  );
}
