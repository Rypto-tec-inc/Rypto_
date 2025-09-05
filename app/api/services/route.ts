import { NextRequest, NextResponse } from 'next/server'
import { serviceStorage } from '@/lib/simple-storage'

export async function GET() {
  try {
    const services = serviceStorage.getAll()
    
    // Filter only active services
    const activeServices = services.filter(s => s.active)
    
    // Sort by creation date
    activeServices.sort((a, b) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
    
    return NextResponse.json(activeServices)
    
  } catch (error) {
    console.error('Get services error:', error)
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
    const { title, description, icon, features } = body
    
    if (!title || !description || !icon || !features) {
      return NextResponse.json(
        { error: 'Title, description, icon, and features are required' },
        { status: 400 }
      )
    }
    
    // Create service
    const service = {
      title: title.trim(),
      description: description.trim(),
      icon: icon.trim(),
      features: Array.isArray(features) ? features : [features],
      price: body.price?.trim(),
      active: Boolean(body.active)
    }
    
    // Save to storage
    const id = serviceStorage.save(service)
    
    return NextResponse.json(
      { 
        message: 'Service created successfully',
        id: id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Create service error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
