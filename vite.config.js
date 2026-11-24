import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// En GitHub Pages el sitio se publica en https://<usuario>.github.io/<repo>/
// Si renombras el repositorio (o usas un dominio propio) cambia este valor
// o define la variable de entorno VITE_BASE antes de compilar.
const GITHUB_PAGES_BASE = process.env.VITE_BASE || '/PlandeNegociosExpe2/'

export default defineConfig(({ mode }) => ({
  // En desarrollo servimos desde la raíz (http://localhost:5173/);
  // en build/preview usamos la ruta base de GitHub Pages.
  base: mode === 'development' ? '/' : GITHUB_PAGES_BASE,
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
}))
