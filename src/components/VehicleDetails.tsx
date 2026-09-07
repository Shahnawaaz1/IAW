import { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { VehicleData } from "@/data/vehicles";
import { Card3D } from "@/components/ui/Card3D";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";

// --- HERO SECTION ---
export function HeroSection({ vehicle, onEnquire, onTestDrive }: { vehicle: VehicleData, onEnquire: () => void, onTestDrive: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    try {
      const { gsap } = useGsap();
      const ctx = gsap.context(() => {
        gsap.fromTo("[data-hero-header]", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
        gsap.fromTo("[data-hero-image]", { scale: 0.9, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });
      }, el);
      return () => ctx.revert();
    } catch (e) {}
  }, []);

  return (
    <div ref={sectionRef as any} className="relative w-full bg-white overflow-hidden pb-16 pt-8 md:pt-16 border-b border-slate-200">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-100 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 hover:text-[#006CB5] transition-colors mb-8">
          <span>←</span> BACK TO ALL VEHICLES
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-hero-header className="will-change-transform opacity-100">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-[#006CB5] uppercase">
              {vehicle.categoryBadge}
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-black tracking-tight text-[#0F172A] leading-tight">
              {vehicle.name}
            </h1>
            <h2 className="mt-4 text-xl md:text-2xl font-bold text-slate-700">
              {vehicle.tagline}
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
              {vehicle.description}
            </p>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={onEnquire}
                className="rounded-full bg-[#006CB5] px-8 py-4 text-sm font-bold tracking-[0.15em] text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                ENQUIRE NOW
              </button>
              <button
                onClick={onTestDrive}
                className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold tracking-[0.15em] text-slate-800 transition-all hover:border-[#006CB5] hover:text-[#006CB5]"
              >
                BOOK TEST DRIVE
              </button>
              {vehicle.officialUrl && (
                <a
                  href={vehicle.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-[#006CB5] bg-blue-50 px-8 py-4 text-sm font-bold tracking-[0.15em] text-[#006CB5] transition-all hover:bg-[#006CB5] hover:text-white inline-flex items-center gap-2"
                >
                  VIEW OFFICIAL PAGE
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              )}
            </div>
          </div>
          
          <div data-hero-image className="relative flex justify-center items-center will-change-transform opacity-100">
            <Card3D intensity={15} className="w-full max-w-xl">
              <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                <div className="absolute bottom-10 w-3/4 h-8 bg-slate-900/20 blur-xl rounded-[100%] [transform:translateZ(10px)] pointer-events-none"></div>
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-auto object-contain drop-shadow-2xl [transform:translateZ(40px)] hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Card3D>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SPECIFICATIONS SECTION ---
export function SpecificationsSection({ specs }: { specs: VehicleData["specifications"] }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    try {
      const { gsap } = useGsap();
      const ctx = gsap.context(() => {
        gsap.fromTo("[data-spec-card]", 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 80%" } }
        );
      }, el);
      return () => ctx.revert();
    } catch (e) {}
  }, []);

  const specList = [
    { label: "Engine", value: specs.engine, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Power", value: specs.power, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { label: "Torque", value: specs.torque, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
    { label: "Seating", value: specs.seatingCapacity, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
    { label: "Dimensions", value: specs.dimensions, icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" },
    { label: "Wheelbase", value: specs.wheelbase, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { label: "Transmission", value: specs.transmission, icon: "M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" },
    { label: "Fuel Type", value: specs.fuelType, icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" }
  ].filter(s => s.value);

  return (
    <div ref={sectionRef} className="py-20 border-b border-slate-200 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center uppercase tracking-tight">Technical Specifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {specList.map((stat, i) => (
            <div key={i} data-spec-card className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow will-change-transform opacity-100 flex flex-col items-center text-center">
              <div className="h-10 w-10 rounded-full bg-blue-50 text-[#006CB5] flex items-center justify-center mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <h4 className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase mb-1">{stat.label}</h4>
              <p className="text-sm md:text-base font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// --- FEATURES SECTION ---
export function FeaturesSection({ features }: { features: VehicleData["features"] }) {
  if (!features || features.length === 0) return null;
  return (
    <div className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center uppercase tracking-tight">Key Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((featureGroup, i) => (
            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-8 w-8 rounded-full bg-[#006CB5] text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-xl font-bold text-slate-900">{featureGroup.category}</h4>
              </div>
              <ul className="space-y-4">
                {featureGroup.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-[#006CB5] mt-1 text-lg leading-none">•</span>
                    <span className="text-slate-700 font-medium">{item}</span>
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

// --- SIMILAR VEHICLES SECTION ---
export function SimilarVehiclesSection({ vehicles }: { vehicles: VehicleData[] }) {
  if (!vehicles || vehicles.length === 0) return null;
  return (
    <div className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-10 text-center uppercase tracking-tight">Explore Similar Vehicles</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v) => (
            <Link key={v.id} to={`/vehicles/${v.slug}`} className="block group">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#006CB5]">
                <div className="h-48 bg-slate-50 p-6 flex items-center justify-center border-b border-slate-100">
                  <img src={v.image} alt={v.name} className="h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-bold tracking-wider text-[#006CB5] uppercase mb-2">{v.categoryBadge}</div>
                  <h4 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#006CB5] transition-colors">{v.name}</h4>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">{v.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
