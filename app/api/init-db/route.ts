import { NextResponse } from 'next/server'
import { serviceDb, teamDb, galleryDb, initDatabase } from '@/lib/database-adapter'

export async function POST() {
  try {
    console.log('🗄️ Initializing database...')
    
    // Initialize database tables
    await initDatabase()

    // Sample services
    const services = [
      {
        title: "Animation & Motion Graphics",
        description: "Bringing stories to life through stunning 2D and 3D animations, motion graphics, and visual effects.",
        icon: "Palette",
        features: ["2D Animation", "3D Animation", "Motion Graphics", "Visual Effects"],
        active: true
      },
      {
        title: "3D Design & Modeling",
        description: "Creating immersive 3D models, environments, and architectural visualizations with precision and creativity.",
        icon: "Cube",
        features: ["3D Modeling", "Texturing", "Lighting", "Rendering"],
        active: true
      },
      {
        title: "AR/VR Development",
        description: "Building cutting-edge augmented and virtual reality experiences for various platforms and industries.",
        icon: "Smartphone",
        features: ["AR Applications", "VR Experiences", "Mixed Reality", "Interactive Design"],
        active: true
      },
      {
        title: "Web Development",
        description: "Crafting responsive, modern websites and web applications with the latest technologies and frameworks.",
        icon: "Globe",
        features: ["Frontend Development", "Backend Development", "Full-Stack", "E-commerce"],
        active: true
      },
      {
        title: "Software Development",
        description: "Developing custom software solutions, mobile apps, and enterprise applications tailored to your needs.",
        icon: "Code",
        features: ["Mobile Apps", "Desktop Applications", "API Development", "Database Design"],
        active: true
      },
      {
        title: "3D Fashion Design",
        description: "Revolutionary 3D fashion design and virtual clothing creation for the digital fashion industry.",
        icon: "Zap",
        features: ["3D Garment Design", "Virtual Try-On", "Fashion Visualization", "Digital Patterns"],
        active: true
      }
    ]

    // Sample team member
    const team = [
      {
        name: "Victor Edet Coleman",
        role: "Founder & Creative Director",
        bio: "Visionary leader and creative technologist with a passion for pushing the boundaries of digital innovation in West Africa.",
        imageUrl: "/creative-director-headshot.png",
        socialLinks: {
          linkedin: "https://linkedin.com/in/victor-edet-coleman",
          twitter: "https://twitter.com/victorcoleman",
          github: "https://github.com/victorcoleman"
        },
        active: true
      }
    ]

    // Sample gallery items
    const gallery = [
      {
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
        active: true
      },
      {
        title: "Neon City AR Experience",
        description: "Immersive augmented reality cityscape with dynamic lighting and interactive elements.",
        category: "AR/VR",
        imageUrl: "/neon-cyberpunk-city-ar-interface.jpg",
        artist: "Rypto Studio Team",
        year: "2024",
        software: ["Unity", "ARCore", "Blender"],
        tags: ["ar", "vr", "interactive", "cityscape"],
        featured: true,
        active: true
      },
      {
        title: "Fluid Motion Graphics",
        description: "Mesmerizing fluid simulations with particle systems and dynamic color transitions.",
        category: "Animation",
        imageUrl: "/abstract-fluid-motion-graphics-animation.jpg",
        artist: "Victor Edet Coleman",
        year: "2024",
        software: ["After Effects", "Cinema 4D", "Houdini"],
        tags: ["animation", "motion", "fluid", "particles"],
        featured: false,
        active: true
      },
      {
        title: "Digital Fashion Collection",
        description: "Cutting-edge digital fashion pieces designed for virtual environments and AR try-ons.",
        category: "Fashion",
        imageUrl: "/digital-fashion-3d-clothing-design.jpg",
        artist: "Rypto Studio Team",
        year: "2024",
        software: ["Marvelous Designer", "Blender", "CLO 3D"],
        tags: ["fashion", "3d", "clothing", "virtual"],
        featured: false,
        active: true
      },
      {
        title: "Interactive Web Portal",
        description: "Modern web interface with glassmorphism effects and smooth micro-interactions.",
        category: "Web Design",
        imageUrl: "/futuristic-web-interface-design.jpg",
        artist: "Victor Edet Coleman",
        year: "2024",
        software: ["Figma", "React", "Three.js"],
        tags: ["web", "ui", "interface", "modern"],
        featured: true,
        active: true
      },
      {
        title: "Holographic Brand Identity",
        description: "Futuristic brand identity system with holographic elements and dynamic typography.",
        category: "Branding",
        imageUrl: "/holographic-brand-identity-design.jpg",
        artist: "Rypto Studio Team",
        year: "2024",
        software: ["Adobe Creative Suite", "Blender", "After Effects"],
        tags: ["branding", "holographic", "identity", "typography"],
        featured: false,
        active: true
      },
      {
        title: "3D Product Visualization",
        description: "High-quality 3D product renders with realistic materials and lighting.",
        category: "3D Design",
        imageUrl: "/holographic-3d-product-display-technology.jpg",
        artist: "Victor Edet Coleman",
        year: "2024",
        software: ["Blender", "Cycles", "Photoshop"],
        tags: ["3d", "product", "visualization", "rendering"],
        featured: false,
        active: true
      },
      {
        title: "AR Fashion Interface",
        description: "Innovative AR interface for virtual fashion try-on experiences.",
        category: "AR/VR",
        imageUrl: "/ar-fashion-virtual-try-on-app-interface.jpg",
        artist: "Rypto Studio Team",
        year: "2024",
        software: ["Unity", "AR Foundation", "Blender"],
        tags: ["ar", "fashion", "interface", "virtual"],
        featured: false,
        active: true
      },
      {
        title: "AI Animation Interface",
        description: "Neural network-powered animation interface with intelligent automation.",
        category: "Animation",
        imageUrl: "/ai-animation-neural-network-interface.jpg",
        artist: "Victor Edet Coleman",
        year: "2024",
        software: ["After Effects", "Python", "TensorFlow"],
        tags: ["ai", "animation", "neural", "automation"],
        featured: true,
        active: true
      }
    ]

    // Insert data
    console.log('📊 Adding services...')
    for (const service of services) {
      await serviceDb.save(service)
    }

    console.log('👥 Adding team members...')
    for (const member of team) {
      await teamDb.save(member)
    }

    console.log('🖼️ Adding gallery items...')
    for (const item of gallery) {
      await galleryDb.save(item)
    }

    console.log('✅ Database initialized successfully!')

    return NextResponse.json({
      message: 'Database initialized successfully!',
      data: {
        services: services.length,
        team: team.length,
        gallery: gallery.length
      }
    })

  } catch (error) {
    console.error('❌ Error initializing database:', error)
    return NextResponse.json(
      { error: 'Failed to initialize database' },
      { status: 500 }
    )
  }
}
