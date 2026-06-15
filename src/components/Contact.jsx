import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+91 9967021767",
      href: "tel:+919967021767",
    },
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      value: "Chat about a freelance project",
      href: "https://wa.me/919967021767",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sunnysumit2003@gmail.com",
      href: "mailto:sunnysumit2003@gmail.com",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "Connect professionally",
      href: "https://www.linkedin.com/in/sumit-singh-607014372",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "View code and projects",
      href: "https://github.com/SUMIT06122003",
    },
    {
      icon: <FaInstagram />,
      label: "Freelance Page",
      value: "@freelance.sumit",
      href: "https://www.instagram.com/freelance.sumit/",
    },
  ];

  return (
    <section id="contact" className="section contact-section">
      <p className="eyebrow">Contact</p>
      <h2>Let Us Build Something Useful With Your Data</h2>
      <p className="section-intro">
        I am open to freelance work for dashboards, data analysis, ML
        prototypes, portfolio websites, full-stack apps, mobile apps, and
        business web apps.
      </p>

      <div className="contact-grid">
        {contacts.map((item) => (
          <a
            className="contact-card"
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            key={item.label}
          >
            <span>{item.icon}</span>
            <div>
              <strong>{item.label}</strong>
              <p>{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
