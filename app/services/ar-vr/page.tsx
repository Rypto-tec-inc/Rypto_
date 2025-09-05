export default function ARVRPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Service</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">AR/VR</h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Immersive augmented and virtual reality experiences that transform how users interact with digital
                content.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Augmented Reality</h3>
                <p className="text-muted-foreground">
                  AR applications for mobile devices, marketing campaigns, and industrial training.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Virtual Reality</h3>
                <p className="text-muted-foreground">
                  Immersive VR experiences for education, entertainment, and enterprise solutions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mixed Reality</h3>
                <p className="text-muted-foreground">
                  Cutting-edge MR applications that blend physical and digital worlds seamlessly.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">XR</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Platforms</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">Unity 3D</span>
                  <span className="text-sm text-muted-foreground">Cross-platform</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">Unreal Engine</span>
                  <span className="text-sm text-muted-foreground">High-fidelity</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">ARKit/ARCore</span>
                  <span className="text-sm text-muted-foreground">Mobile AR</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                  <span className="font-medium">WebXR</span>
                  <span className="text-sm text-muted-foreground">Browser-based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
