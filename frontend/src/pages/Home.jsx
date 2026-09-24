import { useEffect, useState } from "react";
import { Reveal } from "../components/ScrollEffects";

/* ------------------------------ Data ------------------------------ */

const SLIDES = [
  {
    title: "Drive home the car you've been waiting for.",
    copy: "Ten dealership brands under one roof in San Fernando, Pampanga.",
    cta: { label: "Browse vehicles", href: "/automotive" },
  },
  {
    title: "Ride with confidence, on every road.",
    copy: "Big bikes, scooters and commuters, backed by genuine parts and rider support.",
    cta: { label: "See motorbikes", href: "/motorbikes" },
  },
  {
    title: "One group. Everything your ride needs.",
    copy: "Financing, servicing, tires and more from the Laus Group family of companies.",
    cta: { label: "Meet our affiliates", href: "/affiliates" },
  },
];

const PILLARS = [
  { value: "35+", label: "Years in Pampanga" },
  { value: "10", label: "Dealership brands" },
  { value: "50k+", label: "Families served" },
];

const AUTOMOTIVE_BRANDS = [
  { name: "Baic", href: "/automotive/baic" },
  { name: "BMW Pampanga Premier", href: "/automotive/bmw" },
  { name: "Carmix", href: "/automotive/carmix" },
  { name: "Changhe", href: "/automotive/changhe" },
  { name: "Chery", href: "/automotive/chery" },
  { name: "Chevrolet", href: "/automotive/chevrolet" },
  { name: "Ford", href: "/automotive/ford" },
  { name: "Foton", href: "/automotive/foton" },
  { name: "FUSO Carworld", href: "/automotive/fuso" },
  { name: "Geely", href: "/automotive/geely" },
  { name: "Haima", href: "/automotive/haima" },
  { name: "Hyundai", href: "/automotive/hyundai" },
  { name: "Hyundai T&B", href: "/automotive/hyundai-tb" },
  { name: "Jeep", href: "/automotive/jeep" },
  { name: "Jetour", href: "/automotive/jetour" },
  { name: "Kia", href: "/automotive/kia" },
  { name: "Lynk & Co", href: "/automotive/lynk-co" },
  { name: "Mazda", href: "/automotive/mazda" },
  { name: "Mini", href: "/automotive/mini" },
  { name: "Mitsubishi Carworld", href: "/automotive/mitsubishi" },
  { name: "Omoda and Jaecoo", href: "/automotive/omoda-jaecoo" },
  { name: "Peugeot", href: "/automotive/peugeot" },
  { name: "Suzuki", href: "/automotive/suzuki" },
  { name: "Volkswagen", href: "/automotive/volkswagen" },
];

const MOTORBIKE_BRANDS = [
  { name: "Aprilia Pampanga", href: "/motorbikes/aprilia" },
  { name: "BMW Pampanga Premier Motorrad", href: "/motorbikes/bmw-motorrad" },
  { name: "CFMoto", href: "/motorbikes/cfmoto" },
  { name: "Harley-Davidson of Pampanga", href: "/motorbikes/harley-davidson" },
  { name: "Moto Guzzi Pampanga", href: "/motorbikes/moto-guzzi" },
  { name: "Peugeot Motocycle", href: "/motorbikes/peugeot" },
  { name: "Piaggio APE Pampanga", href: "/motorbikes/piaggio-ape" },
  { name: "Triumph Pampanga", href: "/motorbikes/triumph" },
  { name: "Vespa Pampanga", href: "/motorbikes/vespa" },
];

