// FAQ.tsx - Componente de preguntas frecuentes
// Muestra las preguntas más comunes sobre los servicios de automatización con IA

import { motion } from 'framer-motion';
import { useState } from 'react';

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



export function FAQ() {
  const [preguntas, setPreguntas] = useState([
    {
      pregunta: '¿Cuánto tiempo toma implementar una solución de automatización?',
      respuesta: 'Depende de la complejidad del proyecto. Una automatización simple puede estar lista en 1-2 semanas, mientras que sistemas más complejos con agentes de IA personalizados pueden tomar 4-8 semanas. En la fase de descubrimiento, te daremos un timeline detallado y preciso.',
      isOpen: false,
    },
    {
      pregunta: '¿Necesito conocimientos técnicos para usar las soluciones que desarrollan?',
      respuesta: 'No. Diseñamos nuestras soluciones para que sean intuitivas y fáciles de usar. Además, incluimos capacitación completa para tu equipo y documentación detallada. Nuestro objetivo es que puedas operar todo de forma independiente.',
      isOpen: false,
    },
    {
      pregunta: '¿Qué tipo de ROI puedo esperar de la automatización con IA?',
      respuesta: 'Nuestros clientes típicamente ven un retorno de inversión entre 3-6 meses. Los beneficios incluyen reducción de costos operativos (hasta 60%), eliminación de errores manuales, y liberación de tiempo para tareas de mayor valor. En la auditoría inicial, estimamos el ROI potencial específico para tu caso.',
      isOpen: false,
    },
    {
      pregunta: '¿Cómo garantizan la seguridad de mis datos?',
      respuesta: 'Utilizamos las mejores prácticas de seguridad: encriptación de extremo a extremo, cumplimiento con GDPR, y opciones de despliegue en tu propia infraestructura si lo prefieres. Trabajamos con proveedores certificados (OpenAI, Anthropic) y nunca compartimos tus datos con terceros.',
      isOpen: false,
    },
    {
      pregunta: '¿Qué pasa si necesito cambios o mejoras después de la implementación?',
      respuesta: 'Ofrecemos planes de soporte y mantenimiento continuo. La IA evoluciona rápidamente, y nosotros nos encargamos de mantener tus soluciones actualizadas. También podemos iterar y mejorar las automatizaciones según nuevas necesidades que surjan.',
      isOpen: false,
    },
    {
      pregunta: '¿Trabajan con empresas de cualquier tamaño?',
      respuesta: 'Sí. Desde startups que quieren automatizar sus primeros procesos hasta grandes empresas que necesitan optimizar operaciones a escala. Adaptamos nuestras soluciones al tamaño, presupuesto y necesidades específicas de cada cliente. La automatización con IA es escalable y accesible.',
      isOpen: false,
    },
  ]);

  return (
    <section
      id="faq"
      className="py-20 md:py-32"
      style={{ backgroundColor: 'var(--color-bg-primary)' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{
              backgroundColor: 'rgba(37, 99, 235, 0.1)',
              color: 'var(--color-primary)',
            }}
          >
            Preguntas Frecuentes
          </span>
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Resolvemos tus <span style={{ color: 'var(--color-primary)' }}>dudas</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Todo lo que necesitas saber antes de dar el paso hacia la automatización inteligente.
          </p>
        </div>

        <motion.div
          className="space-y-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {preguntas.map((item, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderColor: 'var(--color-border)',
              }}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
onClick={() => {
                setPreguntas(preguntas.map((pregunta, i) => {
                  if (i === index) {
                    return { ...pregunta, isOpen: !pregunta.isOpen };
                  }
                  return pregunta;
                }));
              }}
            >
              <h3
                className="text-lg md:text-xl font-bold mb-4 flex items-start gap-3"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <span
                  className="text-2xl flex-shrink-0"
                  style={{ color: 'var(--color-primary)' }}
                >
                  Q
                </span>
                {item.pregunta}
              </h3>
              {item.isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="text-base leading-relaxed pl-9"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {item.respuesta}
                  </p>
                </motion.div>
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
            className="text-base mb-4"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            ¿Tienes más preguntas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 font-bold transition-all hover:opacity-80"
            style={{ color: 'var(--color-primary)' }}
          >
            Contáctanos directamente
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default FAQ;
