import { Reveal } from "./ScrollEffects";

/* ------------------------------ Data ------------------------------ */

// Set this to an image path (for example "/images/why-choose-us.jpg") once you have the photo.
// While it is null, the section shows a dark gradient instead.
const WHY_BACKGROUND_IMAGE = null;

const MAPS_URL =
  "https://maps.google.com/?q=Jose+Abad+Santos+Avenue+City+of+San+Fernando+Pampanga";

const FEATURES = [
  {
    title: "Financing made easy",
    copy: "Fast approval and quick turnaround time. Discover flexible financing from all LausGroup Dealerships.",
    icon: (
      <>
        <path d="M3 12V4h8l10 10-8 8L3 12Z" />
        <circle cx="7.5" cy="8.5" r="1.5" />
      </>
    ),
  },
  {
    title: "Wide range of brands",
    copy: "We bring diverse lifestyles and premium brands together with our wide brand roster that only offers the premium cars and desirable customer service.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    title: "Trusted by thousands",
    copy: "“I had a great experience and excellent customer service and attention-to-detail. I highly recommend this dealership.” Sandra Villareal, Hyundai La Union",
    icon: (
      <>
        <path d="M3 4h12v9H8l-4 3v-3H3V4Z" />
        <path d="M17 9h4v9h-1v3l-4-3h-5v-2" />
      </>
    ),
  },
  {
    title: "Car service & maintenance",
    copy: "Equipped with a well-trained staff and state-of-the-art equipment, enjoy top-of-the-line aftersales service as we guarantee a worry-free serviced vehicle.",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="1" />
        <path d="M9 2h6v4H9zM8 11h8M8 15h8" />
      </>
    ),
  },
];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 21v-7.6h2.6l.4-3H13.5V8.4c0-.9.2-1.5 1.5-1.5h1.6V4.3C16.3 4.2 15.3 4 14.2 4c-2.3 0-3.9 1.4-3.9 4v2.4H7.7v3h2.6V21h3.2Z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c2.7 0 3 0 4 .1 1 .1 1.7.2 2.3.5.6.3 1.1.6 1.6 1.1.5.5.8 1 1.1 1.6.3.6.4 1.3.5 2.3.1 1 .1 1.3.1 4s0 3-.1 4c-.1 1-.2 1.7-.5 2.3-.3.6-.6 1.1-1.1 1.6-.5.5-1 .8-1.6 1.1-.6.3-1.3.4-2.3.5-1 .1-1.3.1-4 .1s-3 0-4-.1c-1-.1-1.7-.2-2.3-.5-.6-.3-1.1-.6-1.6-1.1-.5-.5-.8-1-1.1-1.6-.3-.6-.4-1.3-.5-2.3-.1-1-.1-1.3-.1-4s0-3 .1-4c.1-1 .2-1.7.5-2.3.3-.6.6-1.1 1.1-1.6.5-.5 1-.8 1.6-1.1.6-.3 1.3-.4 2.3-.5 1-.1 1.3-.1 4-.1Zm0 1.8c-2.6 0-2.9 0-4 .1-.8 0-1.3.2-1.6.3-.4.2-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.3 1.6-.1 1.1-.1 1.4-.1 4s0 2.9.1 4c0 .8.2 1.3.3 1.6.2.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 1.6.3 1.1.1 1.4.1 4 .1s2.9 0 4-.1c.8 0 1.3-.2 1.6-.3.4-.2.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.3-1.6.1-1.1.1-1.4.1-4s0-2.9-.1-4c0-.8-.2-1.3-.3-1.6-.2-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-1.6-.3-1.1-.1-1.4-.1-4-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm4.7-1.9a1 1 0 1 1 0 2.1 1 1 0 0 1 0-2.1Z",
  },
];

/* --------------------------- Why choose us --------------------------- */

function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#1b1d20] via-[#2a2d31] to-[#1b1d20]"
      style={
        WHY_BACKGROUND_IMAGE
          ? {
              backgroundImage: `url(${WHY_BACKGROUND_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Dark overlay keeps text readable over a photo */}
      {WHY_BACKGROUND_IMAGE && <div className="absolute inset-0 bg-black/70" />}

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <Reveal className="mb-14 text-center">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-wide text-white sm:text-4xl">
            Why choose us
          </h2>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-1 w-8 bg-ember" />
            <span className="h-1 w-3 bg-ember" />
          </div>
        </Reveal>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80} className="h-full">
              <div className="flex gap-4">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-12 w-12 flex-shrink-0 fill-none stroke-ember"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {feature.icon}
                </svg>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase leading-snug tracking-wide text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{feature.copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-10">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-ember px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember-dark"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-none stroke-current"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="2" />
              <path d="M3 12h7M14 12h7M12 14v7" />
            </svg>
            Test drive
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-ember px-7 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ember-dark"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
              <path d="M6 17h3l2-4V7H5v6h3l-2 4Zm8 0h3l2-4V7h-6v6h3l-2 4Z" />
            </svg>
            Request for a vehicle quotation
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ Address ------------------------------ */

function FooterBar() {
  return (
    <footer className="bg-[#212529] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-14 md:px-8">
        <h2 className="font-display text-sm font-bold uppercase tracking-wide">Address</h2>

        <div className="mt-4 flex items-start gap-4">
          {/* Stand-in for the map thumbnail; swap for an <img> when you have it */}
          <div
            aria-hidden="true"
            className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#e3e7ea] to-[#c3cad0]"
          >
            <svg viewBox="0 0 24 24" className="h-9 w-9 fill-ember">
              <path d="M12 2C7.6 2 4 5.6 4 10c0 5.4 7 11.5 7.3 11.7.2.2.5.3.7.3s.5-.1.7-.3C13 21.5 20 15.4 20 10c0-4.4-3.6-8-8-8zm0 10.8a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6z" />
            </svg>
          </div>

          <div>
            <address className="max-w-[26ch] text-sm not-italic leading-relaxed">
              Jose Abad Santos Avenue, City of San Fernando, Pampanga, Philippines 2000
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block border-b border-dashed border-ember text-sm text-ember transition-colors hover:border-white hover:text-white"
            >
              Show on map
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 py-6 sm:flex-row">
          <p className="text-center text-sm text-white/60 sm:text-left">
            © {new Date().getFullYear()} Copyright: LausGroup of Companies |{" "}
            <a href="/privacy" className="text-ember underline hover:text-white">
              Data Privacy Notice
            </a>
          </p>

          <div className="flex items-center gap-6">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-ember transition-colors hover:text-white"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------ Footer ------------------------------ */

function Footer() {
  return (
    <>
      <WhyChooseUs />
      <FooterBar />
    </>
  );
}

export default Footer;