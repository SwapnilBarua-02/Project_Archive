"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/theme/ThemeToggle";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Connect", href: "#connect" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 160);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled || menuOpen ? "var(--bg)" : "transparent",
          transition: "background 0.3s",
        }}
      >
        {/* Row — masthead */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "14px clamp(20px, 5vw, 48px)",
          }}
        >
          <a
            href="#"
            className="serif"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--text)",
              textDecoration: "none",
            }}
          >
            Swapnil Barua
          </a>

          {/* Desktop links */}
          <div
            className="nav-desktop"
            style={{ display: "flex", alignItems: "center", gap: "40px" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--text-2)",
                  textDecoration: "none",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")
                }
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.65")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Résumé ↗
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile right side: theme toggle + hamburger */}
          <div
            className="nav-mobile"
            style={{ display: "flex", alignItems: "center", gap: "16px" }}
          >
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "none",
                padding: "4px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                color: "var(--text)",
              }}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "currentColor",
                  transformOrigin: "center",
                }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "currentColor",
                }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1.5px",
                  background: "currentColor",
                  transformOrigin: "center",
                }}
              />
            </button>
          </div>
        </div>

        {/* Rule */}
        <div
          style={{
            height: "1px",
            background: scrolled || menuOpen ? "var(--border)" : "var(--rule-thin)",
            margin: "0 clamp(20px, 5vw, 48px)",
            transition: "background 0.3s",
          }}
        />

        {/* Mobile dropdown menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
              style={{
                overflow: "hidden",
                background: "var(--bg)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px clamp(20px, 5vw, 48px) 24px",
                  gap: "20px",
                }}
              >
                {navLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={closeMenu}
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-2)",
                      textDecoration: "none",
                    }}
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    textDecoration: "none",
                  }}
                >
                  Résumé ↗
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <style>{`
        .nav-desktop { display: flex; }
        .nav-mobile  { display: none; }
        @media (max-width: 639px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
