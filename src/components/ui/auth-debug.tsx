'use client'

import { useEffect, useState } from 'react'

export function AuthDebug() {
  const [authCookieStatus, setAuthCookieStatus] = useState<string>('')
  const [pathname, setPathname] = useState<string>('')

  useEffect(() => {
    // Only check for specific auth cookie, not all cookies
    const authCookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('cvs-auth='))
    
    setAuthCookieStatus(authCookie ? 'Auth cookie present' : 'No auth cookie')
    
    // Safely access window.location.pathname on client side only
    setPathname(window.location.pathname)
  }, [])

  // Only render in development environment
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 border border-sage-200 rounded-lg shadow-lg text-xs max-w-xs">
      <div className="font-semibold text-sage-900 mb-1">Auth Debug</div>
      <div className="text-sage-600">
        <div>Auth Status: {authCookieStatus}</div>
        <div>Pathname: {pathname || 'Loading...'}</div>
        <div className="text-xs text-sage-500 mt-1">Dev Mode Only</div>
      </div>
    </div>
  )
}
