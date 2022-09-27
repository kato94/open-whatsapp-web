import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'

export default defineConfig({
  server: {
    port: 8094,
  },
  plugins: [
    Unocss(),
  ],
})
