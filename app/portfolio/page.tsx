import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play } from "lucide-react"

export default function PortfolioPage() {
  // Placeholder projects - will be populated as real projects are completed
  const projects = [
    {
      title: "Coming Soon",
      category: "Animation",
      description: "Our first animation project is currently in development. Stay tuned for updates!",
      image: "/animation-project-placeholder.jpg",
      tags: ["2D Animation", "Motion Graphics"],
      status: "In Development",
    },
    {
      title: "Coming Soon",
      category: "3D Design",
      description: "Exciting 3D visualization project in the pipeline. More details coming soon.",
      image: "/3d-design-project-placeholder.jpg",
      tags: ["3D Modeling", "Visualization"],
      status: "Planning",
    },
    {
      title: "Coming Soon",
      category: "Web Development",
      description: "Modern web application currently being developed for a client.",
      image: "/web-development-project-placeholder.jpg",
      tags: ["React", "Next.js", "Responsive"],
      status: "In Development",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-background via-card to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Our <span className="text-accent">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Showcasing our creative technology solutions and innovative projects
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["All", "Animation", "3D Design", "AR/VR", "Web Development", "Software", "3D Fashion"].map((filter) => (
              <Button
                key={filter}
                variant={filter === "All" ? "default" : "outline"}
                className={
                  filter === "All"
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "border-border hover:bg-card"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="water-effect glass-effect border-border hover:border-accent/50 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-accent/90 text-accent-foreground">
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="border-white/20 text-white">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent" disabled>
                      <Play className="mr-2 h-4 w-4" />
                      Preview
                    </Button>
                    <Button size="sm" variant="outline" disabled>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="text-center mt-16">
            <Card className="glass-effect border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">More Projects Coming Soon</h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  We're currently working on several exciting projects across animation, 3D design, AR/VR, and software
                  development. Check back soon to see our latest work!
                </p>
                <Button className="water-effect bg-accent hover:bg-accent/90 text-accent-foreground">
                  Start Your Project
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
