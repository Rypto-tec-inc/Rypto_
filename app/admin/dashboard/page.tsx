"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ImageIcon, Briefcase, Users, Settings, Mail } from "lucide-react"
import { AdminNav } from "@/components/admin-nav"

interface DashboardStats {
  contacts: {
    total: number
    recent: number
  }
  projects: {
    total: number
    featured: number
    categories: string[]
  }
  services: {
    total: number
    active: number
  }
  team: {
    total: number
    active: number
  }
  gallery: {
    total: number
    active: number
    featured: number
    categories: string[]
  }
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const auth = localStorage.getItem("adminAuth")
    if (auth === "true") {
      setIsAuthenticated(true)
      fetchStats()
    } else {
      router.push("/admin")
    }
  }, [router])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/admin/stats')
      if (response.ok) {
        const data = await response.json()
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin")
  }

  if (!isAuthenticated || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground mx-auto mb-4"></div>
          <div>Loading...</div>
        </div>
      </div>
    )
  }

  const statsData = [
    { 
      label: "Total Projects", 
      value: stats?.projects.total.toString() || "0", 
      change: `${stats?.projects.featured || 0} featured`,
      icon: Briefcase
    },
    { 
      label: "Contact Submissions", 
      value: stats?.contacts.total.toString() || "0", 
      change: `${stats?.contacts.recent || 0} this week`,
      icon: Mail
    },
    { 
      label: "Team Members", 
      value: stats?.team.total.toString() || "0", 
      change: `${stats?.team.active || 0} active`,
      icon: Users
    },
    { 
      label: "Services", 
      value: stats?.services.total.toString() || "0", 
      change: `${stats?.services.active || 0} active`,
      icon: Settings
    },
    { 
      label: "Gallery Items", 
      value: stats?.gallery.total.toString() || "0", 
      change: `${stats?.gallery.featured || 0} featured`,
      icon: ImageIcon
    },
  ]

  const quickActions = [
    {
      title: "Add Project",
      description: "Upload new project to portfolio",
      icon: Briefcase,
      href: "/admin/projects/new",
    },
    { title: "Add Gallery Item", description: "Upload images to gallery", icon: ImageIcon, href: "/admin/gallery/new" },
    { title: "Manage Team", description: "Add or edit team members", icon: Users, href: "/admin/team" },
    { title: "Site Settings", description: "Configure website settings", icon: Settings, href: "/admin/settings" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <Card key={index} className="glass-effect border-border/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <stat.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</div>
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <Link key={index} href={action.href}>
                <Card className="glass-effect border-border/20 hover:border-accent/50 transition-all duration-300 cursor-pointer group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <action.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                      <CardTitle className="text-base">{action.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription>{action.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <Card className="glass-effect border-border/20">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates and changes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <div className="text-sm">Website launched successfully</div>
                <div className="text-xs text-muted-foreground ml-auto">Today</div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-muted rounded-full"></div>
                <div className="text-sm">Admin system initialized</div>
                <div className="text-xs text-muted-foreground ml-auto">Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
