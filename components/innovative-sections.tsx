"use client"

import { useParallaxTransform } from "@/hooks/use-parallax"

export function InnovativeGrid() {
  const leftContentTransform = useParallaxTransform(0.1)
  const rightContentTransform = useParallaxTransform(0.3)
  const processTransform = useParallaxTransform(0.2)

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Typography showcase section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8" style={{ transform: leftContentTransform }}>
            <div className="space-y-2">
              <div className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">Capabilities</div>
              <h2 className="text-6xl md:text-8xl font-bold leading-[0.85] tracking-tight">
                CREATIVE
                <span className="block text-muted-foreground font-light">TECHNOLOGY</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-md">
                We blend artistic vision with cutting-edge technology to create immersive digital experiences that push
                boundaries.
              </p>

              <div className="grid grid-cols-2 gap-6 text-sm font-mono">
                <div className="space-y-3">
                  <div className="text-muted-foreground">Animation</div>
                  <div className="text-muted-foreground">3D Design</div>
                  <div className="text-muted-foreground">AR/VR</div>
                </div>
                <div className="space-y-3">
                  <div className="text-muted-foreground">Web Apps</div>
                  <div className="text-muted-foreground">Fashion Tech</div>
                  <div className="text-muted-foreground">Branding</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative" style={{ transform: rightContentTransform }}>
            <div className="text-[16rem] md:text-[20rem] font-bold text-white/5 leading-none select-none">CT</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
                <div className="text-xs font-mono text-muted-foreground tracking-wider">INNOVATION</div>
              </div>
            </div>
          </div>
        </div>

        {/* Process grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ transform: processTransform }}>
          {[
            { number: "01", title: "CONCEPT", desc: "Ideation and creative direction" },
            { number: "02", title: "DESIGN", desc: "Visual development and prototyping" },
            { number: "03", title: "DELIVER", desc: "Production and implementation" },
          ].map((item, index) => (
            <div key={index} className="space-y-6 group">
              <div className="space-y-2">
                <div className="text-xs font-mono text-muted-foreground tracking-[0.2em]">STEP {item.number}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <div className="w-12 h-px bg-white/20 group-hover:bg-white/40 transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FounderSection() {
  const leftImageTransform = useParallaxTransform(0.4)
  const rightContentTransform = useParallaxTransform(0.1)

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative" style={{ transform: leftImageTransform }}>
            <div className="text-[12rem] md:text-[16rem] font-bold text-white/5 leading-none select-none">VE</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">Founder</div>
                <div className="w-24 h-px bg-white/20" />
                <div className="text-sm font-mono">Victor Edet Coleman</div>
              </div>
            </div>
          </div>

          <div className="space-y-8" style={{ transform: rightContentTransform }}>
            <div className="space-y-2">
              <div className="text-xs font-mono text-muted-foreground tracking-[0.2em] uppercase">Leadership</div>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.85] tracking-tight">
                VISION
                <span className="block text-muted-foreground font-light">DRIVEN</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed font-light max-w-md">
              Founded in 2023 by Victor Edet Coleman in Liberia, RYPTO Studio represents the future of creative
              technology in West Africa.
            </p>

            <div className="space-y-4 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Location</span>
                <span>Liberia, West Africa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Founded</span>
                <span>2023</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Focus</span>
                <span>Creative Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
