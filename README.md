# Open Mus - Cinematic Hero Landing Page

A modern, cinematic hero landing page built with React, TypeScript, Vite, and Tailwind CSS. Features a dark, minimalist aesthetic with a full-screen background image and elegant typography.

## Features

- **Cinematic Hero Section**: Full-screen background with the iconic card game image
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Aesthetic**: Minimalist design with dramatic lighting effects
- **Spanish Content**: Authentic mus card game terminology and messaging
- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS

## Design Elements

### Hero Section
- Full viewport height with background image overlay
- Navigation bar with "Open Mus ®" branding
- Social media links (X, Instagram, Github)
- "Jugar" CTA button with hover effects
- Typography hierarchy with tagline, headline, and description

### Secondary Section
- Gradient background from slate-900 to black
- Centered content with mus game wisdom
- Call-to-action messaging

## Getting Started

Install dependencies:
```bash
yarn install
```

Start the development server:
```bash
yarn dev
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn test` - Run tests
- `yarn start` - Preview production build

## Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Shadcn UI** - Component library utilities

## Project Structure

```
src/
├── components/
│   └── Hero.tsx          # Main hero component
├── pages/
│   └── Index.tsx         # Landing page layout
├── utils/
│   └── cn.ts            # Class name utility
└── App.tsx              # Main app component
```

## Environment Setup

For Supabase integration (optional):

1. Create a `.env` file in the root directory
2. Add your Supabase configuration:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Design Philosophy

The landing page embodies the spirit of the mus card game - strategic, intense, and timeless. The dark cinematic aesthetic creates an immersive experience that draws users into the world of Open Mus.

### Color Palette
- Primary: White text on dark backgrounds
- Accent: Warm candlelight tones from the background image
- Overlay: Black/50 for dramatic effect

### Typography
- Light font weights for elegance
- Large, impactful headlines
- Careful spacing and hierarchy

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Flexible layouts that adapt to all screen sizes
