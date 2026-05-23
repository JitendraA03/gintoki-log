"use client";

import { useEffect, useRef } from "react";
import { PixelSprite } from "@/components/PixelSprite";

export function ReadingProgress() {
  const walkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      const max = window.innerWidth - 24;

      if (walkerRef.current) {
        walkerRef.current.style.transform = `translateX(${pct * max}px)`;
      }

      const headings = Array.from(document.querySelectorAll<HTMLElement>(".prose-custom h2"));
      const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".toc-link"));
      let activeIdx = -1;
      const trigger = window.scrollY + 120;
      headings.forEach((heading, index) => {
        if (heading.offsetTop <= trigger) activeIdx = index;
      });
      links.forEach((link, index) => {
        link.parentElement?.classList.toggle("text-ink", index === activeIdx);
        link.parentElement?.classList.toggle("font-semibold", index === activeIdx);
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="read-track" aria-hidden="true">
      <div className="read-ground" />
      <div className="read-walker" ref={walkerRef}>
        <PixelSprite size={18} />
      </div>
    </div>
  );
}
