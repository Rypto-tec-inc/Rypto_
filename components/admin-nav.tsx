"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Briefcase, 
  Users, 
  Settings, 
  LogOut, 
  ImageIcon,
  Mail,
  Menu,
  X
} from "lucide-react"
import Link from "next/link"

export function AdminNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("adminAuth")
    router.push("/admin")
  }

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard", icon: Briefcase },
    { href: "/admin/projects", label: "Projects", icon: Briefcase },
    { href: "/admin/gallery", label: "Gallery", icon: ImageIcon },
    { href: "/admin/team", label: "Team", icon: Users },
    { href: "/admin/partners", label: "Partners", icon: Users },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <nav className="border-b border-border/20 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/admin/dashboard" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">RYPTO Studio</h1>
                <p className="text-xs text-muted-foreground">Admin Panel</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="flex items-center space-x-2"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Link href="/" target="_blank">
              <Button variant="outline" size="sm">
                View Site
              </Button>
            </Link>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/20 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full justify-start"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
