import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const response = NextResponse.json({ success: true })
    
    // Clear the auth cookie
    const isProduction = process.env.NODE_ENV === 'production'
    
    response.cookies.set('cvs-auth', '', {
      httpOnly: true,
      secure: isProduction,
      maxAge: 0, // Expire immediately
      path: '/',
      sameSite: isProduction ? 'strict' : 'lax'
    })
    
    return response
  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ error: 'Logout failed' }, { status: 500 })
  }
}
