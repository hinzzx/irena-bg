import React, { useEffect } from 'react';
import { useScrollReveal } from './hooks/useScrollReveal';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Collections from './components/sections/Collections';
import Bestsellers from './components/sections/Bestsellers';
import Testimonials from './components/sections/Testimonials';
import Newsletter from './components/sections/Newsletter';
import Contact from './components/sections/Contact';
import { navigation, products, collections, testimonials } from './utils/data';

const App: React.FC = () => {
  useScrollReveal();

  useEffect(() => {
    // Add padding-top to body to account for fixed header
    document.body.style.paddingTop = '80px';
    
    return () => {
      document.body.style.paddingTop = '';
    };
  }, []);

  return (
    <div className="App">
      <Header navigation={navigation} />
      
      <main>
        <Hero />
        <About />
        <Collections collections={collections} />
        <Bestsellers products={products} />
        <Testimonials testimonials={testimonials} />
        <Newsletter />
        <Contact />
      </main>
      
      <Footer navigation={navigation} />
    </div>
  );
};

export default App;