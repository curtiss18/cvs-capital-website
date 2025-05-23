# CVS Capital Website - Technical Architecture

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom component library
- **Deployment**: Vercel
- **Package Manager**: npm

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Homepage
│   └── team/
│       └── page.tsx      # Team page
├── components/
│   ├── ui/               # Base UI components
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── layout/           # Layout components
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── sections/         # Page sections
│       ├── hero-section.tsx
│       ├── about-section.tsx
│       ├── services-section.tsx
│       └── philosophy-section.tsx
└── lib/
    ├── advisors.ts       # Advisor data (SINGLE SOURCE)
    └── utils.ts         # Utility functions
```

## Design System

### Color Palette (Tailwind Config)
```typescript
sage: {
  100: '#E9EBE4',    // Very light cream
  200: '#D1D4B6',    // Light sage/beige
  300: '#C4CCB4',    // Light sage green
  400: '#99B7A2',    // Medium sage green (buttons)
  500: '#ACAC94',    // Muted sage/olive
  600: '#888965',    // Darker sage/olive (backgrounds)
}
cream: {
  100: '#E9EBE4',    // Light background
  300: '#D1D4B6',    // Accent cream
}
```

### Component Architecture
- **Atomic Design**: Button, Container, Section as base components
- **Compound Components**: Header with navigation, Section with wave separators
- **Consistent Props**: All components accept className and size variants
- **TypeScript**: Strict typing with interfaces for all props

### Responsive Design
- **Mobile-First**: All components designed for mobile, then scaled up
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: CSS Grid and Flexbox for layouts
- **Typography**: Responsive text sizing with clamp()

## Data Management

### Advisor Data (`/src/lib/advisors.ts`)
```typescript
interface Advisor {
  name: string
  role: string
  title?: string
  education: string
  credentials: string
  // ... (see file for complete interface)
}
```
- **Single Source of Truth**: All advisor data centralized
- **Type Safety**: Full TypeScript interface
- **Reusability**: Used by both homepage and team page
- **Easy Updates**: Modify once, updates everywhere

## SEO & Performance

### Metadata Strategy
- **Dynamic metadata**: Page-specific titles and descriptions
- **Open Graph**: Social media preview optimization
- **Structured data**: JSON-LD for business information
- **Local SEO**: Geographic and business entity markup

### Performance Optimizations
- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic by Next.js App Router
- **CSS Optimization**: Tailwind purges unused styles

## Development Workflow

### Code Quality
- **ESLint**: Strict linting with Next.js recommended rules
- **TypeScript**: Strict mode, no implicit any
- **Prettier**: Consistent code formatting
- **Git Hooks**: Pre-commit linting and type checking

### Component Development
1. Create TypeScript interface for props
2. Build mobile-first responsive design
3. Add proper accessibility attributes
4. Test across all breakpoints
5. Document component usage

### Testing Strategy
- **Build Validation**: npm run build before deployment
- **Type Checking**: Continuous TypeScript validation
- **Manual Testing**: Cross-browser and device testing
- **Performance**: Lighthouse audits for optimization

---
*Technical decisions documented for maintainability*