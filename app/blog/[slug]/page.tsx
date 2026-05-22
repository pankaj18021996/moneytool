import { Metadata } from "next";
import Link from "next/link";

const BLOG_POSTS: Record<string, any> = {
  "home-loan-vs-renting": {
    title: "Home Loan vs Renting: Which is Better in 2026?",
    date: "2026-05-15",
    category: "Loans",
    content: "Compare the financial advantages of buying a home with a loan versus renting. Understand EMI, tax benefits, and long-term wealth creation. When deciding between buying a home with a loan or continuing to rent, the decision isn't just financial — it's personal. However, let's look at the numbers.",
  },
  "sip-vs-fd": {
    title: "SIP vs FD: Which Investment is Better for Your Goals?",
    date: "2026-05-10",
    category: "Investments",
    content: "Understand the differences between Systematic Investment Plans (SIP) and Fixed Deposits (FD). Learn which suits your financial goals. Both SIP and FD are popular investment options in India, but they work very differently.",
  },
  "emi-calculation-guide": {
    title: "Complete Guide to EMI Calculation: Home Loans & More",
    date: "2026-05-05",
    category: "Loans",
    content: "Learn how EMI is calculated, factors affecting it, and how to reduce your EMI burden with smart financial planning. EMI — Equated Monthly Installment — is a fixed amount you pay every month toward your loan.",
  },
  "tax-savings-strategies": {
    title: "Top 10 Tax Saving Strategies for Indian Salaried Employees",
    date: "2026-04-28",
    category: "Taxes",
    content: "Discover effective tax-saving investments and strategies to reduce your income tax liability under Section 80C, 80D, and more. Paying taxes is unavoidable, but overpaying is.",
  },
  "ppf-complete-guide": {
    title: "PPF Investment Guide: Complete Information for Indians",
    date: "2026-04-20",
    category: "Investments",
    content: "Everything you need to know about Public Provident Fund - eligibility, interest rates, tax benefits, and how to maximize returns. PPF is one of the safest long-term investments in India.",
  },
  "gst-compliance-guide": {
    title: "GST Compliance Guide for Small Business Owners",
    date: "2026-04-12",
    category: "Business",
    content: "Understand GST filing, calculation, compliance requirements, and how to use the GST calculator to avoid errors. GST compliance can seem complex, but it's essential for all registered businesses.",
  },
  "reduce-home-loan-emi": {
    title: "How to Reduce Your Home Loan EMI: 7 Proven Strategies",
    date: "2026-04-15",
    category: "Loans",
    content: "Discover effective strategies to reduce your home loan EMI and save interest. Your home loan EMI is likely one of your biggest monthly expenses.",
  },
  "cibil-score-loan": {
    title: "What is CIBIL Score and How It Affects Loan Approval?",
    date: "2026-04-05",
    category: "Loans",
    content: "Understand CIBIL score, how it's calculated, and its impact on loan approval. Your CIBIL score is crucial when applying for loans.",
  },
  "fixed-vs-floating-rate": {
    title: "Fixed vs Floating Interest Rate: Which Should You Choose?",
    date: "2026-03-25",
    category: "Loans",
    content: "Compare fixed and floating interest rates for loans and investments. When taking a loan, one of your key decisions is whether to choose a fixed or floating interest rate.",
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return {
      title: "Not Found",
      description: "Blog post not found",
    };
  }

  return {
    title: `${post.title} | MoneyTool Blog`,
    description: post.content.substring(0, 160),
    alternates: {
      canonical: `https://www.moneytool.in/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: "article",
      url: `https://www.moneytool.in/blog/${params.slug}`,
      images: [
        {
          url: "https://www.moneytool.in/og-image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px", color: "#f4f4f5" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800" }}>Post Not Found</h1>
        <Link href="/blog" style={{ color: "#10b981", textDecoration: "none" }}>
          ← Back to Blog
        </Link>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "60px 24px", color: "#f4f4f5" }}>
      <Link href="/blog" style={{ color: "#10b981", textDecoration: "none", display: "inline-block", marginBottom: "24px" }}>
        ← Back to Blog
      </Link>

      <article>
        <header style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "12px", background: "rgba(16,185,129,0.1)", color: "#10b981", padding: "4px 12px", borderRadius: "4px" }}>
              {post.category}
            </span>
            <span style={{ fontSize: "12px", color: "#71717a" }}>
              {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
          <h1 style={{ fontSize: "36px", fontWeight: "800", lineHeight: "1.2", marginBottom: "16px" }}>
            {post.title}
          </h1>
        </header>

        <div style={{ fontSize: "15px", lineHeight: "1.8", color: "#a1a1aa" }}>
          <p style={{ marginBottom: "20px" }}>{post.content}</p>

          <section style={{ background: "#111113", border: "1px solid #27272a", borderRadius: "12px", padding: "24px", marginTop: "40px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#f4f4f5", marginBottom: "12px" }}>
              Related Tools
            </h2>
            <p style={{ color: "#a1a1aa", marginBottom: "16px" }}>
              Use our free calculators to plan your finances:
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { href: "/emi-calculator", label: "EMI Calculator" },
                { href: "/sip-calculator", label: "SIP Calculator" },
                { href: "/fd-calculator", label: "FD Calculator" },
                { href: "/salary-calculator", label: "Salary Calculator" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  style={{
                    background: "#18181b",
                    border: "1px solid #27272a",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    textDecoration: "none",
                    color: "#a1a1aa",
                    fontSize: "14px",
                  }}
                >
                  {tool.label} →
                </Link>
              ))}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
