import { useEffect, useRef } from "react";
import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer, FinalCta, FloatingWhatsApp } from "@/components/Sections2";
import { vehicles } from "@/components/VehicleScroll/vehicleData";
import { allCatalogVehicles } from "@/components/Sections";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";
import { Card3D } from "@/components/ui/Card3D";

export const Route = createFileRoute("/vehicle/$id")({
  loader: ({ params }) => {
    let vehicle = vehicles.find((v) => v.id === params.id) as any;
    if (!vehicle) {
      vehicle = allCatalogVehicles.find((v) => v.id === params.id);
    }
    if (!vehicle) {
      throw notFound();
    }
    return { vehicle };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.vehicle?.title ?? "Vehicle"} | IAW Force` },
      { name: "description", content: loaderData?.vehicle?.description ?? "" },
    ],
  }),
  component: VehiclePage,
});

function VehiclePage() {
  const { vehicle } = Route.useLoaderData();
  const sectionRef = useRef<HTMLElement>(null);

  const points = vehicle.points || vehicle.features || [];
  const badge = vehicle.categoryTag || vehicle.categoryBadge || "PREMIUM VEHICLE";

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || prefersReducedMotion()) return;
    
    // Check if gsap is available
    let ctx: any;
    try {
        const { gsap } = useGsap();
        ctx = gsap.context(() => {
          const header = el.querySelector("[data-hero-header]");
          const image = el.querySelector("[data-hero-image]");
          const stats = el.querySelectorAll("[data-stat-card]");
          const features = el.querySelectorAll("[data-feature-item]");

          if (header) {
            gsap.fromTo(header, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
          }
          if (image) {
            gsap.fromTo(image, { scale: 0.9, opacity: 0, y: 30 }, { scale: 1, opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });
          }
          if (stats.length > 0) {
            gsap.fromTo(stats, { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.7, delay: 0.4, ease: "power2.out" });
          }
          if (features.length > 0) {
            gsap.fromTo(features, { x: -20, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.1, duration: 0.6, delay: 0.6, ease: "power2.out" });
          }
        }, el);
    } catch (e) {}

    return () => ctx && ctx.revert();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow flex flex-col pt-24" ref={sectionRef}> 
        {/* Premium Hero Section */}
        <div className="relative w-full bg-white overflow-hidden pb-16 pt-8 md:pt-16 border-b border-slate-200">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-slate-100 blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-slate-500 hover:text-[#006CB5] transition-colors mb-8">
              <span>←</span> BACK TO ALL VEHICLES
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-hero-header className="will-change-transform opacity-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold tracking-[0.2em] text-[#006CB5] uppercase">
                  {badge}
                </div>
                <h1 className="mt-6 font-display text-4xl md:text-6xl font-black tracking-tight text-[#0F172A] leading-tight">
                  {vehicle.title}
                </h1>
                <h2 className="mt-4 text-xl md:text-2xl font-bold text-slate-700">
                  {vehicle.subtitle}
                </h2>
                <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-lg">
                  {vehicle.description}
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded-full bg-[#006CB5] px-8 py-4 text-sm font-bold tracking-[0.15em] text-white shadow-lg shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/50 hover:-translate-y-0.5"
                  >
                    {vehicle.cta || "ENQUIRE NOW"}
                  </a>
                  <a
                    href={`https://wa.me/918429540902?text=${encodeURIComponent(`*VEHICLE ENQUIRY*\n\nI want to know more about ${vehicle.title}. Please share the brochure and pricing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-sm font-bold tracking-[0.15em] text-slate-800 transition-all hover:border-[#006CB5] hover:text-[#006CB5]"
                  >
                    WHATSAPP US
                  </a>
                </div>
              </div>
              
              <div data-hero-image className="relative flex justify-center items-center will-change-transform opacity-100">
                <Card3D intensity={15} className="w-full max-w-xl">
                  <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                    {/* Shadow under vehicle */}
                    <div className="absolute bottom-10 w-3/4 h-8 bg-slate-900/20 blur-xl rounded-[100%] [transform:translateZ(10px)] pointer-events-none"></div>
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.title} 
                      className="w-full h-auto object-contain drop-shadow-2xl [transform:translateZ(40px)] hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Card3D>
              </div>
            </div>
          </div>
        </div>

        {/* Specs and Details Section */}
        <div className="bg-[#F8FAFC] py-20 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { label: "SEATING CAPACITY", value: vehicle.seating, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                { label: "ENGINE & POWER", value: vehicle.engine, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                { label: "IDEAL APPLICATION", value: vehicle.application, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
              ].map((stat, i) => (
                <div key={i} data-stat-card className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow will-change-transform opacity-100">
                  <div className="h-12 w-12 rounded-full bg-blue-50 text-[#006CB5] flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xs font-bold tracking-[0.15em] text-slate-500 uppercase mb-2">{stat.label}</h3>
                  <p className="text-lg font-bold text-slate-900">{stat.value}</p>
                </div>
              ))}
            </div>

            {points.length > 0 && (
              <div className="bg-white rounded-3xl p-10 md:p-14 border border-slate-200 shadow-sm">
                <div className="max-w-3xl">
                  <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-8">
                    KEY HIGHLIGHTS & FEATURES
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {points.map((point: string, i: number) => (
                      <div key={i} data-feature-item className="flex items-start gap-4 will-change-transform opacity-100">
                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <svg className="w-4 h-4 text-[#006CB5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-slate-700 font-medium leading-relaxed">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Contact/Enquiry Section */}
        <div id="contact">
          <FinalCta />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
