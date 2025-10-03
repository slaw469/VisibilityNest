import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="min-h-screen bg-background-light">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;