<<<<<<< HEAD
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Nenhuma configuração de build customizada.
  // Deixaremos o Vite e o Vercel usarem os padrões otimizados.
});
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Nenhuma configuração de build customizada.
  // Deixaremos o Vite e o Vercel usarem os padrões otimizados.
});
>>>>>>> edfd5a9274d9a96c3e18b5281c89f2e90dc5f0bc
