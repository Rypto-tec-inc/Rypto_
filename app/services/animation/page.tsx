export default function AnimationPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Service</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">ANIMATION</h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Bringing ideas to life through cutting-edge animation techniques and storytelling.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">2D Animation</h3>
                <p className="text-muted-foreground">
                  Traditional and digital 2D animation for commercials, explainer videos, and brand content.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">3D Animation</h3>
                <p className="text-muted-foreground">
                  Photorealistic 3D animations for product visualization, architectural walkthroughs, and character
                  animation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Motion Graphics</h3>
                <p className="text-muted-foreground">
                  Dynamic motion graphics for digital marketing, social media, and corporate presentations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">AN</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Our Process</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    1
                  </div>
                  <span>Concept Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    2
                  </div>
                  <span>Storyboarding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    3
                  </div>
                  <span>Animation Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    4
                  </div>
                  <span>Post-Production</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
