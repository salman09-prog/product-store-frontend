import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api":{
				target: "https://product-store-backend-v0xa.onrender.com",
      }
    }
  }
})
