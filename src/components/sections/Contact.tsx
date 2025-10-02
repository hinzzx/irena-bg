import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import type { ContactFormData } from '../../types';

const contactSchema = z.object({
  name: z.string().min(2, 'Името трябва да съдържа поне 2 символа'),
  email: z.string().email('Моля, въведете валиден имейл адрес'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Моля, изберете тема'),
  message: z.string().min(10, 'Съобщението трябва да съдържа поне 10 символа')
});

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage({ 
        type: 'success', 
        text: 'Благодарим за съобщението! Ще се свържем с вас в най-скоро време.' 
      });
      reset();
    } catch {
      setMessage({ type: 'error', text: 'Възникна грешка. Моля, опитайте отново.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__content reveal">
          <h2 id="contact-title" className="contact__title">Свържи се с нас</h2>
          <div className="flourish" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <p className="contact__description">
            Имаш въпроси за нашите творения или искаш да създадем нещо специално за теб? 
            Обичаме да чуваме от нашата общност.
          </p>
          
          <form className="contact__form" aria-label="Контактна форма" onSubmit={handleSubmit(onSubmit)}>
            <div className="contact__form-grid">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Име *</label>
                <input
                  type="text"
                  id="contact-name"
                  className={`contact__input ${errors.name ? 'error' : ''}`}
                  {...register('name')}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="contact__error" role="alert">
                    {errors.name.message}
                  </span>
                )}
              </div>
              
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Имейл *</label>
                <input
                  type="email"
                  id="contact-email"
                  className={`contact__input ${errors.email ? 'error' : ''}`}
                  {...register('email')}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="contact__error" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>
              
              <div className="contact__field">
                <label htmlFor="contact-phone" className="contact__label">Телефон</label>
                <input
                  type="tel"
                  id="contact-phone"
                  className="contact__input"
                  {...register('phone')}
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="contact__field">
                <label htmlFor="contact-subject" className="contact__label">Тема *</label>
                <select
                  id="contact-subject"
                  className={`contact__input contact__select ${errors.subject ? 'error' : ''}`}
                  {...register('subject')}
                  disabled={isSubmitting}
                >
                  <option value="">Избери тема</option>
                  <option value="general">Общ въпрос</option>
                  <option value="custom">Поръчка по желание</option>
                  <option value="care">Грижа за бижутата</option>
                  <option value="shipping">Доставка</option>
                  <option value="returns">Връщания</option>
                </select>
                {errors.subject && (
                  <span className="contact__error" role="alert">
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>
            
            <div className="contact__field contact__field--full">
              <label htmlFor="contact-message" className="contact__label">Съобщение *</label>
              <textarea
                id="contact-message"
                rows={5}
                className={`contact__input contact__textarea ${errors.message ? 'error' : ''}`}
                placeholder="Разкажи ни повече за твоята идея или въпрос..."
                {...register('message')}
                disabled={isSubmitting}
              />
              {errors.message && (
                <span className="contact__error" role="alert">
                  {errors.message.message}
                </span>
              )}
            </div>
            
            <div className="contact__actions">
              <button 
                type="submit" 
                className="btn btn--primary contact__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Изпраща...' : 'Изпрати съобщение'}
              </button>
            </div>
            
            <div className="contact__message" role="status" aria-live="polite">
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

export default Contact;