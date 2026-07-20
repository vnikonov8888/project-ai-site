import { TELEGRAM_CHANNEL_URL } from "@/lib/config";
import BotLink from "@/components/BotLink";

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
        suppressHydrationWarning
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
            <BotLink />
            <a
              href={TELEGRAM_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Подписаться на Telegram
            </a>
            <a
              href="https://t.me/dotchVPN_bot?start=ref_1489261718"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Наш VPN
            </a>
          </div>

          {/* Community block */}
          <div className="mt-8 w-full max-w-xl rounded-2xl border border-accent/40 bg-white/[0.05] p-6">
            <p className="text-base font-semibold text-white">
              🔥 Комьюнити Project AI
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">
              Закрытое сообщество для тех, кто хочет делать AI-контент системно:
              промпты, разборы, контент-фермы, отчёты участников и поддержка
              практиков каждый день.
            </p>
            <p className="mt-2 text-sm text-neutral-400">
              В боте можно посмотреть обзор комьюнити и забрать доступ.
            </p>
            <a
              href="https://t.me/projectailessonbot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block"
            >
              Смотреть обзор в боте
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
