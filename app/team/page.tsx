"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github } from "lucide-react"
import { useEffect, useRef } from "react"

export default function TeamPage() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`
      }
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const teamMembers = [
    {
      id: 1,
      name: "Victor Edet Coleman",
      role: "Founder & Creative Director",
      bio: "Visionary leader with expertise in 3D design, AR/VR development, and creative technology. Founded Rypto Studio in 2023 to push the boundaries of digital creativity.",
      image: "/creative-director-headshot.png",
      skills: ["3D Design", "AR/VR", "Creative Direction", "Software Development"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navigation />

      <section className="pt-32 pb-20 px-4 relative">
        <div ref={heroRef} className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-mono text-muted-foreground tracking-wider">TEAM</div>
                <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tight">
                  CREATIVE
                  <br />
                  <span className="text-muted-foreground/50">MINDS</span>
                </h1>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-mono text-muted-foreground">Size:</div>
                <div className="space-y-1 text-sm font-mono">
                  <div>80PX</div>
                  <div>50PX</div>
                  <div>18PX</div>
                  <div>14PX</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-9xl font-bold text-white/10 select-none">RS</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div ref={parallaxRef} className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              The creative minds behind Rypto Studio's innovative digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-white/20 transition-all duration-500 group"
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-center space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-muted-foreground font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs bg-transparent">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center gap-2 pt-4">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-24">
            <Card className="bg-card/30 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
              <CardContent className="p-12 text-center">
                <h3 className="text-3xl font-bold mb-6">Join Our Vision</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                  We're building the future of creative technology. Join us in shaping innovative digital experiences.
                </p>
                <Button variant="outline" className="bg-transparent">
                  View Opportunities
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
