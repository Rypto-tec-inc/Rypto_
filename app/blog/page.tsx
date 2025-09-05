export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground tracking-wider uppercase">Insights</div>
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">BLOG</h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Insights, tutorials, and industry trends from our team of creative technologists.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Latest Articles</h3>
                <p className="text-muted-foreground">
                  Stay updated with the latest trends in 3D design, AR/VR, and web development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tutorials</h3>
                <p className="text-muted-foreground">
                  Step-by-step guides and best practices from our experienced team.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
                <p className="text-muted-foreground">
                  Behind-the-scenes look at our most innovative projects and solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">BL</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Recent Posts</h3>
              <div className="space-y-4">
                <article className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium mb-1">The Future of 3D Fashion</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    How virtual try-on technology is revolutionizing retail...
                  </p>
                  <div className="text-xs text-muted-foreground">Dec 15, 2023</div>
                </article>
                <article className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium mb-1">AR in E-commerce</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Implementing augmented reality for better shopping experiences...
                  </p>
                  <div className="text-xs text-muted-foreground">Dec 10, 2023</div>
                </article>
                <article className="p-4 bg-background rounded-lg">
                  <h4 className="font-medium mb-1">Next.js 14 Features</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Exploring the latest improvements in Next.js development...
                  </p>
                  <div className="text-xs text-muted-foreground">Dec 5, 2023</div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
