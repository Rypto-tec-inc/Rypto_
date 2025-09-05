import { NextRequest, NextResponse } from 'next/server'
import { galleryDb, initDatabase } from '@/lib/database-adapter'

export async function GET(request: NextRequest) {
  try {
    // Initialize database if needed
    await initDatabase()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const featured = searchParams.get('featured')
    
    let galleryItems
    
    if (category && category !== 'All') {
      galleryItems = await galleryDb.getByCategory(category)
    } else if (featured === 'true') {
      galleryItems = await galleryDb.getFeatured()
    } else {
      galleryItems = await galleryDb.getAll()
    }
    
    return NextResponse.json(galleryItems)
    
  } catch (error) {
    console.error('Get gallery items error:', error)
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
    const { title, description, category, imageUrl } = body
    
    if (!title || !description || !category || !imageUrl) {
      return NextResponse.json(
        { error: 'Title, description, category, and imageUrl are required' },
        { status: 400 }
      )
    }
    
    // Create gallery item
    const galleryItem = {
      title: title.trim(),
      description: description.trim(),
      category: category.trim(),
      imageUrl: imageUrl.trim(),
      artist: body.artist?.trim(),
      year: body.year?.trim() || new Date().getFullYear().toString(),
      dimensions: body.dimensions?.trim(),
      software: Array.isArray(body.software) ? body.software : [],
      tags: Array.isArray(body.tags) ? body.tags : [],
      featured: Boolean(body.featured),
      active: Boolean(body.active)
    }
    
    // Initialize database if needed
    await initDatabase()
    
    // Save to Vercel Postgres
    const savedItem = await galleryDb.save(galleryItem)
    
    return NextResponse.json(
      { 
        message: 'Gallery item created successfully',
        id: savedItem.id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Create gallery item error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
