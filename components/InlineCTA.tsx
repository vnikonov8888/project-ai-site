type InlineCTAProps = {
  headline: string;
  text: string;
  buttonLabel: string;
  href: string;
};

export default function InlineCTA({
  headline,
  text,
  buttonLabel,
  href,
}: InlineCTAProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 pl-8 sm:p-8 sm:pl-10">
      <span aria-hidden className="absolute left-0 top-0 h-full w-1 bg-accent" />
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h3 className="font-serif text-lg font-semibold text-white sm:text-xl">
            {headline}
          </h3>
          <p className="mt-2 text-neutral-400">{text}</p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary shrink-0 self-start sm:self-center"
        >
          {buttonLabel}
        </a>
      </div>
    </div>
  );
}
