import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

    // Configuration du build
    build: {
      outDir: 'dist', // Dossier de sortie de la build
      assetsDir: 'assets', // Dossier des fichiers statiques
      sourcemap: true, // Activation des sourcemaps pour le débogage
    },
})
