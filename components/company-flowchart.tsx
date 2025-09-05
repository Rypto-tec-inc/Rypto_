"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowDown, ArrowRight, Building2, Palette, Code, Smartphone, Cable as Cube, Eye } from "lucide-react"

export function CompanyFlowchart() {
  const [activeNode, setActiveNode] = useState<string | null>(null)

  const nodes = {
    rypto: {
      title: "RYPTO",
      subtitle: "Parent Company",
      description: "Creative technology company founded in Liberia, 2023",
      icon: Building2,
      color: "bg-accent text-accent-foreground",
    },
    studio: {
      title: "RYPTO Studio",
      subtitle: "Creative Division",
      description: "Animation, 3D Design, AR/VR, and Digital Art",
      icon: Palette,
      color: "bg-secondary text-secondary-foreground",
    },
    dev: {
      title: "RYPTO Dev",
      subtitle: "Development Division",
      description: "Web Development, Mobile Apps, and Software Solutions",
      icon: Code,
      color: "bg-secondary text-secondary-foreground",
    },
    services: {
      animation: { title: "Animation", icon: Eye, description: "2D/3D Animation & Motion Graphics" },
      web: { title: "Web Development", icon: Code, description: "Modern Web Applications" },
      mobile: { title: "Mobile Apps", icon: Smartphone, description: "iOS & Android Development" },
      ar: { title: "AR/VR", icon: Cube, description: "Augmented & Virtual Reality" },
      design: { title: "3D Design", icon: Palette, description: "3D Modeling & Fashion Design" },
    },
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Company Structure</h2>
          <p className="text-muted-foreground text-lg">How RYPTO's divisions work together</p>
        </div>

        <div className="flex flex-col items-center space-y-8">
          {/* Parent Company */}
          <Card
            className={`w-80 cursor-pointer transition-all duration-300 hover:scale-105 dimensional-card glitch-border ${
              activeNode === "rypto" ? "ring-2 ring-accent" : ""
            }`}
            onClick={() => setActiveNode(activeNode === "rypto" ? null : "rypto")}
          >
            <CardContent className="p-6 text-center">
              <div
                className={`w-16 h-16 rounded-full ${nodes.rypto.color} flex items-center justify-center mx-auto mb-4`}
              >
                <nodes.rypto.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-2 neon-glow">{nodes.rypto.title}</h3>
              <Badge variant="secondary" className="mb-3">
                {nodes.rypto.subtitle}
              </Badge>
              <p className="text-sm text-muted-foreground">{nodes.rypto.description}</p>
            </CardContent>
          </Card>

          <ArrowDown className="w-8 h-8 text-accent animate-bounce" />

          {/* Divisions */}
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <Card
              className={`w-72 cursor-pointer transition-all duration-300 hover:scale-105 dimensional-card glitch-border ${
                activeNode === "studio" ? "ring-2 ring-accent" : ""
              }`}
              onClick={() => setActiveNode(activeNode === "studio" ? null : "studio")}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-14 h-14 rounded-full ${nodes.studio.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <nodes.studio.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{nodes.studio.title}</h3>
                <Badge variant="outline" className="mb-3">
                  {nodes.studio.subtitle}
                </Badge>
                <p className="text-sm text-muted-foreground">{nodes.studio.description}</p>
              </CardContent>
            </Card>

            <div className="hidden lg:block">
              <ArrowRight className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="lg:hidden">
              <ArrowDown className="w-8 h-8 text-muted-foreground" />
            </div>

            <Card
              className={`w-72 cursor-pointer transition-all duration-300 hover:scale-105 dimensional-card glitch-border ${
                activeNode === "dev" ? "ring-2 ring-accent" : ""
              }`}
              onClick={() => setActiveNode(activeNode === "dev" ? null : "dev")}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-14 h-14 rounded-full ${nodes.dev.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <nodes.dev.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{nodes.dev.title}</h3>
                <Badge variant="outline" className="mb-3">
                  {nodes.dev.subtitle}
                </Badge>
                <p className="text-sm text-muted-foreground">{nodes.dev.description}</p>
              </CardContent>
            </Card>
          </div>

          <ArrowDown className="w-8 h-8 text-accent animate-bounce" />

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 w-full max-w-6xl">
            {Object.entries(nodes.services).map(([key, service]) => (
              <Card
                key={key}
                className="cursor-pointer transition-all duration-300 hover:scale-105 dimensional-card glitch-border animate-pulse-glow"
                onClick={() => setActiveNode(activeNode === key ? null : key)}
              >
                <CardContent className="p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm">{service.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Node Details */}
        {activeNode && (
          <div className="mt-12 text-center animate-fade-in">
            <Card className="max-w-2xl mx-auto glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {activeNode === "rypto" && nodes.rypto.title}
                  {activeNode === "studio" && nodes.studio.title}
                  {activeNode === "dev" && nodes.dev.title}
                  {nodes.services[activeNode as keyof typeof nodes.services] &&
                    nodes.services[activeNode as keyof typeof nodes.services].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activeNode === "rypto" &&
                    "RYPTO is a creative technology company founded by Victor Edet Coleman in Liberia in 2023. We specialize in cutting-edge digital solutions across multiple creative and technical disciplines."}
                  {activeNode === "studio" &&
                    "RYPTO Studio focuses on creative visual content including 2D/3D animation, motion graphics, 3D fashion design, and AR/VR experiences. We bring ideas to life through stunning visual storytelling."}
                  {activeNode === "dev" &&
                    "RYPTO Dev handles all technical development including modern web applications, mobile apps for iOS and Android, and custom software solutions tailored to client needs."}
                  {nodes.services[activeNode as keyof typeof nodes.services] &&
                    `${nodes.services[activeNode as keyof typeof nodes.services].description} - One of our core service offerings that showcases our expertise in this specialized field.`}
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
