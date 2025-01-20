import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.mp4", "**/*.jpg", "**/*.jpeg", "**/*.png"], // Add image file types here
})
