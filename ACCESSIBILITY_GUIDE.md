# Accessibility & Image Alt Text Guide

## Overview
This guide helps maintain and improve accessibility and alt text implementation across MoneyTool.

## Implemented Components

### 1. AccessibleImage Component
Located at: `app/components/AccessibleImage.tsx`

Use this component for any images that need alt text:
```tsx
import { AccessibleImage, EmojiIcon, IconWithAltText } from "@/app/components/AccessibleImage";

// For regular images
<AccessibleImage 
  src="/image.png" 
  alt="Description of the image"
  width={400}
  height={300}
/>

// For emoji icons with accessibility
<EmojiIcon emoji="📈" label="Investment growth chart" />

// For inline emoji with alt text
<IconWithAltText emoji="💰" alt="Money icon" />
```

### 2. Breadcrumb Component
Located at: `app/components/Breadcrumb.tsx`

Provides both visual breadcrumb navigation and schema markup:
```tsx
import { BreadcrumbNavigation, BreadcrumbSchema } from "@/app/components/Breadcrumb";

const breadcrumbs = [
  { name: "Home", url: "https://www.moneytool.in" },
  { name: "Calculators", url: "https://www.moneytool.in/emi-calculator" },
  { name: "EMI Calculator", url: "https://www.moneytool.in/emi-calculator" },
];

<BreadcrumbSchema items={breadcrumbs} />
<BreadcrumbNavigation items={breadcrumbs} />
```

### 3. FAQ Schema Component
Located at: `app/components/FAQSchema.tsx`

Adds FAQ structured data for search results:
```tsx
import FAQSchema from "@/app/components/FAQSchema";

const faqs = [
  { question: "What is EMI?", answer: "EMI stands for..." },
  { question: "How is EMI calculated?", answer: "EMI = P × r..." },
];

<FAQSchema items={faqs} />
```

### 4. Related Tools Component
Located at: `app/components/RelatedTools.tsx`

Adds contextual internal links for better navigation:
```tsx
import RelatedTools from "@/app/components/RelatedTools";

const tools = [
  {
    title: "SIP Calculator",
    description: "Calculate mutual fund SIP returns",
    icon: "📈",
    href: "/sip-calculator"
  },
];

<RelatedTools tools={tools} />
```

## Accessibility Standards Implemented

### Semantic HTML
- ✅ Proper heading hierarchy (h1, h2, h3, etc.)
- ✅ Semantic navigation elements
- ✅ ARIA labels on interactive elements
- ✅ Role attributes where needed

### Color & Contrast
- ✅ Dark theme with sufficient contrast ratios
- ✅ Green (#10b981) accent color for important CTAs
- ✅ Gray gradients for secondary content

### Keyboard Navigation
- ✅ All links and buttons are keyboard accessible
- ✅ Focus states visible on hover/focus
- ✅ Tab order is logical and intuitive

### Screen Reader Support
- ✅ aria-labels on logo/brand elements
- ✅ aria-hidden on decorative elements
- ✅ Role="img" on emoji icons with aria-label
- ✅ Descriptive link text (avoid generic "click here")

## Image Alt Text Strategy

### For Emoji Icons
Since emoji are used throughout the site instead of images, use the `EmojiIcon` component with appropriate labels.

Example emoji alt text:
- 📈 → "Investment growth"
- 💳 → "Loan calculator"
- 💰 → "Salary calculator"
- 🏠 → "Home loan"
- 🚗 → "Car loan"
- 🏦 → "Bank and finance"
- 🧾 → "Invoice and billing"

### For Future Real Images
Any image files should follow these guidelines:
```tsx
<img 
  src="/path/to/image.png"
  alt="Descriptive text about the image (50-125 characters)"
  title="Tooltip text if needed"
/>
```

## Metadata & Open Graph Images

All calculator pages now have OG images configured:
- Path: `https://www.moneytool.in/og-images/[calculator-name].png`
- Size: 1200x630px
- Format: PNG with transparency support

Create these images and upload to `/public/og-images/` directory:
- `og-image.png` (homepage)
- `emi-calculator.png`
- `sip-calculator.png`
- `fd-calculator.png`
- `ppf-calculator.png`
- `rd-calculator.png`
- `swp-calculator.png`
- `income-tax-calculator.png`
- `salary-calculator.png`
- `gst-calculator.png`
- `hra-calculator.png`
- `tds-calculator.png`
- `home-loan-calculator.png`
- `car-loan-calculator.png`

## Breadcrumb & Structured Data

All calculator pages should now include:
1. ✅ Breadcrumb schema (BreadcrumbList)
2. ✅ FAQ schema (FAQPage)
3. ✅ Canonical URLs
4. ✅ OG meta tags
5. ✅ Twitter Card meta tags

## Testing Checklist

- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Test keyboard-only navigation
- [ ] Verify all links have descriptive text
- [ ] Check color contrast with accessibility validator
- [ ] Test on mobile devices
- [ ] Verify OG images appear on social shares
- [ ] Validate structured data with Google's tool
- [ ] Check breadcrumb visibility and schema

## Resources

- Google Search Console: https://search.google.com/search-console
- Schema.org Validator: https://schema.org/
- WAVE Accessibility: https://wave.webaim.org/
- Google Rich Results Test: https://search.google.com/test/rich-results
