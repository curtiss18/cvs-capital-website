# CVS Capital Website - Project Documentation

## Project Overview
CVS Capital is an independent investment advisory firm run by Curtis and Creg Shaffer, operating under the Institute for Wealth Management as their RIA. This website serves as the primary marketing platform for the firm.

## Project Status: ✅ Production Ready (Phase 1 Complete)

### Completed Components ✅
- ✅ **Homepage** - Hero, Services, About/Team, Philosophy sections with Card components
- ✅ **Services Page** - Comprehensive service offerings, investment strategies, fee transparency
- ✅ **Team Page** - Detailed advisor profiles with regulatory compliance and credentials
- ✅ **Card Component System** - Reusable, professional card styling across all pages
- ✅ **Navigation & Linking** - Complete navigation flow: hero CTA to services, service cards to core services, advisor cards to team profiles
- ✅ **Shared Advisor Data** - Centralized data source (`/src/lib/advisors.ts`)
- ✅ **Professional Design System** - Sage/cream color palette, clean typography
- ✅ **Responsive Layout** - Mobile-first design with professional styling
- ✅ **SEO Optimization** - Metadata, structured layout, semantic HTML

### Current Architecture
```
src/
├── app/
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx            # Homepage
│   ├── sections/           # Homepage-specific sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx
│   │   └── philosophy.tsx
│   ├── services/
│   │   ├── page.tsx        # Services page with investment strategies
│   │   └── sections/       # Services-specific sections
│   │       ├── hero.tsx
│   │       ├── core-services.tsx
│   │       ├── strategies.tsx
│   │       ├── process.tsx
│   │       ├── fees.tsx
│   │       ├── compliance.tsx
│   │       └── cta.tsx
│   └── team/
│       ├── page.tsx        # Team page with detailed profiles
│       └── sections/       # Team-specific sections
│           ├── hero.tsx
│           ├── overview.tsx
│           ├── profiles.tsx
│           ├── credentials.tsx
│           └── contact.tsx
├── components/
│   ├── ui/                 # Reusable UI components (Button, Card, etc.)
│   └── layout/             # Header, Footer with navigation
├── lib/
│   ├── advisors.ts         # Shared advisor data (SINGLE SOURCE OF TRUTH)
│   └── utils.ts           # Utility functions (cn, formatPhoneNumber)
└── app/globals.css        # Global styles + Tailwind

Tech Stack: Next.js 14 + TypeScript + Tailwind CSS
```

### Key Features Implemented

