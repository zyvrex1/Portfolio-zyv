import "./header.css";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">ZYV</div>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
        <span className={isOpen ? "line open" : "line"}></span>
      </div>

      <nav className={`nav ${isOpen ? "show" : ""}`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          onClick={() => setIsOpen(false)}
        >
          About
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
