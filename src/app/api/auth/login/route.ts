import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    
    // Check against environment variable
    const compliancePassword = process.env.COMPLIANCE_PASSWORD
    
    if (!compliancePassword) {
      console.error('COMPLIANCE_PASSWORD environment variable not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }
    
    if (password === compliancePassword) {
      const response = NextResponse.json({ success: true })
      
      // Set secure cookie (7 days)
      const authToken = process.env.AUTH_TOKEN
      const isProduction = process.env.NODE_ENV === 'production'
      
      if (!authToken) {
        console.error('AUTH_TOKEN environment variable not set')
        return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
      }
      
      response.cookies.set('cvs-auth', authToken, {
        httpOnly: true,
        secure: isProduction,
        maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
        path: '/',
        sameSite: isProduction ? 'strict' : 'lax'
        // Domain property omitted to let browser handle automatically
      })
      
      return response
    }
    
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}
