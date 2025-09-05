"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  className = "",
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              element.classList.add("revealed")
            }, delay)
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.1 },
    )

    // Set initial transform based on direction
    const getInitialTransform = () => {
      switch (direction) {
        case "up":
          return "translateY(30px)"
        case "down":
          return "translateY(-30px)"
        case "left":
          return "translateX(30px)"
        case "right":
          return "translateX(-30px)"
        default:
          return "translateY(30px)"
      }
    }

    // Set initial state
    element.style.opacity = "0"
    element.style.transform = getInitialTransform()
    element.style.transition = `all ${duration}ms ease-out`

    observer.observe(element)

    return () => observer.disconnect()
  }, [direction, delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
