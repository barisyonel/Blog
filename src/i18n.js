import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            about: "About Me",
            projects: "References",
            services: "Services",
            education: "Education",
            contact: "Contact"
          },
          header: {
            title: "Professional Web Design Services | Barış Can Yönel",
            description: "I provide professional web design and development services. I design modern, user-friendly websites, e-commerce platforms and corporate web solutions. I bring your projects to life with responsive design, SEO optimization, admin management panel and fast loading guarantee.",
            cta: "Get Free Quote",
            services: [
              { "title": "Website Design", "description": "Professional and modern websites" },
              { "title": "Responsive Web Design", "description": "Mobile-friendly internet sites" },
              { "title": "E-Commerce Website", "description": "Online sales platforms" },
              { "title": "SEO Optimization", "description": "Rank higher in Google" },
              { "title": "Website Maintenance", "description": "Continuous updates and support" }
            ]
          },
          about: {
            greeting: "Hello, I am",
            role: "Full Stack",
            description: "Using my expertise in modern technologies, I develop <span class=\"highlight\">innovative</span> and <span class=\"highlight\">powerful</span> web solutions. I focus on creating user-friendly and <span class=\"highlight\">impressive</span> projects. My areas of expertise include <span class=\"tech\">React</span>, <span class=\"tech\">Next.js</span>, <span class=\"tech\">JavaScript</span>, <span class=\"tech\">CSS Animations</span>, <span class=\"tech\">C#</span>, and <span class=\"tech\">ASP.NET Core</span>. I also work on user experience and performance optimization.",
            services_title: "My Expertise Areas",
            services_list: [
              "Frontend Web Development (React, Next.js)",
              "Backend API Development (ASP.NET Core, C#)",
              "Mobile-Friendly Responsive Design",
              "Modern JavaScript and TypeScript",
              "Web Application Development",
              "Performance Optimization"
            ],
            skills_title: "My Technology Competencies",
            skills: [
              { "name": "🔥 React & Next.js", "description": "Expertise in modern frontend frameworks" },
              { "name": "🌐 HTML, CSS, JavaScript", "description": "Fundamental web technologies" },
              { "name": "⚡ SCSS & CSS Animations", "description": "Advanced styling and animations" },
              { "name": "💻 C# & ASP.NET Core", "description": "Backend development expertise" },
              { "name": "🛠️ Git and Github", "description": "Version control system" },
              { "name": "🚀 SEO & Performance Optimization", "description": "Search engine optimization" },
              { "name": "📝 TypeScript & TSX", "description": "Type-safe JavaScript" },
              { "name": "🎨 Tailwind CSS & Sass", "description": "Modern CSS frameworks" }
            ],
            why_title: "Why Work With Me?",
            reasons: [
              { "title": "🚀 Fast Development", "description": "I bring your projects to life quickly using modern tools and techniques." },
              { "title": "💡 Latest Technologies", "description": "I offer future-proof solutions using the latest web technologies." },
              { "title": "📱 Responsive Design", "description": "Perfect appearance and user experience on all devices." },
              { "title": "🔍 SEO Optimization", "description": "I develop optimized sites to rank high in search engines." }
            ]
          },
          projects: {
            title: "My References - Successful Web Design Projects",
            subtitle: "Discover my successful web design projects developed with modern technologies. Each reference is designed with a focus on user experience and performance.",
            categories: ["All", "E-commerce", "Corporate", "Management System", "Social Platform", "News Platform", "Game"],
            github_button: "GitHub",
            demo_button: "Demo",
            list: [
              { "id": 1, "title": "Integral - Thermal Roll and Thermal Paper Production", "description": "Professional corporate website design for Integral, operating in Izmir Menderes. Developed with React, Next.js, Node.js, Express.js and MongoDB. Showcase of thermal roll, thermal paper, label, tape and converting services. Highlights 40 years of experience, TSE 12440 and ISO certifications. Modern website featuring admin panel, product management, product gallery, certification section, blog and contact system. Responsive design and SEO optimization for top Google rankings.", "category": "Corporate" },
              { "id": 2, "title": "Balsan Papel - Forest Products", "description": "Professional corporate website design for Balsan Papel Forest Products, operating in Samsun Çarşamba. Developed with React, Next.js, Node.js, Express.js and MongoDB. Modern website featuring admin panel, product management, veneer, poplar coating and timber products showcase, product gallery, quote request form and contact system. Responsive design and SEO optimization for top Google rankings.", "category": "Corporate" },
              { "id": 3, "title": "MyGoldenFood - Restaurant Management System", "description": "A modern and user-friendly restaurant management system. A comprehensive web application developed with ASP.NET Core. Features order tracking, menu management and reporting.", "category": "E-commerce & Management" },
              { "id": 4, "title": "Yonel Ticaret - Spare Parts Website", "description": "A custom spare parts sales and promotion platform for Yonel Ticaret. Modern e-commerce site developed with Next.js.", "category": "E-commerce" },
              { "id": 5, "title": "Polat Marble - Design Showcase", "description": "A modern marble design showcase, responsive web app built with React and Material-UI. Portfolio and product showcase.", "category": "Corporate" },
              { "id": 6, "title": "IZMAK - Machine Spare Parts & Mold Manufacturing", "description": "Professional website design for a machine spare parts and mold manufacturing business in Izmir. Developed with React, Node.js, Express.js and MongoDB. Includes admin panel, product management, gallery system and contact form. Ranks high in Google with SEO optimization.", "category": "Corporate Website" },
              { "id": 7, "title": "Recipe Platform - Food Platform", "description": "A platform to discover recipes from world cuisines. Social platform where users can share recipes.", "category": "Social Platform" },
              { "id": 8, "title": "Restaurant Menu & Order System", "description": "Order tracking system for restaurants. QR code menu viewing and online ordering.", "category": "Management System" },
              { "id": 9, "title": "News Application - Current News", "description": "News application developed with Next.js and Tailwind CSS. Filter current news by categories.", "category": "News Platform" },
              { "id": 10, "title": "Insurance Agency - Web Application", "description": "A modern and performance-focused insurance web application. Customer management and policy tracking system.", "category": "Corporate" },
              { "id": 11, "title": "Beauty Salon - Beauty Salon Website", "description": "An elegant website for beauty salons. Appointment system and service showcase.", "category": "Corporate" }
            ]
          },
          education: {
            title: "Education",
            viewCertificate: "View Certificate",
            certificates: {
              mudanya: "Mudanya University Certificate",
              neos: "Neos Software Academy - Full Stack Developer Training",
              reactUdemy: "Modern Web Development with React",
              reactBtk: "Web Programming with React"
            }
          },
          contact: {
            title: "Get in Touch",
            form: {
              name: "Your Name",
              phone: "Phone",
              email: "Email",
              subject: "Subject",
              message: "Message",
              send_button: "Send Message"
            },
            status: {
              sending: "Sending...",
              success: "Message sent successfully!",
              error: "Something went wrong. Please try again."
            },
            info: {
              instagram: "Instagram",
              email: "Email",
              phone: "Phone"
            }
          },
          footer: {
            rights: "All rights reserved."
          },
          services: {
            pageTitle: "Professional Website Services",
            pageSubtitle: "Expert in creating internet sites. Strengthen your digital presence with modern, SEO-friendly and user-friendly websites.",
            heroTitle: "Professional Website Services",
            heroSubtitle: "Expert in creating internet sites. Modern, SEO-friendly and user-friendly websites to strengthen your digital presence.",
            breadcrumbHome: "Home",
            breadcrumbServices: "Services",
            viewDetails: "View Details →",
            ctaTitle: "Create Your Website Now",
            ctaSubtitle: "Get professional support for creating internet sites. Contact us for a free quote.",
            ctaButton: "Get Free Quote",
            detailBreadcrumb: "Service Details",
            detailCtaTitle: "Would You Like to Get This Service?",
            detailCtaSubtitle: "Contact us to get a free quote.",
            detailCtaButton: "Contact Us",
            backToServices: "← Back to All Services",
            faqTitle: "Frequently Asked Questions"
          },
          blog: {
            pageTitle: "Web Design and Development Blog",
            pageSubtitle: "Expert content on web design, e-commerce, SEO and digital marketing. Barış Can Yönel's web design blog.",
            author: "Barış Can Yönel",
            lastUpdate: "Last update: September 20, 2025",
            readMore: "Read More →",
            footerTitle: "Web Design Services",
            footerSubtitle: "Contact us for professional web design, e-commerce site development, SEO optimization and digital marketing services.",
            footerHome: "Home",
            footerProjects: "References",
            footerContact: "Contact",
            category: "Category",
            readTime: "Read Time",
            minutes: "minutes"
          }
        }
      },
      tr: {
        translation: {
          nav: {
            home: "Ana Sayfa",
            about: "Hakkımda",
            projects: "Referanslar",
            services: "Hizmetler",
            education: "Eğitim",
            contact: "İletişim"
          },
          header: {
            title: "Internet Sitesi Oluşturma | Profesyonel Web Sitesi Tasarımı - Barış Can Yönel",
            description: "Internet sitesi oluşturma konusunda uzman. Profesyonel web sitesi tasarımı, e-ticaret sitesi, responsive tasarım, SEO optimizasyonu ve admin paneli hizmetleri. Modern, kullanıcı dostu ve Google'da üst sıralarda yer alan web siteleri ile dijital varlığınızı güçlendirin.",
            cta: "Ücretsiz Teklif Al",
            services: [
              { "title": "Web Sitesi Tasarımı", "description": "Profesyonel ve modern web siteleri" },
              { "title": "Responsive Web Tasarım", "description": "Mobil uyumlu internet siteleri" },
              { "title": "E-Ticaret Sitesi", "description": "Online satış platformları" },
              { "title": "Admin Yönetim Paneli", "description": "İçerik yönetimi ve kontrol paneli" },
              { "title": "SEO Optimizasyonu", "description": "Google'da üst sıralarda yer alın" },
              { "title": "Web Sitesi Bakımı", "description": "Sürekli güncelleme ve destek" }
            ]
          },
          about: {
            greeting: "Merhaba, ben",
            role: "Web Tasarım",
            description: "<strong>Internet sitesi oluşturma</strong> konusunda uzman. 5+ yıllık deneyimimle <span class=\"highlight\">profesyonel web tasarım</span> ve <span class=\"highlight\">web sitesi yapımı</span> hizmetleri sunuyorum. Modern teknolojiler kullanarak <span class=\"highlight\">kullanıcı dostu</span> ve <span class=\"highlight\">SEO uyumlu</span> internet siteleri tasarlıyorum. <strong>Internet sitesi oluşturma</strong> sürecinde, işletmenizin ihtiyaçlarına özel çözümler sunuyorum. Uzmanlık alanlarım arasında <span class=\"tech\">Profesyonel Web Sitesi Tasarımı</span>, <span class=\"tech\">Responsive Web Tasarım (Mobil Uyumlu)</span>, <span class=\"tech\">E-Ticaret Sitesi Geliştirme</span>, <span class=\"tech\">Admin Yönetim Paneli</span>, <span class=\"tech\">Kurumsal Web Sitesi Tasarımı</span>, <span class=\"tech\">SEO Optimizasyonu</span> ve <span class=\"tech\">Web Sitesi Bakımı</span> bulunmaktadır.",
            services_title: "Web Tasarım Hizmetlerim",
            services_list: [
              "Profesyonel Web Sitesi Tasarımı",
              "Responsive Web Tasarım (Mobil Uyumlu)",
              "E-Ticaret Sitesi Geliştirme",
              "Admin Yönetim Paneli ve İçerik Yönetimi",
              "Kurumsal Web Sitesi Tasarımı",
              "SEO Optimizasyonu ve Google Sıralaması",
              "Web Sitesi Bakım ve Güncelleme Hizmetleri"
            ],
            skills_title: "Web Tasarım Teknolojilerim",
            skills: [
              { "name": "🎨 Responsive Web Tasarım", "description": "Mobil uyumlu modern web siteleri" },
              { "name": "🌐 HTML5, CSS3, JavaScript", "description": "Temel web tasarım teknolojileri" },
              { "name": "⚡ React & Next.js", "description": "Modern web sitesi geliştirme" },
              { "name": "💻 E-Ticaret Sitesi", "description": "Online satış platformları" },
              { "name": "🔧 Admin Yönetim Paneli", "description": "İçerik yönetimi ve kontrol sistemleri" },
              { "name": "🔍 SEO Optimizasyonu", "description": "Google'da üst sıralarda yer alma" },
              { "name": "📱 Mobil Uyumlu Tasarım", "description": "Tüm cihazlarda mükemmel görünüm" },
              { "name": "🚀 Hızlı Yükleme", "description": "Performans optimizasyonu" },
              { "name": "🛠️ Web Sitesi Bakımı", "description": "Sürekli güncelleme ve destek" }
            ],
            why_title: "Neden Web Tasarım Hizmeti İçin Beni Seçmelisiniz?",
            reasons: [
              { "title": "🚀 Hızlı Teslimat", "description": "Web sitenizi 7-14 gün içinde teslim ediyorum. Zamanında ve kaliteli hizmet garantisi." },
              { "title": "💡 Modern Web Tasarım", "description": "Güncel tasarım trendleri ve teknolojilerle profesyonel web siteleri oluşturuyorum." },
              { "title": "📱 Responsive Tasarım", "description": "Mobil, tablet ve masaüstünde mükemmel görünüm. Tüm cihazlarda uyumlu web siteleri." },
              { "title": "🔍 SEO Garantisi", "description": "Google'da üst sıralarda yer almanız için SEO optimizasyonu dahil. Arama motorlarında görünürlük garantisi." }
            ]
          },
          projects: {
            title: "Referanslarım - Başarılı Web Tasarım Projelerim",
            subtitle: "Profesyonel web tasarım hizmetleriyle geliştirdiğim başarılı web sitelerini keşfedin. Her referans, modern tasarım, SEO optimizasyonu ve kullanıcı deneyimi odaklı yaklaşımla tasarlanmıştır.",
            categories: ["Tümü", "Kurumsal Web Sitesi", "E-Ticaret Sitesi", "Responsive Tasarım", "SEO Optimizasyonu", "Web Uygulaması"],
            github_button: "GitHub",
            demo_button: "Demo",
            list: [
              { "id": 1, "title": "Integral - Termal Rulo ve Termal Kâğıt Üretimi", "description": "İzmir Menderes'te faaliyet gösteren Integral için profesyonel kurumsal web sitesi tasarımı. React, Next.js, Node.js, Express.js ve MongoDB ile geliştirilmiş. Termal rulo, termal kâğıt, etiket, bant ve konverting hizmetleri tanıtımı. 40 yıllık deneyim, TSE 12440 ve ISO sertifikaları vurgusu. Admin paneli, ürün yönetimi, ürün galerisi, sertifika bölümü, blog ve iletişim sistemi içeren modern ve kullanıcı dostu web sitesi. Responsive tasarım ve SEO optimizasyonu ile Google'da üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" },
              { "id": 2, "title": "Balsan Papel - Kereste Orman Ürünleri", "description": "Samsun Çarşamba'da faaliyet gösteren Balsan Papel Kereste Orman Ürünleri için profesyonel kurumsal web sitesi tasarımı. React, Next.js, Node.js, Express.js ve MongoDB ile geliştirilmiş. Papel, kavak kaplama ve kereste ürünleri tanıtımı. Admin paneli, ürün yönetimi, ürün galerisi, teklif alma formu ve iletişim sistemi içeren modern ve kullanıcı dostu web sitesi. Responsive tasarım ve SEO optimizasyonu ile Google'da üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" },
              { "id": 3, "title": "Restoran Web Sitesi - MyGoldenFood", "description": "Modern ve kullanıcı dostu restoran web sitesi tasarımı. Responsive tasarım, online menü ve rezervasyon sistemi. SEO optimizasyonu ile Google'da üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" },
              { "id": 4, "title": "E-Ticaret Sitesi - Yönel Ticaret", "description": "Yedek parça satışı için profesyonel e-ticaret sitesi tasarımı. Modern tasarım, güvenli ödeme sistemi ve mobil uyumlu arayüz. Satışları %300 artırdı.", "category": "E-Ticaret Sitesi" },
              { "id": 5, "title": "Kurumsal Web Sitesi - Polat Mermer", "description": "Mermer şirketi için kurumsal web sitesi tasarımı. Ürün vitrini, galeri ve iletişim formu. Responsive tasarım ile tüm cihazlarda mükemmel görünüm.", "category": "Kurumsal Web Sitesi" },
              { "id": 6, "title": "IZMAK - Makine Yedek Parça & Kalıp İmalatı", "description": "İzmir'de makine yedek parça ve kalıp imalatı yapan işletme için profesyonel web sitesi tasarımı. React, Node.js, Express.js ve MongoDB ile geliştirilmiş. Admin paneli, ürün yönetimi, galeri sistemi ve iletişim formu içeriyor. SEO optimizasyonu ile Google'da üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" },
              { "id": 7, "title": "Yemek Tarifleri Platformu", "description": "Yemek tarifleri paylaşım platformu tasarımı. Kullanıcı dostu arayüz, kategorilere göre filtreleme ve sosyal paylaşım özellikleri. Responsive tasarım ile mobil uyumlu.", "category": "Web Uygulaması" },
              { "id": 8, "title": "Restoran Menü Sistemi", "description": "QR kod menü sistemi tasarımı. Modern ve şık tasarım, kolay kullanım ve hızlı yükleme. Restoranların müşteri deneyimini iyileştirdi.", "category": "Responsive Tasarım" },
              { "id": 9, "title": "Haber Sitesi Tasarımı", "description": "Güncel haberler için modern web sitesi tasarımı. Hızlı yükleme, SEO optimizasyonu ve kategorilere göre düzenlenmiş içerik. Google'da üst sıralarda yer alıyor.", "category": "SEO Optimizasyonu" },
              { "id": 10, "title": "Sigorta Acentesi Web Sitesi", "description": "Sigorta acentesi için profesyonel web sitesi tasarımı. Hizmet tanıtımı, online başvuru formu ve müşteri portali. SEO ile arama motorlarında görünürlük sağlandı.", "category": "Kurumsal Web Sitesi" },
              { "id": 11, "title": "Güzellik Salonu Web Sitesi", "description": "Güzellik salonu için şık ve modern web sitesi tasarımı. Randevu sistemi, hizmet vitrini ve müşteri yorumları. SEO ile yerel aramalarda üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" }
            ]
          },
          education: {
            title: "Eğitim",
            viewCertificate: "Sertifikayı Görüntüle",
            certificates: {
              mudanya: "Mudanya Üniversitesi Sertifikası",
              neos: "Neos Yazılım Akademisi - Full Stack Developer Eğitimi",
              reactUdemy: "React ile Modern Web Geliştirme",
              reactBtk: "React ile Web Programcılığı"
            }
          },
          contact: {
            title: "Web Tasarım Hizmeti İçin İletişime Geçin",
            subtitle: "Ücretsiz teklif alın! Web sitenizi tasarlayalım.",
            form: {
              name: "Adınız Soyadınız",
              phone: "Telefon Numaranız",
              email: "E-posta Adresiniz",
              subject: "Hizmet Türü (Web Sitesi, E-Ticaret, vb.)",
              message: "Projeniz hakkında detayları yazın",
              send_button: "Ücretsiz Teklif İste"
            },
            status: {
              sending: "Teklif hazırlanıyor...",
              success: "Teklif talebiniz alındı! 24 saat içinde size dönüş yapacağım.",
              error: "Bir hata oluştu. Lütfen tekrar deneyin veya WhatsApp'tan iletişime geçin."
            },
            info: {
              instagram: "Instagram",
              email: "E-posta",
              phone: "Telefon"
            }
          },
          footer: {
            rights: "Tüm hakları saklıdır."
          },
          services: {
            pageTitle: "Profesyonel Web Sitesi Hizmetleri",
            pageSubtitle: "Internet sitesi oluşturma konusunda uzman. Modern, SEO uyumlu ve kullanıcı dostu web siteleri ile dijital varlığınızı güçlendirin.",
            heroTitle: "Profesyonel Web Sitesi Hizmetleri",
            heroSubtitle: "Internet sitesi oluşturma konusunda uzman. Modern, SEO uyumlu ve kullanıcı dostu web siteleri ile dijital varlığınızı güçlendirin.",
            breadcrumbHome: "Ana Sayfa",
            breadcrumbServices: "Hizmetler",
            viewDetails: "Detaylı Bilgi →",
            ctaTitle: "Web Sitenizi Hemen Oluşturun",
            ctaSubtitle: "Internet sitesi oluşturma konusunda profesyonel destek alın. Ücretsiz teklif için iletişime geçin.",
            ctaButton: "Ücretsiz Teklif Al",
            detailBreadcrumb: "Hizmet Detayları",
            detailCtaTitle: "Bu Hizmeti Almak İster misiniz?",
            detailCtaSubtitle: "Ücretsiz teklif almak için iletişime geçin.",
            detailCtaButton: "İletişime Geç",
            backToServices: "← Tüm Hizmetlere Dön",
            faqTitle: "Sıkça Sorulan Sorular"
          },
          blog: {
            pageTitle: "Web Tasarım ve Geliştirme Blogu",
            pageSubtitle: "Web tasarım, e-ticaret, SEO ve dijital pazarlama konularında uzman içerikler. Barış Can Yönel'in web tasarım blogu.",
            author: "Barış Can Yönel",
            lastUpdate: "Son güncelleme: 20 Eylül 2025",
            readMore: "Devamını Oku →",
            footerTitle: "Web Tasarım Hizmetleri",
            footerSubtitle: "Profesyonel web tasarım, e-ticaret sitesi geliştirme, SEO optimizasyonu ve dijital pazarlama hizmetleri için iletişime geçin.",
            footerHome: "Ana Sayfa",
            footerProjects: "Referanslar",
            footerContact: "İletişim",
            category: "Kategori",
            readTime: "Okuma Süresi",
            minutes: "dakika"
          }
        }
      }
    },
    fallbackLng: 'tr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n; 