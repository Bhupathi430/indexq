import React, { useState } from 'react';
import { ArrowRight, Sparkles, Plus, Image as ImageIcon, TrendingUp, Star, Zap } from 'lucide-react';

// Import image assets directly so Vite bundles them into the single HTML output
import bg1 from '../../public/images/bg-1.jpg';
import bg2 from '../../public/images/bg-2.jpg';
import bg3 from '../../public/images/bg-3.jpg';
import bg4 from '../../public/images/bg-4.jpg';
import bg5 from '../../public/images/bg-5.jpg';
import bg6 from '../../public/images/bg-6.jpg';
import bg7 from '../../public/images/bg-7.jpg';
import bg8 from '../../public/images/bg-8.jpg';
import bg9 from '../../public/images/bg-9.jpg';
import bg10 from '../../public/images/bg-10.jpg';
import bg11 from '../../public/images/bg-11.jpg';

export const Hero = ({ onOpenBooking }) => {
  /* 
    ====================================================================
    4 DISTINCT ROLLING LAYERS WITH ALL YOUR UPLOADED IMAGES
    ====================================================================
  */
  const customHeroImagesRow1 = [
    { id: 1, src: bg1, label: "Payouts Showcase" },
    { id: 2, src: bg2, label: "Bugatti Transaction" },
    { id: 3, src: bg3, label: "15M Empire Story" },
  ];

  const customHeroImagesRow2 = [
    { id: 4, src: bg4, label: "Daily Revenue Apps" },
    { id: 5, src: bg5, label: "Focus Workflow" },
    { id: 6, src: bg6, label: "POV Jet & Villa" },
  ];

  const customHeroImagesRow3 = [
    { id: 7, src: bg7, label: "Shopify $107K Sales" },
    { id: 8, src: bg8, label: "Succession Edit" },
    { id: 9, src: bg9, label: "Miami Supercar Edit" },
  ];

  const customHeroImagesRow4 = [
    { id: 10, src: bg10, label: "$18.7M Crypto Course" },
    { id: 11, src: bg11, label: "Entrepreneur vs Workers" },
    { id: 12, src: bg1, label: "Payouts Showcase" },
  ];

  // Hero Image Card Component
  const HeroCard = ({ item }) => {
    const [imgError, setImgError] = useState(false);

    return (
      <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-[#0d0f17] w-56 sm:w-72 h-36 sm:h-44 flex-shrink-0 shadow-2xl group hover:border-blue-500 hover:scale-[1.03] transition-all duration-300">
        {item.src && !imgError ? (
          <img
            src={item.src}
            alt={item.label}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-slate-900/60 to-black flex flex-col items-center justify-center p-3 text-center space-y-1.5 border border-dashed border-white/20 group-hover:border-blue-500/50">
            <ImageIcon className="w-7 h-7 text-blue-400 group-hover:scale-110 transition-all" />
            <span className="text-[10px] font-mono text-slate-200 font-semibold">{item.label}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between items-center overflow-hidden bg-[#070709] pt-12 pb-12">
      
      {/* 4 HORIZONTAL ROLLING MARQUEE LAYERS */}
      <div className="absolute inset-0 flex flex-col justify-center gap-3 opacity-75 pointer-events-none select-none py-2">
        
        {/* Layer 1: Rolling Left */}
        <div className="flex gap-4 w-max animate-marquee-left">
          {[...customHeroImagesRow1, ...customHeroImagesRow1, ...customHeroImagesRow1, ...customHeroImagesRow1, ...customHeroImagesRow1].map((item, idx) => (
            <HeroCard key={`r1-${idx}`} item={item} />
          ))}
        </div>

        {/* Layer 2: Rolling Right */}
        <div className="flex gap-4 w-max animate-marquee-right">
          {[...customHeroImagesRow2, ...customHeroImagesRow2, ...customHeroImagesRow2, ...customHeroImagesRow2, ...customHeroImagesRow2].map((item, idx) => (
            <HeroCard key={`r2-${idx}`} item={item} />
          ))}
        </div>

        {/* Layer 3: Rolling Left */}
        <div className="flex gap-4 w-max animate-marquee-left">
          {[...customHeroImagesRow3, ...customHeroImagesRow3, ...customHeroImagesRow3, ...customHeroImagesRow3, ...customHeroImagesRow3].map((item, idx) => (
            <HeroCard key={`r3-${idx}`} item={item} />
          ))}
        </div>

        {/* Layer 4: Rolling Right */}
        <div className="flex gap-4 w-max animate-marquee-right">
          {[...customHeroImagesRow4, ...customHeroImagesRow4, ...customHeroImagesRow4, ...customHeroImagesRow4, ...customHeroImagesRow4].map((item, idx) => (
            <HeroCard key={`r4-${idx}`} item={item} />
          ))}
        </div>

      </div>

      {/* Light Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/55 to-[#070709]/30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8 my-auto">
        
        {/* Main Headline */}
        <div className="space-y-4 max-w-4xl mx-auto pt-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-lg">
            Where Content <br className="hidden sm:inline" />
            Creators & Brands Get{' '}
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="relative z-10 inline-flex items-center px-4 sm:px-6 py-1 sm:py-2 rounded-2xl bg-blue-600/90 text-white border border-blue-400/50 shadow-[0_0_40px_rgba(37,99,235,0.9)] font-black tracking-tight transform -rotate-1 hover:rotate-0 transition-transform">
                Scale Fast.
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed pt-2 drop-shadow-md">
            We scale your <span className="text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4">Social Media Presence</span> with Highly Converting Edits and Content Plans.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="flex flex-col items-center pt-4">
          <button
            onClick={onOpenBooking}
            className="group relative flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-base shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:shadow-[0_0_55px_rgba(59,130,246,0.9)] hover:scale-[1.03] transition-all duration-300 border border-blue-400/30"
          >
            <span>Get Started with Orbit Labz</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Proof Tags */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-semibold">
          <div className="flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>100M+ Viral Views Generated</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>4.8x ROI Average for Brands</span>
          </div>
          <div className="flex items-center gap-2 bg-black/60 px-3.5 py-1.5 rounded-full border border-white/15 backdrop-blur-md">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>50+ Top Creators & Brands</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-20 flex flex-col items-center gap-2 pt-8 animate-bounce">
        <div className="w-[2px] h-6 bg-gradient-to-b from-blue-500 to-transparent rounded-full shadow-[0_0_10px_#3b82f6]" />
        <span className="text-[10px] font-bold tracking-widest text-slate-300 uppercase drop-shadow">
          SCROLL FOR MORE
        </span>
      </div>

      {/* Floating '+' Action Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={onOpenBooking}
          aria-label="Quick Action"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-[0_0_25px_rgba(37,99,235,0.8)] hover:bg-blue-500 hover:scale-110 transition-all duration-300 group border border-blue-400/40"
        >
          <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          <span className="absolute left-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Quick Inquiry
          </span>
        </button>
      </div>

    </section>
  );
};
