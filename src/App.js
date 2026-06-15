import React, { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  useEffect(() => {
    const revealTargets = document.querySelectorAll(
      ".hero-copy, .hero-visual, .section .eyebrow, .section h2, .section-intro, .skill-group, .timeline-card, .project-card, .cert-card, .contact-card"
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal-on-scroll");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Home />
    </div>
  );
}
