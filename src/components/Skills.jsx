import React from "react";
import {
  FaChartLine,
  FaDatabase,
  FaFileExcel,
  FaPython,
  FaServer,
} from "react-icons/fa";
import {
  SiApacheairflow,
  SiJupyter,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

export default function Skills() {
  const skillGroups = [
    {
      title: "Data Analytics",
      skills: [
        { name: "Excel", icon: <FaFileExcel /> },
        { name: "Power BI", icon: <FaChartLine /> },
        { name: "SQL", icon: <FaDatabase /> },
        { name: "KPI Dashboards", icon: <FaChartLine /> },
      ],
    },
    {
      title: "Business Analytics",
      skills: [
        { name: "Business KPIs", icon: <FaChartLine /> },
        { name: "Trend Analysis", icon: <FaChartLine /> },
        { name: "Reporting", icon: <FaFileExcel /> },
        { name: "Decision Insights", icon: <FaDatabase /> },
      ],
    },
    {
      title: "Data Science",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Jupyter", icon: <SiJupyter /> },
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Data Pipelines", icon: <SiApacheairflow /> },
        { name: "ETL Workflows", icon: <FaServer /> },
        { name: "SQL Databases", icon: <FaDatabase /> },
        { name: "Python Automation", icon: <FaPython /> },
      ],
    },
  ];

  return (
    <section id="skills" className="section section-raised">
      <p className="eyebrow">Relevant skills</p>
      <h2>Analytics, BI, Data Science, and Engineering Toolkit</h2>
      <div className="skill-groups">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-grid">
              {group.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <span className="skill-icon">{skill.icon}</span>
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
