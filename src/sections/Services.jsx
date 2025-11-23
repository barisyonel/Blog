import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/Services.css';

const Services = () => {
  const { t } = useTranslation();
  const services = [
    {
      slug: 'profesyonel-web-sitesi-tasarimi',
      title: 'Profesyonel Web Sitesi Tasarımı',
      description: 'Modern, kullanıcı dostu ve SEO uyumlu profesyonel web sitesi tasarımı. İşletmenizin dijital kimliğini güçlendiren özel tasarımlar.',
      features: [
        'Özel ve benzersiz tasarım',
        'Responsive (mobil uyumlu)',
        'SEO optimizasyonu',
        'Hızlı yükleme süresi',
        'Admin paneli',
        'İletişim formları'
      ],
      keywords: 'profesyonel web sitesi tasarımı, web sitesi yapımı, internet sitesi oluşturma, kurumsal web sitesi'
    },
    {
      slug: 'responsive-web-tasarim',
      title: 'Responsive Web Tasarım (Mobil Uyumlu)',
      description: 'Tüm cihazlarda mükemmel görünen, mobil uyumlu web siteleri. Tablet, telefon ve masaüstünde aynı kalitede deneyim.',
      features: [
        'Mobil öncelikli tasarım',
        'Tüm cihazlarda uyumlu',
        'Touch-friendly arayüz',
        'Hızlı mobil yükleme',
        'Google mobil uyumluluk testi',
        'Responsive görsel optimizasyonu'
      ],
      keywords: 'responsive web tasarım, mobil uyumlu web sitesi, responsive tasarım, mobil web sitesi'
    },
    {
      slug: 'e-ticaret-sitesi-gelistirme',
      title: 'E-Ticaret Sitesi Geliştirme',
      description: 'Satışlarınızı artıran, güvenli ödeme sistemli e-ticaret siteleri. Ürün yönetimi, sepet sistemi ve admin paneli ile tam kapsamlı çözümler.',
      features: [
        'Güvenli ödeme sistemleri',
        'Ürün yönetim paneli',
        'Sepet ve sipariş yönetimi',
        'Stok takibi',
        'Kargo entegrasyonu',
        'Müşteri hesap sistemi'
      ],
      keywords: 'e-ticaret sitesi, online satış sitesi, e-ticaret geliştirme, e-commerce sitesi'
    },
    {
      slug: 'admin-yonetim-paneli',
      title: 'Admin Yönetim Paneli ve İçerik Yönetimi',
      description: 'Web sitenizi kolayca yönetebileceğiniz, güçlü admin panelleri. İçerik, ürün ve kullanıcı yönetimi için kapsamlı çözümler.',
      features: [
        'Kullanıcı dostu admin paneli',
        'İçerik yönetim sistemi (CMS)',
        'Ürün yönetimi',
        'Görsel yükleme ve düzenleme',
        'Blog yönetimi',
        'Raporlama ve analitik'
      ],
      keywords: 'admin paneli, içerik yönetim sistemi, cms, web sitesi yönetim paneli'
    },
    {
      slug: 'kurumsal-web-sitesi-tasarimi',
      title: 'Kurumsal Web Sitesi Tasarımı',
      description: 'İşletmenizin profesyonel imajını yansıtan kurumsal web siteleri. Hizmet tanıtımı, referanslar ve iletişim odaklı tasarımlar.',
      features: [
        'Kurumsal kimlik uyumu',
        'Hizmet tanıtım sayfaları',
        'Referanslar ve portföy',
        'İletişim ve harita entegrasyonu',
        'Blog ve haber bölümü',
        'Çoklu dil desteği'
      ],
      keywords: 'kurumsal web sitesi, kurumsal web tasarım, şirket web sitesi, işletme web sitesi'
    },
    {
      slug: 'seo-optimizasyonu',
      title: 'SEO Optimizasyonu ve Google Sıralaması',
      description: 'Google\'da üst sıralarda yer alın. Organik trafik artışı ve arama motoru optimizasyonu ile dijital varlığınızı güçlendirin.',
      features: [
        'Anahtar kelime optimizasyonu',
        'Meta tag optimizasyonu',
        'Hızlı yükleme optimizasyonu',
        'Mobil uyumluluk',
        'Structured data (Schema.org)',
        'Sitemap ve robots.txt'
      ],
      keywords: 'seo optimizasyonu, google sıralaması, arama motoru optimizasyonu, seo hizmeti'
    },
    {
      slug: 'web-sitesi-bakim',
      title: 'Web Sitesi Bakım ve Güncelleme Hizmetleri',
      description: 'Web sitenizin her zaman güncel ve güvenli kalması için bakım hizmetleri. Düzenli güncellemeler, yedekleme ve teknik destek.',
      features: [
        'Düzenli içerik güncellemeleri',
        'Güvenlik güncellemeleri',
        'Yedekleme ve geri yükleme',
        'Performans optimizasyonu',
        'Teknik destek',
        '7/24 izleme'
      ],
      keywords: 'web sitesi bakım, web sitesi güncelleme, web sitesi destek, site bakım hizmeti'
    }
  ];

  return (
    <div className="services-page">
      <SEO 
        title="Web Sitesi Hizmetleri | Internet Sitesi Oluşturma - Barış Can Yönel"
        description="Profesyonel web sitesi tasarımı, e-ticaret sitesi, responsive tasarım, SEO optimizasyonu ve admin paneli hizmetleri. Internet sitesi oluşturma konusunda uzman. Barış Can Yönel ile modern web sitenizi oluşturun."
        keywords="internet sitesi oluşturma, web sitesi yapımı, profesyonel web tasarım, e-ticaret sitesi, responsive tasarım, seo optimizasyonu, admin paneli, kurumsal web sitesi, barış can yönel"
        canonical="/hizmetler"
      />

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Web Sitesi Tasarımı ve Geliştirme",
          "provider": {
            "@type": "Person",
            "name": "Barış Can Yönel",
            "url": "https://bariscanyonel.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "Türkiye"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web Sitesi Hizmetleri",
            "itemListElement": services.map((service, index) => ({
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": service.title,
                "description": service.description
              }
            }))
          }
        })}
      </script>

      <div className="services-hero">
        <div className="container">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link to="/">{t('services.breadcrumbHome')}</Link>
                <span> / </span>
                <span>{t('services.breadcrumbServices')}</span>
              </nav>
              <h1>{t('services.heroTitle')}</h1>
              <p className="services-hero-subtitle">
                <strong>Internet sitesi oluşturma</strong> konusunda uzman. {t('services.heroSubtitle').replace('Internet sitesi oluşturma konusunda uzman. ', '')}
              </p>
        </div>
      </div>

      <div className="services-content">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-wrapper">
                <div className="service-card-header">
                  <h2>{service.title}</h2>
                </div>
                <div className="service-card">
                  <div className="service-card-body">
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>✅ {feature}</li>
                      ))}
                    </ul>
                    <Link 
                      to={`/hizmetler/${service.slug}`}
                      className="service-link"
                    >
                      {t('services.viewDetails')}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="services-cta">
        <div className="container">
          <h2>{t('services.ctaTitle')}</h2>
          <p>{t('services.ctaSubtitle')}</p>
          <a href="/#contact" className="cta-button">{t('services.ctaButton')}</a>
        </div>
      </div>
    </div>
  );
};

export default Services;

