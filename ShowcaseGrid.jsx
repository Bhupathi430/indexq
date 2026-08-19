import React, { useState } from 'react';
import { Play, Eye, Share2, TrendingUp, Sparkles, Filter, X } from 'lucide-react';

export const ShowcaseGrid = () => {
  const [filter, setFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Viral Retention Hook Framework",
      client: "Alex Hormozi Style Edit",
      category: "short-form",
      views: "4.2M",
      engagement: "94.2%",
      shares: "48K",
      thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      platform: "Instagram Reels",
      tag: "Short Form",
      description: "Fast-paced kinetic captioning, SFX layering, and frame-by-frame visual hooks engineered to maximize retention."
    },
    {
      id: 2,
      title: "Fintech App Organic Acquisition",
      client: "Polymarket Campaign",
      category: "brand",
      views: "2.8M",
      engagement: "89.5%",
      shares: "32K",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      platform: "TikTok & Shorts",
      tag: "Brand UGC",
      description: "High-ROI UGC video funnel that drove 14,000+ organic user signups in under 30 days."
    },
    {
      id: 3,
      title: "Deep-Dive Video Essay Breakdown",
      client: "Creator Documentary",
      category: "long-form",
      views: "1.5M",
      engagement: "96.8%",
      shares: "19K",
      thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      platform: "YouTube Long Form",
      tag: "YouTube Essay",
      description: "Cinematic color grading, custom 2D motion graphics, and soundscape design for 20-minute video essay."
    },
    {
      id: 4,
      title: "SaaS Product Demo Viral Reel",
      client: "Sync.io Launch",
      category: "brand",
      views: "3.1M",
      engagement: "91.0%",
      shares: "55K",
      thumbnail: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=600&q=80",
      platform: "Instagram & TikTok",
      tag: "SaaS Launch",
      description: "Motion graphics reel spotlighting core workflow features with high retention transition cuts."
    },
    {
      id: 5,
      title: "Podcast Highlight Repurposing",
      client: "Top 1% Entrepreneur Podcast",
      category: "short-form",
      views: "5.6M",
      engagement: "95.4%",
      shares: "87K",
      thumbnail: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      platform: "YouTube Shorts",
      tag: "Podcast Clip",
      description: "Extracted golden nugget moments with animated subtitles, B-roll overlays, and attention spikes."
    },
    {
      id: 6,
      title: "Creator Brand Positioning Series",
      client: "Don Toliver Campaign",
      category: "long-form",
      views: "2.1M",
      engagement: "93.1%",
      shares: "41K",
      thumbnail: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      platform: "YouTube & IG",
      tag: "Branded Doc",
      description: "Story-driven documentary style edit showcasing behind-the-scenes lifestyle and music production."
    }
  ];

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-xs font-bold border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Converting Edits & <span className="text-blue-500">Viral Content Showcase</span>
            </h2>
            <p className="text-sm text-slate-400">
              Explore recent short-form reels, YouTube essays, and brand campaigns produced by Orbit Labz.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'short-form', label: 'Short-Form Reels' },
              { id: 'long-form', label: 'YouTube Essays' },
              { id: 'brand', label: 'Brand UGC' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  filter === tab.id
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.6)]'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedVideo(item)}
              className="group relative rounded-2xl bg-[#0d0f17] border border-white/10 overflow-hidden hover:border-blue-500/50 hover:shadow-[0_10px_40px_rgba(37,99,235,0.2)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-black/20 to-transparent" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.8)] group-hover:scale-110 group-hover:bg-blue-500 transition-all border border-blue-300/40">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>

                {/* Badge Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-black/70 border border-white/10 backdrop-blur-md text-slate-200">
                    {item.tag}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600 text-white shadow-md">
                    {item.platform}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">{item.client}</p>
                </div>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Stats Bar */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                    <Eye className="w-3.5 h-3.5" />
                    <span>{item.views} views</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.engagement} retention</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Preview Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl bg-[#0d0f17] border border-blue-500/30 p-6 sm:p-8 space-y-6 shadow-[0_0_50px_rgba(37,99,235,0.3)]">
            
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                {selectedVideo.platform}
              </span>
              <h3 className="text-2xl font-bold text-white">{selectedVideo.title}</h3>
              <p className="text-xs text-slate-400">{selectedVideo.client}</p>
            </div>

            {/* Video Player Placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 flex items-center justify-center">
              <img src={selectedVideo.thumbnail} alt={selectedVideo.title} className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/40">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl animate-pulse">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
                <span className="text-xs font-bold text-white tracking-wide">Click to Preview Full High-Res Edit</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <div>
                <p className="text-xs text-slate-400">Total Views</p>
                <p className="text-lg font-bold text-blue-400">{selectedVideo.views}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Watch Time</p>
                <p className="text-lg font-bold text-emerald-400">{selectedVideo.engagement}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Organic Shares</p>
                <p className="text-lg font-bold text-purple-400">{selectedVideo.shares}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
