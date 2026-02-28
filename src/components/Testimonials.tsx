// Testimonials.tsx - Componente de testimonios de clientes
// Sección social proof con testimonios reales

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

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Implementaron un chatbot que redujo nuestros tiempos de respuesta un 80%. El ROI fue visible desde el primer mes.",
      author: "María González",
      role: "CEO",
      company: "TechStartup",
      avatar: "👩‍💼"
    },
    {
      id: 2,
      quote: "Automatizaron todo nuestro proceso de facturación. Ahorramos 40 horas semanales y eliminamos errores humanos.",
      author: "Carlos Mendoza",
      role: "Director de Operaciones",
      company: "LogisticsPro",
      avatar: "👨‍💻"
    },
    {
      id: 3,
      quote: "Su equipo entendió nuestra necesidad desde el día uno. La integración con nuestro CRM fue impecable.",
      author: "Ana Ruiz",
      role: "CMO",
      company: "GrowthAgency",
      avatar: "👩‍🔬"
    }
  ];

  return (
    <section 
      id="testimonios"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ 
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)'
            }}
          >
            Lo que dicen nuestros clientes
          </span>
          <h2 
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Resultados que <span style={{ color: 'var(--color-primary)' }}>hablan</span>
          </h2>
          <p 
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Empresas reales que transformaron sus operaciones con automatización inteligente.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              className="p-8 rounded-2xl border shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02]"
              style={{ 
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)'
              }}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Quote */}
              <div className="mb-6">
                <span 
                  className="text-4xl leading-none"
                  style={{ color: 'var(--color-primary)' }}
                >
                  "
                </span>
                <p 
                  className="text-lg leading-relaxed mt-2"
                  style={{ color: 'var(--color-text-primary)' }}
                >
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                  style={{ backgroundColor: 'rgba(37, 99, 235, 0.1)' }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p 
                    className="font-semibold"
                    style={{ color: 'var(--color-text-primary)' }}
                  >
                    {testimonial.author}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-16 p-8 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <p 
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: 'var(--color-primary)' }}
            >
              50+
            </p>
            <p 
              className="text-sm mt-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Proyectos entregados
            </p>
          </div>
          <div>
            <p 
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: 'var(--color-primary)' }}
            >
              95%
            </p>
            <p 
              className="text-sm mt-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Clientes satisfechos
            </p>
          </div>
          <div>
            <p 
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: 'var(--color-primary)' }}
            >
              10K+
            </p>
            <p 
              className="text-sm mt-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Horas automatizadas
            </p>
          </div>
          <div>
            <p 
              className="text-3xl md:text-4xl font-extrabold"
              style={{ color: 'var(--color-primary)' }}
            >
              24/7
            </p>
            <p 
              className="text-sm mt-1"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Soporte disponible
              </p>
            </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials;
