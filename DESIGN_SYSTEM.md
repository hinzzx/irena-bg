# Irena Design System

## Overview
This design system ensures visual consistency across the Irena jewelry website. It emphasizes boho luxurious minimalism and premium quality through sharp, clean design patterns, sophisticated typography, and refined interactions.

## Design Philosophy
- **Boho Luxurious Minimalism**: Clean, sophisticated interfaces with sharp edges that exude professionalism
- **Premium Quality**: High-end feel through refined details and smooth, sequential interactions
- **Sharp Precision**: Crisp, angular design elements that convey luxury and attention to detail
- **Integrated Content**: Seamless integration of content with imagery for cohesive presentation
- **Consistency**: Unified visual language across all components

---

## Color Palette

### Primary Colors
```css
--color-primary: rgba(44, 24, 16, 1);           /* Deep Brown - Primary text & accents */
--color-primary-light: rgba(44, 24, 16, 0.8);   /* Lighter brown for secondary text */
--color-primary-soft: rgba(44, 24, 16, 0.6);    /* Soft brown for subtle elements */
```

### Secondary Colors
```css
--color-secondary: rgba(107, 91, 84, 1);        /* Warm gray for body text */
--color-secondary-light: rgba(139, 123, 116, 1); /* Light gray for details */
--color-secondary-soft: rgba(139, 123, 116, 0.7); /* Very light gray for hints */
```

### Overlay Colors
```css
--overlay-primary: rgba(0, 0, 0, 0.4);          /* Primary content overlay */
--overlay-secondary: rgba(0, 0, 0, 0.6);        /* Secondary content overlay */
--overlay-hover: rgba(0, 0, 0, 0.7);            /* Overlay hover state */
--overlay-subtle: rgba(0, 0, 0, 0.2);           /* Subtle overlay for content */
```

### Surface Colors
```css
--surface-primary: rgba(255, 255, 255, 1);      /* Clean white surfaces */
--surface-secondary: rgba(248, 248, 248, 1);    /* Subtle gray surfaces */
--surface-elevated: rgba(255, 255, 255, 1);     /* Elevated surfaces */
```

### Background Colors
```css
--bg-gradient-1: linear-gradient(135deg, var(--offWhite) 0%, var(--cream) 50%, var(--softPink) 100%);
--bg-gradient-2: linear-gradient(135deg, var(--cream) 0%, var(--champagne) 100%);
```

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-cursive: 'Tangerine', cursive;
```

### Font Sizes & Weights
```css
/* Headings */
--text-h1: 2.5rem;     /* 40px */
--text-h2: 2rem;       /* 32px */
--text-h3: 1.5rem;     /* 24px */
--text-h4: 1.25rem;    /* 20px */

/* Body Text */
--text-body: 1rem;     /* 16px */
--text-body-sm: 0.9rem; /* 14px */
--text-caption: 0.85rem; /* 13px */

/* Weights */
--weight-regular: 400;
--weight-medium: 500;
--weight-semibold: 600;
--weight-bold: 700;
```

---

## Border Radius

### Sharp Minimalist System
```css
--radius-none: 0px;        /* Sharp edges - primary choice */
--radius-subtle: 2px;      /* Barely visible softening */
--radius-minimal: 4px;     /* Minimal softening for comfort */
--radius-small: 6px;       /* Small elements only when needed */
--radius-medium: 8px;      /* Medium elements - use sparingly */
--radius-round: 50%;       /* Only for circular elements like dots */
```

### Usage Guidelines
- **Images**: Use `--radius-none` (0px) for sharp, professional look
- **Cards**: Use `--radius-none` (0px) for clean, luxurious feel
- **Buttons**: Use `--radius-subtle` (2px) for minimal softening
- **Price Tags**: Use `--radius-minimal` (4px) for subtle elegance
- **Navigation Dots**: Use `--radius-round` (50%) for perfect circles
- **Content Overlays**: Use `--radius-none` (0px) for seamless integration

---

## Spacing System

### Base Unit: 8px
```css
--space-xs: 0.5rem;    /* 8px */
--space-sm: 0.75rem;   /* 12px */
--space-md: 1rem;      /* 16px */
--space-lg: 1.5rem;    /* 24px */
--space-xl: 2rem;      /* 32px */
--space-2xl: 2.5rem;   /* 40px */
--space-3xl: 3rem;     /* 48px */
--space-4xl: 4rem;     /* 64px */
```

---

## Surface & Overlay System

### Clean Surface Properties
```css
.surface-primary {
  background: var(--surface-primary);
  border: none;
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.04);
}

