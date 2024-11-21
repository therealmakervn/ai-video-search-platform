'use client'

import React, { useState } from 'react'
import { useVideoSearch, VideoSearchOptions } from '@/hooks/useVideoSearch'

const CATEGORIES = [
  'News', 'Sports', 'Entertainment', 'Technology', 
  'Education', 'Music', 'Travel', 'Gaming'
]

export default function VideoSearchComponent() {
  const { videos, loading, error, totalResults, search, clearResults } = useVideoSearch()
  const [searchOptions, setSearchOptions] = useState<VideoSearchOptions>({
    query: '',
    minConfidence: 0.5,
    sortBy: 'relevance',
    filterByCategory: []
  })

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    search(searchOptions)
  }

  const updateSearchOption = <K extends keyof VideoSearchOptions>(
    key: K, 
    value: VideoSearchOptions[K]
  ) => {
    setSearchOptions(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Tìm Kiếm Video Thông Minh
        </h1>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Nhập từ khóa tìm kiếm..."
              value={searchOptions.query}
              onChange={(e) => updateSearchOption('query', e.target.value)}
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
            >
              {loading ? 'Đang Tìm...' : 'Tìm Kiếm'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Độ Chính Xác Tối Thiểu
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={searchOptions.minConfidence}
                onChange={(e) => updateSearchOption('minConfidence', parseFloat(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-600">
                {(searchOptions.minConfidence * 100).toFixed(0)}%
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sắp Xếp Theo
              </label>
              <select
                value={searchOptions.sortBy}
                onChange={(e) => updateSearchOption('sortBy', e.target.value as 'relevance' | 'date' | 'views')}
                className="w-full px-4 py-2 border rounded-lg"
              >
                <option value="relevance">Độ Liên Quan</option>
                <option value="date">Ngày Đăng</option>
                <option value="views">Lượt Xem</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Danh Mục
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    const currentCategories = searchOptions.filterByCategory || []
                    const newCategories = currentCategories.includes(category)
                      ? currentCategories.filter(c => c !== category)
                      : [...currentCategories, category]
                    updateSearchOption('filterByCategory', newCategories)
                  }}
                  className={`px-3 py-1 rounded-full text-sm transition ${
                    (searchOptions.filterByCategory || []).includes(category)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </form>

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 mt-4">
            <p className="font-medium">{error}</p>
          </div>
        )}

        {videos.length > 0 && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Kết Quả Tìm Kiếm ({totalResults} video)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map(video => (
                <div 
                  key={video.id} 
                  className="bg-white shadow-md rounded-lg overflow-hidden transform transition hover:scale-105"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail_url} 
                      alt={video.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                      {(video.confidence * 100).toFixed(0)}% Phù Hợp
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 truncate">{video.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{video.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <a 
                        href={video.video_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        Xem Video
                      </a>
                      <span className="text-xs text-gray-500">
                        {new Date(video.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
