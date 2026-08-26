import { useEffect, useRef } from "react";
import { useGsap, prefersReducedMotion } from "./scrollAnimations";

/**
 * Reveals direct children (or `[data-reveal]` descendants) on scroll smoothly.
 * Safe fallback ensures content is always visible.
 */
export function useReveal<T extends HTMLElement>(deps: unknown[] = []) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap, ScrollTrigger } = useGsap();

    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    // Refresh ScrollTrigger positions after pinned scenes
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { y: 24, opacity: 0.15 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        },
      );
    }, el);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
