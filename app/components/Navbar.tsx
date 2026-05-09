"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(10,10,10,0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid #27272a",
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 64,
      }}>
        <Link href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "#10b981", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 16, color: "#fff",
          }}>M</div>
          <span style={{ fontWeight: 700, fontSize: 18, color: "#f4f4f5" }}>
            MoneyTool
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {[
            { href: "/emi-calculator", label: "Calculators" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{
              color: "#a1a1aa", fontSize: 14, fontWeight: 500,
              textDecoration: "none", transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f4f4f5")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a1a1aa")}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/emi-calculator" style={{
            background: "#10b981", color: "#fff",
            fontSize: 13, fontWeight: 600,
            padding: "8px 18px", borderRadius: 8,
            textDecoration: "none",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#059669")}
            onMouseLeave={e => (e.currentTarget.style.background = "#10b981")}
          >
            Start Calculating →
          </Link>
        </div>
      </div>
    </nav>
  );
}