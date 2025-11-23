# Netlify SSL/TLS Sertifika Kurulum Rehberi

## SSL/TLS Sertifika Sorunu Çözümü

### Sorun: "Alan adı korunmadı" (Domain name not protected)

Bu sorun, Netlify'da SSL sertifikasının düzgün yapılandırılmadığını gösterir.

## Çözüm Adımları

### 1. Netlify Dashboard'da Domain Yapılandırması

1. **Netlify Dashboard'a giriş yapın**
   - https://app.netlify.com adresine gidin
   - Projenizi seçin

2. **Domain ayarlarına gidin**
   - Sol menüden **"Domain settings"** veya **"Site configuration"** → **"Domain management"** seçin

3. **Custom domain ekleyin (eğer yoksa)**
   - **"Add custom domain"** butonuna tıklayın
   - Domain adınızı girin: `bariscanyonel.com`
   - **"Verify"** butonuna tıklayın

4. **DNS kayıtlarını kontrol edin**
   - Netlify size DNS kayıtlarını gösterecek
   - Domain sağlayıcınızın (GoDaddy, Namecheap, vb.) DNS ayarlarına gidin
   - Şu kayıtları ekleyin:
     ```
     Type: A
     Name: @
     Value: Netlify'nin verdiği IP adresi (genellikle 75.2.60.5)
     
     Type: CNAME
     Name: www
     Value: bariscanyonel.com (veya Netlify'nin verdiği değer)
     ```

### 2. SSL Sertifikası Kurulumu

Netlify **otomatik olarak** Let's Encrypt SSL sertifikası sağlar, ancak:

1. **SSL sertifikasını aktif edin**
   - Domain settings sayfasında **"HTTPS"** sekmesine gidin
   - **"Verify DNS configuration"** butonuna tıklayın
   - DNS kayıtları doğruysa, Netlify otomatik olarak SSL sertifikası kuracak

2. **Sertifika durumunu kontrol edin**
   - **"Certificate status"** bölümünde **"Active"** görünmelidir
   - Eğer **"Pending"** görünüyorsa, DNS kayıtlarının yayılmasını bekleyin (24-48 saat)

3. **Force HTTPS'i aktif edin**
   - **"Force HTTPS"** seçeneğini açın
   - Bu, tüm HTTP trafiğini HTTPS'ye yönlendirir

### 3. DNS Yayılma Süresi

DNS değişiklikleri **24-48 saat** içinde yayılır. Bu süre içinde:
- SSL sertifikası **"Pending"** durumunda olabilir
- Bu normaldir, bekleyin

### 4. Otomatik SSL Yenileme

Netlify, Let's Encrypt sertifikalarını **otomatik olarak yeniler**. 
- Sertifika süresi dolmadan 30 gün önce yenilenir
- Manuel müdahale gerekmez

## Yapılandırma Dosyaları

### netlify.toml
Projenizde `netlify.toml` dosyası zaten yapılandırılmış:
- ✅ HTTP → HTTPS yönlendirmeleri
- ✅ Güvenlik başlıkları (HSTS, CSP, vb.)
- ✅ SPA routing

### _headers
`public/_headers` dosyası güvenlik başlıklarını içerir:
- ✅ Strict-Transport-Security (HSTS)
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ Content-Security-Policy

## Sorun Giderme

### SSL Sertifikası "Pending" Durumunda

1. **DNS kayıtlarını kontrol edin**
   ```bash
   # Terminal'de kontrol edin
   nslookup bariscanyonel.com
   dig bariscanyonel.com
   ```

2. **Netlify DNS kontrolü**
   - Netlify Dashboard → Domain settings → DNS
   - Tüm kayıtların doğru olduğundan emin olun

3. **SSL sertifikasını manuel yenileyin**
   - Domain settings → HTTPS → "Renew certificate"

### "Mixed Content" Hatası

HTTPS sayfada HTTP içerikler yüklenemez:
- ✅ Tüm kaynakların (resim, script, CSS) HTTPS olması gerekir
- ✅ `netlify.toml` dosyasındaki CSP ayarları bunu zorunlu kılar

### SSL Sertifikası Çalışmıyor

1. **Domain doğru mu?**
   - `bariscanyonel.com` için sertifika var mı?
   - `www.bariscanyonel.com` için de sertifika gerekli

2. **Force HTTPS aktif mi?**
   - Domain settings → HTTPS → "Force HTTPS" açık olmalı

3. **Netlify desteğine başvurun**
   - https://www.netlify.com/support/

## SSL Test Araçları

Sertifikanızı test edin:
- **SSL Labs**: https://www.ssllabs.com/ssltest/analyze.html?d=bariscanyonel.com
- **SSL Checker**: https://www.sslshopper.com/ssl-checker.html#hostname=bariscanyonel.com
- **Security Headers**: https://securityheaders.com/?q=https://bariscanyonel.com

## Önemli Notlar

1. **Netlify otomatik SSL sağlar** - Ekstra kurulum gerekmez
2. **DNS yayılması 24-48 saat** sürebilir
3. **Force HTTPS** her zaman açık olmalı
4. **Sertifika otomatik yenilenir** - Manuel müdahale gerekmez

## Hızlı Kontrol Listesi

- [ ] Domain Netlify'da yapılandırıldı mı?
- [ ] DNS kayıtları doğru mu?
- [ ] SSL sertifikası "Active" durumunda mı?
- [ ] Force HTTPS açık mı?
- [ ] `netlify.toml` dosyası güncel mi?
- [ ] `_headers` dosyası güncel mi?
- [ ] HTTPS testi başarılı mı?

## Destek

Sorun devam ederse:
- Netlify Dokümantasyonu: https://docs.netlify.com/domains-https/custom-domains/
- Netlify Destek: https://www.netlify.com/support/

