import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //base: '/waypoint-site/',   // repo name
  base: '/',   // custom domain
  build: { outDir: 'docs' }  // GitHub Pages can serve /docs
})
