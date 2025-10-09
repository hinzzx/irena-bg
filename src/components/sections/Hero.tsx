import React, { useEffect, useState } from 'react';
import heroImage from '../../assets/heroSectionImage.jpg';
import IrenaIllustrationAnimated from '../common/IrenaIllustrationAnimated';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Fix for iOS Safari viewport height flickering
    // Set viewport height ONCE and only update on orientation change (device rotation)
    let lastWidth = window.innerWidth;
    let resizeTimeout: ReturnType<typeof setTimeout>;
    
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVH();

    // Only update on actual orientation change, not on resize from toolbar
    const handleOrientationChange = () => {
      setTimeout(() => {
        setVH();
        lastWidth = window.innerWidth;
      }, 100);
    };

    // Debounced resize handler for better performance
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const currentWidth = window.innerWidth;
        if (currentWidth !== lastWidth) {
          setVH();
          lastWidth = currentWidth;
        }
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  const handleScrollToShop = () => {
    const element = document.querySelector('#bestsellers');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero" aria-labelledby="hero-title">
      <div className="hero__content">
        <div className="hero__text">
          {/* Irena Illustration SVG */}
          <div 
            className={`hero__illustration ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0s' }}
          >
            <IrenaIllustrationAnimated />
          </div>
          
          <h1 
            id="hero-title" 
            className={`hero__title ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Irena
            {/* SVG necklace will be positioned here */}
          </h1>
          <p 
            className={`hero__subtitle ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.4s' }}
          >
            Деликатни ръчни творения за Вашата истинска същност
          </p>
          <button 
            className={`btn btn--primary ${isVisible ? 'animate-in' : ''}`}
            onClick={handleScrollToShop}
            type="button"
            style={{ animationDelay: '0.6s' }}
          >
            Най-продавани
          </button>
        </div>
      </div>
      <img 
        src={heroImage}
        alt="Жена носеща деликатни ръчно изработені бижута при естествена светлина"
        className="hero__image"
        loading="eager"
        decoding="async"
      />
    </section>
  );
};

export default Hero;