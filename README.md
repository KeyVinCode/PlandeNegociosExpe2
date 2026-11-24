# Dulce Placer · Plan de negocios interactivo

Sitio web (SPA) que presenta el plan de negocios de **Dulce Placer** de forma interactiva:
punto de partida, flujo de caja, inversión, financiamiento, escenarios, riesgos, defensa del
proyecto y referencias.

> 🌐 **Demo:** https://keyvincode.github.io/PlandeNegociosExpe2/

## Stack

| Herramienta | Uso |
| --- | --- |
| [React 19](https://react.dev) | Interfaz de usuario |
| [Vite 8](https://vite.dev) | Servidor de desarrollo y build |
| [Tailwind CSS 4](https://tailwindcss.com) (`@tailwindcss/vite`) | Estilos |
| [Framer Motion](https://motion.dev) | Animaciones y progreso de scroll |
| [Recharts](https://recharts.org) | Gráficas financieras |
| [react-icons](https://react-icons.github.io/react-icons) | Iconografía |
| [pnpm](https://pnpm.io) | Gestor de paquetes |

## Requisitos

- Node.js `^20.19.0` o `>=22.12.0` (ver `engines` en `package.json`)
- pnpm `12.23.0` (declarado en `packageManager`; puedes activarlo con `corepack enable`)

## Empezar en local

```bash
pnpm install     # instala dependencias
pnpm dev         # servidor de desarrollo en http://localhost:5173/
```

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Servidor de desarrollo con recarga en caliente |
| `pnpm build` | Compila el sitio de producción en `dist/` |
| `pnpm preview` | Sirve localmente el resultado de `dist/` |

Para probar el build igual que en GitHub Pages:

```bash
pnpm build
pnpm preview   # http://localhost:4173/PlandeNegociosExpe2/
```

## Estructura del proyecto

```
.
├─ .github/workflows/deploy.yml   # CI/CD: build + publicación en GitHub Pages
├─ public/                        # Archivos estáticos (favicon, etc.)
├─ src/
│  ├─ App.jsx                     # Composición de las secciones
│  ├─ main.jsx                    # Punto de entrada de React
│  ├─ index.css                   # Tailwind + tema (colores y tipografías)
│  ├─ components/                 # Nav, Section, Counter, Referencias
│  ├─ sections/                   # Secciones del plan (Hero, Partida, Flujo, ...)
│  └─ data/plan.js                # Datos y cifras del plan
├─ index.html                     # HTML base
└─ vite.config.js                 # Configuración de Vite (incluye `base` para Pages)
```

## Publicar en GitHub Pages

El despliegue es automático con GitHub Actions (`.github/workflows/deploy.yml`):
cada push a `main` compila el sitio y lo publica.

### 1. Subir el proyecto

```bash
git add .
git commit -m "chore: preparar despliegue en GitHub Pages"
git push origin main
```

Si aún no existe el repositorio remoto:

```bash
git remote add origin https://github.com/KeyVinCode/PlandeNegociosExpe2.git
git branch -M main
git push -u origin main
```

### 2. Activar GitHub Pages (una sola vez)

En GitHub: **Settings → Pages → Build and deployment → Source: `GitHub Actions`**.

### 3. Ver el resultado

- Pestaña **Actions** → workflow *Deploy a GitHub Pages*.
- Cuando termine, el sitio queda en `https://<usuario>.github.io/<repo>/`
  → https://keyvincode.github.io/PlandeNegociosExpe2/

### Ruta base (`base`) y dominio propio

GitHub Pages sirve el sitio en un subdirectorio (`/<repo>/`), por eso
`vite.config.js` define:

```js
const GITHUB_PAGES_BASE = process.env.VITE_BASE || '/PlandeNegociosExpe2/'
```

- **Si renombras el repositorio**, actualiza `GITHUB_PAGES_BASE` con el nuevo nombre.
- **Si usas un dominio propio** (o publicas en `usuario.github.io`), compila con
  `VITE_BASE=/` o cambia el valor por defecto a `'/'`.

## Notas

- `dist/` y `node_modules/` están en `.gitignore`: no se versionan.
- El sitio no usa enrutamiento por rutas (solo anclas `#seccion`), por lo que no
  requiere un `404.html` de respaldo.
- Las fuentes se cargan desde Google Fonts; no hay imágenes locales que dependan de rutas absolutas.

