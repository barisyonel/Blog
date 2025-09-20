import React from 'react';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: "Web Tasarımda 2025 Trendleri: Modern ve Kullanıcı Dostu Yaklaşımlar",
      slug: "web-tasarimda-2025-trendleri",
      excerpt: "2025 yılında web tasarım dünyasında öne çıkan trendler, kullanıcı deneyimini nasıl etkiliyor ve işletmeniz için neden önemli?",
      content: "Web tasarım dünyası sürekli gelişiyor ve 2025 yılında da yeni trendler ortaya çıkıyor. Bu yazıda, modern web sitelerinde kullanılan en güncel tasarım yaklaşımlarını, kullanıcı deneyimini iyileştiren teknikleri ve işletmenizin dijital varlığını güçlendirecek stratejileri ele alıyoruz.",
      date: "2025-09-20",
      category: "Web Tasarım",
      tags: ["web tasarım", "trendler", "2025", "kullanıcı deneyimi", "modern tasarım"],
      readTime: "5 dakika",
      image: "/assets/blog/web-tasarim-trendleri.jpg"
    },
    {
      id: 2,
      title: "E-Ticaret Sitesi Tasarımında Dikkat Edilmesi Gereken 10 Altın Kural",
      slug: "e-ticaret-sitesi-tasarim-kurallari",
      excerpt: "E-ticaret sitenizin dönüşüm oranını artırmak için uygulamanız gereken temel tasarım prensipleri ve kullanıcı deneyimi iyileştirmeleri.",
      content: "E-ticaret siteleri, sadece ürün satmakla kalmaz, aynı zamanda müşteri deneyimini de şekillendirir. Bu yazıda, başarılı e-ticaret sitelerinin ortak özelliklerini, satış dönüşümünü artıran tasarım elementlerini ve müşteri memnuniyetini yükselten teknikleri detaylı olarak inceliyoruz.",
      date: "2025-09-19",
      category: "E-Ticaret",
      tags: ["e-ticaret", "tasarım", "dönüşüm", "kullanıcı deneyimi", "satış"],
      readTime: "7 dakika",
      image: "/assets/blog/e-ticaret-tasarim.jpg"
    },
    {
      id: 3,
      title: "SEO Optimizasyonu: Web Sitenizi Google'da Üst Sıralara Taşıyın",
      slug: "seo-optimizasyonu-google-siralama",
      excerpt: "Web sitenizin arama motorlarında görünürlüğünü artırmak için uygulamanız gereken temel SEO teknikleri ve stratejileri.",
      content: "SEO (Search Engine Optimization), web sitenizin arama motorlarında daha iyi sıralanmasını sağlayan tekniklerin bütünüdür. Bu yazıda, organik trafiği artıran SEO stratejilerini, anahtar kelime optimizasyonunu, teknik SEO uygulamalarını ve içerik pazarlama tekniklerini ele alıyoruz.",
      date: "2025-09-18",
      category: "SEO",
      tags: ["seo", "google", "arama motoru", "optimizasyon", "organik trafik"],
      readTime: "8 dakika",
      image: "/assets/blog/seo-optimizasyonu.jpg"
    },
    {
      id: 4,
      title: "Responsive Web Tasarım: Mobil Uyumlu Sitenin Önemi",
      slug: "responsive-web-tasarim-mobil-uyum",
      excerpt: "Mobil cihazlarda mükemmel görünen web siteleri tasarlamak için bilmeniz gereken responsive tasarım prensipleri ve teknikleri.",
      content: "Günümüzde internet kullanıcılarının büyük çoğunluğu mobil cihazlardan web sitelerini ziyaret ediyor. Bu nedenle, responsive web tasarım artık bir lüks değil, zorunluluk haline geldi. Bu yazıda, mobil uyumlu tasarımın önemini, responsive tasarım tekniklerini ve kullanıcı deneyimini iyileştiren yaklaşımları detaylı olarak inceliyoruz.",
      date: "2025-09-17",
      category: "Responsive Tasarım",
      tags: ["responsive", "mobil", "uyumlu", "tasarım", "kullanıcı deneyimi"],
      readTime: "6 dakika",
      image: "/assets/blog/responsive-tasarim.jpg"
    },
    {
      id: 5,
      title: "Web Sitesi Hızlandırma: Performans Optimizasyonu Rehberi",
      slug: "web-sitesi-hizlandirma-performans",
      excerpt: "Web sitenizin yükleme hızını artırmak için uygulayabileceğiniz teknik optimizasyonlar ve performans iyileştirme stratejileri.",
      content: "Web sitesi hızı, hem kullanıcı deneyimi hem de SEO açısından kritik önem taşır. Yavaş yüklenen siteler, ziyaretçi kaybına ve arama motoru sıralamasında düşüşe neden olur. Bu yazıda, web sitesi performansını artıran teknikleri, görsel optimizasyonunu, kod optimizasyonunu ve hosting seçimini detaylı olarak ele alıyoruz.",
      date: "2025-09-16",
      category: "Performans",
      tags: ["hız", "performans", "optimizasyon", "yükleme", "kullanıcı deneyimi"],
      readTime: "9 dakika",
      image: "/assets/blog/web-sitesi-hizi.jpg"
    },
    {
      id: 6,
      title: "Kurumsal Web Sitesi Tasarımı: Profesyonel İmaj Oluşturma",
      slug: "kurumsal-web-sitesi-tasarimi",
      excerpt: "İşletmenizin dijital kimliğini güçlendiren kurumsal web sitesi tasarımı için gerekli elementler ve profesyonel yaklaşımlar.",
      content: "Kurumsal web siteleri, işletmenizin dijital yüzü olarak müşterilerinizle ilk temas noktasıdır. Profesyonel bir kurumsal site, güven oluşturur ve işletmenizin değerini yansıtır. Bu yazıda, etkili kurumsal web sitesi tasarımının temel prensiplerini, marka kimliği oluşturmayı ve müşteri güvenini artıran tasarım elementlerini inceliyoruz.",
      date: "2025-09-15",
      category: "Kurumsal",
      tags: ["kurumsal", "profesyonel", "marka", "güven", "kimlik"],
      readTime: "6 dakika",
      image: "/assets/blog/kurumsal-tasarim.jpg"
    }
  ];

  return (
    <div className="blog-page">
      {/* SEO Optimized Header */}
      <header className="blog-header">
        <div className="container">
          <h1 className="blog-title">Web Tasarım ve Geliştirme Blogu</h1>
          <p className="blog-subtitle">
            Web tasarım, e-ticaret, SEO ve dijital pazarlama konularında uzman içerikler
          </p>
          <div className="blog-meta">
            <span className="blog-author">Barış Can Yönel</span>
            <span className="blog-date">Son güncelleme: 20 Eylül 2025</span>
          </div>
        </div>
      </header>

      {/* Blog Posts Grid */}
      <main className="blog-main">
        <div className="container">
          <div className="blog-posts-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post-card">
                <div className="blog-post-image">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    loading="lazy"
                  />
                  <div className="blog-post-category">{post.category}</div>
                </div>
                
                <div className="blog-post-content">
                  <h2 className="blog-post-title">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-post-meta">
                    <span className="blog-post-date">{post.date}</span>
                    <span className="blog-post-read-time">{post.readTime}</span>
                  </div>
                  
                  <div className="blog-post-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">#{tag}</span>
                    ))}
                  </div>
                  
                  <a href={`/blog/${post.slug}`} className="blog-read-more">
                    Devamını Oku →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* SEO Footer */}
      <footer className="blog-footer">
        <div className="container">
          <div className="blog-footer-content">
            <h3>Web Tasarım Hizmetleri</h3>
            <p>
              Profesyonel web tasarım, e-ticaret sitesi geliştirme, SEO optimizasyonu 
              ve dijital pazarlama hizmetleri için iletişime geçin.
            </p>
            <div className="blog-footer-links">
              <a href="/">Ana Sayfa</a>
              <a href="/#projects">Projeler</a>
              <a href="/#contact">İletişim</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
