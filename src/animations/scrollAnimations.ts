import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function useGsap() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  return { gsap, ScrollTrigger };
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export type Pace = "standard" | "premium" | "energetic" | "wide";

/** Per-pace tuning for the cinematic vehicle timeline. */
export const paceConfig: Record<Pace, { ease: string; rotate: number; scale: number; shift: number }> = {
  standard: { ease: "power2.inOut", rotate: -6, scale: 0.78, shift: -22 },
  premium: { ease: "power3.inOut", rotate: 5, scale: 0.8, shift: -20 },
  energetic: { ease: "power1.out", rotate: -9, scale: 0.74, shift: -25 },
  wide: { ease: "power2.out", rotate: 4, scale: 0.7, shift: -26 },
};
