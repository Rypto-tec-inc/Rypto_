export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Service</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">SOFTWARE</h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Custom software solutions tailored to your business needs and objectives.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Desktop Applications</h3>
                <p className="text-muted-foreground">
                  Cross-platform desktop software using Electron, .NET, and native technologies.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Mobile Applications</h3>
                <p className="text-muted-foreground">Native and hybrid mobile apps for iOS and Android platforms.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
                <p className="text-muted-foreground">
                  Scalable enterprise software with advanced features and integrations.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">SW</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Development</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">Planning</span>
                  <span className="text-sm text-muted-foreground">Requirements Analysis</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">Design</span>
                  <span className="text-sm text-muted-foreground">Architecture & UI/UX</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">Development</span>
                  <span className="text-sm text-muted-foreground">Agile Methodology</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                  <span className="font-medium">Testing</span>
                  <span className="text-sm text-muted-foreground">Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
