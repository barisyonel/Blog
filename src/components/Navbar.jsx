import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram, faMedium } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "../styles/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Dil değiştirici
  const toggleLanguage = () => {
    const newLang = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLang);
  };

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.jpg" alt="Logo" className="logo-image" />
          <button className="language-toggle-btn desktop-only" onClick={toggleLanguage} aria-label="Dili değiştir">
            {i18n.language === 'tr' ? 'TR' : 'EN'}
          </button>
        </div>
        {/* Sağ üst köşe kontrolleri */}
        <div className="nav-controls-fixed">
          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {/* Dil seçici sadece mobil menüde görünsün */}
          <div className="mobile-language-toggle">
            <button className="language-toggle-btn" onClick={toggleLanguage} aria-label="Dili değiştir">
              {i18n.language === 'tr' ? 'TR' : 'EN'}
            </button>
          </div>
          <div className="nav-menu-items">
            <a href="#header" onClick={closeMenu} className="nav-link nav-link-gap">
              <span className="nav-link-text">{t("nav.home")}</span>
            </a>
            <a href="#about" onClick={closeMenu} className="nav-link nav-link-gap">
              <span className="nav-link-text">{t("nav.about")}</span>
            </a>
            <a href="#projects" onClick={closeMenu} className="nav-link nav-link-gap">
              <span className="nav-link-text">{t("nav.projects")}</span>
            </a>
            <a href="#education" onClick={closeMenu} className="nav-link nav-link-gap">
              <span className="nav-link-text">{t("nav.education")}</span>
            </a>
            <a href="#contact" onClick={closeMenu} className="nav-link nav-link-gap">
              <span className="nav-link-text">{t("nav.contact")}</span>
            </a>
          </div>
          <div className="nav-footer">
            <div className="social-icons">
              <a href="https://github.com/barisyonel" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://www.linkedin.com/in/barış-can-yönel-275292157/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/brsynl" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://medium.com/@baris60" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FontAwesomeIcon icon={faMedium} />
              </a>
            </div>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        <div 
          className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
        />
      </div>
    </nav>
  );
};

export default Navbar;
