import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HeaderNext.css";
import personaldata from "./personal.json";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            {personaldata.header.name}
          </Link>
        </div>

        <nav className={`nav${isMobileMenuOpen ? " nav-open" : ""}`}>
          {personaldata.header.navLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* ✅ Resume routed via React Router */}
          <Link to="/resume" onClick={closeMenu} className="resume-nav">
            Resume
          </Link>
        </nav>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
