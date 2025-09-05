"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchFilter } from "@/components/search-filter"
import { ProjectModal } from "@/components/project-modal"
import { Eye } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  status: string
  year: string
  fullDescription?: string
  technologies?: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const projects: Project[] = [
    {
      id: 1,
      title: "AR Fashion Showcase",
      description:
        "Revolutionary AR application for virtual fashion try-ons using advanced 3D modeling and real-time rendering.",
      fullDescription:
        "A cutting-edge augmented reality application that transforms the fashion industry by allowing users to virtually try on clothing items in real-time. Built with advanced 3D modeling techniques, computer vision, and machine learning algorithms to provide accurate fit predictions and realistic fabric simulation.",
      image: "/ar-fashion-virtual-try-on-app-interface.jpg",
      tags: ["AR/VR", "3D Design", "Fashion Tech", "Mobile App"],
      status: "Completed",
      year: "2024",
      technologies: ["Unity", "ARCore", "ARKit", "Blender", "C#", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Neural Animation Engine",
      description: "AI-powered animation system that generates smooth character movements using machine learning.",
      fullDescription:
        "An innovative animation engine that leverages neural networks to create fluid, realistic character animations. The system learns from motion capture data to generate new animations that maintain natural movement patterns while reducing production time by 70%.",
      image: "/ai-animation-neural-network-interface.jpg",
      tags: ["Animation", "AI/ML", "Software Development"],
      status: "In Development",
      year: "2024",
      technologies: ["TensorFlow", "Python", "Blender API", "OpenGL"],
    },
    {
      id: 3,
      title: "Holographic Product Visualizer",
      description: "3D holographic display system for immersive product presentations and marketing.",
      fullDescription:
        "A revolutionary holographic display technology that creates stunning 3D visualizations of products floating in mid-air. Perfect for trade shows, retail environments, and premium product launches.",
      image: "/holographic-3d-product-display-technology.jpg",
      tags: ["3D Design", "Hardware", "AR/VR"],
      status: "Prototype",
      year: "2024",
      technologies: ["Three.js", "WebGL", "Arduino", "LED Matrix"],
    },
  ]

  const categories = [
    "All",
    "AR/VR",
    "3D Design",
    "Animation",
    "AI/ML",
    "Software Development",
    "Fashion Tech",
    "Hardware",
  ]

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = activeCategory === "All" || project.tags.includes(activeCategory)

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Typography Hero Section */}
      <section className="pt-24 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
            {/* Left Side - Typography */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-mono text-muted-foreground tracking-wider">RYPTO STUDIO</div>
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
                  OUR
                  <br />
                  <span className="text-muted-foreground">PROJECTS</span>
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground font-mono text-sm">
                <div>Size: 80PX</div>
                <div>Size: 50PX</div>
                <div>Size: 18PX</div>
                <div>Size: 14PX</div>
              </div>
            </div>

            {/* Right Side - Large Typography Element */}
            <div className="flex items-center justify-center">
              <div className="text-[20rem] md:text-[25rem] font-bold text-white/10 leading-none select-none">P</div>
            </div>
          </div>

          {/* Bottom Typography */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-4xl md:text-6xl font-bold">Innovation Portfolio</div>
                <div className="mt-4 space-y-2">
                  <div className="flex gap-8 text-sm font-mono text-muted-foreground">
                    <span>Bold</span>
                    <span>Medium</span>
                  </div>
                  <div className="flex gap-8 text-xs text-muted-foreground">
                    <span>20px</span>
                    <span>18px</span>
                    <span>16px</span>
                    <span>14px</span>
                    <span>12px</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <SearchFilter
            categories={categories}
            onSearch={setSearchQuery}
            onFilter={setActiveCategory}
            activeCategory={activeCategory}
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-white/20 transition-all duration-300 group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        project.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : project.status === "In Development"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs hover:bg-white/10 transition-colors">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Coming Soon Projects */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">More Projects Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["AI-Powered Animation Tool", "3D E-commerce Platform", "VR Training Simulator"].map((title, index) => (
                <Card
                  key={index}
                  className="premium-gradient border-dashed border-muted-foreground/30 hover:border-accent/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <span className="text-2xl animate-bounce">🚀</span>
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h4>
                    <p className="text-sm text-muted-foreground">In Development</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <Footer />
    </main>
  )
}
