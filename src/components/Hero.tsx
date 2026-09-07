import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/hero-vehicle.jpg";
import heroVideo from "@/assets/herosection.mp4";
import { site, heroStats, quickActions } from "@/config/site";
import { useGsap, prefersReducedMotion } from "@/animations/scrollAnimations";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const heroMediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const quickStripRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const { gsap } = useGsap();
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const ctx = gsap.context(() => {
      // 1. Initial Page Load Entrance
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-fade]", { y: 35, opacity: 0, duration: 0.9, stagger: 0.12 })
        .from("[data-hero-stat]", { y: 25, opacity: 0, duration: 0.7, stagger: 0.1 }, "-=0.4")
        .from("[data-quick-item]", { y: 20, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.3")
        .from(heroMediaRef.current, { scale: 1.05, opacity: 0, duration: 1.2 }, 0);

      // 2. Cinematic Parallax Scroll Depth (Responsive Mobile, Tablet, Desktop)
      if (heroMediaRef.current) {
        gsap.to(heroMediaRef.current, {
          y: isMobile ? 35 : 65,
          scale: isMobile ? 1.04 : 1.06,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Content upward fade
        gsap.to(heroContentRef.current, {
          y: isMobile ? -25 : -40,
          opacity: 0.2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom 30%",
            scrub: true,
          },
        });

        // Quick Action strip progressive lift
        if (quickStripRef.current) {
          gsap.to(quickStripRef.current, {
            y: isMobile ? -8 : -15,
            ease: "none",
            scrollTrigger: {
              trigger: quickStripRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      }
    }, el);

    return () => ctx.revert();
  }, []);

  // Ensure video autoplays smoothly on modern browsers
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay fallback handled gracefully by poster image
        });
      }
    }
  }, []);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-slate-50">
      {/* Edge-to-edge Hero Banner extending under the frosted glass navbar */}
      <div className="relative flex min-h-[92vh] lg:min-h-screen items-center pt-24 pb-12 sm:pt-28 sm:pb-16">
        {/* Background Media Container (Fast Poster + Seamless Video) */}
        <div
          ref={heroMediaRef}
          className="absolute inset-0 h-full w-full overflow-hidden will-change-transform"
        >
          {/* Instant High-Performance Video with Zero Performance Impact */}
          <video
            ref={videoRef}
            src={heroVideo}
            poster={heroImage}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disablePictureInPicture
            disableRemotePlayback
            onLoadedData={() => setVideoLoaded(true)}
            className={`h-full w-full object-cover object-center transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-90"
            }`}
          />

          {/* Cinematic Automotive Glass Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent sm:via-slate-50/60 sm:w-4/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/40" />
          <div className="absolute top-1/4 left-10 h-72 w-72 rounded-full bg-[#006CB5]/5 blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content with High-End Automotive Showroom Typography */}
        <div ref={heroContentRef} className="relative mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16 will-change-transform">
          <div className="max-w-3xl">
            {/* Kicker badge */}
            <div data-hero-fade className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50/80 backdrop-blur-xl px-4 py-1.5 text-xs font-bold tracking-[0.25em] text-[#006CB5] shadow-md shadow-blue-900/10">
              <span className="h-2 w-2 rounded-full bg-[#006CB5] animate-ping" />
              IAW FORCE · GORAKHPUR SHOWROOM
            </div>

            {/* Main Headline */}
            <h1
              data-hero-fade
              className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight text-black sm:text-6xl lg:text-7xl drop-shadow-[0_2px_15px_rgba(255,255,255,0.8)]"
            >
              MOVE PEOPLE.
              <br />
              <span className="text-[#006CB5] drop-shadow-[0_0_35px_rgba(0,108,181,0.3)]">
                MOVE BUSINESS.
              </span>
            </h1>

            {/* Lead text */}
            <p
              data-hero-fade
              className="mt-6 max-w-2xl text-base sm:text-lg font-medium leading-relaxed text-[#333333] drop-shadow-[0_1px_5px_rgba(255,255,255,0.8)]"
            >
              {site.heroLead}
            </p>

            {/* Action buttons */}
            <div data-hero-fade className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#vehicles"
                className="group flex items-center gap-3 rounded-full bg-[#006CB5] px-8 py-4 text-xs font-bold tracking-[0.16em] text-white shadow-[0_0_25px_rgba(0,108,181,0.4)] transition-all duration-300 hover:bg-blue-800 hover:shadow-[0_0_35px_rgba(0,108,181,0.6)] hover:-translate-y-0.5"
              >
                <span>EXPLORE VEHICLES</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://wa.me/918429540902?text=Hi%20IAW%20Force%2C%20I%20would%20like%20to%20request%20the%20on-road%20price%20list%20for%20Force%20vehicles."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-[#006CB5] bg-transparent backdrop-blur-xl px-8 py-[14px] text-xs font-bold tracking-[0.16em] text-[#006CB5] shadow-md transition-all duration-300 hover:bg-[#006CB5] hover:text-white hover:-translate-y-0.5"
              >
                <span>GET ON-ROAD PRICE</span>
              </a>
            </div>

            {/* Hero Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8 sm:max-w-xl">
              {heroStats.map((st) => (
                <div key={st.label} data-hero-stat className="flex flex-col">
                  <span className="font-display text-3xl font-black tracking-tight text-[#006CB5] sm:text-4xl drop-shadow-[0_0_20px_rgba(0,108,181,0.15)]">
                    {st.value}
                  </span>
                  <span className="mt-0.5 text-xs font-bold tracking-wider text-black">
                    {st.label}
                  </span>
                  <span className="text-[11px] text-slate-600">
                    {st.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Strip (Cinematic Dark Showroom Glass) */}
      <div ref={quickStripRef} className="relative z-10 border-y border-slate-200 bg-white will-change-transform">
        <div className="mx-auto max-w-7xl px-5 py-4 md:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {quickActions.map((qa) => (
              <a
                key={qa.num}
                data-quick-item
                href={`https://wa.me/918429540902?text=${encodeURIComponent(`Hi IAW Force, I am interested in: ${qa.title} (${qa.subtitle}). Please guide me.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:border-blue-500/60 hover:bg-white hover:shadow-lg hover:shadow-blue-900/10"
              >
                <div className="flex items-center gap-4">
                  <span className="font-display text-xl font-black text-[#3B82F6] transition-transform duration-300 group-hover:scale-110">
                    {qa.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-[#006CB5]">
                      {qa.title}
                    </h3>
                    <p className="text-xs text-slate-600">
                      {qa.subtitle}
                    </p>
                  </div>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#3B82F6]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
