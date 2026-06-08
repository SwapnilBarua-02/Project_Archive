"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);

  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setDark(!dark);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      style={{
        background: "none",
        border: "none",
        padding: 0,
        display: "flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-dm-mono)",
        fontSize: "10px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--text-2)",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "var(--text-2)")
      }
    >
      {/* Toggle pill */}
      <span
        style={{
          display: "inline-block",
          width: "28px",
          height: "14px",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          position: "relative",
          transition: "border-color 0.2s",
          flexShrink: 0,
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: dark ? "calc(100% - 12px)" : "2px",
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "var(--accent)",
            transition: "left 0.25s ease",
          }}
        />
      </span>
      {dark ? "Dark" : "Light"}
    </button>
  );
}
