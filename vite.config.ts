import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.quantyxg.com',
      dynamicRoutes: [
        '/',
        '/services',
        '/services/medical-chronology',
        '/services/narrative-summary',
        '/services/demand-letters',
        '/services/medical-opinion',
        '/pricing',
        '/about',
        '/case-upload',
        '/hipaa-pipeda-compliance',
        '/quote',
        '/contact',
        '/ai-best-practices'
      ],
      changefreq: 'weekly',
      priority: 0.8
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ['**/*.pdf'],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-select', '@radix-ui/react-checkbox', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          query: ['@tanstack/react-query'],
          icons: ['lucide-react'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification with esbuild (built-in)
    minify: 'esbuild',
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query'],
    exclude: ['pdfjs-dist'],
  },
}));
