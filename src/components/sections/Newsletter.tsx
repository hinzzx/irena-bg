import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { NewsletterFormData } from '../../types';

const newsletterSchema = z.object({
  email: z.string().email('Моля, въведете валиден имейл адрес')
});

const Newsletter: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema)
  });

  const onSubmit = async (_data: NewsletterFormData) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({ type: 'success', text: 'Благодарим! Успешно се записахте за нашия бюлетин.' });
      reset();
    } catch (error) {
      setMessage({ type: 'error', text: 'Възникна грешка. Моля, опитайте отново.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="newsletter" aria-labelledby="newsletter-title">
      <div className="container">
        <div className="newsletter__content reveal">
          <h2 id="newsletter-title" className="newsletter__title">Остани свързана</h2>
          <p className="newsletter__description">
            Бъди първа да откриеш новите колекции и получи ранен достъп до ограничените издания.
          </p>
          <form className="newsletter__form" aria-label="Записване за новини" onSubmit={handleSubmit(onSubmit)}>
            <div className="newsletter__input-group">
              <label htmlFor="newsletter-email" className="visually-hidden">Имейл адрес</label>
              <input
                type="email"
                id="newsletter-email"
                placeholder="Твоят имейл адрес"
                className={`newsletter__input ${errors.email ? 'error' : ''}`}
                {...register('email')}
                disabled={isSubmitting}
              />
              <button type="submit" className="btn btn--secondary" disabled={isSubmitting}>
                {isSubmitting ? 'Записва...' : 'Присъедини се'}
              </button>
            </div>
            {errors.email && (
              <div className="newsletter__error" role="alert">
                {errors.email.message}
              </div>
            )}
            <div className="newsletter__message" role="status" aria-live="polite">
              {message && (
                <span className={message.type}>
                  {message.text}
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;