const AFFILIATE_GROUPS = [
  {
    title: "Auto Industry",
    items: [
      { name: "Carworld Caltex", href: "/affiliates/carworld-caltex" },
      { name: "Corporate Guarantee", href: "/affiliates/corporate-guarantee" },
      { name: "Huper Optik", href: "/affiliates/huper-optik" },
      { name: "Laus Auto Finance", href: "/affiliates/laus-auto-finance" },
      { name: "Laus Auto Services", href: "/affiliates/laus-auto-services" },
      { name: "Voltronic", href: "/affiliates/voltronic" },
      { name: "Tire City", href: "/affiliates/tire-city" },
    ],
  },
  {
    title: "Restaurants",
    items: [
      { name: "Max Restaurant", href: "/affiliates/max-restaurant" },
      { name: "Pancake House", href: "/affiliates/pancake-house" },
      { name: "The Coffee Bean and Tea Leaf", href: "/affiliates/coffee-bean" },
      { name: "Yellow Cab", href: "/affiliates/yellow-cab" },
    ],
  },
  {
    title: "Media",
    items: [
      { name: "CLTV36", href: "/affiliates/cltv36" },
      { name: "RW95.1", href: "/affiliates/rw951" },
      { name: "Sunstar Pampanga", href: "/affiliates/sunstar" },
    ],
  },
];

const PROMOS = [
  {
    title: "LAUS AUTO GROUP",
    href: "/automotive/mitsubishi",
    images: [null, null], // [normal photo, hover photo]
  },
  {
    title: "LAUS CORPORATE GUARANTEE",
    href: "/affiliates/corporate-guarantee",
    images: [null, null],
  },
];

/* --------------------------- Placeholder --------------------------- */

// Stand-in for the missing photos. Replace with <img> once assets are available.
function Placeholder({ className = "", markClass = "text-6xl" }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center bg-gradient-to-br from-[#e3e7ea] to-[#c3cad0] ${className}`}
    >
      <span className={`select-none font-display font-bold text-white/90 ${markClass}`}>?</span>
    </div>
  );
}

/* ------------------------------ Hero ------------------------------ */

function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = SLIDES.length;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isPaused || reduceMotion) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 6500);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const go = (next) => setIndex((next + total) % total);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured"
      className="relative h-[460px] overflow-hidden bg-ink md:h-[580px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Placeholder className="absolute inset-0" markClass="text-[10rem] md:text-[16rem]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />

          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-8">
            <h1 className="max-w-[16ch] font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-ash sm:text-lg">
              {slide.copy}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={slide.cta.href}
                tabIndex={i === index ? 0 : -1}
                className="inline-flex items-center bg-ember px-7 py-3 font-display text-base font-bold text-white transition-colors hover:bg-ember-dark"
              >
                {slide.cta.label}
              </a>
              <a
                href="/contact"
                tabIndex={i === index ? 0 : -1}
                className="inline-flex items-center border border-white/40 px-7 py-3 font-display text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                Talk to a dealer
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows */}
      <button
        aria-label="Previous slide"
        onClick={() => go(index - 1)}
        className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/40 text-white transition-colors hover:bg-ember md:flex"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d="M15.4 7.4 14 6l-6 6 6 6 1.4-1.4L10.8 12z" />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={() => go(index + 1)}
        className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center bg-black/40 text-white transition-colors hover:bg-ember md:flex"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
          <path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4 4.6 4.6z" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2.5">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.title}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-10 bg-ember" : "w-6 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------- Tagline banner ------------------------- */

function TaglineBanner() {
  return (
    <section className="relative z-10 bg-black shadow-[0_14px_22px_-8px_rgba(0,0,0,0.6)]">
      <div className="h-2 bg-gradient-to-r from-ember-dark via-ember to-ember-dark" />

      <Reveal
        direction="none"
        className="relative mx-auto max-w-7xl px-6 py-10 text-center md:px-8 md:py-14"
      >
        <h2 className="font-display text-3xl font-semibold italic leading-tight text-white sm:text-4xl md:text-5xl">
          A Passion for Cars &amp; Customer Care.
        </h2>
      </Reveal>
    </section>
  );
}

/* --------------------------- Brand grid --------------------------- */

