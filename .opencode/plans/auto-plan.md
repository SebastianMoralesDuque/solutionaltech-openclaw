# Plan: T041 - Botones pill-shaped con gradiente sutil

## Descripción
Convertir todos los botones del sitio a estilo "pill-shaped" (border-radius: 9999px / rounded-full) y añadir un gradiente sutil como background.

## Archivos a modificar
- `src/styles/globals.css` - Añadir variable CSS para gradiente
- `src/components/Hero.tsx` - Líneas 100 y 107
- `src/components/Navbar.tsx` - Línea 83
- `src/components/Contact.tsx` - Línea 226
- `src/components/Process.tsx` - Línea 168

## Pasos concretos

### 1. Agregar variable de gradiente en globals.css
En `:root`, las variables ya existen:
```css
--color-primary: #2563eb;
--color-secondary: #06b6d4;
```

### 2. Modificar Hero.tsx
- **Línea 100** (botón primario "Hablar con un experto"):
  - Cambiar `rounded-xl` a `rounded-full`
  - Agregar `background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))'`
  
- **Línea 107** (botón secundario "Explorar Soluciones"):
  - Cambiar `rounded-xl` a `rounded-full`
  - Ya tiene border-color, mantener estilo outline

### 3. Modificar Navbar.tsx
- **Línea 83** (botón CTA "Empezar"):
  - Cambiar `rounded-lg` a `rounded-full`
  - Agregar gradiente en el style

### 4. Modificar Contact.tsx
- **Línea 226** (botón "Enviar mensaje"):
  - Cambiar `rounded-xl` a `rounded-full`
  - Agregar gradiente en el style

### 5. Modificar Process.tsx
- **Línea 168** (botón "Empezar ahora"):
  - Ya tiene `rounded-full`
  - Agregar gradiente en el style

### 6. Verificar
- Ejecutar `npm run build` para verificar que no hay errores

## Detalles de implementación
- `rounded-full` en Tailwind = `border-radius: 9999px`
- Usar estilo inline: `style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))' }}`
- Para botones secundarios, mantener estilo actual con border
