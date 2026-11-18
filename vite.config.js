import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base fijado al nombre exacto del repositorio de GitHub: "Facturas-"
export default defineConfig({
  plugins: [react()],
  base: "/Facturas-/",
});
