"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/calculators", label: "Calculators" },
    { href: "/business-tools", label: "Business Tools" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(10,10,10,0.95)",
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
        {/* Logo */}
        <Link href="/" style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          textDecoration: "none",
        }} aria-label="MoneyTool Home">
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "#10b981", display: "flex",
            alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: 16, color: "#fff",
          }} aria-hidden="true">M</div>
          <span style={{ fontWeight: 700, fontSize: 18, color: "#f4f4f5" }}>
            MoneyTool
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{
              color: isActive(item.href) ? "#10b981" : "#a1a1aa",
              fontSize: 14, fontWeight: isActive(item.href) ? 600 : 500,
              textDecoration: "none",
              transition: "color 0.2s",
              borderBottom: isActive(item.href) ? "2px solid #10b981" : "none",
              paddingBottom: isActive(item.href) ? 2 : 0,
            }}
              onMouseEnter={e => !isActive(item.href) && (e.currentTarget.style.color = "#f4f4f5")}
              onMouseLeave={e => !isActive(item.href) && (e.currentTarget.style.color = "#a1a1aa")}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button — removed invalid media query from style prop */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          style={{
            background: "none",
            border: "none",
            color: "#f4f4f5",
            fontSize: 24,
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          display: "block",
          borderTop: "1px solid #27272a",
          backgroundColor: "#111113",
          padding: "16px 24px",
        }}>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} style={{
              display: "block",
              color: isActive(item.href) ? "#10b981" : "#a1a1aa",
              fontSize: 14, fontWeight: isActive(item.href) ? 600 : 500,
              textDecoration: "none",
              padding: "12px 0",
              borderLeft: isActive(item.href) ? "3px solid #10b981" : "none",
              paddingLeft: isActive(item.href) ? 12 : 0,
            }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}