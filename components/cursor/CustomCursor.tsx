"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const el = cursorRef.current;
    if (!el) return;

    let x = 0, y = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      el.style.transform = `translate(${x}px, ${y}px)`;
      if (!visible) setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!(t.closest("a") || t.closest("button") || t.dataset.hover));
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [visible]);

  const size = hovering ? 24 : 12;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s",
        willChange: "transform",
      }}
    >
      {/* Crosshair */}
      <div
        style={{
          position: "absolute",
          transform: "translate(-50%, -50%)",
          width: `${size}px`,
          height: `${size}px`,
          transition: "width 0.2s, height 0.2s",
        }}
      >
        {/* Horizontal bar */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background: "var(--accent)",
            transform: "translateY(-50%)",
          }}
        />
        {/* Vertical bar */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: "var(--accent)",
            transform: "translateX(-50%)",
          }}
        />
        {/* Center dot */}
        {!hovering && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "3px",
              height: "3px",
              borderRadius: "50%",
              background: "var(--accent)",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        {/* Corner marks on hover */}
        {hovering && (
          <>
            {[
              { top: 0, left: 0 },
              { top: 0, right: 0 },
              { bottom: 0, left: 0 },
              { bottom: 0, right: 0 },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  ...pos,
                  width: "4px",
                  height: "4px",
                  borderTop: i < 2 ? "1px solid var(--accent)" : undefined,
                  borderBottom: i >= 2 ? "1px solid var(--accent)" : undefined,
                  borderLeft: i % 2 === 0 ? "1px solid var(--accent)" : undefined,
                  borderRight: i % 2 === 1 ? "1px solid var(--accent)" : undefined,
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
