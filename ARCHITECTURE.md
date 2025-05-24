# CVS Capital Website - Technical Architecture

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom sage/cream design system
- **UI Components**: Custom reusable component library with Card system
- **Forms**: React Hook Form + Zod validation (ready for contact form)
- **Email**: EmailJS integration (configured)
- **Deployment**: Vercel with automatic deployments
- **Package Manager**: npm

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind config
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx          # Homepage
│   ├── sections/         # Homepage-specific sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   └── philosophy.tsx
│   ├── services/
│   │   └── page.tsx      # Services page with investment strategies
│   └── team/
│       └── page.tsx      # Team page with detailed profiles
├── components/
│   ├── ui/               # Base UI components
│   │   ├── button.tsx    # 3 variants, no hover translations
│   │   ├── card.tsx      # Reusable card with sage borders
│   │   ├── container.tsx # Responsive width management
│   │   └── section.tsx   # Clean sections (no wave effects)
│   ├── layout/           # Layout components
│   │   ├── header.tsx    # Navigation with services link
│   │   └── footer.tsx    # Site footer
└── lib/
    ├── advisors.ts       # Advisor data (SINGLE SOURCE OF TRUTH)
    └── utils.ts         # Utility functions (cn, formatPhoneNumber)
```

## Design System

### Color Palette (Custom Tailwind Config)
```typescript
colors: {
  sage: {
    50: '#f8f9f7',     // Very light sage
    100: '#E9EBE4',    // Light cream background
    200: '#D1D4B6',    // Card borders (primary border color)
    300: '#C4CCB4',    // Light sage green
    400: '#99B7A2',    // Button colors, accents
    500: '#ACAC94',    // Medium sage/olive
    600: '#888965',    // Section backgrounds, darker sage
    700: '#6b6b52',    // Dark sage
    800: '#555544',    // Very dark sage
    900: '#444433',    // Darkest sage
  },
  cream: {
    50: '#fefdfb',     // Very light cream
    100: '#E9EBE4',    // Primary cream background
    200: '#e1e3dc',    
    300: '#D1D4B6',    
    // ... (complete palette in tailwind.config.ts)
  }
}
```

### Component Architecture

#### **Card Component System**
```typescript
// /src/components/ui/card.tsx
interface CardProps {
  padding?: "sm" | "md" | "lg" | "xl"
  hover?: boolean  // Controls shadow enhancement
  className?: string
}
```
- **Usage**: All content cards across the site
- **Styling**: White background, sage-200 borders, shadow-lg, hover:shadow-xl
- **Flexible**: Configurable padding and hover effects
- **Consistent**: Same design language site-wide

#### **Button System**
```typescript
// /src/components/ui/button.tsx
interface ButtonProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}
```
- **No Hover Translations**: Clean, professional hover states
- **Sage Color Palette**: Consistent with brand colors
- **Three Variants**: Primary (filled), Secondary (white), Outline (bordered)

#### **Section Architecture**
```typescript
// /src/components/ui/section.tsx  
interface SectionProps {
  variant?: "default" | "sage" | "cream"
  padding?: "sm" | "md" | "lg" | "xl"
}
```
- **Clean Design**: No wave effects, professional appearance
- **Three Variants**: White, sage background, cream background
- **Responsive Padding**: Consistent spacing system

### Navigation & Linking
- **Homepage to Team**: Advisor cards link to specific team profiles
- **Anchor Links**: `/team#advisor-creg-v-shaffer`, `/team#advisor-curtis-l-shaffer`
- **Scroll Offset**: `scroll-mt-32` accounts for sticky header height
- **Smooth Navigation**: Professional user experience

## Data Management

