import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

const About = () => {
  const { t } = useTranslation();

  const skills = t('about.skills', { returnObjects: true });
  const services_list = t('about.services_list', { returnObjects: true });
  const reasons = t('about.reasons', { returnObjects: true });

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h1 className="greeting" data-aos="fade-up">
          {t('about.greeting')}, <span className="name">Barış Can Yönel</span>
        </h1>
        <h2 className="title" data-aos="fade-up" data-aos-delay="100">
          {t('about.role')} <span className="highlight">Uzmanı</span>
        </h2>
        <h3 className="subtitle" data-aos="fade-up" data-aos-delay="150">
          Web Sitesi Tasarımı | E-Ticaret Sitesi | Responsive Tasarım | SEO Optimizasyonu
        </h3>
        
        <div className="about-content" data-aos="fade-up" data-aos-delay="200">
          <p className="description" dangerouslySetInnerHTML={{ __html: t('about.description') }} />
          
          <div className="services-overview" data-aos="fade-up" data-aos-delay="300">
            <h3 className="services-title">{t('about.services_title')}</h3>
            <ul className="services-list">
              {services_list.map((service, index) => (
                <li key={index}>✅ {service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="skills-section" data-aos="fade-up" data-aos-delay="400">
          <h3 className="skills-title">{t('about.skills_title')}</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-tag"
                data-aos="fade-up"
                data-aos-delay={500 + (index * 50)}
                title={skill.description}
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        
        <div className="why-choose-us" data-aos="fade-up" data-aos-delay="600">
          <h3 className="why-title">{t('about.why_title')}</h3>
          <div className="reasons-grid">
            {reasons.map((reason, index) => (
              <div className="reason-item" key={index}>
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
