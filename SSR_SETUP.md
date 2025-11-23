# SSR (Server-Side Rendering) Yapılandırma Rehberi

## Not: Bu Proje SPA (Single Page Application)

Bu proje şu anda **React SPA** olarak çalışıyor. SSR için Next.js'e geçiş gerekir.

## Mevcut Durum: Client-Side Rendering (CSR)

- ✅ Hızlı geliştirme
- ✅ Basit hosting
- ❌ SEO için tam optimize değil
- ❌ İlk yükleme daha yavaş

## SSR İçin Seçenekler

### Seçenek 1: Next.js'e Geçiş (Önerilen)

**Avantajlar:**
- ✅ Otomatik SSR/SSG
- ✅ SEO optimizasyonu
- ✅ Daha iyi performans
- ✅ Image optimization

**Adımlar:**
1. Next.js projesi oluştur
2. Mevcut React kodlarını Next.js'e taşı
3. `getServerSideProps` veya `getStaticProps` kullan
4. Windows hosting'de Node.js desteği gerekir

### Seçenek 2: Pre-rendering (Static Site Generation)

**Avantajlar:**
- ✅ SEO dostu
- ✅ Hızlı yükleme
- ✅ Basit hosting (static dosyalar)

**Araçlar:**
- React Snap
- Prerender.io
- Puppeteer

### Seçenek 3: Hybrid Rendering

**Kullanım:**
- Önemli sayfalar: SSR (Ana sayfa, Blog)
- Diğer sayfalar: CSR (Projeler, İletişim)

## Windows Hosting için SSR

### Node.js Desteği Gerekli

Windows hosting'de SSR için:
1. **Node.js desteği** olmalı
2. **PM2** veya **IISNode** kullanılabilir
3. **Process Manager** gerekli

### IISNode ile SSR

```xml
<!-- web.config -->
<configuration>
  <system.webServer>
    <handlers>
      <add name="iisnode" path="server.js" verb="*" modules="iisnode"/>
    </handlers>
    <rewrite>
      <rules>
        <rule name="NodeInspector" patternSyntax="ECMAScript" stopProcessing="true">
          <match url="^server.js\/debug[\/]?" />
        </rule>
        <rule name="StaticContent">
          <action type="Rewrite" url="public{REQUEST_URI}"/>
        </rule>
        <rule name="DynamicContent">
          <conditions>
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="True"/>
          </conditions>
          <action type="Rewrite" url="server.js"/>
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>
```

## Mevcut Proje için Öneriler

### 1. SEO İyileştirmeleri (SSR Olmadan)

✅ **Yapıldı:**
- Meta tags eklendi
- Structured data (JSON-LD) eklendi
- Sitemap.xml mevcut
- robots.txt mevcut

### 2. Pre-rendering Ekleme

**React Snap ile:**
```bash
npm install --save-dev react-snap
```

```json
// package.json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": ["/", "/projects", "/blog"]
  }
}
```

### 3. Windows Hosting Kontrol Listesi

- [ ] SSL sertifikası kurulu mu?
- [ ] HTTPS yönlendirmesi çalışıyor mu?
- [ ] web.config dosyası yüklendi mi?
- [ ] Node.js desteği var mı? (SSR için)
- [ ] Static dosyalar doğru yerde mi? (dist klasörü)

## Sonuç

**Şu an için:**
- Proje SPA olarak çalışıyor ✅
- SEO için meta tags ve structured data mevcut ✅
- Windows hosting için web.config hazır ✅

**SSR istiyorsanız:**
- Next.js'e geçiş yapın
- Veya React Snap ile pre-rendering ekleyin


