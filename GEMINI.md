# Site-Riviera-Pescados | Project Documentation

## Project Overview
This project is a modern, responsive institutional website for **Riviera Pescados**. It is built as a modular "Vanilla" web application, focusing on high performance and clean architecture without the need for heavy frameworks.

### Core Technologies
- **HTML5**: Semantic markup for better SEO and accessibility.
- **CSS3 (Modular)**: Uses CSS Grid, Flexbox, and Custom Properties (Variables). Managed through a centralized `style.css` that imports page-specific styles.
- **JavaScript (Vanilla ES6)**: Handles DOM manipulation, dynamic component injection via `fetch`, and client-side routing logic for internal pages (products, recipes, blog).
- **Swiper.js**: Used for carousels and sliders.
- **FontAwesome**: Icon library loaded via CDN.

### Key Architectural Patterns
1. **Dynamic Component Injection**: Header and Footer are isolated in `components/` and injected into pages using `fetch` in `assets/js/main.js`.
2. **Data-Driven Content**: Internal pages (Product detail, Recipe detail, Blog article) load content dynamically from JavaScript data objects (`products.js`, `recipes.js`, `blog.js`) based on URL parameters (e.g., `?id=file-400g`).
3. **Modular CSS**: Styling is split into `variables.css`, `components.css`, and page-specific files (e.g., `home.css`, `produtos.css`), all imported into `assets/css/style.css`.

## Performance Optimizations
The project follows modern performance standards to ensure fast loading and high Core Web Vitals scores:

1. **LCP Optimization**: Critical images (Logo and Hero Banners) are preloaded using `<link rel="preload">` in the `<head>` of all HTML files.
2. **CLS Reduction**: Explicit `width` and `height` attributes are defined for the logo in the header and footer to prevent layout shifts.
3. **Lazy Loading**: Native `loading="lazy"` is applied to all secondary images (product catalog, recipes, social media grids) to prioritize critical content.
4. **Image Formats**: Prefer `.webp` for all photographic content.

## Directory Structure
- `index.html`: Main landing page.
- `components/`: HTML fragments for shared components (Header, Footer).
- `assets/css/`: All styling files.
- `assets/js/`: Logic and data objects.
- `assets/images/`: Optimized image assets (mostly `.webp`).
- `assets/docs/`: PDF technical datasheets for products.

**Legacy Cleanup**: The directories `partials/`, `style/`, and `views/` have been removed as they were redundant and not part of the current architecture.

## Building and Running
As a static site with `fetch` calls, it requires a local web server to function correctly (to avoid CORS issues when loading components).

### Recommended Local Setup
- **VS Code Live Server**: Right-click `index.html` and select "Open with Live Server".
- **Python**: `python -m http.server 8000`
- **Node.js**: `npx serve .`

### Testing
- Manual verification of responsive layouts across different screen sizes.
- Ensure all dynamic links (Products, Recipes, Blog) load the correct data.
- Check console for any failed `fetch` requests or Swiper initialization errors.

## Development Conventions
- **Naming**: Use kebab-case for files and classes.
- **Styles**: Always use CSS variables defined in `variables.css` for colors and spacing to maintain consistency.
- **Modularity**: When creating a new shared element, place it in `components/` and add the injection logic to `main.js`.
- **Data**: To add a new product or recipe, simply update the corresponding object in `assets/js/products.js` or `assets/js/recipes.js`.
