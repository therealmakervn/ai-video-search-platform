import React, { useState, useRef, useEffect } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { createClient } from '@supabase/supabase-js'
import OpenAI from 'openai'
import { searchVideos, analyzeVideo } from '@/lib/twelvelabs'

interface VideoResult {
  id: string
  video_url: string
  title?: string
  description?: string
  confidence: number
  metadata?: any
  twelvelabsAnalysis?: {
    summary?: string
    topics?: string[]
    objects?: string[]
    actions?: string[]
    emotions?: string[]
    technicalMetadata?: {
      duration?: number
      resolution?: string
      language?: string
    }
  }
  aiSummary?: string
}

export default function VideoPlayer() {
  const [searchQuery, setSearchQuery] = useState('')
  const [videos, setVideos] = useState<VideoResult[]>([])
  const [selectedVideo, setSelectedVideo] = useState<VideoResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<any>(null)

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  })

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        responsive: true,
        fluid: true
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
      }
    }
  }, [selectedVideo])

  const generateVideoSummary = async (videoUrl: string, twelvelabsAnalysis: any): Promise<string> => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              { 
                type: "text", 
                text: `Tạo một bản tóm tắt ngắn gọn về nội dung video. Sử dụng các chủ đề sau để làm gợi ý: ${twelvelabsAnalysis.topics?.join(', ') || 'Không có thông tin'}` 
              },
              { type: "image_url", image_url: { url: videoUrl } }
            ]
          }
        ],
        max_tokens: 300
      })

      return response.choices[0].message.content || "Không thể tạo tóm tắt"
    } catch (error) {
      console.error("Lỗi tạo tóm tắt video:", error)
      return "Lỗi phân tích video"
    }
  }

  const handleSearch = async (query?: string) => {
    setIsLoading(true)
    try {
      const searchText = query || searchQuery
      const indexId = process.env.NEXT_PUBLIC_TWELVE_LABS_VIDEO_INDEX_ID || ''
      
      if (!indexId) {
        setError('Không tìm thấy Index ID của TwelveLabs')
        return
      }
      
      // Tìm kiếm video từ Supabase
      let { data: supabaseVideos, error: supabaseError } = await supabase
        .from('videos')
        .select('*')
        .or(`title.ilike.%${searchText}%,description.ilike.%${searchText}%`)
        .limit(10)

      if (supabaseError) {
        throw supabaseError
      }

      // Tìm kiếm video từ TwelveLabs
      const twelvelabsResults = await searchVideos(searchText, indexId)
      
      // Xử lý và phân tích song song
      const processedVideos: VideoResult[] = await Promise.all(
        twelvelabsResults.data.map(async (result: any) => {
          try {
            // Phân tích video với TwelveLabs
            const twelvelabsAnalysis = await analyzeVideo(result.videoUrl, indexId)
            
            // Nâng cao phân tích với OpenAI
            const aiSummary = await generateVideoSummary(result.videoUrl, twelvelabsAnalysis)

            return {
              id: result.id,
              video_url: result.videoUrl,
              confidence: result.confidence,
              metadata: result.metadata,
              twelvelabsAnalysis: {
                summary: twelvelabsAnalysis.summary,
                topics: twelvelabsAnalysis.topics,
                objects: twelvelabsAnalysis.objects,
                actions: twelvelabsAnalysis.actions,
                emotions: twelvelabsAnalysis.emotions,
                technicalMetadata: {
                  duration: twelvelabsAnalysis.metadata?.duration,
                  resolution: twelvelabsAnalysis.metadata?.resolution,
                  language: twelvelabsAnalysis.metadata?.language
                }
              },
              aiSummary: aiSummary
            }
          } catch (analysisError) {
            console.error('Lỗi phân tích video:', analysisError)
            return {
              id: result.id,
              video_url: result.videoUrl,
              confidence: result.confidence,
              metadata: result.metadata
            }
          }
        })
      )

      setVideos(processedVideos)
      setError(processedVideos.length === 0 ? 'Không tìm thấy video nào phù hợp' : null)
    } catch (error) {
      console.error('Lỗi tìm kiếm video:', error)
      setError('Đã xảy ra lỗi khi tìm kiếm video')
    } finally {
      setIsLoading(false)
    }
  }

  const selectVideo = (video: VideoResult) => {
    setSelectedVideo(video)
    if (playerRef.current && videoRef.current) {
      playerRef.current.src(video.video_url)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="search-section mb-4">
        <input
          type="text"
          placeholder="Tìm kiếm video thông minh... (Tin tức, Giải trí, Thể thao)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button 
          onClick={() => handleSearch()}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Tìm Kiếm
        </button>
      </div>

      {isLoading && <p>Đang tải...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="video-section flex">
        <div className="video-list w-1/3 pr-4">
          {videos.map((video) => (
            <div 
              key={video.id} 
              onClick={() => selectVideo(video)}
              className={`cursor-pointer p-2 border ${selectedVideo?.id === video.id ? 'bg-blue-100' : ''}`}
            >
              <p>Độ chính xác: {(video.confidence * 100).toFixed(2)}%</p>
              {video.twelvelabsAnalysis && (
                <div>
                  <p className="text-sm">Chủ đề: {video.twelvelabsAnalysis.topics?.slice(0, 3).join(', ')}</p>
                  {video.aiSummary && <p className="text-sm">{video.aiSummary}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="video-player w-2/3">
          {selectedVideo ? (
            <div>
              <video 
                ref={videoRef} 
                className="video-js vjs-default-skin w-full"
                controls 
                preload="auto"
              />
              {selectedVideo.twelvelabsAnalysis && (
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold">Phân Tích Chi Tiết</h3>
                  <div>
                    <p className="font-semibold">Tóm Tắt:</p>
                    <p>{selectedVideo.aiSummary}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Chủ Đề:</p>
                    <p>{selectedVideo.twelvelabsAnalysis.topics?.join(', ') || 'Không có thông tin'}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Đối Tượng Nhận Diện:</p>
                    <p>{selectedVideo.twelvelabsAnalysis.objects?.join(', ') || 'Không có thông tin'}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Hành Động:</p>
                    <p>{selectedVideo.twelvelabsAnalysis.actions?.join(', ') || 'Không có thông tin'}</p>
                  </div>
                  <div>
                    <p className="font-semibold">Thông Tin Kỹ Thuật:</p>
                    <ul>
                      <li>Độ Dài: {selectedVideo.twelvelabsAnalysis.technicalMetadata?.duration} giây</li>
                      <li>Độ Phân Giải: {selectedVideo.twelvelabsAnalysis.technicalMetadata?.resolution}</li>
                      <li>Ngôn Ngữ: {selectedVideo.twelvelabsAnalysis.technicalMetadata?.language}</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <p>Chọn một video để xem</p>
          )}
        </div>
      </div>
    </div>
  )
}
