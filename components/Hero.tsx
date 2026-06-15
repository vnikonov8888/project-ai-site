import { TELEGRAM_CONTACT_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(108,108,245,0.18) 0%, rgba(10,10,15,0) 70%)",
        }}
      />
      <div className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-start justify-center px-4 py-24 sm:px-6">
        <span className="section-eyebrow">Project AI</span>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          AI-решения для бизнеса
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-neutral-300 sm:text-xl">
          Видео, сайты, AI-агенты и упаковка под задачи бизнеса.
        </p>
        <p className="mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg">
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
    </section>
  );
}
