"use client";

import { motion, useReducedMotion } from "motion/react";

export default function PrintReveal({
  children,
  delay = 0.2,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      transition={{ duration: 1.1, delay, ease: [0.65, 0, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function StampThump({
  children,
  delay = 1.5,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.6, rotate: -14 }}
      animate={{ opacity: 1, scale: 1, rotate: -8 }}
      transition={{
        delay,
        type: "spring",
        stiffness: 320,
        damping: 16,
      }}
    >
      {children}
    </motion.div>
  );
}
