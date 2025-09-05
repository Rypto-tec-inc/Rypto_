import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { InnovativeGrid, FounderSection } from "@/components/innovative-sections"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <InnovativeGrid />
      <ServicesSection />
      <FounderSection />
      <Footer />
    </main>
  )
}
