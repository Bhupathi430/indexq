import React from 'react';
import { Eye, TrendingUp, Users, Award, ShieldCheck } from 'lucide-react';

export const MetricsSection = () => {
  const stats = [
    { number: "150M+", label: "Organic Views Generated", icon: <Eye className="w-5 h-5 text-blue-400" /> },
    { number: "4.8x", label: "Average Brand ROI", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
    { number: "65+", label: "Creators & Brands Scaled", icon: <Users className="w-5 h-5 text-purple-400" /> },
    { number: "88%", label: "Average Watch Time Retention", icon: <Award className="w-5 h-5 text-amber-400" /> }
  ];

  return (
    <section className="py-16 px-4 bg-[#070709] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center space-y-2 hover:border-blue-500/30 transition-colors">
              <div className="p-3 rounded-full bg-white/5 mb-1">
                {stat.icon}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                {stat.number}
              </h3>
              <p className="text-xs text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
