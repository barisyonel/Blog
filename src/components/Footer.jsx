import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
// Logo public klasöründe olduğu için doğrudan referans veriyoruz
import "../styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/905301129440', '_blank');
  };

  // Handle footer navigation with hash
  const handleFooterNavClick = (e, hash) => {
    e.preventDefault();
    
    // If we're on home page, just scroll
    if (location.pathname === '/') {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // If we're on a different page, navigate to home with hash
      const hashValue = hash.replace('#', '');
      navigate(`/#${hashValue}`, { replace: false });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/logo.jpg" alt="Logo" className="footer-logo-image" />
            <span className="footer-tag">&lt;&gt;</span> Barış Can Yönel <span className="footer-tag">&lt;/&gt;</span>
          </div>
          
          <nav className="footer-nav">
            <a href="#header" onClick={(e) => handleFooterNavClick(e, '#header')}>{t('nav.home')}</a>
            <a href="#about" onClick={(e) => handleFooterNavClick(e, '#about')}>{t('nav.about')}</a>
            <a href="#projects" onClick={(e) => handleFooterNavClick(e, '#projects')}>{t('nav.projects')}</a>
            <a href="#education" onClick={(e) => handleFooterNavClick(e, '#education')}>{t('nav.education')}</a>
            <a href="#contact" onClick={(e) => handleFooterNavClick(e, '#contact')}>{t('nav.contact')}</a>
          </nav>

          <div className="social-links">
            <a 
              href="https://github.com/barisyonel" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://www.linkedin.com/in/barisyonel" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              href="https://www.instagram.com/barisyonel" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Barış Can Yönel. {t('footer.rights')}
          </p>
        </div>
      </div>

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={openWhatsApp} aria-label="WhatsApp ile iletişime geç">
        <FontAwesomeIcon icon={faWhatsapp} />
      </button>

      {/* Scroll to top button */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Yukarı çık">
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </footer>
  );
};

export default Footer;
