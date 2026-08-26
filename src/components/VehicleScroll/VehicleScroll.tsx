import { useEffect, useRef, useState } from "react";
import { vehicles } from "./vehicleData";
import { VehicleVisual } from "./VehicleVisual";
import { VehicleCard } from "./VehicleCard";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";

export function VehicleScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visualRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Desktop & Tablet (>= 768px) Pinned GSAP Scroll Animation
  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion() || isMobile) return;

    const { gsap, ScrollTrigger } = useGsap();

    const ctx = gsap.context(() => {
      const numVehicles = vehicles.length; // 4

      // Initialize all layers with offscreen entrance coordinates
      vehicles.forEach((_, i) => {
        const layer = layerRefs.current[i];
        const visual = visualRefs.current[i];
        const card = cardRefs.current[i];
        if (!layer || !visual || !card) return;

        const isEven = i % 2 === 0; // 0=Left, 1=Right, 2=Left, 3=Right
        const enterXVisual = isEven ? -50 : 50;
        const enterXCard = isEven ? 50 : -50;

        // All vehicles (including Vehicle 0) start in prepared entrance position
        gsap.set(layer, { autoAlpha: i === 0 ? 1 : 0, zIndex: i === 0 ? 10 : 5 });
        gsap.set(visual, { xPercent: enterXVisual, scale: 0.9, autoAlpha: 0 });
        gsap.set(card, { xPercent: enterXCard, scale: 0.94, autoAlpha: 0 });
      });

      // Master GSAP scrubbed timeline with smooth spring damping
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${numVehicles * 130}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: () => {
            setFocusedIndex(null);
          },
        },
      });

      // PHASE 0: VEHICLE 0 ENTRANCE ANIMATION (From Hero into Showcase)
      const v0Visual = visualRefs.current[0];
      const v0Card = cardRefs.current[0];
      if (v0Visual && v0Card) {
        masterTl
          .fromTo(
            v0Visual,
            { xPercent: -50, scale: 0.9, autoAlpha: 0 },
            { xPercent: 0, scale: 1, autoAlpha: 1, duration: 0.28, ease: "power2.out" },
            0,
          )
          .fromTo(
            v0Card,
            { xPercent: 50, scale: 0.94, autoAlpha: 0 },
            { xPercent: 0, scale: 1, autoAlpha: 1, duration: 0.28, ease: "power2.out" },
            0,
          );
      }

      // SEQUENTIAL CROSS-TRANSITIONS (v0 -> v1 -> v2 -> v3)
      for (let i = 0; i < numVehicles - 1; i++) {
        const currLayer = layerRefs.current[i];
        const currVisual = visualRefs.current[i];
        const currCard = cardRefs.current[i];

        const nextLayer = layerRefs.current[i + 1];
        const nextVisual = visualRefs.current[i + 1];
        const nextCard = cardRefs.current[i + 1];

        if (!currLayer || !currVisual || !currCard || !nextLayer || !nextVisual || !nextCard) continue;

        const isCurrEven = i % 2 === 0;
        const isNextEven = (i + 1) % 2 === 0;

        const exitXVisual = isCurrEven ? -40 : 40;
        const exitXCard = isCurrEven ? 40 : -40;

        const enterXVisual = isNextEven ? -50 : 50;
        const enterXCard = isNextEven ? 50 : -50;

        const tStart = 0.35 + i * 1.0;
        const tDuration = 0.35;

        // Current vehicle exits
        masterTl
          .to(
            currVisual,
            { xPercent: exitXVisual, autoAlpha: 0, scale: 0.92, duration: tDuration, ease: "power2.inOut" },
            tStart,
          )
          .to(
            currCard,
            { xPercent: exitXCard, autoAlpha: 0, scale: 0.94, duration: tDuration, ease: "power2.inOut" },
            tStart,
          )
          .to(currLayer, { autoAlpha: 0, duration: tDuration, ease: "power2.inOut" }, tStart);

        // Next vehicle enters at same timestamp
        masterTl
          .fromTo(nextLayer, { autoAlpha: 0, zIndex: 10 }, { autoAlpha: 1, duration: tDuration, ease: "power2.out" }, tStart)
          .fromTo(nextVisual, { xPercent: enterXVisual, autoAlpha: 0, scale: 0.9 }, { xPercent: 0, autoAlpha: 1, scale: 1, duration: tDuration, ease: "power2.out" }, tStart)
          .fromTo(nextCard, { xPercent: enterXCard, autoAlpha: 0, scale: 0.94 }, { xPercent: 0, autoAlpha: 1, scale: 1, duration: tDuration, ease: "power2.out" }, tStart);
      }

      // Final hold buffer
      masterTl.to({}, { duration: 0.25 });
    }, container);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [isMobile]);

  // Mobile (< 768px) ScrollTrigger Animation for each vehicle
  useEffect(() => {
    if (!isMobile || prefersReducedMotion()) return;
    const { gsap } = useGsap();

    const ctx = gsap.context(() => {
      mobileCardRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { y: 45, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef.current || undefined);

    return () => ctx.revert();
  }, [isMobile]);

  const toggleFocus = (idx: number) => {
    setFocusedIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="vehicles"
      ref={containerRef}
      aria-label="Force vehicle range showcase"
      className="relative bg-[#F8FAFC] border-b border-slate-200"
    >
      {/* MOBILE VIEW (< 768px): Staggered Animated Showcase */}
      {isMobile ? (
        <div className="py-16 px-4 space-y-12">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-[#DC2626] uppercase">
              FEATURED VEHICLE SHOWCASE
            </span>
            <h2 className="mt-2 font-display text-3xl font-black text-[#0F172A]">
              POPULAR FORCE MODELS
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Tap on any vehicle to zoom and view specifications.
            </p>
          </div>

          {vehicles.map((v, i) => {
            const isFocused = focusedIndex === i;
            return (
              <div
                key={v.id}
                ref={(el) => {
                  mobileCardRefs.current[i] = el;
                }}
                className="space-y-6 will-change-transform"
              >
                <div className="flex justify-center">
                  <VehicleVisual
                    image={v.image}
                    model={v.model}
                    alt={`Force ${v.title} at IAW Force Gorakhpur`}
                    priority={i === 0}
                    isFocused={isFocused}
                    onToggleFocus={() => toggleFocus(i)}
                    className="w-full max-w-[340px]"
                  />
                </div>
                <VehicleCard vehicle={v} isFocused={isFocused} />
              </div>
            );
          })}
        </div>
      ) : (
        /* DESKTOP & TABLET VIEW (>= 768px): Pinned Interactive Storytelling Timeline */
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden pt-28 pb-12 md:pt-32 md:pb-16">
          {/* Dynamic ambient radial floor glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40 transition-all duration-500"
            style={{
              background:
                focusedIndex !== null
                  ? "radial-gradient(75% 65% at 50% 50%, rgba(220, 38, 38, 0.15), transparent 75%)"
                  : "radial-gradient(75% 65% at 50% 50%, rgba(220, 38, 38, 0.08), transparent 75%)",
            }}
            aria-hidden="true"
          />

          {/* Stacked Vehicle Showcase Stage */}
          <div className="relative mx-auto flex h-full w-full max-w-7xl items-center justify-center px-5 md:px-8">
            {vehicles.map((v, i) => {
              const isEven = i % 2 === 0;
              const isFocused = focusedIndex === i;

              return (
                <div
                  key={v.id}
                  ref={(el) => {
                    layerRefs.current[i] = el;
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ perspective: "1400px" }}
                >
                  <div
                    className={`grid w-full items-center gap-8 md:gap-12 [transform-style:preserve-3d] ${
                      isEven ? "md:grid-cols-[1.15fr_1fr]" : "md:grid-cols-[1fr_1.15fr]"
                    }`}
                  >
                    {isEven ? (
                      <>
                        <div
                          ref={(el) => {
                            visualRefs.current[i] = el;
                          }}
                          className="order-1 flex items-center justify-center [transform-style:preserve-3d]"
                        >
                          <VehicleVisual
                            image={v.image}
                            model={v.model}
                            alt={`Force ${v.title} at IAW Force Gorakhpur`}
                            priority={i === 0}
                            isFocused={isFocused}
                            onToggleFocus={() => toggleFocus(i)}
                            className="w-full max-w-[620px] lg:max-w-[740px]"
                          />
                        </div>
                        <div
                          ref={(el) => {
                            cardRefs.current[i] = el;
                          }}
                          className="order-2 flex items-center justify-center [transform-style:preserve-3d]"
                        >
                          <VehicleCard vehicle={v} isFocused={isFocused} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          ref={(el) => {
                            cardRefs.current[i] = el;
                          }}
                          className="order-2 md:order-1 flex items-center justify-center [transform-style:preserve-3d]"
                        >
                          <VehicleCard vehicle={v} isFocused={isFocused} />
                        </div>
                        <div
                          ref={(el) => {
                            visualRefs.current[i] = el;
                          }}
                          className="order-1 md:order-2 flex items-center justify-center [transform-style:preserve-3d]"
                        >
                          <VehicleVisual
                            image={v.image}
                            model={v.model}
                            alt={`Force ${v.title} at IAW Force Gorakhpur`}
                            priority={i === 0}
                            isFocused={isFocused}
                            onToggleFocus={() => toggleFocus(i)}
                            className="w-full max-w-[620px] lg:max-w-[740px]"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
