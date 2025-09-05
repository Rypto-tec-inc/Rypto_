import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              About <span className="text-accent">Rypto Studio</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p className="text-pretty">
                Founded in 2023 by Victor Edet Coleman, Rypto Studio is a pioneering creative technology company based
                in Liberia. We specialize in pushing the boundaries of digital innovation through animation, 3D design,
                AR/VR experiences, and software development.
              </p>
              <p className="text-pretty">
                Our mission is to transform ideas into immersive digital experiences that captivate audiences and drive
                business growth. We combine artistic vision with technical expertise to deliver solutions that exceed
                expectations.
              </p>
              <p className="text-pretty">
                From concept to completion, we work closely with our clients to understand their unique needs and create
                tailored solutions that make a lasting impact in the digital landscape.
              </p>
            </div>
            <Button className="water-effect bg-accent hover:bg-accent/90 text-accent-foreground mt-8">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="glass-effect border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">Our Vision</h3>
                <p className="text-muted-foreground text-pretty">
                  To be the leading creative technology studio in West Africa, setting new standards for digital
                  innovation and artistic excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Innovation through creativity</li>
                  <li>• Excellence in execution</li>
                  <li>• Collaborative partnerships</li>
                  <li>• Continuous learning and growth</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-accent">Founded</h3>
                <p className="text-muted-foreground">
                  <span className="text-2xl font-bold text-accent">2023</span> in Liberia by Victor Edet Coleman
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
