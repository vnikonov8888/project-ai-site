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
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="flex max-w-2xl flex-col items-start">
          <span className="section-eyebrow">Project AI</span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            AI-решения для бизнеса
          </h1>
          <p className="mt-6 text-lg text-neutral-300 sm:text-xl">
            Видео, сайты, AI-агенты и упаковка под задачи бизнеса.
          </p>
          <p className="mt-4 text-base text-neutral-400 sm:text-lg">
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
      </div>
    </section>
  );
}
