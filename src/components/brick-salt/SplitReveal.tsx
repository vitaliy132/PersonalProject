"use client";

import { motion, useReducedMotion } from "framer-motion";

type SplitRevealProps = {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
  delay?: number;
  id?: string;
};

export function SplitReveal({
  text,
  className = "",
  as: Tag = "h2",
  delay = 0,
  id,
}: SplitRevealProps) {
  const reduceMotion = useReducedMotion();
  const lines = text.split("\n");

  if (reduceMotion) {
    return (
      <Tag id={id} className={className}>
        {lines.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag id={id} className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="bs-mask-line">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 1.05,
              delay: delay + lineIndex * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
