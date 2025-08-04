"use client"

import { motion, type TargetAndTransition, type Transition, type VariantLabels } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedOnLoadProps {
  children: ReactNode
  initial?: boolean | TargetAndTransition | VariantLabels
  animate?: TargetAndTransition | VariantLabels
  transition?: Transition
  className?: string
}

const AnimatedOnLoad = ({
  children,
  initial = { opacity: 0, y: 100 },
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  className = "",
}: AnimatedOnLoadProps) => {
  return (
    <motion.div initial={initial} animate={animate} transition={transition} className={className}>
      {children}
    </motion.div>
  )
}

export default AnimatedOnLoad
