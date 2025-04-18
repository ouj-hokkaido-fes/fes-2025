import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES  
  ? "fes-2025"            
  : "./",       
  plugins: [react(),tailwindcss(),],
})
