# Shirohana Villas — Landing Page

A modern, responsive landing page for **Shirohana Villas**, a collection of eco-luxury villa stays across Sri Lanka. Built with Vite, vanilla HTML/JS, and SCSS.

---

## Prerequisites

Make sure the following are installed on your machine before getting started:

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes bundled with Node.js)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/rvndu-perera/Landing-Page-Sample.git
cd "Landing-Page-Sample"
```

### 2. Install dependencies

```bash
cd frontend
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The site will be available at **http://localhost:5173**

---

## Available Scripts

All scripts are run from inside the `frontend/` directory.

| Command | Description |
|---|---|
| `npm run dev` | Starts the local dev server with hot reload |
| `npm run build` | Builds the production bundle to `frontend/dist/` |
| `npm run preview` | Previews the production build locally |

---

## Project Structure

```
Landing-Page-Sample/
└── frontend/
    ├── public/
    │   └── favicon.png          # Site favicon
    ├── src/
    │   ├── assets/              # Images and logos
    │   ├── scss/
    │   │   ├── components/      # Navbar, dropdown component styles
    │   │   ├── sections/        # Per-section styles (hero, about, sites, offers, etc.)
    │   │   ├── _base.scss       # Global resets and base styles
    │   │   ├── _variables.scss  # Design tokens (colors, fonts, spacing)
    │   │   └── main.scss        # Root stylesheet — imports all partials
    │   └── main.js              # App entry point — markup, logic, and controllers
    ├── index.html               # HTML shell
    └── package.json
```

---

## Tech Stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool and dev server |
| [Sass / SCSS](https://sass-lang.com/) | Styling |
| [Bootstrap 5](https://getbootstrap.com/) | Responsive grid and utility classes |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Icon set |
| [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) | Body typeface |
| [Inria Serif](https://fonts.google.com/specimen/Inria+Serif) | Display / heading typeface |

Bootstrap's containers, rows, columns, and utilities provide the responsive layout for the main content sections. Custom SCSS preserves the page's visual styling and handles bespoke layouts such as the villa-site masonry grid, hero slideshow, and navigation drawer.