.surface-elevated {
  background: var(--surface-elevated);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.06);
}
```

### Content Overlay System
```css
.overlay-content {
  background: linear-gradient(
    to top,
    var(--overlay-secondary) 0%,
    var(--overlay-primary) 50%,
    transparent 100%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.overlay-hover {
  background: linear-gradient(
    to top,
    var(--overlay-hover) 0%,
    var(--overlay-secondary) 60%,
    transparent 100%
  );
}
```

---

## Animation System

### Timing Functions
```css
--ease-professional: cubic-bezier(0.4, 0, 0.2, 1);    /* Professional, precise */
--ease-elegant: cubic-bezier(0.25, 0.1, 0.25, 1);     /* Elegant, refined */
--ease-subtle: cubic-bezier(0.4, 0, 0.6, 1);          /* Subtle, smooth */
```

### Duration
```css
--duration-instant: 0.15s;   /* Instant feedback */
--duration-quick: 0.25s;     /* Quick interactions */
--duration-smooth: 0.4s;     /* Smooth transitions */
--duration-elegant: 0.6s;    /* Elegant, luxurious */
--duration-sequential: 0.8s; /* Sequential animations */
```

### Sequential Animation System
```css
.transition-sequential {
  transition: all var(--duration-elegant) var(--ease-elegant);
}

.transition-staggered {
  transition: all var(--duration-smooth) var(--ease-professional);
}

.transition-overlay {
  transition: all var(--duration-quick) var(--ease-subtle);
}
```

---

## Component Guidelines

### Integrated Image Cards
```css
.image-card {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: var(--radius-none);
  background: var(--surface-primary);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 1px 4px rgba(0, 0, 0, 0.04);
  transition: all var(--duration-elegant) var(--ease-elegant);
}

.image-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.08);
}

.image-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-sequential) var(--ease-professional);
}

.image-card:hover img {
  transform: scale(1.05);
}
```

### Content Overlays
```css
.content-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--space-lg);
  background: linear-gradient(
    to top,
    var(--overlay-secondary) 0%,
    var(--overlay-primary) 50%,
    transparent 100%
  );
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  color: white;
  transform: translateY(100%);
  transition: transform var(--duration-elegant) var(--ease-elegant);
}

.image-card:hover .content-overlay {
  transform: translateY(0);
}

.content-overlay .price {
  font-family: var(--font-cursive);
  font-size: 1.2rem;
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-xs);
}

.content-overlay .title {
  font-size: 1rem;
  font-weight: var(--weight-medium);
  margin-bottom: var(--space-xs);
}

.content-overlay .description {
  font-size: 0.85rem;
  opacity: 0.9;
}
```

### Buttons
```css
.button-minimal {
  background: var(--surface-primary);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: var(--radius-subtle);
  padding: var(--space-sm) var(--space-lg);
  color: var(--color-primary);
  font-weight: var(--weight-medium);
  transition: all var(--duration-smooth) var(--ease-professional);
  cursor: pointer;
}

.button-minimal:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

---

## Layout Guidelines

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1400px;
```

### Grid System
- **Desktop**: 3-4 columns for product grids
- **Tablet**: 2 columns
- **Mobile**: 1 column
- **Gap**: Use `--space-xl` (32px) for grid gaps

---

## Accessibility

### Focus States
```css
.focusable:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for body text
- Ensure minimum 3:1 contrast ratio for large text
- Test all glass elements for readability

---

## Implementation Checklist

### ✅ Do's
- Use sharp edges (0px radius) as the primary choice for professional look
- Integrate content with imagery using subtle overlays
- Maintain square aspect ratios for images
- Use cursive font only for prices and special accents
- Implement sequential, staggered animations
- Follow the spacing system religiously
- Use minimal, barely visible blur effects (2px max)

### ❌ Don'ts
- Use excessive rounded corners that look unprofessional
- Separate image and content into distinct sections
- Apply heavy glassmorphism effects
- Use simultaneous animations that feel chaotic
- Ignore hover states on interactive elements
- Break the established color palette
- Use more than 4px border radius except for circular elements

---

## Version History
- **v1.0** (2024-09-29): Initial design system creation
- **v2.0** (2024-09-29): Complete redesign to boho luxurious minimalism with sharp edges and integrated content overlays
