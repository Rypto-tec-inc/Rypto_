const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, '..', 'data')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Sample services data
const services = [
  {
    id: crypto.randomUUID(),
    title: "Animation & Motion Graphics",
    description: "Bringing stories to life through stunning 2D and 3D animations, motion graphics, and visual effects.",
    icon: "Palette",
    features: ["2D Animation", "3D Animation", "Motion Graphics", "Visual Effects"],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "3D Design & Modeling",
    description: "Creating immersive 3D models, environments, and architectural visualizations with precision and creativity.",
    icon: "Cube",
    features: ["3D Modeling", "Texturing", "Lighting", "Rendering"],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "AR/VR Development",
    description: "Building cutting-edge augmented and virtual reality experiences for various platforms and industries.",
    icon: "Smartphone",
    features: ["AR Applications", "VR Experiences", "Mixed Reality", "Interactive Design"],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Web Development",
    description: "Crafting responsive, modern websites and web applications with the latest technologies and frameworks.",
    icon: "Globe",
    features: ["Frontend Development", "Backend Development", "Full-Stack", "E-commerce"],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Software Development",
    description: "Developing custom software solutions, mobile apps, and enterprise applications tailored to your needs.",
    icon: "Code",
    features: ["Mobile Apps", "Desktop Applications", "API Development", "Database Design"],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "3D Fashion Design",
    description: "Revolutionary 3D fashion design and virtual clothing creation for the digital fashion industry.",
    icon: "Zap",
    features: ["3D Garment Design", "Virtual Try-On", "Fashion Visualization", "Digital Patterns"],
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

// Sample team member data
const team = [
  {
    id: crypto.randomUUID(),
    name: "Victor Edet Coleman",
    role: "Founder & Creative Director",
    bio: "Visionary leader and creative technologist with a passion for pushing the boundaries of digital innovation in West Africa.",
    imageUrl: "/creative-director-headshot.png",
    socialLinks: {
      linkedin: "https://linkedin.com/in/victor-edet-coleman",
      twitter: "https://twitter.com/victorcoleman",
      github: "https://github.com/victorcoleman"
    },
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

// Sample gallery data
const gallery = [
  {
    id: crypto.randomUUID(),
    title: "Futuristic 3D Character Design",
    description: "Advanced character modeling with intricate details and realistic textures.",
    category: "3D Design",
    imageUrl: "/futuristic-3d-character-design-cyberpunk-style.jpg",
    artist: "Victor Edet Coleman",
    year: "2024",
    dimensions: "4K Resolution",
    software: ["Blender", "Substance Painter", "ZBrush"],
    tags: ["3d", "character", "cyberpunk", "modeling"],
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Neon City AR Experience",
    description: "Immersive augmented reality cityscape with dynamic lighting and interactive elements.",
    category: "AR/VR",
    imageUrl: "/neon-cyberpunk-city-ar-interface.jpg",
    artist: "Rypto Studio Team",
    year: "2024",
    software: ["Unity", "ARCore", "Blender"],
    tags: ["ar", "vr", "interactive", "cityscape"],
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Fluid Motion Graphics",
    description: "Mesmerizing fluid simulations with particle systems and dynamic color transitions.",
    category: "Animation",
    imageUrl: "/abstract-fluid-motion-graphics-animation.jpg",
    artist: "Victor Edet Coleman",
    year: "2024",
    software: ["After Effects", "Cinema 4D", "Houdini"],
    tags: ["animation", "motion", "fluid", "particles"],
    featured: false,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Digital Fashion Collection",
    description: "Cutting-edge digital fashion pieces designed for virtual environments and AR try-ons.",
    category: "Fashion",
    imageUrl: "/digital-fashion-3d-clothing-design.jpg",
    artist: "Rypto Studio Team",
    year: "2024",
    software: ["Marvelous Designer", "Blender", "CLO 3D"],
    tags: ["fashion", "3d", "clothing", "virtual"],
    featured: false,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Interactive Web Portal",
    description: "Modern web interface with glassmorphism effects and smooth micro-interactions.",
    category: "Web Design",
    imageUrl: "/futuristic-web-interface-design.jpg",
    artist: "Victor Edet Coleman",
    year: "2024",
    software: ["Figma", "React", "Three.js"],
    tags: ["web", "ui", "interface", "modern"],
    featured: true,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: crypto.randomUUID(),
    title: "Holographic Brand Identity",
    description: "Futuristic brand identity system with holographic elements and dynamic typography.",
    category: "Branding",
    imageUrl: "/holographic-brand-identity-design.jpg",
    artist: "Rypto Studio Team",
    year: "2024",
    software: ["Adobe Creative Suite", "Blender", "After Effects"],
    tags: ["branding", "holographic", "identity", "typography"],
    featured: false,
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
]

// Write data files
fs.writeFileSync(path.join(dataDir, 'services.json'), JSON.stringify(services, null, 2))
fs.writeFileSync(path.join(dataDir, 'team.json'), JSON.stringify(team, null, 2))
fs.writeFileSync(path.join(dataDir, 'gallery.json'), JSON.stringify(gallery, null, 2))
fs.writeFileSync(path.join(dataDir, 'projects.json'), JSON.stringify([], null, 2))
fs.writeFileSync(path.join(dataDir, 'contacts.json'), JSON.stringify([], null, 2))

console.log('✅ Sample data initialized successfully!')
console.log('📁 Data directory:', dataDir)
console.log('📊 Created files:')
console.log('   - services.json (6 services)')
console.log('   - team.json (1 team member)')
console.log('   - gallery.json (6 gallery items)')
console.log('   - projects.json (empty)')
console.log('   - contacts.json (empty)')
