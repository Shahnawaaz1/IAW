import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

// Showcase vehicle transparent cutouts
import travellerHero from "@/assets/showcase/traveller-hero.png";
import urbaniaHero from "@/assets/showcase/urbania-hero.png";
import monobusHero from "@/assets/showcase/monobus-hero.png";
import traxHero from "@/assets/showcase/trax-hero.png";
import specialHero from "@/assets/showcase/special-hero.png";
import gurkhaHero from "@/assets/showcase/gurkha-hero.png";
import evHero from "@/assets/showcase/ev-hero.png";

// Scenic road / mountain backgrounds
import travellerBg from "@/assets/showcase/traveller-bg.jpg";
import urbaniaBg from "@/assets/showcase/urbania-bg.jpg";
import monobusBg from "@/assets/showcase/monobus-bg.jpg";
import traxBg from "@/assets/showcase/trax-bg.jpg";
import specialBg from "@/assets/showcase/special-bg.jpg";
import gurkhaBg from "@/assets/showcase/gurkha-bg.jpg";
import evBg from "@/assets/showcase/ev-bg.jpg";

export interface ShowcaseVehicle {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  watermark: string;
  vehicleImg: string;
  bgImg: string;
  slug: string;
  category: "traveller" | "urbania" | "monobus" | "trax" | "special" | "gurkha" | "ev";
}

export const showcaseVehicles: ShowcaseVehicle[] = [
  {
    id: "traveller",
    tabLabel: "Traveller N",
    title: "Traveller N",
    description:
      "The Force Traveller range dominates the light commercial vehicle segment with over 65% market share.",
    watermark: "Traveller",
    vehicleImg: travellerHero,
    bgImg: travellerBg,
    slug: "traveller-n-3050wb",
    category: "traveller",
  },
  {
    id: "urbania",
    tabLabel: "Urbania DX",
    title: "Urbania DX",
    description:
      "A new ground-up modular monocoque passenger van platform marking the beginning of modern, globally inspired urban mobility.",
    watermark: "Urbania",
    vehicleImg: urbaniaHero,
    bgImg: urbaniaBg,
    slug: "urbania",
    category: "urbania",
  },
  {
    id: "monobus",
    tabLabel: "Monobus",
    title: "Monobus",
    description:
      "The Force Monobus delivers efficient, reliable transport solutions tailored for passenger commutes & school transportation.",
    watermark: "Monobus",
    vehicleImg: monobusHero,
    bgImg: monobusBg,
    slug: "monobus",
    category: "monobus",
  },
  {
    id: "trax",
    tabLabel: "Trax",
    title: "Trax",
    description:
      "The Force Trax range handles passenger, school, cargo & emergency transport across various terrains with trusted durability.",
    watermark: "Trax",
    vehicleImg: traxHero,
    bgImg: traxBg,
    slug: "trax-cruiser",
    category: "trax",
  },
  {
    id: "special",
    tabLabel: "Special Applications",
    title: "Special Applications",
    description:
      "Force specialty vehicles cover cash vans, quick responders & crew transport built for critical, high-performance operations.",
    watermark: "Special",
    vehicleImg: specialHero,
    bgImg: specialBg,
    slug: "special-applications",
    category: "special",
  },
  {
    id: "gurkha",
    tabLabel: "Gurkha",
    title: "Gurkha",
    description:
      "The Force Gurkha blends endurance, reliability & off-roading strength, built for explorers who go beyond conventional roads.",
    watermark: "Gurkha",
    vehicleImg: gurkhaHero,
    bgImg: gurkhaBg,
    slug: "gurkha",
    category: "gurkha",
  },
  {
    id: "ev",
    tabLabel: "EV",
    title: "EV",
    description:
      "The Force e-Traveller Smart Citibus is India’s first monocoque e-van for clean last-mile and shared mobility.",
    watermark: "Force EV",
    vehicleImg: evHero,
    bgImg: evBg,
    slug: "e-traveller-smart-citibus-ev",
    category: "ev",
  },
];

interface VehicleShowcaseBannerProps {
  activeId: string;
  onSelectVehicle: (id: string) => void;
}

