# TASKS.md - Sistema de Tareas Atómicas

## Principios
1. **Una tarea = Una acción concreta** (máximo 30 min de trabajo)
2. **Contexto mínimo**: Solo leer lo necesario para la tarea actual
3. **Historial comprimido**: Mover tareas completadas a `TASKS_ARCHIVE.md`
4. **Sin fechas límite**: Importa el progreso, no la velocidad

---

## ESTADO ACTUAL
**Fase:** FASE 6 - Mejoras y Nuevas Secciones
**En progreso:** Ninguna
**Completadas:** 24
**Pendientes:** 11

---

## BACKLOG (Tareas pendientes)

### FASE 6A: Animaciones Scroll-Triggered (4 tareas)
- [x] `T021`: Instalar librería de animaciones (Framer Motion o AOS)
- [x] `T022`: Añadir animación fade-in + slide-up a Hero
- [x] `T023`: Añadir animación stagger a cards de Services
- [x] `T024`: Añadir animación a Testimonials y About

### FASE 6B: Nueva Sección "Proceso" (3 tareas)
- [ ] `T025`: Crear componente `Process.tsx` con 4 pasos del proceso de trabajo
- [ ] `T026`: Añadir animación de línea conectora entre pasos
- [ ] `T027`: Importar Process en App.tsx (entre Services y Testimonials)

### FASE 6C: Nueva Sección "FAQ" (3 tareas)
- [ ] `T028`: Crear componente `FAQ.tsx` con 5-6 preguntas frecuentes
- [ ] `T029`: Implementar accordion/collapse functionality para respuestas
- [ ] `T030`: Importar FAQ en App.tsx (entre Testimonials y About)

### FASE 6D: Mejoras de Contenido (3 tareas)
- [ ] `T031`: Actualizar datos de contacto reales (email, WhatsApp, ubicación)
- [ ] `T032`: Actualizar estadísticas con números realistas (50+ proyectos → 20+, etc.)
- [ ] `T033`: Añadir logos de tecnologías/herramientas usadas (sección Trust)

### FASE 6E: Funcionalidad Extra (2 tareas)
- [ ] `T034`: Implementar envío de formulario de contacto (EmailJS o webhook)
- [ ] `T035`: Añadir meta tags SEO en index.html (title, description, OG)

---

## EN PROGRESO
*(Mover aquí la tarea que se esté trabajando)*

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

## COMPLETADAS HOY
*(Vacío al inicio de cada día)*

---

## NOTAS
- Este archivo es la única fuente de verdad para el progreso
- PROGRESS.md es histórico, no necesario para trabajar
- PROJECT_PLAN.md es referencia, no instrucción
