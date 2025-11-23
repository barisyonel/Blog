# SSL Sertifikası Kurulum Rehberi

## Windows Hosting için SSL Kurulumu

### 1. SSL Sertifikası Türleri

#### A) Let's Encrypt (Ücretsiz - Önerilen)
- **Süre**: 90 gün (otomatik yenilenir)
- **Kurulum**: Hosting panelinden veya cPanel/Plesk üzerinden
- **Avantajlar**: Ücretsiz, otomatik yenileme

#### B) Ücretli SSL Sertifikaları
- **Süre**: 1-2 yıl
- **Türler**: 
  - Domain Validated (DV)
  - Organization Validated (OV)
  - Extended Validation (EV)

### 2. SSL Kurulum Adımları

#### Hosting Panelinden Kurulum:
1. Hosting panelinize giriş yapın
2. SSL/TLS bölümüne gidin
3. "Let's Encrypt" veya "SSL Sertifikası" seçeneğini bulun
4. Domain adınızı seçin (bariscanyonel.com)
5. "Kur" veya "Install" butonuna tıklayın
6. Sertifika otomatik olarak kurulacak (5-10 dakika)

#### Manuel Kurulum (IIS):
1. IIS Manager'ı açın
2. Sunucu adına sağ tıklayın → "Server Certificates"
3. "Complete Certificate Request" seçin
4. Sertifika dosyasını (.crt) ve private key'i (.key) yükleyin
5. Site → "Bindings" → "Add" → HTTPS seçin
6. Sertifikayı seçin ve port 443'ü kullanın

### 3. SSL Kontrolü

Kurulum sonrası kontrol edin:
- ✅ https://bariscanyonel.com çalışıyor mu?
- ✅ Tarayıcıda yeşil kilit simgesi görünüyor mu?
- ✅ SSL Labs test: https://www.ssllabs.com/ssltest/analyze.html?d=bariscanyonel.com

### 4. Otomatik HTTP → HTTPS Yönlendirmesi

`web.config` dosyası zaten HTTP'den HTTPS'ye yönlendirme içeriyor. 
Eğer çalışmıyorsa, hosting panelinden "Force HTTPS" özelliğini aktif edin.

### 5. SSL Sertifika Yenileme

**Let's Encrypt için:**
- Otomatik yenilenir (90 gün öncesinden)
- Manuel yenileme: Hosting panelinden "Renew Certificate"

**Ücretli SSL için:**
- Sertifika süresi dolmadan önce yenileyin
- Hosting firmanızdan yeni sertifika alın

## Sorun Giderme

### SSL Sertifikası Çalışmıyor:
1. Sertifika doğru domain için mi? (bariscanyonel.com)
2. Port 443 açık mı?
3. IIS'de HTTPS binding doğru mu?
4. Sertifika süresi dolmuş mu?

### Mixed Content Hatası:
- HTTP içerikler HTTPS sayfada yüklenemez
- Tüm kaynakların (resim, script, CSS) HTTPS olması gerekir

### Sertifika Güven Uyarısı:
- Self-signed sertifika kullanıyorsanız güven uyarısı normaldir
- Let's Encrypt veya ücretli sertifika kullanın


