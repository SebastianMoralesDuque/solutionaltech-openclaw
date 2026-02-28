// About.tsx - Componente de información de la empresa
// Sección "Sobre nosotros" con misión, visión y valores

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

export function About() {
  const values = [
    {
      icon: "🤖",
      title: "Innovación IA",
      description: "Aplicamos las últimas tecnologías de IA para resolver problemas reales de negocio."
    },
    {
      icon: "⚡",
      title: "Eficiencia",
      description: "Automatizamos procesos repetitivos para que tu equipo se enfoque en lo importante."
    },
    {
      icon: "🎯",
      title: "Resultados",
      description: "Medimos el éxito en métricas tangibles: tiempo ahorrado, costos reducidos, ingresos generados."
    },
    {
      icon: "🤝",
      title: "Colaboración",
      description: "Trabajamos como extensión de tu equipo, no como proveedores externos."
    }
  ];

  return (
    <section 
      id="nosotros"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span 
              className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ 
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                color: 'var(--color-primary)'
              }}
            >
              Sobre nosotros
            </span>
            <h2 
              className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Automatizamos el futuro de{' '}
              <span style={{ color: 'var(--color-primary)' }}>tu negocio</span>
            </h2>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Somos un equipo de ingenieros y consultores especializados en inteligencia artificial 
              y automatización de procesos. Ayudamos a empresas a transformar sus operaciones 
              mediante soluciones tecnológicas que ahorran tiempo y generan valor.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Desde 2023, hemos implementado más de 50 soluciones de automatización 
              para clientes en sectores como tecnología, finanzas, retail y servicios profesionales.
            </p>
          </motion.div>

          {/* Right - Stats/Visual */}
          <motion.div 
            className="p-8 rounded-2xl border shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
            style={{ 
              backgroundColor: 'var(--color-bg-primary)',
              borderColor: 'var(--color-border)'
            }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <p 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  50+
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Proyectos entregados
                </p>
              </div>
              <div className="text-center p-4">
                <p 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  15+
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Expertos IA
                </p>
              </div>
              <div className="text-center p-4">
                <p 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  3
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Años de experiencia
                </p>
              </div>
              <div className="text-center p-4">
                <p 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  95%
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Clientes satisfechos
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div>
          <motion.h3 
            className="text-2xl md:text-3xl font-bold text-center mb-12"
            style={{ color: 'var(--color-text-primary)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            Nuestros valores
          </motion.h3>
          <motion.div 
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="p-6 rounded-2xl border shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--color-bg-primary)',
                  borderColor: 'var(--color-border)'
                }}
                variants={fadeInUp}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <span className="text-4xl mb-4 block">{value.icon}</span>
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {value.title}
                </h4>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
