# Plan: T034 - Implementar envío de formulario de contacto

## Descripción
Implementar funcionalidad de envío del formulario de contacto en `src/components/Contact.tsx` usando EmailJS (servicio gratuito sin backend).

## Archivos a modificar
- `src/components/Contact.tsx` - Agregar lógica de envío y estados

## Pasos concretos

### 1. Instalar dependencia EmailJS
```bash
npm install @emailjs/browser
```

### 2. Modificar Contact.tsx
- Importar `useRef` de React y `emailjs` de @emailjs/browser
- Crear estado React para manejar: `isLoading`, `isSuccess`, `error`
- Crear función handler para el submit del formulario:
  - Prevent default del form
  - Obtener datos del formulario
  - Llamar a `emailjs.sendForm()` con:
    - Service ID (crear cuenta en emailjs.com)
    - Template ID (crear template en emailjs.com)
    - Form reference
    - Public Key (de emailjs.com)
  - Manejar respuesta de éxito/error
- Agregar estados de UI:
  - Loading: deshabilitar botón, mostrar spinner/texto
  - Success: mostrar mensaje de confirmación, limpiar formulario
  - Error: mostrar mensaje de error
- Agregar feedback visual al usuario

### 3. Configuración EmailJS (no código)
- Crear cuenta gratuita en emailjs.com
- Crear Email Service (gmail u otro SMTP)
- Crear Email Template con variables: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`
- Obtener Public Key y configurar en el código

## Notas
- Alternativa: Usar webhook de Formspree o similar si EmailJS no es viable
- El approach con EmailJS es cliente-side, sin backend necesario
