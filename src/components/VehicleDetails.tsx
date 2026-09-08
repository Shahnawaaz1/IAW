import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { VehicleData } from "@/data/vehicles";
import { site } from "@/config/site";

// Official Force Motors vehicle details assets
import travellerBanner from "@/assets/vehicle-details/traveller-banner.webp";
import travellerLogo from "@/assets/vehicle-details/traveller-logo.png";
import travellerCallout from "@/assets/vehicle-details/traveller-callout.webp";

// Showcase fallback backgrounds & heroes
import urbaniaBg from "@/assets/showcase/urbania-bg.jpg";
import gurkhaBg from "@/assets/showcase/gurkha-bg.jpg";
import traxBg from "@/assets/showcase/trax-bg.jpg";
import monobusBg from "@/assets/showcase/monobus-bg.jpg";
import specialBg from "@/assets/showcase/special-bg.jpg";
import evBg from "@/assets/showcase/ev-bg.jpg";

import urbaniaHero from "@/assets/showcase/urbania-hero.png";
import gurkhaHero from "@/assets/showcase/gurkha-hero.png";
import traxHero from "@/assets/showcase/trax-hero.png";
import monobusHero from "@/assets/showcase/monobus-hero.png";
import specialHero from "@/assets/showcase/special-hero.png";
import evHero from "@/assets/showcase/ev-hero.png";

function getVehicleBanner(category: string): string {
  switch (category) {
    case "traveller":
      return travellerBanner;
    case "urbania":
      return urbaniaBg;
    case "gurkha":
      return gurkhaBg;
    case "trax":
      return traxBg;
    case "monobus":
      return monobusBg;
    case "special":
      return specialBg;
    case "ev":
      return evBg;
    default:
      return travellerBanner;
  }
}

function getVehicleCalloutImage(vehicle: VehicleData): string {
  if (vehicle.calloutImage) return vehicle.calloutImage;
  if (vehicle.category === "traveller") {
    return travellerCallout;
  }
  switch (vehicle.category) {
    case "urbania":
      return urbaniaHero;
    case "gurkha":
      return gurkhaHero;
    case "trax":
      return traxHero;
    case "monobus":
      return monobusHero;
    case "special":
      return vehicle.image || specialHero;
    case "ev":
      return evHero;
    default:
      return vehicle.image;
  }
}

function getCategoryName(category: string): string {
  switch (category) {
    case "special":
      return "Special Applications";
    case "traveller":
      return "Traveller N";
    case "urbania":
      return "Urbania";
    case "monobus":
      return "Monobus";
    case "trax":
      return "Trax";
    case "gurkha":
      return "Gurkha";
    case "ev":
      return "Electric Vehicles";
    default:
      return "Vehicles";
  }
}

