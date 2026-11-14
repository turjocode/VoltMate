import { useEffect, useState } from "react";
import "./Sidebar.css";

const sections = [
    { id: "home", label: "Home", icon: "fa-house" },
    { id: "how-it-works", label: "How It Works", icon: "fa-circle-play" },
    { id: "for-seekers", label: "For Seekers", icon: "fa-magnifying-glass" },
    { id: "for-providers", label: "For Providers", icon: "fa-bolt" },
    { id: "why-voltmate", label: "Why VoltMate", icon: "fa-lightbulb" },
    { id: "safety", label: "Safety & Trust", icon: "fa-shield-halved" },
    { id: "final-cta", label: "Get Started", icon: "fa-arrow-right" },
];

function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
        const marker = window.scrollY + window.innerHeight * 0.4;

        let currentSection = sections[0].id;

        sections.forEach(({ id }) => {
        const element = document.getElementById(id);

        if (element && element.offsetTop <= marker) {
            currentSection = id;
        }
        });

        setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);

  return (
    <nav className="floating-sidebar" aria-label="Page navigation">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`sidebar-link ${
            activeSection === section.id ? "active" : ""
          }`}
          aria-label={section.label}
          title={section.label}
        >
          <i className={`fa-solid ${section.icon}`} aria-hidden="true"></i>
          <span className="sidebar-tooltip">{section.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default Sidebar;