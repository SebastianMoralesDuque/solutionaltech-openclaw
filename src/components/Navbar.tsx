// Navbar.tsx - Componente de navegación principal
// Estilos de marca aplicados con CSS variables + Dark mode toggle

import { useTheme } from '../context/ThemeContext';

export function Navbar() {
  const { toggleTheme, isDark } = useTheme();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b shadow-sm transition-colors duration-300"
      style={{ 
        backgroundColor: isDark ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        borderColor: 'var(--color-border)'
      }}
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
              href="#nosotros" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Contacto
            </a>
          </div>

          {/* Right side: Theme toggle + CTA */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              style={{ color: 'var(--color-text-secondary)' }}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDark ? (
                // Sun icon for dark mode (click to go light)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                // Moon icon for light mode (click to go dark)
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

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
      </div>
    </nav>
  );
}

export default Navbar;
