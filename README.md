# Tesis2-Front

Interfaz Angular 14 para inspecciones, riesgos, alertas, equipos y capacitaciones.

- Instalar: `npm ci` con una versión de Node compatible con Angular 14.
- Desarrollo: `npm start`; abrir http://localhost:4200.
- Compilar: `npm run build`; salida en `dist/tesis2-front/`.
- Pruebas: `npm test -- --watch=false` (Karma/Chrome; no hay casos unitarios versionados).

API: [Tesis2-Back](https://github.com/Franccesco1907/Tesis2-Back). Configurar `url_base` y `base_file` en `src/environments/environment.ts` y `environment.prod.ts`. Desarrollo usa localhost:3000; producción usa `/api/v1` y `/uploads` en el mismo origen (requiere servir o redirigir esas rutas al backend con `PRODUCTION=true`).

Licencia: [MIT](LICENSE).
