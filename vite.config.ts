import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
  const repoBase = env.VITE_BASE_PATH || '/trip-info-app/';
  const base = mode === 'development' ? '/' : repoBase;

    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'favicon.svg'],
          manifest: {
            name: '2026南加州深度家庭之旅',
            short_name: 'SoCal Trip',
            description: '2026年4月南加州13天深度家庭之旅行程規劃',
            theme_color: '#FDFCF8',
            background_color: '#FDFCF8',
            display: 'standalone',
            orientation: 'portrait',
            scope: base,
            start_url: base,
            icons: [
              {
                src: `${base}favicon.svg`.replace(/\/\//g, '/'),
                sizes: 'any',
                type: 'image/svg+xml',
                purpose: 'any maskable'
              },
              {
                src: `${base}favicon.ico`.replace(/\/\//g, '/'),
                sizes: '48x48',
                type: 'image/x-icon'
              }
            ]
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
            runtimeCaching: [
              {
                urlPattern: /^https:\/\/picsum\.photos\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'picsum-images',
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 60 * 60 * 24 * 30 // 30 days
                  },
                  cacheableResponse: {
                    statuses: [0, 200]
                  }
                }
              },
              {
                urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-stylesheets',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                  }
                }
              },
              {
                urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'google-fonts-webfonts',
                  expiration: {
                    maxEntries: 10,
                    maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
                  }
                }
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
