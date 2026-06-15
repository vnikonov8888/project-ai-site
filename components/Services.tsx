export type ServiceItem = {
  number: string;
  title: string;
  text: string;
};

export default function Services({ items }: { items: ServiceItem[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.number}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-accent/40 sm:p-8"
        >
          <span className="text-sm font-semibold text-accent-light">
            {item.number}
          </span>
          <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
            {item.title}
          </h3>
          <p className="mt-3 whitespace-pre-line text-neutral-400">
            {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}
