"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Edit, Trash2, Search, Eye } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AdminNav } from "@/components/admin-nav"

export default function AdminGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("all")
  const [galleryItems, setGalleryItems] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      fetchGalleryData()
    } else {
      router.push("/admin")
    }
  }, [router])

  const fetchGalleryData = async () => {
    try {
      const response = await fetch('/api/gallery')
      if (response.ok) {
        const data = await response.json()
        setGalleryItems(data)
      }
    } catch (error) {
      console.error('Failed to fetch gallery data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "all" || item.category === filterCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      
      <div className="border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-xl font-bold">Gallery Management</h1>
              <p className="text-sm text-muted-foreground">Manage gallery content</p>
            </div>
            <Link href="/admin/gallery/new">
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Item
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search gallery items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 border border-border rounded-md bg-background"
          >
            <option value="all">All Categories</option>
            <option value="3d-renders">3D Renders</option>
            <option value="animations">Animations</option>
            <option value="ui-designs">UI Designs</option>
            <option value="branding">Branding</option>
            <option value="photography">Photography</option>
            <option value="illustrations">Illustrations</option>
          </select>
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading gallery...</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
            <Card key={item.id} className="glass-effect border-border/20 overflow-hidden">
              <div className="relative aspect-square">
                <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                <div className="absolute top-2 right-2 flex space-x-1">
                  <Button variant="secondary" size="sm">
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
                {item.featured && <Badge className="absolute top-2 left-2">Featured</Badge>}
              </div>
              <CardContent className="p-4">
                <CardTitle className="text-sm mb-1">{item.title}</CardTitle>
                <CardDescription className="text-xs mb-2">{item.category}</CardDescription>
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          </div>
        )}
      </div>
    </div>
  )
}
