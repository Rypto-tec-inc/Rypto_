"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useEffect, useRef } from "react"

export default function ContactPage() {
  const parallaxRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.1}px)`
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
                <div className="text-sm font-mono text-muted-foreground tracking-wider">CONTACT</div>
                <h1 className="text-7xl md:text-8xl font-bold leading-none tracking-tight">
                  GET IN
                  <br />
                  <span className="text-muted-foreground/50">TOUCH</span>
                </h1>
              </div>
              <div className="space-y-4">
                <div className="text-sm font-mono text-muted-foreground">Response Time:</div>
                <div className="space-y-1 text-sm font-mono">
                  <div>24 Hours</div>
                  <div>Business Days</div>
                  <div>GMT Timezone</div>
                  <div>Professional</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-9xl font-bold text-white/10 select-none">CT</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div ref={parallaxRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:lg:px-8 parallax-element">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-muted-foreground">hello@rypto.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p className="text-muted-foreground">+231 XXX XXXX</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Location</h3>
                          <p className="text-muted-foreground">Liberia, West Africa</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Business Hours</h3>
                          <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM GMT</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Ready to Start?</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    Have a project in mind? We'd love to hear about it. Get in touch and let's discuss how we can bring
                    your creative vision to life.
                  </p>
                  <Button variant="outline" className="bg-transparent border-foreground/20 hover:bg-foreground/10">
                    Schedule a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
