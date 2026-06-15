import { TELEGRAM_CONTACT_URL } from "@/lib/config";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(108,108,245,0.16) 0%, rgba(10,10,15,0) 70%)",
        }}
      />
      <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-20 sm:items-center sm:px-6 sm:text-center md:py-28">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Хотите понять, что AI может дать вашему бизнесу?
        </h2>
        <p className="mt-6 text-lg text-neutral-300">
          Напишите нам, что у вас за бизнес и какая задача стоит сейчас. Мы
          подскажем, какое решение подойдёт лучше.
        </p>
        <a
          href={TELEGRAM_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-8"
        >
          Написать нам
        </a>
      </div>
    </section>
  );
}
