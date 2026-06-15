import React, { useEffect, useState } from "react";
import Profile from "../assets/profile.jpg";
import Resume from "../assets/Sumit_Singh_Resume.pdf";

const texts = [
  "Data Analyst",
  "Data Science Engineer",
  "Full Stack Developer",
  "App Developer",
  "Freelance Problem Solver",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  useEffect(() => {
    setText(texts[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <section id="who" className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Open to freelance and remote opportunities</p>
        <h1>
          Hi, I am <span>Sumit Singh</span>
        </h1>
        <h2>
          I turn raw data into clear dashboards, insights, and intelligent
          products as a <strong className="typing-text">{text}</strong>.
        </h2>
        <p className="hero-summary">
          I work across data analysis, data science, and full-stack
          development: from cleaning data and building Power BI or Excel
          dashboards to creating Python/SQL workflows, predictive models, APIs,
          responsive MERN/Firebase web apps, and mobile-ready apps that make
          insights easy to use.
        </p>

        <div className="hero-actions">
          <a href={Resume} download="Sumit_Singh_Resume.pdf" className="primary-btn">
            Download Resume
          </a>
          <a href="#contact" className="secondary-btn">
            Hire Me for Freelance Work
          </a>
        </div>

        <div className="hero-metrics" aria-label="Portfolio highlights">
          <div>
            <strong>Analytics</strong>
            <span>Dashboards, reports, KPIs</span>
          </div>
          <div>
            <strong>Data Science</strong>
            <span>Python, ML, forecasting</span>
          </div>
          <div>
            <strong>Apps + Full Stack</strong>
            <span>React, Node, Firebase, mobile</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <img src={Profile} alt="Sumit Singh" />
          <div>
            <h3>Available for projects</h3>
            <p>
              Dashboards, data analysis, ML prototypes, full-stack apps, and
              mobile apps.
            </p>
          </div>
        </div>
        <div className="insight-panel">
          <div className="panel-topline">
            <span>Insight Pipeline</span>
            <strong>Live</strong>
          </div>
          <div className="chart-bars" aria-hidden="true">
            <span style={{ height: "42%" }}></span>
            <span style={{ height: "70%" }}></span>
            <span style={{ height: "54%" }}></span>
            <span style={{ height: "86%" }}></span>
            <span style={{ height: "64%" }}></span>
          </div>
          <ul>
            <li>Data cleaning and SQL analysis</li>
            <li>Business dashboards and KPI tracking</li>
            <li>ML, web, and app deployment-ready demos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
