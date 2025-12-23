"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param threshold - Percentage of element visibility before triggering (0-1)
 * @returns ref to attach to the element you want to animate
 */
export function useScrollAnimation<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      element.classList.add("animate-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            // Optional: unobserve after animating to improve performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully in view
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return ref;
}
