import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from '../components/Footer';

const CityPage = () => {
  const { city } = useParams();
  const { t } = useTranslation();
  
  // Şehir isimlerini normalize et (tokat -> Tokat)
  const normalizeCity = (cityName) => {
    if (!cityName) return 'Türkiye';
    return cityName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const cityName = normalizeCity(city || 'tokat');
  const citySlug = city || 'tokat';
  
  // Şehir bazlı SEO içerikleri
  const citySEO = {
    'tokat': {
      title: `Tokat Web Sitesi | ${cityName} Web Tasarım Hizmetleri - Barış Can Yönel`,
      description: `${cityName} için profesyonel web sitesi tasarımı ve web tasarım hizmetleri. ${cityName}'da kurumsal web sitesi, e-ticaret sitesi, responsive tasarım ve SEO optimizasyonu. Barış Can Yönel ile ${cityName}'da modern web sitenizi oluşturun.`,
      keywords: `${cityName.toLowerCase()} web sitesi, ${cityName.toLowerCase()} web tasarım, ${cityName.toLowerCase()} internet sitesi, ${cityName.toLowerCase()} web sitesi yapımı, ${cityName.toLowerCase()} kurumsal web sitesi, ${cityName.toLowerCase()} e-ticaret sitesi, ${cityName.toLowerCase()} responsive tasarım, ${cityName.toLowerCase()} seo, web sitesi oluşturma, web tasarım hizmetleri, barış can yönel`
    },
    'istanbul': {
      title: `İstanbul Web Sitesi | ${cityName} Web Tasarım Hizmetleri - Barış Can Yönel`,
      description: `${cityName} için profesyonel web sitesi tasarımı ve web tasarım hizmetleri. ${cityName}'da kurumsal web sitesi, e-ticaret sitesi, responsive tasarım ve SEO optimizasyonu. Barış Can Yönel ile ${cityName}'da modern web sitenizi oluşturun.`,
      keywords: `${cityName.toLowerCase()} web sitesi, ${cityName.toLowerCase()} web tasarım, ${cityName.toLowerCase()} internet sitesi, ${cityName.toLowerCase()} web sitesi yapımı, ${cityName.toLowerCase()} kurumsal web sitesi, ${cityName.toLowerCase()} e-ticaret sitesi, ${cityName.toLowerCase()} responsive tasarım, ${cityName.toLowerCase()} seo, web sitesi oluşturma, web tasarım hizmetleri, barış can yönel`
    }
  };

  // Varsayılan SEO (şehir bulunamazsa)
  const defaultSEO = {
    title: `${cityName} Web Sitesi | Web Tasarım Hizmetleri - Barış Can Yönel`,
    description: `${cityName} için profesyonel web sitesi tasarımı ve web tasarım hizmetleri. ${cityName}'da kurumsal web sitesi, e-ticaret sitesi, responsive tasarım ve SEO optimizasyonu.`,
    keywords: `${cityName.toLowerCase()} web sitesi, ${cityName.toLowerCase()} web tasarım, ${cityName.toLowerCase()} internet sitesi, web sitesi oluşturma, web tasarım hizmetleri, barış can yönel`
  };

  const seoData = citySEO[citySlug.toLowerCase()] || defaultSEO;

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Ana Sayfa",
        "item": "https://bariscanyonel.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": `${cityName} Web Tasarım`,
        "item": `https://bariscanyonel.com/${citySlug}-web-tasarim`
      }
    ]
  };

  // LocalBusiness Schema (şehir bazlı)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Barış Can Yönel - ${cityName} Web Tasarım Hizmetleri`,
    "description": `${cityName} için profesyonel web tasarım ve web sitesi geliştirme hizmetleri`,
    "url": `https://bariscanyonel.com/${citySlug}-web-tasarim`,
    "telephone": "+90-530-112-9440",
    "email": "bariscan.yonel60@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityName,
      "addressCountry": "TR"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName
    },
    "serviceType": [
      "Web Sitesi Tasarımı",
      "E-Ticaret Sitesi",
      "Kurumsal Web Sitesi",
      "Responsive Tasarım",
      "SEO Optimizasyonu"
    ]
  };

  return (
    <>
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonical={`/${citySlug}-web-tasarim`}
      />
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>

      <div className="city-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Breadcrumb" style={{ padding: '20px', background: '#f8f9fa' }}>
          <div className="container">
            <a href="/">{t('services.breadcrumbHome')}</a>
            <span> / </span>
            <span>{cityName} Web Tasarım</span>
          </div>
        </nav>

        {/* City Specific Header */}
        <section className="city-header" style={{ padding: '60px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
          <div className="container">
            <h1>{cityName} Web Sitesi ve Web Tasarım Hizmetleri</h1>
            <p style={{ fontSize: '18px', marginTop: '20px', maxWidth: '800px', margin: '20px auto 0' }}>
              {cityName}'da faaliyet gösteren işletmeler için profesyonel web sitesi tasarımı, 
              e-ticaret sitesi, kurumsal web sitesi ve SEO optimizasyonu hizmetleri. 
              Modern, responsive ve kullanıcı dostu web siteleri ile dijital varlığınızı güçlendirin.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default CityPage;

