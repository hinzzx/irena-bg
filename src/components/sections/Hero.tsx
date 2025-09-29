import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
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
          <h1 
            id="hero-title" 
            className={`hero__title ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.2s' }}
          >
            Irena
          </h1>
          <p 
            className={`hero__subtitle ${isVisible ? 'animate-in' : ''}`}
            style={{ animationDelay: '0.6s' }}
          >
            Деликатни творения за твоята истинска същност
          </p>
          <button 
            className={`btn btn--primary ${isVisible ? 'animate-in' : ''}`}
            onClick={handleScrollToShop}
            type="button"
            style={{ animationDelay: '1.0s' }}
          >
            Най-продавани
          </button>
        </div>
      </div>
      <div 
        className="hero__image" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=1200&fit=crop&crop=center')" }}
        role="img" 
        aria-label="Жена носеща деликатни ръчно изработени бижута при естествена светлина"
      ></div>
    </section>
  );
};

export default Hero;