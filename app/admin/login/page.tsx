'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { loginAction } from '@/app/actions/auth'
import { ArrowRight } from 'lucide-react'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const result = await loginAction(password)
      if (result.success) {
        router.push('/admin')
      } else {
        setError(result.error || 'Login failed')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      <div className="w-full max-w-md relative z-10 bg-[#1E1E1E] border border-neutral-800 p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-black text-white">Admin Access</h1>
          <p className="text-neutral-400 mt-2 text-sm font-display">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-5 py-4 rounded-xl border border-neutral-800 bg-[#121212] font-display text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#FFD200] transition-colors"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-display text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 rounded-xl bg-white text-neutral-950 font-bold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center space-x-2 font-display disabled:opacity-50"
          >
            <span>{loading ? 'Authenticating...' : 'Login'}</span>
            {!loading && <ArrowRight className="w-4 h-4 text-neutral-950" />}
          </button>
        </form>
      </div>
    </div>
  )
}
