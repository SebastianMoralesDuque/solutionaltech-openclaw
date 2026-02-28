// Services.tsx - Componente de sección de servicios
// Contenido real optimizado para una agencia de automatización IA

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const servicios = [
  {
    titulo: 'Agentes de IA Personalizados',
    descripcion: 'Desarrollamos asistentes inteligentes que conocen tu negocio, responden a clientes y ejecutan tareas complejas de forma autónoma.',
    icono: '🤖',
    tags: ['GPT-4o', 'Claude 3.5', 'RAG']
  },
  {
    titulo: 'Automatización de Workflows',
    descripcion: 'Conectamos tus herramientas (Make, Zapier, n8n) para eliminar tareas repetitivas y errores humanos en tus procesos diarios.',
    icono: '⚡',
    tags: ['Efficiency', 'Integration', 'Scale']
  },
  {
    titulo: 'Extracción y Análisis de Datos',
    descripcion: 'Transformamos documentos no estructurados y grandes volúmenes de datos en insights accionables mediante modelos de lenguaje.',
    icono: '📊',
    tags: ['Data Mining', 'ETL', 'AI Analysis']
  },
  {
    titulo: 'Consultoría Estratégica IA',
    descripcion: 'Auditamos tus procesos actuales para identificar las mayores oportunidades de ahorro y crecimiento mediante la implementación de IA.',
    icono: '💡',
    tags: ['Audit', 'Strategy', 'ROI']
  },
];

export function Services() {
  return (
    <section 
      id="servicios"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título de sección */}
        <div className="text-center mb-16 md:mb-24">
          <h2 
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Nuestras Soluciones de <span style={{ color: 'var(--color-primary)' }}>Próxima Generación</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            No solo instalamos herramientas, diseñamos el motor de crecimiento tecnológico 
            que tu empresa necesita para dominar la era de la inteligencia artificial.
          </p>
        </div>

        {/* Grid de servicios */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              className="group p-0 rounded-2xl border shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent relative overflow-hidden"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)'
              }}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* MacOS Window Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'var(--color-border)', backgroundColor: 'rgba(0,0,0,0.03)' }}>
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Card Content */}
              <div className="p-8 md:p-10">
                {/* Icono */}
                <div 
                  className="text-5xl mb-6 inline-block p-4 rounded-2xl bg-white shadow-sm"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {servicio.icono}
                </div>

                {/* Título */}
                <h3 
                  className="text-2xl font-bold mb-4"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {servicio.titulo}
                </h3>

                {/* Descripción */}
                <p 
                  className="text-base md:text-lg mb-8 leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {servicio.descripcion}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {servicio.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ 
                        backgroundColor: 'rgba(37, 99, 235, 0.1)', 
                        color: 'var(--color-primary)' 
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section below grid */}
        <div className="mt-20 text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--color-text-muted)' }}>
            ¿Tienes un reto específico?
          </p>
          <a 
            href="#contacto" 
            className="text-xl font-bold border-b-2 transition-all hover:opacity-80"
            style={{ 
              color: 'var(--color-primary)', 
              borderColor: 'var(--color-primary)' 
            }}
          >
            Cuéntanos tu proyecto y diseñamos una solución →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;
