"use client";

import { useEffect, useRef, useState } from "react";

interface LogoProps {
  className?: string;
  uniColor?: boolean;
  size?: number;
}

export const Logo = ({ className, size = 32 }: LogoProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect y="90.5097" width="128" height="128" transform="rotate(-45 0 90.5097)" fill="black" />
      <circle cx="90.5097" cy="90.5097" r="42" fill="white" />
      <circle cx="98.5097" cy="104.51" r="8" fill="black" />
    </svg>
  );
};

export const LogoInv = ({ className, size = 32 }: LogoProps) => {
  return (
    <svg width={size} height={size} viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect y="90.5097" width="128" height="128" transform="rotate(-45 0 90.5097)" fill="white" />
      <circle cx="90.5097" cy="90.5097" r="42" fill="black" />
      <circle cx="98.5097" cy="104.51" r="8" fill="white" />
    </svg>
  );
};

function useEyeTracking(size: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const maxDist = size * 0.055;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const factor = Math.min(dist / 300, 1);
      setPupil({
        x: Math.cos(angle) * maxDist * factor,
        y: Math.sin(angle) * maxDist * factor,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  return { ref, pupil };
}

export const AniLogo = ({ className, size = 32 }: LogoProps) => {
  const { ref, pupil } = useEyeTracking(size);

  const cx = 90.5097;
  const cy = 90.5097;
  const scale = size / 182;
  const offsetX = pupil.x / scale;
  const offsetY = pupil.y / scale;

  return (
    <div ref={ref} style={{ width: size, height: size, display: "inline-block" }} className={className}>
      <svg width={size} height={size} viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="90.5097" width="128" height="128" transform="rotate(-45 0 90.5097)" fill="black" />
        <circle cx={cx} cy={cy} r="42" fill="white" />
        <circle
          cx={98.5097 + offsetX}
          cy={104.51 + offsetY}
          r="8"
          fill="black"
          style={{ transition: "cx 0.08s ease-out, cy 0.08s ease-out" }}
        />
      </svg>
    </div>
  );
};

export const AniLogoInv = ({ className, size = 32 }: LogoProps) => {
  const { ref, pupil } = useEyeTracking(size);

  const cx = 90.5097;
  const cy = 90.5097;
  const scale = size / 182;
  const offsetX = pupil.x / scale;
  const offsetY = pupil.y / scale;

  return (
    <div ref={ref} style={{ width: size, height: size, display: "inline-block" }} className={className}>
      <svg width={size} height={size} viewBox="0 0 182 182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="90.5097" width="128" height="128" transform="rotate(-45 0 90.5097)" fill="white" />
        <circle cx={cx} cy={cy} r="42" fill="black" />
        <circle
          cx={98.5097 + offsetX}
          cy={104.51 + offsetY}
          r="8"
          fill="white"
          style={{ transition: "cx 0.08s ease-out, cy 0.08s ease-out" }}
        />
      </svg>
    </div>
  );
};