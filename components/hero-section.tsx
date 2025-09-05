"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useParallaxTransform } from "@/hooks/use-parallax"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Parallax transforms for different elements
  const backgroundTransform = useParallaxTransform(0.3)
  const textTransform = useParallaxTransform(0.1)
  const largeTextTransform = useParallaxTransform(0.5)
  const statsTransform = useParallaxTransform(0.2)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div 
        className="absolute inset-0 bg-background" 
        style={{ transform: backgroundTransform }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12" style={{ transform: textTransform }}>
            <div className="space-y-1">
              <div className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">
                Creative Technology
              </div>
              <div className="space-y-0">
                <h1 className="text-7xl md:text-9xl font-bold leading-[0.85] tracking-tight text-foreground">RYPTO</h1>
                <div className="text-4xl md:text-6xl font-light text-muted-foreground leading-none">STUDIO</div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-8 text-sm font-mono">
                <div>
                  <div className="text-muted-foreground mb-2">Services</div>
                  <div className="space-y-1 text-xs">
                    <div>Animation & Motion</div>
                    <div>3D Design & Fashion</div>
                    <div>AR/VR Experiences</div>
                    <div>Web Development</div>
                  </div>
                </div>
                <div>
                  <div className="text-muted-foreground mb-2">Founded</div>
                  <div className="text-xs">2023 / Liberia</div>
                </div>
              </div>

              <p className="text-base text-muted-foreground max-w-md leading-relaxed font-light">
                We create cutting-edge digital experiences through animation, 3D design, and immersive technologies for
                forward-thinking brands.
              </p>
            </div>

            <div className="flex gap-6">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-sm font-medium">
                Start Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 px-8 py-4 text-sm font-medium bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                View Work
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Large background letters */}
              <div 
                className="text-[20rem] md:text-[24rem] font-bold text-white/5 leading-none select-none tracking-tighter"
                style={{ transform: largeTextTransform }}
              >
                RY
              </div>

              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-8">
                <div className="text-center space-y-4">
                  <div className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">Innovation</div>
                  <div className="w-12 h-px bg-white/20" />
                </div>

                <div className="text-center space-y-2">
                  <div className="text-sm font-mono text-muted-foreground">Est.</div>
                  <div className="text-6xl font-bold text-white">2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="mt-32 pt-12 border-t border-white/10"
          style={{ transform: statsTransform }}
        >
          <div className="grid grid-cols-4 gap-12 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Projects</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">0</div>
              <div className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Partners</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Innovation</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-xs font-mono text-muted-foreground tracking-wider uppercase">Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
