const stats = [
  {
    value: "Since 1997",
    label: "Foshan stainless base",
    note: "Built around steady supply, not short-term price noise.",
  },
  {
    value: "25,000 m²",
    label: "Raw material + processing",
    note: "Stock, finishing, cutting, forming, and packing stay close.",
  },
  {
    value: "60+ lines",
    label: "Polishing and processing",
    note: "Surface, tolerance, film, and route can be coordinated together.",
  },
  {
    value: "150+ clients",
    label: "Across 10+ countries",
    note: "Export orders move with MTC, packing, and shipment proof.",
  },
];

export function TrustBar() {
  return (
    <section className="border-b border-[#e1d7c8] bg-[linear-gradient(180deg,#fbf8f0_0%,#f2eadf_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-card-md border border-[#e0d3c0] bg-white/66 px-4 py-4 shadow-[0_12px_30px_rgba(13,20,27,0.035)]"
            >
              <p className="text-2xl font-semibold tracking-[-0.02em] text-brand-dark sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#8a6b32]">
                {stat.label}
              </p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
