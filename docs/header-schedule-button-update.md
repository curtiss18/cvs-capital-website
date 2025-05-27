# Header Update Summary

## Changes Made

Updated the "Schedule Consultation" button in the header to navigate to the contact page.

### Files Modified
- `/src/components/layout/header.tsx`

### Specific Changes

1. **Desktop CTA Button** (lines 67-72)
   - Wrapped the Button component in a Link component
   - Added `href="/contact"` to navigate to the contact page
   - Maintained the `hidden sm:inline-flex` class for responsive behavior

2. **Mobile Menu Button** (lines 98-102)
   - Wrapped the Button component in a Link component
   - Added `href="/contact"` to navigate to the contact page
   - Added `onClick={() => setIsMenuOpen(false)}` to close the mobile menu on click
   - Maintained the full-width styling for mobile

### Result
Both "Schedule Consultation" buttons (desktop and mobile) now:
- Navigate to the `/contact` page when clicked
- Maintain all existing styling and responsive behavior
- Close the mobile menu when clicked (mobile version only)

### Testing
- Build completed successfully
- No TypeScript errors
- All functionality preserved
