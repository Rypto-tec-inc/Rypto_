import { NextRequest, NextResponse } from 'next/server'
import { contactDb, initDatabase } from '@/lib/database-adapter'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email, message } = body
    
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }
    
    // Create contact submission
    const contact = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: body.company?.trim(),
      message: message.trim(),
      service: body.service?.trim(),
      budget: body.budget?.trim()
    }
    
    // Initialize database if needed
    await initDatabase()
    
    // Save to Vercel Postgres
    const savedContact = await contactDb.save(contact)
    
    // Log the submission (in production, you might want to send an email)
    console.log('New contact submission:', {
      id: savedContact.id,
      name: contact.name,
      email: contact.email,
      company: contact.company,
      service: contact.service
    })
    
    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        id: savedContact.id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    // Initialize database if needed
    await initDatabase()
    
    const contacts = await contactDb.getAll()
    
    // Return only basic info for security
    const publicContacts = contacts.map((contact: any) => ({
      id: contact.id,
      name: contact.name,
      company: contact.company,
      service: contact.service,
      created_at: contact.created_at
    }))
    
    return NextResponse.json(publicContacts)
    
  } catch (error) {
    console.error('Get contacts error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
