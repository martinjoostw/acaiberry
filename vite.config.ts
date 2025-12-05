import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/acaiberry/', // 👈 nombre del repo en GitHub
  build: {
    outDir: 'docs',    // 👈 Vite genera el build en /docs
  },
})
