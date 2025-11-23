import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Navbar from "./components/Navbar";
import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Blog from "./sections/Blog";
import BlogDetail from "./sections/BlogDetail";
import CityPage from "./sections/CityPage";
import Services from "./sections/Services";
import ServiceDetail from "./sections/ServiceDetail";
// Ekibimiz bölümü kaldırıldı - kişisel portföy için
import "./styles/global.css";
import "./styles/Blog.css";

// Ana sayfa bileşeni - Kişisel Portföy
const Home = () => (
  <>
    <Header />
    <About />
    <Projects />
    <Education />
    <Contact />
  </>
);

// Scroll to hash on route change
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    } else if (location.pathname === '/') {
      // Scroll to top when on home page without hash
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      AOS.refresh();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
      <div className="App">
        <ScrollToHash />
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/referanslar" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
            <Route path="/tokat-web-tasarim" element={<CityPage />} />
            <Route path="/:city-web-tasarim" element={<CityPage />} />
          </Routes>
          <Footer />
      </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
