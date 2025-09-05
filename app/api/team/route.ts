import { NextRequest, NextResponse } from 'next/server'
import { teamStorage } from '@/lib/simple-storage'

export async function GET() {
  try {
    const team = teamStorage.getAll()
    
    // Filter only active team members
    const activeTeam = team.filter(m => m.active)
    
    // Sort by creation date
    activeTeam.sort((a, b) => 
      new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )
    
    return NextResponse.json(activeTeam)
    
  } catch (error) {
    console.error('Get team error:', error)
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
    const { name, role, bio } = body
    
    if (!name || !role || !bio) {
      return NextResponse.json(
        { error: 'Name, role, and bio are required' },
        { status: 400 }
      )
    }
    
    // Create team member
    const member = {
      name: name.trim(),
      role: role.trim(),
      bio: bio.trim(),
      imageUrl: body.imageUrl?.trim(),
      socialLinks: {
        linkedin: body.socialLinks?.linkedin?.trim(),
        twitter: body.socialLinks?.twitter?.trim(),
        github: body.socialLinks?.github?.trim()
      },
      active: Boolean(body.active)
    }
    
    // Save to storage
    const id = teamStorage.save(member)
    
    return NextResponse.json(
      { 
        message: 'Team member created successfully',
        id: id 
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Create team member error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
