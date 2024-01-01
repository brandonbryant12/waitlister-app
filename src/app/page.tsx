import React from 'react';
import EmailForm from './EmailForm';
import Image from 'next/image';

export default function Home() {
  const creamBackgroundColor = { backgroundColor: '#FEF8E9' };

  return (
    <main className="min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-[600px] mx-auto space-y-10 px-4 py-8 rounded-lg shadow-lg text-center" style={creamBackgroundColor}>
        <div className="mx-auto mb-6" style={{ width: '150px', height: '150px' }}>
          <Image
            src="/waitlister.webp"
            alt="WaitLister Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
          Join WaitLister — Your First Step to Innovation
        </h1>
        <p className="mt-3 text-md text-gray-600">
          Turn your ideas into reality with early feedback. Don't build in the dark!
        </p>
        <EmailForm/>
        <p className="text-sm text-gray-500 mt-4">
          Be the first to experience innovation. Join the WaitLister community today!
        </p>
      </div>
    </main>
  );
}
