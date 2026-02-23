// Process.tsx - Componente de proceso de trabajo
// Muestra los 4 pasos del proceso de trabajo de la agencia

import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const lineAnimation = {
  initial: { scaleX: 0 },
  animate: { scaleX: 1 },
};

const steps = [
  {
    numero: '01',
    titulo: 'Descubrimiento',
    descripcion: 'Analizamos tus procesos actuales, identificamos cuellos de botella y detectamos las mayores oportunidades de automatización.',
    icono: '🔍',
  },
  {
    numero: '02',
    titulo: 'Diseño',
    descripcion: 'Diseñamos una solución personalizada que se integra con tus herramientas existentes y maximiza el ROI.',
    icono: '✏️',
  },
  {
    numero: '03',
    titulo: 'Desarrollo',
    descripcion: 'Construimos y probamos tu solución con metodologías ágiles, manteniéndote informado en cada etapa.',
    icono: '⚙️',
  },
  {
    numero: '04',
    titulo: 'Despliegue',
    descripcion: 'Implementamos la solución, formamos a tu equipo y brindamos soporte continuo para garantizar el éxito.',
    icono: '🚀',
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
            }}
          >
            Nuestra Metodología
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            De idea a <span style={{ color: 'var(--color-primary)' }}>implementación</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Un proceso probado que garantiza resultados en tiempo récord.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.numero}
              className="relative group"
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <div
                className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl h-full"
                style={{
                  backgroundColor: 'var(--color-bg-primary)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div
                  className="text-6xl font-extrabold mb-4 opacity-10"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {step.numero}
                </div>
                <div
                  className="text-4xl mb-4"
                >
                  {step.icono}
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {step.titulo}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {step.descripcion}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 items-center">
                  <motion.div
                    className="h-0.5 w-8 origin-left"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    variants={lineAnimation}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.2, ease: 'easeOut' }}
                  />
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.2, ease: 'easeOut' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--color-text-muted)' }}
          >
            ¿Listo para automatizar?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            Empezar ahora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
