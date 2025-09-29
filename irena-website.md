# Irena - Handmade Feminine Jewelry Website

## Brand Subline Options
<!-- 
1. "Handcrafted treasures that celebrate your inner radiance"
2. "Where feminine elegance meets timeless artistry" 
3. "Delicate pieces for your most authentic self" ← CHOSEN
4. "Crafted with love, worn with confidence"
5. "Jewelry that whispers your story"
-->

## Project Structure

```
irena-website/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── hero-lifestyle.jpg
    ├── about-portrait.jpg
    ├── collection-rings.jpg
    ├── collection-necklaces.jpg
    ├── collection-earrings.jpg
    ├── product-1.jpg
    ├── product-2.jpg
    ├── product-3.jpg
    ├── product-4.jpg
    ├── product-5.jpg
    ├── product-6.jpg
    └── favicon.ico
```

## index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Irena - Delicate Handmade Jewelry for Your Authentic Self</title>
    <meta name="description" content="Discover Irena's collection of handcrafted feminine jewelry. Boho luxury pieces that celebrate your inner radiance with 14k gold vermeil, freshwater pearls, and natural stones.">
    
    <!-- Open Graph / Social Media -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Irena - Handmade Feminine Jewelry">
    <meta property="og:description" content="Delicate pieces for your most authentic self. Handcrafted boho luxury jewelry.">
    <meta property="og:image" content="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=630&fit=crop">
    <meta property="og:url" content="https://irena-jewelry.com">
    
    <!-- TODO: Add favicon links -->
    <!-- <link rel="icon" type="image/x-icon" href="/favicon.ico"> -->
    <!-- <link rel="apple-touch-icon" href="/apple-touch-icon.png"> -->
    <!-- <link rel="manifest" href="/manifest.json"> -->
    
    <link rel="canonical" href="https://irena-jewelry.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header" role="banner">
        <nav class="nav container" aria-label="Main navigation">
            <div class="nav__brand">
                <a href="#hero" class="nav__logo">Irena</a>
            </div>
            <ul class="nav__menu" role="list">
                <li><a href="#about" class="nav__link">About</a></li>
                <li><a href="#collections" class="nav__link">Collections</a></li>
                <li><a href="#bestsellers" class="nav__link">Shop</a></li>
                <li><a href="#newsletter" class="nav__link">Connect</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="hero" class="hero" aria-labelledby="hero-title">
            <div class="hero__content">
                <div class="hero__text reveal">
                    <h1 id="hero-title" class="hero__title">Irena</h1>
                    <p class="hero__subtitle">Delicate pieces for your most authentic self</p>
                    <a href="#bestsellers" class="btn btn--primary">Shop Best Sellers</a>
                </div>
            </div>
            <!-- Replace with lifestyle image: Woman wearing delicate jewelry in natural light -->
            <div class="hero__image" style="background-image: url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=1200&fit=crop&crop=center');" role="img" aria-label="Woman wearing delicate handmade jewelry in natural light"></div>
        </section>

        <!-- About / Product Highlight -->
        <section id="about" class="about" aria-labelledby="about-title">
            <div class="container">
                <div class="about__grid">
                    <div class="about__text reveal">
                        <h2 id="about-title" class="about__title">Crafted with Intention</h2>
                        <div class="flourish" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L14.09 8.26L20 10L14.09 11.74L12 18L9.91 11.74L4 10L9.91 8.26L12 2Z" fill="currentColor"/>
                            </svg>
                        </div>
                        <p class="about__description">Each piece begins as a whispered intention, transformed through ancient techniques and modern sensibility. We work exclusively with ethically sourced materials—14k gold vermeil that catches light like morning sun, freshwater pearls that hold ocean stories, and stones chosen for their natural beauty.</p>
                        <p class="about__description">Our jewelry isn't just an accessory; it's a celebration of your journey, designed to move with you through life's tender moments and bold adventures.</p>
                    </div>
                    <div class="about__image reveal">
                        <!-- Replace with portrait or product close-up -->
                        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop&crop=center" alt="Close-up of delicate gold jewelry being crafted by hand" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- Collections -->
        <section id="collections" class="collections" aria-labelledby="collections-title">
            <div class="container">
                <h2 id="collections-title" class="collections__title reveal">Collections</h2>
                <div class="collections__grid">
                    <article class="collection-card reveal">
                        <div class="collection-card__image">
                            <!-- Replace with rings collection image -->
                            <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop&crop=center" alt="Delicate gold rings collection" loading="lazy">
                            <div class="collection-card__overlay">
                                <h3 class="collection-card__title">Rings</h3>
                                <p class="collection-card__description">Circles of intention, worn close to heart</p>
                            </div>
                        </div>
                    </article>
                    
                    <article class="collection-card reveal">
                        <div class="collection-card__image">
                            <!-- Replace with necklaces collection image -->
                            <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop&crop=center" alt="Delicate gold necklaces collection" loading="lazy">
                            <div class="collection-card__overlay">
                                <h3 class="collection-card__title">Necklaces</h3>
                                <p class="collection-card__description">Gentle whispers against your skin</p>
                            </div>
                        </div>
                    </article>
                    
                    <article class="collection-card reveal">
                        <div class="collection-card__image">
                            <!-- Replace with earrings collection image -->
                            <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop&crop=center" alt="Delicate gold earrings collection" loading="lazy">
                            <div class="collection-card__overlay">
                                <h3 class="collection-card__title">Earrings</h3>
                                <p class="collection-card__description">Dancing light that frames your grace</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Best Sellers -->
        <section id="bestsellers" class="bestsellers" aria-labelledby="bestsellers-title">
            <div class="container">
                <h2 id="bestsellers-title" class="bestsellers__title reveal">Best Sellers</h2>
                <div class="products-grid">
                    <article class="product-card reveal">
                        <!-- Replace with product image -->
                        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center" alt="Luna Pearl Ring" class="product-card__image" loading="lazy">
                        <div class="product-card__content">
                            <h3 class="product-card__name">Luna Pearl Ring</h3>
                            <p class="product-card__details">14k gold vermeil • freshwater pearl</p>
                            <span class="product-card__price">$128</span>
                        </div>
                    </article>
                    
                    <article class="product-card reveal">
                        <!-- Replace with product image -->
                        <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=center" alt="Celestial Chain Necklace" class="product-card__image" loading="lazy">
                        <div class="product-card__content">
                            <h3 class="product-card__name">Celestial Chain</h3>
                            <p class="product-card__details">14k gold vermeil • delicate cable chain</p>
                            <span class="product-card__price">$156</span>
                        </div>
                    </article>
                    
                    <article class="product-card reveal">
                        <!-- Replace with product image -->
                        <img src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&crop=center" alt="Whisper Hoops" class="product-card__image" loading="lazy">
                        <div class="product-card__content">
                            <h3 class="product-card__name">Whisper Hoops</h3>
                            <p class="product-card__details">14k gold vermeil • hand-hammered texture</p>
                            <span class="product-card__price">$98</span>
                        </div>
                    </article>
                    
                    <article class="product-card reveal">
                        <!-- Replace with product image -->
                        <img src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=400&fit=crop&crop=center" alt="Rose Quartz Pendant" class="product-card__image" loading="lazy">
                        <div class="product-card__content">
                            <h3 class="product-card__name">Rose Quartz Pendant</h3>
                            <p class="product-card__details">14k gold vermeil • natural rose quartz</p>
                            <span class="product-card__price">$142</span>
                        </div>
                    </article>
                    
                    <article class="product-card reveal">
                        <!-- Replace with product image -->
                        <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center" alt="Stacking Ring Set" class="product-card__image" loading="lazy">
                        <div class="product-card__content">
                            <h3 class="product-card__name">Stacking Ring Set</h3>
                            <p class="product-card__details">14k gold vermeil • set of three</p>
                            <span class="product-card__price">$180</span>
                        </div>
                    </article>
                    
                    <article class="product-card reveal">
                        <!-- Replace with product image -->
                        <img src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&crop=center" alt="Moonstone Drops" class="product-card__image" loading="lazy">
                        <div class="product-card__content">
                            <h3 class="product-card__name">Moonstone Drops</h3>
                            <p class="product-card__details">14k gold vermeil • rainbow moonstone</p>
                            <span class="product-card__price">$164</span>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Testimonials -->
        <section class="testimonials" aria-labelledby="testimonials-title">
            <div class="container">
                <h2 id="testimonials-title" class="testimonials__title reveal">What Our Community Says</h2>
                <div class="testimonials__grid">
                    <blockquote class="testimonial reveal">
                        <p class="testimonial__text">"Each piece feels like it was made just for me. The quality is incredible and I get compliments every time I wear them."</p>
                        <cite class="testimonial__author">— Sarah M.</cite>
                    </blockquote>
                    
                    <blockquote class="testimonial reveal">
                        <p class="testimonial__text">"Irena's jewelry has become part of my daily ritual. These pieces make me feel more like myself."</p>
                        <cite class="testimonial__author">— Maya K.</cite>
                    </blockquote>
                    
                    <blockquote class="testimonial reveal">
                        <p class="testimonial__text">"The craftsmanship is beautiful and the packaging made it feel like receiving a love letter. Pure magic."</p>
                        <cite class="testimonial__author">— Elena R.</cite>
                    </blockquote>
                </div>
            </div>
        </section>

        <!-- Newsletter -->
        <section id="newsletter" class="newsletter" aria-labelledby="newsletter-title">
            <div class="container">
                <div class="newsletter__content reveal">
                    <h2 id="newsletter-title" class="newsletter__title">Stay Connected</h2>
                    <p class="newsletter__description">Be the first to discover new collections and receive early access to limited drops.</p>
                    <form class="newsletter__form" aria-label="Newsletter signup">
                        <div class="newsletter__input-group">
                            <label for="email" class="visually-hidden">Email address</label>
                            <input type="email" id="email" name="email" placeholder="Your email address" class="newsletter__input" required>
                            <button type="submit" class="btn btn--secondary">Join Us</button>
                        </div>
                        <div class="newsletter__message" role="status" aria-live="polite"></div>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer" role="contentinfo">
        <div class="container">
            <div class="footer__content">
                <div class="flourish" aria-hidden="true">
                    <svg width="32" height="2" viewBox="0 0 32 2" fill="none">
                        <line x1="0" y1="1" x2="32" y2="1" stroke="currentColor" stroke-width="1"/>
                    </svg>
                </div>
                <nav class="footer__nav" aria-label="Footer navigation">
                    <ul class="footer__links" role="list">
                        <li><a href="#about" class="footer__link">About</a></li>
                        <li><a href="#collections" class="footer__link">Collections</a></li>
                        <li><a href="#bestsellers" class="footer__link">Shop</a></li>
                        <li><a href="#newsletter" class="footer__link">Connect</a></li>
                    </ul>
                </nav>
                <div class="footer__social">
                    <a href="#" class="footer__social-link" aria-label="Follow us on Instagram">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                            <path d="m16 11.37-4-4.37-4 4.37" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </a>
                    <a href="#" class="footer__social-link" aria-label="Follow us on Pinterest">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" stroke-width="2"/>
                        </svg>
                    </a>
                </div>
                <p class="footer__copyright">© 2024 Irena. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

