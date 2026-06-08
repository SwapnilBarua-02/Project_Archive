"use client";

import { motion } from "framer-motion";
import HeroCanvas from "./HeroCanvas";

const spring = [0.16, 1, 0.3, 1] as [number, number, number, number];
const ease   = [0.4,  0, 0.2, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        padding: "0 48px",
        paddingTop: "120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <HeroCanvas />

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease }}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "24px",
          borderBottom: "1px solid var(--rule-thin)",
        }}
      >
        <span className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-2)" }}>
          Vol. I — Portfolio 2025
        </span>
        <span className="mono" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>
          Sydney, Australia ·
        </span>
      </motion.div>

      {/* ── Centred main content ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          paddingTop: "48px",
          textAlign: "center",
        }}
      >
        {/* Eyebrow — rule · label · rule */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "14px" }}
        >
          <div style={{ width: "28px", height: "1px", background: "var(--accent)" }} />
          <span className="mono" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--accent)" }}>
            Creative Developer
          </span>
          <div style={{ width: "28px", height: "1px", background: "var(--accent)" }} />
        </motion.div>

        {/* Line 1 — "A" */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.38, ease: spring }}
            className="serif"
            style={{ fontSize: "clamp(42px, 6.5vw, 100px)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--text)", paddingBottom: "4px" }}
          >
            A
          </motion.div>
        </div>

        {/* Line 2 — "collexion" italic + accent */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.48, ease: spring }}
            className="serif"
            style={{ fontSize: "clamp(42px, 6.5vw, 100px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1.0, letterSpacing: "-0.01em", color: "var(--accent)", paddingBottom: "4px" }}
          >
            collexion
          </motion.div>
        </div>

        {/* Line 3 — "of creative works." */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, delay: 0.58, ease: spring }}
            className="serif"
            style={{ fontSize: "clamp(42px, 6.5vw, 100px)", fontWeight: 600, lineHeight: 1.0, letterSpacing: "-0.02em", color: "var(--text)", paddingBottom: "4px" }}
          >
            of creative works.
          </motion.div>
        </div>

        {/* Byline — rule · name · rule */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.82, ease }}
          style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "14px" }}
        >
          <div style={{ width: "28px", height: "1px", background: "var(--border)" }} />
          <span className="mono" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-2)" }}>
            Swapnil Barua
          </span>
          <div style={{ width: "28px", height: "1px", background: "var(--border)" }} />
        </motion.div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.95, ease }}
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          borderTop: "1px solid var(--rule-thin)",
          paddingTop: "20px",
          paddingBottom: "48px",
          marginTop: "48px",
        }}
      >
        <a
          href="#work"
          className="mono"
          style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-2)", textDecoration: "none", display: "flex", alignItems: "center", gap: "12px", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")}
        >
          Selected Work
          <span style={{ fontSize: "16px", lineHeight: 1 }}>↓</span>
        </a>
      </motion.div>
    </section>
  );
}
