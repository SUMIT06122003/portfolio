import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <p className="eyebrow">Experience</p>
      <h2>Practical Work Across Data and Reporting</h2>

      <div className="timeline-card">
        <span className="status-pill">Internship</span>
        <h3>Frontend Development Intern - CodexIntern</h3>
        <p>
          Completed a <strong>1-month internship</strong> at CodexIntern where I
          gained practical experience building responsive interfaces and
          presenting information clearly for users.
        </p>
        <p>
          I now use that presentation and UI background to make analytics
          dashboards, KPI reports, and data stories easier for non-technical
          users to understand.
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
