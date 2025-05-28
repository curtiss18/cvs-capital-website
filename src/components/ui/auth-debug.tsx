'use client'

import { useEffect, useState } from 'react'

export function AuthDebug() {
  const [cookieInfo, setCookieInfo] = useState<string>('')

  useEffect(() => {
    // Check cookies in browser
    const allCookies = document.cookie
    setCookieInfo(allCookies || 'No cookies found')
  }, [])

  return (
    <div className="fixed bottom-4 right-4 bg-white p-3 border border-sage-200 rounded-lg shadow-lg text-xs max-w-xs">
      <div className="font-semibold text-sage-900 mb-1">Auth Debug</div>
      <div className="text-sage-600">
        <div>Cookies: {cookieInfo}</div>
        <div>Pathname: {window.location.pathname}</div>
      </div>
    </div>
  )
}
