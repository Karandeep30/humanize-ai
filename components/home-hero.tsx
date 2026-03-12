export function HomeHero() {
  return (
    <section className="grid flex-1 items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-teal-900/10 bg-white/75 px-4 py-1.5 text-sm font-medium text-[var(--accent-strong)] shadow-sm backdrop-blur">
          Polished rewriting for AI-assisted teams
        </span>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Rewrite robotic text into copy people actually enjoy reading.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          HumanizeAI keeps your meaning intact while smoothing awkward phrasing,
          removing repetitive AI patterns, and shaping the voice to match your tone.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--accent-strong)]"
          >
            Humanize text
          </a>
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white/75 px-6 py-3 text-base font-semibold text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            View the tool
          </a>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 -rotate-3 rounded-[2rem] bg-gradient-to-br from-teal-100 via-white to-amber-100 blur-xl" />
        <div className="relative rounded-[2rem] border border-white/60 bg-[var(--card)] p-6 shadow-[var(--shadow)] backdrop-blur xl:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
                Before
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                We are delighted to provide a comprehensive solution that
                optimizes your communication outputs.
              </p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-2xl bg-amber-100" />
          </div>
          <div className="my-6 h-px bg-[var(--border)]" />
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
                After
              </p>
              <p className="mt-2 text-sm leading-7 text-[var(--foreground)]">
                We help you turn stiff, over-produced writing into clear,
                natural language people connect with.
              </p>
            </div>
            <div className="h-11 w-11 shrink-0 rounded-2xl bg-teal-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
