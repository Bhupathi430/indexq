import React from 'react';
import { Film, Sparkles, Sliders, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ServicesSection = ({ onOpenBooking }) => {
  const services = [
    {
      step: "01",
      title: "Short-Form Virality Engine",
      subtitle: "Instagram Reels / TikTok / YouTube Shorts",
      desc: "High-paced edits designed to dominate algorithms. We craft pattern-interrupting hooks, kinetic typography, dynamic B-roll, and custom sound design.",
      deliverables: ["15-30 Edits per Month", "Psychology-Backed Hooks", "Trend Audio Research", "Platform Native Formats"],
      icon: <Film className="w-6 h-6 text-blue-400" />
    },
    {
      step: "02",
      title: "YouTube Long-Form Production",
      subtitle: "Video Essays / Podcasts / Keynotes",
      desc: "End-to-end production for high-value YouTube creators. Storyboarding, pacing strategy, sound design, and custom thumbnails that maximize CTR.",
      deliverables: ["Full Video Editing", "Thumbnail Design & A/B Test", "Script Structuring", "SEO Optimization"],
      icon: <Layers className="w-6 h-6 text-blue-400" />
    },
    {
      step: "03",
      title: "Scripting & Hook Engineering",
      subtitle: "Audience Retention Architecture",
      desc: "Our team of copywriters and retention specialists script high-performing content blueprints so you never run out of viral ideas.",
      deliverables: ["Hook Ideas Database", "Word-for-Word Scripts", "Call-to-Action Placements", "Content Calendar Setup"],
      icon: <Sliders className="w-6 h-6 text-blue-400" />
    },
    {
      step: "04",
      title: "Brand Content Strategy & UGC",
      subtitle: "High-ROI Conversion Funnels",
      desc: "For brands looking to scale organic customer acquisition. Done-for-you UGC creator sourcing, video funnel setup, and monthly analytics.",
      deliverables: ["UGC Creator Sourcing", "Conversion Scripting", "Multi-Platform Ads", "Monthly Growth Audits"],
      icon: <Sparkles className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#070709] relative border-t border-white/5">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-600/10 text-blue-400 text-xs font-bold border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Service Agency</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-blue-500">Content Services</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Everything you need to turn casual scrollers into loyal subscribers and high-paying customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-[#0d0f17] border border-white/10 hover:border-blue-500/40 hover:bg-[#121522] transition-all duration-300 flex flex-col justify-between space-y-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-blue-500/40 group-hover:text-blue-400 font-mono transition-colors">
                    {service.step}
                  </span>
                  <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="pt-4 grid grid-cols-2 gap-2.5">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="text-xs font-bold text-white group-hover:text-blue-400 flex items-center gap-1 transition-colors"
                >
                  <span>Request Custom Package</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
