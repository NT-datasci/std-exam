import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/std-exam/', // <--- เพิ่มบรรทัดนี้เข้าไป (อย่าลืมลูกน้ำด้านหลัง)
})