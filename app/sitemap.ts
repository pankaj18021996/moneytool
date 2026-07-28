import { MetadataRoute } from "next";

const BASE = "https://www.moneytool.in";
const NOW = new Date();
const WEEKLY = "weekly" as const;
const MONTHLY = "monthly" as const;
const YEARLY = "yearly" as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage
    { url: BASE, lastModified: NOW, changeFrequency: WEEKLY, priority: 1 },

    // Core category pages
    { url: `${BASE}/calculators`, lastModified: NOW, changeFrequency: WEEKLY, priority: 0.96 },
    { url: `${BASE}/business-tools`, lastModified: NOW, changeFrequency: WEEKLY, priority: 0.9 },

    // High-priority loan calculators
    { url: `${BASE}/emi-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.95 },
    { url: `${BASE}/home-loan-calculator`,     lastModified: NOW, changeFrequency: WEEKLY, priority: 0.92 },
    { url: `${BASE}/car-loan-calculator`,      lastModified: NOW, changeFrequency: WEEKLY, priority: 0.88 },
    { url: `${BASE}/personal-loan-calculator`, lastModified: NOW, changeFrequency: WEEKLY, priority: 0.88 },
    { url: `${BASE}/education-loan-calculator`,lastModified: NOW, changeFrequency: WEEKLY, priority: 0.85 },

    // High-priority investment calculators
    { url: `${BASE}/sip-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.95 },
    { url: `${BASE}/ppf-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.90 },
    { url: `${BASE}/fd-calculator`,            lastModified: NOW, changeFrequency: WEEKLY, priority: 0.90 },
    { url: `${BASE}/rd-calculator`,            lastModified: NOW, changeFrequency: WEEKLY, priority: 0.85 },
    { url: `${BASE}/swp-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.82 },
    { url: `${BASE}/retirement-calculator`,    lastModified: NOW, changeFrequency: WEEKLY, priority: 0.85 },

    // High-priority tax & salary calculators
    { url: `${BASE}/income-tax-calculator`,    lastModified: NOW, changeFrequency: WEEKLY, priority: 0.95 },
    { url: `${BASE}/salary-calculator`,        lastModified: NOW, changeFrequency: WEEKLY, priority: 0.90 },
    { url: `${BASE}/gst-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.90 },
    { url: `${BASE}/hra-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.85 },
    { url: `${BASE}/tds-calculator`,           lastModified: NOW, changeFrequency: WEEKLY, priority: 0.85 },

    // Business tools
    { url: `${BASE}/invoice-builder`,          lastModified: NOW, changeFrequency: WEEKLY, priority: 0.88 },
    { url: `${BASE}/payslip-generator`,        lastModified: NOW, changeFrequency: WEEKLY, priority: 0.85 },

    // Blog
    { url: `${BASE}/blog`,                     lastModified: NOW, changeFrequency: WEEKLY, priority: 0.78 },
    { url: `${BASE}/blog/home-loan-vs-renting`,       lastModified: new Date("2026-05-15"), changeFrequency: MONTHLY, priority: 0.72 },
    { url: `${BASE}/blog/sip-vs-fd`,                  lastModified: new Date("2026-05-10"), changeFrequency: MONTHLY, priority: 0.72 },
    { url: `${BASE}/blog/emi-calculation-guide`,       lastModified: new Date("2026-05-05"), changeFrequency: MONTHLY, priority: 0.72 },
    { url: `${BASE}/blog/tax-savings-strategies`,      lastModified: new Date("2026-04-28"), changeFrequency: MONTHLY, priority: 0.72 },
    { url: `${BASE}/blog/ppf-complete-guide`,          lastModified: new Date("2026-04-20"), changeFrequency: MONTHLY, priority: 0.70 },
    { url: `${BASE}/blog/gst-compliance-guide`,        lastModified: new Date("2026-04-12"), changeFrequency: MONTHLY, priority: 0.70 },
    { url: `${BASE}/blog/reduce-home-loan-emi`,        lastModified: new Date("2026-04-15"), changeFrequency: MONTHLY, priority: 0.70 },
    { url: `${BASE}/blog/cibil-score-loan`,            lastModified: new Date("2026-04-05"), changeFrequency: MONTHLY, priority: 0.70 },
    { url: `${BASE}/blog/fixed-vs-floating-rate`,      lastModified: new Date("2026-03-25"), changeFrequency: MONTHLY, priority: 0.68 },

    // Static pages
    { url: `${BASE}/about`,          lastModified: NOW, changeFrequency: MONTHLY, priority: 0.70 },
    { url: `${BASE}/contact`,        lastModified: NOW, changeFrequency: MONTHLY, priority: 0.55 },
    { url: `${BASE}/privacy-policy`, lastModified: NOW, changeFrequency: YEARLY,  priority: 0.40 },
    { url: `${BASE}/terms-of-service`,lastModified: NOW, changeFrequency: YEARLY, priority: 0.40 },
    { url: `${BASE}/disclaimer`,     lastModified: NOW, changeFrequency: YEARLY,  priority: 0.40 },
  ];
}
