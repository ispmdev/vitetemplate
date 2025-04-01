import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Enables React support with Fast Refresh
  ],
  resolve: {
    alias: {
      // Optional: Simplify imports (e.g., `import { something } from '@/components'`)
      '@': '/src',
    },
  },
  build: {
    outDir: 'dist', // Output directory for production build
    sourcemap: true, // Generate source maps for debugging
  },
  server: {
    port: 3001, // Development server port
    open: true, // Auto-open browser on `npm run dev`
  },
  base: '/',
});