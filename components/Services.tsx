export type ServiceItem = {
  number: string;
  title: string;
  text: string;
};

export default function Services({ items }: { items: ServiceItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.number}
          className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-accent/40 sm:p-10"
        >
          <div
            aria-hidden
            className={`pointer-events-none absolute -top-16 h-56 w-56 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-80 ${
              index % 2 === 0
                ? "-right-16 bg-accent/10"
                : "-left-16 bg-glow/15"
            }`}
          />
          <span className="font-serif text-4xl font-bold text-accent sm:text-5xl">
            {item.number}
          </span>
          <h3 className="mt-4 font-serif text-2xl font-semibold text-white sm:text-3xl">
            {item.title}
          </h3>
          <p className="relative mt-4 whitespace-pre-line text-neutral-400">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}
