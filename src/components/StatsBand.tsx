type StatsBandProps = {
  title: string;
  subtitle?: string;
  stats: { value: string; label: string }[];
  source?: string;
};

export function StatsBand({ title, subtitle, stats, source }: StatsBandProps) {
  return (
    <section className="bg-bg-dark py-16 text-white md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-white">{title}</h2>
          {subtitle && (
            <p className="mt-3 text-white/75">{subtitle}</p>
          )}
        </div>
        <div
          className={`grid gap-8 text-center ${
            stats.length === 2
              ? "sm:grid-cols-2"
              : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.value}>
              <div className="font-display text-4xl font-bold text-accent md:text-5xl">
                {stat.value}
              </div>
              <p className="mt-3 text-sm text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
        {source && (
          <p className="mt-10 text-center text-xs text-white/50">{source}</p>
        )}
      </div>
    </section>
  );
}
