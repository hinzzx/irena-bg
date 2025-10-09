import type { Product, Collection, Testimonial, NavigationItem } from '../types';
import dropletNeckImage from '../assetsimages/droplet-neck-on-model.jpg';
import earringsImage from '../assetsimages/earrings-on-model.jpg';
import earringNecklaceSetImage from '../assetsimages/earring-and-necklase-on-model.jpg';

export const navigation: NavigationItem[] = [
  { id: 'about', label: 'За нас', href: '#about' },
  { id: 'collections', label: 'Колекции', href: '#collections' },
  { id: 'bestsellers', label: 'Магазин', href: '#bestsellers' },
  { id: 'contact', label: 'Контакт', href: '#contact' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Пръстен Лунна Перла',
    details: '14k позлатено злато • естествена перла',
    price: 256,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
    alt: 'Пръстен Лунна Перла'
  },
  {
    id: '2',
    name: 'Небесна Верижка',
    details: '14k позлатено злато • деликатна верига',
    price: 312,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center',
    alt: 'Небесна Верижка'
  },
  {
    id: '3',
    name: 'Обеци Шепот',
    details: '14k позлатено злато • ръчно кована текстура',
    price: 196,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center',
    alt: 'Обеци Шепот'
  },
  {
    id: '4',
    name: 'Медальон Розов Кварц',
    details: '14k позлатено злато • естествен розов кварц',
    price: 284,
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center',
    alt: 'Медальон Розов Кварц'
  },
  {
    id: '5',
    name: 'Комплект Пръстени',
    details: '14k позлатено злато • комплект от три',
    price: 360,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center',
    alt: 'Комплект Пръстени'
  },
  {
    id: '6',
    name: 'Обеци Лунен Камък',
    details: '14k позлатено злато • дъгов лунен камък',
    price: 328,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center',
    alt: 'Обеци Лунен Камък'
  }
];

export const collections: Collection[] = [
  {
    id: 'necklaces',
    title: 'Колиета',
    description: 'Нежни шепоти върху твоята кожа',
    image: dropletNeckImage,
    alt: 'Деликатно златно колие с капчица върху манекен'
  },
  {
    id: 'earrings',
    title: 'Обеци',
    description: 'Танцуваща светлина, която обгражда твоята грация',
    image: earringsImage,
    alt: 'Красиви обеци с естествени цветя в смола върху манекен'
  },
  {
    id: 'sets',
    title: 'Комплекти',
    description: 'Хармония между обеци и колиета',
    image: earringNecklaceSetImage,
    alt: 'Комплект обеци и колие с естествени цветя върху манекен'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    text: 'Всяко творение се усеща като създадено специално за мен. Качеството е невероятно и получавам комплименти всеки път, когато ги нося.',
    author: 'Сара М.'
  },
  {
    id: '2',
    text: 'Бижутата на Irena станаха част от ежедневния ми ритуал. Тези творения ме карат да се чувствам по-истинска.',
    author: 'Мая К.'
  },
  {
    id: '3',
    text: 'Майсторството е красиво, а опаковката ме накара да се почувствам като получавам любовно писмо. Чиста магия.',
    author: 'Елена Р.'
  }
];