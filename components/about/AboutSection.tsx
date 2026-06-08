"use client";

import { motion } from "framer-motion";

const stack = [
  "Next.js", "React", "TypeScript", "Three.js",
  "React Native", "Node.js", "Express", "PostgreSQL",
  "Docker", "Redis", "Expo", "Tailwind CSS",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "140px 48px",
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
          marginBottom: "64px",
          textAlign: "center",
        }}
      >
        02 — About
      </motion.span>

      {/* Main grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        {/* Left — pull quote + bio */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="serif"
            style={{
              fontSize: "clamp(40px, 5.5vw, 80px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "var(--text)",
              marginBottom: "40px",
              textAlign: "center",
            }}
          >
            Developer.
            <br />
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Photographer.</em>
            <br />
            Builder.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text)" }}>
              I&apos;m Swapnil Barua — a full-stack developer based in Sydney, Australia.
              I build fast, thoughtful software across the stack: web apps, mobile, APIs,
              and everything in between.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-2)" }}>
              My background in photography shapes how I approach code — composition,
              hierarchy, and the detail that makes something feel right rather than just
              functional.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.75, color: "var(--text-2)" }}>
              Currently open to full-stack, frontend-heavy, or mobile opportunities.
              I work well in small teams that move fast and ship real things.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "24px",
              alignItems: "center",
            }}
          >
            <a
              href="#connect"
              className="mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--bg)",
                textDecoration: "none",
                background: "var(--accent)",
                padding: "10px 20px",
                display: "inline-block",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Get in Touch
            </a>
            <a
              href="https://swaap.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-2)",
                textDecoration: "none",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--accent)";
                el.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "var(--text-2)";
                el.style.borderColor = "var(--border)";
              }}
            >
              Photography ↗
            </a>
          </motion.div>
        </div>

        {/* Right — stack + decorative number */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Stack label */}
          <div
            style={{
              borderTop: "1px solid var(--rule)",
              paddingTop: "24px",
              marginBottom: "24px",
            }}
          >
            <span
              className="mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-2)",
              }}
            >
              Stack
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {stack.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--rule-thin)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text)";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-space-grotesk)",
                    fontSize: "14px",
                    color: "inherit",
                    transition: "inherit",
                  }}
                >
                  {skill}
                </span>
                <span
                  className="mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: "var(--border)",
                    transition: "color 0.15s",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
