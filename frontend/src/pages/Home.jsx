const STATS = [
  { value: "35+", label: "Years in Pampanga" },
  { value: "10", label: "Dealership brands" },
  { value: "50k+", label: "Families served" },
];

const BUSINESS_LINES = [
  {
    title: "Automotive",
    copy: "New and certified vehicles across our multi-brand dealership network, backed by factory-trained service.",
    href: "/automotive",
  },
  {
    title: "Motorbikes",
    copy: "From everyday commuters to big bikes, with genuine parts and riders' after-sales support.",
    href: "/motorbikes",
  },
  {
    title: "Affiliates",
    copy: "Financing, insurance, and lifestyle brands under the Laus Group umbrella, built around one relationship.",
    href: "/affiliates",
  },
];

function Home() {
  return (
    <main className="bg-paper font-body text-ink">
      {/* Hero */}
      <section className="grid min-h-[560px] bg-ink md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 md:px-12 lg:px-[5vw]">
          <p className="mb-4 text-sm font-semibold text-ember">Laus Group · San Fernando, Pampanga</p>
          <h1 className="mb-5 max-w-[14ch] font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            A passion for cars,
            <br />
            built on customer care.
          </h1>
          <p className="mb-8 max-w-[46ch] text-base leading-relaxed text-ash sm:text-lg">
            Three decades of putting Kapampangan families behind the wheel —
            across automotive, motorbikes, and the brands that keep them moving.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/automotive"
              className="inline-flex items-center rounded-sm bg-ember px-7 py-3 font-display text-base font-semibold text-white transition-colors hover:bg-ember-dark"
            >
              Browse vehicles
            </a>
            <a
              href="/contact"
              className="inline-flex items-center rounded-sm border border-white/35 px-7 py-3 font-display text-base font-semibold text-white transition-colors hover:border-white"
            >
              Talk to a dealer
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="flex min-h-[280px] items-center bg-gradient-to-br from-ember to-ember-dark"
        >
          <svg viewBox="0 0 400 400" className="mx-auto w-[78%] max-w-[420px] fill-none stroke-white/35 stroke-2">
            <line x1="0" y1="80" x2="400" y2="80" />
            <line x1="0" y1="160" x2="400" y2="160" />
            <line x1="0" y1="240" x2="400" y2="240" />
            <line x1="0" y1="320" x2="400" y2="320" />
            <path
              d="M40 210 L120 150 L280 150 L360 210 L360 250 L40 250 Z"
              className="fill-ink/90 stroke-none"
            />
            <circle cx="110" cy="255" r="26" className="fill-ink/90 stroke-none" />
            <circle cx="290" cy="255" r="26" className="fill-ink/90 stroke-none" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="flex flex-wrap justify-center gap-8 border-b border-ink/10 bg-white px-6 py-10 sm:gap-16 lg:gap-24">
        {STATS.map((stat) => (
          <div className="flex flex-col items-center text-center" key={stat.label}>
            <span className="font-display text-4xl font-semibold text-ember">{stat.value}</span>
            <span className="mt-1 text-sm text-steel">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Business lines */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-[5vw]">
        <div className="mb-10">
          <h2 className="mb-1 font-display text-3xl font-semibold sm:text-4xl">What we run</h2>
          <p className="text-ash">Three business lines, one standard of care.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {BUSINESS_LINES.map((line) => (
            <a
              href={line.href}
              key={line.title}
              className="flex flex-col gap-3 border border-ink/10 border-t-[3px] border-t-ember bg-white p-8 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
            >
              <h3 className="font-display text-2xl">{line.title}</h3>
              <p className="flex-grow leading-relaxed text-steel">{line.copy}</p>
              <span className="font-display font-semibold text-ember">
                Explore {line.title.toLowerCase()} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="flex flex-wrap items-center justify-between gap-6 bg-steel px-6 py-14 text-white lg:px-[5vw]">
        <div>
          <h2 className="mb-1 font-display text-2xl font-semibold sm:text-3xl">Looking for your next ride?</h2>
          <p className="max-w-[46ch] text-white/75">
            Our team can walk you through financing, trade-ins, and test drives — no pressure, just answers.
          </p>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center rounded-sm bg-ember px-7 py-3 font-display text-base font-semibold text-white transition-colors hover:bg-ember-dark"
        >
          Get in touch
        </a>
      </section>
    </main>
  );
}

export default Home;