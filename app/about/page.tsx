"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Lightbulb } from "lucide-react"
import { useEffect, useRef } from "react"

export default function AboutPage() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px)`
      }
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.2}px)`
      }
      if (statsRef.current) {
        statsRef.current.style.transform = `translateY(${scrolled * 0.1}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden parallax-container">
      <Navigation />

      <section className="pt-32 pb-20 px-4 relative">
        <div ref={heroRef} className="max-w-7xl mx-auto parallax-element">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-mono text-muted-foreground tracking-wider">ABOUT</div>
                <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tight">
                  RYPTO
                  <br />
                  <span className="text-muted-foreground/50">STUDIO</span>
                </h1>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-mono text-muted-foreground">Founded:</div>
                <div className="space-y-1 text-sm font-mono">
                  <div>2023</div>
                  <div>Liberia</div>
                  <div>Victor Coleman</div>
                  <div>Creative Tech</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-9xl font-bold text-white/10 select-none">AB</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div ref={parallaxRef} className="max-w-7xl mx-auto parallax-element">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Founder</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Victor Edet Coleman founded Rypto Studio in 2023 with a vision to revolutionize the creative
                    technology landscape in Liberia and beyond.
                  </p>
                  <p>
                    His commitment to excellence and forward-thinking approach has positioned Rypto Studio as an
                    emerging leader in animation, 3D design, AR/VR development, and software solutions.
                  </p>
                </div>
              </div>
              <Button variant="outline" className="bg-transparent">
                Connect with Victor
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "Committed to delivering award-winning creative solutions that exceed expectations.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation",
                  description: "Pushing boundaries with cutting-edge technology and creative problem-solving.",
                },
              ].map((item, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div ref={statsRef} className="max-w-7xl mx-auto parallax-element">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Company Stats</h2>
            <p className="text-lg text-muted-foreground">Our journey so far</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2023", label: "Founded" },
              { value: "0", label: "Projects" },
              { value: "0", label: "Clients" },
              { value: "1", label: "Team Member" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
