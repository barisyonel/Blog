# Vercel DNS Yapılandırma Rehberi - Güzelnet Domain

## Güzelnet Domain'i Vercel'e Bağlama

Bu rehber, Güzelnet'ten aldığınız domain adresini Vercel projenize bağlamak için gerekli tüm adımları içerir.

---

## 1. Vercel'de Domain Ekleme

### Adım 1: Vercel Dashboard'a Giriş
1. https://vercel.com adresine gidin
2. Projenizi seçin veya yeni bir proje oluşturun

### Adım 2: Domain Ayarlarına Git
1. Proje sayfasında **"Settings"** sekmesine tıklayın
2. Sol menüden **"Domains"** seçeneğine tıklayın
3. **"Add Domain"** butonuna tıklayın

### Adım 3: Domain Adınızı Girin
- Domain adınızı girin (örn: `bariscanyonel.com`)
- **"Add"** butonuna tıklayın

### Adım 4: DNS Kayıtlarını Alın
Vercel size şu bilgileri verecek:
- **A Record** için IP adresi
- **CNAME Record** için değer (genellikle `cname.vercel-dns.com`)

---

## 2. Güzelnet DNS Yönetim Paneli

### Adım 1: Güzelnet Panel'e Giriş
1. https://www.guzelnet.com.tr adresine gidin
2. Müşteri panelinize giriş yapın

### Adım 2: DNS Yönetim Bölümüne Git
1. **"Domain Yönetimi"** veya **"DNS Yönetimi"** bölümüne gidin
2. Domain adınızı seçin

### Adım 3: DNS Kayıtlarını Düzenle
Güzelnet panelinde DNS kayıtlarını düzenleyebilirsiniz.

---

## 3. DNS Kayıtlarını Yapılandırma

### Seçenek 1: A Record Kullanımı (Önerilen)

**Ana domain için (bariscanyonel.com):**

```
Type: A
Name: @ (veya boş bırakın)
Value: Vercel'in verdiği IP adresi (genellikle 76.76.21.21)
TTL: 3600 (veya otomatik)
```

**www alt domain için:**

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600 (veya otomatik)
```

### Seçenek 2: CNAME Kullanımı (Alternatif)

Eğer Güzelnet CNAME kayıtlarını destekliyorsa:

**Ana domain için:**
```
Type: CNAME
Name: @ (veya boş)
Value: cname.vercel-dns.com
TTL: 3600
```

**www alt domain için:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Not:** Bazı domain sağlayıcıları ana domain (root domain) için CNAME kaydına izin vermez. Bu durumda A Record kullanmanız gerekir.

---

## 4. Güzelnet DNS Ayarları - Detaylı Adımlar

### Güzelnet Panel'de DNS Kayıtları Ekleme:

1. **DNS Yönetimi** sayfasına gidin
2. **"Yeni Kayıt Ekle"** veya **"Add Record"** butonuna tıklayın
3. Aşağıdaki kayıtları ekleyin:

#### A Record (Ana Domain)
- **Kayıt Tipi:** A
- **Host:** @ (veya boş)
- **Değer (Value):** `76.76.21.21` (Vercel'in IP adresi - güncel IP'yi Vercel'den kontrol edin)
- **TTL:** 3600

#### CNAME Record (www)
- **Kayıt Tipi:** CNAME
- **Host:** www
- **Değer (Value):** `cname.vercel-dns.com`
- **TTL:** 3600

### Mevcut Kayıtları Düzenleme:

Eğer zaten DNS kayıtları varsa:
1. Mevcut A ve CNAME kayıtlarını bulun
2. **"Düzenle"** veya **"Edit"** butonuna tıklayın
3. Değerleri Vercel'in verdiği değerlerle güncelleyin
4. **"Kaydet"** butonuna tıklayın

---

## 5. Vercel'de Domain Doğrulama

### Adım 1: DNS Kayıtlarını Kontrol Et
Vercel dashboard'da:
1. **"Domains"** sayfasına gidin
2. Domain adınızın yanında durum gösterilir:
   - ⏳ **"Pending"**: DNS yayılması bekleniyor
   - ✅ **"Valid"**: Domain başarıyla bağlandı
   - ❌ **"Invalid"**: DNS kayıtları hatalı

### Adım 2: SSL Sertifikası
Vercel **otomatik olarak** Let's Encrypt SSL sertifikası sağlar:
- DNS kayıtları doğru olduğunda otomatik kurulur
- 24-48 saat içinde aktif olur
- **Force HTTPS** otomatik olarak açıktır

---

## 6. DNS Yayılma Süresi

DNS değişiklikleri **24-48 saat** içinde yayılır. Bu süre içinde:
- Domain **"Pending"** durumunda görünebilir
- Bu normaldir, bekleyin
- Yayılmayı hızlandırmak için TTL değerini düşürebilirsiniz (örn: 300)

---

## 7. DNS Kayıtlarını Kontrol Etme

### Terminal'den Kontrol:
```bash
# A Record kontrolü
nslookup bariscanyonel.com

# CNAME kontrolü
nslookup www.bariscanyonel.com

