# Inkcap Consulting Website

Astro 5 static site for Inkcap Consulting (Katina L. Rogers). Deployed to GitHub Pages at inkcapconsulting.com.

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro    # Shared layout with header, nav, footer, skip link
├── pages/
│   ├── index.astro         # Home page with hero, services, testimonials
│   ├── about.astro         # Bio, professional experience, approach/values
│   ├── services.astro      # Institutional consulting, individual support, talks, clients
│   ├── writing.astro       # Books
│   ├── media.astro         # Press, podcasts, speaking
│   └── contact.astro       # Email and newsletter links
├── styles/
│   └── global.css          # All styles (no component CSS)
public/
└── images/                 # All images (logos, covers, headshot, mushroom)
```

## Design System

### Color Palette

```css
--color-primary: #006D6F        /* Teal - buttons, links, service cards, accents */
--color-primary-dark: #005456   /* Darker teal - hover states */
--color-primary-light: #e6f3f3  /* Light teal - book meta badges */
--color-accent-dark: #051A42    /* Navy - headings, CTA buttons, brand text */
--color-accent-orange: #e05724  /* Orange - decorative accents, vertical lines, dots */
--color-text: #1a1a1a           /* Primary body text */
--color-text-secondary: #4a4a4a /* Secondary text - must maintain 4.5:1 contrast on warm bg */
--color-bg: #ffffff             /* White background */
--color-bg-warm: #faf9f7        /* Warm off-white - cards, CTA sections, testimonials */
--color-border-light: #e8e8e8   /* Light borders */
```

### Typography

- **Headings**: Cormorant Garamond (serif) - elegant, literary feel
- **Body**: Libre Franklin (sans-serif) - clean, readable

### Key Design Choices

1. **Service cards**: Teal (`--color-primary`) fill with white text, orange top accent bar on hover
2. **Individual Support cards** on services page: Light variant (white bg, dark text) to reduce visual weight
3. **Quality items / Talks grid**: Warm background cards with orange dot before headings, navy heading text
4. **Testimonials**: Warm background cards with large orange opening quote mark (CSS ::before), navy attribution
5. **CTA sections**: Warm background, rounded corners, navy pill buttons
6. **Border radius**: Generally 10-12px for cards, 24px for pill buttons, 8px for smaller elements
7. **Orange accents used for**:
   - Vertical line between hero text and mushroom image
   - Decorative rule under page headers
   - Dots before quality item headings
   - Quote marks in testimonials
   - Top accent bar on service cards (hover)
   - H2 underlines use teal, not orange

### Header Brand

Text-based (not image): "Inkcap Consulting | Katina L. Rogers"
- "Inkcap Consulting" in bold navy (Cormorant Garamond)
- Separator "|" in light gray
- "Katina L. Rogers" in italic orange (Cormorant Garamond)

### Hero (Home Page)

Side-by-side layout: text left, mushroom illustration right, separated by orange vertical line. Mushroom is fully opaque, decorative (aria-hidden).

## Accessibility Requirements

**Always verify these when making changes:**

### Color Contrast (WCAG AA)
- Normal text: minimum 4.5:1 contrast ratio
- Large text (18px+ or 14px+ bold): minimum 3:1
- `--color-text-secondary` (#4a4a4a) was specifically chosen to pass on `--color-bg-warm`
- Service card body text uses 90% white opacity on teal for sufficient contrast

### Focus Styles
Every interactive element must have a visible `:focus-visible` style:
```css
element:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```
Currently applied to: all links, nav links, CTA buttons, contact links, client/media logo items, speaking thumbnail.

### Skip Link
A skip-to-content link exists at the top of the page (hidden until focused). Target is `#main-content` on the `<main>` element.

### Heading Hierarchy
Must follow logical order (h1 → h2 → h3, no skipping levels):
- Each page has one h1 in the page header
- Sections use h2
- Items within sections use h3
- Use `.visually-hidden` class for screen-reader-only headings when needed for hierarchy but not visual design

### Images
- Decorative images: `alt=""` and `aria-hidden="true"`
- Meaningful images: descriptive alt text
- All client/media logos have alt text with organization name

### ARIA
- Navigation uses `aria-current="page"` for active link
- Decorative elements hidden from screen readers

## Component Patterns

### Service Card (Teal)
```html
<div class="service-card">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Service Card (Light variant)
```html
<div class="service-card service-card--light">
  <h3>Title</h3>
  <p>Description</p>
</div>
```

### Quality Item (with description)
```html
<div class="qualities-grid">
  <div class="quality-item">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</div>
```

### Quality Item (compact, heading only)
```html
<div class="qualities-grid qualities-grid--compact">
  <div class="quality-item quality-item--compact">
    <h3>Topic Name</h3>
  </div>
</div>
```

### Testimonial
```html
<div class="testimonials-grid">
  <div class="testimonial">
    <p>Quote text without opening quote (added via CSS)"</p>
    <p class="attribution">— Name, Organization</p>
  </div>
</div>
```

### CTA Section
```html
<div class="cta">
  <h2>Heading</h2>
  <p>Description</p>
  <a href="/contact/" class="cta-button">Button Text</a>
</div>
```

### Contact Card
```html
<div class="contact-grid">
  <div class="contact-card contact-card--email">
    <h3>Email</h3>
    <p>Description</p>
    <a href="mailto:..." class="contact-link">email@example.com</a>
  </div>
</div>
```

### Section Accent
Used for highlighted text sections (values, approach statements):
```html
<div class="section-accent">
  <p>Paragraph text...</p>
  <p>Additional paragraphs as needed...</p>
</div>
```

## Development

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (localhost:4321)
npm run build      # Build for production
npm run preview    # Preview production build
```

## Deployment

Site deploys automatically to GitHub Pages via GitHub Actions on push to main. Custom domain configured at inkcapconsulting.com.

See DEPLOY-AND-EDIT-GUIDE.md for detailed deployment and content editing instructions.
