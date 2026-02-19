# TASKS.md - Sistema de Tareas Atómicas

## Principios
1. **Una tarea = Una acción concreta** (máximo 30 min de trabajo)
2. **Contexto mínimo**: Solo leer lo necesario para la tarea actual
3. **Historial comprimido**: Mover tareas completadas a `TASKS_ARCHIVE.md`
4. **Sin fechas límite**: Importa el progreso, no la velocidad

---

## ESTADO ACTUAL
**Fase:** Estructura base
**En progreso:** Ninguna
**Completadas:** 8
**Pendientes:** 4

---

## BACKLOG (Tareas pendientes)

### FASE 1: Estructura del Código
- [x] `T001`: Listar todos los archivos en `src/` y subcarpetas ✓
- [x] `T002`: Revisar `package.json` - dependencias instaladas ✓
- [x] `T003`: Revisar `tsconfig.json` - configuración TypeScript ✓
- [x] `T004`: Revisar `vite.config.ts` - configuración build ✓

### FASE 2: Componentes Base
- [x] `T005`: Crear carpeta `src/components/` ✓
- [x] `T006`: Crear componente `Navbar.tsx` (solo estructura) ✓
- [x] `T007`: Crear componente `Hero.tsx` (solo estructura) ✓
- [ ] `T008`: Crear componente `Services.tsx` (solo estructura)

### FASE 3: Estilos
- [ ] `T009`: Configurar Tailwind CSS en el proyecto
- [ ] `T010`: Crear `src/styles/globals.css` base
- [ ] `T011`: Definir colores de marca en CSS variables
- [ ] `T012`: Crear componente `Footer.tsx` (solo estructura)

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

- [x] `T001`: Listar archivos en `src/` → **Resultado:** 4 archivos encontrados: `App.tsx`, `main.tsx`, `index.css`, `assets/react.svg`
- [x] `T002`: Revisar `package.json` → **Resultado:** React 19.1.1, Tailwind 4.1.14, Vite 7.1.7, TypeScript 5.9.3. Tailwind ya configurado via @tailwindcss/vite plugin.
- [x] `T003`: Revisar `tsconfig.json` → **Resultado:** Configuración correcta con project references. ES2022 target, strict mode, bundler resolution, react-jsx transform. Bien estructurado.
- [x] `T004`: Revisar `vite.config.ts` → **Resultado:** Config minimalista con React+SWC y Tailwind v4 via plugin. Sin configuraciones custom. Correcto para proyecto base.
- [x] `T005`: Crear carpeta `src/components/` → **Resultado:** Carpeta creada exitosamente en `/src/components/`
- [x] `T006`: Crear componente `Navbar.tsx` → **Resultado:** Componente base creado con estructura de navegación (nav, TODO comments para logo, links y CTA)
- [x] `T007`: Crear componente `Hero.tsx` → **Resultado:** Componente base creado con estructura hero (section, TODO comments para título, subtítulo, botones CTA, imagen)

---

## NOTAS
- Este archivo es la única fuente de verdad para el progreso
- PROGRESS.md es histórico, no necesario para trabajar
- PROJECT_PLAN.md es referencia, no instrucción
