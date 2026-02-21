import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

function App() {
  return (
    <div 
      className="min-h-screen font-inter"
      style={{ backgroundColor: 'var(--color-bg-secondary)' }}
    >
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
