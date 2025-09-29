You are a senior front-end designer/developer. Generate a complete, single-file Markdown deliverable that contains a minimal, production-ready static website for a small business selling handmade feminine jewelry.

PROJECT OVERVIEW
- Brand name: "Irena"
- Brand subline: Create 5 cute, emotional options (one line each), then pick the best fit for the mood and use it across the site. Show all 5 in a short comment at the top of the Markdown and clearly indicate the chosen one.
- Goal: Boho luxury, feminine, elegant — focused on selling jewelry while conveying an intimate lifestyle/emotional connection.
- Output language for UI text: English (simple, warm, and brand-appropriate).
- Quotes: Use normal quotes ' and " everywhere.

STYLE & ART DIRECTION
- Theme/Mood: Warm, minimal, airy, natural; evokes aura, femininity, empowerment; luxury without clutter; lots of whitespace; subtle decorative details (flowers, petite gold icons).
- Color Palette (declare CSS custom properties):
  --cream: #FAF7F2
  --offWhite: #FFFDF8
  --terracotta: #D08C60
  --mutedTerracotta: #E8C5B8
  --beige: #E8D8C3
  --lightGold: #C8A96A
  --ink: #2E2A27
  --stone: #C8C2B6
- Palette usage guidance:
  - Background alternates between off-white and muted terracotta sections for soft contrast.
  - Text primarily ink; gold reserved for accents (icons, small separators, button borders).
- Typography:
  - Elegant serif for headings (luxury vibe).
  - Clean sans-serif for body (modern, readable).
  - Large, airy line-height and generous letter-spacing for a 'high-end magazine' feel.
  - Include web-safe fallbacks and load via Google Fonts.
  - Example pairing (feel free to substitute equivalents that fit the brief):
    - Headings: 'Cormorant Garamond', serif
    - Body: 'Inter', system-ui, sans-serif
- Iconography: Inline lightweight SVG flourishes (gold stroke/fill), e.g., a tiny flower/star divider.

UX, IA & LAYOUT
- Single-page site with smooth in-page navigation and a sticky, minimal header.
- Sections (in order):
  1) Hero: Full-bleed lifestyle image, brand name + chosen subline, primary CTA "Shop Best Sellers".
  2) About / Product Highlight: Split layout; left text column about the brand’s ethos and craftsmanship; right column shows a portrait/lifestyle image or product close-up.
  3) Collections: Three vertical cards (e.g., "Rings", "Necklaces", "Earrings") with image, overlay title, and subtle hover reveal.
  4) Best Sellers: Responsive grid (at least 6 products). Each card: image, product name, short line (material/feel), and price. Hover = gentle lift + shadow + image scale.
  5) Testimonials: 3 short italicized quotes for social proof (warm tone).
  6) Newsletter: Minimal email capture with one-sentence value prop (e.g., early access, limited drops).
  7) Footer: Minimal — nav links, social icons, and tiny gold divider.
- Navigation anchors and smooth scroll between sections.

IMAGERY & CONTENT
- Lifestyle-oriented photography direction: natural light, warm skin tones, neutral backgrounds (sand, stone, linen fabric), close-ups of textures (chains, rings, fabrics). Use placeholder image URLs (e.g., Unsplash) with descriptive alt text. Clearly label where to swap images later.
- Provide 6 sample "Best Sellers" with realistic, brand-aligned names, short 1-line descriptors (e.g., '14k gold vermeil • freshwater pearl'), and prices (e.g., $78–$180). These are placeholders, not real products.

INTERACTIONS & ANIMATIONS
- Buttons: Minimal rectangular, muted background, subtle gold border on hover; focus-visible styles for accessibility.
- Motion: Use subtle fade-up on scroll (IntersectionObserver) and soft hover effects (transform + transition). No heavy libraries; use vanilla JS + CSS only.
- Performance: Avoid parallax and large JS; optimize for smoothness.
- Accessibility: Semantic HTML, proper landmarks, alt text, labels, adequate color contrast, focus states, and reduced-motion respect via prefers-reduced-motion.

TECHNICAL REQUIREMENTS
- Deliverable format: A SINGLE Markdown document that includes:
  - A top-level file tree preview.
  - Three fenced code blocks for:
    1) index.html
    2) styles.css
    3) script.js
  - Optional 'assets/' list with suggested filenames and credit notes (no actual files).
- Stack: Static HTML + CSS + vanilla JS (no frameworks).
- HTML:
  - Semantic structure (header, main, section, footer), ARIA where helpful.
  - SEO basics: unique title, meta description, Open Graph tags with placeholder image, canonical link.
  - Favicons and manifest lines as TODO comments (placeholders).
- CSS:
  - Use CSS variables for palette, spacing, font sizes, radii, shadows.
  - Implement a responsive layout (mobile-first), container max-width, generous section padding.
  - Create utility classes where reasonable (e.g., .container, .grid, .btn, .visually-hidden).
- JS:
  - IntersectionObserver for reveal-on-scroll with a 'reveal' class pattern.
  - Smooth-scroll for same-page anchors (with reduced-motion respect).
  - Lightweight email validation for the newsletter input (no real backend).
- Responsiveness:
  - Mobile: single column, large touch targets.
  - Tablet: two-column where appropriate.
  - Desktop: spacious grid (3 or 4 columns for Best Sellers).
- Comments:
  - At the top of index.html, briefly list the 5 subline options and indicate the chosen one.
  - In code, add short comments that show where to replace images, product data, and links.

COPYWRITING GUIDELINES
- Tone: Soft, intimate, empowering, sincere.
- Keep hero headline short; subcopy should evoke aura, craft, and self-expression.
- About section: 2 short paragraphs (craft, materials, inspiration).
- Collections: One evocative line per collection.
- Testimonials: 1–2 lines each, first name + initial.
- Newsletter: 1 sentence value promise.

DELIVERABLE STRUCTURE (EXACTLY THIS SHAPE IN MARKDOWN)
- A short preface block with the 5 subline options and the chosen one.
- A 'Project Structure' code block (the tree).
- A fenced code block for 'index.html' containing the full HTML.
- A fenced code block for 'styles.css' containing the full CSS with variables and comments.
- A fenced code block for 'script.js' containing the vanilla JS.
- A short 'Assets To Replace' list enumerating image placeholders with suggested aspect ratios.

QUALITY BAR
- Keep it clean, minimal, and elegant with ample whitespace.
- No lorem ipsum — write brand-appropriate copy.
- No external JS/CSS frameworks. Keep dependencies to zero.
- Ensure consistent spacing scale, typographic rhythm, and visual hierarchy.
- Validate that all internal anchors, aria-labels, and alt texts are present and meaningful.

Now produce the single Markdown deliverable exactly as specified.
