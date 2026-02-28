// Contact.tsx - Componente de sección de contacto
// Formulario de contacto con estilos de marca

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setIsSuccess(false);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );
      setIsSuccess(true);
      formRef.current?.reset();
    } catch (err) {
      setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section 
      id="contacto"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info lado izquierdo */}
          <div>
            <h2 
              className="text-3xl md:text-5xl font-extrabold mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              ¿Listo para <span style={{ color: 'var(--color-primary)' }}>automatizar</span> tu negocio?
            </h2>
            <p 
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas 
              con una propuesta personalizada.
            </p>

            {/* Info de contacto */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                >
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Email</p>
                  <a 
                    href="mailto:info@aiautomation.com" 
                    className="font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    info@aiautomation.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                >
                  <span className="text-2xl">📱</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>WhatsApp</p>
                  <a 
                    href="https://wa.me/15551234567" 
                    className="font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                >
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: 'var(--color-text-muted)' }}>Ubicación</p>
                  <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                    Remoto / Global
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario lado derecho */}
          <div 
            className="p-8 md:p-10 rounded-3xl border shadow-lg"
            style={{ 
              backgroundColor: 'var(--color-bg-primary)',
              borderColor: 'var(--color-border)'
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {isSuccess && (
                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </div>
              )}

              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center">
                  {error}
                </div>
              )}
              <div>
                <label 
                  htmlFor="nombre" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Email corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tu@empresa.com"
                  className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="empresa" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2"
                  style={{ 
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="mensaje" 
                  className="block text-sm font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  ¿Cómo podemos ayudarte?
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{ 
                    backgroundColor: 'var(--color-bg-secondary)',
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-text-primary)'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              <p 
                className="text-xs text-center"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Al enviar, aceptas nuestra política de privacidad.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