### Advisor Data (`/src/lib/advisors.ts`)
```typescript
interface Advisor {
  name: string           // "Creg V Shaffer", "Curtis L Shaffer"
  role: string           // Professional titles
  title?: string         // Co-Founder titles
  education: string      // "MS in Economics", "BS in Business Administration"
  credentials: string    // Series 65 certifications
  experience: string     // Years/expertise summary
  contact: {
    email: string        // Institute email addresses
    phone: string        // Direct phone numbers
  }
  details: {
    crd: string         // FINRA CRD numbers
    licensed: string    // License start years
  }
  initials: string      // "CVS", "CLS"
  philosophy: string    // Investment philosophy quotes
  expertise: string[]   // Areas of specialization
  achievements: string[] // Professional accomplishments
  interests: string     // Professional interests
  description?: string  // Homepage description
}
```
- **Single Source of Truth**: All advisor data centralized
- **Complete Type Safety**: Full TypeScript interfaces
- **Multi-Page Usage**: Homepage, Services, Team pages
- **Easy Updates**: Modify once, propagates everywhere
- **FINRA Compliant**: CRD numbers, proper credentials

## Page Architecture

### Homepage (`/src/app/page.tsx`)
- **Hero Section**: Company introduction with professional CTAs
- **Services Section**: Portfolio Management & Financial Planning cards
- **About Section**: Clickable advisor cards linking to team profiles
- **Philosophy Section**: Company approach and methodology

### Services Page (`/src/app/services/page.tsx`)
- **Hero Section**: Service overview with matched outline buttons
- **Core Services**: 4 main service areas using Card components
- **Investment Strategies**: 6 detailed strategies with risk/minimum info
- **Fee Transparency**: Clear pricing with 2.00% maximum disclosed
- **Compliance Section**: Credentials and regulatory info

### Team Page (`/src/app/team/page.tsx`)
- **Hero Section**: Team introduction
- **Stats Cards**: Experience and credentials using Card components
- **Individual Profiles**: Detailed advisor information with anchor IDs
- **Credentials Section**: FINRA compliance and BrokerCheck links
- **Contact CTA**: Professional engagement prompts

## SEO & Performance

### Metadata Strategy
```typescript
// Each page has optimized metadata
export const metadata: Metadata = {
  title: 'Page Title | CVS Capital',
  description: 'SEO-optimized description',
  keywords: 'relevant, financial, keywords'
}
```

### Performance Optimizations
- **Static Generation**: All pages pre-rendered for speed
- **Component Reusability**: Card system reduces bundle size
- **Tailwind Purging**: Unused CSS automatically removed
- **TypeScript**: Compile-time optimization and error prevention
- **Image Optimization**: Next.js Image component ready for implementation

## Development Standards

### Component Development Principles
1. **Mobile-First**: Design for mobile, enhance for desktop
2. **TypeScript-First**: Strict typing for all components and props
3. **Reusable Design**: Card system used across all content areas
4. **Accessible**: Semantic HTML, proper ARIA attributes
5. **Professional**: Financial services appropriate styling

### Code Quality Standards
```bash
# Development workflow
npm run dev          # Development server with hot reload
npm run build        # Production build validation
npm run lint         # ESLint with Next.js rules
npm run type-check   # TypeScript strict validation
```

### Form Architecture (Ready for Implementation)
```typescript
// Contact form dependencies already installed
{
  "react-hook-form": "^7.56.4",  // Form state management
  "zod": "^3.25.27",              // Schema validation
  "emailjs-com": "^3.2.0"        // Email integration
}
```

## Business Logic Implementation

### FINRA Compliance Architecture
- **No Testimonials**: Strictly avoided across all pages
- **Rep as PM Model**: CVS Capital operates exclusively as Rep as Portfolio Manager
- **Fee Transparency**: Maximum 2.00% clearly disclosed on Services page
- **Credentials Display**: CRD numbers, licensing info prominently shown
- **Risk Disclosures**: Appropriate disclaimers on Services page

### Content Management
- **Form ADV Compliance**: All services match regulatory filings
- **Single Source Updates**: Advisor data automatically propagates
- **Professional Tone**: Business-appropriate language throughout
- **CCO Approval Process**: All content requires compliance review

---
**Architecture Status**: ✅ Production Ready  
**Last Updated**: December 2024  
**Next Phase**: Contact Form Implementation  
**Maintainer**: Curtis Shaffer
