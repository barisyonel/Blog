import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['aos'],
          icons: ['@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons', '@fortawesome/free-solid-svg-icons']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    // Güvenlik için source map'leri production'da devre dışı bırak
    sourcemap: false,
    // Minification ayarları
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    // HTTPS için development server ayarları
    https: false, // Development için HTTP yeterli
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  // Güvenlik ayarları
  define: {
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false,
  },
  // Environment variables güvenliği
  envPrefix: ['VITE_'],
})
