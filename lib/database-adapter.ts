import { sql } from '@vercel/postgres'
import { contactStorage, projectStorage, serviceStorage, teamStorage, galleryStorage, getStats as getFileStats } from './simple-storage'

// Check if we're in production (Vercel) or local development
const isProduction = process.env.NODE_ENV === 'production' && process.env.POSTGRES_URL

// Database initialization
export async function initDatabase() {
  if (isProduction) {
    try {
      // Create contacts table
      await sql`
        CREATE TABLE IF NOT EXISTS contacts (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          company VARCHAR(255),
          message TEXT NOT NULL,
          service VARCHAR(100),
          budget VARCHAR(50),
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `

      // Create projects table
      await sql`
        CREATE TABLE IF NOT EXISTS projects (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title VARCHAR(255) NOT NULL,
          description TEXT,
          category VARCHAR(100),
          image_url VARCHAR(500),
          client VARCHAR(255),
          year VARCHAR(4),
          status VARCHAR(50) DEFAULT 'completed',
          featured BOOLEAN DEFAULT false,
          active BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `

      // Create services table
      await sql`
        CREATE TABLE IF NOT EXISTS services (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title VARCHAR(255) NOT NULL,
          description TEXT,
          icon VARCHAR(100),
          features TEXT[],
          pricing VARCHAR(100),
          active BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `

      // Create team table
      await sql`
        CREATE TABLE IF NOT EXISTS team (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          name VARCHAR(255) NOT NULL,
          position VARCHAR(255),
          bio TEXT,
          image_url VARCHAR(500),
          social_links JSONB,
          active BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `

      // Create gallery table
      await sql`
        CREATE TABLE IF NOT EXISTS gallery (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          title VARCHAR(255) NOT NULL,
          description TEXT,
          category VARCHAR(100),
          image_url VARCHAR(500) NOT NULL,
          artist VARCHAR(255),
          year VARCHAR(4),
          dimensions VARCHAR(100),
          software TEXT[],
          tags TEXT[],
          featured BOOLEAN DEFAULT false,
          active BOOLEAN DEFAULT true,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
      `

      console.log('✅ Postgres database tables created successfully')
      return true
    } catch (error) {
      console.error('❌ Error creating Postgres tables:', error)
      return false
    }
  } else {
    console.log('📁 Using file-based storage for local development')
    return true
  }
}

// Contact operations
export const contactDb = {
  async getAll() {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM contacts ORDER BY created_at DESC`
      return rows
    } else {
      return contactStorage.getAll()
    }
  },

  async save(contact: any) {
    if (isProduction) {
      const { rows } = await sql`
        INSERT INTO contacts (name, email, company, message, service, budget)
        VALUES (${contact.name}, ${contact.email}, ${contact.company || ''}, ${contact.message}, ${contact.service || ''}, ${contact.budget || ''})
        RETURNING *
      `
      return rows[0]
    } else {
      return contactStorage.save(contact)
    }
  }
}

// Project operations
export const projectDb = {
  async getAll() {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM projects WHERE active = true ORDER BY created_at DESC`
      return rows
    } else {
      return projectStorage.getAll()
    }
  },

  async getById(id: string) {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM projects WHERE id = ${id}`
      return rows[0]
    } else {
      return projectStorage.getById(id)
    }
  },

  async save(project: any) {
    if (isProduction) {
      if (project.id) {
        // Update existing project
        const { rows } = await sql`
          UPDATE projects 
          SET title = ${project.title}, description = ${project.description || ''}, 
              category = ${project.category || ''}, image_url = ${project.imageUrl || ''},
              client = ${project.client || ''}, year = ${project.year || ''},
              status = ${project.status || 'completed'}, featured = ${project.featured || false},
              updated_at = CURRENT_TIMESTAMP
          WHERE id = ${project.id}
          RETURNING *
        `
        return rows[0]
      } else {
        // Create new project
        const { rows } = await sql`
          INSERT INTO projects (title, description, category, image_url, client, year, status, featured)
          VALUES (${project.title}, ${project.description || ''}, ${project.category || ''}, 
                  ${project.imageUrl || ''}, ${project.client || ''}, ${project.year || ''},
                  ${project.status || 'completed'}, ${project.featured || false})
          RETURNING *
        `
        return rows[0]
      }
    } else {
      return projectStorage.save(project)
    }
  },

  async delete(id: string) {
    if (isProduction) {
      await sql`DELETE FROM projects WHERE id = ${id}`
    } else {
      return projectStorage.delete(id)
    }
  }
}

// Service operations
export const serviceDb = {
  async getAll() {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM services WHERE active = true ORDER BY created_at DESC`
      return rows
    } else {
      return serviceStorage.getAll()
    }
  },

  async save(service: any) {
    if (isProduction) {
      if (service.id) {
        // Update existing service
        const { rows } = await sql`
          UPDATE services 
          SET title = ${service.title}, description = ${service.description || ''}, 
              icon = ${service.icon || ''}, features = ${service.features || []},
              pricing = ${service.pricing || ''}, updated_at = CURRENT_TIMESTAMP
          WHERE id = ${service.id}
          RETURNING *
        `
        return rows[0]
      } else {
        // Create new service
        const { rows } = await sql`
          INSERT INTO services (title, description, icon, features, pricing)
          VALUES (${service.title}, ${service.description || ''}, ${service.icon || ''}, 
                  ${service.features || []}, ${service.pricing || ''})
          RETURNING *
        `
        return rows[0]
      }
    } else {
      return serviceStorage.save(service)
    }
  }
}

