import React from 'react';
import { useTranslation } from 'react-i18next';
import FAQSchema from '../components/FAQSchema';
import '../styles/About.css';

const About = () => {
  const { t } = useTranslation();

  const skills = t('about.skills', { returnObjects: true });
  const services_list = t('about.services_list', { returnObjects: true });
  const reasons = t('about.reasons', { returnObjects: true });

  const faqs = [
    {
      question: "Internet sitesi oluşturma süresi ne kadar?",
      answer: "Internet sitesi oluşturma süresi, projenin kapsamına göre değişmektedir. Basit kurumsal siteler için 7-14 gün, e-ticaret siteleri için 3-4 hafta sürmektedir. Detaylı bilgi için iletişime geçebilirsiniz."
    },
    {
      question: "Web sitesi oluşturma fiyatları ne kadar?",
      answer: "Web sitesi oluşturma fiyatları, ihtiyaçlarınıza göre belirlenmektedir. Profesyonel web sitesi tasarımı, e-ticaret sitesi, responsive tasarım ve SEO optimizasyonu dahil paketlerimiz mevcuttur. Ücretsiz teklif almak için iletişime geçebilirsiniz."
    },
    {
      question: "Internet sitesi oluşturduktan sonra güncelleme yapabilir miyim?",
      answer: "Evet, admin paneli ile web sitenizi kolayca güncelleyebilirsiniz. Ayrıca web sitesi bakım hizmetimiz ile düzenli güncellemeler, güvenlik yamaları ve teknik destek sağlıyoruz."
    },
    {
      question: "Responsive web tasarım nedir?",
      answer: "Responsive web tasarım, web sitenizin tüm cihazlarda (mobil, tablet, masaüstü) mükemmel görünmesini sağlayan tasarım yaklaşımıdır. Google'ın mobil öncelikli indeksleme politikası nedeniyle responsive tasarım artık zorunluluk haline gelmiştir."
    },
    {
      question: "SEO optimizasyonu dahil mi?",
      answer: "Evet, tüm web sitelerimizde temel SEO optimizasyonu dahildir. Meta tag optimizasyonu, hızlı yükleme, mobil uyumluluk, structured data (Schema.org) ve sitemap.xml gibi SEO teknikleri uygulanmaktadır."
    },
    {
      question: "E-ticaret sitesi için ödeme sistemi entegrasyonu yapılıyor mu?",
      answer: "Evet, e-ticaret sitelerinde güvenli ödeme sistemleri entegre ediyoruz. İyzico, PayTR, Stripe gibi ödeme gateway'leri ile entegrasyon yapılmaktadır."
    }
  ];

  return (
    <section id="about" className="about">
      <FAQSchema faqs={faqs} />
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
