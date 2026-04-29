import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repo = "boda1";

export default defineConfig({
  plugins: [react()],
  base: `/${repo}/`,
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
})
