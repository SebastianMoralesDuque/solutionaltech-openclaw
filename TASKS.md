# TASKS.md - Sistema de Tareas Atómicas

## Principios
1. **Una tarea = Una acción concreta** (máximo 30 min de trabajo)
2. **Contexto mínimo**: Solo leer lo necesario para la tarea actual
3. **Historial comprimido**: Mover tareas completadas a `TASKS_ARCHIVE.md`
4. **Sin fechas límite**: Importa el progreso, no la velocidad

---

## ESTADO ACTUAL
**Fase:** FASE 7 - Animaciones y Estilo macOS
**En progreso:** Ninguna
**Completadas:** 35
**Pendientes:** 8

---

## BACKLOG (Tareas pendientes)

### FASE 6E: Funcionalidad Extra (2 tareas)
- [ ] `T034`: Implementar envío de formulario de contacto (EmailJS o webhook)
- [ ] `T035`: Añadir meta tags SEO en index.html (title, description, OG)

### FASE 7A: Animaciones Hero (1 tarea)
- [x] `T036`: Añadir partículas flotantes sutiles en el fondo del Hero ✅
- [x] `T037`: Efecto parallax suave al mover mouse en Hero ✅
- [ ] `T038`: Animación typing effect en el título principal del Hero

### FASE 7B: Estilo macOS (5 tareas)
- [ ] `T039`: Navbar con glassmorphism (blur + transparencia), bordes redondeados 12px
- [ ] `T040`: Tarjetas con sombra suave, bordes 16px, efecto hover con elevación
- [ ] `T041`: Botones pill-shaped (border-radius: 9999px), gradiente sutil
- [ ] `T042`: Cards de servicios estilo ventana macOS con 3 puntos superiores (rojo, amarillo, verde)
- [ ] `T043`: Ajustar espaciado generoso, nada tocando bordes de pantalla, máximo 90% width

---

## COMPLETADAS HOY
*(Vacío al inicio de cada día)*

- `T036`: Añadidas partículas flotantes animadas con framer-motion en Hero ✅
- `T037`: Implementado efecto parallax suave al mover mouse en Hero ✅
- `T028`: Creado componente FAQ.tsx con 6 preguntas frecuentes ✅
- `T029`: Implementado accordion/collapse functionality ✅
- `T030`: Importado FAQ en App.tsx (entre Testimonials y About) ✅
- `T031`: Actualizar datos de contacto reales (email, WhatsApp, ubicación) ✅
- `T032`: Actualizar estadísticas con números realistas ✅
- `T033`: Añadir logos de tecnologías/herramientas usadas (sección Trust) ✅

---

## REGLAS PARA EL MODELO

### Al iniciar sesión:
1. Leer SOLO `TASKS.md` (no leer PROGRESS.md ni PROJECT_PLAN.md)
2. Tomar la primera tarea del BACKLOG
3. Moverla a "EN PROGRESO"

### Al completar tarea:
1. Mover tarea a sección "COMPLETADAS HOY"
2. Añadir una línea de resultado
3. Si hay más de 5 completadas, archivar en `TASKS_ARCHIVE.md`

### Contexto mínimo:
- Solo leer archivos relevantes a la tarea actual
- NO leer todo el proyecto de golpe
- NO leer historial de PROGRESS.md

---

## NOTAS
- Este archivo es la única fuente de verdad para el progreso
- PROGRESS.md es histórico, no necesario para trabajar
- PROJECT_PLAN.md es referencia, no instrucción
