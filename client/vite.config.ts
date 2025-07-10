import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


export default defineConfig({
  plugins: [react()],
  preview: {
    port: 3000,
    strictPort: true
  },
  server: {
    host:true,
    port: 3000,
    origin: "http://localhost:3000",
    proxy: {
      '/api': {
        target: 'http://todoapp-backend:5000/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
    watch: {
      usePolling:true
    }
  }
})