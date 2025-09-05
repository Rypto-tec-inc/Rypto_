export default function WebDevPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Service</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                WEB
                <br />
                DEV
              </h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Modern web applications built with cutting-edge technologies and best practices.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
                <p className="text-muted-foreground">
                  Responsive, interactive user interfaces using React, Next.js, and modern CSS frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
                <p className="text-muted-foreground">
                  Scalable server-side solutions with Node.js, Python, and cloud infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Full-Stack Solutions</h3>
                <p className="text-muted-foreground">
                  End-to-end web applications with seamless integration and optimal performance.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">WD</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-sm">React</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-sm">Next.js</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-sm">TypeScript</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-sm">Node.js</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-sm">Python</div>
                </div>
                <div className="text-center p-3 bg-background rounded-lg">
                  <div className="font-semibold text-sm">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
