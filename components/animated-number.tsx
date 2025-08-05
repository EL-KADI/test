"use client"

import { useState, useEffect, useRef } from "react"

interface AnimatedNumberProps {
  value: number | string
  suffix?: string
  className?: string
}

export default function AnimatedNumber({ value, suffix = "", className }: AnimatedNumberProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)
  const startValueRef = useRef(0)

  useEffect(() => {
    const targetNum = typeof value === "string" ? Number.parseFloat(value) : value
    if (isNaN(targetNum)) {
      setCurrentValue(0) // Handle non-numeric values gracefully
      return
    }

    startValueRef.current = currentValue // Store the value from which to start animating
    startTimeRef.current = null // Reset start time for new animation

    const duration = 1500 // milliseconds for animation (Increased for slower animation)

    const animate = (currentTime: DOMHighResTimeStamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
      }

      const progress = (currentTime - startTimeRef.current) / duration
      const animatedValue = startValueRef.current + (targetNum - startValueRef.current) * Math.min(progress, 1)

      setCurrentValue(Math.round(animatedValue)) // Round to nearest integer

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate)
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [value]) // Re-run animation when the target value changes

  return (
    <span className={className}>
      {currentValue}
      {suffix}
    </span>
  )
}
