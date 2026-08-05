import React from "react";
import ibmDashboard from "../assets/dashboards/ibm-dashboard.jpeg";
import nvidiaDashboard from "../assets/dashboards/nvidia-dashboard.jpeg";

export default function Projects() {
  const projects = [
    {
      title: "IBM HR Analytics Power BI Dashboard",
      tag: "Power BI + Kaggle",
      image: ibmDashboard,
      description:
        "Created an interactive HR analytics dashboard using an IBM employee dataset from Kaggle. The report explores employee count, job level, overtime, education field, department, business travel, role distribution, and gender breakdown.",
      links: [],
    },
    {
      title: "NVIDIA GPU Sales BI Dashboard",
      tag: "Power BI + Kaggle",
      image: nvidiaDashboard,
      description:
        "Built a dark-themed NVIDIA GPU business intelligence dashboard from a Kaggle dataset, tracking revenue, units sold, customer rating, selling price, region-wise revenue, stock status, GPU model, and product family performance.",
      links: [],
    },
    {
      title: "Freelance Data Analytics Services",
      tag: "Available",
      description:
        "Power BI dashboards, Excel reporting, SQL analysis, data cleaning, KPI tracking, business analytics summaries, and data storytelling for students, creators, and small businesses.",
      links: [{ label: "Start a Project", href: "#contact" }],
    },
    {
      title: "Smart Travel Assistance",
      tag: "Data Science",
      description:
        "Final-year major project focused on smarter travel support using structured data, recommendation logic, analysis workflows, and a user-friendly decision support experience.",
      links: [],
    },
    {
      title: "Data Cleaning and KPI Reporting",
      tag: "Analytics",
      description:
        "Practice projects focused on transforming raw datasets into clean tables, meaningful metrics, dashboard-ready models, and business-friendly summaries using Excel, SQL, Python, and Power BI.",
      links: [],
    },
    {
      title: "Portfolio and Learning Projects",
      tag: "Practice",
      description:
        "Built dashboards, analytics exercises, SQL/Python practice notebooks, and this portfolio to present data work, certifications, and project outcomes clearly.",
      links: [
        {
          label: "Portfolio Demo",
          href: "https://portfolio-iota-umber-l7p1zjlc8j.vercel.app/",
        },
      ],
    },
  ];

  return (
    <section id="projects" className="section section-raised">
      <p className="eyebrow">Work and services</p>
      <h2>Projects Built With Data Thinking</h2>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            {project.image && (
              <img className="project-image" src={project.image} alt={project.title} />
            )}
            <span className="status-pill">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="link-row">
              {project.links.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel={link.href.startsWith("#") ? undefined : "noopener noreferrer"}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
