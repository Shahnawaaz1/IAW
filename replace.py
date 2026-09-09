import re

with open('src/components/Sections.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new VehicleRange component
new_component = """export function VehicleRange() {
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
               FORCE MOTORS
             </h2>
             <h3 className="text-center font-display text-xl sm:text-2xl lg:text-3xl font-bold text-[#006CB5] mb-8 leading-tight">
               Pioneering Shared Passenger Mobility Solutions<br/>
               Over 6 Decades
             </h3>
           </div>
           
           <div data-fleet-header className="max-w-4xl mx-auto text-center space-y-5 text-sm sm:text-base font-semibold text-slate-800">
             <p>
               Founded in 1958 by Shri N. K. Firodia, we set out with a vision to make transportation accessible, reliable and efficient for the masses.<br/>
               Today, Force Motors is a fully integrated automobile company specializing in the design, development and manufacturing of vehicles, aggregates and components catering to the diverse customer needs globally.
             </p>
             <p>
               Led by Dr. Abhay Firodia, Force Motors endeavours to build best-in-class shared mobility solutions that keep pace with the changing demands of the customers across India and the world
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
}"""

pattern = re.compile(r'export function VehicleRange\(\) \{.*?\n\}\n\n/\* Traveller Application Showcase matching iawforce\.com \*/', re.DOTALL)
new_content = pattern.sub(new_component + "\n\n/* Traveller Application Showcase matching iawforce.com */", content)

with open('src/components/Sections.tsx', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Replaced VehicleRange successfully!")
