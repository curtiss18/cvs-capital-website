import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip auth for login page, API routes, and static assets
  if (
    request.nextUrl.pathname.startsWith('/auth') || 
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  // Check for auth cookie
  const authCookie = request.cookies.get('cvs-auth')
  const expectedToken = process.env.AUTH_TOKEN || 'default-token'
  
  if (!authCookie || authCookie.value !== expectedToken) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - auth (login page)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|auth).*)',
  ],
}
