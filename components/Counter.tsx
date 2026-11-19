"use client";

import { useEffect, useRef } from "react";

type Props = { from?: number; to: number; duration?: number; suffix?: string };

/** Counts up from `from` to `to` the first time it scrolls into view. Renders the final value on the server. */
export default function Counter({ from = 0, to, duration = 1600, suffix = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 4);
        el.textContent = `${Math.round(from + (to - from) * eased)}${suffix}`;
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      el.textContent = `${from}${suffix}`;
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [from, to, duration, suffix]);

  return (
    <span ref={ref} className="counter">
      {to}
      {suffix}
    </span>
  );
}
