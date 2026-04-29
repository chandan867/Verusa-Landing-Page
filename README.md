# Verusa Landing Page

The official landing page for **Verusa** — an AI-native compliance intelligence layer that turns blockchain analytics and risk scores into documented, defensible AML case narratives.

## About Verusa

Verusa helps compliance and AML teams close the gap between raw blockchain signals and evidence-backed decisions. We contextualise alerts against 26 ML/TF typologies, map source-linked evidence, and recommend the next step — so your team can defend every case.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 19 | UI framework |
| Vite | Build tooling & dev server |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Scroll animations |

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

## Build for Production

```bash
npm run build
```

Static assets are copied from `public/` into the build output automatically.

## Project Structure

```
├── public/
│   └── assets/
│       ├── logo.svg                     # Company logo (also used as favicon)
│       └── clideo_editor_*.mp4          # Hero section background video
├── src/
│   ├── App.tsx                          # Main page component (all sections)
│   ├── index.css                        # Theme, Tailwind config & utilities
│   └── main.tsx                         # Entry point
├── index.html                           # HTML shell with meta tags
├── package.json
└── vite.config.ts
```

## Key Sections

- **Hero** — Value proposition with autoplay video walkthrough
- **Problem** — The intelligence gap between signal and rationale
- **Framework** — Ingest → Contextualise → Recommend
- **Comparison** — Blockchain analytics vs Verusa investigation layer
- **Product Pillars** — Integrations, typologies, and governance
- **Team** — Leadership with customer-facing compliance and engineering depth
- **CTA** — Design partner programme application

## License

© 2026 Verusa. All rights reserved.
