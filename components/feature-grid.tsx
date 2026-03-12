const features = [
  {
    title: "Natural rewrites",
    description:
      "Turns stiff, repetitive AI copy into writing that feels clear, warm, and human.",
  },
  {
    title: "Tone control",
    description:
      "Switch between natural, professional, and casual modes without losing meaning.",
  },
  {
    title: "Fast workflow",
    description:
      "Paste, rewrite, copy, and ship polished text in a few seconds on any device.",
  },
];

export function FeatureGrid() {
  return (
    <section className="grid gap-4 py-4 md:grid-cols-3 md:py-8">
      {features.map((feature) => (
        <article
          key={feature.title}
          className="rounded-[1.75rem] border border-[var(--border)] bg-white/75 p-6 shadow-sm backdrop-blur"
        >
          <h2 className="text-xl font-semibold tracking-tight">{feature.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
            {feature.description}
          </p>
        </article>
      ))}
    </section>
  );
}
