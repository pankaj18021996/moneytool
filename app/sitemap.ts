import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.moneytool.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Investment Calculators
    {
      url: "https://www.moneytool.in/sip-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/ppf-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/fd-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/rd-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/swp-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Loan Calculators
    {
      url: "https://www.moneytool.in/emi-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://www.moneytool.in/home-loan-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/car-loan-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Tax Calculators
    {
      url: "https://www.moneytool.in/income-tax-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: "https://www.moneytool.in/gst-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/salary-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.moneytool.in/hra-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://www.moneytool.in/tds-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Planning Calculators
    {
      url: "https://www.moneytool.in/retirement-calculator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    // Business Tools
    {
      url: "https://www.moneytool.in/invoice-builder",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.moneytool.in/payslip-generator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Pages
    {
      url: "https://www.moneytool.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.moneytool.in/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}