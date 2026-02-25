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

export function Trust() {
  const technologies = [
    {
      name: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
      color: '#000000'
    },
    {
      name: 'TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript-logo.svg',
      color: '#3178C6'
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
      color: '#339933'
    },
    {
      name: 'Python',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
      color: '#3776AB'
    },
    {
      name: 'Docker',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg',
      color: '#2496ED'
    },
    {
      name: 'AWS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/AmazonWebservices_Logo.svg',
      color: '#FF9900'
    },
    {
      name: 'GitHub',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      color: '#181717'
    },
    {
      name: 'VS Code',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg',
      color: '#007ACC'
    },
    {
      name: 'Framer Motion',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Framer_Motion_Logo.svg',
      color: '#000000'
    }
  ];

  return (
    <section 
      id="tecnologias"
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
              Tecnologías
            </span>
            <h2 
              className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Confía en las mejores herramientas
            </h2>
            <p 
              className="text-lg leading-relaxed mb-6"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Utilizamos tecnologías de vanguardia para construir soluciones robustas y escalables.
              Nuestra experiencia abarca desde frameworks modernos hasta herramientas de DevOps y 
              plataformas en la nube.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Estas son algunas de las tecnologías con las que trabajamos:
            </p>
          </motion.div>
          {/* Right - Stats/Visual */}
          <motion.div 
            className="p-8 rounded-2xl border"
            style={{ 
              backgroundColor: 'var(--color-bg-primary)',
              borderColor: 'var(--color-border)'
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
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
                  Tecnologías dominadas
                </p>
              </div>
              <div className="text-center p-4">
                <p 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  20+
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Frameworks
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
                  Herramientas DevOps
                </p>
              </div>
              <div className="text-center p-4">
                <p 
                  className="text-4xl md:text-5xl font-extrabold"
                  style={{ color: 'var(--color-primary)' }}
                >
                  10+
                </p>
                <p 
                  className="text-sm mt-2"
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  Plataformas Cloud
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos Section */}
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {technologies.map((tech) => (
            <motion.div 
              key={tech.name}
              className="p-6 rounded-xl border transition-all hover:shadow-md"
              style={{ 
                backgroundColor: 'var(--color-bg-primary)',
                borderColor: 'var(--color-border)'
              }}
              variants={fadeInUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="w-12 h-12 mx-auto mb-4"
                style={{ filter: `drop-shadow(0 0 0 ${tech.color})` }}
              />
              <h4 
                className="text-sm font-semibold text-center"
                style={{ color: 'var(--color-text-primary)' }}
              >
                {tech.name}
              </h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Trust;