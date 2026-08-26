import { forwardRef } from "react";
import type { Vehicle } from "./vehicleData";

interface VehicleCardProps {
  vehicle: Vehicle;
  isFocused?: boolean;
}

export const VehicleCard = forwardRef<HTMLDivElement, VehicleCardProps>(
  function VehicleCard({ vehicle, isFocused = false }, ref) {
    return (
      <div
        ref={ref}
        style={{
          filter: isFocused ? "blur(8px)" : "blur(0px)",
          opacity: isFocused ? 0.25 : 1,
          transform: isFocused ? "scale(0.96)" : "scale(1)",
        }}
        className="w-full max-w-xl rounded-xl border border-slate-200/90 bg-white/95 p-6 sm:p-8 shadow-2xl shadow-slate-300/50 backdrop-blur-xl transition-all duration-500 will-change-transform"
      >
        {/* Top Header Strip: Category tag & Model Index */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#DC2626] animate-pulse" />
            <span className="rounded-full bg-red-50 border border-red-200/80 px-3 py-1 text-[10px] font-black tracking-[0.2em] text-[#DC2626] uppercase">
              {vehicle.categoryTag}
            </span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-slate-600">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">MODEL</span>
            <span className="font-display text-xs font-black tracking-widest text-[#0F172A]">
              {vehicle.index} / 04
            </span>
          </div>
        </div>

        {/* Primary Vehicle Title with Luxury Hierarchy */}
        <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A]">
          {vehicle.title}
        </h2>

        {/* Subtitle */}
        <h3 className="mt-2 text-xs sm:text-sm font-bold tracking-wider text-[#DC2626] uppercase">
          {vehicle.subtitle}
        </h3>

        {/* Description */}
        <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-slate-600">
          {vehicle.description}
        </p>

        {/* Executive Key Specs Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3.5 rounded-lg bg-slate-50/90 p-4 border border-slate-200/80 shadow-inner">
          <div className="flex items-start gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-xs shadow-sm">
              🪑
            </span>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Seating Capacity</span>
              <p className="text-xs font-black text-[#0F172A] mt-0.5">{vehicle.seating}</p>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white border border-slate-200 text-xs shadow-sm">
              ⚙️
            </span>
            <div>
              <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Engine Power</span>
              <p className="text-xs font-black text-[#0F172A] mt-0.5">{vehicle.engine}</p>
            </div>
          </div>
        </div>

        {/* Highlights List */}
        <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
          {vehicle.points.map((p) => (
            <li key={p} className="flex items-center gap-3 text-xs font-medium text-slate-700">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[10px] font-black text-[#DC2626]">
                ✓
              </span>
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap items-center gap-3.5">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-md bg-[#DC2626] px-7 py-3.5 text-xs font-bold tracking-[0.16em] text-white shadow-lg shadow-red-500/25 transition-all duration-300 hover:bg-red-700 hover:shadow-red-500/40 hover:-translate-y-0.5"
          >
            <span>{vehicle.cta}</span>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold tracking-[0.16em] text-slate-800 shadow-sm transition-all hover:border-[#DC2626] hover:bg-red-50/50 hover:text-[#DC2626]"
          >
            GET BROCHURE
          </a>
        </div>
      </div>
    );
  },
);
