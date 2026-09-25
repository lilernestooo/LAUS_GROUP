import { Reveal } from "../components/ScrollEffects";

/* ------------------------------ Data ------------------------------ */

const PUBLISHED = "17 August 2022";

/* ------------------------------ Hero ------------------------------ */

function ProfileHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-1/2 h-64 w-64 -translate-y-1/2 fill-ember opacity-90 md:h-80 md:w-80"
      >
        <path d="M4 30c8-2 14-8 16-16 2 6 5 10 10 12-6 1-10 4-13 9-3-3-8-5-13-5Z" />
        <path d="M27 26c4-1 7-4 9-8 1 4 3 6 6 8-3 0-6 1-8 4-2-2-4-3-7-4Z" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
          Company Profile
        </h1>
        <p className="mt-3 text-sm text-ash">August 2022</p>
      </div>
    </section>
  );
}

/* ------------------------------ Article ------------------------------ */

function SectionHeading({ children }) {
  return (
    <Reveal>
      <h2 className="mb-4 mt-14 font-display text-2xl font-semibold leading-snug text-ink first:mt-0 sm:text-3xl">
        {children}
      </h2>
    </Reveal>
  );
}

function P({ children }) {
  return (
    <Reveal>
      <p className="mb-5 leading-relaxed text-steel">{children}</p>
    </Reveal>
  );
}

