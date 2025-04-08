// File: src/components/Parallax.tsx
"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Parallax({ children, offset = 50 }: { children: React.ReactNode; offset?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