#### 🎨 **Design System**
- **Card Component**: Reusable component with sage borders, hover effects, flexible padding
- **Color Palette**: Professional sage greens (#888965, #ACAC94) and cream tones (#E9EBE4)
- **Typography**: Clean Inter font system with professional hierarchy
- **Professional Styling**: No unnecessary animations, clean hover states

#### 📄 **Content Pages**
- **Homepage**: Hero, services overview, advisor introductions, company philosophy
- **Services Page**: Complete service offerings, investment strategies, fee structure, compliance
- **Team Page**: Individual advisor profiles, credentials, FINRA compliance information

#### 🔗 **Navigation & UX**
- **Hero Navigation**: "Our Services" button links to services page with responsive mobile design
- **Service Card Linking**: Portfolio Management and Financial Planning cards link to services core section
- **Advisor Linking**: Homepage advisor cards link to detailed Team page profiles
- **Scroll Offset**: Proper scroll positioning accounting for sticky header (scroll-mt-32)
- **Professional CTAs**: Clear calls-to-action throughout the site

#### 📊 **Investment Strategies Covered**
- Global Impact (ESG-focused flagship strategy)
- Global ESG Core (Socially responsible investing)
- Sector Rotation (Rules-based tactical strategy)
- Alternative Income (Reduced equity correlation)
- Dynamic Equity Growth/Income (Concentrated stock strategies)
- MoneyPlus (Duration management with income focus)

### Advisor Data Structure
All advisor information is centralized in `/src/lib/advisors.ts`:
- **Creg V Shaffer** - Senior Investment Adviser (featured first)
  - MS in Economics, Iowa State University
  - CRD# 5070346, Licensed since 2006
  - Email: cregs@instituteforwealth.com
- **Curtis L Shaffer** - Technology Sector Specialist  
  - BS in Business Administration, Brigham Young University
  - CRD# 5601482, Licensed since 2025
  - Email: curtis.shaffer@instituteforwealth.com

## Key Business Rules & Compliance

### FINRA/NASAA Compliance Requirements
- ❌ **NO TESTIMONIALS** - Strictly avoided for regulatory compliance
- ✅ **Professional credentials** - CRD numbers, Series 65 info prominently displayed
- ✅ **FINRA BrokerCheck links** - Direct links to advisor verification profiles
- ✅ **Transparent fee disclosure** - Maximum 2.00% annual fee clearly stated
- ✅ **Risk disclosures** - Appropriate disclaimers and compliance language
- ✅ **Rep as PM Model** - CVS Capital operates exclusively in Rep as Portfolio Manager model

### Content Approval Process
- **All content changes** require approval from CCO at Institute for Wealth Management
- **No marketing claims** without compliance review
- **Professional tone** required throughout
- **Form ADV Part 2A compliant** - All services match regulatory filings

### Brand Guidelines
- **Color Palette**: Sage greens and cream tones (see `tailwind.config.ts`)
- **Typography**: Clean, professional Inter font system
- **Tone**: Professional, trustworthy, client-focused, FINRA-appropriate
- **Style**: Matches Institute for Wealth Management aesthetic

## Development Standards

### Code Quality Standards
- **TypeScript**: Strict typing, interfaces for all data structures
- **ESLint**: Enforced linting rules, clean code standards
- **Component Architecture**: Reusable Card system, consistent styling
- **Single Source of Truth**: Centralized advisor data management
- **Mobile-First**: Responsive design for all screen sizes
- **Performance**: Optimized images, minimal bundle size

### Component Architecture
```
UI Components:
```
UI Components:
├── Button (3 variants: primary, secondary, outline)
├── Card (flexible padding, hover effects, sage borders)
├── Container (responsive width management)
├── Section (variant styling for different page sections)
└── Header/Footer (navigation and site structure)

Form Components (To Be Created):
├── Input (form text inputs)
├── Textarea (form text areas)
└── Select (form dropdowns)
```

### File Naming Conventions
- **Components**: PascalCase (`Button.tsx`, `Card.tsx`)
- **Pages**: kebab-case (`services/page.tsx`)
- **Directories**: lowercase (`components`, `sections`, `ui`)

## Next Phase Priorities

### 1. Contact Form Implementation (Ready to Build)
- Contact form with validation (React Hook Form + Zod)
- EmailJS integration for form submissions
- Lead capture for marketing purposes
- Success/error states and user feedback
- **Dependencies already installed**: react-hook-form, zod, emailjs-com

### 2. Content Enhancement
- About page (company history, mission)
- Contact page with office information
- Legal/compliance pages (privacy policy, terms)

### 3. Advanced Features
- Blog system for market insights
- Newsletter signup integration
- Advanced SEO optimization

## Technical Implementation Details

### Key Dependencies
```json
{
  "next": "^15.3.2",
  "react": "^19.0.0", 
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "react-hook-form": "^7.56.4",
  "zod": "^3.25.27",
  "emailjs-com": "^3.2.0"
}
```

### Important File Locations
- **Advisor Data**: `/src/lib/advisors.ts` (SINGLE SOURCE OF TRUTH)
- **Color Palette**: `/tailwind.config.ts` (custom sage/cream colors)
- **Global Styles**: `/src/app/globals.css`
- **Component Library**: `/src/components/ui/`
- **Page Components**: `/src/app/*/page.tsx`

## Development Commands
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build with optimization
npm run lint         # ESLint code quality check
npm run type-check   # TypeScript validation
```

## Deployment
- **Platform**: Vercel (automatic deployments)
- **Domain**: TBD (ready for custom domain setup)
- **Build**: Automatic deployment from main branch
- **Environment**: Production optimized with Next.js 14

## Project Maintenance

### Content Updates
All advisor information updates should be made in `/src/lib/advisors.ts` as it propagates to:
- Homepage about section
- Team page individual profiles  
- Team page credentials section
- Any future pages referencing advisor data

### Design System Updates
The Card component (`/src/components/ui/card.tsx`) is used throughout:
- Homepage service cards and advisor cards
- Services page for all content sections
- Team page for stats, profiles, and credentials
- Any future content cards should use this component for consistency

---
**Project Status**: ✅ Phase 1 Complete - Production Ready  
**Last Updated**: December 2024  
**Maintainer**: Curtis Shaffer  
**Next Milestone**: Contact Form Implementation
