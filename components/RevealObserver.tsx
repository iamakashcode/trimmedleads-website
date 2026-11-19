"use client";

import { useEffect } from "react";

/**
 * Subtle scroll-reveal. `.reveal` elements are only hidden once this has run
 * (html.reveal-ready), so content is always visible without JavaScript and
 * anything already on screen at load is never hidden.
 */
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const show = (el: Element) => el.classList.add("is-visible");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show(entry.target);
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const vh = window.innerHeight;
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) show(el);
      else io.observe(el);
    });
    root.classList.add("reveal-ready");

    // Observe content added later by client-side navigation.
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(".reveal:not(.is-visible)")) io.observe(node);
          node.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
