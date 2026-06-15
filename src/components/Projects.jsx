import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Freelance Data Analytics Services",
      tag: "Available",
      description:
        "Dashboards, Excel/Power BI reporting, SQL analysis, data cleaning, KPI tracking, full-stack web apps, mobile apps, and insight summaries for small businesses, students, and creators.",
      links: [{ label: "Start a Project", href: "#contact" }],
    },
    {
      title: "Smart Travel Assistance",
      tag: "Data Science",
      description:
        "Final-year major project focused on smarter travel support using structured data, recommendation logic, and a user-friendly application experience.",
      links: [],
    },
    {
      title: "CustomX App",
      tag: "Full Stack + App",
      description:
        "Built admin and player panels for Free Fire paid tournaments and matches, including CustomX 2.0 with improved UI, KYC panel, and app-ready delivery.",
      links: [{ label: "APK Demo", href: "https://customx-1.netlify.app/" }],
    },
    {
      title: "Expense Tracker App",
      tag: "App + Analytics",
      description:
        "A CRUD expense tracker built with React and Firebase. The project demonstrates clean data capture, filtering potential, and mobile export as an APK.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/SUMIT06122003/expense-tracker",
        },
        {
          label: "Live Demo",
          href: "https://expense-tracker-bysumit.netlify.app/",
        },
      ],
    },
    {
      title: "CodexIntern Internship Project",
      tag: "Frontend",
      description:
        "Created a responsive testing website during my frontend internship, strengthening my UI development and deployment skills.",
      links: [
        { label: "GitHub", href: "https://github.com/SUMIT06122003/codexintern" },
        { label: "Live Demo", href: "https://codexintern.netlify.app/" },
      ],
    },
    {
      title: "College Projects",
      tag: "Practice",
      description:
        "Built a quiz app, calculator, shoes shopping website, book store management system, and this responsive portfolio.",
      links: [
        {
          label: "Portfolio Demo",
          href: "https://my-portfoilio-sumit.netlify.app/",
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
