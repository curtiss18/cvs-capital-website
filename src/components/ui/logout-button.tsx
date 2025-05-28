'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true)
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      router.push('/auth/login')
      router.refresh()
    } catch (error) {
      console.error('Logout failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      size="sm"
      disabled={loading}
      className="text-xs"
    >
      {loading ? 'Logging out...' : 'Logout'}
    </Button>
  )
}
