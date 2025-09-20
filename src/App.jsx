import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
      </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
