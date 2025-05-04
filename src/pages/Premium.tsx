
import React from 'react';

const Premium = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-[#1ED760] to-[#121212]">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-6">Premium</h1>
        <p className="text-xl text-white mb-8">Get Premium free for 1 month</p>
        
        <div className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Why go Premium?</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#1ED760] flex items-center justify-center mr-4">✓</div>
              <span>Ad-free music listening</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#1ED760] flex items-center justify-center mr-4">✓</div>
              <span>Download to listen offline</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#1ED760] flex items-center justify-center mr-4">✓</div>
              <span>Play songs in any order</span>
            </li>
            <li className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-[#1ED760] flex items-center justify-center mr-4">✓</div>
              <span>Higher sound quality</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Premium;
