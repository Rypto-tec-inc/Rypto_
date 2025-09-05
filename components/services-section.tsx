"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Palette, Code, Cable as Cube, Smartphone, Globe, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { useParallaxTransform } from "@/hooks/use-parallax"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const headerTransform = useParallaxTransform(0.1)
  const cardsTransform = useParallaxTransform(0.2)

  const services = [
    {
      icon: Palette,
      title: "Animation & Motion Graphics",
      description:
        "Bringing stories to life through stunning 2D and 3D animations, motion graphics, and visual effects.",
    },
    {
      icon: Cube,
      title: "3D Design & Modeling",
      description:
        "Creating immersive 3D models, environments, and architectural visualizations with precision and creativity.",
    },
    {
      icon: Smartphone,
      title: "AR/VR Development",
      description:
        "Building cutting-edge augmented and virtual reality experiences for various platforms and industries.",
    },
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Crafting responsive, modern websites and web applications with the latest technologies and frameworks.",
    },
    {
      icon: Code,
      title: "Software Development",
      description:
        "Developing custom software solutions, mobile apps, and enterprise applications tailored to your needs.",
    },
    {
      icon: Zap,
      title: "3D Fashion Design",
      description: "Revolutionary 3D fashion design and virtual clothing creation for the digital fashion industry.",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-800 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transform: headerTransform }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            We offer comprehensive creative technology solutions to bring your digital visions to reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ transform: cardsTransform }}>
          {services.map((service, index) => (
            <Card
              key={index}
              className={`water-effect glass-effect border-border hover:border-accent/50 transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:shadow-accent/10 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
