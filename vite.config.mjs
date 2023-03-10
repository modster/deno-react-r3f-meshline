import { defineConfig } from 'npm:vite@^4.0.0'
import react from 'npm:@vitejs/plugin-react@^3.0.0'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
