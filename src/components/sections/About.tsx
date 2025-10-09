import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <div className="about__text reveal">
            <h2 id="about-title" className="about__title">IRENA – Красотата на природата, запечатана в бижу</h2>
            <div className="flourish" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="about__description">
              Вдъхновението зад бранда идва от древногръцката богиня на мира и благоденствието – Ирена. Тя бива изобразявана като красива млада жена с факла или цветя в ръцете си – знаци на живот, светлина и просперитет. На една от най-известните скулптури, съхранена и до днес, Ирена държи в прегръдките си малкия Плутос, бога на богатството – послание, че истинското изобилие идва само когато има мир.
            </p>
            <p className="about__description">
              В самото начало имах представа как искам да изглеждат бижутата, но нямах идея за бранда. Това се промени веднага, когато видях изображението на Ирена с цветя в ръцете си. Осъзнах, че искам да пресъздавам красотата точно по този специфичен начин – да уловя мига на природата и да го превърна във вечност. Така се роди IRENA – бранд за бижута, в които истински цветя се запечатват в епоксидна смола. Всяко бижу е уникално, защото природата не повтаря формите си.
            </p>
          </div>
          <div className="about__image reveal">
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop&crop=center" 
              alt="Крупен план на деликатни златни бижута, изработвани на ръка" 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;