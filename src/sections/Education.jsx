import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "../styles/Education.css";
// Ekip üyelerinin fotoğrafları kaldırıldı - kişisel portföy için

const educationData = [
  {
    id: 1,
    title: "Mudanya Üniversitesi Sertifikası",
    titleEn: "Mudanya University Certificate",
    provider: "Mudanya Üniversitesi",
    providerEn: "Mudanya University",
    date: "2023",
    image: "/education/mudanya-universitesi.jpg",
    link: "#",
    description: "Web Geliştirme ve Programlama eğitimi kapsamında alınan sertifika.",
    descriptionEn: "Certificate received as part of Web Development and Programming training.",
  },
  {
    id: 2,
    title: "Neos Yazılım Akademisi - Full Stack Developer Eğitimi",
    titleEn: "Neos Software Academy - Full Stack Developer Training",
    provider: "Neos Akademi",
    providerEn: "Neos Academy",
    date: "2023",
    image: "/education/neos-cert.jpg",
    link: "https://www.neos.com.tr",
    description: "Modern web teknolojileri ve full stack geliştirme üzerine kapsamlı eğitim.",
    descriptionEn: "Comprehensive training on modern web technologies and full stack development.",
  },
  {
    id: 3,
    title: "React ile Modern Web Geliştirme",
    titleEn: "Modern Web Development with React",
    provider: "Udemy",
    providerEn: "Udemy",
    date: "2022",
    image: "/education/react-udemy.jpg",
    link: "https://www.udemy.com/course/react-kursu/",
    description: "React.js ile modern web uygulamaları geliştirme eğitimi.",
    descriptionEn: "Training on developing modern web applications with React.js.",
  },
  {
    id: 4,
    title: "React ile Web Programcılığı",
    titleEn: "Web Programming with React",
    provider: "BTK Akademi",
    providerEn: "BTK Academy",
    date: "2022",
    image: "/education/react.png",
    description: "React temelleri ve web programlama eğitimi.",
    descriptionEn: "Training on React fundamentals and web programming.",
  },
  {
    id: 5,
    title: "JavaScript ve Modern Web Geliştirme",
    titleEn: "JavaScript and Modern Web Development",
    provider: "Udemy",
    providerEn: "Udemy",
    date: "2023",
    image: "/education/react-udemy.jpg",
    link: "https://www.udemy.com/course/javascript-kursu/",
    description: "Modern JavaScript ES6+, DOM manipülasyonu ve web geliştirme temelleri eğitimi.",
    descriptionEn: "Modern JavaScript ES6+, DOM manipulation and web development fundamentals training.",
  },
  {
    id: 6,
    title: "CSS ve Responsive Tasarım",
    titleEn: "CSS and Responsive Design",
    provider: "FreeCodeCamp",
    providerEn: "FreeCodeCamp",
    date: "2023",
    image: "/education/react.png",
    link: "https://www.freecodecamp.org/",
    description: "CSS3, Flexbox, Grid ve responsive web tasarımı eğitimi.",
    descriptionEn: "CSS3, Flexbox, Grid and responsive web design training.",
  },
];

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t, i18n } = useTranslation();

  return (
    <section id="education" className="education">
      <div className="education-container">
        <h2 className="section-title" data-aos="fade-up">{t('education.title')}</h2>
        <div className="education-grid">
          {educationData.map((item, index) => (
            <div
              key={item.id}
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div 
                className="education-image-container"
                onClick={() => setSelectedImage(item.image)}
              >
              <img
                  src={item.image} 
                  alt={i18n.language === 'tr' ? item.title : item.titleEn} 
                className="education-image"
              />
                <div className="education-overlay">
                  <span className="view-certificate">{t('education.viewCertificate')}</span>
                </div>
            </div>
              <div className="education-info">
                <h3>{i18n.language === 'tr' ? item.title : item.titleEn}</h3>
                <p className="education-provider">
                  {i18n.language === 'tr' ? item.provider : item.providerEn}
                  <span className="education-date">{item.date}</span>
                </p>
                <p className="education-description">
                  {i18n.language === 'tr' ? item.description : item.descriptionEn}
                </p>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    {t('education.viewCertificate')}
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            )}
              </div>
          </div>
        ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedImage(null)}>
              &times;
            </span>
            <img src={selectedImage} alt="Certificate" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;
