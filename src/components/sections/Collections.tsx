import React from 'react';
import type { Collection } from '../../types';
import Carousel, { type CarouselItem } from '../common/Carousel';

interface CollectionsProps {
  collections: Collection[];
}

const Collections: React.FC<CollectionsProps> = ({ collections }) => {
  // Transform collections to carousel items
  const carouselItems: CarouselItem[] = collections.map((collection) => ({
    id: collection.id,
    image: collection.image,
    alt: collection.alt,
    title: collection.title,
    description: collection.description,
  }));

  return (
    <section id="collections" className="collections" aria-labelledby="collections-title">
      <div className="container">
        <h2 id="collections-title" className="collections__title reveal">Колекции</h2>
        <div className="reveal">
          <Carousel 
            items={carouselItems}
            showPrices={false}
            autoPlay={true}
            autoPlayInterval={5000}
            itemsPerView={1}
            className="collections-carousel"
          />
        </div>
      </div>
    </section>
  );
};

export default Collections;