# CVS Capital Website - Technical Architecture

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom sage/cream design system
- **UI Components**: Custom reusable component library with Card system
- **Forms**: React Hook Form + Zod validation with EmailJS integration
- **Email**: EmailJS dual-email system (notifications + auto-response)
- **Analytics**: Vercel Analytics for privacy-focused tracking
- **Deployment**: Vercel with automatic deployments
- **Package Manager**: npm

## Project Structure
```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles + Tailwind config
│   ├── layout.tsx         # Root layout with SEO metadata + Vercel Analytics
│   ├── page.tsx          # Homepage
│   ├── sections/         # Homepage-specific sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   └── philosophy.tsx
│   ├── services/
│   │   ├── page.tsx      # Services page with investment strategies
│   │   └── sections/     # Services-specific sections
│   │       ├── hero.tsx
│   │       ├── core-services.tsx
│   │       ├── strategies.tsx
│   │       ├── process.tsx
│   │       ├── fees.tsx
│   │       ├── compliance.tsx
│   │       └── cta.tsx
│   ├── team/
│   │   ├── page.tsx      # Team page with detailed profiles
│   │   └── sections/     # Team-specific sections
│   │       ├── hero.tsx
│   │       ├── overview.tsx
│   │       ├── profiles.tsx
│   │       ├── credentials.tsx
│   │       └── contact.tsx
│   └── contact/
│       ├── page.tsx      # Contact page with form and office info
│       └── sections/     # Contact-specific sections
│           ├── hero.tsx
│           ├── contact-form.tsx
│           ├── office-info.tsx
│           ├── team-direct.tsx
│           └── compliance.tsx
├── components/
│   ├── ui/               # Base UI components
│   │   ├── button.tsx    # 3 variants, professional styling
│   │   ├── card.tsx      # Reusable card with sage borders
│   │   ├── container.tsx # Responsive width management
│   │   ├── section.tsx   # Clean sections (no wave effects)
│   │   ├── input.tsx     # Form input with validation & hydration-safe IDs
│   │   ├── textarea.tsx  # Form textarea with validation
│   │   └── select.tsx    # Form select dropdown with validation
│   ├── layout/           # Layout components
│   │   ├── header.tsx    # Navigation with complete site linking
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

#### **Form Component System** ✅
```typescript
// /src/components/ui/input.tsx, textarea.tsx, select.tsx
interface FormProps {
  label?: string
  error?: string
  helperText?: string
  // Component-specific props...
}
```
- **Usage**: All form fields across contact forms and future forms
- **Validation**: Integrated with React Hook Form + Zod
- **Hydration-Safe**: Uses React's useId() hook for SSR compatibility
- **Accessibility**: Proper label associations and ARIA attributes
- **Consistent**: Same design language and error handling site-wide

#### **Contact Form Integration** ✅
```typescript
// /src/app/contact/sections/contact-form.tsx
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  investmentGoals: z.string().optional(),
  portfolioSize: z.string().optional(),
  hearAbout: z.string().optional(),
  message: z.string().min(10)
})
```
- **EmailJS Dual-Email**: Internal notification + auto-response
- **Lead Qualification**: Investment goals and portfolio size capture
- **Professional UX**: Loading states, success confirmation, error handling

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

### Navigation & Linking ✅
- **Homepage to Services**: "Our Services" button and service cards link to services page
- **Homepage to Team**: Advisor cards link to specific team profiles with anchor links
- **Team to Services**: "Learn About Our Services" button links to services page  
- **All CTAs to Contact**: Professional contact form with lead qualification
- **Header Navigation**: Complete site navigation including contact page
- **Anchor Links**: `/team#advisor-creg-v-shaffer`, `/team#advisor-curtis-l-shaffer`
- **Scroll Offset**: `scroll-mt-32` accounts for sticky header height
- **Smooth Navigation**: Professional user experience across all pages

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

### Modular Section Pattern
Each main page follows a consistent modular architecture with co-located sections:

