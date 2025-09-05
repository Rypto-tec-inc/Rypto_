import { NextResponse } from 'next/server'
import { getStats, initDatabase } from '@/lib/database-adapter'

export async function GET() {
  try {
    // Initialize database if needed
    await initDatabase()
    
    const stats = await getStats()
    return NextResponse.json(stats)
    
  } catch (error) {
    console.error('Get admin stats error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
