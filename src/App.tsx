import { useState, type SVGProps } from 'react';
// Íconos SVG internos para simplicidad y evitar librerías.

// -------------------------------------------
// 1. Definición de íconos SVG internos (Mínimos)
// -------------------------------------------

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// -------------------------------------------
// 2. Componente principal App (Simplificado)
// -------------------------------------------

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      {/* -------------------------------------------
        Navbar Simple y Responsive
        -------------------------------------------
      */}
      <nav className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="text-xl font-bold text-indigo-600">Mi App Simple</a>
            </div>

            {/* Links de Navegación - Escritorio */}
            <div className="hidden md:flex space-x-4">
              <a href="#home" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg transition-colors">Inicio</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg transition-colors">Acerca</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-lg transition-colors">Contacto</a>
            </div>

            {/* Botón de Menú Móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150"
              >
                <span className="sr-only">Abrir menú</span>
                {/* Uso directo de íconos SVG */}
                {isMenuOpen ? (
                  <XIcon className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Menú Móvil Desplegable */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-3 pt-2 shadow-inner">
            <div className="space-y-1 px-2">
              <a href="#home" className="block text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Inicio</a>
              <a href="#about" className="block text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Acerca</a>
              <a href="#contact" className="block text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* -------------------------------------------
        Contenido Principal Simple
        -------------------------------------------
      */}
      <main className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-indigo-500">
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">Página de Inicio</h1>
          <p className="text-gray-600">
            Este es el contenido principal debajo de la barra de navegación minimalista.
          </p>
        </div>
      </main>
      
    </div>
  );
}

export default App;
