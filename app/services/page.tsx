import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Palette, Code, Cable as Cube, Smartphone, Globe, Zap, ArrowRight } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Palette,
      title: "Animation & Motion Graphics",
      description:
        "Professional 2D and 3D animation services for commercials, explainer videos, and brand storytelling.",
      features: ["2D Character Animation", "3D Motion Graphics", "Visual Effects", "Brand Animations"],
      price: "Starting from $500",
    },
    {
      icon: Cube,
      title: "3D Design & Modeling",
      description: "High-quality 3D modeling and visualization for products, architecture, and creative projects.",
      features: ["Product Visualization", "Architectural Rendering", "3D Prototyping", "Environment Design"],
      price: "Starting from $300",
    },
    {
      icon: Smartphone,
      title: "AR/VR Development",
      description: "Immersive AR and VR experiences for training, marketing, and entertainment applications.",
      features: ["Mobile AR Apps", "VR Training Simulations", "Interactive Experiences", "Cross-Platform Development"],
      price: "Starting from $2000",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Performance Optimization"],
      price: "Starting from $800",
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions and mobile applications tailored to your business needs.",
      features: ["Mobile App Development", "Desktop Applications", "API Development", "Database Design"],
      price: "Starting from $1500",
    },
    {
      icon: Zap,
      title: "3D Fashion Design",
      description: "Revolutionary 3D fashion design and virtual clothing for the digital fashion industry.",
      features: ["Virtual Garments", "Fashion Visualization", "Digital Prototyping", "Sustainable Design"],
      price: "Starting from $400",
    },
  ]

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
                  <span className="text-muted-foreground">SERVICES</span>
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
              <div className="text-[20rem] md:text-[25rem] font-bold text-white/10 leading-none select-none">S</div>
            </div>
          </div>

          {/* Bottom Typography */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-4xl md:text-6xl font-bold">Professional Solutions</div>
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

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-white/20 transition-all duration-300 group"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                      <div className="text-white/70 font-medium">{service.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-white text-black hover:bg-white/90 w-full group-hover:bg-white/80 transition-colors">
                    Get Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
