import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import personaldata from "./personal.json";
import "./HeaderNext.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header${isScrolled ? " scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            {personaldata.header.name}
          </Link>
        </div>

        <nav className={`nav${isMobileMenuOpen ? " nav-open" : ""}`}>
          {personaldata.header.navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href.replace("#", ""))}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}

          <Link to="/resume" onClick={() => setIsMobileMenuOpen(false)} className="nav-link">
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
