// Hero.tsx - Componente de sección hero principal
// Contenido real y estructura optimizada

export function Hero() {
  return (
    <section 
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left max-w-2xl">
            {/* Título principal */}
            <h1 
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-6"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Escala tu negocio con la potencia de la{' '}
              <span className="block mt-2" style={{ color: 'var(--color-primary)' }}>
                IA Generativa
              </span>
            </h1>

            {/* Subtítulo/descripción */}
            <p 
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Diseñamos y desplegamos agentes de IA personalizados que automatizan tu soporte técnico, 
              ventas y flujos de trabajo internos. Deja que la tecnología trabaje por ti 24/7.
            </p>

            {/* Botones CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Hablar con un experto
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold border-2 transition-all hover:bg-white hover:shadow-md"
                style={{ 
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)',
                }}
              >
                Explorar Soluciones
              </a>
            </div>
            
            {/* Prueba social rápida o stats */}
            <div className="mt-12 flex items-center gap-8 border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
              <div>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>+50%</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Eficiencia Operativa</p>
              </div>
              <div className="w-px h-10" style={{ backgroundColor: 'var(--color-border)' }} />
              <div>
                <p className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>24/7</p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Disponibilidad Total</p>
              </div>
            </div>
          </div>

          {/* Imagen o representación visual */}
          <div className="hidden lg:block relative">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
