import { useEffect, useRef } from "react";
import { useGsap, prefersReducedMotion } from "./scrollAnimations";

export type StoryTransitionType =
  | "fadeUp"
  | "parallaxDepth"
  | "staggerCascade"
  | "splitReveal"
  | "scaleHandoff";

export interface StoryOptions {
  type?: StoryTransitionType;
  scrub?: boolean | number;
  start?: string;
  end?: string;
  intensity?: number;
  stagger?: number;
}

/**
 * Reusable section-to-section storytelling hook.
 * Connects section entrance, ambient visual transformation, and handoff to the next section.
 * 100% reversible on scroll down and scroll up.
 */
export function useStorySection<T extends HTMLElement>(
  options: StoryOptions = {},
  deps: unknown[] = [],
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const { gsap, ScrollTrigger } = useGsap();
    const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

    const {
      type = "fadeUp",
      scrub = 0.8,
      start = "top 90%",
      end = "bottom 20%",
      intensity = 1,
      stagger = 0.08,
    } = options;

    const ctx = gsap.context(() => {
      // Find storytelling semantic elements inside the section
      const header = el.querySelector<HTMLElement>("[data-story-header]");
      const items = el.querySelectorAll<HTMLElement>("[data-story-item]");
      const visual = el.querySelector<HTMLElement>("[data-story-visual]");
      const background = el.querySelector<HTMLElement>("[data-story-bg]");

      // Master section timeline tied to scroll progress
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: start,
          end: end,
          scrub: isMobile ? false : scrub,
          toggleActions: isMobile ? "play none none reverse" : undefined,
        },
      });

      // 1. Background ambient depth shift
      if (background) {
        tl.fromTo(
          background,
          { opacity: 0.3, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" },
          0,
        );
      }

      // 2. Header text emergence
      if (header) {
        const yDist = isMobile ? 20 : 35 * intensity;
        tl.fromTo(
          header,
          { y: yDist, opacity: 0.15 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
          0,
        );
      }

      // 3. Main visual / image handoff
      if (visual) {
        const scaleFrom = isMobile ? 0.98 : 0.94;
        const yVisual = isMobile ? 15 : 40 * intensity;
        tl.fromTo(
          visual,
          { y: yVisual, scale: scaleFrom, opacity: 0.2 },
          { y: 0, scale: 1, opacity: 1, duration: 0.7, ease: "power2.out" },
          0.05,
        );
      }

      // 4. Staggered content cards / items
      if (items.length) {
        const yCard = isMobile ? 18 : 30 * intensity;
        tl.fromTo(
          items,
          { y: yCard, opacity: 0.2, scale: isMobile ? 1 : 0.98 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: isMobile ? 0.04 : stagger,
            duration: 0.6,
            ease: "power2.out",
          },
          0.1,
        );
      }

      // Exit Handoff: As section scrolls past top, gently glide upwards to introduce next section
      if (!isMobile && type === "parallaxDepth") {
        gsap.to(el, {
          y: -25 * intensity,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "bottom bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, el);

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