function BrandSection({ title, subtitle, brands, viewAllHref, tone = "white" }) {
  return (
    <section className={tone === "gray" ? "bg-[#eef1f3]" : "bg-white"}>
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            {title}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-ember" />
          <p className="mx-auto mt-4 max-w-[52ch] text-steel">{subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-6">
          {brands.map((brand, i) => (
            <Reveal key={brand.href} delay={(i % 6) * 60} className="h-full">
              <a href={brand.href}
                className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-white transition-shadow duration-200 hover:shadow-xl hover:shadow-ink/15"
              >
                <Placeholder className="aspect-[4/3] w-full" markClass="text-5xl" />
                <span className="flex flex-1 items-center justify-center border-b-4 border-transparent px-3 py-4 text-center font-display text-xs font-bold uppercase leading-snug tracking-wide text-ink transition-colors group-hover:border-ember group-hover:text-ember sm:text-sm">
                  {brand.name}
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        {viewAllHref && (
          <Reveal className="mt-12 text-center">
            <a
              href={viewAllHref}
              className="inline-flex items-center border-2 border-ink px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-ember hover:bg-ember hover:text-white"
            >
              View all {title.toLowerCase()}
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}

/* ------------------------- Affiliates grid ------------------------- */

function AffiliatesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-ink sm:text-4xl">
            Affiliates
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-ember" />
          <p className="mx-auto mt-4 max-w-[52ch] text-steel">
            Financing, dining, media, hospitality and more from the Laus Group family of companies.
          </p>
        </Reveal>

        <div className="flex flex-col gap-14">
          {AFFILIATE_GROUPS.map((group) => (
            <div key={group.title}>
              <Reveal>
                <h3 className="mb-6 border-l-4 border-ember pl-3 font-display text-lg font-bold uppercase tracking-wide text-ink">
                  {group.title}
                </h3>
              </Reveal>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-6">
                {group.items.map((item, i) => (
                  <Reveal key={item.href} delay={(i % 6) * 60} className="h-full">
                    <a href={item.href}
                      className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-white transition-shadow duration-200 hover:shadow-xl hover:shadow-ink/15"
                    >
                      <Placeholder className="aspect-[4/3] w-full" markClass="text-5xl" />
                      <span className="flex flex-1 items-center justify-center border-b-4 border-transparent px-3 py-4 text-center font-display text-xs font-bold uppercase leading-snug tracking-wide text-ink transition-colors group-hover:border-ember group-hover:text-ember sm:text-sm">
                        {item.name}
                      </span>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <a href="/affiliates"
            className="inline-flex items-center border-2 border-ink px-8 py-3 font-display text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-ember hover:bg-ember hover:text-white"
          >
            View all affiliates
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- Featured promos -------------------------- */

function PromoImage({ src, alt, dim }) {
  if (src) return <img src={src} alt={alt} className="h-full w-full object-cover" />;
  return (
    <Placeholder
      className={`h-full w-full ${dim ? "brightness-90" : ""}`}
      markClass="text-8xl"
    />
  );
}

function FeaturedPromos() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-4xl gap-8 px-6 py-12 md:grid-cols-2 md:gap-10 md:px-8 md:py-16">
        {PROMOS.map((promo, i) => (
          <Reveal key={promo.href} direction={i === 0 ? "left" : "right"}>
            <a href={promo.href}
              className="group relative block aspect-[4/5] overflow-hidden bg-[#c3cad0] shadow-lg shadow-ink/15 outline-none focus-visible:ring-4 focus-visible:ring-ember"
            >
              {/* Normal photo: slides out to the left on hover */}
              <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:-translate-x-full group-focus-visible:-translate-x-full motion-reduce:transition-none">
                <PromoImage src={promo.images[0]} alt={promo.title} />
              </div>

              {/* Hover photo: slides in from the right */}
              <div className="absolute inset-0 translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0 group-focus-visible:translate-x-0 motion-reduce:transition-none">
                <PromoImage src={promo.images[1]} alt="" dim />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16">
                <span className="font-display text-xl font-bold text-white">{promo.title}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Page ------------------------------ */

function Home() {
  return (
    <main className="bg-white font-body text-ink">
      <HeroSlider />
      <TaglineBanner />

      <BrandSection
        title="Automotive Brands"
        subtitle="Explore our multi-brand dealership network, each backed by factory-trained service."
        brands={AUTOMOTIVE_BRANDS}
        viewAllHref="/automotive"
      />

      <BrandSection
        title="Motorbike Brands"
        subtitle="From everyday scooters to big bikes, with genuine parts and rider support."
        brands={MOTORBIKE_BRANDS}
        viewAllHref="/motorbikes"
        tone="gray"
      />

      <AffiliatesSection />

      <FeaturedPromos />
    </main>
  );
}

export default Home;