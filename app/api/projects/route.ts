import { NextRequest, NextResponse } from 'next/server'
import { projectStorage } from '@/lib/simple-storage'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get('featured')
    const category = searchParams.get('category')
    
    let projects = projectStorage.getAll()
    
    // Filter by featured
    if (featured === 'true') {
      projects = projects.filter(p => p.featured)
    }
    
    // Filter by category
    if (category) {
      projects = projects.filter(p => 
        p.category.toLowerCase() === category.toLowerCase()
      )
    }
    
    // Sort by creation date (newest first)
    projects.sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    
    return NextResponse.json(projects)
    
  } catch (error) {
    console.error('Get projects error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { title, description, category, technologies } = body
    
    if (!title || !description || !category || !technologies) {
      return NextResponse.json(
        { error: 'Title, description, category, and technologies are required' },
        { status: 400 }
      )
    }
    
    // Create project
    const project = {
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      technologies: Array.isArray(technologies) ? technologies : [technologies],
      imageUrl: body.imageUrl?.trim(),
      liveUrl: body.liveUrl?.trim(),
      githubUrl: body.githubUrl?.trim(),
      featured: Boolean(body.featured)
    }
    
    // Save to storage
    const id = projectStorage.save(project)
    
    return NextResponse.json(
      { 
        message: 'Project created successfully',
        id: id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Create project error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
