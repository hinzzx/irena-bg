import React from 'react';
import type { Testimonial } from '../../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="testimonials__title reveal">Какво казва нашата общност</h2>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.id} className="testimonial reveal">
              <p className="testimonial__text">"{testimonial.text}"</p>
              <cite className="testimonial__author">— {testimonial.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;