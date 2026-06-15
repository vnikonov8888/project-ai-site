export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <span className="font-serif text-lg font-bold tracking-tight sm:text-xl">
          Project AI
        </span>
        <a
          href="#services"
          aria-label="Меню"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-white/30 hover:bg-white/5"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
