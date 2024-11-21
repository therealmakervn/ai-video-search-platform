import axios from 'axios';

const TWELVE_LABS_API_BASE_URL = 'https://api.twelvelabs.io/v1.2';
const TWELVE_LABS_API_KEY = process.env.TWELVE_LABS_API_KEY;
const VIDEO_INDEX_ID = process.env.NEXT_PUBLIC_TWELVE_LABS_VIDEO_INDEX_ID;

if (!TWELVE_LABS_API_KEY) {
  console.warn('Cảnh báo: Không tìm thấy API key của TwelveLabs');
}

// Hàm tạo index để phân tích video
export async function createVideoIndex() {
  try {
    const response = await axios.post(
      `${TWELVE_LABS_API_BASE_URL}/indexes`, 
      {
        name: 'social-media-video-index',
        engines: ['search', 'visual', 'conversation']
      },
      {
        headers: {
          'x-api-key': TWELVE_LABS_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Lỗi khi tạo index:', error);
    throw error;
  }
}

// Hàm phân tích chi tiết video
export async function analyzeVideo(videoUrl: string) {
  if (!VIDEO_INDEX_ID) {
    throw new Error('Không có Video Index ID');
  }

  try {
    const taskResponse = await axios.post(
      `${TWELVE_LABS_API_BASE_URL}/tasks`, 
      {
        indexId: VIDEO_INDEX_ID,
        videoUrl: videoUrl,
        options: {
          metadata: {
            source: 'social-media-platform'
          }
        }
      },
      {
        headers: {
          'x-api-key': TWELVE_LABS_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    const taskId = taskResponse.data.id;

    // Chờ task hoàn thành
    const retrieveTask = async () => {
      const taskResult = await axios.get(
        `${TWELVE_LABS_API_BASE_URL}/tasks/${taskId}`,
        {
          headers: {
            'x-api-key': TWELVE_LABS_API_KEY
          }
        }
      );
      return taskResult.data;
    };

    // Polling để lấy kết quả
    const result = await new Promise((resolve, reject) => {
      const interval = setInterval(async () => {
        try {
          const task = await retrieveTask();
          if (task.status === 'completed') {
            clearInterval(interval);
            resolve(task);
          } else if (task.status === 'failed') {
            clearInterval(interval);
            reject(new Error('Video analysis failed'));
          }
        } catch (error) {
          clearInterval(interval);
          reject(error);
        }
      }, 5000); // Kiểm tra mỗi 5 giây
    });

    return result;
  } catch (error) {
    console.error('Lỗi khi phân tích video:', error);
    throw error;
  }
}

// Hàm tìm kiếm video
export async function searchVideos(query: string) {
  if (!VIDEO_INDEX_ID) {
    throw new Error('Không có Video Index ID');
  }

  try {
    const searchResponse = await axios.post(
      `${TWELVE_LABS_API_BASE_URL}/searches`, 
      {
        indexId: VIDEO_INDEX_ID,
        query: query,
        searchOptions: {
          engines: ['search', 'visual', 'conversation'],
          max_results: 10
        }
      },
      {
        headers: {
          'x-api-key': TWELVE_LABS_API_KEY,
          'Content-Type': 'application/json'
        }
      }
    );

    return searchResponse.data;
  } catch (error) {
    console.error('Lỗi khi tìm kiếm video:', error);
    throw error;
  }
}
