import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom', 'recoil'], // Força o uso de uma única instância
  },
  base: '/my-recoil-todo/', 
})