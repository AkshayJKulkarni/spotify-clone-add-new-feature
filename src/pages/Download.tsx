
import React from 'react';
import { Button } from "@/components/ui/button";

const Download = () => {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-6">Download Spotify</h1>
        <p className="text-xl text-white mb-8">Listen to music wherever you are.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#121212] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Spotify for Desktop</h2>
            <p className="text-gray-300 mb-6">Enjoy full access to Spotify on your computer.</p>
            <Button className="bg-[#1ED760] text-black hover:bg-[#1FDF64] hover:scale-105 transition-transform font-bold">
              Download for Windows
            </Button>
          </div>
          
          <div className="bg-[#121212] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Spotify for Mobile</h2>
            <p className="text-gray-300 mb-6">Take Spotify with you wherever you go.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#1ED760] text-black hover:bg-[#1FDF64] hover:scale-105 transition-transform font-bold">
                Download for iOS
              </Button>
              <Button className="bg-[#1ED760] text-black hover:bg-[#1FDF64] hover:scale-105 transition-transform font-bold">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
