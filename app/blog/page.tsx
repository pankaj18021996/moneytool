"use client";
import { Metadata } from "next";
import Link from "next/link";

const BLOG_POSTS = [
  {
    id: "home-loan-vs-renting",
    title: "Home Loan vs Renting: Which is Better in 2026?",
    excerpt:
      "Compare the financial advantages of buying a home with a loan versus renting. Understand EMI, tax benefits, and long-term wealth creation.",
    date: "2026-05-15",
    category: "Loans",
    slug: "home-loan-vs-renting",
  },
  {
    id: "sip-vs-fd",
    title: "SIP vs FD: Which Investment is Better for Your Goals?",
    excerpt:
      "Understand the differences between Systematic Investment Plans (SIP) and Fixed Deposits (FD). Learn which suits your financial goals.",
    date: "2026-05-10",
    category: "Investments",
    slug: "sip-vs-fd",
  },
  {
    id: "emi-calculation-guide",
    title: "Complete Guide to EMI Calculation: Home Loans & More",
    excerpt:
      "Learn how EMI is calculated, factors affecting it, and how to reduce your EMI burden with smart financial planning.",
    date: "2026-05-05",
    category: "Loans",
    slug: "emi-calculation-guide",
  },
  {
    id: "tax-savings-strategies",
    title: "Top 10 Tax Saving Strategies for Indian Salaried Employees",
    excerpt:
      "Discover effective tax-saving investments and strategies to reduce your income tax liability under Section 80C, 80D, and more.",
    date: "2026-04-28",
    category: "Taxes",
    slug: "tax-savings-strategies",
  },
  {
    id: "ppf-complete-guide",
    title: "PPF Investment Guide: Complete Information for Indians",
    excerpt:
      "Everything you need to know about Public Provident Fund - eligibility, interest rates, tax benefits, and how to maximize returns.",
    date: "2026-04-20",
    category: "Investments",
    slug: "ppf-complete-guide",
  },
  {
    id: "gst-compliance-guide",
    title: "GST Compliance Guide for Small Business Owners",
    excerpt:
      "Understand GST filing, calculation, compliance requirements, and how to use the GST calculator to avoid errors.",
    date: "2026-04-12",
    category: "Business",
    slug: "gst-compliance-guide",
  },
];

export default function Blog() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 24px",
        color: "#f4f4f5",
      }}
    >
      <div style={{ marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "16px",
            color: "#f4f4f5",
          }}
        >
          Financial Blog
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#a1a1aa",
            marginBottom: "24px",
            lineHeight: "1.6",
          }}
        >
          Expert guides and articles on financial planning, investments, loans, taxes, and personal finance for Indians. Learn strategies to save money, invest wisely, and achieve your financial goals.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "24px",
        }}
      >
        {BLOG_POSTS.map((post) => (
          <article
            key={post.id}
            style={{
              background: "#111113",
              border: "1px solid #27272a",
              borderRadius: "12px",
              padding: "24px",
              transition: "border-color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#10b981";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#27272a";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "12px",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  background: "rgba(16,185,129,0.1)",
                  color: "#10b981",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontWeight: "500",
                }}
              >
                {post.category}
              </span>
              <span style={{ fontSize: "12px", color: "#52525b" }}>
                {new Date(post.date).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
            </div>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "12px",
                color: "#f4f4f5",
                lineHeight: "1.4",
              }}
            >
              {post.title}
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#a1a1aa",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              {post.excerpt}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              style={{
                fontSize: "14px",
                color: "#10b981",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>

      <div
        style={{
          marginTop: "60px",
          padding: "40px 24px",
          background: "#111113",
          borderRadius: "12px",
          border: "1px solid #27272a",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            fontWeight: "600",
            marginBottom: "12px",
            color: "#f4f4f5",
          }}
        >
          Get Financial Updates
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#a1a1aa",
            marginBottom: "24px",
          }}
        >
          Subscribe to our newsletter for expert financial tips and tool updates delivered to your inbox.
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: "10px 16px",
              background: "#0a0a0a",
              border: "1px solid #27272a",
              borderRadius: "8px",
              color: "#f4f4f5",
              fontSize: "14px",
              width: "100%",
              maxWidth: "300px",
            }}
          />
          <button
            style={{
              padding: "10px 24px",
              background: "#10b981",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </main>
  );
}
