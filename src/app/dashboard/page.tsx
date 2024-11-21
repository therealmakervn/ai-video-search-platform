'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Dashboard() {
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth')
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-96 text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Dashboard</h1>
        
        {user && (
          <div>
            <p className="text-gray-700 mb-4">
              Xin chào, <span className="font-semibold">{user.email}</span>
            </p>
            
            <div className="space-y-4">
              <button 
                onClick={() => router.push('/video-search')}
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Tìm Kiếm Video
              </button>
              
              <button 
                onClick={() => router.push('/profile')}
                className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Hồ Sơ Cá Nhân
              </button>
              
              <button 
                onClick={signOut}
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Đăng Xuất
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
