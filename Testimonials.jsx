import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export const Testimonials = () => {
  const reviews = [
    {
      name: "Marcus Vance",
      role: "Tech YouTuber (450K Subs)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      content: "Orbit Labz completely transformed my retention numbers. My average view duration jumped from 32% to 68% after their first batch of short-form edits.",
      metric: "+1.8M New Views"
    },
    {
      name: "Elena Rostova",
      role: "Founder @ Nexure SaaS",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80",
      content: "We hired Orbit Labz to handle our brand's TikTok & Shorts strategy. They delivered 12K organic app signups in under 60 days without spent ad dollars.",
      metric: "4.5x Growth"
    },
    {
      name: "David Chen",
      role: "Finance Creator & Podcaster",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      content: "Their team understands hook psychology better than anyone. They took our 1-hour podcast episodes and created 20+ viral clips that exploded across Instagram.",
      metric: "5.2M Monthly Impressions"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070709] relative">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Client Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Top <span className="text-blue-500">Creators & Brands</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0d0f17] border border-white/10 space-y-6 relative flex flex-col justify-between hover:border-blue-500/40 transition-colors">
              <Quote className="w-8 h-8 text-blue-500/20 absolute top-6 right-6" />
              
              <div className="space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{rev.content}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={rev.avatar} alt={rev.name} className="w-10 h-10 rounded-full object-cover border border-blue-500/40" />
                  <div>
                    <h4 className="text-xs font-bold text-white flex items-center gap-1">
                      {rev.name} <CheckCircle className="w-3 h-3 text-blue-400" />
                    </h4>
                    <p className="text-[10px] text-slate-400">{rev.role}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {rev.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
