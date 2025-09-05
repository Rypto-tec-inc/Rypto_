"use client"

import { useEffect, useRef, useState } from "react"
import * as anime from "animejs"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true

            anime({
              targets: { count: 0 },
              count: end,
              duration,
              easing: "easeOutExpo",
              update: (anim) => {
                setCount(Math.floor(anim.animatables[0].target.count))
              },
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div ref={counterRef} className="text-3xl font-bold text-accent">
      {count}
      {suffix}
    </div>
  )
}
