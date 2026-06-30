'use client'

import { useRouter } from 'next/navigation'
import { logoutAction } from '@/app/actions/auth'

export default function AdminDashboard() {
  const router = useRouter()

  const handleLogout = async () => {
    await logoutAction()
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans px-8 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-8">
          <div>
            <h1 className="text-3xl font-display font-black text-white">Dashboard</h1>
            <p className="text-neutral-400 mt-1">Welcome to the V-Media admin panel.</p>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 rounded-lg border border-neutral-800 hover:bg-neutral-800 transition-colors font-display text-sm"
          >
            Logout
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-neutral-800">
            <h2 className="text-xl font-display font-bold mb-2">Database Status</h2>
            <p className="text-neutral-400 text-sm">MongoDB connection is configured. You can expand this dashboard to view collections, users, and leads.</p>
          </div>
          <div className="bg-[#1E1E1E] p-6 rounded-2xl border border-neutral-800">
            <h2 className="text-xl font-display font-bold mb-2">Quick Stats</h2>
            <p className="text-neutral-400 text-sm">Currently no data sources connected for quick stats.</p>
          </div>
        </main>
      </div>
    </div>
  )
}
