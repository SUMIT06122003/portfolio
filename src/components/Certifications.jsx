import React from "react";

import commonwealth from "../assets/certifications/commonwealth.png";
import newyork from "../assets/certifications/newyork.png";
import skyscanner from "../assets/certifications/skyscanner.png";
import internship from "../assets/certifications/Sumit Subhash Singh.pdf";

export default function Certifications() {
  const certifications = [
    {
      title: "Introduction to Software Engineering Job Simulation",
      org: "Commonwealth Bank (Forage)",
      img: commonwealth,
      link: commonwealth,
    },
    {
      title: "Software Engineering Job Simulation",
      org: "New York Jobs CEO Council (Forage)",
      img: newyork,
      link: newyork,
    },
    {
      title: "Front-End Software Engineering Job Simulation",
      org: "Skyscanner (Forage)",
      img: skyscanner,
      link: skyscanner,
    },
    {
      title: "Frontend Development Internship",
      org: "CodexIntern",
      img: null,
      link: internship,
    },
  ];

  return (
    <section id="certifications" className="section">
      <p className="eyebrow">Certifications</p>
      <h2>Learning and Professional Practice</h2>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={cert.title}>
            {cert.img && <img src={cert.img} alt={cert.title} />}
            <h3>{cert.title}</h3>
            <p>{cert.org}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
