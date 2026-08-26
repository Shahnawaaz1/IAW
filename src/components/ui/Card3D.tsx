import React, { useRef, useState, useCallback } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function Card3D({
  children,
  className = "",
  intensity = 12,
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate crisp tilt angles
      const rotX = ((y - centerY) / centerY) * -intensity;
      const rotY = ((x - centerX) / centerX) * intensity;

      setRotateX(rotX);
      setRotateY(rotY);
    },
    [intensity],
  );

  const handleMouseEnter = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  // Mobile and Tablet Touch Support
  const handleTouchStart = () => {
    if (touchTimerRef.current) clearTimeout(touchTimerRef.current);
    setIsHovered(true);
  };

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (!cardRef.current || !e.touches[0]) return;
      const rect = cardRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      const y = touch.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotX = ((y - centerY) / centerY) * -(intensity * 0.5);
      const rotY = ((x - centerX) / centerX) * (intensity * 0.5);

      setRotateX(rotX);
      setRotateY(rotY);
    },
    [intensity],
  );

  const handleTouchEnd = () => {
    touchTimerRef.current = setTimeout(() => {
      setIsHovered(false);
      setRotateX(0);
      setRotateY(0);
    }, 600);
  };

  return (
    <div
      className="perspective-1000 w-full"
      style={{ perspective: "1200px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: isHovered
            ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
            : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
          transition: isHovered
            ? "transform 0.08s ease-out"
            : "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
        className={`relative will-change-transform ${className}`}
      >
        {/* Crystal Clear Content - Zero Fog, Zero Glare */}
        <div className="relative z-10 h-full [transform-style:preserve-3d]">
          {children}
        </div>
      </div>
    </div>
  );
}
