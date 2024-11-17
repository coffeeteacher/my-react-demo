import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 開發中產品路徑
  // process.env.NODE_ENV => 取得node環境中變數
  // 如果路徑等於產品路徑，就執行倉庫路徑
  base: process.env.NODE_ENV === 'production' ? '/my-react-demo/' : '/',
  plugins: [react()],
})
