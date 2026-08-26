import { useMemo, useState, useEffect, useRef } from "react";
import dealership from "@/assets/dealership.jpg";
import { site, navLinks } from "@/config/site";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";
import { Card3D } from "@/components/ui/Card3D";

export function Finance() {
  const [price, setPrice] = useState(1650000);
  const [down, setDown] = useState(350000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(9.5);
  const sectionRef = useRef<HTMLElement>(null);

  const emi = useMemo(() => {
    const p = Math.max(price - down, 0);
    const n = years * 12;
    const r = rate / 12 / 100;
    if (p <= 0 || n <= 0) return 0;
    if (r === 0) return p / n;
    return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [price, down, years, rate]);

  const totalAmount = useMemo(() => emi * years * 12, [emi, years]);
  const totalInterest = useMemo(() => Math.max(totalAmount - (price - down), 0), [totalAmount, price, down]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-finance-header]");
      const items = el.querySelectorAll("[data-finance-item]");

      if (header) {
        gsap.fromTo(
          header,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 50, scale: 0.94, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const field =
    "mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 outline-none transition-colors focus:border-[#DC2626]";

  return (
    <section id="finance" ref={sectionRef} className="border-t border-slate-200 bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-finance-header className="flex flex-col md:flex-row md:items-end justify-between gap-6 will-change-transform opacity-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#DC2626]">
              FINANCE & EMI CALCULATOR
            </div>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
              MAKE YOUR FORCE VEHICLE EASIER TO OWN.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Estimate your monthly commercial vehicle loan repayments and discuss tailored financing options with our tie-up nationalized & private banks.
          </p>
        </div>

        <div className="group/grid mt-14 grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div
            data-finance-item
            className="rounded-xl border border-slate-200 bg-white p-8 shadow-md will-change-transform opacity-100 transition-all duration-400 group-hover/grid:blur-[2.5px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:!z-20 hover:shadow-2xl"
          >
            <h3 className="font-display text-lg font-bold text-slate-900">
              Loan Calculation Parameters
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Vehicle Price (₹)
                <input
                  type="number"
                  min={0}
                  step={50000}
                  value={price}
                  onChange={(e) => setPrice(+e.target.value)}
                  className={field}
                />
              </label>
              <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Down Payment (₹)
                <input
                  type="number"
                  min={0}
                  step={25000}
                  value={down}
                  onChange={(e) => setDown(+e.target.value)}
                  className={field}
                />
              </label>
              <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Tenure ({years} Years / {years * 12} Months)
                <input
                  type="range"
                  min={1}
                  max={7}
                  value={years}
                  onChange={(e) => setYears(+e.target.value)}
                  className="mt-4 w-full accent-red-600"
                />
              </label>
              <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase">
                Interest Rate ({rate}% p.a.)
                <input
                  type="range"
                  min={7}
                  max={16}
                  step={0.25}
                  value={rate}
                  onChange={(e) => setRate(+e.target.value)}
                  className="mt-4 w-full accent-red-600"
                />
              </label>
            </div>
          </div>

          <div
            data-finance-item
            className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 will-change-transform opacity-100 transition-all duration-400 group-hover/grid:blur-[2.5px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:!z-20 hover:shadow-2xl"
          >
            <div>
              <span className="text-xs font-bold tracking-[0.3em] text-[#DC2626] uppercase">
                ESTIMATED MONTHLY EMI
              </span>
              <p className="mt-4 font-display text-4xl sm:text-5xl font-black tracking-tight text-[#0F172A]">
                ₹ {emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
                <span className="text-sm font-normal text-slate-500"> / month</span>
              </p>

              <div className="mt-6 space-y-3 border-t border-slate-100 pt-4 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Loan Principal:</span>
                  <span className="font-bold text-slate-900">₹ {(price - down).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Total Interest:</span>
                  <span className="font-bold text-[#DC2626]">₹ {totalInterest.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
                <div className="flex justify-between border-t border-slate-100 pt-2 text-slate-600">
                  <span>Total Payable:</span>
                  <span className="font-bold text-slate-900">₹ {totalAmount.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`https://wa.me/918429540902?text=${encodeURIComponent(`*FINANCE & EMI ASSISTANCE - IAW FORCE*\n\n*Vehicle Price:* ₹${price.toLocaleString("en-IN")}\n*Down Payment:* ₹${down.toLocaleString("en-IN")}\n*Tenure:* ${years} Years (${years * 12} Months)\n*Est. Interest Rate:* ${rate}%\n*Est. Monthly EMI:* ₹${emi.toLocaleString("en-IN", { maximumFractionDigits: 0 })}/month\n\nPlease share bank approval requirements and finance schemes.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#DC2626] px-4 sm:px-6 py-3.5 sm:py-4 text-center text-xs font-bold tracking-[0.1em] sm:tracking-[0.14em] text-white shadow-md shadow-red-500/20 transition-all hover:bg-red-700 hover:shadow-red-500/40 whitespace-nowrap"
              >
                <span>APPLY FOR FINANCE ASSISTANCE</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <p className="mt-3 text-[11px] text-center text-slate-500">
                Indicative estimation. Final interest rates and loan approvals are subject to bank terms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceParts() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      num: "01",
      title: "Vehicle Consultation",
      desc: "Application-based guidance for vehicle range, seating and configuration.",
    },
    {
      num: "02",
      title: "Quotation & Finance",
      desc: "On-road price support and coordination for suitable finance options.",
    },
    {
      num: "03",
      title: "Test Drive & Delivery",
      desc: "Assistance with vehicle experience, documentation and delivery planning.",
    },
    {
      num: "04",
      title: "Service & Parts Support",
      desc: "Coordination for periodic maintenance, repairs and genuine parts enquiries.",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-service-header]");
      const cards = el.querySelectorAll("[data-service-card]");

      if (header) {
        gsap.fromTo(
          header,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 55, scale: 0.92, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="service" ref={sectionRef} className="border-t border-slate-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-service-header className="max-w-3xl will-change-transform opacity-100">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#DC2626]">
            COMPLETE CUSTOMER SUPPORT
          </div>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
            FROM FIRST QUESTION
            <br />
            <span className="text-[#DC2626]">TO EVERY JOURNEY.</span>
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Our relationship does not end at vehicle delivery. IAW Force supports customers through selection, purchase planning and the ownership journey.
          </p>
        </div>

        {/* 4 Cards Grid: Active Sharp + Neighbors Blur & Dim */}
        <div ref={gridRef} className="group/grid mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.num}
              data-service-card
              className="h-full will-change-transform opacity-100 transition-all duration-400 group-hover/grid:blur-[2.5px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.97] hover:!blur-none hover:!opacity-100 hover:!scale-[1.05] hover:!z-30 hover:shadow-2xl"
            >
              <Card3D intensity={10} className="h-full">
                <div className="h-full rounded-xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm transition-all duration-300 hover:border-[#DC2626] hover:bg-white hover:shadow-md">
                  <span className="font-display text-2xl font-black text-[#DC2626] [transform:translateZ(15px)]">
                    {s.num}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-[#DC2626] [transform:translateZ(25px)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 [transform:translateZ(15px)]">
                    {s.desc}
                  </p>
                </div>
              </Card3D>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-[#DC2626] px-8 py-4 text-xs font-bold tracking-[0.2em] text-white shadow-md shadow-red-500/20 transition-all hover:bg-red-700 hover:shadow-red-500/40"
          >
            BOOK A SERVICE SLOT
          </a>
          <a
            href={site.phoneHref}
            className="rounded-full border border-slate-300 bg-white px-8 py-4 text-xs font-bold tracking-[0.2em] text-slate-800 transition-colors hover:border-[#DC2626] hover:text-[#DC2626]"
          >
            CALL HELPLINE ({site.phone})
          </a>
        </div>
      </div>
    </section>
  );
}

export function BuyingGuide() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const guides = [
    {
      num: "01",
      title: "Application",
      desc: "Passenger, school, ambulance, cargo, premium travel or special operations.",
    },
    {
      num: "02",
      title: "Capacity",
      desc: "Your preferred seating, passenger volume or payload requirement.",
    },
    {
      num: "03",
      title: "Route",
      desc: "City, highway, rural, long-distance or challenging operating conditions.",
    },
    {
      num: "04",
      title: "Purchase Plan",
      desc: "Individual, business, fleet or institutional requirement and expected timeline.",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-guide-header]");
      const cards = el.querySelectorAll("[data-guide-card]");

      if (header) {
        gsap.fromTo(
          header,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 55, scale: 0.92, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="border-t border-slate-200 bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-guide-header className="text-center max-w-3xl mx-auto will-change-transform opacity-100">
          <span className="text-xs font-bold tracking-[0.3em] text-[#DC2626] uppercase">
            BEFORE YOU CHOOSE
          </span>
          <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
            FOUR DETAILS THAT HELP US RECOMMEND BETTER.
          </h2>
        </div>

        {/* 4 Cards Grid: Active Sharp + Neighbors Blur & Dim */}
        <div ref={gridRef} className="group/grid mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((g) => (
            <div
              key={g.num}
              data-guide-card
              className="h-full will-change-transform opacity-100 transition-all duration-400 group-hover/grid:blur-[2.5px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.97] hover:!blur-none hover:!opacity-100 hover:!scale-[1.05] hover:!z-30 hover:shadow-2xl"
            >
              <Card3D intensity={10} className="h-full">
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-[#DC2626] hover:shadow-md">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-red-50 border border-red-200/60 font-display text-base font-black text-[#DC2626] [transform:translateZ(15px)]">
                    {g.num}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#0F172A] [transform:translateZ(25px)]">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 [transform:translateZ(15px)]">
                    {g.desc}
                  </p>
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const faqs = [
    {
      q: "Which Force vehicle is suitable for my business?",
      a: "The right choice depends on your application, route, passenger capacity, operating conditions and budget. Share these details with our team for a suitable recommendation.",
    },
    {
      q: "Can I request an on-road price in Gorakhpur?",
      a: "Yes. On-road pricing depends on the selected model, variant, registration location and applicable charges. Submit an enquiry for a personalised quotation.",
    },
    {
      q: "Do you assist with commercial vehicle finance?",
      a: "Our team coordinates directly with nationalized and leading private banks for instant loan approvals, low interest rates, and flexible tenure up to 7 years.",
    },
    {
      q: "Can I book a test drive?",
      a: "Yes. Contact us with your preferred model and availability so our team can coordinate the next step at our Gorakhpur dealership or your location.",
    },
    {
      q: "Do you support fleet and institutional enquiries?",
      a: "Yes. We assist businesses, schools, hospitals, institutions and fleet operators with requirement-based vehicle guidance and volume pricing.",
    },
    {
      q: "How can I contact IAW Force?",
      a: "Call 1800-889-6927 (Toll-free), WhatsApp +91 84295 40902, email sales@iawforce.com or submit the website enquiry form.",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-faq-header]");
      const items = el.querySelectorAll("[data-faq-item]");

      if (header) {
        gsap.fromTo(
          header,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 45, scale: 0.94, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="border-t border-slate-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-faq-header className="flex flex-col md:flex-row md:items-end justify-between gap-6 will-change-transform opacity-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#DC2626]">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
              ANSWERS BEFORE YOU DECIDE.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            Quick information to help you begin your Force vehicle purchase with confidence.
          </p>
        </div>

        {/* FAQs Grid with Spotlight Zoom & Sibling Fade */}
        <div ref={gridRef} className="group/grid mt-14 grid gap-5 md:grid-cols-2">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              data-faq-item
              className="h-full will-change-transform opacity-100 rounded-xl border border-slate-200 bg-slate-50/70 p-6 shadow-sm transition-all duration-400 group-hover/grid:blur-[2px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:!z-20 hover:shadow-lg open:border-[#DC2626] open:bg-white"
            >
              <summary className="flex cursor-pointer items-center justify-between font-display text-base font-bold text-slate-900 transition-colors hover:text-[#DC2626]">
                <span>{faq.q}</span>
                <span className="ml-4 font-bold text-[#DC2626] transition-transform duration-300">
                  +
                </span>
              </summary>
              <p className="mt-4 border-t border-slate-100 pt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-loc-header]");
      const items = el.querySelectorAll("[data-loc-item]");

      if (header) {
        gsap.fromTo(
          header,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (items.length > 0) {
        gsap.fromTo(
          items,
          { y: 50, scale: 0.94, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            stagger: 0.12,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="location" ref={sectionRef} className="border-t border-slate-200 bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-loc-header className="will-change-transform opacity-100">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#DC2626]">
            VISIT DEALERSHIP
          </div>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
            VISIT IAW FORCE, GORAKHPUR
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Your authorized Force Motors vehicle destination for Eastern Uttar Pradesh.
          </p>
        </div>

        <div className="group/grid mt-14 grid gap-10 lg:grid-cols-2">
          {/* Dealership Details Card */}
          <div
            data-loc-item
            className="rounded-xl border border-slate-200 bg-white p-8 shadow-md will-change-transform opacity-100 transition-all duration-400 group-hover/grid:blur-[2.5px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:!z-20 hover:shadow-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-slate-900">
              {site.name} Showroom & Service Facility
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {site.addressLine}, {site.locality}
            </p>

            <dl className="mt-8 grid gap-6 border-t border-slate-100 pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] font-bold tracking-wider text-[#DC2626] uppercase">TOLL-FREE CALL</dt>
                <dd className="mt-1 text-sm font-bold text-slate-900">
                  <a href={site.phoneHref} className="hover:text-[#DC2626] transition-colors">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-wider text-[#DC2626] uppercase">WHATSAPP DESK</dt>
                <dd className="mt-1 text-sm font-bold text-slate-900">
                  <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-[#DC2626] transition-colors">
                    {site.whatsapp}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-wider text-[#DC2626] uppercase">OFFICIAL EMAIL</dt>
                <dd className="mt-1 text-sm font-bold text-slate-900">
                  <a href={site.emailHref} className="hover:text-[#DC2626] transition-colors">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-bold tracking-wider text-[#DC2626] uppercase">WORKING HOURS</dt>
                <dd className="mt-1 text-xs text-slate-600">
                  {site.hours.map((h) => (
                    <span key={h.days} className="block">{h.days}: {h.time}</span>
                  ))}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#DC2626] px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-white shadow-md shadow-red-500/20 transition-all hover:bg-red-700"
              >
                GET GOOGLE MAP DIRECTIONS
              </a>
              <a
                href={site.phoneHref}
                className="rounded-full border border-slate-300 bg-slate-50 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-slate-800 transition-colors hover:border-[#DC2626] hover:text-[#DC2626]"
              >
                CALL DEALERSHIP
              </a>
            </div>
          </div>

          {/* Dealership Photo */}
          <div
            data-loc-item
            className="relative overflow-hidden rounded-xl border border-slate-200 shadow-md will-change-transform opacity-100 transition-all duration-400 group-hover/grid:blur-[2.5px] group-hover/grid:opacity-30 group-hover/grid:scale-[0.98] hover:!blur-none hover:!opacity-100 hover:!scale-[1.03] hover:!z-20 hover:shadow-2xl"
          >
            <img
              src={dealership}
              alt="IAW Force dealership facility in Gorakhpur"
              loading="lazy"
              width={1400}
              height={900}
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="rounded-full bg-[#DC2626] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                AUTHORIZED FORCE MOTORS DEALER
              </span>
              <p className="mt-2 font-display text-lg font-bold text-white">
                IAW Force · Commercial & Passenger Mobility Center
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: "Traveller N",
    purpose: "Passenger Transport",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-contact-left]");
      const form = el.querySelector("[data-contact-form]");

      if (header && form) {
        gsap.fromTo(
          [header, form],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Automatically send structured enquiry WhatsApp message to 8429540902
    const message =
      `*NEW VEHICLE ENQUIRY - IAW FORCE*\n\n` +
      `*Customer Name:* ${formData.name}\n` +
      `*Contact Number:* ${formData.phone}\n` +
      `*Vehicle Model:* ${formData.model}\n` +
      `*Requirements / Message:* ${formData.message || "Requesting on-road pricing and test drive schedule."}\n\n` +
      `_Sent via IAW Force Website_`;

    const waUrl = `https://wa.me/918429540902?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <section id="contact" ref={sectionRef} className="border-t border-slate-800 bg-[#0F172A] py-24 md:py-32 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Heading & Info */}
          <div data-contact-left className="will-change-transform opacity-100">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-red-400">
              READY TO MOVE FORWARD?
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-black tracking-tight text-white">
              LET'S FIND
              <br />
              <span className="text-red-500">YOUR FORCE.</span>
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Submit your enquiry to receive on-road pricing, vehicle brochure, finance calculation, and schedule a test drive at your convenience.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400 font-bold">
                  📞
                </span>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Toll-Free Helpline</span>
                  <p className="font-bold text-white">{site.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 font-bold">
                  💬
                </span>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">WhatsApp Direct Connect</span>
                  <p className="font-bold text-white">{site.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div data-contact-form className="rounded-xl border border-slate-700 bg-[#1E293B] p-8 shadow-2xl will-change-transform opacity-100">
            {submitted ? (
              <div className="py-12 text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20 text-3xl text-red-400">
                  ✓
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold text-white">
                  Enquiry Received!
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Thank you, <strong>{formData.name}</strong>. Our Force Motors specialist will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full bg-[#DC2626] px-6 py-2.5 text-xs font-bold tracking-wider text-white hover:bg-red-700"
                >
                  SUBMIT ANOTHER ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold text-white">
                  Request Quote or Test Drive
                </h3>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-600 bg-[#0F172A] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-slate-600 bg-[#0F172A] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Preferred Vehicle Model
                    </label>
                    <select
                      value={formData.model}
                      onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-slate-600 bg-[#0F172A] px-4 py-3 text-sm text-white focus:border-red-500 focus:outline-none"
                    >
                      <option value="Traveller N">Traveller N</option>
                      <option value="Urbania DX">Urbania DX</option>
                      <option value="Monobus">Monobus</option>
                      <option value="Trax Cruiser / Toofan">Trax Cruiser / Toofan</option>
                      <option value="Force Gurkha 4x4">Force Gurkha 4x4</option>
                      <option value="Traveller Ambulance">Traveller Ambulance</option>
                      <option value="Force EV Commercial">Force EV Commercial</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Application / Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about passenger capacity, school route, cargo needs or test drive timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-slate-600 bg-[#0F172A] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-red-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#DC2626] py-4 text-xs font-bold tracking-[0.2em] text-white shadow-lg shadow-red-500/25 transition-all hover:bg-red-700"
                >
                  SUBMIT ENQUIRY NOW →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0B1120] py-16 text-slate-400">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Dealership Info with exact custom Red Slanted Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-12 items-center justify-center bg-[#DC2626] [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] shadow-sm">
                <span className="font-display text-base font-black italic tracking-tight text-white pr-1">
                  IAW
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-base font-black tracking-wider text-white">
                  IAW FORCE
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase">
                  {site.brandSubtitle}
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Your authorized destination for Force passenger, commercial and purpose-built mobility solutions in Gorakhpur and Eastern Uttar Pradesh.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
              QUICK LINKS
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="transition-colors hover:text-[#DC2626]">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Range */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
              VEHICLE RANGE
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li><a href="#vehicles" className="hover:text-[#DC2626]">Traveller N Range</a></li>
              <li><a href="#vehicles" className="hover:text-[#DC2626]">Urbania DX Premium</a></li>
              <li><a href="#vehicles" className="hover:text-[#DC2626]">Monobus 33/28 Seater</a></li>
              <li><a href="#vehicles" className="hover:text-[#DC2626]">Trax Cruiser & Toofan</a></li>
              <li><a href="#vehicles" className="hover:text-[#DC2626]">Force Gurkha 4x4</a></li>
              <li><a href="#vehicles" className="hover:text-[#DC2626]">Traveller Ambulance</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-display text-xs font-bold tracking-[0.2em] text-white uppercase">
              CONTACT
            </h4>
            <div className="mt-4 space-y-2 text-xs">
              <p>
                <a href={site.phoneHref} className="font-bold text-white hover:text-[#DC2626]">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="hover:text-[#DC2626]">
                  {site.email}
                </a>
              </p>
              <p className="text-slate-400">
                {site.addressLine}, {site.locality}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} IAW Force. All rights reserved.</p>
          <p className="text-slate-400 flex items-center gap-1.5">
            <span>Designed by</span>
            <a
              href="https://www.shineinfosolutions.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white transition-colors hover:text-[#DC2626] underline decoration-red-500/50 underline-offset-4"
            >
              Shine Infosolutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with IAW Force"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.34 4.95L2 22l5.23-1.37a9.9 9.9 0 0 0 4.81 1.23h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.1.81.83-3.02-.2-.31a8.16 8.16 0 0 1-1.26-4.35c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.84c0 4.55-3.7 8.19-8.27 8.19Zm4.52-6.14c-.25-.13-1.47-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.21.88 2.39 1 2.55.13.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z" />
      </svg>
    </a>
  );
}
