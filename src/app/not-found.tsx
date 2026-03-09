"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function EyeLogo({ size = 220 }: { size?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const maxDist = size * 0.13;
      const dist = Math.min(Math.sqrt(dx * dx + dy * dy), maxDist * 6);
      const factor = Math.min(dist / (maxDist * 6), 1);
      setPupil({
        x: Math.cos(angle) * maxDist * factor,
        y: Math.sin(angle) * maxDist * factor,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const diamondW = s * 0.92;
  const diamondH = s * 0.945;
  const points = `${cx},${cy - diamondH / 2} ${cx + diamondW / 2},${cy} ${cx},${cy + diamondH / 2} ${cx - diamondW / 2},${cy}`;
  const outerRx = s * 0.213;
  const outerRy = s * 0.212;
  const innerRx = s * 0.0765;
  const innerRy = s * 0.0812;

  return (
    <div ref={containerRef} style={{ width: s, height: s, display: "inline-block", cursor: "none" }}>
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`}>
        <polygon points={points} fill="#0f0f0f" />
        <ellipse cx={cx} cy={cy} rx={outerRx} ry={outerRy} fill="white" />
        <ellipse cx={cx + pupil.x} cy={cy + pupil.y} rx={innerRx} ry={innerRy} fill="#0f0f0f" />
        <ellipse
          cx={cx + pupil.x + innerRx * 0.28}
          cy={cy + pupil.y - innerRy * 0.3}
          rx={innerRx * 0.22}
          ry={innerRy * 0.22}
          fill="white"
          opacity="0.85"
        />
      </svg>
    </div>
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .nf-root {
          min-height: 100vh;
          background: #f5f0e8;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'DM Mono', monospace;
          overflow: hidden;
          position: relative;
        }

        .nf-grain {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.045'/%3E%3C/svg%3E");
          background-size: 200px;
          opacity: 0.55;
          mix-blend-mode: multiply;
        }

        .nf-code {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(120px, 22vw, 240px);
          line-height: 0.88;
          color: #0f0f0f;
          letter-spacing: -4px;
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s forwards;
        }

        .nf-eye-wrap {
          position: relative;
          z-index: 1;
          margin: -18px 0 -14px;
          opacity: 0;
          transform: scale(0.85);
          animation: popIn 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.35s forwards;
          filter: drop-shadow(0 8px 32px rgba(0,0,0,0.13));
        }

        .nf-label {
          font-size: clamp(10px, 1.4vw, 13px);
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #0f0f0f;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.65s forwards;
          position: relative;
          z-index: 1;
          margin-top: 4px;
        }

        .nf-divider {
          width: 40px;
          height: 1.5px;
          background: #0f0f0f;
          margin: 22px auto 20px;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.75s forwards;
          position: relative;
          z-index: 1;
        }

        .nf-message {
          font-size: clamp(11px, 1.5vw, 13.5px);
          color: #3a3530;
          letter-spacing: 0.04em;
          text-align: center;
          max-width: 340px;
          line-height: 1.8;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.82s forwards;
          position: relative;
          z-index: 1;
        }

        .nf-btn {
          margin-top: 32px;
          display: inline-block;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          color: #f5f0e8;
          background: #0f0f0f;
          padding: 14px 32px;
          position: relative;
          z-index: 1;
          opacity: 0;
          animation: fadeUp 0.5s ease 0.95s forwards;
          transition: background 0.2s, color 0.2s, transform 0.15s;
          border: none;
          cursor: pointer;
        }

        .nf-btn:hover {
          background: #2a2520;
          transform: translateY(-2px);
        }

        .nf-corner {
          position: fixed;
          font-size: 10px;
          letter-spacing: 0.15em;
          color: #b0a898;
          z-index: 1;
        }
        .nf-corner-tl { top: 28px; left: 32px; }
        .nf-corner-br { bottom: 28px; right: 32px; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popIn {
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="nf-root">
        <div className="nf-grain" />
        <span className="nf-corner nf-corner-tl">ERR_NOT_FOUND</span>
        <span className="nf-corner nf-corner-br">HTTP / 404</span>

        <div className="nf-code">4</div>
        {mounted && (
          <div className="nf-eye-wrap">
            <EyeLogo size={210} />
          </div>
        )}
        <div className="nf-code">4</div>

        <div className="nf-divider" />

        <p className="nf-label">Page not found</p>

        <p className="nf-message">
          The page you&apos;re looking for has gone missing.<br />
          We&apos;ve been watching — it was never here.
        </p>

        <Link href="/" className="nf-btn">Return home</Link>
      </div>
    </>
  );
}