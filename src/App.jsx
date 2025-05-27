import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
function App() {
  return (
    <div className="bg-[#121212] min-h-screen font-lato">
      <Navbar />
     
      <Hero />
      <Services />
      <About/>
      <PortfolioSection/>
      <ContactSection/>
    </div>
  );
}

export default App;
