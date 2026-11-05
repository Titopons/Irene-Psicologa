# MVP — Irene Hernández Ponce · Psicología

## Incluido en esta demo
- Web pública responsive.
- Formulario de solicitud sin campo libre sobre motivos de consulta.
- Mensaje que aclara que enviar una solicitud no confirma una cita.
- Panel `/admin` de demostración.
- Edición de textos principales, perfil, servicios, precios, datos de contacto, horarios, cancelación, SEO y aviso del formulario.
- Blog y redes con las cuatro publicaciones de muestra conservadas y editables.
- Gestión local de solicitudes de prueba.

## No incluido todavía
- Backend ni base de datos remota.
- Inicio de sesión / autenticación.
- Envío de emails.
- Reservas, calendario, pagos, WhatsApp o videollamadas.
- Conexión real con redes sociales.

## Advertencia
Los cambios se guardan en `localStorage`. No hay sincronización entre dispositivos ni protección de acceso al panel. No utilizar con pacientes ni publicar como servicio profesional real hasta completar backend, autenticación, seguridad, privacidad y revisión del contenido.

## Ejecutar
```bash
npm ci
npm run dev
```

## Cloudflare Pages
Build command: `npm run build`  
Build output directory: `dist`
