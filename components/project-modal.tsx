"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

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

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-accent/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">{project.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="aspect-video overflow-hidden rounded-lg border border-accent/20">
            <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">{project.fullDescription || project.description}</p>

              {project.technologies && (
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Project Details</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge variant="secondary">{project.status}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Year:</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {project.liveUrl && (
                  <Button className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Project
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="w-full bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-semibold mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
