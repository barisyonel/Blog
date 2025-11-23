# Windows Hosting Kurulum Rehberi

## 📋 Kontrol Listesi

### ✅ Yapılması Gerekenler

- [ ] **web.config dosyası** hosting'e yüklendi mi?
- [ ] **SSL sertifikası** kuruldu mu?
- [ ] **HTTPS yönlendirmesi** çalışıyor mu?
- [ ] **dist klasörü** içeriği doğru yere yüklendi mi?
- [ ] **Node.js desteği** var mı? (SSR için gerekli değil, SPA için)

## 📁 Yüklenecek Dosyalar

### 1. Build Sonrası Dosyalar

Build komutu:
```bash
npm run build
```

**dist klasörü içeriğini** hosting'inizin **wwwroot** veya **public_html** klasörüne yükleyin:

```
wwwroot/
├── index.html
├── assets/
│   ├── *.js
│   ├── *.css
│   └── *.jpg, *.png, *.svg
├── education/
├── logo.jpg
├── robots.txt
├── sitemap.xml
└── web.config  ← ÖNEMLİ!
```

### 2. web.config Dosyası

**web.config** dosyası **mutlaka** root dizinde olmalı (index.html ile aynı yerde).

## 🔒 SSL Sertifikası Kurulumu

### Adım 1: Hosting Panelinden SSL Kurulumu

1. Hosting panelinize giriş yapın
2. **SSL/TLS** veya **Güvenlik** bölümüne gidin
3. **Let's Encrypt** veya **SSL Sertifikası** seçin
4. Domain: `bariscanyonel.com`
5. **Kur** veya **Install** butonuna tıklayın
6. 5-10 dakika bekleyin

### Adım 2: SSL Kontrolü

Kurulum sonrası test edin:
- ✅ https://bariscanyonel.com açılıyor mu?
- ✅ Tarayıcıda yeşil kilit simgesi var mı?
- ✅ HTTP otomatik HTTPS'ye yönleniyor mu?

### Adım 3: SSL Test

SSL Labs test:
```
https://www.ssllabs.com/ssltest/analyze.html?d=bariscanyonel.com
```

Hedef: **A+** veya **A** notu

## 🚀 Deployment Adımları

### 1. Build Alın
```bash
npm run build
```

### 2. Dosyaları Yükleyin

**FTP/File Manager ile:**
- `dist/` klasörü içindeki **tüm dosyaları** yükleyin
- `web.config` dosyasını **root dizine** yükleyin

**Önemli:** 
- `dist/` klasörünü yüklemeyin, içindeki dosyaları yükleyin
- `web.config` mutlaka root dizinde olmalı

### 3. IIS Ayarları (Hosting Firması Yapmalı)

Hosting firmanızdan şunları isteyin:
- ✅ **IIS Rewrite Module** kurulu olmalı
- ✅ **HTTPS binding** port 443'te aktif olmalı
- ✅ **Default document** index.html olmalı

## 🔧 Sorun Giderme

### Problem: HTTPS çalışmıyor

**Çözüm:**
1. SSL sertifikası kurulu mu kontrol edin
2. Port 443 açık mı kontrol edin
3. IIS'de HTTPS binding var mı kontrol edin
4. web.config dosyası doğru yerde mi?

### Problem: Sayfalar 404 veriyor

**Çözüm:**
1. web.config dosyası root dizinde mi?
2. IIS Rewrite Module kurulu mu?
3. SPA routing rule'u çalışıyor mu?

### Problem: Güvenlik başlıkları görünmüyor

**Çözüm:**
1. web.config'deki customHeaders aktif mi?
2. IIS'de HTTP Response Headers kontrol edin

### Problem: Static dosyalar yüklenmiyor

**Çözüm:**
1. Dosya yolları doğru mu? (`/assets/...`)
2. MIME types doğru mu?
3. Cache ayarları doğru mu?

## 📞 Hosting Firmasına İletilecek Bilgiler

Hosting firmanıza şunları iletin:

1. **SSL Sertifikası:**
   - Domain: bariscanyonel.com
   - Let's Encrypt veya ücretli SSL kurulumu

2. **IIS Yapılandırması:**
   - IIS Rewrite Module kurulu olmalı
   - HTTPS binding (port 443) aktif olmalı
   - Default document: index.html

3. **Node.js:**
   - SSR için gerekli değil (SPA projesi)
   - Eğer ileride SSR eklenirse Node.js desteği gerekir

4. **Dosya Yapısı:**
   - SPA (Single Page Application)
   - Tüm route'lar index.html'e yönlenmeli
   - web.config dosyası root dizinde olmalı

## ✅ Kurulum Sonrası Kontrol

1. ✅ https://bariscanyonel.com açılıyor mu?
2. ✅ http://bariscanyonel.com → https'e yönleniyor mu?
3. ✅ www.bariscanyonel.com → bariscanyonel.com'a yönleniyor mu?
4. ✅ Tüm sayfalar çalışıyor mu? (/, /projects, /blog)
5. ✅ Resimler ve CSS yükleniyor mu?
6. ✅ SSL sertifikası geçerli mi?

## 📚 Ek Belgeler

- **SSL_SETUP.md** - SSL kurulum detayları
- **SSR_SETUP.md** - SSR yapılandırma (ileride gerekirse)


