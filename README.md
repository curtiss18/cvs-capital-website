# CVS Capital Website - Project Documentation

## Project Overview
CVS Capital is an independent investment advisory firm run by Curtis and Creg Shaffer, operating under the Institute for Wealth Management as their RIA. This website serves as the primary marketing platform for the firm.

## Project Status: ✅ Active Development

### Completed Components
- ✅ **Homepage** - Hero, Services, About/Team, Philosophy sections
- ✅ **Team Page** - Detailed advisor profiles with regulatory compliance
- ✅ **Shared Advisor Data** - Centralized data source (`/src/lib/advisors.ts`)
- ✅ **Foundation Components** - Button, Container, Section, Header, Footer
- ✅ **Design System** - Custom color palette, responsive design
- ✅ **SEO Optimization** - Metadata, structured layout

### Current Architecture
```
src/
├── app/
│   ├── layout.tsx           # Root layout with SEO
│   ├── page.tsx            # Homepage
│   └── team/
│       └── page.tsx        # Team page
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header, Footer
│   └── sections/           # Page sections (Hero, About, etc.)
├── lib/
│   ├── advisors.ts         # Shared advisor data (SINGLE SOURCE OF TRUTH)
│   └── utils.ts           # Utility functions
└── app/globals.css        # Global styles + Tailwind

Tech Stack: Next.js 14 + TypeScript + Tailwind CSS
```

### Advisor Data Structure
All advisor information is centralized in `/src/lib/advisors.ts`:
- **Creg V. Shaffer** - Senior Investment Adviser (featured first)
- **Curtis L. Shaffer** - Technology Sector Specialist
- Includes: contact info, credentials, CRD numbers, expertise, philosophy

## Key Business Rules & Compliance

### FINRA/NASAA Compliance Requirements
- ❌ **NO TESTIMONIALS** - Removed for regulatory compliance
- ✅ **Professional credentials** - CRD numbers, Series 65 info displayed
- ✅ **FINRA BrokerCheck links** - Direct links to advisor profiles
- ✅ **Transparent fee disclosure** - Clear fee structure information
- ✅ **Risk disclosures** - Appropriate disclaimers and compliance language
### Content Approval Process
- **All content changes** require approval from CCO at Institute for Wealth Management
- **No marketing claims** without compliance review
- **Professional tone** required throughout

### Brand Guidelines
- **Color Palette**: Sage greens and cream tones (see `tailwind.config.ts`)
- **Typography**: Clean, professional sans-serif fonts
- **Tone**: Professional, trustworthy, client-focused
- **Style**: Matches Institute for Wealth Management aesthetic

## Development Standards

### Code Quality Standards
- **TypeScript**: Strict typing, interfaces for all data structures
- **ESLint**: Enforced linting rules, no console.log in production
- **Component Architecture**: Reusable, well-documented components
- **Single Source of Truth**: Centralized data management
- **Mobile-First**: Responsive design for all components

### File Naming Conventions
- **Components**: PascalCase (`Button.tsx`, `HeroSection.tsx`)
- **Files**: kebab-case (`advisor-data.ts`, `about-section.tsx`)
- **Directories**: lowercase (`components`, `sections`, `ui`)

### Git Workflow
- **Feature branches** for new functionality
- **Descriptive commit messages**
- **Test builds** before deployment
- **Vercel deployment** from main branch

## Current Priorities (In Order)

### 1. Contact Functionality (Next Phase)
- Contact form with validation (React Hook Form + Zod)
- EmailJS integration for form submissions
- Lead capture for marketing purposes
- Success/error states and user feedback

### 2. Content Pages
- Dedicated Services page
- About page (expanded)
- Contact page with office information
- Legal/compliance pages

### 3. Blog System
- Content management setup
- Market insights and educational content
- SEO-optimized blog structure

## Key Contacts & Roles
- **Curtis Shaffer**: Site maintainer, primary technical contact
- **Creg Shaffer**: Senior advisor, content reviewer
- **Institute for Wealth Management CCO**: Content approval authority

## Important File Locations
- **Advisor Data**: `/src/lib/advisors.ts` (SINGLE SOURCE OF TRUTH)
- **Color Palette**: `/tailwind.config.ts`
- **Global Styles**: `/src/app/globals.css`
- **Component Library**: `/src/components/ui/`

## Development Commands
```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript validation
```

## Deployment
- **Platform**: Vercel
- **Domain**: TBD
- **Build**: Automatic deployment from main branch
- **Environment**: Production optimized

---
*Last Updated: Current session*
*Maintainer: Curtis Shaffer*