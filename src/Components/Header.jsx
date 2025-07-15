import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ✅ Added for navigation
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

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <a href="#home">{personaldata.header.name}</a>
        </div>

        <nav className={`nav${isMobileMenuOpen ? " nav-open" : ""}`}>
          {personaldata.header.navLinks.map(link => (
            <a
              href={link.href}
              key={link.label}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* 🧭 Resume Link now routed to /resume page */}
          <Link
            to="/resume"
            onClick={() => setIsMobileMenuOpen(false)}
            className="resume-nav"
          >
            Resume
          </Link>
        </nav>

        {/* <div className="header-actions">
          <a
            href={personaldata.resume?.pdf}
            className="btn btn-outline"
            download
          >
            Download PDF
          </a>
          <a
            href={personaldata.resume?.doc}
            className="btn btn-outline"
            download
          >
            Download Word
          </a>
        </div> */}

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