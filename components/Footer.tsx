import { TELEGRAM_CHANNEL_URL, TELEGRAM_CONTACT_URL } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 text-sm text-neutral-400 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-serif text-base text-neutral-300">
          Project AI — AI-решения для бизнеса.
        </p>
        <div className="flex gap-6">
          <a
            href={TELEGRAM_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Написать менеджеру
          </a>
          <a
            href={TELEGRAM_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            Telegram-канал
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-5xl px-4 pb-8 text-xs text-neutral-500 sm:px-6">
        © {new Date().getFullYear()} Project AI
      </p>
    </footer>
  );
}
