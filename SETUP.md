# Development Setup Guide

## Quick Start
1. Navigate to project: `cd "C:\Users\curti\OneDrive\Desktop\WebDev\cvs-capital-website"`
2. Install dependencies: `npm install` (if not already done)
3. Start dev server: `npm run dev`
4. Open: `http://localhost:3000`

## Essential Commands
```bash
npm run dev          # Development server with hot reload
npm run build        # Production build (ALWAYS test before pushing)
npm run lint         # ESLint code quality check
npm run type-check   # TypeScript validation (strict mode)
```

## Current Project Status ✅
- **Homepage**: Hero, Services, About (with advisor linking), Philosophy
- **Services Page**: Complete with investment strategies, fees, compliance
- **Team Page**: Individual profiles, credentials, FINRA compliance
- **Card System**: Reusable components across all pages
- **Navigation**: Professional header with services link
- **Design**: Sage/cream palette, no unnecessary animations

## Key Development Notes

### ⚠️ Critical Rules
- **All advisor data** is in `/src/lib/advisors.ts` - NEVER duplicate this data anywhere
- **NO TESTIMONIALS** anywhere on the site (FINRA compliance)
- **Rep as PM Model** - CVS Capital operates exclusively as Rep as Portfolio Manager
- **Color palette** is in `/tailwind.config.ts` - use sage/cream theme consistently
- **All content** needs CCO approval before going live

### 🎨 Design System
- **Card Component**: Use `/src/components/ui/card.tsx` for all content cards
- **Sage Colors**: sage-200 for borders, sage-400 for buttons, sage-600 for backgrounds
- **Professional Styling**: No hover translations, clean design, minimal animations
- **Mobile-First**: Always design for mobile, then scale up

### 📝 Content Guidelines
- **Professional Tone**: Financial services appropriate language
- **FINRA Compliant**: No marketing claims without compliance review
- **Advisor Info**: Always pull from `/src/lib/advisors.ts`
- **Fee Disclosure**: Maximum 2.00% clearly stated on Services page

## Development Workflow

### Before Making Changes
1. **Read README.md** for business context and current status
2. **Check ARCHITECTURE.md** for technical implementation details
3. **Review current pages** to understand existing patterns
4. **Test build**: `npm run build` to ensure no breaking changes

### Component Development Pattern
1. **TypeScript Interface**: Create proper interfaces for all props
2. **Mobile-First Design**: Start with mobile layout, scale up
3. **Use Card Component**: For any content cards, use existing Card component
4. **Proper Directory**: `/ui/` for reusable, `/sections/` for page-specific
5. **Test Everything**: Check responsiveness, TypeScript, build success

### Adding New Features
1. **Follow existing patterns**: Look at Services/Team pages for examples
2. **Use existing components**: Card, Button, Section, Container
3. **Maintain consistency**: Same padding, colors, typography
4. **Accessibility**: Proper semantic HTML and ARIA attributes

## Current File Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with SEO
│   ├── page.tsx          # Homepage
│   ├── sections/         # Homepage-specific sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx      # Clickable advisor cards
│   │   └── philosophy.tsx
│   ├── services/
│   │   └── page.tsx      # Complete services with strategies
│   └── team/
│       └── page.tsx      # Team profiles with linking
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx    # 3 variants, professional styling
│   │   ├── card.tsx      # Main content card component
│   │   ├── container.tsx # Responsive width management
│   │   └── section.tsx   # Page section wrapper
│   ├── layout/           # Site structure
│   │   ├── header.tsx    # Navigation with services link
│   │   └── footer.tsx    # Site footer
└── lib/
    ├── advisors.ts       # SINGLE SOURCE OF TRUTH for advisor data
    └── utils.ts         # Utilities (cn, formatPhoneNumber)
```

## Ready for Next Phase

### Contact Form Implementation (Phase 2)
**Dependencies Already Installed:**
- `react-hook-form`: Form state management
- `zod`: Schema validation  
- `emailjs-com`: Email service integration

**Form Components Needed:**
- Input component for text fields
- Textarea component for message fields  
- Select component for dropdown fields

### Future Enhancements
- About page (company history)
- Contact page with form
- Legal/compliance pages
- Newsletter integration
- Blog system for market insights

## Testing & Quality Assurance

### Before Committing
```bash
npm run build        # Must pass without errors
npm run lint         # Must pass ESLint checks  
npm run type-check   # Must pass TypeScript validation
```

### Manual Testing Checklist
- [ ] Test all pages on mobile, tablet, desktop
- [ ] Verify advisor linking from homepage to team page
- [ ] Check all navigation links work correctly
- [ ] Confirm responsive design works properly
- [ ] Validate content accuracy and compliance

---
**Setup Status**: ✅ Complete - Ready for development  
**Current Phase**: Phase 1 Complete (Production Ready)  
**Next Phase**: Contact Form Implementation  
**Last Updated**: December 2024
