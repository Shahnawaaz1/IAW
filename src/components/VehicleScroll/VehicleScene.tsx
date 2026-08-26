import { useEffect, useRef } from "react";
import { VehicleVisual } from "./VehicleVisual";
import { VehicleCard } from "./VehicleCard";
import type { Vehicle } from "./vehicleData";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";

/**
 * Pinned cinematic 3D scene per vehicle with bidirectional appear and disappear transitions.
 */
export function VehicleScene({ vehicle, first }: { vehicle: Vehicle; first?: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || prefersReducedMotion()) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const { gsap, ScrollTrigger } = useGsap();

    const ctx = gsap.context(() => {
      // 3-Phase Scroll Timeline (Appear -> 3D Showroom Rotate -> Disappear)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=140%",
          scrub: 0.7,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Set initial hidden state
      gsap.set(visualRef.current, {
        xPercent: -25,
        scale: 0.86,
        rotateY: 18,
        rotateZ: -2,
        opacity: 0,
        transformPerspective: 1200,
        transformOrigin: "center center",
      });
      gsap.set(cardRef.current, {
        xPercent: 20,
        opacity: 0,
        scale: 0.94,
      });
      gsap.set(glowRef.current, {
        scale: 0.6,
        opacity: 0,
      });

      // PHASE 1: APPEAR (0.0 to 0.35)
      tl.to(
        visualRef.current,
        {
          xPercent: 0,
          scale: 1,
          rotateY: 0,
          rotateZ: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0,
      )
        .to(
          cardRef.current,
          {
            xPercent: 0,
            scale: 1,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          },
          0.05,
        )
        .to(
          glowRef.current,
          {
            scale: 1,
            opacity: 0.6,
            duration: 0.35,
          },
          0,
        )

        // PHASE 2: 3D SHOWROOM PERSPECTIVE SHIFT (0.35 to 0.70)
        .to(
          visualRef.current,
          {
            scale: 1.06,
            rotateY: -8,
            rotateZ: 1,
            yPercent: -2,
            duration: 0.35,
            ease: "sine.inOut",
          },
          0.35,
        )
        .to(
          cardRef.current,
          {
            yPercent: -2,
            duration: 0.35,
            ease: "sine.inOut",
          },
          0.35,
        )
        .to(
          glowRef.current,
          {
            scale: 1.15,
            opacity: 0.8,
            duration: 0.35,
          },
          0.35,
        )

        // PHASE 3: DISAPPEAR (0.70 to 1.0)
        .to(
          visualRef.current,
          {
            xPercent: 25,
            scale: 1.12,
            rotateY: -18,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          0.7,
        )
        .to(
          cardRef.current,
          {
            xPercent: -15,
            opacity: 0,
            scale: 0.92,
            duration: 0.3,
            ease: "power2.in",
          },
          0.7,
        )
        .to(
          glowRef.current,
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.3,
          },
          0.7,
        );
    }, root);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [vehicle]);

  return (
    <div
      ref={rootRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden border-b border-white/10 pt-28 pb-12 md:pt-32 md:pb-16"
      style={{ perspective: "1400px" }}
    >
      {/* Dynamic ambient radial floor glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 opacity-50 transition-all duration-300"
        style={{
          background:
            "radial-gradient(75% 65% at 38% 52%, rgba(245, 158, 11, 0.16), transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 md:grid-cols-[1.15fr_1fr] md:gap-12 md:px-8 [transform-style:preserve-3d]">
        {/* Large 3D vehicle visual on the left */}
        <div className="order-1 flex items-center justify-center md:order-none [transform-style:preserve-3d]">
          <VehicleVisual
            ref={visualRef}
            image={vehicle.image}
            model={vehicle.model}
            alt={`Force ${vehicle.title} at IAW Force Gorakhpur`}
            priority={first}
            className="w-full max-w-[620px] lg:max-w-[760px]"
          />
        </div>

        {/* Vehicle Details Card on the right */}
        <div className="order-2 flex items-center justify-center [transform-style:preserve-3d]">
          <VehicleCard ref={cardRef} vehicle={vehicle} />
        </div>
      </div>
    </div>
  );
}
