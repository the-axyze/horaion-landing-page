import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { DURATION_BASE, EASE_OUT_EXPO } from "../lib/motion";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "span";
};

const Reveal = ({
  children,
  delay = 0,
  y = 24,
  duration = DURATION_BASE,
  className,
  as = "div",
}: RevealProps) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
