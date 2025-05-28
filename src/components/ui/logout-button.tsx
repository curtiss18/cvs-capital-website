'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LogoutButton() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>('')
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST' })
      
      if (response.ok) {
        // Only navigate if logout was successful
        router.push('/auth/login')
        router.refresh()
      } else {
        // Handle failed logout
        const errorData = await response.json().catch(() => ({ error: 'Logout failed' }))
        setError(errorData.error || 'Logout failed')
        console.error('Logout failed with status:', response.status)
      }
    } catch (error) {
      console.error('Logout request failed:', error)
      setError('Network error during logout')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-1">
      <Button
        onClick={handleLogout}
        variant="outline"
        size="sm"
        disabled={loading}
        className="text-xs"
      >
        {loading ? 'Logging out...' : 'Logout'}
      </Button>
      {error && (
        <div className="text-xs text-red-600 max-w-32 leading-tight">
          {error}
        </div>
      )}
    </div>
  )
}
