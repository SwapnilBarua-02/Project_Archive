"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--rule-thin)",
      }}
    >
      {/* ── Index row (always visible) ── */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          background: "none",
          border: "none",
          padding: "28px 0",
          display: "grid",
          gridTemplateColumns: "48px 1fr auto auto 24px",
          alignItems: "center",
          gap: "24px",
          textAlign: "left",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "var(--bg-alt)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "none")
        }
      >
        {/* Number */}
        <span
          className="mono"
          style={{
            fontSize: "10px",
            letterSpacing: "0.16em",
            color: "var(--accent)",
          }}
        >
          {project.num}
        </span>

        {/* Name */}
        <span
          className="serif"
          style={{
            fontSize: "clamp(28px, 3.5vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1,
            color: "var(--text)",
          }}
        >
          {project.name}
        </span>

        {/* Type */}
        <span
          className="mono"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-2)",
            whiteSpace: "nowrap",
          }}
        >
          {project.type}
        </span>

        {/* Year */}
        <span
          className="mono"
          style={{
            fontSize: "10px",
            letterSpacing: "0.12em",
            color: "var(--border)",
          }}
        >
          {project.year}
        </span>

        {/* Arrow */}
        <span
          style={{
            color: "var(--accent)",
            fontSize: "14px",
            lineHeight: 1,
            display: "inline-block",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease",
          }}
        >
          +
        </span>
      </button>

      {/* ── Expanded detail ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                paddingBottom: "40px",
                paddingLeft: "72px",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "48px",
                alignItems: "start",
              }}
            >
              {/* Left */}
              <div>
                <p
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.75,
                    color: "var(--text-2)",
                    marginBottom: "24px",
                    maxWidth: "60ch",
                  }}
                >
                  {project.description}
                </p>

                {/* Tagline in red italic */}
                <p
                  className="serif"
                  style={{
                    fontSize: "18px",
                    fontStyle: "italic",
                    color: "var(--accent)",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{project.tagline}&rdquo;
                </p>

                {/* Tech */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px 0",
                  }}
                >
                  {project.tech.map((t, i) => (
                    <span
                      key={t}
                      className="mono"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-2)",
                      }}
                    >
                      {t}
                      {i < project.tech.length - 1 && (
                        <span
                          style={{
                            margin: "0 10px",
                            color: "var(--rule-thin)",
                          }}
                        >
                          /
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — links */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  alignItems: "flex-end",
                  paddingTop: "4px",
                }}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-2)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      borderBottom: "1px solid var(--rule-thin)",
                      paddingBottom: "4px",
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
                      el.style.borderColor = "var(--rule-thin)";
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--text-2)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      borderBottom: "1px solid var(--rule-thin)",
                      paddingBottom: "4px",
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
                      el.style.borderColor = "var(--rule-thin)";
                    }}
                  >
                    Live Site ↗
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
