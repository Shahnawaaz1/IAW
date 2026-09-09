import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { navLinks, site } from "@/config/site";
import { MegaMenu } from "./MegaMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300" onMouseLeave={() => setIsMegaMenuOpen(false)}>
      {/* Dynamic Showroom Glassmorphic Header: Dark-Glass over Hero, Crystal-Glass on Scroll */}
      <div
        className={`mx-auto transition-all duration-400 ${
          scrolled
            ? "border-b border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-2xl py-2"
            : "border-b border-slate-200/50 bg-white/80 shadow-md backdrop-blur-xl py-2 sm:py-3"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand Logo: Premium White & Blue Logo */}
          <Link to="/" className="group flex items-center gap-3.5">
            <div className="relative flex h-10 w-11 items-center justify-center bg-[#006CB5] rounded-sm shadow-md shadow-blue-900/20 transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-base font-black tracking-tighter text-white">
                IAW
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-black tracking-tight text-[#0F172A] transition-colors group-hover:text-[#006CB5]">
                IAW FORCE
              </span>
              <span className="text-[9px] font-bold tracking-[0.24em] uppercase text-slate-500 transition-colors">
                FORCE MOTORS VEHICLES
              </span>
            </div>
          </Link>

          {/* Minimalist Centered Navigation Links */}
          <nav aria-label="Primary" className="hidden items-center gap-10 lg:flex h-full">
            {navLinks.map((l) => {
              const isVehicles = l.label === "Vehicles";
              return (
                <div
                  key={l.label}
                  className="flex h-full items-center py-2 sm:py-3"
                  onMouseEnter={() => isVehicles && setIsMegaMenuOpen(true)}
                >
                  <Link
                    to={l.href}
                    onClick={() => setIsMegaMenuOpen(false)}
                    className={`group relative py-1 text-[17px] font-semibold tracking-wide transition-colors ${
                      scrolled
                        ? "text-slate-700 hover:text-[#006CB5]"
                        : "text-slate-800 hover:text-[#006CB5]"
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 scale-x-0 bg-[#006CB5] transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Mobile Hamburger Button Only */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
                scrolled
                  ? "border-slate-200 bg-white text-slate-800 hover:border-[#006CB5]"
                  : "border-slate-200 bg-white/80 text-slate-800 hover:border-[#006CB5]"
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
            {navLinks.map((l) => {
              const isVehicles = l.label === "Vehicles";
              
              if (isVehicles) {
                return (
                  <div key={l.label}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMegaMenuOpen(!isMegaMenuOpen);
                      }}
                      className="flex w-full items-center justify-between border-b border-slate-800/80 py-3 text-sm font-bold text-slate-200 transition-colors hover:text-[#3B82F6]"
                    >
                      <span>{l.label}</span>
                      <span className="text-xl font-normal text-slate-400">
                        {isMegaMenuOpen ? "-" : "+"}
                      </span>
                    </button>
                    {isMegaMenuOpen && (
                      <div className="flex flex-col border-b border-slate-800/80 py-2 pl-4">
                        {[
                          { name: "Traveller N", slug: "traveller-n-3050wb" },
                          { name: "Urbania DX", slug: "urbania-dx-3350wb" },
                          { name: "Monobus", slug: "monobus-lx-4020wb" },
                          { name: "Trax", slug: "trax-cruiser" },
                          { name: "Special Applications", slug: "traveller-prison-van" },
                          { name: "Gurkha", slug: "gurkha-3-door" },
                          { name: "EV", slug: "e-traveller-smart-citibus-ev" }
                        ].map((cat) => (
                          <Link
                            key={cat.name}
                            to={`/vehicles/${cat.slug}`}
                            onClick={() => {
                              setOpen(false);
                              setIsMegaMenuOpen(false);
                            }}
                            className="flex items-center justify-between py-2.5 text-sm font-medium text-slate-300 transition-colors hover:text-[#3B82F6]"
                          >
                            <span>{cat.name}</span>
                            <span className="text-slate-500">›</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => {
                    setOpen(false);
                    setIsMegaMenuOpen(false);
                  }}
                  className="flex items-center justify-between border-b border-slate-800/80 py-3 text-sm font-bold text-slate-200 transition-colors hover:text-[#3B82F6]"
                >
                  <span>{l.label}</span>
                  <span className="text-xs text-[#3B82F6]">→</span>
                </Link>
              );
            })}

            <div className="mt-6 flex flex-col gap-3 pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex h-11 items-center justify-center rounded-full bg-[#006CB5] text-xs font-bold tracking-wider text-white shadow-lg shadow-blue-600/30"
              >
                ENQUIRE NOW
              </Link>
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
      
      {/* Mega Menu Dropdown */}
      <MegaMenu
        isOpen={isMegaMenuOpen}
        onMouseEnter={() => setIsMegaMenuOpen(true)}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      />
    </header>
  );
}
