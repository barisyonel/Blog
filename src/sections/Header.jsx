import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Header.css";
import { FaLaptopCode, FaMobileAlt, FaSearch, FaRocket, FaTools } from "react-icons/fa";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import mygolden from "../assets/projects/mygolden.png";
import izmak from "../assets/projects/sos-multiplayer.jpg";

const images = [slider1, slider2, mygolden, izmak];

const Header = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const services = t('header.services', { returnObjects: true });

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="header" className="header">
      <div className="header-content">
        <div className="header-seo-content">
          <h1 className="header-main-title">
            {t('header.title')}
          </h1>
          <h2 className="header-subtitle">
            Web Tasarım Uzmanı | Responsive Web Sitesi | SEO Optimizasyonu
          </h2>
          <p className="header-description">
            {t('header.description')}
          </p>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-arrow left" onClick={prevSlide} aria-label="Önceki resim">&lt;</button>
          <img 
            src={images[current]} 
            alt={`CODE AFTER web geliştirme projesi ${current + 1}`} 
            className="carousel-image" 
          />
          <button className="carousel-arrow right" onClick={nextSlide} aria-label="Sonraki resim">&gt;</button>
        </div>
        
        <div className="header-services">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              <span className="service-icon" aria-hidden="true">
                {
                  idx === 0 ? <FaLaptopCode /> :
                  idx === 1 ? <FaMobileAlt /> :
                  idx === 2 ? <FaSearch /> :
                  idx === 3 ? <FaRocket /> :
                  <FaTools />
                }
              </span>
              <span className="service-title">{service.title}</span>
              <span className="service-description">{service.description}</span>
            </div>
          ))}
        </div>
        
        <a href="#contact" className="header-cta" aria-label="Ücretsiz teklif almak için iletişime geçin">
          {t('header.cta')}
        </a>
      </div>
    </section>
  );
};

export default Header;
