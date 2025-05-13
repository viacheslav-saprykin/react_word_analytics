import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react_word_analytics/", // Заміни <repo-name> на назву твого репозиторію
  plugins: [react()],
})