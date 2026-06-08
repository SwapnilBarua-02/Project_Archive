"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function WorkSection() {
  return (
    <section
      id="work"
      style={{ padding: "140px 48px" }}
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div style={{ marginBottom: "8px", textAlign: "center" }}>
          <span
            className="mono"
            style={{
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            01 — Selected Work
          </span>
        </div>

        <h2
          className="serif"
          style={{
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: "-0.01em",
            color: "var(--text)",
            marginBottom: "0",
            textAlign: "center",
          }}
        >
          My Work
        </h2>
      </motion.div>

      {/* Full-width rule */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        style={{
          height: "1px",
          background: "var(--rule)",
          transformOrigin: "left",
          margin: "32px 0 0",
        }}
      />

      {/* Project accordion index */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </motion.div>
    </section>
  );
}
