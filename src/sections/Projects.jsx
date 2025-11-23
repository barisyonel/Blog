import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faChrome } from "@fortawesome/free-brands-svg-icons";
import "../styles/Projects.css";

// Proje görselleri import
import mygoldenImg from "../assets/projects/mygolden.png";
import yonelImg from "../assets/projects/yonel.jpg";
import polatImg from "../assets/projects/polat.jpg";
import sigortaImg from "../assets/projects/sigorta-acentesi.jpg";
import lezzetImg from "../assets/projects/lezzet-tarifleri.jpg";
import restaurantImg from "../assets/projects/restaurant-menu.jpg";
import newsImg from "../assets/projects/news.jpg";
  import izmakImg from "../assets/projects/sos-multiplayer.jpg";
import beautyImg from "../assets/projects/beauty-saloon.jpg";
import balsanImg from "../assets/projects/balsan.png";
import integralImg from "../assets/projects/integral.png";

const projectImages = {
  1: integralImg,
  2: balsanImg,
  3: mygoldenImg,
  4: yonelImg,
  5: polatImg,
  6: izmakImg,
  7: lezzetImg,
  8: restaurantImg,
  9: newsImg,
  10: sigortaImg,
  11: beautyImg,
};

const projectLinks = {
  1: { github: "https://github.com/barisyonel/integral1", demo: "https://integral1-theta.vercel.app/" },
  2: { github: "https://github.com/barisyonel/balsann", demo: "https://www.balsanpapel.com/" },
  3: { github: "https://github.com/barisyonel/mygoldenfood", demo: "https://mygoldenfood.com/" },
  4: { github: "https://github.com/barisyonel/YonelTicaret", demo: "yonel.netlify.app" },
  5: { github: "https://github.com/barisyonel/polat-mermer-designs", demo: "polatmermer.com" },
  6: { github: "https://github.com/barisyonel/izmak", demo: "https://izmirmakinakalip.com" },
  7: { github: "https://github.com/barisyonel/lezzet-tarifleri", demo: "" },
  8: { github: "https://github.com/barisyonel/restaurant-menu", demo: "" },
  9: { github: "https://github.com/barisyonel/news-app", demo: "" },
  10: { github: "https://github.com/barisyonel/sigorta-acentesi", demo: "" },
  11: { github: "https://github.com/barisyonel/beauty-saloon", demo: "" },
};

const projectTech = {
  1: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
  2: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Express.js"],
  3: ["HTML", "CSS", "JavaScript", "C#", "ASP.NET Core", ".NET"],
  4: ["Next.js", "React", "Tailwind CSS", "Node.js", "Express.js", "mongoDb", "TypeScript", "Framer Motion"],
  5: ["React.js", "Material-UI", "Framer Motion", "Node.js", "Express.js", "TypeScript", "Framer Motion"],
  6: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Mongoose", "Netlify", "Railway"],
  7: ["React", "Firebase", "Material-UI", "Express.js"],
  8: ["React", "Redux", "Node.js", "MongoDB"],
  9: ["Next.js", "Tailwind CSS", "NewsAPI", "TypeScript"],
  10: ["React", "Next.js", "Tailwind CSS", "Node.js"],
  11: ["React", "Styled Components", "Framer Motion"],
};


const Projects = () => {
  const { t } = useTranslation();
  const [hoveredId, setHoveredId] = useState(null);

  const projectsData = t('projects.list', { returnObjects: true }) || [];
  const categories = t('projects.categories', { returnObjects: true }) || [];
  const [selectedCategory, setSelectedCategory] = useState(categories[0] || 'Tümü');


  const filteredProjects = selectedCategory === (categories[0] || 'Tümü') 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title" data-aos="fade-up">{t('projects.title')}</h2>
        <h3 className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          {t('projects.subtitle')}
        </h3>
        
        <div className="category-filter" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
            <div className="project-image-container">
                <img 
                  src={projectImages[project.id]} 
                  alt={`${project.title} - Barış Can Yönel referans projesi`} 
                  className="project-image"
                />
                <div className={`project-overlay ${hoveredId === project.id ? 'active' : ''}`}>
                  <div className="project-links">
                    <a href={projectLinks[project.id].github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FontAwesomeIcon icon={faGithub} />
                      <span>{t('projects.github_button')}</span>
                    </a>
                    {projectLinks[project.id].demo && (
                      <a href={projectLinks[project.id].demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <FontAwesomeIcon icon={faChrome} />
                        <span>{t('projects.demo_button')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {(projectTech[project.id] || []).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </section>
  );
};

export default Projects;
