// Footer.tsx - Componente de pie de página
// Estilos de marca aplicados con CSS variables

export function Footer() {
  return (
    <footer 
      className="py-12"
      style={{ backgroundColor: 'var(--color-bg-dark)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid de columnas */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Logo + descripción */}
          <div>
            <span 
              className="text-xl font-bold"
              style={{ color: 'var(--color-text-inverse)' }}
            >
              AI Automation
            </span>
            <p 
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Transformamos negocios con soluciones de inteligencia artificial y automatización a medida.
            </p>
          </div>

          {/* Columna 2: Links de navegación */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: 'var(--color-text-inverse)' }}
            >
              Navegación
            </h4>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm transition-colors hover:opacity-80"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Información de contacto */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: 'var(--color-text-inverse)' }}
            >
              Contacto
            </h4>
            <ul 
              className="space-y-2 text-sm"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <li>info@aiautomation.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Ciudad de México, MX</li>
            </ul>
          </div>

          {/* Columna 4: Redes sociales */}
          <div>
            <h4 
              className="font-semibold mb-4"
              style={{ color: 'var(--color-text-inverse)' }}
            >
              Síguenos
            </h4>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Barra inferior */}
        <div 
          className="pt-8 border-t text-center text-sm"
          style={{ 
            borderColor: 'var(--color-border)',
            color: 'var(--color-text-muted)'
          }}
        >
          <p>© 2025 AI Automation. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
