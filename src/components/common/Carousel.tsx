import React, { useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Keyboard, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
// @ts-expect-error - CSS imports
import 'swiper/css';
// @ts-expect-error - CSS imports
import 'swiper/css/navigation';
// @ts-expect-error - CSS imports
import 'swiper/css/pagination';
// @ts-expect-error - CSS imports
import 'swiper/css/a11y';

// Import custom styles
import './Carousel.css';

export interface CarouselItem {
  id: string;
  image: string;
  alt: string;
  title?: string;
  description?: string;
  price?: number;
  details?: string;
}

interface CarouselProps {
  items: CarouselItem[];
  showPrices?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  itemsPerView?: number;
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  showPrices = false,
  autoPlay = false,
  autoPlayInterval = 4000,
  className = ''
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Handle swiper instance
  const handleSwiper = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  // Update progress indicator
  const handleProgress = useCallback((_swiper: SwiperType, progress: number) => {
    if (progressRef.current) {
      progressRef.current.style.transform = `scaleX(${progress})`;
    }
  }, []);

  return (
    <div 
      className={`c-carousel ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Product carousel"
    >
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]}
        spaceBetween={12}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={400}
        threshold={10}
        touchRatio={1}
        touchAngle={45}
        grabCursor={true}
        watchSlidesProgress={true}
        watchOverflow={true}
        preventInteractionOnTransition={false}
        resistance={true}
        resistanceRatio={0.85}
        breakpoints={{
          // Mobile: 1 item
          320: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
          // Tablet: 2 items
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          // Desktop: 3 items
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        pagination={{
          clickable: true,
          el: '.c-carousel__pagination',
          bulletClass: 'c-carousel__bullet',
          bulletActiveClass: 'c-carousel__bullet--active',
          renderBullet: (index: number, className: string) => {
            return `<button 
              type="button" 
              class="${className}" 
              aria-label="Go to slide ${index + 1}"
            ></button>`;
          },
        }}
        navigation={{
          nextEl: '.c-carousel__button--next',
          prevEl: '.c-carousel__button--prev',
          disabledClass: 'c-carousel__button--disabled',
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        }}
        autoplay={autoPlay ? {
          delay: autoPlayInterval,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
        } : false}
        a11y={{
          enabled: true,
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
        }}
        onSwiper={handleSwiper}
        onProgress={handleProgress}
        onSlideChange={(swiper) => {
          // Announce slide change to screen readers
          const message = `Slide ${swiper.activeIndex + 1} of ${swiper.slides.length}`;
          const announcement = document.getElementById('carousel-live-region');
          if (announcement) {
            announcement.textContent = message;
          }
        }}
        className="c-carousel__swiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={item.id} className="c-carousel__slide">
            <div className="c-carousel__item">
              <div className="c-carousel__image-container">
                <img 
                  src={item.image} 
                  alt={item.alt}
                  className="c-carousel__image"
                  loading={index < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="c-carousel__overlay">
                  {showPrices && item.price && (
                    <div className="c-carousel__price" aria-label={`Price: ${item.price} лева`}>
                      {item.price} лв
                    </div>
                  )}
                  {item.title && (
                    <h3 className="c-carousel__title">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="c-carousel__description">{item.description}</p>
                  )}
                  {item.details && (
                    <p className="c-carousel__details">{item.details}</p>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <button 
        type="button"
        className="c-carousel__button c-carousel__button--prev"
        aria-label="Previous slide"
      >
        <svg 
          className="c-carousel__icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button 
        type="button"
        className="c-carousel__button c-carousel__button--next"
        aria-label="Next slide"
      >
        <svg 
          className="c-carousel__icon" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="c-carousel__pagination" role="tablist" aria-label="Carousel pagination"></div>

      {/* Progress Bar (Optional) */}
      <div className="c-carousel__progress-track" aria-hidden="true">
        <div 
          ref={progressRef}
          className="c-carousel__progress-fill"
        ></div>
      </div>

      {/* Live Region for Screen Readers */}
      <div 
        id="carousel-live-region"
        className="visually-hidden" 
        role="status" 
        aria-live="polite" 
        aria-atomic="true"
      ></div>
    </div>
  );
};

export default Carousel;
