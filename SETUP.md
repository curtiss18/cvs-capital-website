# Development Setup Guide

## Quick Start
1. Navigate to project: `cd "C:\Users\curti\OneDrive\Desktop\WebDev\cvs-capital-website"`
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open: `http://localhost:3000`

## Essential Commands
```bash
npm run dev          # Development server
npm run build        # Production build (test before deployment)
npm run lint         # Check code quality
npm run type-check   # TypeScript validation
```

## Key Development Notes
- **All advisor data** is in `/src/lib/advisors.ts` - NEVER duplicate this data
- **Color palette** is in `/tailwind.config.ts` - use sage/cream theme
- **Mobile-first** design - test on all screen sizes
- **TypeScript strict** - all components must be properly typed
- **No console.log** in production code

## Before Making Changes
1. Read README.md for business context
2. Check ARCHITECTURE.md for technical details
3. Test build: `npm run build`
4. Remember FINRA compliance rules (no testimonials)

## Component Development Pattern
1. Create TypeScript interface for props
2. Build mobile-first responsive design  
3. Add to appropriate directory (`/ui/` for reusable, `/sections/` for page-specific)
4. Test across breakpoints
5. Validate with `npm run build`

## File Structure
```
src/
├── app/                 # Pages (Next.js App Router)
├── components/ui/       # Reusable components
├── components/layout/   # Header, Footer
├── components/sections/ # Page sections
└── lib/advisors.ts     # Advisor data (SINGLE SOURCE)
```

*Ready for development!*