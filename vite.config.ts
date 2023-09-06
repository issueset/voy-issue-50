import { defineConfig } from 'vite'
import wasm from "vite-plugin-wasm";

export default defineConfig({
  plugins: [
    wasm(),
  ],
  server: {
    headers: {
      'X-MY-TESTING-HEADER': 'v1',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
})
