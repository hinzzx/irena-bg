import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  autoPlay = true,
  autoPlayInterval = 4000,
  itemsPerView = 1,
  className = ''
}) => {
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const [startTranslateX, setStartTranslateX] = useState(0);
  const [totalDragDistance, setTotalDragDistance] = useState(0);
  const [responsiveItemsPerView, setResponsiveItemsPerView] = useState(itemsPerView);
  const trackRef = useRef<HTMLDivElement>(null);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setResponsiveItemsPerView(3); // Desktop: 3 items
      } else if (window.innerWidth >= 768) {
        setResponsiveItemsPerView(2); // Tablet: 2 items
      } else {
        setResponsiveItemsPerView(1); // Mobile: 1 item
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Calculate boundaries for sliding
  const getMaxTranslateX = useCallback(() => {
    if (!trackRef.current) return 0;
    const trackWidth = trackRef.current.offsetWidth;
    const totalWidth = (items.length * trackWidth) / responsiveItemsPerView;
    return Math.max(0, totalWidth - trackWidth);
  }, [items.length, responsiveItemsPerView]);

  // Constrain translateX within boundaries
  const constrainTranslateX = useCallback((value: number) => {
    const maxTranslate = getMaxTranslateX();
    return Math.max(0, Math.min(maxTranslate, value));
  }, [getMaxTranslateX]);

  // Auto-slide for autoplay
  const autoSlide = useCallback(() => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.offsetWidth;
    const slideWidth = trackWidth / responsiveItemsPerView;
    const maxTranslate = getMaxTranslateX();
    
    const nextTranslate = translateX + slideWidth;
    if (nextTranslate >= maxTranslate) {
      setTranslateX(0); // Reset to beginning
    } else {
      setTranslateX(nextTranslate);
    }
  }, [translateX, responsiveItemsPerView, getMaxTranslateX]);

  // Calculate current slide index based on translateX position
  const getCurrentSlideIndex = useCallback(() => {
    if (!trackRef.current) return 0;
    const trackWidth = trackRef.current.offsetWidth;
    const slideWidth = trackWidth / responsiveItemsPerView;
    return Math.round(translateX / slideWidth);
  }, [translateX, responsiveItemsPerView]);

  // Calculate total number of slides
  const getTotalSlides = useCallback(() => {
    return Math.max(1, items.length - responsiveItemsPerView + 1);
  }, [items.length, responsiveItemsPerView]);

  // Go to specific slide
  const goToSlide = useCallback((slideIndex: number) => {
    if (!trackRef.current) return;
    const trackWidth = trackRef.current.offsetWidth;
    const slideWidth = trackWidth / responsiveItemsPerView;
    const newTranslateX = constrainTranslateX(slideIndex * slideWidth);
    setTranslateX(newTranslateX);
  }, [responsiveItemsPerView, constrainTranslateX]);

  // Calculate which image should be snapped to - switch to barely visible images
  const getBestSnapIndex = useCallback(() => {
    if (!trackRef.current) return 0;
    
    const trackWidth = trackRef.current.offsetWidth;
    const itemWidth = trackWidth / responsiveItemsPerView;
    
    // Find all visible images with their visibility percentages
    const visibleImages: { index: number; visibilityPercentage: number }[] = [];
    
    for (let i = 0; i < items.length; i++) {
      const itemLeft = (i * itemWidth) - translateX;
      const itemRight = itemLeft + itemWidth;
      
      // Calculate visible area of this item
      const visibleLeft = Math.max(0, itemLeft);
      const visibleRight = Math.min(trackWidth, itemRight);
      const visibleArea = Math.max(0, visibleRight - visibleLeft);
      const visibilityPercentage = visibleArea / itemWidth;
      
      // Only consider images with any visibility
      if (visibilityPercentage > 0) {
        visibleImages.push({
          index: i,
          visibilityPercentage
        });
      }
    }
    
    if (visibleImages.length === 0) return 0;
    
    // If there's a barely visible image (any visibility), prefer it over partially visible ones
    // Sort by index to prefer the next/previous image in sequence
    visibleImages.sort((a, b) => {
      // If one image is much more visible (>50%) and another is barely visible (<50%), 
      // choose the barely visible one if it's the next/previous in sequence
      const currentCenter = translateX + (trackWidth / 2);
      const currentCenterIndex = Math.round(currentCenter / itemWidth);
      
      const aDistance = Math.abs(a.index - currentCenterIndex);
      const bDistance = Math.abs(b.index - currentCenterIndex);
      
      // If both are barely visible or both are highly visible, choose the closer one
      if ((a.visibilityPercentage < 0.5 && b.visibilityPercentage < 0.5) ||
          (a.visibilityPercentage >= 0.5 && b.visibilityPercentage >= 0.5)) {
        return aDistance - bDistance;
      }
      
      // If one is barely visible and one is highly visible, prefer the barely visible one
      // if it's the immediate next/previous
      if (a.visibilityPercentage < 0.5 && aDistance <= 1) return -1;
      if (b.visibilityPercentage < 0.5 && bDistance <= 1) return 1;
      
      // Otherwise, prefer the more visible one
      return b.visibilityPercentage - a.visibilityPercentage;
    });
    
    const bestImage = visibleImages[0];
    
    if (responsiveItemsPerView === 1) {
      // Mobile: Return the selected image index
      return Math.max(0, Math.min(bestImage.index, items.length - 1));
    } else {
      // Desktop/Tablet: Calculate best starting position to show the selected image
      const targetStartIndex = Math.max(0, bestImage.index - Math.floor(responsiveItemsPerView / 2));
      const maxStartIndex = Math.max(0, items.length - responsiveItemsPerView);
      return Math.min(targetStartIndex, maxStartIndex);
    }
  }, [translateX, responsiveItemsPerView, items.length]);

  // Smooth snap to the best position - always to a complete image
  const snapToMostVisible = useCallback(() => {
    if (!trackRef.current || isSnapping) return;
    
    const trackWidth = trackRef.current.offsetWidth;
    const itemWidth = trackWidth / responsiveItemsPerView;
    const bestIndex = getBestSnapIndex();
    
    // Calculate target position
    const targetTranslateX = bestIndex * itemWidth;
    const constrainedTranslateX = constrainTranslateX(targetTranslateX);
    
    // Always snap to ensure we never get stuck between images
    // Use a smaller threshold to prevent unnecessary snapping on tiny movements
    if (Math.abs(constrainedTranslateX - translateX) > 5) {
      setIsSnapping(true);
      setTranslateX(constrainedTranslateX);
      
      // Reset snapping state after animation completes
      setTimeout(() => {
        setIsSnapping(false);
      }, 400); // Match the CSS transition duration
    }
  }, [getBestSnapIndex, responsiveItemsPerView, constrainTranslateX, translateX, isSnapping]);

  // Real-time drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientX);
    setStartTranslateX(translateX);
    setTotalDragDistance(0);
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStart === null) return;
    
    const currentX = e.clientX;
    const deltaX = dragStart - currentX; // Reversed for natural drag direction
    const newTranslateX = constrainTranslateX(startTranslateX + deltaX);
    
    // Track total drag distance for snapping decision
    setTotalDragDistance(Math.abs(deltaX));
    setTranslateX(newTranslateX);
    e.preventDefault();
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setDragStart(null);
    
    // Only snap if user dragged more than 20px to prevent accidental snapping
    if (totalDragDistance > 20) {
      snapToMostVisible();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragStart(null);
      
      // Only snap if user dragged more than 20px
      if (totalDragDistance > 20) {
        snapToMostVisible();
      }
    }
  };

  // Real-time touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStart(e.targetTouches[0].clientX);
    setStartTranslateX(translateX);
    setTotalDragDistance(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || dragStart === null) return;
    
    const currentX = e.targetTouches[0].clientX;
    const deltaX = dragStart - currentX; // Reversed for natural drag direction
    const newTranslateX = constrainTranslateX(startTranslateX + deltaX);
    
    // Track total drag distance for snapping decision
    setTotalDragDistance(Math.abs(deltaX));
    setTranslateX(newTranslateX);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    setIsDragging(false);
    setDragStart(null);
    
    // Only snap if user dragged more than 20px to prevent accidental snapping
    if (totalDragDistance > 20) {
      snapToMostVisible();
    }
  };

  // Global mouse up handler for drag outside carousel
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragStart(null);
        
        // Only snap if user dragged more than 20px
        if (totalDragDistance > 20) {
          // Inline snapping logic to avoid dependency issues
          if (!trackRef.current || isSnapping) return;
          
          const trackWidth = trackRef.current.offsetWidth;
          const itemWidth = trackWidth / responsiveItemsPerView;
          const bestIndex = getBestSnapIndex();
          
          const targetTranslateX = bestIndex * itemWidth;
          const constrainedTranslateX = constrainTranslateX(targetTranslateX);
          
          if (Math.abs(constrainedTranslateX - translateX) > 5) {
            setIsSnapping(true);
            setTranslateX(constrainedTranslateX);
            
            setTimeout(() => {
              setIsSnapping(false);
            }, 400);
          }
        }
      }
    };

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      return () => document.removeEventListener('mouseup', handleGlobalMouseUp);
    }
  }, [isDragging, totalDragDistance, isSnapping, responsiveItemsPerView, translateX, getBestSnapIndex, constrainTranslateX]);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isDragging) return; // Pause autoplay during drag

    const interval = setInterval(autoSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, autoSlide, isDragging]);


  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__container">
        {/* Carousel Track with Real-time Drag Support */}
        <div 
          className="carousel__track"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          ref={trackRef}
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div 
            className="carousel__slides"
            style={{
              transform: `translateX(-${translateX}px)`,
              transition: isDragging ? 'none' : (isSnapping ? 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.3s ease-out'),
              width: `${(items.length * 100) / responsiveItemsPerView}%`
            }}
          >
            {items.map((item) => (
              <div key={item.id} className="carousel__item" style={{ width: `${100 / items.length}%` }}>
                <div className="carousel__item-container">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="carousel__item-image"
                    loading="lazy"
                  />
                  <div className="carousel__item-content">
                  {showPrices && item.price && (
                    <div className="carousel__item-price">
                      {item.price} лв
                    </div>
                  )}
                  {item.title && (
                    <h3 className="carousel__item-title">{item.title}</h3>
                  )}
                  {item.description && (
                    <p className="carousel__item-description">{item.description}</p>
                  )}
                  {item.details && (
                    <p className="carousel__item-details">{item.details}</p>
                  )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      {getTotalSlides() > 1 && (
        <div className="carousel__dots">
          {Array.from({ length: getTotalSlides() }).map((_, index) => (
            <button
              key={index}
              className={`carousel__dot ${getCurrentSlideIndex() === index ? 'carousel__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isDragging}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
