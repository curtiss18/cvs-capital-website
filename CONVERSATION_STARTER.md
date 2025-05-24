# Quick Start Conversation Prompt

Copy this prompt to start new conversations:

---

## CVS Capital Website Project

**Context:** Professional marketing website for CVS Capital investment advisory firm (Curtis & Creg Shaffer, under Institute for Wealth Management RIA).

**Current Status:** ✅ Phase 2 Complete - Full Production Ready
- ✅ **Homepage** complete with Card components and advisor linking
- ✅ **Services Page** complete with investment strategies and fee transparency 
- ✅ **Team Page** complete with detailed profiles and FINRA compliance
- ✅ **Contact Page** complete with lead qualification form and dual EmailJS integration
- ✅ **Card Component System** implemented across all pages
- ✅ **Form Component System** - Input, Textarea, Select with validation
- ✅ **Professional Design** - sage/cream palette, responsive mobile optimization
- ✅ **Complete Navigation** - all pages linked with contact form integration
- ✅ **Vercel Analytics** - privacy-focused website analytics integrated
- ✅ **Shared advisor data** in `/src/lib/advisors.ts` (SINGLE SOURCE OF TRUTH)
- ✅ **Next.js 14 + TypeScript + Tailwind** with custom design system
- ✅ **Modular Section Architecture** - All pages split into co-located section components

**Project Path:** `C:\Users\curti\OneDrive\Desktop\WebDev\cvs-capital-website`

**Critical Rules:**
- NO TESTIMONIALS (FINRA compliance)
- Rep as PM Model ONLY (CVS Capital operates exclusively as Rep as Portfolio Manager)
- Creg V Shaffer featured first (Senior Adviser)
- Curtis initials = "CLS" 
- All content needs CCO approval
- Form ADV Part 2A compliant

**Key Files:**
- **Advisor data**: `/src/lib/advisors.ts` (Creg V Shaffer, Curtis L Shaffer)
- **Colors**: `/tailwind.config.ts` (sage/cream custom palette)
- **Components**: `/src/components/ui/` (Card, Button, Section, Input, Textarea, Select)
- **Pages**: `/src/app/page.tsx`, `/src/app/services/page.tsx`, `/src/app/team/page.tsx`, `/src/app/contact/page.tsx`
- **Contact Form**: `/src/app/contact/sections/contact-form.tsx` (React Hook Form + Zod + EmailJS)

**Office Information:**
- **Address**: 10775 Double R Blvd, Reno, NV 89521
- **Hours**: Monday-Friday, 8:00 AM - 5:00 PM (Pacific Time)

**Advisor Contact Info:**
- **Creg V Shaffer**: cregs@instituteforwealth.com, (775) 315-7594, CRD# 5070346
- **Curtis L Shaffer**: curtis.shaffer@instituteforwealth.com, (775) 309-7092, CRD# 5601482

**Contact Form Details:**
- **Lead Qualification**: Investment goals and portfolio size capture
- **Dual EmailJS**: Internal notification (curtis.shaffer@instituteforwealth.com) + auto-response
- **Validation**: React Hook Form + Zod with user-friendly error messages
- **FINRA Compliant**: Privacy disclosures and investment advisory disclaimers

**Commands:**
```bash
cd "C:\Users\curti\OneDrive\Desktop\WebDev\cvs-capital-website"
npm run dev          # Development server
npm run build        # Production build test
```

**Documentation:**
- **README.md** - Complete project overview and features
- **ARCHITECTURE.md** - Technical implementation details
- **SETUP.md** - Development setup and current status
- **EMAILJS_SETUP.md** - Contact form email configuration guide
- **PROJECT_COMPLETE.md** - Full completion summary

**Instructions:** Review documentation files for technical details. All core features are complete and production-ready.

---

**Completed Work Summary:**
- ✅ Complete professional website with 4 main pages using modular section architecture
- ✅ FINRA-compliant content and structure across all pages
- ✅ Seamless navigation flow: all CTAs lead to appropriate pages and contact form
- ✅ Professional contact form with lead qualification and dual EmailJS integration
- ✅ Reusable Card and Form component systems for consistency
- ✅ Professional sage/cream design system with responsive mobile optimization
- ✅ Clean, maintainable codebase with sections co-located by page
- ✅ SEO optimization, accessibility, and Vercel Analytics integration
- ✅ Hydration-safe form components using React's useId() hook

**Current Project Status:** ✅ Phase 2 Complete - Full Production Ready (All Core Features Implemented)

**Next Phase Opportunities:** Content enhancement, advanced features, marketing integration

**Ready for:** Lead generation, client inquiries, and business growth
