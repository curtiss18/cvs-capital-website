# CVS Capital Website - Project Documentation

## Project Overview
CVS Capital is an independent investment advisory firm run by Curtis and Creg Shaffer, operating under the Institute for Wealth Management as their RIA. This website serves as the primary marketing platform for the firm.

## Project Status: ✅ Production Ready (Phase 2+ Complete)

### Completed Components ✅
- ✅ **Homepage** - Hero, Services, About/Team, Philosophy sections with Card components
- ✅ **Services Page** - Comprehensive service offerings, investment strategies, fee transparency
- ✅ **Team Page** - Detailed advisor profiles with regulatory compliance and credentials
- ✅ **Contact Page** - Professional contact form with lead qualification and dual EmailJS integration (see `/docs/EMAILJS-COMPLETE-GUIDE.md`)
- ✅ **Enhanced Hero Sections** - Sophisticated, high net worth focused messaging across all pages with unique content per page
- ✅ **Authentication System** - Temporary password protection for compliance review (see `/docs/ENVIRONMENT-SECURITY.md`)
- ✅ **Card Component System** - Reusable, professional card styling across all pages
- ✅ **Form Component System** - Input, Textarea, Select components with validation
- ✅ **Navigation & Linking** - Complete navigation flow across all pages
- ✅ **Shared Advisor Data** - Centralized data source (`/src/lib/advisors.ts`)
- ✅ **Professional Design System** - Sage/cream color palette, clean typography
- ✅ **Responsive Layout** - Mobile-first design with professional styling
- ✅ **SEO Optimization** - Metadata, structured layout, semantic HTML
- ✅ **Vercel Analytics** - Privacy-focused website analytics integration

### Current Architecture
```
src/
├── app/
│   ├── layout.tsx           # Root layout with SEO and Vercel Analytics
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
│   ├── team/
│   │   ├── page.tsx        # Team page with detailed profiles
│   │   └── sections/       # Team-specific sections
│   │       ├── hero.tsx
│   │       ├── overview.tsx
│   │       ├── profiles.tsx
│   │       ├── credentials.tsx
│   │       └── contact.tsx
│   ├── contact/
│   │   ├── page.tsx        # Contact page with form and office info
│   │   └── sections/       # Contact-specific sections
│   │       ├── hero.tsx
│   │       ├── contact-form.tsx
│   │       ├── office-info.tsx
│   │       ├── team-direct.tsx
│   │       └── compliance.tsx
│   ├── auth/              # Temporary authentication for compliance review
│   │   └── login/
│   │       └── page.tsx   # Password-protected login page
│   └── api/               # API routes
│       └── auth/          # Authentication API endpoints
│           ├── login/
│           │   └── route.ts  # Login authentication handler
│           └── logout/
│               └── route.ts  # Logout handler
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── button.tsx      # 3 variants, professional styling
│   │   ├── card.tsx        # Main content card component
│   │   ├── container.tsx   # Responsive width management
│   │   ├── section.tsx     # Page section wrapper
│   │   ├── input.tsx       # Form input component with validation
│   │   ├── textarea.tsx    # Form textarea component
│   │   ├── select.tsx      # Form select dropdown component
│   │   ├── logout-button.tsx # Optional logout component for development
│   │   └── auth-debug.tsx  # Development-only auth debugging component
│   └── layout/             # Site structure
│       ├── header.tsx      # Navigation with complete site linking
│       └── footer.tsx      # Site footer
├── middleware.ts           # Authentication middleware (temporary)
└── lib/
    ├── advisors.ts         # SINGLE SOURCE OF TRUTH for advisor data
    └── utils.ts           # Utilities (cn, formatPhoneNumber)
```

