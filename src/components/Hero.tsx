// Hero.tsx - Componente de sección hero principal
// Estilos de marca aplicados con CSS variables

export function Hero() {
  return (
    <section 
      className="pt-24 pb-16 md:pt-32 md:pb-24"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Título principal */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Automatiza tu negocio con{' '}
            <span style={{ color: 'var(--color-primary)' }}>Inteligencia Artificial</span>
          </h1>

          {/* Subtítulo/descripción */}
          <p 
            className="text-lg md:text-xl mb-8 leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Soluciones de automatización personalizadas que transforman tus procesos manuales 
            en flujos eficientes, ahorrando tiempo y reduciendo costos.
          </p>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
            >
              Solicitar Demo
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 transition-all hover:shadow-md"
              style={{ 
                color: 'var(--color-primary)',
                borderColor: 'var(--color-primary)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                e.currentTarget.style.color = 'var(--color-text-inverse)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--color-primary)';
              }}
            >
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
