"use client";
import Link from "next/link";

interface RelatedTool {
  title: string;
  description: string;
  icon: string;
  href: string;
}

interface RelatedToolsProps {
  tools: RelatedTool[];
}

export default function RelatedTools({ tools }: RelatedToolsProps) {
  return (
    <section style={{ marginTop: 60, marginBottom: 48 }}>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#f4f4f5", marginBottom: 8 }}>
          Related Tools
        </h2>
        <p style={{ color: "#a1a1aa", fontSize: 14 }}>
          Explore related financial calculators to plan your finances better
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            style={{
              background: "#111113",
              border: "1px solid #27272a",
              borderRadius: 12,
              padding: 20,
              textDecoration: "none",
              display: "block",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 12 }}>{tool.icon}</div>
            <h3 style={{ fontSize: 15, fontWeight: 600, color: "#f4f4f5", marginBottom: 8 }}>
              {tool.title}
            </h3>
            <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.5 }}>
              {tool.description}
            </p>
            <div style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: "#10b981" }}>
              Try Now →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}