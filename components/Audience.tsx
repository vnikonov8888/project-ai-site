const AUDIENCE = [
  "Бизнес",
  "Эксперты",
  "Бренды",
  "Локальные проекты",
  "Telegram-каналы",
  "Онлайн-школы",
  "Предприниматели",
];

export default function Audience() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
        Для кого Project AI
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {AUDIENCE.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300 transition-colors hover:border-accent/40 hover:text-white sm:text-base"
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-8 max-w-2xl text-lg text-neutral-400">
        Для тех, кто понимает: AI нужен не ради хайпа, а ради внимания,
        узнаваемости, скорости и роста.
      </p>
    </section>
  );
}
