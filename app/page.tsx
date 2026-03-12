import { FeatureGrid } from "@/components/feature-grid";
import { HomeHero } from "@/components/home-hero";
import { HumanizerPanel } from "@/components/humanizer-panel";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-sm font-semibold text-white shadow-lg shadow-teal-900/20">
              HA
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight">HumanizeAI</p>
              <p className="text-sm text-[var(--muted)]">
                Make AI text sound naturally human
              </p>
            </div>
          </div>
          <a
            href="#demo"
            className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-sm font-medium text-[var(--foreground)] backdrop-blur transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            Try the demo
          </a>
        </header>

        <HomeHero />
        <FeatureGrid />

        <section id="demo" className="pt-8">
          <HumanizerPanel />
        </section>
      </section>
    </main>
  );
}
