import { useState, useEffect, useRef } from "react";
import { useNavigate } from "@tanstack/react-router";
import travellerImg from "@/assets/showcase/traveller-hero.png";
import urbaniaImg from "@/assets/showcase/urbania-hero.png";
import traxImg from "@/assets/showcase/trax-hero.png";
import monobusImg from "@/assets/showcase/monobus-hero.png";
import gurkhaImg from "@/assets/showcase/gurkha-hero.png";
import specialImg from "@/assets/showcase/special-hero.png";
import evImg from "@/assets/showcase/ev-hero.png";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";
import { Card3D } from "@/components/ui/Card3D";
import { VehicleShowcaseBanner } from "./VehicleShowcaseBanner";
import {
  usageOptions,
  capacityOptions,
  terrainOptions,
  recommendVehicle,
  type Usage,
  type Capacity,
  type Terrain,
} from "@/config/finder";

export interface VehicleCatalogItem {
  id: string;
  category: "all" | "traveller" | "urbania" | "monobus" | "trax" | "gurkha" | "special" | "ev";
  categoryBadge: string;
  title: string;
  subtitle: string;
  description: string;
  seating: string;
  engine: string;
  application: string;
  image: string;
  features: string[];
  url: string;
}

export const allCatalogVehicles: VehicleCatalogItem[] = [
  {
    id: "traveller-n",
    category: "traveller",
    categoryBadge: "PASSENGER · SCHOOL · AMBULANCE",
    title: "Traveller N",
    subtitle: "The Benchmark of Commercial Mobility",
    description:
      "A versatile mobility platform for passenger transport, schools, ambulances and delivery operations.",
    seating: "9 to 26 Seats",
    engine: "FM 2.6 CR ED Diesel",
    application: "Passenger, School, Ambulance, Cargo",
    image: travellerImg,
    features: [
      "Synchromesh Gearbox with Overdrive",
      "Monocoque structure ensuring maximum passenger safety",
      "High roof with standing headroom",
      "Dual AC options with individual louvres",
    ],
    url: "https://www.forcemotors.com/vehicles-category/traveller/",
  },
  {
    id: "urbania-dx",
    category: "urbania",
    categoryBadge: "PREMIUM PASSENGER MOBILITY",
    title: "Urbania DX",
    subtitle: "World-Class Executive Travel",
    description:
      "Contemporary design, refined comfort and passenger-focused travel for premium mobility.",
    seating: "10 / 13 / 17 Seats",
    engine: "Mercedes-Derived 115 HP Engine",
    application: "Luxury Tourism, Executive Fleet, Corporate",
    image: urbaniaImg,
    features: [
      "Independent front suspension for car-like ride",
      "Dual Airbags with ESP, ABS, EBD & Hill Hold",
      "Individual reclining seats with USB ports & reading lamps",
      "Aerodynamic European monocoque styling",
    ],
    url: "https://forceurbania.co.in/",
  },
  {
    id: "monobus-33",
    category: "monobus",
    categoryBadge: "PASSENGER · SCHOOL TRANSPORT",
    title: "Monobus",
    subtitle: "Efficient High-Capacity Transit",
    description:
      "Dependable passenger and school transport configurations for efficient daily operations.",
    seating: "28 to 33 Seats",
    engine: "High-Torque CRDe Common Rail Diesel",
    application: "Schools, Colleges, Intercity Shuttles",
    image: monobusImg,
    features: [
      "Lightweight monocoque design for superior fuel mileage",
      "Wide passenger aisle & low boarding step",
      "Large panoramic windows with emergency exits",
      "Government compliant School Bus safety equipment",
    ],
    url: "https://www.forcemotors.com/vehicles-category/monobus/",
  },
  {
    id: "trax-cruiser",
    category: "trax",
    categoryBadge: "RUGGED MULTI-UTILITY RANGE",
    title: "Trax Cruiser & Toofan",
    subtitle: "Heavy Duty Rugged Reliability",
    description:
      "Rugged, practical mobility for passenger, school, ambulance, delivery and crew applications.",
    seating: "9 to 13 Seats",
    engine: "Proven FM 2.6 Turbo Diesel",
    application: "Rural Taxi, Shared Route, Construction Crew",
    image: traxImg,
    features: [
      "Rigid chassis with high ground clearance for rough roads",
      "Low maintenance costs and high resale value",
      "Spacious interior with foldable jump seats",
      "High seating capacity for maximum per-trip earnings",
    ],
    url: "https://www.forcemotors.com/vehicles-category/trax/",
  },
  {
    id: "traveller-ambulance",
    category: "special",
    categoryBadge: "PURPOSE-BUILT MOBILITY",
    title: "Traveller Ambulance",
    subtitle: "Critical Life-Saving Transit",
    description:
      "Configured solutions for emergency, police, medical, institutional and specialised operations.",
    seating: "Type B, C & D (ICU / ALS / BLS)",
    engine: "FM 2.6 CR ED Diesel",
    application: "Hospitals, State Health Services, Clinics",
    image: specialImg,
    features: [
      "Equipped with oxygen delivery system and stretcher base",
      "Pre-wired for defibrillator, ventilator, and vital monitors",
      "Seamless anti-bacterial washable interiors",
      "Emergency warning lights, sirens & PA system",
    ],
    url: "https://www.forcemotors.com/vehicles-category/special-applications/",
  },
  {
    id: "force-gurkha",
    category: "gurkha",
    categoryBadge: "4X4 OFF-ROAD",
    title: "Force Gurkha 4x4",
    subtitle: "Engineered for Extreme Exploration",
    description:
      "A capable off-roader engineered for adventure, challenging terrain and confident exploration.",
    seating: "3-Door & 5-Door Configurations",
    engine: "Mercedes-Derived 2.6L Turbo Diesel",
    application: "Off-Road, Defense, Exploration, Institutional",
    image: gurkhaImg,
    features: [
      "Front and rear mechanical differential locks",
      "700mm water wading capacity with factory snorkel",
      "Heavy-duty ladder frame chassis with 4x4 low range",
      "Touchscreen infotainment with Android Auto & Apple CarPlay",
    ],
    url: "https://www.forcemotors.com/vehicles-category/gurkha/",
  },
  {
    id: "force-ev",
    category: "ev",
    categoryBadge: "ELECTRIC MOBILITY",
    title: "Force Electric Range",
    subtitle: "Zero-Emission Commercial Fleet",
    description:
      "Future-ready electric mobility solutions designed for efficient urban movement.",
    seating: "Configurable Passenger & Cargo",
    engine: "High-Efficiency Permanent Magnet Motor",
    application: "City Shuttles, Green Logistics, Campus Transit",
    image: evImg,
    features: [
      "Fast charging capability for minimal downtime",
      "Ultra-low per-kilometer running costs",
      "Regenerative braking with smart battery telemetry",
      "Eco-friendly zero tailpipe emissions",
    ],
    url: "https://www.forcemotors.com/vehicles/e-traveller-smart-citibus-ev/",
  },
];

