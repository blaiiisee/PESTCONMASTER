import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Coverage from './components/Coverage';
import Manpower from './components/Manpower';
import Executive from './components/Executive';
import MissionVision from './components/MissionVision';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Coverage />
        <Manpower />
        <Executive />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
