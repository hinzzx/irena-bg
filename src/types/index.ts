export interface Product {
  id: string;
  name: string;
  details: string;
  price: number;
  image: string;
  alt: string;
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface SiteConfig {
  navigation: NavigationItem[];
  products: Product[];
  collections: Collection[];
  testimonials: Testimonial[];
}