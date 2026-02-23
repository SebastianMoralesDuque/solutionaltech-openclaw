# AUTODEV.md - Instrucciones para el Agente de Desarrollo

## ⚠️ REGLA CRÍTICA: CONTEXTO MÍNIMO

**NUNCA leas más de 3 archivos en una sola sesión.**

### Archivos a leer SIEMPRE (máximo 2):
1. `TASKS.md` - Estado de tareas
2. Archivo específico de la tarea actual

### Archivos a NUNCA leer automáticamente:
- ❌ `PROGRESS.md` (histórico, innecesario)
- ❌ `PROJECT_PLAN.md` (referencia, no instrucción)
- ❌ Todo el código fuente de golpe
- ❌ `node_modules/` (jamás)

---

## FLUJO DE TRABAJO

### Paso 1: Leer TASKS.md
```
Solo leer TASKS.md para ver qué tarea está pendiente.
```

### Paso 2: Ejecutar UNA tarea
```
Leer SOLO los archivos necesarios para esa tarea.
Máximo 1-2 archivos adicionales.
```

### Paso 3: Actualizar TASKS.md
```
Marcar como completada.
Añadir resultado breve (1 línea).
```

### Paso 4: Git Commit + Push ⚠️ OBLIGATORIO
```
git add .
git commit -m "feat: completar TXXX - <descripción breve>"
git push
```

**NUNCA omitir este paso.** Cada tarea atómica debe quedar reflejada en el repositorio.

### Paso 5: Parar
```
Una tarea = Una sesión.
No continuar con más tareas.
```

---

## FORMATO DE TAREA

Cada tarea debe ser:
- **Atómica**: Una sola acción concreta
- **Medible**: Se puede verificar si está hecha
- **Pequeña**: Máximo 30 minutos de trabajo

### Ejemplos correctos:
- ✅ `T001`: Listar archivos en `src/components/`
- ✅ `T002`: Crear archivo `src/components/Button.tsx` vacío
- ✅ `T003`: Añadir prop `label` al componente Button

### Ejemplos incorrectos:
- ❌ "Crear toda la sección de servicios" (muy grande)
- ❌ "Implementar el frontend" (muy grande)
- ❌ "Revisar el proyecto" (no es atómico)

---

## CUÁNDO ARCHIVAR

Si `TASKS.md` tiene más de 5 tareas completadas:
1. Crear/añadir a `TASKS_ARCHIVE.md`
2. Mover las completadas allí
3. Mantener solo pendientes en `TASKS.md`

---

## SEÑAL DE PARADA

Si el modelo detecta que está leyendo demasiado contexto:
1. **PARAR inmediatamente**
2. Guardar progreso en TASKS.md
3. Reportar: "Contexto límite alcanzado, tarea guardada"

---

## NOTA PARA EL USUARIO

Este sistema está diseñado para:
- Evitar el error "Context overflow"
- Permitir desarrollo incremental
- Mantener progreso a lo largo de días/semanas
- No requerir fecha límite

**El objetivo es avanzar poco a poco, sin saturar el modelo.**

---

## MODELO RECOMENDADO

Para el cron de Auto-Dev, usar **GLM-5-FP8** (128K contexto) en lugar de gemini-flash.

**Razón:** gemini-flash tiene ~32K contexto efectivo, lo que causa overflow en sesiones acumuladas. GLM-5 tiene 128K, suficiente para múltiples runs sin limpiar contexto.

**Configuración del cron:**
```json
{
  "payload": {
    "model": "custom-api-us-west-2-modal-direct/zai-org/GLM-5-FP8",
    "message": "Leer AUTODEV.md y TASKS.md. Ejecutar SOLO UNA tarea del backlog. Actualizar TASKS.md al terminar."
  }
}
```
