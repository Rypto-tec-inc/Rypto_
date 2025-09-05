export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Join Us</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">CAREERS</h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Join our innovative team and help shape the future of creative technology.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Open Positions</h3>
                <p className="text-muted-foreground">
                  We're always looking for talented individuals to join our growing team.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Remote-First</h3>
                <p className="text-muted-foreground">Work from anywhere while collaborating with our global team.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Continuous learning and professional development in cutting-edge technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">CA</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Current Openings</h3>
              <div className="space-y-3">
                <div className="p-4 bg-background rounded-lg border-l-4 border-accent">
                  <div className="font-medium">3D Artist</div>
                  <div className="text-sm text-muted-foreground">Full-time • Remote</div>
                </div>
                <div className="p-4 bg-background rounded-lg border-l-4 border-accent">
                  <div className="font-medium">Frontend Developer</div>
                  <div className="text-sm text-muted-foreground">Full-time • Remote</div>
                </div>
                <div className="p-4 bg-background rounded-lg border-l-4 border-accent">
                  <div className="font-medium">AR/VR Developer</div>
                  <div className="text-sm text-muted-foreground">Contract • Remote</div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Don't see a perfect fit? Send us your portfolio at careers@ryptostudio.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
