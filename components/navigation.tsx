"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)

    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/team", label: "Team" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={`flex items-center space-x-2 hover:scale-105 transition-all duration-500 ease-out ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Image src="/images/rypto-main-logo.png" alt="RYPTO" width={100} height={32} className="h-8 w-auto" />
            <span className="text-sm text-muted-foreground font-medium">Studio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-foreground hover:text-accent transition-all duration-500 ease-out font-medium hover:scale-110 relative group ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                }`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Button
              className={`water-effect bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-500 ease-out ${
                isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95"
              }`}
              style={{ transitionDelay: `${100 + navItems.length * 50}ms` }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:scale-110 transition-transform duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-menu md:hidden glass-effect mt-2 rounded-lg p-4 animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground hover:text-accent transition-all duration-200 font-medium animate-in slide-in-from-left-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                className="water-effect bg-accent hover:bg-accent/90 text-accent-foreground w-full animate-in slide-in-from-left-2"
                style={{ animationDelay: `${navItems.length * 50}ms` }}
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