Tech Stack: Next.js 14 + TypeScript + Tailwind CSS + React Hook Form + Zod + EmailJS
```

### Key Features Implemented

#### 🎨 **Design System**
- **Card Component**: Reusable component with sage borders, hover effects, flexible padding
- **Hero Sections**: Sophisticated, high net worth focused messaging with unique content per page
- **Color Palette**: Professional sage greens (#888965, #ACAC94) and cream tones (#E9EBE4)
- **Typography**: Clean Inter font system with professional hierarchy
- **Professional Styling**: Minimalist design with clean hover states and elegant layouts

#### 📄 **Content Pages**
- **Homepage**: Hero with risk-first philosophy, services overview, advisor introductions, company philosophy
- **Services Page**: Hero with service preview, complete service offerings, investment strategies, fee structure, compliance
- **Team Page**: Hero highlighting independent advisory approach, individual advisor profiles, credentials, FINRA compliance
- **Contact Page**: Streamlined hero optimized for conversion, professional contact form with lead qualification

#### 🔗 **Navigation & UX**
- **Hero Navigation**: "Our Services" button links to services page with responsive mobile design
- **Service Card Linking**: Portfolio Management and Financial Planning cards link to services core section
- **Advisor Linking**: Homepage advisor cards link to detailed Team page profiles
- **Contact Integration**: All CTAs across the site now link to the professional contact form
- **Cross-Page Navigation**: "Learn About Our Services" on team page links to services
- **Header Navigation**: All header links properly connect to respective pages
- **Scroll Offset**: Proper scroll positioning accounting for sticky header (scroll-mt-32)
- **Professional CTAs**: Clear calls-to-action throughout the site leading to contact form

#### 📞 **Contact Form Features**
- **Professional Lead Qualification**: Investment goals and portfolio size capture
- **Dual EmailJS Integration**: Internal notifications + auto-response emails
- **Form Validation**: React Hook Form + Zod with user-friendly error messages
- **FINRA-Compliant**: Privacy disclosures and appropriate disclaimers
- **Office Information**: Complete Reno address, hours, and direct contact methods
- **Team Direct Contact**: Individual advisor contact cards with clickable phone/email
- **Success States**: Professional confirmation experience with next steps
- **Mobile Optimized**: Responsive form design matching site aesthetic

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

### 1. Content Enhancement
- About page (company history, mission, values)
- Additional service detail pages
- Investment insights/blog system
- Client resources section

### 2. Advanced Features
- Newsletter signup integration
- Advanced SEO optimization with structured data
- Performance optimization
- Enhanced analytics and conversion tracking

### 3. Marketing Integration
- Social media integration
- Content management system
- Lead nurturing automation
- Advanced email marketing integration

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
  "emailjs-com": "^3.2.0",
  "@vercel/analytics": "^1.5.0"
}
```

### Contact Form Implementation ✅
- **React Hook Form**: Professional form state management and validation
- **Zod Schema Validation**: Type-safe form validation with user-friendly errors
- **EmailJS Integration**: Dual-email system (internal notification + auto-response)
- **Lead Qualification**: Investment goals and portfolio size capture
- **Form Components**: Reusable Input, Textarea, Select with consistent styling
- **Hydration-Safe IDs**: Using React's useId() hook for SSR compatibility

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

## Documentation

All project documentation is organized in the `/docs` directory:

- **[ARCHITECTURE.md](./docs/ARCHITECTURE.md)** - Technical architecture and implementation details
- **[SETUP.md](./docs/SETUP.md)** - Development setup and configuration guide
- **[EMAILJS-COMPLETE-GUIDE.md](./docs/EMAILJS-COMPLETE-GUIDE.md)** - Complete email system documentation
- **[CONVERSATION_STARTER.md](./docs/CONVERSATION_STARTER.md)** - AI conversation prompt for development
- **[PROJECT_COMPLETE.md](./docs/PROJECT_COMPLETE.md)** - Phase 2 completion summary
- **[PHASE1_COMPLETION.md](./docs/PHASE1_COMPLETION.md)** - Phase 1 completion archive

---
**Project Status**: ✅ Phase 2+ Complete - Enhanced Production Ready Website  
**Last Updated**: June 2025  
**Maintainer**: Curtis Shaffer  
**Latest Enhancement**: Sophisticated hero sections optimized for high net worth clientele
**Next Milestone**: Content Enhancement & Advanced Features
