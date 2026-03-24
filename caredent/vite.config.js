import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for Vercel deployment. 
  // If you still need GitHub Pages, use: base: process.env.VERCEL ? '/' : '/renu/'
  base: '/',
})
