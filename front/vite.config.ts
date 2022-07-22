import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: '/sistema',
    host: '0.0.0.0',
    port: 3000,
    hmr: {
      path: '/sistema'
    },
  },
  plugins: [react(),tsconfigPaths()],
  preview: {
    port: 3000
  }
})