## styles.css

```css
/* ==========================================================================
   CSS Custom Properties
   ========================================================================== */

:root {
  /* Color Palette */
  --cream: #FAF7F2;
  --offWhite: #FFFDF8;
  --terracotta: #D08C60;
  --mutedTerracotta: #E8C5B8;
  --beige: #E8D8C3;
  --lightGold: #C8A96A;
  --ink: #2E2A27;
  --stone: #C8C2B6;
  
  /* Typography */
  --font-heading: 'Cormorant Garamond', serif;
  --font-body: 'Inter', system-ui, sans-serif;
  
  /* Spacing Scale */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;
  --space-3xl: 6rem;
  
  /* Font Sizes */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  
  /* Layout */
  --container-max: 1200px;
  --border-radius: 0.25rem;
  --transition: all 0.3s ease;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

/* ==========================================================================
   Reset & Base Styles
   ========================================================================== */

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

body {
  margin: 0;
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.7;
  color: var(--ink);
  background-color: var(--offWhite);
  letter-spacing: 0.01em;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ==========================================================================
   Typography
   ========================================================================== */

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
  letter-spacing: 0.02em;
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

p {
  margin: 0 0 var(--space-md) 0;
}

/* ==========================================================================
   Utility Classes
   ========================================================================== */

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--space-lg);
  }
}

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.reveal {
  opacity: 0;
  transform: translateY(2rem);
  transition: var(--transition);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ==========================================================================
   Components
   ========================================================================== */

/* Buttons */
.btn {
  display: inline-block;
  padding: var(--space-sm) var(--space-lg);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  text-decoration: none;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
  background: transparent;
}

.btn--primary {
  color: var(--ink);
  background-color: var(--cream);
  border-color: var(--lightGold);
}

.btn--primary:hover,
.btn--primary:focus-visible {
  background-color: var(--lightGold);
  color: var(--offWhite);
  transform: translateY(-1px);
}

.btn--secondary {
  color: var(--ink);
  border-color: var(--stone);
}

.btn--secondary:hover,
.btn--secondary:focus-visible {
  border-color: var(--lightGold);
  background-color: var(--cream);
  transform: translateY(-1px);
}

.btn:focus-visible {
  outline: 2px solid var(--lightGold);
  outline-offset: 2px;
}

/* Flourish */
.flourish {
  color: var(--lightGold);
  text-align: center;
  margin: var(--space-md) 0;
}

/* ==========================================================================
   Header
   ========================================================================== */

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 253, 248, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(200, 194, 182, 0.2);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-md) var(--space-md);
}

.nav__logo {
  font-family: var(--font-heading);
  font-size: var(--text-2xl);
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: 0.02em;
}

.nav__menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: var(--space-lg);
}

.nav__link {
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: var(--transition);
}

.nav__link:hover,
.nav__link:focus-visible {
  color: var(--lightGold);
}

@media (max-width: 767px) {
  .nav__menu {
    gap: var(--space-md);
  }
  
  .nav__link {
    font-size: var(--text-xs);
  }
}

/* ==========================================================================
   Hero Section
   ========================================================================== */

.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
}

.hero__image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(250, 247, 242, 0.4) 0%,
    rgba(232, 197, 184, 0.2) 100%
  );
}

.hero__content {
  text-align: center;
  z-index: 1;
  max-width: 600px;
  padding: var(--space-lg);
}

.hero__title {
  font-size: clamp(var(--text-4xl), 8vw, var(--text-5xl));
  font-weight: 300;
  margin-bottom: var(--space-sm);
  color: var(--ink);
}

.hero__subtitle {
  font-size: var(--text-lg);
  font-weight: 300;
  margin-bottom: var(--space-xl);
  color: var(--ink);
  letter-spacing: 0.02em;
}

/* ==========================================================================
   About Section
   ========================================================================== */

.about {
  padding: var(--space-3xl) 0;
  background-color: var(--mutedTerracotta);
}

.about__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

@media (min-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr 1fr;
  }
}

.about__title {
  margin-bottom: var(--space-md);
  color: var(--ink);
}

.about__description {
  font-size: var(--text-lg);
  line-height: 1.8;
  color: var(--ink);
  margin-bottom: var(--space-lg);
}

.about__image img {
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: var(--border-radius);
}

/* ==========================================================================
   Collections Section
   ========================================================================== */

.collections {
  padding: var(--space-3xl) 0;
  background-color: var(--offWhite);
}

.collections__title {
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: var(--ink);
}

.collections__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .collections__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.collection-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.collection-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.collection-card__image {
  position: relative;
  overflow: hidden;
}

.collection-card__image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: var(--transition);
}

.collection-card:hover .collection-card__image img {
  transform: scale(1.05);
}

.collection-card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    transparent,
    rgba(46, 42, 39, 0.8)
  );
  color: var(--offWhite);
  padding: var(--space-xl) var(--space-lg) var(--space-lg);
  text-align: center;
}

.collection-card__title {
  font-size: var(--text-2xl);
  margin-bottom: var(--space-xs);
  color: var(--offWhite);
}

.collection-card__description {
  font-size: var(--text-sm);
  font-style: italic;
  margin: 0;
  opacity: 0.9;
}

/* ==========================================================================
   Best Sellers Section
   ========================================================================== */

.bestsellers {
  padding: var(--space-3xl) 0;
  background-color: var(--cream);
}

.bestsellers__title {
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: var(--ink);
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.product-card {
  background-color: var(--offWhite);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: var(--transition);
  cursor: pointer;
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-card__image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: var(--transition);
}

.product-card:hover .product-card__image {
  transform: scale(1.05);
}

.product-card__content {
  padding: var(--space-lg);
  text-align: center;
}

.product-card__name {
  font-size: var(--text-xl);
  margin-bottom: var(--space-xs);
  color: var(--ink);
}

.product-card__details {
  font-size: var(--text-sm);
  color: var(--stone);
  margin-bottom: var(--space-md);
  font-style: italic;
}

.product-card__price {
  font-size: var(--text-lg);
  font-weight: 500;
  color: var(--terracotta);
}

/* ==========================================================================
   Testimonials Section
   ========================================================================== */

.testimonials {
  padding: var(--space-3xl) 0;
  background-color: var(--offWhite);
}

.testimonials__title {
  text-align: center;
  margin-bottom: var(--space-2xl);
  color: var(--ink);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
}

@media (min-width: 768px) {
  .testimonials__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.testimonial {
  text-align: center;
  padding: var(--space-lg);
  margin: 0;
}

.testimonial__text {
  font-size: var(--text-lg);
  font-style: italic;
  line-height: 1.6;
  color: var(--ink);
  margin-bottom: var(--space-md);
}

.testimonial__author {
  font-size: var(--text-sm);
  color: var(--stone);
  font-style: normal;
  font-weight: 500;
}

/* ==========================================================================
   Newsletter Section
   ========================================================================== */

.newsletter {
  padding: var(--space-3xl) 0;
  background-color: var(--mutedTerracotta);
}

.newsletter__content {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.newsletter__title {
  margin-bottom: var(--space-md);
  color: var(--ink);
}

.newsletter__description {
  font-size: var(--text-lg);
  margin-bottom: var(--space-xl);
  color: var(--ink);
}

.newsletter__form {
  margin-bottom: var(--space-md);
}

.newsletter__input-group {
  display: flex;
  gap: var(--space-sm);
  max-width: 400px;
  margin: 0 auto;
}

@media (max-width: 640px) {
  .newsletter__input-group {
    flex-direction: column;
  }
}

.newsletter__input {
  flex: 1;
  padding: var(--space-sm) var(--space-md);
  font-size: var(--text-base);
  border: 1px solid var(--stone);
  border-radius: var(--border-radius);
  background-color: var(--offWhite);
  color: var(--ink);
  transition: var(--transition);
}

.newsletter__input:focus {
  outline: none;
  border-color: var(--lightGold);
  box-shadow: 0 0 0 2px rgba(200, 169, 106, 0.2);
}

.newsletter__input::placeholder {
  color: var(--stone);
}

.newsletter__message {
  margin-top: var(--space-md);
  font-size: var(--text-sm);
  min-height: 1.5rem;
}

.newsletter__message.success {
  color: var(--lightGold);
}

.newsletter__message.error {
  color: var(--terracotta);
}

/* ==========================================================================
   Footer
   ========================================================================== */

.footer {
  padding: var(--space-2xl) 0;
  background-color: var(--ink);
  color: var(--cream);
}

.footer__content {
  text-align: center;
}

.footer__nav {
  margin: var(--space-lg) 0;
}

.footer__links {
  display: flex;
  justify-content: center;
  gap: var(--space-lg);
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.footer__link {
  font-size: var(--text-sm);
  color: var(--cream);
  text-decoration: none;
  transition: var(--transition);
}

.footer__link:hover,
.footer__link:focus-visible {
  color: var(--lightGold);
}

.footer__social {
  display: flex;
  justify-content: center;
  gap: var(--space-md);
  margin: var(--space-lg) 0;
}

.footer__social-link {
  color: var(--cream);
  transition: var(--transition);
}

.footer__social-link:hover,
.footer__social-link:focus-visible {
  color: var(--lightGold);
}

.footer__copyright {
  font-size: var(--text-xs);
  color: var(--stone);
  margin: 0;
}

/* ==========================================================================
   Responsive Design
   ========================================================================== */

@media (max-width: 640px) {
  :root {
    --text-4xl: 2rem;
    --text-5xl: 2.5rem;
    --space-3xl: 4rem;
  }
  
  .hero {
    min-height: 500px;
  }
  
  .hero__content {
    padding: var(--space-md);
  }
  
  .about__grid,
  .collections__grid,
  .testimonials__grid {
    gap: var(--space-lg);
  }
  
  .products-grid {
    gap: var(--space-lg);
  }
  
  .collection-card__image img,
  .product-card__image {
    height: 250px;
  }
}

/* ==========================================================================
   Print Styles
   ========================================================================== */

@media print {
  .header,
  .newsletter,
  .footer__social {
    display: none;
  }
  
  body {
    font-size: 12pt;
    line-height: 1.4;
  }
  
  h1, h2, h3 {
    page-break-after: avoid;
  }
  
  .product-card,
  .collection-card,
  .testimonial {
    page-break-inside: avoid;
  }
}
```

