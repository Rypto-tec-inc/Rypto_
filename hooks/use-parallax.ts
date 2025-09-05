"use client"

import { useEffect, useState } from 'react'

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return offset
}

export function useParallaxTransform(speed: number = 0.5) {
  const offset = useParallax(speed)
  return `translateY(${offset}px)`
}
