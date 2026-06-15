import React from "react";
import {
  FaChartLine,
  FaDatabase,
  FaFileExcel,
  FaMobileAlt,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiFirebase,
  SiJupyter,
  SiMongodb,
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
      title: "Data Science",
      skills: [
        { name: "Python", icon: <FaPython /> },
        { name: "Pandas", icon: <SiPandas /> },
        { name: "Scikit-learn", icon: <SiScikitlearn /> },
        { name: "Jupyter", icon: <SiJupyter /> },
      ],
    },
    {
      title: "Full Stack Development",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js / Express", icon: <FaServer /> },
        { name: "Mobile Apps", icon: <FaMobileAlt /> },
        {
          name: "MongoDB / Firebase",
          icon: (
            <>
              <SiMongodb />
              <SiFirebase />
            </>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="section section-raised">
      <p className="eyebrow">Relevant skills</p>
      <h2>Data, Science, Full Stack, and App Toolkit</h2>
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
