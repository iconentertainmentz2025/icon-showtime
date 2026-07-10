import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    strictPort: true,
    host: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          // three.js is deliberately not listed here: naming it as a manual
          // chunk makes Vite modulepreload it from index.html on every route.
          // Left unlisted, it splits into the dynamic import that needs it.
          motion: ['framer-motion']
        }
      }
    }
  }
})