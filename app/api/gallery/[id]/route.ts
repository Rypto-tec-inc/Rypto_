import { NextRequest, NextResponse } from 'next/server'
import { galleryStorage } from '@/lib/simple-storage'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const galleryItem = galleryStorage.getById(params.id)
    
    if (!galleryItem) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(galleryItem)
    
  } catch (error) {
    console.error('Get gallery item error:', error)
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
    
    // Check if gallery item exists
    const existingItem = galleryStorage.getById(params.id)
    if (!existingItem) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      )
    }
    
    // Update gallery item
    const updatedItem = {
      ...existingItem,
      title: body.title?.trim() || existingItem.title,
      description: body.description?.trim() || existingItem.description,
      category: body.category?.trim() || existingItem.category,
      imageUrl: body.imageUrl?.trim() || existingItem.imageUrl,
      artist: body.artist?.trim() || existingItem.artist,
      year: body.year?.trim() || existingItem.year,
      dimensions: body.dimensions?.trim() || existingItem.dimensions,
      software: body.software || existingItem.software,
      tags: body.tags || existingItem.tags,
      featured: body.featured !== undefined ? Boolean(body.featured) : existingItem.featured,
      active: body.active !== undefined ? Boolean(body.active) : existingItem.active
    }
    
    galleryStorage.save(updatedItem)
    
    return NextResponse.json(
      { 
        message: 'Gallery item updated successfully',
        item: updatedItem 
      }
    )
    
  } catch (error) {
    console.error('Update gallery item error:', error)
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
    // Check if gallery item exists
    const existingItem = galleryStorage.getById(params.id)
    if (!existingItem) {
      return NextResponse.json(
        { error: 'Gallery item not found' },
        { status: 404 }
      )
    }
    
    galleryStorage.delete(params.id)
    
    return NextResponse.json(
      { message: 'Gallery item deleted successfully' }
    )
    
  } catch (error) {
    console.error('Delete gallery item error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
