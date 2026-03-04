# Luna Trattoria — Restaurant Landing (Next.js + TS + Tailwind)

Modern, business-class landing page for an Italian restaurant.  
Built with scalable structure and reusable sections/components (HR-friendly).

---

## ✨ Features

- Next.js App Router + TypeScript
- Tailwind CSS (premium spacing, typography, cards)
- Responsive / Mobile-first
- SEO-ready metadata + Open Graph + sitemap
- Clean architecture: `sections/`, `layout/`, `ui/`, `data/`, `lib/`

---

## 📦 Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- lucide-react (icons)
- clsx + tailwind-merge

---

## 🚀 Getting Started

```bash
pnpm install
pnpm dev
```

---

## 📁 Project Structure

```
src
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── sitemap.ts
│
├── components
│   ├── layout        # Header / Footer
│   ├── sections      # Landing sections
│   └── ui            # Reusable UI components
│
├── data              # Mock data (menu/testimonials/gallery)
│
└── lib               # Utility functions
```