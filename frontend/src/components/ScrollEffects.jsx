import { useEffect, useRef, useState } from "react";

/**
 * Reveal: fades and slides its children in the first time they scroll into view.
 *
 * Props:
 *  - direction: "up" (default) | "left" | "right" | "none"
 *  - delay: milliseconds to wait before animating (use for staggering)
 *  - className: classes for the wrapper (layout classes go here)
 */
export function Reveal({ children, direction = "up", delay = 0, className = "" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate once only
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenPosition = {
    up: "translate-y-8",
    left: "-translate-x-8",
    right: "translate-x-8",
    none: "",
  }[direction];

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hiddenPosition}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * ScrollToTop: round button that appears after scrolling down and returns to the top.
 * Render it once, anywhere (for example in App.jsx).
 */
export function ScrollToTop() {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsShown(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-40 flex h-16 w-16 items-center justify-center rounded-full border-2 border-ember/60 bg-ember/25 text-ember backdrop-blur-sm transition-all duration-300 hover:bg-ember hover:text-white ${
        isShown ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9 fill-current">
        <path d="M7.4 15.4 12 10.8l4.6 4.6L18 14l-6-6-6 6z" />
      </svg>
    </button>
  );
}