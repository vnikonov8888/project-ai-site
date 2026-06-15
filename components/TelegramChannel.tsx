import { TELEGRAM_CHANNEL_URL } from "@/lib/config";

export default function TelegramChannel() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="rounded-2xl border border-telegram/30 bg-telegram/[0.06] p-6 sm:p-10">
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-telegram/20 text-telegram-light">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M21.426 11.094l-17-8.5a1 1 0 0 0-1.41 1.21l2.86 8.196-2.86 8.196a1 1 0 0 0 1.41 1.21l17-8.5a1 1 0 0 0 0-1.812z" />
              </svg>
            </span>
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                В Telegram-канале Project AI — гайды, советы, монетизация
                роликов и разборы того, как применять AI на практике.
              </h2>
            </div>
          </div>
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-telegram shrink-0"
          >
            Перейти в Telegram-канал
          </a>
        </div>
      </div>
    </section>
  );
}
