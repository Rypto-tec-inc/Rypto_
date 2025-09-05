"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { FileUpload } from "@/components/file-upload"
import { AdminNav } from "@/components/admin-nav"

export default function NewGalleryItem() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    tags: "",
    artist: "",
    year: new Date().getFullYear().toString(),
    dimensions: "",
    software: "",
    featured: false,
  })
  const [galleryFiles, setGalleryFiles] = useState<File[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin")
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      let imageUrl = "/placeholder.svg"
      
      // Upload the first file if available
      if (galleryFiles.length > 0) {
        const uploadFormData = new FormData()
        uploadFormData.append('file', galleryFiles[0])
        
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadFormData,
        })
        
        if (uploadResponse.ok) {
          const uploadData = await uploadResponse.json()
          imageUrl = uploadData.imageUrl
        } else {
          console.error('Upload failed, using placeholder')
        }
      }
      
      const galleryData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        imageUrl: imageUrl,
        artist: formData.artist,
        year: formData.year,
        dimensions: formData.dimensions,
        software: formData.software ? formData.software.split(',').map(s => s.trim()) : [],
        tags: formData.tags ? formData.tags.split(',').map(s => s.trim()) : [],
        featured: formData.featured,
        active: true
      }

      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(galleryData),
      })

      if (response.ok) {
        alert("Gallery item added successfully!")
        // Clear the form
        setFormData({
          title: "",
          description: "",
          category: "",
          tags: "",
          artist: "",
          year: new Date().getFullYear().toString(),
          dimensions: "",
          software: "",
          featured: false,
        })
        setGalleryFiles([])
        router.push("/admin/gallery")
      } else {
        const error = await response.json()
        alert(`Error: ${error.error || 'Failed to add gallery item'}`)
      }
    } catch (error) {
      console.error('Error adding gallery item:', error)
      alert('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />
      
      <div className="border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 h-16">
            <Link href="/admin/gallery">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Gallery
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-bold">Add Gallery Item</h1>
              <p className="text-sm text-muted-foreground">Upload new content to gallery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="glass-effect border-border/20">
          <CardHeader>
            <CardTitle>Gallery Item Details</CardTitle>
            <CardDescription>Add new visual content to your gallery</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3d-renders">3D Renders</SelectItem>
                      <SelectItem value="animations">Animations</SelectItem>
                      <SelectItem value="ui-designs">UI Designs</SelectItem>
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="photography">Photography</SelectItem>
                      <SelectItem value="illustrations">Illustrations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="artist">Artist</Label>
                  <Input
                    id="artist"
                    placeholder="Artist name"
                    value={formData.artist}
                    onChange={(e) => setFormData({ ...formData, artist: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input
                    id="dimensions"
                    placeholder="e.g., 1920x1080, 4K Resolution"
                    value={formData.dimensions}
                    onChange={(e) => setFormData({ ...formData, dimensions: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="software">Software Used</Label>
                  <Input
                    id="software"
                    placeholder="Blender, After Effects, etc."
                    value={formData.software}
                    onChange={(e) => setFormData({ ...formData, software: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  placeholder="design, 3d, animation, etc."
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                />
              </div>

              <div className="space-y-4">
                <Label>Upload Media</Label>
                <FileUpload
                  onFilesChange={setGalleryFiles}
                  acceptedTypes={["image/*", "video/*"]}
                  maxFiles={5}
                  maxSize={100}
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="rounded"
                />
                <Label htmlFor="featured">Featured Item</Label>
              </div>

              <div className="flex justify-end space-x-4">
                <Button variant="outline" type="button" onClick={() => router.push("/admin/gallery")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Adding..." : "Add to Gallery"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