# Tüm kayıtları görüntüle
dig bariscanyonel.com
```

### Online Araçlar:
- **DNS Checker**: https://dnschecker.org/
- **What's My DNS**: https://www.whatsmydns.net/
- **MXToolbox**: https://mxtoolbox.com/DNSLookup.aspx

---

## 8. Vercel Proje Yapılandırması

### vercel.json Dosyası Oluşturma

Projenizin root dizininde `vercel.json` dosyası oluşturun:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json Build Script

`package.json` dosyanızda build script'in olduğundan emin olun:

```json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  }
}
```

---

## 9. Sorun Giderme

### Domain "Pending" Durumunda Kalıyor

1. **DNS kayıtlarını kontrol edin:**
   ```bash
   nslookup bariscanyonel.com
   ```
   - IP adresi Vercel'in IP'si ile eşleşmeli

2. **TTL değerini düşürün:**
   - Güzelnet panelinde TTL değerini 300'e düşürün
   - Değişiklikler daha hızlı yayılır

3. **DNS cache'i temizleyin:**
   - Tarayıcı cache'ini temizleyin
   - DNS cache'i temizleyin: `sudo dscacheutil -flushcache` (Mac)

### SSL Sertifikası Çalışmıyor

1. **DNS yayılmasını bekleyin:**
   - DNS kayıtları yayıldıktan sonra SSL otomatik kurulur
   - 24-48 saat sürebilir

2. **Vercel'de SSL durumunu kontrol edin:**
   - Domains → Domain adınız → SSL sekmesi
   - "Renew Certificate" butonuna tıklayın

### "Invalid Configuration" Hatası

1. **DNS kayıtlarını doğrulayın:**
   - A Record doğru IP'ye işaret etmeli
   - CNAME kayıtları doğru olmalı

2. **Vercel'in verdiği değerleri kullanın:**
   - Vercel dashboard'dan güncel IP ve CNAME değerlerini alın

---

## 10. Güzelnet Özel Notlar

### Güzelnet DNS Yönetim Paneli Özellikleri:

1. **DNS Kayıt Tipleri:**
   - A, AAAA, CNAME, MX, TXT, NS kayıtlarını destekler
   - Ana domain için A Record kullanın

2. **TTL Ayarları:**
   - Minimum: 300 saniye
   - Önerilen: 3600 saniye (1 saat)

3. **DNS Yayılma Süresi:**
   - Genellikle 1-4 saat içinde yayılır
   - Bazen 24-48 saat sürebilir

4. **Destek:**
   - Güzelnet müşteri hizmetleri: 0850 532 0 532
   - E-posta: destek@guzelnet.com.tr

---

## 11. Hızlı Kontrol Listesi

- [ ] Vercel'de domain eklendi mi?
- [ ] Vercel'den DNS kayıtları alındı mı?
- [ ] Güzelnet panelinde A Record eklendi mi?
- [ ] Güzelnet panelinde CNAME Record (www) eklendi mi?
- [ ] DNS kayıtları doğru değerlere ayarlandı mı?
- [ ] TTL değeri ayarlandı mı?
- [ ] DNS yayılması kontrol edildi mi?
- [ ] Vercel'de domain durumu "Valid" mi?
- [ ] SSL sertifikası aktif mi?
- [ ] HTTPS çalışıyor mu?

---

## 12. Vercel Deployment

### İlk Deployment:

```bash
# Vercel CLI kurulumu (eğer yoksa)
npm i -g vercel

# Projeyi deploy et
vercel

# Production'a deploy et
vercel --prod
```

### Otomatik Deployment:

GitHub'a push yaptığınızda Vercel otomatik olarak deploy eder:
1. Vercel → Project Settings → Git
2. GitHub repository'nizi bağlayın
3. Her push'ta otomatik deploy olur

---

## 13. Önemli Notlar

1. **DNS yayılması 24-48 saat** sürebilir
2. **Vercel otomatik SSL sağlar** - Ekstra kurulum gerekmez
3. **Force HTTPS** otomatik olarak açıktır
4. **www ve non-www** her ikisi de çalışır (Vercel otomatik yönlendirir)
5. **DNS cache** nedeniyle değişiklikler hemen görünmeyebilir

---

## 14. Destek ve Kaynaklar

- **Vercel Dokümantasyon**: https://vercel.com/docs/concepts/projects/domains
- **Vercel DNS Rehberi**: https://vercel.com/docs/concepts/projects/domains/add-a-domain
- **Güzelnet Destek**: https://www.guzelnet.com.tr/destek
- **DNS Test Araçları**: https://dnschecker.org/

---

## 15. Örnek DNS Yapılandırması

### Güzelnet Panel'de Görünmesi Gereken Kayıtlar:

```
Type    | Host | Value                    | TTL
--------|------|--------------------------|-----
A       | @    | 76.76.21.21              | 3600
CNAME   | www  | cname.vercel-dns.com     | 3600
```

**Not:** Vercel'in IP adresi değişebilir. Her zaman Vercel dashboard'dan güncel IP'yi kontrol edin.

---

## Başarılı Yapılandırma Sonrası

DNS yapılandırması tamamlandıktan sonra:
- ✅ https://bariscanyonel.com çalışmalı
- ✅ https://www.bariscanyonel.com çalışmalı
- ✅ HTTP → HTTPS otomatik yönlendirme olmalı
- ✅ SSL sertifikası aktif olmalı
- ✅ Tarayıcıda yeşil kilit simgesi görünmeli

