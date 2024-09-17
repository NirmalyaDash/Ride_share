import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server: {
    port: 3000, // or any other port you prefer
  },
  plugins: [react()],
});
