// src/components/Header.jsx
import "./header.css";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu after click
    }
  };

  return (
    <header className="header">

      {/* Burger Icon */}
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      <nav className={`nav ${isOpen ? "show" : ""}`}>
        <button className="nav-link" onClick={() => scrollToSection("home")}>
          Home
        </button>
        <button className="nav-link" onClick={() => scrollToSection("about")}>
          About
        </button>
        <button className="nav-link" onClick={() => scrollToSection("service")}>
          Services
        </button>
        <button className="nav-link" onClick={() => scrollToSection("projects")}>
          Projects
        </button>
        <button className="nav-link" onClick={() => scrollToSection("contact")}>
          Contact
        </button>
      </nav>
    </header>
  );
}

export default Header;
