import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If deploying to USERNAME/waypoint-site on GitHub Pages:
  base: '/waypoint-site/',
  // If using your custom domain (waypointoperating.com), change to:
  // base: '/'
})
