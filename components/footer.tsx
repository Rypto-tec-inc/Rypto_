import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image src="/images/rypto-logo.png" alt="Rypto Studio" width={120} height={40} className="h-8 w-auto" />
            <p className="text-muted-foreground text-pretty">
              Creative technology solutions specializing in animation, 3D design, AR/VR, and software development.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/services/animation" className="hover:text-accent transition-colors">
                  Animation
                </Link>
              </li>
              <li>
                <Link href="/services/3d-design" className="hover:text-accent transition-colors">
                  3D Design
                </Link>
              </li>
              <li>
                <Link href="/services/ar-vr" className="hover:text-accent transition-colors">
                  AR/VR Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-dev" className="hover:text-accent transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/software" className="hover:text-accent transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/3d-fashion" className="hover:text-accent transition-colors">
                  3D Fashion
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-accent transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-accent transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-accent transition-colors text-xs opacity-70">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">Liberia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">hello@ryptostudio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+231 XXX XXXX</span>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <Input placeholder="Enter your email" className="bg-background border-border" />
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2023 Rypto Studio. All rights reserved. Founded by Victor Edet Coleman.</p>
        </div>
      </div>
    </footer>
  )
}
