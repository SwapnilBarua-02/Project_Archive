"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Only show on real pointer (mouse) devices — not touch screens
    setIsTouch(!window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const el = dotRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
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
  }, [isTouch, visible]);

  if (isTouch) return null;

  return (
    <>
      <style>{`
        @keyframes cursor-glow {
          0%, 100% { box-shadow: 0 0 4px 2px rgba(196,18,48,0.6), 0 0 10px 4px rgba(196,18,48,0.25); }
          50%       { box-shadow: 0 0 6px 3px rgba(196,18,48,0.9), 0 0 16px 7px rgba(196,18,48,0.35); }
        }
      `}</style>
      <div
        ref={dotRef}
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
        <div
          style={{
            position: "absolute",
            transform: "translate(-50%, -50%)",
            width: hovering ? "7px" : "5px",
            height: hovering ? "7px" : "5px",
            borderRadius: "50%",
            background: "#C41230",
            transition: "width 0.15s ease, height 0.15s ease",
            animation: hovering ? "cursor-glow 1.2s ease-in-out infinite" : "none",
            boxShadow: hovering ? undefined : "0 0 3px 1px rgba(196,18,48,0.4)",
          }}
        />
      </div>
    </>
  );
}
