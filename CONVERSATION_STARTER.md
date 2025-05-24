# Quick Start Conversation Prompt

Copy this prompt to start new conversations:

---

## CVS Capital Website Project

**Context:** Building a marketing website for CVS Capital investment advisory firm (Curtis & Creg Shaffer, under Institute for Wealth Management RIA).

**Current Status:** ✅ Phase 1 Complete - Production Ready
- ✅ **Homepage** complete with Card components and advisor linking
- ✅ **Services Page** complete with investment strategies and fee transparency 
- ✅ **Team Page** complete with detailed profiles and FINRA compliance
- ✅ **Card Component System** implemented across all pages
- ✅ **Professional Design** - sage/cream palette, no unnecessary animations
- ✅ **Navigation & Linking** - homepage advisor cards link to team profiles
- ✅ **Shared advisor data** in `/src/lib/advisors.ts` (SINGLE SOURCE OF TRUTH)
- ✅ **Next.js 14 + TypeScript + Tailwind** with custom design system

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
- **Components**: `/src/components/ui/` (Card, Button, Section, etc.)
- **Pages**: `/src/app/page.tsx`, `/src/app/services/page.tsx`, `/src/app/team/page.tsx`

**Advisor Contact Info:**
- **Creg V Shaffer**: cregs@instituteforwealth.com, (775) 315-7594, CRD# 5070346
- **Curtis L Shaffer**: curtis.shaffer@instituteforwealth.com, (775) 309-7092, CRD# 5601482

**Next Priority:** Contact form implementation (dependencies already installed)

**Ready Features:**
- Form validation: React Hook Form + Zod
- Email integration: EmailJS configured
- Form components: Need to create Input, Textarea, Select for contact form

**Commands:**
```bash
cd "C:\Users\curti\OneDrive\Desktop\WebDev\cvs-capital-website"
npm run dev
```

**Instructions:** Please review README.md, ARCHITECTURE.md, and SETUP.md for full technical details before starting. Don't start coding until we discuss what to work on next.

---

**Completed Work Summary:**
- ✅ Complete professional website with 3 main pages
- ✅ FINRA-compliant content and structure  
- ✅ Reusable Card component system for consistency
- ✅ Professional sage/cream design system
- ✅ Responsive layout with proper navigation
- ✅ SEO optimization and accessibility
- ✅ Ready for contact form implementation

**Project Status**: Production ready for Phase 1, ready for Phase 2 (contact form)
