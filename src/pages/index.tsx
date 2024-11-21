import React, { useState } from 'react';
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotProvider } from "@copilotkit/react";
import AuthForm from '@/components/AuthForm';
import VideoPlayer from '@/components/VideoPlayer';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <CopilotKit>
      <CopilotProvider>
        {!isAuthenticated ? (
          <AuthForm onAuthenticate={() => setIsAuthenticated(true)} />
        ) : (
          <div className="min-h-screen bg-gray-100">
            <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
              <h1 className="text-2xl font-bold">Nền Tảng Mạng Xã Hội</h1>
              <button 
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsAuthenticated(false)}
              >
                Đăng Xuất
              </button>
            </nav>
            
            <div className="container mx-auto p-4">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Khám Phá Video Thông Minh
              </h2>
              
              <VideoPlayer />
            </div>
          </div>
        )}
      </CopilotProvider>
    </CopilotKit>
  );
}
