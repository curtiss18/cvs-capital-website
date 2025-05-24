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
- **Contact Page**: Professional form with lead qualification and dual EmailJS integration
- **Card System**: Reusable components across all pages
- **Form System**: Input, Textarea, Select components with validation
- **Navigation**: Complete site navigation with contact form integration
- **Design**: Sage/cream palette, professional styling throughout
- **Analytics**: Vercel Analytics integration for privacy-focused tracking

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
│   ├── layout.tsx         # Root layout with SEO + Vercel Analytics
│   ├── page.tsx          # Homepage
│   ├── sections/         # Homepage-specific sections
│   │   ├── hero.tsx
│   │   ├── services.tsx
│   │   ├── about.tsx      # Clickable advisor cards
│   │   └── philosophy.tsx
│   ├── services/
│   │   ├── page.tsx      # Services page
│   │   └── sections/     # Services-specific sections
│   │       ├── hero.tsx
│   │       ├── core-services.tsx
│   │       ├── strategies.tsx
│   │       ├── process.tsx
│   │       ├── fees.tsx
│   │       ├── compliance.tsx
│   │       └── cta.tsx
│   ├── team/
│   │   ├── page.tsx      # Team page
│   │   └── sections/     # Team-specific sections
│   │       ├── hero.tsx
│   │       ├── overview.tsx
│   │       ├── profiles.tsx
│   │       ├── credentials.tsx
│   │       └── contact.tsx
│   └── contact/
│       ├── page.tsx      # Contact page with form
│       └── sections/     # Contact-specific sections
│           ├── hero.tsx
│           ├── contact-form.tsx
│           ├── office-info.tsx
│           ├── team-direct.tsx
│           └── compliance.tsx
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── button.tsx    # 3 variants, professional styling
│   │   ├── card.tsx      # Main content card component
│   │   ├── container.tsx # Responsive width management
│   │   ├── section.tsx   # Page section wrapper
│   │   ├── input.tsx     # Form input with validation
│   │   ├── textarea.tsx  # Form textarea component
│   │   └── select.tsx    # Form select dropdown
│   ├── layout/           # Site structure
│   │   ├── header.tsx    # Navigation with complete site linking
│   │   └── footer.tsx    # Site footer
└── lib/
    ├── advisors.ts       # SINGLE SOURCE OF TRUTH for advisor data
    └── utils.ts         # Utilities (cn, formatPhoneNumber)
```

## Ready for Next Phase ✅

### Contact Form Complete ✅
**Fully Implemented:**
- React Hook Form + Zod validation
- EmailJS dual-email integration (notification + auto-response)
- Lead qualification (investment goals, portfolio size)
- Professional form components (Input, Textarea, Select)
- Office information (Reno address, business hours)
- Team direct contact cards
- FINRA compliance disclaimers

### Future Enhancements
- About page (company history, mission, values)
- Additional service detail pages
- Investment insights/blog system
- Newsletter integration
- Advanced analytics and conversion tracking
- Enhanced SEO with structured data

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
**Setup Status**: ✅ Complete - All Core Features Implemented  
**Current Phase**: Phase 2 Complete (Contact Form + Navigation)  
**Next Phase**: Content Enhancement & Advanced Features  
**Last Updated**: December 2024
