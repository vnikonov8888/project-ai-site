import { TELEGRAM_CHANNEL_URL } from "@/lib/config";

export default function TelegramChannel() {
  return (
    <section className="relative overflow-hidden border-y border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(108,108,245,0.16) 0%, rgba(11,11,15,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 text-[14rem] text-white/[0.03] sm:-right-16 sm:text-[18rem]"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-[1em] w-[1em]">
          <path d="M21.426 11.094l-17-8.5a1 1 0 0 0-1.41 1.21l2.86 8.196-2.86 8.196a1 1 0 0 0 1.41 1.21l17-8.5a1 1 0 0 0 0-1.812z" />
        </svg>
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-start px-4 py-20 sm:items-center sm:px-6 sm:text-center md:py-28">
        <h2 className="font-serif text-3xl font-bold leading-snug tracking-tight sm:text-4xl md:text-5xl">
          В Telegram-канале Project AI — гайды, советы, монетизация роликов и
          разборы того, как применять AI на практике.
        </h2>
        <a
          href={TELEGRAM_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-10"
        >
          Перейти в Telegram-канал
        </a>
      </div>
    </section>
  );
}