// =========================================================================
// 1. HERO SECTION (Matching User Image 2 & Force Motors design)
// =========================================================================
export function HeroSection({
  vehicle,
  onEnquire,
  onTestDrive,
}: {
  vehicle: VehicleData;
  onEnquire: () => void;
  onTestDrive: () => void;
}) {
  const bannerImg = vehicle.bannerImage || getVehicleBanner(vehicle.category);
  const displayPrice = vehicle.price || "₹ 15.21 Lakh*";
  const seating = vehicle.specifications?.seatingCapacity || "";
  const categoryLabel = getCategoryName(vehicle.category);

  return (
    <div className="relative w-full bg-[#0A0E17] text-white">
      {/* Top Full-Width Hero Banner */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[490px] lg:h-[540px] overflow-hidden">
        <img
          src={bannerImg}
          alt={`${vehicle.name} Banner`}
          className="h-full w-full object-cover object-center"
        />

        {/* Soft vignette overlay for readable typography while preserving vehicle visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-black/30" />

        {/* Overlaid Title & Enquire Now Button on Banner */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-xl">
            {/* Model Name */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
              {vehicle.name}
            </h1>

            {/* Price Badge on Banner */}
            {vehicle.price && (
              <div className="mt-4 sm:mt-5 inline-block bg-black/80 backdrop-blur-md px-4 py-2 text-sm sm:text-base md:text-lg font-bold text-white border-l-4 border-[#006CB5] shadow-lg">
                Price Starts at {displayPrice}
              </div>
            )}

            {/* Enquire Now Angled Button on Banner */}
            <div className="mt-6 sm:mt-8">
              <button
                type="button"
                onClick={onEnquire}
                className="group relative inline-flex items-center justify-center bg-white hover:bg-[#006CB5] transition-all duration-300 shadow-xl px-8 py-3 cursor-pointer"
                style={{
                  clipPath:
                    "polygon(12px 0, 100% 0, calc(100% - 12px) 100%, 0 100%)",
                }}
              >
                <span className="font-display text-xs sm:text-sm font-black tracking-wider text-slate-950 group-hover:text-white transition-colors duration-200 uppercase">
                  Enquire Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Model Overview & Price Action Bar matching Image 2 */}
      <div className="bg-[#0B1120] border-b border-slate-800/80 px-6 sm:px-12 md:px-16 lg:px-24 py-6 md:py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs + Brand Logo Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800/60 text-xs text-slate-400">
            <div className="flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>+</span>
              <a href="/#range" className="hover:text-white transition-colors">
                Vehicles
              </a>
              <span>+</span>
              <span className="text-slate-300 font-medium">{categoryLabel}</span>
              <span>+</span>
              <span className="text-[#00A3E0] font-bold">{vehicle.name}</span>
            </div>

            {/* Vehicle Model Emblem */}
            <div className="flex items-center">
              {vehicle.category === "traveller" ? (
                <img
                  src={travellerLogo}
                  alt="Traveller Logo"
                  className="h-7 sm:h-9 object-contain brightness-0 invert opacity-90"
                />
              ) : (
                <span className="font-display text-sm font-black tracking-[0.2em] text-slate-300 uppercase">
                  {vehicle.name}
                </span>
              )}
            </div>
          </div>

          {/* Model Sub-title, Description & Dealership Action Bar */}
          <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white tracking-tight">
                {vehicle.name}
              </h2>
              {vehicle.description && (
                <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {vehicle.description}
                </p>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-6">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Starting from
                  </span>
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#00A3E0] tracking-tight">
                    {displayPrice}
                  </span>
                </div>
                {seating && (
                  <div className="border-l border-slate-700 pl-4">
                    <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      Seating Capacity
                    </span>
                    <span className="text-sm sm:text-base font-bold text-slate-200">
                      {seating}
                    </span>
                  </div>
                )}
                <div className="border-l border-slate-700 pl-4 hidden sm:block">
                  <span className="block text-[11px] uppercase tracking-wider text-emerald-400 font-bold">
                    Official Dealership
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {site.name} • Gorakhpur, UP
                  </span>
                </div>
              </div>
            </div>

            {/* Dealership Action Buttons (Enquire Now, Book Test Drive, Download Brochure) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Enquire Now -> Dealership Enquiry Modal */}
              <button
                type="button"
                onClick={onEnquire}
                className="group relative inline-flex items-center justify-center bg-white hover:bg-[#006CB5] transition-all duration-300 shadow-lg px-7 py-3 cursor-pointer"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span className="font-display text-xs sm:text-sm font-black tracking-wider text-slate-900 group-hover:text-white transition-colors duration-200 uppercase">
                  Enquire Now
                </span>
              </button>

              {/* Book Test Drive -> Dealership Test Drive Modal */}
              <button
                type="button"
                onClick={onTestDrive}
                className="group relative inline-flex items-center justify-center bg-[#006CB5] hover:bg-blue-700 transition-all duration-300 shadow-lg px-7 py-3 cursor-pointer text-white"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <span className="font-display text-xs sm:text-sm font-black tracking-wider transition-colors duration-200 uppercase">
                  Book Test Drive
                </span>
              </button>

              {/* Download Brochure via WhatsApp */}
              <a
                href={`https://wa.me/918429540902?text=${encodeURIComponent(
                  `*BROCHURE REQUEST - IAW FORCE*\n\nPlease share official brochure and on-road price breakdown for *${vehicle.name}*.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 bg-[#0074C3] hover:bg-[#006CB5] transition-all duration-300 shadow-lg px-6 py-3 cursor-pointer text-white"
                style={{
                  clipPath:
                    "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
                }}
              >
                <svg
                  className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-display text-xs sm:text-sm font-extrabold tracking-wider uppercase">
                  Download Brochure
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 2. SALIENT FEATURES / CALLOUT ARROWS SECTION (Matching Image 3)
// =========================================================================
export function SalientFeaturesSection({ vehicle }: { vehicle: VehicleData }) {
  const calloutImg = vehicle.calloutImage || getVehicleCalloutImage(vehicle);
  const specs = vehicle.specifications;

  // Adaptive highlights based on vehicle data
  const engineParam = specs.engine
    ? `${specs.engine}, ${specs.power || "90 hp"}`
    : "Mercedes-Derived FM 2.6CR, Common Rail";

  const seatingParam = specs.seatingCapacity || "Spacious Layout";
  const suspensionParam = specs.suspension
    ? specs.suspension.split(";")[0]
    : "Independent Front Suspension";
  const brakesParam = specs.brakes || "Dual Circuit with ABS & EBD";

  return (
    <div className="relative w-full bg-gradient-to-b from-[#0F141E] via-[#0F141E] to-[#F1F5F9] py-16 sm:py-24 overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block text-xs font-extrabold tracking-[0.25em] text-[#00A3E0] uppercase">
            ENGINEERING HIGHLIGHTS
          </span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Key Architecture & Features
          </h3>
        </div>

        {/* Interactive Feature Graphic with Curved Blue Callout Arrows (Matching User Image) */}
        <div className="relative h-[340px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center overflow-hidden">
          {/* Fixed Canvas that scales down for smaller screens */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] -mt-[300px] -ml-[400px] z-20 transform scale-[0.45] sm:scale-[0.65] md:scale-80 lg:scale-100 origin-center">
            
            {/* Ground Soft Contact Shadow */}
            <div className="absolute bottom-[10px] left-1/2 -ml-[250px] w-[500px] h-8 rounded-full bg-black/60 blur-xl z-0" />

            {/* Background Car Image */}
            <div className="absolute bottom-[20px] left-1/2 -ml-[250px] w-[500px] flex justify-center items-end z-10">
              <img
                src={calloutImg}
                alt={vehicle.name}
                className="max-w-full max-h-[300px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)] select-none"
              />
            </div>

            {/* SVG Arrows Overlay */}
            <svg width="800" height="600" viewBox="0 0 800 600" className="absolute inset-0 pointer-events-none z-20">
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6" fill="#00A3E0" />
                </marker>
              </defs>

              {/* Engine */}
              <path d="M 280,320 Q 200,360 190,440" fill="none" stroke="#00A3E0" strokeWidth="2" markerEnd="url(#arrowhead)" />
              {/* Seating */}
              <path d="M 320,270 Q 240,200 180,260" fill="none" stroke="#00A3E0" strokeWidth="2" markerEnd="url(#arrowhead)" />
              {/* Comfort */}
              <path d="M 400,260 Q 400,200 400,160" fill="none" stroke="#00A3E0" strokeWidth="2" markerEnd="url(#arrowhead)" />
              {/* Convenience */}
              <path d="M 480,270 Q 560,200 620,260" fill="none" stroke="#00A3E0" strokeWidth="2" markerEnd="url(#arrowhead)" />
              {/* Safety */}
              <path d="M 520,320 Q 600,360 610,440" fill="none" stroke="#00A3E0" strokeWidth="2" markerEnd="url(#arrowhead)" />
            </svg>

            {/* 1. Engine Parameters */}
            <div className="absolute top-[420px] left-0 w-[180px] text-left z-30">
              <span className="text-[14px] font-bold text-[#00A3E0] tracking-wider uppercase">Engine Parameters</span>
              <p className="font-display text-[16px] font-extrabold text-white mt-1 leading-snug">{engineParam}</p>
            </div>

            {/* 2. Seating Capacity */}
            <div className="absolute top-[240px] left-0 w-[170px] text-left z-30">
              <span className="text-[14px] font-bold text-[#00A3E0] tracking-wider uppercase">Seating Capacity</span>
              <p className="font-display text-[16px] font-extrabold text-white mt-1 leading-snug">{seatingParam}</p>
            </div>

            {/* 3. Comfort */}
            <div className="absolute top-[90px] left-[300px] w-[200px] text-center z-30">
              <span className="text-[14px] font-bold text-[#00A3E0] tracking-wider uppercase">Comfort</span>
              <p className="font-display text-[16px] font-extrabold text-white mt-1 leading-snug">Monocoque body, low NVH</p>
            </div>

            {/* 4. Convenience */}
            <div className="absolute top-[240px] right-0 w-[170px] text-left z-30">
              <span className="text-[14px] font-bold text-[#00A3E0] tracking-wider uppercase">Convenience</span>
              <p className="font-display text-[16px] font-extrabold text-white mt-1 leading-snug">Easy entry-exit, CE coated body</p>
            </div>

            {/* 5. Safety */}
            <div className="absolute top-[420px] right-0 w-[180px] text-left z-30">
              <span className="text-[14px] font-bold text-[#00A3E0] tracking-wider uppercase">Safety</span>
              <p className="font-display text-[16px] font-extrabold text-white mt-1 leading-snug">{brakesParam}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 3. SPECIFICATIONS ACCORDION (Matching Image 4 from Force Motors)
// =========================================================================
export function SpecificationsSection({
  specs,
}: {
  specs: VehicleData["specifications"];
}) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    seating: true,
    engine: true,
    dimensions: false,
    suspension: false,
    brakes: false,
  });

  const toggle = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const sections = [
    {
      id: "seating",
      title: "Seating Capacity",
      items: [
        {
          label: "Seating Layout",
          value: specs.seatingCapacity || "Configurable per requirement",
        },
      ],
    },
    {
      id: "engine",
      title: "Engine & Transmission",
      items: [
        {
          label: "Engine Model",
          value: specs.engine || "Mercedes-Derived FM 2.6 CR ED",
        },
        {
          label: "Displacement",
          value: specs.engineCapacity || "2596 cc",
        },
        {
          label: "Max Output",
          value: specs.power || "115 hp @ 2800 rpm",
        },
        {
          label: "Max Torque",
          value: specs.torque || "350 Nm @ 1400 - 2400 rpm",
        },
        {
          label: "Transmission",
          value: specs.transmission || "5-Speed Synchromesh Manual",
        },
        {
          label: "Fuel Type / Emission",
          value: `${specs.fuelType || "Diesel"} / BS-VI Stage 2`,
        },
      ],
    },
    {
      id: "dimensions",
      title: "Dimensions & Capacity",
      items: [
        {
          label: "Wheelbase",
          value: specs.wheelbase || "3350 mm",
        },
        {
          label: "Dimensions (L x W x H)",
          value: specs.dimensions || "5120 x 1818 x 2027 mm",
        },
        {
          label: "Ground Clearance",
          value: specs.groundClearance || "191 mm - 210 mm",
        },
        {
          label: "Maximum GVW",
          value: specs.gvw || "3675 kg - 4475 kg",
        },
      ],
    },
    {
      id: "suspension",
      title: "Suspension & Steering",
      items: [
        {
          label: "Front Suspension",
          value: specs.suspension
            ? specs.suspension.split(";")[0]
            : "Semi-Elliptical Leaf Springs / Independent Torsion Bar",
        },
        {
          label: "Rear Suspension",
          value: specs.suspension && specs.suspension.includes("Rear:")
            ? specs.suspension.split("Rear:")[1]
            : "Parabolic Leaf Springs with Hydraulic Shock Absorbers",
        },
        {
          label: "Steering",
          value: "Power Steering with Tilt & Telescopic Adjustment",
        },
      ],
    },
    {
      id: "brakes",
      title: "Brakes & Tyres",
      items: [
        {
          label: "Brake System",
          value: specs.brakes || "Dual Circuit Hydraulic with Vacuum Assist",
        },
        {
          label: "ABS & EBD",
          value: "Standard 4-Wheel Anti-lock Braking with EBD",
        },
        {
          label: "Tyre Size",
          value: specs.tyres || "215/75 R15 LT Radial Tubeless",
        },
      ],
    },
  ];

  return (
    <div className="py-20 bg-[#0B0F19] text-white">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[#00A3E0] uppercase">
            TECHNICAL SPECIFICATIONS
          </span>
          <h3 className="mt-2 font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Detailed Technical Specifications
          </h3>
        </div>

        {/* Expandable Accordion List (Matching Image 4) */}
        <div className="space-y-4">
          {sections.map((sec) => {
            const isOpen = !!openSections[sec.id];
            return (
              <div
                key={sec.id}
                className="overflow-hidden rounded-lg border border-slate-800 shadow-md"
              >
                {/* Accordion Tab Header with Blue Left Accent and +/- Sign */}
                <button
                  type="button"
                  onClick={() => toggle(sec.id)}
                  className="w-full flex items-center justify-between bg-[#151C2C] hover:bg-[#1A2336] transition-colors py-4 px-6 text-left font-display text-base sm:text-lg font-bold text-white border-l-4 border-[#006CB5]"
                >
                  <span>{sec.title}</span>
                  <span className="text-xl sm:text-2xl font-normal leading-none pr-2">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded Content Panel */}
                {isOpen && (
                  <div className="bg-[#0E1320] text-slate-200 px-6 py-6 border-t border-slate-800 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                      {sec.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between border-b border-slate-800/80 pb-2 text-xs sm:text-sm"
                        >
                          <span className="text-slate-400 font-medium">
                            {item.label}
                          </span>
                          <span className="text-white font-bold text-right ml-4">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 4. KEY FEATURES SECTION
// =========================================================================
export function FeaturesSection({
  features,
}: {
  features: VehicleData["features"];
}) {
  if (!features || features.length === 0) return null;
  return (
    <div className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h3 className="font-display text-2xl sm:text-4xl font-black text-slate-950 mb-10 text-center tracking-tight">
          Comprehensive Feature Matrix
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureGroup, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-[#006CB5] text-white flex items-center justify-center">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900">
                  {featureGroup.category}
                </h4>
              </div>
              <ul className="space-y-3">
                {featureGroup.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <span className="text-[#006CB5] mt-0.5 font-bold">•</span>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 5. AUTHORIZED DEALERSHIP SECTION (Dealer Details & Direct Enquiry)
// =========================================================================
export function DealershipSection({
  vehicle,
  onEnquire,
  onTestDrive,
}: {
  vehicle: VehicleData;
  onEnquire: () => void;
  onTestDrive: () => void;
}) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-[#0C1220] to-[#0A0E17] text-white relative overflow-hidden border-t border-slate-800">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#006CB5]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-900/40 border border-blue-500/30 px-4 py-1.5 text-xs font-bold text-[#00A3E0] uppercase tracking-wider mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Authorized Force Motors Dealership
          </div>
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Book {vehicle.name} with {site.legalName}
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Your authorized destination for Force Motors vehicle sales, genuine OEM parts, expert maintenance, and fleet financing across {site.city} and {site.region}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Showroom & Facility Details */}
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700/70 rounded-2xl p-7 flex flex-col justify-between hover:border-[#006CB5] transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-[#006CB5]/20 text-[#00A3E0] flex items-center justify-center font-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">Gorakhpur Facility</h4>
                  <span className="text-xs text-slate-400">Authorized Sales & Service Station</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <span className="text-xs text-[#00A3E0] font-bold uppercase tracking-wider block">Address</span>
                  <p className="mt-1 font-medium text-white">{site.addressLine}, {site.locality}</p>
                </div>

                <div>
                  <span className="text-xs text-[#00A3E0] font-bold uppercase tracking-wider block">Showroom Timings</span>
                  <p className="mt-1 font-medium text-white">
                    {site.hours[0].days}: {site.hours[0].time}
                  </p>
                  <p className="font-medium text-slate-300">
                    {site.hours[1].days}: {site.hours[1].time}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700/60">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#00A3E0] hover:text-white transition-colors"
              >
                <span>Open in Google Maps</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Card 2: Instant Help & Sales Desk */}
          <div className="bg-slate-800/60 backdrop-blur border border-slate-700/70 rounded-2xl p-7 flex flex-col justify-between hover:border-[#006CB5] transition-colors">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-white">Dealership Desk</h4>
                  <span className="text-xs text-slate-400">Direct Sales & Booking Support</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div>
                  <span className="text-xs text-[#00A3E0] font-bold uppercase tracking-wider block">Toll-Free Hotline</span>
                  <a
                    href={site.phoneHref}
                    className="mt-1 text-lg font-black text-white hover:text-[#00A3E0] transition-colors block"
                  >
                    {site.phone}
                  </a>
                </div>

                <div>
                  <span className="text-xs text-[#00A3E0] font-bold uppercase tracking-wider block">WhatsApp Sales Desk</span>
                  <a
                    href={`https://wa.me/918429540902?text=${encodeURIComponent(
                      `*VEHICLE ENQUIRY - IAW FORCE*\n\nHello, I am enquiring about the *${vehicle.name}*. Please share on-road price breakdown in Gorakhpur and current stock availability.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-bold text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{site.whatsapp}</span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-bold">Online</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs text-[#00A3E0] font-bold uppercase tracking-wider block">Official Email</span>
                  <a href={site.emailHref} className="mt-1 text-white hover:text-[#00A3E0] transition-colors block">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
              <span>GST & RTO Certified</span>
              <span>Fast Commercial Approvals</span>
            </div>
          </div>

          {/* Card 3: Dealership Assurances & Quick Action CTAs */}
          <div className="bg-gradient-to-br from-[#006CB5]/30 to-[#0A0E17] border border-[#006CB5]/60 rounded-2xl p-7 flex flex-col justify-between shadow-2xl">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#00A3E0] block mb-2">
                EXCLUSIVE DEALERSHIP BENEFITS
              </span>
              <h4 className="font-display text-xl font-black text-white mb-4">
                Assured Ownership with IAW Force
              </h4>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00A3E0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>100% Factory Authorized Warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00A3E0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Lowest Interest Fleet Finance Partnerships</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00A3E0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Certified Technicians & Genuine Spare Parts</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#00A3E0] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Doorstep Test Drive across Gorakhpur</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onEnquire}
                className="flex-1 bg-white hover:bg-slate-100 text-slate-950 font-display font-black text-xs py-3.5 px-4 rounded-xl text-center shadow-lg transition-all"
              >
                ENQUIRE NOW
              </button>
              <button
                type="button"
                onClick={onTestDrive}
                className="flex-1 bg-[#006CB5] hover:bg-blue-600 text-white font-display font-black text-xs py-3.5 px-4 rounded-xl text-center shadow-lg transition-all border border-blue-400/40"
              >
                BOOK TEST DRIVE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================================
// 6. SIMILAR VEHICLES SECTION
// =========================================================================
export function SimilarVehiclesSection({
  vehicles,
}: {
  vehicles: VehicleData[];
}) {
  if (!vehicles || vehicles.length === 0) return null;
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h3 className="font-display text-2xl sm:text-4xl font-black text-slate-950 mb-10 text-center tracking-tight">
          Explore Related Models
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <Link
              key={v.id + v.slug}
              to="/vehicles/$slug"
              params={{ slug: v.slug }}
              className="block group"
            >
              <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#006CB5]">
                <div className="h-52 bg-white p-6 flex items-center justify-center border-b border-slate-100">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold tracking-wider text-[#006CB5] uppercase mb-1">
                    {v.categoryBadge}
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#006CB5] transition-colors">
                    {v.name}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {v.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
