'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  
  // Restore client-side navigation for SPA behavior
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      if (response.ok) {
        setSuccess(true)
        setError('')
        // Use Next.js router for client-side navigation to maintain SPA performance
        setTimeout(async () => {
          console.log('Starting navigation process...')
          // Force refresh middleware state, then navigate
          router.refresh()
          console.log('Router refresh called')
          // Small additional delay to ensure refresh completes
          await new Promise(resolve => setTimeout(resolve, 200))
          console.log('Attempting router.replace to /')
          // Use replace instead of push to avoid back button issues
          router.replace('/')
          console.log('Router.replace called')
        }, 1500)
      } else {
        setError('Invalid access code. Please check your credentials and try again.')
      }
    } catch {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-sage-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="w-full" padding="xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-sage-900 mb-3">
              CVS Capital
            </h1>
            <div className="w-16 h-1 bg-sage-400 mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-sage-800 mb-2">
              Compliance Review Access
            </h2>
            <p className="text-sage-700 leading-relaxed">
              This website is currently under regulatory compliance review. 
              Please enter your access code to continue to the site preview.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              type="password"
              label="Access Code"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              placeholder="Enter your compliance access code"
              required
              className="text-center"
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={loading || success}
            >
              {success ? 'Access Granted! Redirecting...' : loading ? 'Verifying Access...' : 'Access Website'}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-sage-200">
            <div className="text-center text-sm text-sage-600 space-y-2">
              <p className="font-medium">Need Access?</p>
              <p>Contact Curtis Shaffer for compliance review credentials:</p>
              <div className="space-y-1">
                <p className="font-medium text-sage-800">curtis.shaffer@instituteforwealth.com</p>
                <p className="font-medium text-sage-800">(775) 309-7092</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-6">
          <p className="text-sm text-sage-600">
            CVS Capital operates under Institute for Wealth Management RIA
          </p>
        </div>
      </div>
    </div>
  )
}
