// Server component — renders JSON-LD for WebApplication schema
// Usage: <WebAppSchema name="SIP Calculator" url="/sip-calculator" description="..." />

interface WebAppSchemaProps {
  name: string;
  url: string;
  description: string;
  features?: string[];
}

export default function WebAppSchema({ name, url, description, features = [] }: WebAppSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    url: `https://www.moneytool.in${url}`,
    description,
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    isAccessibleForFree: true,
    inLanguage: "en-IN",
    featureList: features.length > 0 ? features : undefined,
    provider: {
      "@type": "Organization",
      name: "MoneyTool",
      url: "https://www.moneytool.in",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Helper: inline breadcrumb JSON-LD (no extra component needed)
export function BreadcrumbLd({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
