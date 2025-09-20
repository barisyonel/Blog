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
            projects: "Projects",
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
            title: "My Projects - Personal Portfolio",
            subtitle: "Discover my successful projects developed with modern web technologies. Each project is designed with a focus on user experience and performance.",
            categories: ["All", "E-commerce", "Corporate", "Management System", "Social Platform", "News Platform", "Game"],
            github_button: "GitHub",
            demo_button: "Demo",
            list: [
              { "id": 1, "title": "MyGoldenFood - Restaurant Management System", "description": "A modern and user-friendly restaurant management system. A comprehensive web application developed with ASP.NET Core. Features order tracking, menu management and reporting.", "category": "E-commerce & Management" },
              { "id": 2, "title": "Yonel Ticaret - Spare Parts Website", "description": "A custom spare parts sales and promotion platform for Yonel Ticaret. Modern e-commerce site developed with Next.js.", "category": "E-commerce" },
              { "id": 3, "title": "Polat Marble - Design Showcase", "description": "A modern marble design showcase, responsive web app built with React and Material-UI. Portfolio and product showcase.", "category": "Corporate" },
              { "id": 4, "title": "IZMAK - Machine Spare Parts & Mold Manufacturing", "description": "Professional website design for a machine spare parts and mold manufacturing business in Izmir. Developed with React, Node.js, Express.js and MongoDB. Includes admin panel, product management, gallery system and contact form. Ranks high in Google with SEO optimization.", "category": "Corporate Website" },
              { "id": 5, "title": "Recipe Platform - Food Platform", "description": "A platform to discover recipes from world cuisines. Social platform where users can share recipes.", "category": "Social Platform" },
              { "id": 6, "title": "Restaurant Menu & Order System", "description": "Order tracking system for restaurants. QR code menu viewing and online ordering.", "category": "Management System" },
              { "id": 7, "title": "News Application - Current News", "description": "News application developed with Next.js and Tailwind CSS. Filter current news by categories.", "category": "News Platform" },
              { "id": 8, "title": "Insurance Agency - Web Application", "description": "A modern and performance-focused insurance web application. Customer management and policy tracking system.", "category": "Corporate" },
              { "id": 9, "title": "Beauty Salon - Beauty Salon Website", "description": "An elegant website for beauty salons. Appointment system and service showcase.", "category": "Corporate" }
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
          }
        }
      },
      tr: {
        translation: {
          nav: {
            home: "Ana Sayfa",
            about: "Hakkımda",
            projects: "Projeler",
            education: "Eğitim",
            contact: "İletişim"
          },
          header: {
            title: "Profesyonel Web Tasarım Hizmetleri | Barış Can Yönel",
            description: "Profesyonel web tasarım ve geliştirme hizmetleri sunuyorum. Modern, kullanıcı dostu web siteleri, e-ticaret platformları ve kurumsal web çözümleri tasarlıyorum. Responsive tasarım, SEO optimizasyonu, admin yönetim paneli ve hızlı yükleme garantisi ile projelerinizi hayata geçiriyorum.",
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
            description: "5+ yıllık deneyimimle <span class=\"highlight\">profesyonel web tasarım</span> ve <span class=\"highlight\">web sitesi yapımı</span> hizmetleri sunuyorum. Modern teknolojiler kullanarak <span class=\"highlight\">kullanıcı dostu</span> ve <span class=\"highlight\">SEO uyumlu</span> internet siteleri tasarlıyorum. Uzmanlık alanlarım arasında <span class=\"tech\">Responsive Web Tasarım</span>, <span class=\"tech\">E-Ticaret Sitesi</span>, <span class=\"tech\">Kurumsal Web Sitesi</span>, <span class=\"tech\">SEO Optimizasyonu</span> ve <span class=\"tech\">Web Sitesi Bakımı</span> bulunmaktadır.",
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
            title: "Web Tasarım Portföyüm - Başarılı Projelerim",
            subtitle: "Profesyonel web tasarım hizmetleriyle geliştirdiğim başarılı web sitelerini keşfedin. Her proje, modern tasarım, SEO optimizasyonu ve kullanıcı deneyimi odaklı yaklaşımla tasarlanmıştır.",
            categories: ["Tümü", "Kurumsal Web Sitesi", "E-Ticaret Sitesi", "Responsive Tasarım", "SEO Optimizasyonu", "Web Uygulaması"],
            github_button: "GitHub",
            demo_button: "Demo",
            list: [
              { "id": 1, "title": "Restoran Web Sitesi - MyGoldenFood", "description": "Modern ve kullanıcı dostu restoran web sitesi tasarımı. Responsive tasarım, online menü ve rezervasyon sistemi. SEO optimizasyonu ile Google'da üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" },
              { "id": 2, "title": "E-Ticaret Sitesi - Yönel Ticaret", "description": "Yedek parça satışı için profesyonel e-ticaret sitesi tasarımı. Modern tasarım, güvenli ödeme sistemi ve mobil uyumlu arayüz. Satışları %300 artırdı.", "category": "E-Ticaret Sitesi" },
              { "id": 3, "title": "Kurumsal Web Sitesi - Polat Mermer", "description": "Mermer şirketi için kurumsal web sitesi tasarımı. Ürün vitrini, galeri ve iletişim formu. Responsive tasarım ile tüm cihazlarda mükemmel görünüm.", "category": "Kurumsal Web Sitesi" },
              { "id": 4, "title": "IZMAK - Makine Yedek Parça & Kalıp İmalatı", "description": "İzmir'de makine yedek parça ve kalıp imalatı yapan işletme için profesyonel web sitesi tasarımı. React, Node.js, Express.js ve MongoDB ile geliştirilmiş. Admin paneli, ürün yönetimi, galeri sistemi ve iletişim formu içeriyor. SEO optimizasyonu ile Google'da üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" },
              { "id": 5, "title": "Yemek Tarifleri Platformu", "description": "Yemek tarifleri paylaşım platformu tasarımı. Kullanıcı dostu arayüz, kategorilere göre filtreleme ve sosyal paylaşım özellikleri. Responsive tasarım ile mobil uyumlu.", "category": "Web Uygulaması" },
              { "id": 6, "title": "Restoran Menü Sistemi", "description": "QR kod menü sistemi tasarımı. Modern ve şık tasarım, kolay kullanım ve hızlı yükleme. Restoranların müşteri deneyimini iyileştirdi.", "category": "Responsive Tasarım" },
              { "id": 7, "title": "Haber Sitesi Tasarımı", "description": "Güncel haberler için modern web sitesi tasarımı. Hızlı yükleme, SEO optimizasyonu ve kategorilere göre düzenlenmiş içerik. Google'da üst sıralarda yer alıyor.", "category": "SEO Optimizasyonu" },
              { "id": 8, "title": "Sigorta Acentesi Web Sitesi", "description": "Sigorta acentesi için profesyonel web sitesi tasarımı. Hizmet tanıtımı, online başvuru formu ve müşteri portali. SEO ile arama motorlarında görünürlük sağlandı.", "category": "Kurumsal Web Sitesi" },
              { "id": 9, "title": "Güzellik Salonu Web Sitesi", "description": "Güzellik salonu için şık ve modern web sitesi tasarımı. Randevu sistemi, hizmet vitrini ve müşteri yorumları. SEO ile yerel aramalarda üst sıralarda yer alıyor.", "category": "Kurumsal Web Sitesi" }
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