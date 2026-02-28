import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'Escala tu negocio con la potencia de la IA Generativa';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (clientX - centerX) / 50;
    const offsetY = (clientY - centerY) / 50;
    
    const image = document.querySelector('.rotate-3') as HTMLElement | null;
    if (image) {
      image.style.transform = `rotate(3deg) translate(${offsetX}px, ${offsetY}px)`;
    }
  };

  return (
    <section 
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      onMouseMove={handleMouseMove}
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-left max-w-2xl">
            {/* Título principal con typing effect */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {typedText.substring(0, 40)} {!isTypingComplete && <span className="animate-pulse">|</span>}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="block mt-2 relative" style={{ color: 'var(--color-primary)' }}>
                    {typedText.substring(40)}
                  </span>
                </motion.span>
            </motion.h1>

            {/* Subtítulo/descripción */}
            <motion.p 
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              Diseñamos y desplegamos agentes de IA personalizados que automatizan tu soporte técnico, 
              ventas y flujos de trabajo internos. Deja que la tecnología trabaje por ti 24/7.
            </motion.p>

            {/* Botones CTA */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]"
              >
                Hablar con un experto
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border-2 transition-all hover:bg-white/10 hover:shadow-md"
                style={{ 
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)',
                }}
              >
                Explorar Soluciones
              </a>
            </motion.div>
            
            {/* Prueba social rápida o stats */}
            <motion.div 
              className="mt-12 flex items-center gap-8 border-t pt-8" 
              style={{ borderColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <div>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>+50%</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Eficiencia Operativa</p>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: 'var(--color-border)' }} />
              <div>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>24/7</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Disponibilidad Total</p>
              </div>
            </motion.div>
          </div>

          {/* Imagen o representación visual */}
          <motion.div 
            className="hidden lg:block relative"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          >
            <div 
              className="aspect-square rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500"
              style={{ backgroundColor: 'var(--color-bg-dark)' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-6xl">🤖</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Agent System</h3>
                  <div className="space-y-2 max-w-xs mx-auto">
                    <div className="h-2 w-full bg-white/10 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                    <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
            {/* Decorativo extra */}
            <div 
              className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-xl backdrop-blur-md border"
              style={{ backgroundColor: 'white/80', borderColor: 'var(--color-border)' }}
            >
              <p className="font-bold text-sm mb-1" style={{ color: 'var(--color-text-primary)' }}>Deployment Status</p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-green-600 font-medium">Production Ready</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
