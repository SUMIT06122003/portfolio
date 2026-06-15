import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Experience</p>
      <h2>Practical Work Across Web and Data</h2>

      <div className="timeline-card">
        <span className="status-pill">Internship</span>
        <h3>Frontend Development Intern - CodexIntern</h3>
        <p>
          Completed a <strong>1-month internship</strong> at CodexIntern where I
          gained practical experience in frontend development, UI building, and
          responsive web implementation.
        </p>
        <p>
          I built a website inspired by Coding Ninjas for CodexIntern, improving
          my React, component design, and deployment workflow. I now combine
          that engineering background with data analysis and data science work.
        </p>
        <p className="link-row">
          <a
            href="https://github.com/SUMIT06122003/codexintern"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href="https://codexintern.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </p>
      </div>
    </section>
  );
}
