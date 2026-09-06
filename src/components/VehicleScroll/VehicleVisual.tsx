import { forwardRef, useState, useCallback } from "react";

export type VehicleVisualProps = {
  image: string;
  model?: string | undefined;
  alt: string;
  priority?: boolean | undefined;
  className?: string | undefined;
  isFocused?: boolean;
  onToggleFocus?: () => void;
};

export const VehicleVisual = forwardRef<HTMLDivElement, VehicleVisualProps>(
  function VehicleVisual(
    { image, alt, priority, className = "", isFocused = false, onToggleFocus },
    ref,
  ) {
    const [tilt, setTilt] = useState({ x: 0, y: 0, scale: 1 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -10;
      const rotY = ((x - centerX) / centerX) * 10;

      setTilt({ x: rotX, y: rotY, scale: 1.04 });
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
      if (!e.touches[0]) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -7;
      const rotY = ((x - centerX) / centerX) * 7;

      setTilt({ x: rotX, y: rotY, scale: 1.03 });
    }, []);

    const handleReset = () => {
      setHovered(false);
      setTilt({ x: 0, y: 0, scale: 1 });
    };

    return (
      <div
        ref={ref}
        data-vehicle-visual
        onClick={onToggleFocus}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleReset}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={handleReset}
        className={`group relative flex cursor-pointer items-center justify-center will-change-transform [transform-style:preserve-3d] ${
          isFocused ? "z-50" : "z-20"
        } ${className}`}
        style={{
          perspective: "1200px",
        }}
      >
        {/* Dynamic ambient vehicle floor glow */}
        <div
          className={`pointer-events-none absolute -bottom-10 rounded-full blur-3xl transition-all duration-500 ${
            isFocused
              ? "h-36 w-full bg-blue-500/25 scale-125"
              : "h-24 w-4/5 bg-blue-500/10 group-hover:scale-115 group-hover:bg-blue-500/20"
          }`}
          aria-hidden="true"
        />
        <div
          className={`pointer-events-none absolute -bottom-4 rounded-full bg-slate-900/15 blur-xl transition-all duration-500 ${
            isFocused ? "h-12 w-full scale-120" : "h-8 w-3/4 group-hover:scale-110"
          }`}
          aria-hidden="true"
        />

        {/* Scaled-up vehicle image with interactive 3D perspective response and Zoom Focus Mode */}
        <img
          src={image}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          width={1400}
          height={900}
          style={{
            transform: isFocused
              ? "scale(1.28) translateY(-12px)"
              : hovered
                ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.scale})`
                : "rotateX(0deg) rotateY(0deg) scale(1)",
            transition: isFocused
              ? "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
              : hovered
                ? "transform 0.08s ease-out"
                : "transform 0.5s ease-out",
          }}
          className={`relative z-10 h-auto max-h-[460px] w-full select-none object-contain transition-all duration-500 lg:max-h-[540px] ${
            isFocused
              ? "drop-shadow-[0_45px_70px_rgba(11, 87, 208,0.28)]"
              : "drop-shadow-[0_25px_40px_rgba(15,23,42,0.22)]"
          }`}
        />

        {/* Floating Focus Mode Status Pill */}
        <div
          className={`pointer-events-none absolute -bottom-4 z-30 flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-wider shadow-lg backdrop-blur-md transition-all duration-300 ${
            isFocused
              ? "bg-[#0B57D0] text-white border border-blue-400 opacity-100 scale-105"
              : "border border-blue-200 bg-white/95 text-[#0B57D0] opacity-0 group-hover:opacity-100"
          }`}
        >
          <span>{isFocused ? "✕ EXIT FOCUS" : "🔍 CLICK TO ZOOM FOCUS"}</span>
        </div>
      </div>
    );
  },
);
