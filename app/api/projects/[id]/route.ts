import { NextRequest, NextResponse } from 'next/server'
import { projectStorage } from '@/lib/simple-storage'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const project = projectStorage.getById(params.id)
    
    if (!project) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(project)
    
  } catch (error) {
    console.error('Get project error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    
    // Check if project exists
    const existingProject = projectStorage.getById(params.id)
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }
    
    // Update project
    const updatedProject = {
      ...existingProject,
      title: body.title?.trim() || existingProject.title,
      description: body.description?.trim() || existingProject.description,
      category: body.category?.trim() || existingProject.category,
      technologies: body.technologies || existingProject.technologies,
      imageUrl: body.imageUrl?.trim() || existingProject.imageUrl,
      liveUrl: body.liveUrl?.trim() || existingProject.liveUrl,
      githubUrl: body.githubUrl?.trim() || existingProject.githubUrl,
      featured: body.featured !== undefined ? Boolean(body.featured) : existingProject.featured
    }
    
    projectStorage.save(updatedProject)
    
    return NextResponse.json(
      { 
        message: 'Project updated successfully',
        project: updatedProject 
      }
    )
    
  } catch (error) {
    console.error('Update project error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Check if project exists
    const existingProject = projectStorage.getById(params.id)
    if (!existingProject) {
      return NextResponse.json(
        { error: 'Project not found' },
        { status: 404 }
      )
    }
    
    projectStorage.delete(params.id)
    
    return NextResponse.json(
      { message: 'Project deleted successfully' }
    )
    
  } catch (error) {
    console.error('Delete project error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
