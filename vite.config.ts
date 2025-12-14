import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Chunk splitting for better caching
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Minify for production
    minify: 'terser',
    // Source maps for error tracking (optional)
    sourcemap: false,
  },
})