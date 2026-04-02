import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Якщо тобі більше нічого не треба, видаляємо Babel
export default defineConfig({
  plugins: [react()],
});
