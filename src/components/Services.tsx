// Services.tsx - Componente de sección de servicios
// Estilos de marca aplicados con CSS variables

const servicios = [
  {
    titulo: 'Automatización de Procesos',
    descripcion: 'Optimizamos flujos de trabajo repetitivos mediante IA y scripts personalizados.',
    icono: '⚙️',
  },
  {
    titulo: 'Chatbots Inteligentes',
    descripcion: 'Asistentes virtuales que atienden clientes 24/7 con respuestas contextuales.',
    icono: '🤖',
  },
  {
    titulo: 'Integraciones API',
    descripcion: 'Conectamos tus herramientas favoritas para un ecosistema unificado.',
    icono: '🔗',
  },
  {
    titulo: 'Análisis de Datos',
    descripcion: 'Extraemos insights valiosos de tus datos con modelos de machine learning.',
    icono: '📊',
  },
];

export function Services() {
  return (
    <section 
      id="servicios"
      className="py-16 md:py-24"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Nuestros Servicios
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Soluciones a medida para potenciar tu negocio con tecnología de vanguardia
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)'
              }}
            >
              {/* Icono */}
              <div 
                className="text-4xl mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                {servicio.icono}
              </div>

              {/* Título */}
              <h3 
                className="text-xl font-semibold mb-2"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {servicio.titulo}
              </h3>

              {/* Descripción */}
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {servicio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