export function VehicleShowcaseBanner({
  activeId,
  onSelectVehicle,
}: VehicleShowcaseBannerProps) {
  const navigate = useNavigate();
  const fallbackVehicle: ShowcaseVehicle = showcaseVehicles[0];
  const current: ShowcaseVehicle =
    showcaseVehicles.find((v) => v.id === activeId) ?? fallbackVehicle;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl border border-slate-800/40 bg-[#0F141E]">
      {/* Dynamic Scenic Background Image with Smooth Crossfade */}
      <div className="absolute inset-0 z-0">
        {showcaseVehicles.map((v) => (
          <div
            key={v.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              v.id === current.id ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={v.bgImg}
              alt={v.title}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}

        {/* Diagonal Dark Split Overlay matching Force official design */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-r from-[#111622] via-[#111622]/95 to-transparent hidden md:block"
          style={{
            clipPath: "polygon(0 0, 68% 0, 48% 100%, 0 100%)",
          }}
        />
        {/* Mobile / Tablet dark backdrop overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#111622] via-[#111622]/85 to-[#111622]/40 md:hidden" />
      </div>

      {/* Subtle giant angled watermark text in the dark section */}
      <div className="pointer-events-none absolute -left-10 top-1/2 z-10 -translate-y-1/2 select-none overflow-hidden">
        <span
          className="block font-display text-[80px] sm:text-[130px] lg:text-[160px] font-black uppercase tracking-tight text-white/[0.04] transition-all duration-700 ease-out whitespace-nowrap"
          style={{ transform: "rotate(-32deg) translateY(-20px)" }}
        >
          {current.watermark}
        </span>
      </div>

      {/* Main Showcase Hero Content Area */}
      <div className="relative z-20 mx-auto min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between px-6 sm:px-10 lg:px-14 pt-10 sm:pt-14 pb-20 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
          {/* Left Column: Brand Badge, Vehicle Name, Tagline & Read More Button */}
          <div className="lg:col-span-6 z-20 flex flex-col items-start justify-center max-w-xl">
            {/* Find your Force split badge */}
            <div className="inline-flex items-center overflow-hidden rounded-[4px] shadow-lg border border-slate-700/40">
              <span className="bg-[#242b3a] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-white tracking-wider">
                Find your
              </span>
              <span className="bg-[#006CB5] px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-white tracking-wider">
                Force
              </span>
            </div>

            {/* Vehicle Title */}
            <h2 className="mt-6 sm:mt-8 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white drop-shadow-md transition-all duration-300">
              {current.title}
            </h2>

            {/* Vehicle Description */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed text-slate-200/95 max-w-lg drop-shadow">
              {current.description}
            </p>

            {/* Read More Angled Button */}
            <div className="mt-7 sm:mt-9">
              <button
                type="button"
                onClick={() =>
                  navigate({
                    to: "/vehicles/$slug",
                    params: { slug: current.slug },
                  } as any)
                }
                className="group relative inline-flex items-center justify-center bg-white hover:bg-[#006CB5] transition-all duration-300 shadow-xl px-8 py-3 cursor-pointer"
                style={{
                  clipPath:
                    "polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%)",
                }}
              >
                <span className="font-display text-xs sm:text-sm font-extrabold tracking-wider text-slate-950 group-hover:text-white transition-colors duration-300 uppercase">
                  Read More
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Transparent Vehicle PNG Cutout resting on the Road */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end min-h-[260px] sm:min-h-[340px] lg:min-h-[420px]">
            {/* Ground Contact Shadow */}
            <div className="pointer-events-none absolute bottom-4 sm:bottom-8 lg:bottom-12 w-4/5 max-w-[460px] h-6 sm:h-8 rounded-full bg-black/65 blur-lg" />

            {/* Vehicles crossfade container */}
            {showcaseVehicles.map((v) => (
              <div
                key={v.id}
                className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-all duration-600 ease-out ${
                  v.id === current.id
                    ? "opacity-100 scale-100 translate-x-0"
                    : "opacity-0 scale-95 translate-x-6 pointer-events-none"
                }`}
              >
                <img
                  src={v.vehicleImg}
                  alt={v.title}
                  className="max-h-[250px] sm:max-h-[340px] lg:max-h-[400px] w-auto max-w-full select-none object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Angled White Navigation Bar matching Image 2 */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex">
        <div
          className="relative bg-white shadow-2xl flex items-center max-w-full overflow-x-auto no-scrollbar"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, calc(100% - 24px) 100%, 0 100%)",
          }}
        >
          <nav
            aria-label="Vehicle Models Navigation"
            className="flex items-center min-w-max pr-8 sm:pr-10"
          >
            {showcaseVehicles.map((v) => {
              const isActive = v.id === current.id;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => onSelectVehicle(v.id)}
                  className={`group relative px-4 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#006CB5] font-bold"
                      : "text-slate-600 hover:text-[#006CB5]"
                  }`}
                >
                  <span>{v.tabLabel}</span>

                  {/* Active Blue Bottom Underline Indicator */}
                  {isActive && (
                    <span className="absolute inset-x-0 bottom-0 h-[3px] sm:h-[4px] bg-[#006CB5] transition-all" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
