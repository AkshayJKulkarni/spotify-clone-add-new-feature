
import React from 'react';

const Support = () => {
  return (
    <div className="pt-24 min-h-screen bg-black">
      <div className="container max-w-5xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-6">Support</h1>
        <p className="text-xl text-white mb-8">How can we help you?</p>
        
        <div className="bg-[#121212] p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-4">Help Topics</h2>
          <ul className="space-y-4 text-white">
            <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] transition-colors cursor-pointer">
              Account Help
            </li>
            <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] transition-colors cursor-pointer">
              Subscription Options
            </li>
            <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] transition-colors cursor-pointer">
              Payment Issues
            </li>
            <li className="p-4 bg-[#282828] rounded-md hover:bg-[#333333] transition-colors cursor-pointer">
              App Troubleshooting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
