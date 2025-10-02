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
    // Do NOT update on resize events caused by iOS toolbar appearing/disappearing
    let lastWidth = window.innerWidth;
    
    const setVH = () => {
      // Use the larger viewport height (when toolbar is hidden) for consistent sizing
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // Set initial value
    setVH();

    // Only update on actual orientation change, not on resize from toolbar
    const handleOrientationChange = () => {
      // Wait for orientation change to complete and get accurate dimensions
      setTimeout(() => {
        setVH();
        lastWidth = window.innerWidth;
      }, 100);
    };

    // Only handle resize if width actually changed (real resize, not toolbar)
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth !== lastWidth) {
        // Width changed = real resize, not just toolbar appearance
        setVH();
        lastWidth = currentWidth;
      }
      // If only height changed (toolbar), ignore it to prevent flickering
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      clearTimeout(timer);
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
      <div 
        className="hero__image" 
        style={{ backgroundImage: `url(${heroImage})` }}
        role="img" 
        aria-label="Жена носеща деликатни ръчно изработені бижута при естествена светлина"
      ></div>
    </section>
  );
};

export default Hero;