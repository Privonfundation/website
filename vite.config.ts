import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSitemap from 'vite-plugin-sitemap';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              three: ['three', '@react-three/fiber', '@react-three/drei'],
            },
          },
        },
      },
      plugins: [
        react(),
        vitePluginSitemap({
          hostname: 'https://privon.pages.dev',
          dynamicRoutes: [
            '/',
            '/about',
            '/privacy',
            '/terms',
            '/ethics',
            '/contributions',
            '/community',
            '/crytotool',
          ],
        }),
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