## script.js

```javascript
// ==========================================================================
// Irena Jewelry Website - JavaScript
// ==========================================================================

(function() {
  'use strict';

  // ==========================================================================
  // Utility Functions
  // ==========================================================================

  /**
   * Debounce function to limit the rate at which a function can fire
   */
  function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
      const context = this;
      const args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /**
   * Check if user prefers reduced motion
   */
  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  // ==========================================================================
  // Smooth Scrolling for Navigation Links
  // ==========================================================================

  function initSmoothScroll() {
    // Only apply smooth scrolling if user doesn't prefer reduced motion
    if (prefersReducedMotion()) {
      return;
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          const headerHeight = document.querySelector('.header').offsetHeight;
          const targetPosition = targetSection.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==========================================================================
  // Scroll Reveal Animation
  // ==========================================================================

  function initScrollReveal() {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion()) {
      // Make all reveal elements visible immediately
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(element => {
        element.classList.add('visible');
      });
      return;
    }

    const revealElements = document.querySelectorAll('.reveal');
    
    // Intersection Observer options
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    // Intersection Observer callback
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    // Create and start observing
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    revealElements.forEach(element => {
      observer.observe(element);
    });
  }

  // ==========================================================================
  // Newsletter Form Handling
  // ==========================================================================

  function initNewsletterForm() {
    const form = document.querySelector('.newsletter__form');
    const emailInput = document.querySelector('.newsletter__input');
    const messageDiv = document.querySelector('.newsletter__message');
    
    if (!form || !emailInput || !messageDiv) {
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Show message function
    function showMessage(text, type = 'success') {
      messageDiv.textContent = text;
      messageDiv.className = `newsletter__message ${type}`;
      
      // Clear message after 5 seconds
      setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = 'newsletter__message';
      }, 5000);
    }
    
    // Form submit handler
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = emailInput.value.trim();
      
      // Validate email
      if (!email) {
        showMessage('Please enter your email address.', 'error');
        emailInput.focus();
        return;
      }
      
      if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }
      
      // Simulate successful subscription
      // In a real implementation, this would send data to a backend service
      showMessage('Thank you for joining our community! Welcome to Irena.', 'success');
      emailInput.value = '';
      
      // Optional: Track the subscription event for analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: 'newsletter'
        });
      }
    });
    
    // Real-time email validation feedback
    emailInput.addEventListener('input', debounce(function() {
      const email = this.value.trim();
      
      if (email && !emailRegex.test(email)) {
        this.style.borderColor = 'var(--terracotta)';
      } else {
        this.style.borderColor = '';
      }
    }, 300));
  }

  // ==========================================================================
  // Product Card Interactions
  // ==========================================================================

  function initProductInteractions() {
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
      // Add click handler for future e-commerce integration
      card.addEventListener('click', function() {
        const productName = this.querySelector('.product-card__name')?.textContent;
        
        // Log interaction for analytics
        if (typeof gtag !== 'undefined' && productName) {
          gtag('event', 'product_click', {
            event_category: 'ecommerce',
            event_label: productName
          });
        }
        
        // Future: Open product detail modal or navigate to product page
        console.log(`Product clicked: ${productName}`);
      });
      
      // Add keyboard navigation support
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View details for ${card.querySelector('.product-card__name')?.textContent || 'product'}`);
      
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  // ==========================================================================
  // Collection Card Interactions
  // ==========================================================================

  function initCollectionInteractions() {
    const collectionCards = document.querySelectorAll('.collection-card');
    
    collectionCards.forEach(card => {
      card.addEventListener('click', function() {
        const collectionName = this.querySelector('.collection-card__title')?.textContent;
        
        // Log interaction for analytics
        if (typeof gtag !== 'undefined' && collectionName) {
          gtag('event', 'collection_click', {
            event_category: 'navigation',
            event_label: collectionName
          });
        }
        
        // Future: Filter products by collection or navigate to collection page
        console.log(`Collection clicked: ${collectionName}`);
      });
      
      // Add keyboard navigation support
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Browse ${card.querySelector('.collection-card__title')?.textContent || 'collection'}`);
      
      card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.click();
        }
      });
    });
  }

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================

  function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    if (!header) return;
    
    const handleScroll = debounce(function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Add/remove scrolled class for styling
      if (scrollTop > 100) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
      
      lastScrollTop = scrollTop;
    }, 10);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // ==========================================================================
  // Lazy Loading Images
  // ==========================================================================

  function initLazyLoading() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            
            // For images with data-src attribute (if implemented)
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      // Observe all images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        imageObserver.observe(img);
      });
    }
  }

  // ==========================================================================
  // Accessibility Enhancements
  // ==========================================================================

  function initAccessibility() {
    // Skip link for keyboard navigation
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link visually-hidden';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--ink);
      color: var(--offWhite);
      padding: 8px;
      text-decoration: none;
      z-index: 10000;
      border-radius: 4px;
    `;
    
    // Show skip link on focus
    skipLink.addEventListener('focus', function() {
      this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
      this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark if it doesn't exist
    const main = document.querySelector('main');
    if (main && !main.id) {
      main.id = 'main';
    }
  }

  // ==========================================================================
  // Error Handling
  // ==========================================================================

  function initErrorHandling() {
    // Global error handler
    window.addEventListener('error', function(e) {
      console.error('JavaScript error:', e.error);
      
      // Optional: Send error to analytics or error reporting service
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: e.error?.message || 'Unknown error',
          fatal: false
        });
      }
    });
    
    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', function(e) {
      console.error('Unhandled promise rejection:', e.reason);
      
      // Optional: Send error to analytics or error reporting service
      if (typeof gtag !== 'undefined') {
        gtag('event', 'exception', {
          description: e.reason?.message || 'Unhandled promise rejection',
          fatal: false
        });
      }
    });
  }

  // ==========================================================================
  // Initialization
  // ==========================================================================

  function init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    try {
      // Initialize all features
      initErrorHandling();
      initAccessibility();
      initSmoothScroll();
      initScrollReveal();
      initNewsletterForm();
      initProductInteractions();
      initCollectionInteractions();
      initHeaderScroll();
      initLazyLoading();
      
      console.log('Irena website initialized successfully');
      
    } catch (error) {
      console.error('Error initializing website:', error);
    }
  }

  // Start initialization
  init();

})();
```

## Assets To Replace

Replace the following placeholder images with high-quality photographs:

### Hero Section
- **hero-lifestyle.jpg** (1600x1200px) - Lifestyle shot of a woman wearing delicate jewelry in natural light, warm skin tones, neutral background

### About Section  
- **about-portrait.jpg** (600x800px) - Portrait of artisan crafting jewelry or close-up of hands working with delicate pieces

### Collections
- **collection-rings.jpg** (400x500px) - Styled flat lay of ring collection on natural textures
- **collection-necklaces.jpg** (400x500px) - Elegant necklace display on linen or stone background  
- **collection-earrings.jpg** (400x500px) - Earrings arranged on natural materials with soft lighting

### Products (400x400px each)
- **product-1.jpg** - Luna Pearl Ring on model's hand
- **product-2.jpg** - Celestial Chain Necklace lifestyle shot
- **product-3.jpg** - Whisper Hoops on model
- **product-4.jpg** - Rose Quartz Pendant styled shot
- **product-5.jpg** - Stacking Ring Set on natural background
- **product-6.jpg** - Moonstone Drops earrings lifestyle shot

### Technical Assets
- **favicon.ico** - Brand icon in multiple sizes (16x16, 32x32, 48x48px)

*All images should maintain the warm, minimal aesthetic with natural lighting and neutral backgrounds. Consider using a consistent color palette that complements the website's cream, terracotta, and gold tones.*
