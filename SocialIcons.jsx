import React from 'react';

// Instagram Gradient Icon
export const InstagramIcon = ({ className = "w-5 h-5" }) => (
  <div className={`relative flex items-center justify-center rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 p-1 shadow-sm hover:scale-110 transition-transform ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-white">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  </div>
);

// TikTok Dark Icon with Cyan & Magenta shadow effect
export const TikTokIcon = ({ className = "w-5 h-5" }) => (
  <div className={`relative flex items-center justify-center rounded-lg bg-black border border-white/10 p-1 shadow-sm hover:scale-110 transition-transform overflow-hidden ${className}`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.099-2.801V9.406a6.34 6.34 0 1 0 5.544 6.266V9.006a8.212 8.212 0 0 0 5.228 1.954V7.515a4.78 4.78 0 0 1-1.458-.829z" />
    </svg>
  </div>
);

// YouTube Shorts Red Icon
export const YouTubeShortsIcon = ({ className = "w-5 h-5" }) => (
  <div className={`relative flex items-center justify-center rounded-lg bg-red-600 p-1 shadow-sm hover:scale-110 transition-transform ${className}`}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-white">
      <path d="M17.77 10.32l-1.2-.5L18 8.7a3.65 3.65 0 0 0-4.85-4.85l-5.6 3.12a3.65 3.65 0 0 0 1.63 6.72l1.2.5-1.43 1.12a3.65 3.65 0 0 0 4.85 4.85l5.6-3.12a3.65 3.65 0 0 0-1.63-6.72zM10 14.5v-5l4.5 2.5-4.5 2.5z" />
    </svg>
  </div>
);

// Grouped Social Capsule Component (as in the green circle in Image 2)
export const SocialPillCapsule = () => (
  <span className="inline-flex items-center gap-1.5 px-3 py-1 mx-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md align-middle shadow-lg hover:border-blue-500/50 transition-all cursor-pointer">
    <InstagramIcon className="w-5 h-5" />
    <TikTokIcon className="w-5 h-5" />
    <YouTubeShortsIcon className="w-5 h-5" />
  </span>
);
