"use client"

import { useState, useMemo, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SearchFilter } from "@/components/search-filter"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Heart, Share2, Loader2 } from "lucide-react"

interface GalleryItem {
  id: string
  title: string
  category: string
  imageUrl: string
  description: string
  artist?: string
  year: string
  dimensions?: string
  software?: string[]
  tags: string[]
  featured: boolean
}

export default function GalleryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set())
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState<string[]>(["All"])

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('/api/gallery')
        if (response.ok) {
          const data = await response.json()
          setGalleryItems(data)
          
          // Extract unique categories
          const uniqueCategories = ["All", ...new Set(data.map((item: GalleryItem) => item.category))]
          setCategories(uniqueCategories)
        }
      } catch (error) {
        console.error('Failed to fetch gallery data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory = activeCategory === "All" || item.category === activeCategory

      return matchesSearch && matchesCategory
    })
  }, [searchQuery, activeCategory])

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const toggleLike = (itemId: string) => {
    setLikedItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(itemId)) {
        newSet.delete(itemId)
      } else {
        newSet.add(itemId)
      }
      return newSet
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Typography Hero Section */}
      <section className="pt-24 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[60vh]">
            {/* Left Side - Typography */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="text-sm font-mono text-muted-foreground tracking-wider">RYPTO STUDIO</div>
                <h1 className="text-6xl md:text-8xl font-bold leading-none tracking-tight">
                  CREATIVE
                  <br />
                  <span className="text-muted-foreground">GALLERY</span>
                </h1>
              </div>

              <div className="space-y-4 text-muted-foreground font-mono text-sm">
                <div>Size: 80PX</div>
                <div>Size: 50PX</div>
                <div>Size: 18PX</div>
                <div>Size: 14PX</div>
              </div>
            </div>

            {/* Right Side - Large Typography Element */}
            <div className="flex items-center justify-center">
              <div className="text-[20rem] md:text-[25rem] font-bold text-white/10 leading-none select-none">G</div>
            </div>
          </div>

          {/* Bottom Typography */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="flex justify-between items-end">
              <div>
                <div className="text-4xl md:text-6xl font-bold">Digital Artistry</div>
                <div className="mt-4 space-y-2">
                  <div className="flex gap-8 text-sm font-mono text-muted-foreground">
                    <span>Bold</span>
                    <span>Medium</span>
                  </div>
                  <div className="flex gap-8 text-xs text-muted-foreground">
                    <span>20px</span>
                    <span>18px</span>
                    <span>16px</span>
                    <span>14px</span>
                    <span>12px</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <SearchFilter
            categories={categories}
            onSearch={setSearchQuery}
            onFilter={setActiveCategory}
            activeCategory={activeCategory}
          />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground">Loading gallery...</p>
              </div>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="bg-card/50 backdrop-blur-sm border-border hover:border-white/20 transition-all duration-300 group overflow-hidden cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-gray-100 dark:bg-gray-800">
                  <img
                    src={item.imageUrl || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Overlay Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="backdrop-blur-sm"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleLike(item.id)
                      }}
                    >
                      <Heart className={`w-4 h-4 ${likedItems.has(item.id) ? "fill-red-500 text-red-500" : ""}`} />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-4">
                  <Badge variant="secondary" className="mb-2 text-xs">
                    {item.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-white transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{item.description}</p>
                  {item.artist && <p className="text-xs text-muted-foreground mt-2">by {item.artist}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
          )}

          {/* No Results */}
          {!loading && filteredItems.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-2">No artwork found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Coming Soon Gallery Items */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">More Creations Coming Soon</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                "AR Fashion Collection",
                "Animated Brand Stories",
                "3D Product Visualizations",
                "Interactive Web Experiences",
              ].map((title, index) => (
                <Card
                  key={index}
                  className="premium-gradient border-dashed border-muted-foreground/30 aspect-square hover:border-accent/50 transition-all duration-300 group"
                >
                  <CardContent className="p-6 flex flex-col items-center justify-center h-full text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                      <span className="text-xl animate-pulse">✨</span>
                    </div>
                    <h4 className="font-semibold text-sm group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Item Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border-accent/30 p-0">
          {selectedItem && (
            <div className="relative">
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={selectedItem.imageUrl || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="secondary">{selectedItem.category}</Badge>
                    <h2 className="text-2xl font-bold gradient-text">{selectedItem.title}</h2>
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={() => toggleLike(selectedItem.id)}>
                      <Heart
                        className={`w-4 h-4 mr-2 ${likedItems.has(selectedItem.id) ? "fill-red-500 text-red-500" : ""}`}
                      />
                      {likedItems.has(selectedItem.id) ? "Liked" : "Like"}
                    </Button>
                    <Button size="sm" variant="outline">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-border">
                  <div className="space-y-3">
                    {selectedItem.artist && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Artist</h4>
                        <p>{selectedItem.artist}</p>
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground">Year</h4>
                      <p>{selectedItem.year}</p>
                    </div>
                    {selectedItem.dimensions && (
                      <div>
                        <h4 className="font-semibold text-sm text-muted-foreground">Dimensions</h4>
                        <p>{selectedItem.dimensions}</p>
                      </div>
                    )}
                  </div>

                  {selectedItem.software && (
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">Software Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.software.map((software) => (
                          <Badge key={software} variant="outline" className="text-xs">
                            {software}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </main>
  )
}
