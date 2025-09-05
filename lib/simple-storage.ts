import fs from 'fs'
import path from 'path'

const dataDir = path.join(process.cwd(), 'data')

// Ensure data directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

const getFilePath = (filename: string) => path.join(dataDir, filename)

const loadData = (filename: string) => {
  try {
    const filePath = getFilePath(filename)
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf8')
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error(`Error loading ${filename}:`, error)
    return []
  }
}

export const saveData = (filename: string, data: any) => {
  try {
    const filePath = getFilePath(filename)
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
    return true
  } catch (error) {
    console.error(`Error saving ${filename}:`, error)
    return false
  }
}

// Contact storage
export const contactStorage = {
  getAll: () => loadData('contacts.json'),
  save: (contact: any) => {
    const contacts = loadData('contacts.json')
    const newContact = {
      id: crypto.randomUUID(),
      ...contact,
      createdAt: new Date().toISOString()
    }
    contacts.push(newContact)
    saveData('contacts.json', contacts)
    return newContact.id
  }
}

// Service storage
export const serviceStorage = {
  getAll: () => loadData('services.json'),
  getById: (id: string) => {
    const services = loadData('services.json')
    return services.find((s: any) => s.id === id)
  },
  save: (service: any) => {
    const services = loadData('services.json')
    if (service.id) {
      const index = services.findIndex((s: any) => s.id === service.id)
      if (index >= 0) {
        services[index] = { ...service, updatedAt: new Date().toISOString() }
      }
    } else {
      const newService = {
        id: crypto.randomUUID(),
        ...service,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      services.push(newService)
    }
    saveData('services.json', services)
    return service.id || services[services.length - 1].id
  },
  delete: (id: string) => {
    const services = loadData('services.json')
    const filtered = services.filter((s: any) => s.id !== id)
    saveData('services.json', filtered)
  }
}

// Team storage
export const teamStorage = {
  getAll: () => loadData('team.json'),
  getById: (id: string) => {
    const team = loadData('team.json')
    return team.find((m: any) => m.id === id)
  },
  save: (member: any) => {
    const team = loadData('team.json')
    if (member.id) {
      const index = team.findIndex((m: any) => m.id === member.id)
      if (index >= 0) {
        team[index] = { ...member, updatedAt: new Date().toISOString() }
      }
    } else {
      const newMember = {
        id: crypto.randomUUID(),
        ...member,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      team.push(newMember)
    }
    saveData('team.json', team)
    return member.id || team[team.length - 1].id
  },
  delete: (id: string) => {
    const team = loadData('team.json')
    const filtered = team.filter((m: any) => m.id !== id)
    saveData('team.json', filtered)
  }
}

// Project storage
export const projectStorage = {
  getAll: () => loadData('projects.json'),
  getById: (id: string) => {
    const projects = loadData('projects.json')
    return projects.find((p: any) => p.id === id)
  },
  save: (project: any) => {
    const projects = loadData('projects.json')
    if (project.id) {
      const index = projects.findIndex((p: any) => p.id === project.id)
      if (index >= 0) {
        projects[index] = { ...project, updatedAt: new Date().toISOString() }
      }
    } else {
      const newProject = {
        id: crypto.randomUUID(),
        ...project,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      projects.push(newProject)
    }
    saveData('projects.json', projects)
    return project.id || projects[projects.length - 1].id
  },
  delete: (id: string) => {
    const projects = loadData('projects.json')
    const filtered = projects.filter((p: any) => p.id !== id)
    saveData('projects.json', filtered)
  }
}

// Gallery storage
export const galleryStorage = {
  getAll: () => loadData('gallery.json'),
  getById: (id: string) => {
    const gallery = loadData('gallery.json')
    return gallery.find((g: any) => g.id === id)
  },
  getByCategory: (category: string) => {
    const gallery = loadData('gallery.json')
    return gallery.filter((g: any) => g.category === category && g.active)
  },
  getFeatured: () => {
    const gallery = loadData('gallery.json')
    return gallery.filter((g: any) => g.featured && g.active)
  },
  save: (item: any) => {
    const gallery = loadData('gallery.json')
    if (item.id) {
      const index = gallery.findIndex((g: any) => g.id === item.id)
      if (index >= 0) {
        gallery[index] = { ...item, updatedAt: new Date().toISOString() }
      }
    } else {
      const newItem = {
        id: crypto.randomUUID(),
        ...item,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      gallery.push(newItem)
    }
    saveData('gallery.json', gallery)
    return item.id || gallery[gallery.length - 1].id
  },
  delete: (id: string) => {
    const gallery = loadData('gallery.json')
    const filtered = gallery.filter((g: any) => g.id !== id)
    saveData('gallery.json', filtered)
  }
}

// Stats
export const getStats = () => {
  const contacts = contactStorage.getAll()
  const projects = projectStorage.getAll()
  const services = serviceStorage.getAll()
  const team = teamStorage.getAll()
  const gallery = galleryStorage.getAll()

  const weekAgo = new Date()
  weekAgo.setDate(weekAgo.getDate() - 7)

  return {
    contacts: {
      total: contacts.length,
      recent: contacts.filter((c: any) => new Date(c.createdAt) > weekAgo).length
    },
    projects: {
      total: projects.length,
      featured: projects.filter((p: any) => p.featured).length,
      categories: [...new Set(projects.map((p: any) => p.category))]
    },
    services: {
      total: services.length,
      active: services.filter((s: any) => s.active).length
    },
    team: {
      total: team.length,
      active: team.filter((m: any) => m.active).length
    },
    gallery: {
      total: gallery.length,
      active: gallery.filter((g: any) => g.active).length,
      featured: gallery.filter((g: any) => g.featured && g.active).length,
      categories: [...new Set(gallery.map((g: any) => g.category))]
    }
  }
}
