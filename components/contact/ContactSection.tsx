"use client";

import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "swapnildibyo@gmail.com",
    href: "mailto:swapnildibyo@gmail.com",
  },
  {
    label: "GitHub",
    value: "SwapnilBarua",
    href: "https://github.com/SwapnilBarua", // ← update: your GitHub username
  },
  {
    label: "LinkedIn",
    value: "swapnil-barua",
    href: "https://www.linkedin.com/in/swapnil-barua2002", // ← update: your LinkedIn slug
  },
  {
    label: "Instagram",
    value: "@swapxll",
    href: "https://instagram.com/swapxll",
  },
  {
    label: "Photography",
    value: "swaap.jpg",
    href: "https://swaap-jpg-v2.vercel.app/",
  },
];

export default function ContactSection() {
  return (
    <section
      id="connect"
      style={{
        padding: "140px 48px 100px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      {/* Section label */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mono"
        style={{
          display: "block",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "48px",
          textAlign: "center",
        }}
      >
        03 — Connect
      </motion.span>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="serif"
        style={{
          fontSize: "clamp(56px, 9vw, 140px)",
          fontWeight: 700,
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          color: "var(--text)",
          marginBottom: "80px",
          textAlign: "center",
        }}
      >
        Let&apos;s
        <br />
        <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Talk.</em>
      </motion.h2>

      {/* Links */}
      <div>
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              padding: "24px 0",
              borderBottom: "1px solid var(--rule-thin)",
              textDecoration: "none",
              color: "inherit",
              transition: "padding-left 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.paddingLeft = "12px";
              const label = el.querySelector<HTMLElement>("[data-lbl]");
              const val = el.querySelector<HTMLElement>("[data-val]");
              if (label) label.style.color = "var(--accent)";
              if (val) val.style.color = "var(--text)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.paddingLeft = "0";
              const label = el.querySelector<HTMLElement>("[data-lbl]");
              const val = el.querySelector<HTMLElement>("[data-val]");
              if (label) label.style.color = "var(--text-2)";
              if (val) val.style.color = "var(--text-2)";
            }}
          >
            <span
              data-lbl
              className="mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                minWidth: "120px",
                transition: "color 0.15s",
              }}
            >
              {link.label}
            </span>
            <span
              data-val
              className="serif"
              style={{
                fontSize: "clamp(18px, 2.5vw, 36px)",
                fontWeight: 500,
                fontStyle: "italic",
                color: "var(--text-2)",
                transition: "color 0.15s",
                flex: 1,
                textAlign: "center",
              }}
            >
              {link.value}
            </span>
            <span
              className="mono"
              style={{
                fontSize: "14px",
                color: "var(--border)",
                transition: "color 0.15s",
              }}
            >
              ↗
            </span>
          </motion.a>
        ))}
      </div>

      {/* Footer row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "80px",
          paddingTop: "32px",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <span
          className="serif"
          style={{
            fontSize: "13px",
            fontWeight: 500,
            letterSpacing: "0.1em",
            color: "var(--border)",
            textTransform: "uppercase",
          }}
        >
          Swapnil Barua © 2025
        </span>
        <span
          className="mono"
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "var(--border)",
            textTransform: "uppercase",
          }}
        >
          Built with Next.js
        </span>
      </div>
    </section>
  );
}
