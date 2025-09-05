export default function ThreeDFashionPage() {
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
                FASHION
              </h1>
              <div className="text-lg text-muted-foreground max-w-md">
                Revolutionary 3D fashion design and virtual try-on experiences for the future of retail.
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Virtual Garments</h3>
                <p className="text-muted-foreground">
                  Photorealistic 3D clothing models for e-commerce and virtual fashion shows.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Virtual Try-On</h3>
                <p className="text-muted-foreground">
                  AR-powered virtual fitting rooms that enhance online shopping experiences.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Digital Fashion</h3>
                <p className="text-muted-foreground">
                  NFT fashion collections and digital-only garments for virtual worlds.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="text-9xl font-bold text-muted-foreground/10 absolute -top-8 -right-8">3F</div>
            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-bold">Applications</h3>
              <div className="space-y-3">
                <div className="p-3 bg-background rounded-lg">
                  <div className="font-medium">E-commerce Integration</div>
                  <div className="text-sm text-muted-foreground">Seamless online shopping</div>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <div className="font-medium">Virtual Fashion Shows</div>
                  <div className="text-sm text-muted-foreground">Digital runway experiences</div>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <div className="font-medium">Sustainable Design</div>
                  <div className="text-sm text-muted-foreground">Reduce physical prototyping</div>
                </div>
                <div className="p-3 bg-background rounded-lg">
                  <div className="font-medium">Metaverse Fashion</div>
                  <div className="text-sm text-muted-foreground">Virtual world clothing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
