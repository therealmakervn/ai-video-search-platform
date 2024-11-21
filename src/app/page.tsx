import VideoSearchComponent from '@/components/VideoSearchComponent';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Nền Tảng Phân Tích Video AI
        </h1>
        <VideoSearchComponent />
      </div>
    </main>
  );
}
