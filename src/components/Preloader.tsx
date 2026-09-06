import { useEffect, useRef, useState } from "react";
import { useGsap } from "@/animations/scrollAnimations";

interface PreloaderProps {
  onComplete?: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textStatusRef = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent background scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const startTime = Date.now();
    const duration = 1400; // 1.4s smooth load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        triggerExit();
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  const triggerExit = () => {
    const { gsap } = useGsap();
    const container = containerRef.current;
    if (!container) {
      setIsDone(true);
      document.body.style.overflow = "";
      onComplete?.();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setIsDone(true);
        document.body.style.overflow = "";
        onComplete?.();
      },
    });

    tl.to(logoRef.current, {
      scale: 1.08,
      opacity: 0.9,
      duration: 0.25,
      ease: "power2.out",
    })
      .to(container, {
        yPercent: -100,
        duration: 0.85,
        ease: "power4.inOut",
      })
      .fromTo(
        "#top",
        { scale: 1.04, filter: "blur(4px)" },
        { scale: 1, filter: "blur(0px)", duration: 0.7, ease: "power3.out" },
        "-=0.5"
      );
  };

  if (isDone) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070B14] text-white selection:bg-transparent overflow-hidden"
    >
      {/* Ambient Red Showroom Floor Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#0B57D0]/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-blue-900/10 blur-[90px] pointer-events-none" />

      <div ref={logoRef} className="relative z-10 flex flex-col items-center px-6">
        {/* Brand Emblem with Slanted Polygon & Neon Edge */}
        <div className="relative mb-6 flex h-16 w-18 items-center justify-center bg-[#0B57D0] [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)] shadow-[0_0_40px_rgba(11, 87, 208,0.6)] animate-pulse">
          <span className="font-display text-2xl font-black italic tracking-tighter text-white pr-1">
            IAW
          </span>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Wordmark */}
        <h1 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
          IAW FORCE
        </h1>
        <p className="mt-1 text-[10px] sm:text-xs font-bold tracking-[0.35em] text-blue-600 uppercase">
          FORCE MOTORS · GORAKHPUR
        </p>

        {/* Laser Progress Gauge */}
        <div className="mt-10 w-64 sm:w-80">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-slate-800/90">
            <div
              ref={progressBarRef}
              style={{ width: `${progress}%` }}
              className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-white shadow-[0_0_15px_rgba(11, 87, 208,0.9)] transition-all duration-75"
            />
          </div>

          {/* Digital Counter & Telemetry Status */}
          <div className="mt-4 flex items-center justify-between text-xs">
            <p
              ref={textStatusRef}
              className="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-400 uppercase"
            >
              {progress < 35 && "INITIALIZING SHOWROOM..."}
              {progress >= 35 && progress < 75 && "CALIBRATING FLEET MOTORS..."}
              {progress >= 75 && progress < 100 && "PREPARING PERFORMANCE..."}
              {progress === 100 && "SHOWROOM READY"}
            </p>
            <span className="font-mono text-xs sm:text-sm font-black text-blue-500">
              {progress.toString().padStart(2, "0")}%
            </span>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Watermark */}
      <div className="absolute bottom-6 text-[10px] font-bold tracking-[0.25em] text-slate-600 uppercase">
        COMMERCIAL & PASSENGER MOBILITY
      </div>
    </div>
  );
}
