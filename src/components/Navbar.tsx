// Navbar.tsx - Componente de navegación principal
// Estilos de marca aplicados con CSS variables

export function Navbar() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span 
              className="text-xl font-bold"
              style={{ color: 'var(--color-primary)' }}
            >
              AI Automation
            </span>
          </a>

          {/* Links de navegación */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-text-primary)' }}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Servicios
            </a>
            <a 
              href="#contacto" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Contacto
            </a>
          </div>

          {/* Botón CTA */}
          <a
            href="#contacto"
            className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg font-semibold text-white transition-all hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--color-primary)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-primary)'}
          >
            Empezar
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
