import { sql } from '@vercel/postgres'

// Database initialization
export async function initDatabase() {
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

    console.log('✅ Database tables created successfully')
    return true
  } catch (error) {
    console.error('❌ Error creating database tables:', error)
    return false
  }
}

// Contact operations
export const contactDb = {
  async getAll() {
    const { rows } = await sql`SELECT * FROM contacts ORDER BY created_at DESC`
    return rows
  },

  async save(contact: any) {
    const { rows } = await sql`
      INSERT INTO contacts (name, email, company, message, service, budget)
      VALUES (${contact.name}, ${contact.email}, ${contact.company || ''}, ${contact.message}, ${contact.service || ''}, ${contact.budget || ''})
      RETURNING *
    `
    return rows[0]
  }
}

// Project operations
export const projectDb = {
  async getAll() {
    const { rows } = await sql`SELECT * FROM projects WHERE active = true ORDER BY created_at DESC`
    return rows
  },

  async getById(id: string) {
    const { rows } = await sql`SELECT * FROM projects WHERE id = ${id}`
    return rows[0]
  },

  async save(project: any) {
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
  },

  async delete(id: string) {
    await sql`DELETE FROM projects WHERE id = ${id}`
  }
}

// Service operations
export const serviceDb = {
  async getAll() {
    const { rows } = await sql`SELECT * FROM services WHERE active = true ORDER BY created_at DESC`
    return rows
  },

  async save(service: any) {
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
  }
}

// Team operations
export const teamDb = {
  async getAll() {
    const { rows } = await sql`SELECT * FROM team WHERE active = true ORDER BY created_at DESC`
    return rows
  },

  async save(member: any) {
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
  }
}

// Gallery operations
export const galleryDb = {
  async getAll() {
    const { rows } = await sql`SELECT * FROM gallery WHERE active = true ORDER BY created_at DESC`
    return rows
  },

  async getById(id: string) {
    const { rows } = await sql`SELECT * FROM gallery WHERE id = ${id}`
    return rows[0]
  },

  async getByCategory(category: string) {
    const { rows } = await sql`SELECT * FROM gallery WHERE category = ${category} AND active = true ORDER BY created_at DESC`
    return rows
  },

  async getFeatured() {
    const { rows } = await sql`SELECT * FROM gallery WHERE featured = true AND active = true ORDER BY created_at DESC`
    return rows
  },

  async save(item: any) {
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
  },

  async delete(id: string) {
    await sql`DELETE FROM gallery WHERE id = ${id}`
  }
}

// Get statistics
export async function getStats() {
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
}
