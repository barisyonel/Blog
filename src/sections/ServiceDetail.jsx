import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import '../styles/Services.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();

  const services = {
    'profesyonel-web-sitesi-tasarimi': {
      title: 'Profesyonel Web Sitesi Tasarımı',
      description: 'Modern, kullanıcı dostu ve SEO uyumlu profesyonel web sitesi tasarımı. İşletmenizin dijital kimliğini güçlendiren özel tasarımlar.',
      longDescription: `
        <h2>Profesyonel Web Sitesi Tasarımı Hizmeti</h2>
        <p>İnternet sitesi oluşturma konusunda uzman ekibimizle, işletmenizin ihtiyaçlarına özel profesyonel web siteleri tasarlıyoruz. Modern teknolojiler ve kullanıcı deneyimi odaklı yaklaşımla, dijital varlığınızı güçlendiren web siteleri geliştiriyoruz.</p>
        
        <h3>Neden Profesyonel Web Sitesi?</h3>
        <p>Profesyonel bir web sitesi, işletmenizin dijital dünyadaki yüzüdür. Müşterileriniz sizinle ilk teması web siteniz üzerinden kurar. Bu nedenle, profesyonel, modern ve kullanıcı dostu bir web sitesi, işletmenizin başarısı için kritik öneme sahiptir.</p>
        
        <h3>Hizmetlerimiz</h3>
        <ul>
          <li><strong>Özel Tasarım:</strong> İşletmenizin kimliğine uygun, benzersiz tasarımlar</li>
          <li><strong>Responsive Tasarım:</strong> Tüm cihazlarda mükemmel görünüm</li>
          <li><strong>SEO Optimizasyonu:</strong> Google'da üst sıralarda yer alma</li>
          <li><strong>Hızlı Yükleme:</strong> Optimize edilmiş kod ve görseller</li>
          <li><strong>Admin Paneli:</strong> Kolay içerik yönetimi</li>
          <li><strong>İletişim Formları:</strong> Müşteri iletişim sistemleri</li>
        </ul>
        
        <h3>İnternet Sitesi Oluşturma Süreci</h3>
        <ol>
          <li><strong>İhtiyaç Analizi:</strong> İşletmenizin ihtiyaçlarını belirliyoruz</li>
          <li><strong>Tasarım Tasarımı:</strong> Özel tasarım konsepti oluşturuyoruz</li>
          <li><strong>Geliştirme:</strong> Modern teknolojilerle kodlama yapıyoruz</li>
          <li><strong>Test ve Optimizasyon:</strong> Kapsamlı test ve optimizasyon</li>
          <li><strong>Yayınlama:</strong> Web sitenizi canlıya alıyoruz</li>
          <li><strong>Destek:</strong> Sürekli teknik destek ve bakım</li>
        </ol>
      `,
      keywords: 'profesyonel web sitesi tasarımı, web sitesi yapımı, internet sitesi oluşturma, kurumsal web sitesi, web tasarım hizmeti',
      faq: [
        {
          question: 'Web sitesi oluşturma süresi ne kadar?',
          answer: 'Web sitesi oluşturma süresi, projenin kapsamına göre değişmektedir. Basit kurumsal siteler için 1-2 hafta, e-ticaret siteleri için 3-4 hafta sürmektedir.'
        },
        {
          question: 'Web sitesi fiyatları ne kadar?',
          answer: 'Web sitesi fiyatları, ihtiyaçlarınıza göre belirlenmektedir. Ücretsiz teklif almak için iletişime geçebilirsiniz.'
        },
        {
          question: 'Web sitesi oluşturduktan sonra güncelleme yapabilir miyim?',
          answer: 'Evet, admin paneli ile web sitenizi kolayca güncelleyebilirsiniz. Ayrıca bakım hizmetimiz ile düzenli güncellemeler yapıyoruz.'
        }
      ]
    },
    'responsive-web-tasarim': {
      title: 'Responsive Web Tasarım (Mobil Uyumlu)',
      description: 'Tüm cihazlarda mükemmel görünen, mobil uyumlu web siteleri.',
      longDescription: `
        <h2>Responsive Web Tasarım Hizmeti</h2>
        <p>Mobil cihazlardan internet kullanımı her geçen gün artıyor. Bu nedenle, mobil uyumlu (responsive) web tasarım artık zorunluluk haline geldi. Tüm cihazlarda mükemmel görünen web siteleri ile kullanıcı deneyimini maksimize ediyoruz.</p>
        
        <h3>Responsive Tasarımın Avantajları</h3>
        <ul>
          <li>Tek bir site, tüm cihazlarda çalışır</li>
          <li>Google mobil öncelikli indeksleme</li>
          <li>Daha iyi kullanıcı deneyimi</li>
          <li>Daha düşük bakım maliyeti</li>
        </ul>
      `,
      keywords: 'responsive web tasarım, mobil uyumlu web sitesi, responsive tasarım',
      faq: []
    },
    'e-ticaret-sitesi-gelistirme': {
      title: 'E-Ticaret Sitesi Geliştirme',
      description: 'Satışlarınızı artıran, güvenli ödeme sistemli e-ticaret siteleri.',
      longDescription: `
        <h2>E-Ticaret Sitesi Geliştirme Hizmeti</h2>
        <p>Online satış yapmak için profesyonel e-ticaret siteleri geliştiriyoruz. Güvenli ödeme sistemleri, ürün yönetimi ve admin paneli ile tam kapsamlı çözümler sunuyoruz.</p>
      `,
      keywords: 'e-ticaret sitesi, online satış sitesi, e-ticaret geliştirme',
      faq: []
    },
    'admin-yonetim-paneli': {
      title: 'Admin Yönetim Paneli ve İçerik Yönetimi',
      description: 'Web sitenizi kolayca yönetebileceğiniz, güçlü admin panelleri.',
      longDescription: `
        <h2>Admin Yönetim Paneli Hizmeti</h2>
        <p>Web sitenizi kolayca yönetebileceğiniz, kullanıcı dostu admin panelleri geliştiriyoruz. İçerik, ürün ve kullanıcı yönetimi için kapsamlı çözümler sunuyoruz.</p>
      `,
      keywords: 'admin paneli, içerik yönetim sistemi, cms',
      faq: []
    },
    'kurumsal-web-sitesi-tasarimi': {
      title: 'Kurumsal Web Sitesi Tasarımı',
      description: 'İşletmenizin profesyonel imajını yansıtan kurumsal web siteleri.',
      longDescription: `
        <h2>Kurumsal Web Sitesi Tasarımı Hizmeti</h2>
        <p>İşletmenizin profesyonel imajını yansıtan kurumsal web siteleri tasarlıyoruz. Hizmet tanıtımı, referanslar ve iletişim odaklı tasarımlar ile dijital varlığınızı güçlendiriyoruz.</p>
      `,
      keywords: 'kurumsal web sitesi, kurumsal web tasarım, şirket web sitesi',
      faq: []
    },
    'seo-optimizasyonu': {
      title: 'SEO Optimizasyonu ve Google Sıralaması',
      description: 'Google\'da üst sıralarda yer alın. Organik trafik artışı ve arama motoru optimizasyonu.',
      longDescription: `
        <h2>SEO Optimizasyonu Hizmeti</h2>
        <p>Google'da üst sıralarda yer almak için kapsamlı SEO hizmetleri sunuyoruz. Anahtar kelime optimizasyonu, teknik SEO ve içerik optimizasyonu ile organik trafiğinizi artırıyoruz.</p>
      `,
      keywords: 'seo optimizasyonu, google sıralaması, arama motoru optimizasyonu',
      faq: []
    },
    'web-sitesi-bakim': {
      title: 'Web Sitesi Bakım ve Güncelleme Hizmetleri',
      description: 'Web sitenizin her zaman güncel ve güvenli kalması için bakım hizmetleri.',
      longDescription: `
        <h2>Web Sitesi Bakım Hizmeti</h2>
        <p>Web sitenizin her zaman güncel ve güvenli kalması için kapsamlı bakım hizmetleri sunuyoruz. Düzenli güncellemeler, yedekleme ve teknik destek ile web sitenizin sorunsuz çalışmasını sağlıyoruz.</p>
      `,
      keywords: 'web sitesi bakım, web sitesi güncelleme, web sitesi destek',
      faq: []
    }
  };

  const service = services[slug];

  if (!service) {
    return (
      <div className="service-detail-page">
        <SEO title="Hizmet Bulunamadı" />
        <div className="container">
          <h1>Hizmet Bulunamadı</h1>
          <Link to="/hizmetler">Hizmetlere Dön</Link>
        </div>
      </div>
    );
  }

  // FAQ Schema
  const faqSchema = service.faq && service.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <div className="service-detail-page">
      <SEO 
        title={`${service.title} | Internet Sitesi Oluşturma - Barış Can Yönel`}
        description={service.description}
        keywords={`${service.keywords}, internet sitesi oluşturma, web sitesi yapımı, barış can yönel`}
        canonical={`/hizmetler/${slug}`}
      />

      {/* Service Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Person",
            "name": "Barış Can Yönel",
            "url": "https://bariscanyonel.com"
          }
        })}
      </script>

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
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
              "name": "Hizmetler",
              "item": "https://bariscanyonel.com/hizmetler"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": service.title,
              "item": `https://bariscanyonel.com/hizmetler/${slug}`
            }
          ]
        })}
      </script>

      <div className="service-detail-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">{t('services.breadcrumbHome')}</Link>
            <span> / </span>
            <Link to="/hizmetler">{t('services.breadcrumbServices')}</Link>
            <span> / </span>
            <span>{service.title}</span>
          </nav>
          <h1>{service.title}</h1>
          <p className="service-detail-subtitle">{service.description}</p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="container">
          <div 
            className="service-detail-body"
            dangerouslySetInnerHTML={{ __html: service.longDescription }}
          />

          {service.faq && service.faq.length > 0 && (
            <div className="service-faq">
              <h2>{t('services.faqTitle')}</h2>
              <div className="faq-list">
                {service.faq.map((item, index) => (
                  <div key={index} className="faq-item">
                    <h3 className="faq-question">{item.question}</h3>
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="service-cta">
            <h2>{t('services.detailCtaTitle')}</h2>
            <p>{t('services.detailCtaSubtitle')}</p>
            <a href="/#contact" className="cta-button">{t('services.detailCtaButton')}</a>
          </div>

          <Link to="/hizmetler" className="back-link">
            {t('services.backToServices')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;

