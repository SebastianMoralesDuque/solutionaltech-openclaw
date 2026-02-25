import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div 
        className="min-h-screen font-inter transition-colors duration-300"
        style={{ backgroundColor: 'var(--color-bg-secondary)' }}
      >
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Process />
          <Testimonials />
          <FAQ />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
