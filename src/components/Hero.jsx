import React, { useEffect, useState } from "react";
import Profile from "../assets/profile.jpeg";
import Resume from "../assets/Sumit_Singh_Resume.pdf";

const texts = [
  "Data Analyst",
  "Business Analyst",
  "Data Scientist",
  "Data Engineer",
  "BI Dashboard Developer",
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
          I turn raw data into business dashboards, insights, and predictive
          analysis as a <strong className="typing-text">{text}</strong>.
        </h2>
        <p className="hero-summary">
          My main domain is data. I work across data analytics, business
          analytics, data science, and data engineering: from cleaning Kaggle
          datasets and writing SQL/Python workflows to building Power BI
          dashboards, KPI reports, machine learning prototypes, and
          decision-ready business insights.
        </p>

        <div className="hero-actions">
          <a href={Resume} download="Sumit_Singh_Resume.pdf" className="primary-btn">
            Download Resume
          </a>
          <a href="#contact" className="secondary-btn">
            Hire Me for Data Work
          </a>
        </div>

        <div className="hero-metrics" aria-label="Portfolio highlights">
          <div>
            <strong>Data Analytics</strong>
            <span>Excel, SQL, Power BI, KPIs</span>
          </div>
          <div>
            <strong>Business Analytics</strong>
            <span>Trends, reports, decisions</span>
          </div>
          <div>
            <strong>Data Science + Engineering</strong>
            <span>Python, ML, pipelines</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <img src={Profile} alt="Sumit Singh" />
          <div>
            <h3>Available for data projects</h3>
            <p>
              Power BI dashboards, SQL analysis, data cleaning, business
              reports, ML prototypes, and analytics portfolios.
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
            <li>Data cleaning, modeling, and SQL analysis</li>
            <li>Business dashboards and KPI storytelling</li>
            <li>Machine learning and data pipeline prototypes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
