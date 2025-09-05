export default function ThreeDDesignPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Service</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                3D
                <br />
                DESIGN
              </h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Creating immersive 3D experiences and photorealistic visualizations.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Product Visualization</h3>
                <p className="text-muted-foreground">
                  Photorealistic 3D models and renderings for product marketing and e-commerce.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Architectural Visualization</h3>
                <p className="text-muted-foreground">
                  Stunning architectural renderings and virtual walkthroughs for real estate and construction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Character Design</h3>
                <p className="text-muted-foreground">
                  Custom 3D character creation for games, films, and interactive experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">3D</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="font-semibold">Blender</div>
                  <div className="text-sm text-muted-foreground">3D Modeling</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="font-semibold">Cinema 4D</div>
                  <div className="text-sm text-muted-foreground">Animation</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="font-semibold">Maya</div>
                  <div className="text-sm text-muted-foreground">Character Rigging</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="font-semibold">Unreal Engine</div>
                  <div className="text-sm text-muted-foreground">Real-time Rendering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
