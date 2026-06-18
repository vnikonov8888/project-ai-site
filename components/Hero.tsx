import { TELEGRAM_CHANNEL_URL, TELEGRAM_LESSON_BOT_URL } from "@/lib/config";

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

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="flex max-w-2xl flex-col items-start">
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
      </div>
    </section>
  );
}
