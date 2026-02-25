// Contact.tsx - Componente de sección de contacto
// Formulario de contacto con estilos de marca

export function Contact() {
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
                    href="mailto:contact@ai-automation-agency.com" 
                    className="font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    contact@ai-automation-agency.com
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
                    href="https://wa.me/541151234567" 
                    className="font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    +54 9 11 5123-4567
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
                    Buenos Aires, Argentina
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
            <form className="space-y-6">
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
                className="w-full py-4 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:scale-[1.02]"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Enviar mensaje
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