// Team operations
export const teamDb = {
  async getAll() {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM team WHERE active = true ORDER BY created_at DESC`
      return rows
    } else {
      return teamStorage.getAll()
    }
  },

  async save(member: any) {
    if (isProduction) {
      if (member.id) {
        // Update existing member
        const { rows } = await sql`
          UPDATE team 
          SET name = ${member.name}, position = ${member.position || ''}, 
              bio = ${member.bio || ''}, image_url = ${member.imageUrl || ''},
              social_links = ${JSON.stringify(member.socialLinks || {})}, updated_at = CURRENT_TIMESTAMP
          WHERE id = ${member.id}
          RETURNING *
        `
        return rows[0]
      } else {
        // Create new member
        const { rows } = await sql`
          INSERT INTO team (name, position, bio, image_url, social_links)
          VALUES (${member.name}, ${member.position || ''}, ${member.bio || ''}, 
                  ${member.imageUrl || ''}, ${JSON.stringify(member.socialLinks || {})})
          RETURNING *
        `
        return rows[0]
      }
    } else {
      return teamStorage.save(member)
    }
  }
}

// Gallery operations
export const galleryDb = {
  async getAll() {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM gallery WHERE active = true ORDER BY created_at DESC`
      return rows
    } else {
      return galleryStorage.getAll()
    }
  },

  async getById(id: string) {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM gallery WHERE id = ${id}`
      return rows[0]
    } else {
      return galleryStorage.getById(id)
    }
  },

  async getByCategory(category: string) {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM gallery WHERE category = ${category} AND active = true ORDER BY created_at DESC`
      return rows
    } else {
      return galleryStorage.getByCategory(category)
    }
  },

  async getFeatured() {
    if (isProduction) {
      const { rows } = await sql`SELECT * FROM gallery WHERE featured = true AND active = true ORDER BY created_at DESC`
      return rows
    } else {
      return galleryStorage.getFeatured()
    }
  },

  async save(item: any) {
    if (isProduction) {
      if (item.id) {
        // Update existing item
        const { rows } = await sql`
          UPDATE gallery 
          SET title = ${item.title}, description = ${item.description || ''}, 
              category = ${item.category || ''}, image_url = ${item.imageUrl},
              artist = ${item.artist || ''}, year = ${item.year || ''},
              dimensions = ${item.dimensions || ''}, software = ${item.software || []},
              tags = ${item.tags || []}, featured = ${item.featured || false},
              updated_at = CURRENT_TIMESTAMP
          WHERE id = ${item.id}
          RETURNING *
        `
        return rows[0]
      } else {
        // Create new item
        const { rows } = await sql`
          INSERT INTO gallery (title, description, category, image_url, artist, year, dimensions, software, tags, featured)
          VALUES (${item.title}, ${item.description || ''}, ${item.category || ''}, 
                  ${item.imageUrl}, ${item.artist || ''}, ${item.year || ''},
                  ${item.dimensions || ''}, ${item.software || []}, ${item.tags || []}, ${item.featured || false})
          RETURNING *
        `
        return rows[0]
      }
    } else {
      return galleryStorage.save(item)
    }
  },

  async delete(id: string) {
    if (isProduction) {
      await sql`DELETE FROM gallery WHERE id = ${id}`
    } else {
      return galleryStorage.delete(id)
    }
  }
}

// Get statistics
export async function getStats() {
  if (isProduction) {
    try {
      const [contactsResult, projectsResult, servicesResult, teamResult, galleryResult] = await Promise.all([
        sql`SELECT COUNT(*) as count FROM contacts`,
        sql`SELECT COUNT(*) as count FROM projects WHERE active = true`,
        sql`SELECT COUNT(*) as count FROM services WHERE active = true`,
        sql`SELECT COUNT(*) as count FROM team WHERE active = true`,
        sql`SELECT COUNT(*) as count FROM gallery WHERE active = true`
      ])

      return {
        totalContacts: parseInt(contactsResult.rows[0].count),
        totalProjects: parseInt(projectsResult.rows[0].count),
        totalServices: parseInt(servicesResult.rows[0].count),
        totalTeam: parseInt(teamResult.rows[0].count),
        totalGallery: parseInt(galleryResult.rows[0].count)
      }
    } catch (error) {
      console.error('Error getting stats:', error)
      return {
        totalContacts: 0,
        totalProjects: 0,
        totalServices: 0,
        totalTeam: 0,
        totalGallery: 0
      }
    }
  } else {
    return getFileStats()
  }
}
