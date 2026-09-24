import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
    {
        label: "About Us",
        href: "/about",
        children: [
        { label: "COMPANY PROFILE", href: "/about/company-profile" },
        { label: "MISSION & VISION", href: "/about/mission-vision" },
        { label: "ABOUT THE FOUNDER", href: "/about/founder" },
        ],
    },
    {
    label: "Automotive",
    href: "/automotive",
    mega: true,
    children: [
        { label: "Baic", href: "/automotive/baic" },
        { label: "BMW Pampanga Premier", href: "/automotive/bmw" },
        { label: "Carmix", href: "/automotive/carmix" },
        { label: "Changhe", href: "/automotive/changhe" },
        { label: "Chery", href: "/automotive/chery" },
        { label: "Chevrolet", href: "/automotive/chevrolet" },
        { label: "Ford", href: "/automotive/ford" },
        { label: "Foton", href: "/automotive/foton" },
        { label: "FUSO Carworld", href: "/automotive/fuso" },
        { label: "Geely", href: "/automotive/geely" },
        { label: "Haima", href: "/automotive/haima" },
        { label: "Hyundai", href: "/automotive/hyundai" },
        { label: "Hyundai T&B", href: "/automotive/hyundai-tb" },
        { label: "Jeep", href: "/automotive/jeep" },
        { label: "Jetour", href: "/automotive/jetour" },
        { label: "Kia", href: "/automotive/kia" },
        { label: "Lynk & Co", href: "/automotive/lynk-co" },
        { label: "Mazda", href: "/automotive/mazda" },
        { label: "Mini", href: "/automotive/mini" },
        { label: "Mitsubishi Carworld", href: "/automotive/mitsubishi" },
        { label: "Omoda and Jaecoo", href: "/automotive/omoda-jaecoo" },
        { label: "Peugeot", href: "/automotive/peugeot" },
        { label: "Suzuki", href: "/automotive/suzuki" },
        { label: "Volkswagen", href: "/automotive/volkswagen" },
    ],
    },
    {
    label: "Motorbikes",
    href: "/motorbikes",
    mega: true,
    children: [
        { label: "Aprilia Pampanga", href: "/motorbikes/aprilia" },
        { label: "BMW Pampanga Premier Motorrad", href: "/motorbikes/bmw-motorrad" },
        { label: "CFMoto", href: "/motorbikes/cfmoto" },
        { label: "Harley-Davidson of Pampanga", href: "/motorbikes/harley-davidson" },
        { label: "Moto Guzzi Pampanga", href: "/motorbikes/moto-guzzi" },
        { label: "Peugeot Motocycle", href: "/motorbikes/peugeot" },
        { label: "Piaggio APE Pampanga", href: "/motorbikes/piaggio-ape" },
        { label: "Triumph Pampanga", href: "/motorbikes/triumph" },
        { label: "Vespa Pampanga", href: "/motorbikes/vespa" },
    ],
    },
    {
    label: "Affiliates",
    href: "/affiliates",
    mega: true,
    columns: [
        [
        {
            title: "Auto Industry",
            items: [
            { label: "Carworld Caltex", href: "/affiliates/carworld-caltex" },
            { label: "Corporate Guarantee", href: "/affiliates/corporate-guarantee" },
            { label: "Huper Optik", href: "/affiliates/huper-optik" },
            { label: "Laus Auto Finance", href: "/affiliates/laus-auto-finance" },
            { label: "Laus Auto Services", href: "/affiliates/laus-auto-services" },
            { label: "Voltronic", href: "/affiliates/voltronic" },
            { label: "Tire City", href: "/affiliates/tire-city" },
            ],
        },
        ],
        [
        {
            title: "Restaurants",
            items: [
            { label: "Max Restaurant", href: "/affiliates/max-restaurant" },
            { label: "Pancake House", href: "/affiliates/pancake-house" },
            { label: "The Coffee Bean and Tea Leaf", href: "/affiliates/coffee-bean" },
            { label: "Yellow Cab", href: "/affiliates/yellow-cab" },
            ],
        },
        ],
        [
        {
            title: "Media",
            items: [
            { label: "CLTV36", href: "/affiliates/cltv36" },
            { label: "RW95.1", href: "/affiliates/rw951" },
            { label: "Sunstar Pampanga", href: "/affiliates/sunstar" },
            ],
        },
        {
            title: "Real Estate",
            items: [{ label: "Family Ville", href: "/affiliates/family-ville" }],
        },
        ],
        [
        {
            title: "Hotel",
            items: [
            { label: "Microtel by Wyndham Pampanga", href: "/affiliates/microtel" },
            ],
        },
        {
            title: "Event Centre",
            items: [
            { label: "LausGroup Event Centre", href: "/affiliates/event-centre" },
            ],
        },
        ],
    ],
    },
  {
    label: "News and Events", href: "/news",},
  { label: "Contact Us", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("/");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 font-body">
      {/* Utility bar */}
      <div className={`bg-ink border-b border-white/10 ${isScrolled ? "lg:hidden" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 md:px-8">
          <a
            href="https://maps.google.com/?q=Jose+Abad+Santos+Avenue+City+of+San+Fernando+Pampanga"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm tracking-wide text-ash no-underline hover:text-white"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 flex-shrink-0 fill-ember">
              <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.7.2.2.5.3.7.3s.5-.1.7-.3C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 10.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
            </svg>
            <span className="hidden text-ash sm:inline">
              JOSE ABAD SANTOS AVENUE, CITY OF SAN FERNANDO, PAMPANGA, PHILIPPINES 2000
            </span>
          </a>
        </div>
      </div>

      {/* Logo bar */}
      <div className={`bg-ink ${isScrolled ? "lg:hidden" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8 md:py-7">
          <a href="/" className="flex items-center gap-3 text-white no-underline">
            <LogoMark className="h-9 w-9 md:h-11 md:w-11" />
            <div className="flex flex-col leading-none">
                <span className="font-display text-3xl italic tracking-tight text-white md:text-4xl">
                Laus<span className="not-italic font-semibold text-white">Group</span>
                </span>
              <span className="mt-1.5 text-[0.7rem] tracking-wide text-ash">
                A Passion for Cars &amp; Customer Care.
              </span>
            </div>
          </a>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-3 sm:flex">
              {["youtube", "instagram", "facebook"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  aria-label={platform}
                  className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-ember hover:text-white"
                >
                  <SocialIcon platform={platform} />
                </a>
              ))}
            </div>

            <button
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-9 w-9 flex-col justify-center gap-[5px] lg:hidden"
            >
                <span
                className={`block h-0.5 w-full bg-white transition-transform duration-200 ${
                    isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
                />
                <span className={`block h-0.5 w-full bg-white transition-opacity duration-200 ${isMenuOpen ? "opacity-0" : ""}`} />
                <span
                className={`block h-0.5 w-full bg-white transition-transform duration-200 ${
                    isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
                />
            </button>
          </div>
        </div>
      </div>

      {/* Nav strip */}
      <div className="hidden border-t-4 border-ember bg-[#eef1f3] lg:block">
        <div className="relative mx-auto flex max-w-7xl items-stretch">
            <nav aria-label="Primary" className="flex flex-1 items-stretch">
                {NAV_LINKS.map((link) => (
                <div
                 key={link.href}
                    className={`group/item flex items-stretch ${link.mega ? "" : "relative"}`}
                    >
                    <a
                    href={link.href}
                    onClick={() => setActiveHref(link.href)}
                    className={`group relative flex items-center whitespace-nowrap px-6 py-4 font-display text-[0.95rem] font-bold uppercase tracking-wide xl:px-7 ${
                        activeHref === link.href ? "bg-ember text-white" : "text-steel group-hover/item:text-ember"
                    }`}
                    >
                    {link.label}
                    {activeHref !== link.href && (
                        <span className="pointer-events-none absolute inset-x-6 bottom-2 h-0.5 origin-center scale-x-0 bg-ember transition-transform duration-200 ease-out group-hover:scale-x-100 xl:inset-x-7" />
                    )}
                    </a>

                    {(link.children || link.columns) && (
                    <div
                        className={`invisible absolute top-full z-50 translate-y-2 border-t-4 border-ember bg-white opacity-0 shadow-2xl shadow-black/20 transition-all duration-200 ease-out group-hover/item:visible group-hover/item:translate-y-0 group-hover/item:opacity-100 group-focus-within/item:visible group-focus-within/item:translate-y-0 group-focus-within/item:opacity-100 ${
                            link.mega ? "left-0 right-0" : "left-0 w-80"
                        }`}
                        >
                    {link.columns ? (
                        <div className="grid grid-cols-4 gap-x-6 p-8">
                        {link.columns.map((column, colIndex) => (
                            <div key={colIndex} className="flex flex-col gap-6">
                            {column.map((group) => (
                                <div key={group.title}>
                                <h3 className="mb-2 border-b border-black/10 px-4 pb-2 font-display text-sm font-extrabold uppercase tracking-wide text-ink">
                                    {group.title}
                                </h3>
                                <ul>
                                    {group.items.map((item) => (
                                        
                                     <li key={item.href}>
                                        <a href={item.href}
                                        onClick={() => setActiveHref(link.href)}
                                        className="block border-l-4 border-transparent px-4 py-2 text-sm font-medium uppercase tracking-wide text-steel transition-colors hover:border-ember hover:bg-[#eef1f3] hover:text-ember"
                                        >
                                        {item.label}
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            ))}
                            </div>
                        ))}
                        </div>
                    ) : (
                    <ul
                        className={
                        link.mega
                            ? "grid grid-cols-3 gap-x-6 gap-y-1 p-8 xl:grid-cols-4"
                            : "py-3"
                        }
                    >
                        {link.children.map((child) => (
                            <li key={child.href}>
                            <a
                                href={child.href}
                                onClick={() => setActiveHref(link.href)}
                                className={`group/sub flex items-center justify-between border-l-4 border-transparent font-display text-sm font-bold uppercase tracking-wide text-steel transition-colors hover:border-ember hover:bg-[#eef1f3] hover:text-ember ${
                                link.mega ? "px-4 py-3" : "px-6 py-4"
                                }`}
                            >
                                {child.label}
                                <svg
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                className="h-4 w-4 -translate-x-1 fill-current opacity-0 transition-all duration-200 group-hover/sub:translate-x-0 group-hover/sub:opacity-100"
                                >
                                <path d="M10 6l6 6-6 6z" />
                                </svg>
                            </a>
                            </li>
                        ))}
                        </ul>
                        )}
                    </div>
                    )}
                </div>
                ))}
          </nav>

          <button
            aria-label="Search"
            className="group my-auto mr-6 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-black/20 bg-white transition-colors hover:border-ember hover:bg-ember"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-ink group-hover:fill-white">
              <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.7.7l.3.3v.8l5 5 1.5-1.5-5-5Zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`flex flex-col overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[520px] border-t border-black/10" : "max-h-0"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => {
              setActiveHref(link.href);
              setIsMenuOpen(false);
            }}
            className={`border-b border-black/5 px-5 py-3.5 font-display text-base font-bold uppercase tracking-wide ${
              activeHref === link.href ? "bg-ember text-white" : "text-steel"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}

function LogoMark({ className }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        d="M4 30c8-2 14-8 16-16 2 6 5 10 10 12-6 1-10 4-13 9-3-3-8-5-13-5Z"
        className="fill-ember"
      />
      <path d="M27 26c4-1 7-4 9-8 1 4 3 6 6 8-3 0-6 1-8 4-2-2-4-3-7-4Z" className="fill-ember/70" />
    </svg>
  );
}

function SocialIcon({ platform }) {
  const paths = {
    youtube:
      "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z",
    instagram:
      "M12 2.2c2.7 0 3 0 4 .1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.3.6.4 1.3.5 2.3.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.3-1.3.4-2.3.5-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.3-.6-.4-1.3-.5-2.3-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.3-.5 1-.1 1.3-.1 4-.1Zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-1.9a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z",
    facebook:
      "M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3h2.6V21h3.2Z",
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[18px] w-[18px] fill-current">
      <path d={paths[platform]} />
    </svg>
  );
}

export default Navbar;