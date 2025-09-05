"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { ArrowLeft, Save } from "lucide-react"
import Link from "next/link"

export default function AdminSettings() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [settings, setSettings] = useState({
    siteName: "RYPTO Studio",
    siteDescription:
      "Creative technology company specializing in animation, 3D design, AR/VR, and software development",
    contactEmail: "hello@rypto.com",
    phone: "+231-XXX-XXXX",
    address: "Monrovia, Liberia",
    socialMedia: {
      twitter: "",
      linkedin: "",
      instagram: "",
      github: "",
    },
    features: {
      maintenanceMode: false,
      allowRegistration: false,
      showProjects: true,
      showGallery: true,
      showTeam: true,
    },
  })
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
    } else {
      router.push("/admin")
    }
  }, [router])

  const handleSave = () => {
    console.log("Settings saved:", settings)
    alert("Settings saved successfully!")
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
      <div className="border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/admin/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              <div>
                <h1 className="text-xl font-bold">Site Settings</h1>
                <p className="text-sm text-muted-foreground">Configure your website</p>
              </div>
            </div>
            <Button onClick={handleSave}>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* General Settings */}
        <Card className="glass-effect border-border/20">
          <CardHeader>
            <CardTitle>General Information</CardTitle>
            <CardDescription>Basic site information and contact details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site Name</Label>
                <Input
                  id="siteName"
                  value={settings.siteName}
                  onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactEmail">Contact Email</Label>
                <Input
                  id="contactEmail"
                  type="email"
                  value={settings.contactEmail}
                  onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="siteDescription">Site Description</Label>
              <Textarea
                id="siteDescription"
                rows={3}
                value={settings.siteDescription}
                onChange={(e) => setSettings({ ...settings, siteDescription: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={settings.phone}
                  onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="glass-effect border-border/20">
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
            <CardDescription>Social media links and profiles</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  placeholder="https://twitter.com/rypto"
                  value={settings.socialMedia.twitter}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialMedia: { ...settings.socialMedia, twitter: e.target.value },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/company/rypto"
                  value={settings.socialMedia.linkedin}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialMedia: { ...settings.socialMedia, linkedin: e.target.value },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  placeholder="https://instagram.com/rypto"
                  value={settings.socialMedia.instagram}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialMedia: { ...settings.socialMedia, instagram: e.target.value },
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="github">GitHub</Label>
                <Input
                  id="github"
                  placeholder="https://github.com/rypto"
                  value={settings.socialMedia.github}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      socialMedia: { ...settings.socialMedia, github: e.target.value },
                    })
                  }
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Feature Toggles */}
        <Card className="glass-effect border-border/20">
          <CardHeader>
            <CardTitle>Feature Settings</CardTitle>
            <CardDescription>Enable or disable site features</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="maintenance">Maintenance Mode</Label>
                <p className="text-sm text-muted-foreground">Put the site in maintenance mode</p>
              </div>
              <Switch
                id="maintenance"
                checked={settings.features.maintenanceMode}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    features: { ...settings.features, maintenanceMode: checked },
                  })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="projects">Show Projects</Label>
                <p className="text-sm text-muted-foreground">Display projects section</p>
              </div>
              <Switch
                id="projects"
                checked={settings.features.showProjects}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    features: { ...settings.features, showProjects: checked },
                  })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="gallery">Show Gallery</Label>
                <p className="text-sm text-muted-foreground">Display gallery section</p>
              </div>
              <Switch
                id="gallery"
                checked={settings.features.showGallery}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    features: { ...settings.features, showGallery: checked },
                  })
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="team">Show Team</Label>
                <p className="text-sm text-muted-foreground">Display team section</p>
              </div>
              <Switch
                id="team"
                checked={settings.features.showTeam}
                onCheckedChange={(checked) =>
                  setSettings({
                    ...settings,
                    features: { ...settings.features, showTeam: checked },
                  })
                }
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
