import React, { useEffect, useState } from "react";

const sections = [
  { id: "who", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "certifications", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [active, setActive] = useState("who");
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "who";

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 160) {
          current = id;
        }
      });

      setActive(current);
      setVisible(window.scrollY <= lastScrollY || window.scrollY < 80);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`site-header ${visible ? "" : "site-header-hidden"}`}>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="menu-toggle"
        aria-label="Toggle navigation"
      >
        Menu
      </button>

      <a href="#who" className="site-name">
        Sumit Singh
        <span>Data + Full Stack + Apps</span>
      </a>

      <nav className="desktop-menu" aria-label="Main navigation">
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className={active === id ? "active" : ""}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={active === id ? "active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