### Homepage (`/src/app/page.tsx`)
**Sections:** `hero.tsx`, `services.tsx`, `about.tsx`, `philosophy.tsx`
- **Hero Section**: Sophisticated messaging emphasizing CVS Capital's risk-first philosophy and discretionary management approach
- **Services Section**: Portfolio Management & Financial Planning cards (link to services page)
- **About Section**: Clickable advisor cards linking to team profiles  
- **Philosophy Section**: Company approach and methodology

### Services Page (`/src/app/services/page.tsx`)
**Sections:** `hero.tsx`, `core-services.tsx`, `strategies.tsx`, `process.tsx`, `fees.tsx`, `compliance.tsx`, `cta.tsx`
- **Hero Section**: Tailored messaging focusing on investment management, retirement planning, and financial planning with service category preview icons
- **Core Services**: 4 main service areas (anchor target for homepage links)
- **Investment Strategies**: 6 detailed strategies with risk/minimum info
- **Service Process**: 4-step process overview
- **Fee Transparency**: Clear pricing with 2.00% maximum disclosed
- **Compliance**: Credentials and regulatory information
- **Call to Action**: Final engagement prompts

### Team Page (`/src/app/team/page.tsx`)
**Sections:** `hero.tsx`, `overview.tsx`, `profiles.tsx`, `credentials.tsx`, `contact.tsx`
- **Hero Section**: Sophisticated messaging highlighting independent advisory approach and Institute for Wealth Management partnership
- **Team Overview**: Team description and experience statistics
- **Advisor Profiles**: Detailed individual advisor information with anchor IDs
- **Credentials**: FINRA compliance and BrokerCheck links
- **Contact CTA**: Engagement prompts and direct contact information

### Contact Page (`/src/app/contact/page.tsx`) ✅
**Sections:** `hero.tsx`, `contact-form.tsx`, `office-info.tsx`, `team-direct.tsx`, `compliance.tsx`
- **Hero Section**: Streamlined, conversion-optimized messaging focusing on discussing financial goals
- **Contact Form**: Lead qualification form with EmailJS dual-email integration
- **Office Information**: Reno address, business hours, main contact methods
- **Team Direct Contact**: Individual advisor contact cards with clickable phone/email
- **Compliance Section**: Privacy disclosures and FINRA-appropriate disclaimers

### Architecture Benefits ✅
- **Clean Main Pages**: Reduced from 400+ lines to 30-50 lines each
- **Modular Development**: Individual sections can be developed and tested independently
- **Sophisticated Hero Sections**: High net worth focused messaging with unique content per page
- **Complete Navigation**: Seamless linking between all pages with proper scroll offsets
- **Lead Generation**: Professional contact form with qualification and dual-email system
- **Easy Maintenance**: Updates to specific sections don't affect entire pages
- **Scalable Pattern**: New pages can follow the same modular structure
- **Form Reusability**: Input, Textarea, Select components can be used across the site
- **FINRA Compliance**: Built-in compliance features and appropriate disclaimers
- **Conversion Optimization**: Contact page streamlined for maximum conversion

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

### Form Architecture ✅
```typescript
// Contact form with lead qualification
{
  "react-hook-form": "^7.56.4",  # Form state management
  "zod": "^3.25.27",              # Schema validation
  "emailjs-com": "^3.2.0"        # Email integration
}

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(), 
  phone: z.string().min(10),
  investmentGoals: z.string().optional(),
  portfolioSize: z.string().optional(),
  hearAbout: z.string().optional(),
  message: z.string().min(10)
})

// Dual EmailJS integration
- Internal notification → curtis.shaffer@instituteforwealth.com
- Auto-response → User confirmation with office info
- Lead qualification data included in both emails
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
**Architecture Status**: ✅ Complete - All Core Features Implemented + Enhanced Hero Sections  
**Last Updated**: June 2025 
**Latest Enhancement**: Sophisticated hero sections optimized for high net worth investors
**Next Phase**: Content Enhancement & Advanced Features  
**Maintainer**: Curtis Shaffer
