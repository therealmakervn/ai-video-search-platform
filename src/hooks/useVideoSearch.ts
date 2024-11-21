import { useState, useCallback } from 'react';
import { searchVideos, VideoSearchResult } from '@/lib/twelvelabs';

export interface VideoSearchOptions {
  query: string;
  minConfidence?: number;
  sortBy?: 'relevance' | 'date' | 'views';
  filterByCategory?: string[];
  timeRange?: {
    start?: string;
    end?: string;
  };
}

export function useVideoSearch() {
  const [videos, setVideos] = useState<VideoSearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalResults, setTotalResults] = useState(0);

  const search = useCallback(async (options: VideoSearchOptions) => {
    setLoading(true);
    setError(null);

    try {
      const result = await searchVideos({
        query: options.query,
        minConfidence: options.minConfidence || 0.5,
        sortBy: options.sortBy || 'relevance',
        filterByCategory: options.filterByCategory,
        timeRange: options.timeRange
      });

      setVideos(result.videos);
      setTotalResults(result.total);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Lỗi tìm kiếm video';
      setError(errorMessage);
      setVideos([]);
      setTotalResults(0);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearResults = useCallback(() => {
    setVideos([]);
    setTotalResults(0);
    setError(null);
  }, []);

  return {
    videos,
    loading,
    error,
    totalResults,
    search,
    clearResults
  };
}