const categoryFilters = [
  { id: "all", label: "ALL VEHICLES" },
  { id: "traveller", label: "TRAVELLER N" },
  { id: "urbania", label: "URBANIA DX" },
  { id: "monobus", label: "MONOBUS" },
  { id: "trax", label: "TRAX" },
  { id: "gurkha", label: "GURKHA 4X4" },
  { id: "special", label: "SPECIAL / AMBULANCE" },
  { id: "ev", label: "EV RANGE" },
] as const;

export function VehicleRange() {
  const [activeTab, setActiveTab] = useState<string>("traveller");
  const sectionRef = useRef<HTMLElement>(null);

  // GSAP Stable Section-Bound Scroll Trigger Animation: Stays 100% visible while inside section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-range-header]");
      const tabs = el.querySelector("[data-range-tabs]");
      
      const fleetHeader = el.querySelectorAll("[data-fleet-header]");
      const vehicles = el.querySelectorAll("[data-fleet-vehicle]");
      const statsElements = el.querySelectorAll("[data-fleet-stat]");

      // Smooth storytelling header entrance
      if (header) {
        gsap.fromTo(
          header,
          { y: 45, opacity: 0, scale: 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }

      // Filter Tabs staggered slide-in
      if (tabs) {
        gsap.fromTo(
          tabs,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }

      // Fleet Showcase Animations
      if (fleetHeader.length > 0) {
        gsap.fromTo(
          fleetHeader,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: fleetHeader[0],
              start: "top 85%",
            }
          }
        );
      }

      if (vehicles.length > 0) {
        gsap.fromTo(
          vehicles,
          { y: 80, opacity: 0, scale: 0.85 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: { amount: 0.6, from: "center" },
            duration: 1.2,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: vehicles[0],
              start: "top 80%",
            }
          }
        );
      }
      
      if (statsElements.length > 0) {
        gsap.fromTo(
          statsElements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsElements[0],
              start: "top 75%",
            }
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="range" ref={sectionRef} className="relative border-t border-slate-200 bg-gradient-to-b from-white to-slate-50 py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Story Section Header */}
        <div data-range-header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 will-change-transform opacity-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#006CB5]">
              OUR VEHICLES
            </div>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              EXPLORE THE FORCE RANGE.
            </h2>
            <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
              From premium passenger mobility to school, ambulance, cargo and special applications—hover/touch any card for an interactive 3D perspective.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#006CB5] bg-blue-50 px-6 py-3.5 text-xs font-bold tracking-[0.18em] text-[#006CB5] transition-all duration-300 hover:bg-[#006CB5] hover:text-white shadow-sm"
            >
              <span>REQUEST PRICE LIST</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Interactive "Find your Force" Showcase Banner & Navigation Bar */}
        <div data-range-tabs className="mt-10 will-change-transform opacity-100">
          <VehicleShowcaseBanner
            activeId={activeTab === "all" ? "traveller" : activeTab}
            onSelectVehicle={(id) => setActiveTab(id)}
          />
        </div>
      </div>

      {/* Force Motors Replica Fleet Showcase */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 mt-24 md:mt-32 relative">
        {/* Force Motors Replica Header Section */}
        <div className="mb-12 md:mb-16 will-change-transform opacity-100 px-4">
           <div data-fleet-header>
             <h2 className="text-center font-display text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight text-black mb-4">
               IAW FORCE
             </h2>
             <h3 className="text-center font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#006CB5] mb-8 leading-tight">
               FORCE MOTORS VEHICLES<br/>
               Authorized Dealership
             </h3>
           </div>
           
           <div data-fleet-header className="max-w-4xl mx-auto text-center space-y-5 text-sm sm:text-base font-semibold text-slate-800">
             <p>
               Established with a commitment to excellence, IAW Force is your premier destination for the complete range of Force Motors commercial and passenger vehicles.<br/>
               Today, we stand as a fully integrated dealership specializing in the sales, service, and support of vehicles, catering to the diverse needs of customers in Gorakhpur and beyond.
             </p>
             <p>
               Driven by a passion for customer satisfaction, IAW Force endeavours to provide the best-in-class shared mobility and cargo solutions that keep pace with the growing demands of modern India.
             </p>
           </div>
           
           <div data-fleet-header className="text-center mt-10 mb-8">
             <a href="#vehicles" className="inline-flex items-center justify-center bg-black text-white px-10 py-3.5 text-sm font-bold tracking-wider hover:bg-[#006CB5] transition-colors cursor-pointer skew-x-[-12deg]">
               <span className="block skew-x-[12deg]">Read More</span>
             </a>
           </div>
        </div>

        {/* 3D Floor Grid Effect */}
        <div className="absolute left-1/2 bottom-[15%] w-[120vw] -translate-x-1/2 h-[30vh] md:h-[45vh] bg-[radial-gradient(ellipse_at_center,rgba(0,108,181,0.08)_0%,transparent_70%)] [transform:rotateX(65deg)_translateZ(-50px)] pointer-events-none" />
        <div className="absolute left-1/2 bottom-[10%] w-[120vw] -translate-x-1/2 h-[30vh] md:h-[45vh] [background-image:linear-gradient(rgba(0,108,181,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,108,181,0.05)_1px,transparent_1px)] [background-size:40px_40px] [transform:rotateX(75deg)_translateZ(-80px)] pointer-events-none opacity-60" />

        <div className="relative mt-8 md:mt-24 w-full pt-10">
           {/* Vehicle Cluster - absolute precision positioning to match the crowded V-formation */}
           <div className="relative z-10 flex w-full items-end justify-center px-4">
             {/* 1. Gurkha (Far Left) */}
             <div data-fleet-vehicle className="w-[15%] min-w-[120px] max-w-[220px] -mr-[6%] relative z-[1]">
                <img src={gurkhaImg} alt="Force Gurkha" className="w-full h-auto object-contain drop-shadow-2xl brightness-90 hover:brightness-100 transition-all duration-300" />
             </div>
             
             {/* 2. Trax Cruiser (Inner Left) */}
             <div data-fleet-vehicle className="w-[18%] min-w-[140px] max-w-[260px] -mr-[8%] relative z-[2]">
                <img src={traxImg} alt="Force Trax Cruiser" className="w-full h-auto object-contain drop-shadow-2xl brightness-95 hover:brightness-100 transition-all duration-300" />
             </div>
             
             {/* 3. Traveller (Left Center) */}
             <div data-fleet-vehicle className="w-[20%] min-w-[160px] max-w-[300px] -mr-[7%] relative z-[3] pb-2">
                <img src={travellerImg} alt="Force Traveller" className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-300" />
             </div>
             
             {/* 4. Urbania DX (Center Leader) */}
             <div data-fleet-vehicle className="w-[25%] min-w-[200px] max-w-[400px] relative z-[5] pb-6 drop-shadow-[0_30px_35px_rgba(0,0,0,0.4)]">
                <img src={urbaniaImg} alt="Force Urbania DX" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer" />
             </div>
             
             {/* 5. Monobus (Right Center) */}
             <div data-fleet-vehicle className="w-[22%] min-w-[180px] max-w-[320px] -ml-[7%] relative z-[3] pb-1">
                <img src={monobusImg} alt="Force Monobus" className="w-full h-auto object-contain drop-shadow-2xl transition-all duration-300" />
             </div>
             
             {/* 6. Special/Ambulance (Inner Right) */}
             <div data-fleet-vehicle className="w-[18%] min-w-[140px] max-w-[260px] -ml-[8%] relative z-[2] pb-1">
                <img src={specialImg} alt="Force Ambulance" className="w-full h-auto object-contain drop-shadow-2xl brightness-95 hover:brightness-100 transition-all duration-300" />
             </div>
             
             {/* 7. EV Range (Far Right) */}
             <div data-fleet-vehicle className="w-[15%] min-w-[120px] max-w-[220px] -ml-[6%] relative z-[1]">
                <img src={evImg} alt="Force EV" className="w-full h-auto object-contain drop-shadow-2xl brightness-90 hover:brightness-100 transition-all duration-300" />
             </div>
           </div>
        </div>

        {/* Bottom Statistics Row */}
        <div className="relative z-20 mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center pb-8">
          <div data-fleet-stat>
             <h4 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-[#006CB5] mb-2 drop-shadow-sm">5</h4>
             <p className="text-sm font-bold text-slate-800">Manufacturing Facilities</p>
          </div>
          <div data-fleet-stat>
             <h4 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-[#006CB5] mb-2 drop-shadow-sm">25+</h4>
             <p className="text-sm font-bold text-slate-800">Countries Served</p>
          </div>
          <div data-fleet-stat>
             <h4 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-[#006CB5] mb-2 drop-shadow-sm">300+</h4>
             <p className="text-sm font-bold text-slate-800">Sales & Service Touchpoints</p>
          </div>
          <div data-fleet-stat>
             <h4 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-[#006CB5] mb-2 drop-shadow-sm">10000+</h4>
             <p className="text-sm font-bold text-slate-800">Workforce</p>
          </div>
        </div>
        
      </div>
    </section>
  );
}

/* Traveller Application Showcase matching iawforce.com */
export function TravellerCatalogue() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const applications = [
    {
      num: "01",
      title: "PASSENGER VEHICLES",
      desc: "High roof luxury and standard passenger vans for route, contract and staff transport.",
      variants: "12 to 26 Seater Options · High Roof · Monocoque Body",
    },
    {
      num: "02",
      title: "SCHOOL BUSES",
      desc: "Fully equipped with government compliant safety features, low steps and emergency doors.",
      variants: "Special School Seating · Stop Arm · High Visibility Yellow",
    },
    {
      num: "03",
      title: "AMBULANCES",
      desc: "Pre-engineered platforms for Type B, C & D medical emergency conversions.",
      variants: "BLS & ALS ICU Ready · Oxygen Delivery · Easy Wash Interiors",
    },
    {
      num: "04",
      title: "DELIVERY VANS",
      desc: "Large volumetric cargo capacity and flat floors for efficient e-commerce & cargo logistics.",
      variants: "High Payload · Wide Rear Doors · Low Loading Height",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-app-header]");
      const cards = el.querySelectorAll("[data-app-card]");

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
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
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
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="applications" ref={sectionRef} className="border-t border-slate-200 bg-[#F8FAFC] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-app-header className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8 will-change-transform opacity-100">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] text-[#006CB5] uppercase">
              TRAVELLER N RANGE
            </span>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl">
              CHOOSE YOUR APPLICATION
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Passenger vehicles, school buses, ambulances and delivery vans—all built on the trusted Traveller platform.
            </p>
          </div>
          <a
            href="#contact"
            className="flex h-11 items-center gap-2 rounded-full bg-[#006CB5] px-6 text-xs font-bold tracking-[0.16em] text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-700"
          >
            <span>ENQUIRE FOR TRAVELLER N</span>
            <span>→</span>
          </a>
        </div>

        {/* 4 Cards Grid: Active Sharp + Neighbors Blur & Dim */}
        <div ref={gridRef} className="group/grid mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((app) => (
            <div
              key={app.num}
              data-app-card
              className="h-full will-change-transform opacity-100 transition-all duration-400 hover:scale-[1.05] hover:z-30 hover:shadow-2xl"
            >
              <Card3D intensity={12} className="h-full">
                <div className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-200/40 transition-all duration-300 hover:border-[#006CB5] hover:shadow-xl">
                  <div>
                    <span className="font-display text-2xl font-black text-[#006CB5] [transform:translateZ(20px)]">
                      {app.num}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#0F172A] transition-colors group-hover:text-[#006CB5] [transform:translateZ(25px)]">
                      {app.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 [transform:translateZ(15px)]">
                      {app.desc}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-3 [transform:translateZ(10px)]">
                    <span className="text-[10px] font-semibold text-[#006CB5] uppercase tracking-wider">
                      {app.variants}
                    </span>
                  </div>
                </div>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const solutionsList = [
  {
    num: "01",
    title: "Passenger Transport",
    copy: "Comfortable and dependable vehicles for staff, route, tour and shared mobility operations.",
  },
  {
    num: "02",
    title: "School Mobility",
    copy: "Purpose-focused school transport options for safe and reliable daily movement.",
  },
  {
    num: "03",
    title: "Healthcare & Emergency",
    copy: "Ambulance and medical mobility solutions for hospitals, institutions and emergency services.",
  },
  {
    num: "04",
    title: "Business & Cargo",
    copy: "Delivery, crew and commercial vehicles designed around everyday operational requirements.",
  },
  {
    num: "05",
    title: "Premium Travel",
    copy: "Modern passenger mobility for hotels, corporates, tour operators and executive travel.",
  },
  {
    num: "06",
    title: "Special Operations",
    copy: "Institutional and purpose-built solutions for police, security, medical and public services.",
  },
];

export function Solutions() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-sol-header]");
      const cards = el.querySelectorAll("[data-sol-card]");

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
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }

      // Row-by-Row 3 cards per row: triggers when scrolled, stays 100% visible inside section
      const cardList = Array.from(cards);
      if (cardList.length > 0) {
        const rows: Element[][] = [];
        for (let i = 0; i < cardList.length; i += 3) {
          rows.push(cardList.slice(i, i + 3));
        }

        rows.forEach((rowCards) => {
          gsap.fromTo(
            rowCards,
            { y: 55, scale: 0.92, opacity: 0 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              stagger: 0.1,
              duration: 0.7,
              ease: "power2.out",
              scrollTrigger: {
                trigger: rowCards[0],
                start: "top 88%",
                toggleActions: "play reverse play reverse",
                end: "bottom 12%",
              },
            }
          );
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="solutions" ref={sectionRef} className="border-t border-slate-200 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-sol-header className="flex flex-col md:flex-row md:items-end justify-between gap-6 will-change-transform opacity-100">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#006CB5]">
              SOLUTIONS BY APPLICATION
            </div>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
              MOBILITY FOR EVERY PURPOSE.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Tell us what your vehicle needs to achieve. We will help you identify a practical range and configuration.
          </p>
        </div>

        {/* 6 Solutions Cards Grid: Active Sharp + Neighbors Blur & Dim */}
        <div ref={gridRef} className="group/grid mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsList.map((sol) => (
            <div
              key={sol.num}
              data-sol-card
              className="h-full will-change-transform opacity-100 transition-all duration-400 hover:scale-[1.05] hover:z-30 hover:shadow-2xl"
            >
              <Card3D intensity={10} className="h-full">
                <article className="group flex h-full flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/70 p-8 shadow-sm transition-all duration-300 hover:border-[#006CB5] hover:bg-white hover:shadow-lg">
                  <div>
                    <span className="font-display text-xs font-bold tracking-[0.3em] text-[#006CB5] [transform:translateZ(15px)]">
                      {sol.num}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-[#0F172A] transition-colors group-hover:text-[#006CB5] [transform:translateZ(25px)]">
                      {sol.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 [transform:translateZ(15px)]">
                      {sol.copy}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] text-[#006CB5] transition-colors hover:text-blue-700 [transform:translateZ(20px)]"
                  >
                    <span>DISCUSS REQUIREMENT</span>
                    <span>→</span>
                  </a>
                </article>
              </Card3D>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyIaw() {
  const sectionRef = useRef<HTMLElement>(null);

  const reasons = [
    {
      title: "Vehicle Guidance",
      desc: "Choose the right configuration for your route, passengers and business requirements.",
    },
    {
      title: "Dedicated Team",
      desc: "Talk directly with a knowledgeable local sales and support team in Gorakhpur.",
    },
    {
      title: "Fleet Solutions",
      desc: "Structured assistance for business, institutional, school, and bulk requirements.",
    },
    {
      title: "Ownership Support",
      desc: "Complete service coordination, periodic maintenance, and genuine parts assistance.",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const leftCol = el.querySelector("[data-why-left]");
      const cards = el.querySelectorAll("[data-why-card]");

      // Left narrative text stays 100% visible throughout section
      if (leftCol) {
        gsap.fromTo(
          leftCol,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }

      // Reason cards stay 100% visible throughout section
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { y: 50, scale: 0.92, opacity: 0 },
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
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="border-t border-slate-200 bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column Narrative */}
          <div data-why-left className="will-change-transform opacity-100">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#006CB5]">
              WHY IAW FORCE
            </div>
            <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
              CONFIDENCE AT
              <br />
              <span className="text-[#006CB5]">EVERY MILE.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We make vehicle buying clearer with practical recommendations, transparent communication, and dependable ownership support across Gorakhpur and Eastern Uttar Pradesh.
            </p>

            {/* Checklist */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs font-bold text-slate-900">
              <div className="flex items-center gap-2">
                <span className="text-[#006CB5] font-black">✓</span> Sales Consultation
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#006CB5] font-black">✓</span> Finance Assistance
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#006CB5] font-black">✓</span> Test Drive Support
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#006CB5] font-black">✓</span> Service Coordination
              </div>
            </div>

            <div className="mt-9">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#006CB5] px-8 py-4 text-xs font-bold tracking-[0.2em] text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:bg-blue-700"
              >
                <span>TALK TO OUR TEAM</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reason Cards Grid (Active Sharp + Neighbors Blur) */}
          <div className="group/grid grid gap-5 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                data-why-card
                className="h-full will-change-transform opacity-100 transition-all duration-400 hover:scale-[1.05] hover:z-30 hover:shadow-2xl"
              >
                <Card3D intensity={10} className="h-full">
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#006CB5] hover:shadow-md">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#006CB5] [transform:translateZ(15px)]">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#0F172A] [transform:translateZ(25px)]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 [transform:translateZ(15px)]">
                      {r.desc}
                    </p>
                  </div>
                </Card3D>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function VehicleFinder() {
  const [usage, setUsage] = useState<Usage>("PASSENGER TRANSPORT");
  const [capacity, setCapacity] = useState<Capacity>("10 TO 17 SEATS");
  const [terrain, setTerrain] = useState<Terrain>("CITY & HIGHWAY");
  const sectionRef = useRef<HTMLElement>(null);

  const rec = recommendVehicle(usage, capacity, terrain);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      const header = el.querySelector("[data-finder-header]");
      const leftCol = el.querySelector("[data-finder-left]");
      const rightCard = el.querySelector("[data-finder-right]");

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
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }

      if (leftCol && rightCard) {
        gsap.fromTo(
          [leftCol, rightCard],
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
              toggleActions: "play reverse play reverse",
              end: "bottom 12%",
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  const chip = (active: boolean) =>
    `rounded-lg border px-4 py-3 text-xs font-bold tracking-wider transition-all duration-300 ${active
      ? "border-[#006CB5] bg-[#006CB5] text-white shadow-md shadow-blue-500/25 scale-[1.02]"
      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
    }`;

  return (
    <section id="finder" ref={sectionRef} className="border-t border-slate-200 bg-[#F8FAFC] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div data-finder-header className="will-change-transform opacity-100">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-[0.25em] text-[#006CB5]">
            INTELLIGENT VEHICLE FINDER
          </div>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-5xl">
            FIND THE RIGHT FORCE VEHICLE.
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Select your operating requirements below. Our recommendation engine instantly matches the ideal vehicle platform with estimated pricing and specifications.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1.3fr]">
          {/* Left Selection Column */}
          <div data-finder-left className="space-y-8 will-change-transform opacity-100">
            {/* Step 1: Use Case */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-wider">
                1. What is your primary use case?
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {usageOptions.map((o) => (
                  <button key={o} type="button" onClick={() => setUsage(o)} className={chip(usage === o)}>
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Capacity */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-wider">
                2. Required Passenger / Seating Capacity?
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {capacityOptions.map((o) => (
                  <button key={o} type="button" onClick={() => setCapacity(o)} className={chip(capacity === o)}>
                    {o}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Terrain / Route Type */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-xs font-black text-[#0F172A] uppercase tracking-wider">
                3. Operating Terrain & Route Type?
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {terrainOptions.map((o) => (
                  <button key={o} type="button" onClick={() => setTerrain(o)} className={chip(terrain === o)}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Recommendation Card with 3D Elevation */}
          <div data-finder-right className="h-full will-change-transform opacity-100">
            <Card3D intensity={10} className="h-full">
              <div className="flex h-full flex-col justify-between rounded-xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/60 transition-all duration-500">
                <div>
                  {/* Top Match Bar */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="rounded-full bg-blue-50 border border-blue-200/80 px-3 py-1 text-[10px] font-black tracking-widest text-[#006CB5] uppercase [transform:translateZ(15px)]">
                      {rec.badge}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-black text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 [transform:translateZ(15px)]">
                      <span>★</span> {rec.matchScore}% BEST MATCH
                    </span>
                  </div>

                  {/* Vehicle Headline & Price */}
                  <div className="mt-5 [transform:translateZ(25px)]">
                    <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A]">
                      {rec.vehicle}
                    </h3>
                    <p className="mt-1 text-xs font-bold text-[#006CB5]">
                      {rec.tagline}
                    </p>
                    <p className="mt-2 font-display text-lg font-black text-slate-800">
                      Est. Price: <span className="text-[#006CB5]">{rec.priceEstimate}</span>
                      <span className="text-[10px] font-normal text-slate-400"> (Ex-Showroom)</span>
                    </p>
                  </div>

                  {/* Vehicle Graphic with Floor Shadow */}
                  <div className="relative my-4 flex min-h-[160px] items-center justify-center overflow-visible [transform-style:preserve-3d]">
                    <div className="pointer-events-none absolute bottom-1 h-10 w-3/4 rounded-full bg-slate-900/15 blur-lg" />
                    <img
                      src={rec.image}
                      alt={`Recommended Force ${rec.vehicle}`}
                      loading="lazy"
                      className="relative z-10 max-h-[160px] w-auto select-none object-contain drop-shadow-[0_20px_30px_rgba(15,23,42,0.2)] transition-transform duration-500 [transform:translateZ(40px)] hover:scale-105"
                    />
                  </div>

                  {/* Key Specifications Pill Grid */}
                  <div className="grid grid-cols-2 gap-2.5 rounded-lg bg-slate-50 p-3.5 border border-slate-200/70 text-xs [transform:translateZ(20px)]">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Seating:</span>
                      <p className="font-bold text-[#0F172A] mt-0.5">{rec.seating}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Engine:</span>
                      <p className="font-bold text-[#0F172A] mt-0.5">{rec.engine}</p>
                    </div>
                  </div>

                  {/* Why Recommended & Key Benefits */}
                  <div className="mt-4 space-y-2 [transform:translateZ(15px)]">
                    <p className="text-xs leading-relaxed text-slate-600">
                      <strong>Why this model:</strong> {rec.whyRecommended}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {rec.variants.map((v) => (
                        <span key={v} className="rounded-md bg-slate-100 px-2.5 py-1 text-[10px] font-bold text-slate-700 border border-slate-200">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 border-t border-slate-100 pt-5 [transform:translateZ(25px)]">
                  <a
                    href={`https://wa.me/918429540902?text=${encodeURIComponent(`*VEHICLE FINDER ENQUIRY - IAW FORCE*\n\n*Recommended Model:* ${rec.vehicle} (${rec.tagline})\n*Est. Price:* ${rec.priceEstimate}\n*Seating:* ${rec.seating}\n*Engine:* ${rec.engine}\n*Requirements:* ${usage} | ${capacity} | ${terrain}\n\nPlease share the on-road quotation in Gorakhpur and available delivery dates.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-[#006CB5] px-5 py-3.5 text-center text-xs font-bold tracking-[0.14em] text-white shadow-md shadow-blue-500/25 transition-all hover:bg-blue-700 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>GET ON-ROAD PRICE</span>
                    <span>→</span>
                  </a>
                  <a
                    href={`https://wa.me/918429540902?text=${encodeURIComponent(`*TEST DRIVE REQUEST - IAW FORCE*\n\nI want to book a test drive for *${rec.vehicle}*. Please contact me.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-300 bg-white px-5 py-3.5 text-center text-xs font-bold tracking-[0.14em] text-slate-800 transition-colors hover:border-[#006CB5] hover:text-[#006CB5] whitespace-nowrap"
                  >
                    BOOK TEST DRIVE
                  </a>
                </div>
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </section>
  );
}