function Article() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 md:px-8 md:py-20">
        <Reveal>
          <h2 className="text-center font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
            LausGroup of Companies celebrates 45 years of leadership in countryside development
          </h2>
          <p className="mt-4 text-center text-base italic text-steel">
            The Pampanga-based conglomerate rings in its anniversary with milestones in its
            automotive and non-life insurance businesses.
          </p>
          <div className="mx-auto mt-8 h-0.5 w-24 bg-ink/40" />
        </Reveal>

        <div className="mt-10">
          <P>
            <strong className="text-ink">{PUBLISHED}, CITY OF SAN FERNANDO, Pampanga, Philippines</strong>{" "}
            — LausGroup of Companies (LGC), one of the largest and fastest-growing multi-brand
            automotive networks in the country, celebrates{" "}
            <strong className="text-ink">45 years</strong> with achievements spanning its
            automotive, non-life insurance, media, and food and hospitality subsidiaries.
          </P>
          <P>
            Founded in <strong className="text-ink">1977 as Carworld, Inc.</strong> by the late{" "}
            <strong className="text-ink">Levy P. Laus</strong>, LGC has evolved into one of the
            country's top conglomerates outside of Metro Manila, centered on{" "}
            <strong className="text-ink">promoting countryside development</strong> in Northern
            and Central Luzon.
          </P>
          <P>
            To date, LGC has <strong className="text-ink">more than 2,000 employees</strong> and is
            run by the second generation of Laus leaders, who have carried on the founder's legacy
            and entrepreneurial vision, anchored on customer satisfaction, honesty and integrity,
            hard work and productivity, efficiency, and social responsibility.
          </P>

          <SectionHeading>LausGroup: Over 4 decades of automotive dealership excellence</SectionHeading>
          <P>
            From a small allied subdealer to a highly diversified conglomerate, LausGroup now
            operates several dealerships across Metro Manila, and Central and Northern Luzon.
          </P>
          <P>
            Carrying world-class automotive brands such as Mitsubishi, Ford, Hyundai, Chevrolet,
            BMW, Volkswagen, Jeep, Peugeot, Kia, MINI, Mazda, Suzuki, Foton, Geely, MG, Haima and
            Changhe, LausGroup remains one of the fastest-growing auto dealership networks in the
            country.
          </P>
          <P>
            Its leadership in the automotive dealership space also extends to the distribution of
            trucks and buses, with LGC carrying brands such as Hyundai, Fuso and Foton.
          </P>
          <P>
            The company continues to expand its customer base, with{" "}
            <strong className="text-ink">Carworld Bataan</strong> slated for completion in the
            fourth quarter of 2022.
          </P>
          <P>
            LausGroup has also strengthened its foothold in motorcycle dealerships in the
            countryside, bringing in brands such as BMW Motorrad, Harley-Davidson, Aprilia, Moto
            Guzzi and Vespa.
          </P>
          <P>
            LGC and SMC Asia Car Distributors officially opened{" "}
            <strong className="text-ink">Premier Motorrad</strong>, the first standalone showroom
            and dealership of BMW Motorrad in Pampanga. The launch coincided with the birth
            anniversary of LGC's Levy P. Laus and the company's 45th founding anniversary.
          </P>

          <SectionHeading>Corporate Guarantee: 25 years of unparalleled customer care</SectionHeading>
          <P>
            <strong className="text-ink">Corporate Guarantee (CG)</strong>, one of the country's
            top non-life insurance companies, recently celebrated its 25th anniversary, marked by
            milestones that have cemented its leadership in the Philippine insurance space.
          </P>
          <P>
            The LGC subsidiary was recently granted by the Philippine Insurance Commission with
            another three-year Certificate of Authority for 2022 to 2024, allowing CG to continue
            providing security and peace of mind to its customers.
          </P>
          <P>
            In its commitment to unparalleled customer care, CG earned an{" "}
            <strong className="text-ink">ISO certification in 2004</strong>, making it one of only
            six non-life insurance companies in the country that are ISO-certified. With seasoned
            professionals leading the organization, the company maintains a high standard of
            customer service while supporting continuous career growth and development for its
            employees.
          </P>
          <P>
            CG continues to expand its network and services, with branches in Pampanga, Metro
            Manila, Bulacan, Tarlac, La Union and Ilocos Norte.
          </P>

          <SectionHeading>Enduring legacy of countryside development</SectionHeading>
          <P>
            The dynamic growth of its automotive dealership network paved the way for LGC to
            become the highly diversified conglomerate it is today, built on a strong foundation
            of dedication to excellence and customer satisfaction.
          </P>
          <P>
            With the late founder's eldest daughter,{" "}
            <strong className="text-ink">Lisset Laus-Velasco</strong>, at the helm of the group's
            operations, LGC has reinforced its commitment to social responsibility, participating
            in various environmental and social outreach programs in recent years.
          </P>
          <P>
            This includes the <strong className="text-ink">Balik Batterya Program</strong> with
            Ford Philippines, Motolite, and the Philippine Business for Social Progress, where
            partner companies collect used lead acid batteries (ULABs) and turn them over for
            proper recycling and production. Participating companies may then allocate proceeds
            from the sale of their ULABs to CSR projects of their choosing.
          </P>
          <P>
            Following Laus-Velasco's recognition as a{" "}
            <strong className="text-ink">global Ford Dealership Honoree</strong> in 2021, she
            received a grant from global automaker Ford Motor Company, which went toward{" "}
            <strong className="text-ink">supporting the education of deserving Grade 12 students</strong>{" "}
            who will undergo apprenticeship and training with LGC after their graduation.
          </P>
          <P>
            In line with the founder's vision of priming the countryside and stimulating economic
            activity, LGC's media outlets, RWFM 95.1 and CLTV36, continue to serve as a window into
            Central and Northern Luzon's development, culture and communities through their
            nationwide scope and extensive coverage.
          </P>

          <Reveal>
            <blockquote className="my-10 border-l-4 border-ember bg-[#eef1f3] px-6 py-6 font-display text-lg italic leading-relaxed text-ink sm:text-xl">
              “The LausGroup wouldn't be where it is today if not for the hard work and dedication
              of all our team members who have been with us from the very beginning. As we
              celebrate 45 years of the LausGroup, we strive to champion countryside development
              by expanding our network across all our lines of business to take both Central and
              Northern Luzon to greater heights.”
              <footer className="mt-3 font-body text-sm not-italic font-semibold text-steel">
                — Lisset Laus-Velasco, LGC Chief Executive Officer
              </footer>
            </blockquote>
          </Reveal>

          <P>
            The upward trajectory of LGC's growth and expansion is a testament to the enduring
            legacy of countryside development that Chief Executive Officer Lisset Laus-Velasco
            attributes to the collective effort of the men and women who made LausGroup what it is
            today.
          </P>
          <P>
            LGC marked its 45th anniversary with festivities at the LausGroup Complex in the City
            of San Fernando, Pampanga, in the presence of esteemed guests from the provincial and
            local government, brand partners, and affiliates of the LausGroup.
          </P>

          <SectionHeading>About LausGroup of Companies</SectionHeading>
          <P>
            The LausGroup of Companies is a Pampanga-based conglomerate spanning the industries of
            automotive, non-life insurance, media, food, and hospitality. Its flagship arm is the
            Laus Auto Group, which carries over 65 dealerships for industry-leading automotive
            brands, guided by its passion for cars and customer care. Sparked by the entrepreneurial
            vision of its founder, Levy P. Laus, the LausGroup of Companies has over 40 years of
            experience in commercial acceleration and countryside development.
          </P>
        </div>
      </div>

      <Reveal className="border-t border-ink/10 bg-[#eef1f3]">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
          <h3 className="mb-6 text-center font-display text-xl font-bold uppercase tracking-wide text-ink sm:text-2xl">
            LausGroup Dealer Network
          </h3>

          {/* Placeholder for the dealer network map / brand-location graphic.
              Swap the div below for an <img src="..." alt="LausGroup Dealer Network" className="w-full" /> once you have the asset. */}
          <div
            aria-hidden="true"
            className="flex min-h-[420px] w-full items-center justify-center bg-gradient-to-br from-[#e3e7ea] to-[#c3cad0] shadow-lg shadow-ink/10 sm:min-h-[560px] md:min-h-[680px]"
          >
            <span className="select-none font-display text-8xl font-bold text-white/90 sm:text-9xl">
              ?
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ------------------------------ Page ------------------------------ */

function CompanyProfile() {
  return (
    <main className="bg-white font-body text-ink">
      <ProfileHero />
      <Article />
    </main>
  );
}

export default CompanyProfile;