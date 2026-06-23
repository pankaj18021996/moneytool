"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen width — no Tailwind needed
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
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
          flexShrink: 0,
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

        {/* ✅ Desktop nav — only shown on screens >= 768px */}
        {!isMobile && (
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{
                color: isActive(item.href) ? "#10b981" : "#a1a1aa",
                fontSize: 14,
                fontWeight: isActive(item.href) ? 600 : 500,
                textDecoration: "none",
                borderBottom: isActive(item.href) ? "2px solid #10b981" : "2px solid transparent",
                paddingBottom: 2,
                transition: "color 0.2s",
              }}>
                {item.label}
              </Link>
            ))}
          </div>
        )}

        {/* ✅ Hamburger — only shown on mobile */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "1px solid #27272a",
              borderRadius: 8,
              color: "#f4f4f5",
              fontSize: 20,
              cursor: "pointer",
              padding: "6px 10px",
              lineHeight: 1,
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {/* ✅ Mobile dropdown menu */}
      {isMobile && mobileMenuOpen && (
        <div style={{
          borderTop: "1px solid #27272a",
          backgroundColor: "#111113",
          padding: "8px 24px 16px",
        }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "block",
                color: isActive(item.href) ? "#10b981" : "#a1a1aa",
                fontSize: 15,
                fontWeight: isActive(item.href) ? 600 : 500,
                textDecoration: "none",
                padding: "12px 0",
                borderBottom: "1px solid #27272a",
              }}
            >
              {isActive(item.href) ? "→ " : ""}{item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
