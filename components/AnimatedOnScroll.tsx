import { motion, TargetAndTransition, Transition, VariantLabels } from "framer-motion";

import { ReactNode } from "react";

interface AnimatedOnScrollProps {
  children: ReactNode;
  initial?: boolean | TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  transition?: Transition;
  once?: boolean;
  className?: string;
}

const AnimatedOnScroll = ({
  children,
  initial = { opacity: 0, y: 100 },
  whileInView = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  once = true,
  className = "",
}: AnimatedOnScrollProps) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={transition}
      viewport={{ once }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedOnScroll;
