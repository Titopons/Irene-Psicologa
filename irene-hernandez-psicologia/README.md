# Irene Hernández Ponce · Psicología

Proyecto web React + TypeScript + Vite, basado en la maqueta original de Lovable y adaptado para construir el MVP.

## Requisitos
- Node.js LTS (recomendado 20 o 22)
- npm

## Desarrollo local
```bash
npm ci
npm run dev
```

## Comprobaciones
```bash
npm run lint
npm run build
npm run preview
```

## Publicación de demo en Cloudflare Pages
- Conectar el repositorio GitHub.
- Framework preset: Vite.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Root directory: `/`.

El archivo `public/_redirects` permite resolver las rutas SPA, incluida `/admin`.

## Panel de demostración
Abrir `/admin`. El panel permite probar edición de textos, servicios, tarifas, contacto, horarios, políticas, SEO, publicaciones y enlaces sociales.

## Limitaciones importantes de esta versión
Esta entrega es una **demo frontend**, no una aplicación lista para gestionar pacientes reales:
- El almacenamiento usa `localStorage`: los datos solo existen en ese navegador y dispositivo.
- El panel `/admin` todavía no tiene autenticación ni control de acceso.
- El formulario no envía correos ni guarda solicitudes en un servidor.
- No se deben introducir datos personales reales ni datos de salud.
- Los textos, imágenes, publicaciones, métricas y perfiles de muestra deben revisarse antes de hacer pública la web.
- Los textos legales, privacidad y cookies deben revisarse con asesoramiento adecuado antes de producción.

La siguiente fase será incorporar backend, base de datos, autenticación de administración y protección antispam. Se evaluará Cloudflare Pages Functions + D1 para mantener el coste inicial dentro del nivel gratuito, sujeto a límites y condiciones vigentes.
