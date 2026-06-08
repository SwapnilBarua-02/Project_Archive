"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    const w = el.clientWidth || window.innerWidth;
    const h = el.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, w / h, 1, 2000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    el.appendChild(renderer.domElement);

    const getColor = () =>
      document.documentElement.getAttribute("data-theme") === "dark"
        ? new THREE.Color(0xf2e8d5)
        : new THREE.Color(0x180f06);

    // Particles
    const COUNT = 160;
    const pos = new Float32Array(COUNT * 3);
    const vel = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 900;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 700;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 80;
      vel[i * 3]     = (Math.random() - 0.5) * 0.2;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.13;
      vel[i * 3 + 2] = 0;
    }

    const ptGeo = new THREE.BufferGeometry();
    const ptPosAttr = new THREE.BufferAttribute(pos, 3);
    ptGeo.setAttribute("position", ptPosAttr);

    const ptMat = new THREE.PointsMaterial({
      color: getColor(),
      size: 1.8,
      sizeAttenuation: false,
      transparent: true,
      opacity: 0.42,
    });
    scene.add(new THREE.Points(ptGeo, ptMat));

    // Connection lines
    const MAX_SEGS = 2400;
    const linePos = new Float32Array(MAX_SEGS * 6);
    const lineGeo = new THREE.BufferGeometry();
    const linePosAttr = new THREE.BufferAttribute(linePos, 3);
    linePosAttr.setUsage(THREE.DynamicDrawUsage);
    lineGeo.setAttribute("position", linePosAttr);
    lineGeo.setDrawRange(0, 0);

    const lineMat = new THREE.LineBasicMaterial({
      color: getColor(),
      transparent: true,
      opacity: 0.08,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    // Mouse
    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    // Resize
    const onResize = () => {
      const nw = el.clientWidth;
      const nh = el.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener("resize", onResize, { passive: true });

    // Theme observer — recolor on dark/light switch
    const observer = new MutationObserver(() => {
      const c = getColor();
      ptMat.color.copy(c);
      lineMat.color.copy(c);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // Animation loop
    const LINK_DIST = 135;
    let rafId: number;

    const tick = () => {
      rafId = requestAnimationFrame(tick);

      for (let i = 0; i < COUNT; i++) {
        pos[i * 3]     += vel[i * 3];
        pos[i * 3 + 1] += vel[i * 3 + 1];

        if (pos[i * 3] >  450) pos[i * 3] = -450;
        if (pos[i * 3] < -450) pos[i * 3] =  450;
        if (pos[i * 3 + 1] >  350) pos[i * 3 + 1] = -350;
        if (pos[i * 3 + 1] < -350) pos[i * 3 + 1] =  350;
      }
      ptPosAttr.needsUpdate = true;

      let seg = 0;
      for (let a = 0; a < COUNT && seg < MAX_SEGS; a++) {
        for (let b = a + 1; b < COUNT && seg < MAX_SEGS; b++) {
          const dx = pos[a * 3] - pos[b * 3];
          const dy = pos[a * 3 + 1] - pos[b * 3 + 1];
          if (dx * dx + dy * dy < LINK_DIST * LINK_DIST) {
            linePos[seg * 6]     = pos[a * 3];
            linePos[seg * 6 + 1] = pos[a * 3 + 1];
            linePos[seg * 6 + 2] = pos[a * 3 + 2];
            linePos[seg * 6 + 3] = pos[b * 3];
            linePos[seg * 6 + 4] = pos[b * 3 + 1];
            linePos[seg * 6 + 5] = pos[b * 3 + 2];
            seg++;
          }
        }
      }
      lineGeo.setDrawRange(0, seg * 2);
      linePosAttr.needsUpdate = true;

      // Subtle camera parallax with mouse
      camera.position.x += (mx * 22 - camera.position.x) * 0.03;
      camera.position.y += (my * 16 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
      ptGeo.dispose();
      lineGeo.dispose();
      ptMat.dispose();
      lineMat.dispose();
      renderer.dispose();
      if (el.contains(renderer.domElement)) {
        el.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
