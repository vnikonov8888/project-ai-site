const RESULTS = [
  "AI-видео под задачу",
  "Сайт или страницу для заявок",
  "AI-помощника под рабочие процессы",
  "Контент-стратегию",
  "Идеи для продвижения",
  "Упаковку продукта или услуги",
  "Материалы, которые можно использовать в работе сразу",
];

export default function Results() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Что вы получите
      </h2>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {RESULTS.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="none"
              className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-light"
            >
              <path
                d="M5 10.5l3.5 3.5L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-neutral-300">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
