import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <div className="about__text reveal">
            <h2 id="about-title" className="about__title">Създадени с намерение</h2>
            <div className="flourish" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </div>
            <p className="about__description">
              Всяко творение започва като шепната мечта, преобразена чрез древни техники и модерна чувствителност. 
              Работим изключително с етично добити материали — 14k позлатено злато, което улавя светлината като утринното слънце, 
              естествени перли, които пазят океански истории, и камъни избрани за тяхната природна красота.
            </p>
            <p className="about__description">
              Нашите бижута не са просто аксесоар; те са празник на твоето пътешествие, 
              създадени да те придружават през нежните моменти и смелите приключения на живота.
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