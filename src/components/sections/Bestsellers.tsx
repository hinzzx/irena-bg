import React from 'react';
import type { Product } from '../../types';
import Carousel, { type CarouselItem } from '../common/Carousel';

interface BestsellersProps {
  products: Product[];
}

const Bestsellers: React.FC<BestsellersProps> = ({ products }) => {
  // Transform products to carousel items
  const carouselItems: CarouselItem[] = products.map((product) => ({
    id: product.id,
    image: product.image,
    alt: product.alt,
    title: product.name,
    details: product.details,
    price: product.price,
  }));

  return (
    <section id="bestsellers" className="bestsellers" aria-labelledby="bestsellers-title">
      <div className="container">
        <h2 id="bestsellers-title" className="bestsellers__title reveal">Най-продавани</h2>
        <div className="reveal">
          <Carousel 
            items={carouselItems}
            showPrices={true}
            autoPlay={true}
            autoPlayInterval={4500}
            itemsPerView={1}
            className="bestsellers-carousel"
          />
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;