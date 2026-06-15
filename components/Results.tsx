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
      <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
        Что вы получите
      </h2>
      <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
        {RESULTS.map((item, index) => (
          <div
            key={item}
            className="flex items-center gap-6 border-b border-white/10 px-6 py-5 last:border-b-0 sm:px-10 sm:py-6"
          >
            <span className="font-serif text-2xl font-bold text-accent sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-base text-neutral-200 sm:text-lg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
