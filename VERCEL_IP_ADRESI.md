# Vercel IP Adresi - Güzelnet DNS Ayarları

## Vercel IP Adresini Bulma

### Yöntem 1: Vercel Dashboard'dan (Önerilen)

1. **Vercel Dashboard'a giriş yapın**
   - https://vercel.com → Projenizi seçin

2. **Domain ayarlarına gidin**
   - Settings → Domains
   - Veya doğrudan: https://vercel.com/[proje-adi]/settings/domains

3. **Domain ekleyin**
   - "Add Domain" butonuna tıklayın
   - Domain adınızı girin: `bariscanyonel.com`
   - "Add" butonuna tıklayın

4. **DNS kayıtlarını görüntüleyin**
   - Vercel size şu bilgileri gösterecek:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21  ← Bu IP adresini kullanın
     ```

### Yöntem 2: Vercel'in Güncel IP Adresleri

Vercel'in güncel IP adresleri (2024):
- **Ana IP:** `76.76.21.21`
- **Alternatif IP:** `76.223.126.88`

**ÖNEMLİ:** Her zaman Vercel dashboard'dan güncel IP'yi kontrol edin çünkü değişebilir.

---

## Güzelnet DNS Ayarları - Adım Adım

### 1. A Record (Ana Domain) Ekleme

Güzelnet panelinde DNS kayıt ekleme formunda:

**Kayıt tipi:** `A` (zaten seçili)

**Alan adı:** 
- Boş bırakın VEYA
- `@` yazın VEYA
- Sadece nokta bırakın `.bariscanyonel.com.`

**TTL:** `3600` (varsayılan değer)

**IP Adresi:** 
```
76.76.21.21
```

**VEYA Vercel dashboard'dan aldığınız güncel IP adresini yazın**

### 2. CNAME Record (www) Ekleme

www alt domain için ayrı bir kayıt ekleyin:

**Kayıt tipi:** `CNAME`

**Alan adı:** `www`

**TTL:** `3600`

**Değer:** `cname.vercel-dns.com`

---

## Örnek Güzelnet DNS Yapılandırması

### A Record:
```
Kayıt tipi: A
Alan adı: @ (veya boş)
TTL: 3600
IP Adresi: 76.76.21.21
```

### CNAME Record:
```
Kayıt tipi: CNAME
Alan adı: www
TTL: 3600
Değer: cname.vercel-dns.com
```

---

## Vercel'den IP Adresini Kontrol Etme

Eğer Vercel dashboard'da IP adresi görünmüyorsa:

1. **Domain'i ekledikten sonra** Vercel size DNS yapılandırma talimatlarını gösterir
2. **"Configuration"** veya **"DNS Records"** sekmesine bakın
3. **"A Record"** bölümünde IP adresi görünecektir

### Alternatif: Vercel CLI ile Kontrol

```bash
# Vercel CLI kurulumu
npm i -g vercel

# Domain bilgilerini görüntüle
vercel domains ls
```

---

## Önemli Notlar

1. **IP adresi değişebilir:** Vercel IP adresleri zaman zaman değişebilir, bu yüzden her zaman Vercel dashboard'dan kontrol edin

2. **DNS yayılması:** IP adresini ekledikten sonra 24-48 saat içinde yayılır

3. **Doğrulama:** IP adresini ekledikten sonra şu komutla kontrol edin:
   ```bash
   nslookup bariscanyonel.com
   ```
   Çıktıda Vercel'in IP adresini görmelisiniz

4. **www için CNAME:** www alt domain için A Record değil, CNAME kullanın

---

## Sorun Giderme

### IP adresi çalışmıyor:
1. Vercel dashboard'dan güncel IP'yi kontrol edin
2. DNS kayıtlarının doğru yazıldığından emin olun
3. TTL değerini düşürün (300) ve tekrar deneyin

### Domain "Pending" durumunda:
- DNS yayılması 24-48 saat sürebilir
- IP adresinin doğru olduğundan emin olun
- Vercel dashboard'da domain durumunu kontrol edin

---

## Hızlı Referans

**Güzelnet DNS Formu için:**
- **Kayıt tipi:** A
- **Alan adı:** @ (veya boş)
- **TTL:** 3600
- **IP Adresi:** `76.76.21.21` (Vercel'den güncel IP'yi kontrol edin)

