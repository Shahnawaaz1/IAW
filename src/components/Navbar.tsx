import { useEffect, useState } from "react";
import { navLinks, site } from "@/config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      {/* Dynamic Showroom Glassmorphic Header: Dark-Glass over Hero, Crystal-Glass on Scroll */}
      <div
        className={`mx-auto transition-all duration-400 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur-2xl py-3.5"
            : "border-b border-white/10 bg-[#070B14]/65 shadow-2xl backdrop-blur-xl py-4 sm:py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo: Crisp Red Slanted Badge + IAW FORCE */}
          <a href="#top" className="group flex items-center gap-3.5">
            <div className="relative flex h-10 w-11 items-center justify-center bg-[#DC2626] [clip-path:polygon(0_0,100%_0,86%_100%,0_100%)] shadow-md shadow-red-900/40 transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-base font-black italic tracking-tighter text-white pr-0.5">
                IAW
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display text-xl font-black tracking-tight transition-colors ${
                  scrolled ? "text-[#0F172A] group-hover:text-[#DC2626]" : "text-white group-hover:text-red-400"
                }`}
              >
                IAW FORCE
              </span>
              <span
                className={`text-[9px] font-bold tracking-[0.24em] uppercase transition-colors ${
                  scrolled ? "text-slate-400" : "text-slate-400"
                }`}
              >
                FORCE MOTORS VEHICLES
              </span>
            </div>
          </a>

          {/* Minimalist Centered Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className={`group relative py-1 text-xs font-bold tracking-[0.14em] transition-colors ${
                  scrolled
                    ? "text-slate-700 hover:text-[#DC2626]"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                <span>{l.label}</span>
                <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-[#EF4444] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Right Action Suite: Toll-Free + Modern CTA Button */}
          <div className="flex items-center gap-4">
            {/* Toll-Free Number Pill */}
            <a
              href={site.phoneHref}
              className={`hidden xl:flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                scrolled
                  ? "border border-slate-200 bg-slate-50/90 text-slate-800 hover:border-red-300 hover:text-[#DC2626]"
                  : "border border-white/15 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30"
              }`}
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>1800-889-6927</span>
            </a>

            {/* Glowing Enquire Now Button (Hidden on small mobile for clean header, visible on sm+) */}
            <a
              href="#contact"
              className="group hidden sm:flex h-9 sm:h-10 shrink-0 items-center gap-1.5 sm:gap-2.5 rounded-full bg-[#DC2626] px-3.5 sm:px-6 text-[11px] sm:text-xs font-bold tracking-[0.1em] sm:tracking-[0.14em] text-white shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all duration-300 hover:bg-red-600 hover:shadow-[0_0_30px_rgba(220,38,38,0.7)] hover:-translate-y-0.5 whitespace-nowrap select-none"
            >
              <span>ENQUIRE NOW</span>
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
                scrolled
                  ? "border-slate-200 bg-white text-slate-800 hover:border-[#DC2626]"
                  : "border-white/20 bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-slate-800 bg-[#0B1120]/98 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:hidden text-white">
          <nav aria-label="Mobile" className="flex flex-col space-y-1">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-slate-800/80 py-3 text-sm font-bold text-slate-200 transition-colors hover:text-[#EF4444]"
              >
                <span>{l.label}</span>
                <span className="text-xs text-[#EF4444]">→</span>
              </a>
            ))}

            <div className="mt-6 flex flex-col gap-3 pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center rounded-full bg-[#DC2626] text-xs font-bold tracking-wider text-white shadow-lg shadow-red-600/30"
              >
                ENQUIRE NOW
              </a>
              <a
                href={site.phoneHref}
                className="flex h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 text-xs font-bold text-white"
              >
                <span>📞</span> CALL 1800-889-6927
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/50 text-xs font-bold text-emerald-400"
              >
                <span>💬</span> WHATSAPP US
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
