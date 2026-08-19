import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SocialPillCapsule } from './SocialIcons';
import { 
  Video, 
  TrendingUp, 
  Target, 
  Zap, 
  Users, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  DollarSign,
  BarChart3,
  Building2,
  Briefcase
} from 'lucide-react';

export const CategorySwitcher = ({ onOpenBooking }) => {
  // Active Category State: 'creators' (Dark theme) vs 'brands' (Light theme)
  const [activeTab, setActiveTab] = useState('creators');

  // Creator Features (Dark Mode styling)
  const creatorFeatures = [
    {
      icon: <Video className="w-6 h-6 text-blue-400" />,
      title: "Viral Retention Edits",
      desc: "Dynamic pacing, sound design, color grading & kinetic captions engineered to keep watch time above 85%.",
      badge: "High Retention"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Cross-Platform Scale",
      desc: "Repurpose 1 long-form video into 10+ high-performing Reels, TikToks & Shorts automatically optimized for algorithms.",
      badge: "Multi-Platform"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-400" />,
      title: "Monetization & Sponsorships",
      desc: "Turn your audience into revenue streams with high-ticket digital products, sponsorships, and agency partnerships.",
      badge: "Scale Income"
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: "Hook Design & Scripting",
      desc: "Psychology-backed first 3-second hooks designed by expert storytellers to capture instant scroll-stopping attention.",
      badge: "10x Reach"
    }
  ];

  // Brand Features (Light Mode styling)
  const brandFeatures = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "High-ROI Social Funnels",
      desc: "Convert scrollers into paying customers with high-converting short-form video funnels tailored to your brand pipeline.",
      badge: "Revenue First"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Done-for-You UGC Production",
      desc: "We handpick and direct top-tier UGC creators and actors to craft authentic brand stories that resonate with buyers.",
      badge: "Full UGC Production"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600" />,
      title: "Predictable Organic CAC",
      desc: "Lower your customer acquisition costs by dominating short-form feeds without relying solely on paid ad budgets.",
      badge: "Lower Acquisition Cost"
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-600" />,
      title: "Done-for-You Content Engine",
      desc: "From content calendar strategy and scriptwriting to filming direction, editing, and publishing.",
      badge: "Turnkey Agency"
    }
  ];

  return (
    <section 
      id="switcher" 
      className={`relative py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-700 ${
        activeTab === 'brands'
          ? 'bg-slate-50 text-slate-900 border-t border-b border-slate-200'
          : 'bg-[#070709] text-white border-t border-b border-white/5'
      }`}
    >
      
      {/* Background Glow Effect adapted for theme */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none rounded-full transition-opacity duration-700 ${
        activeTab === 'brands' ? 'bg-blue-200/40 blur-[140px]' : 'bg-blue-600/10 blur-[140px]'
      }`} />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">

        {/* Header & Smooth Toggle Switcher */}
        <div className="flex flex-col items-center text-center space-y-6">
          
          {/* Toggle Switch Pill Container */}
          <div className="relative inline-flex items-center">
            
            {/* Pill Container (Dark background when Creators, Light border container when Brands) */}
            <div className={`relative flex items-center p-1.5 rounded-full transition-all duration-500 shadow-2xl ${
              activeTab === 'brands'
                ? 'bg-white border border-slate-300 shadow-slate-200'
                : 'bg-white/5 border border-white/15 backdrop-blur-xl'
            }`}>
              
              {/* Creator Button */}
              <button
                onClick={() => setActiveTab('creators')}
                className={`relative z-10 px-7 py-3 rounded-full text-sm font-extrabold transition-colors duration-300 ${
                  activeTab === 'creators' 
                    ? 'text-white' 
                    : (activeTab === 'brands' ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-slate-200')
                }`}
              >
                For Creators
              </button>

              {/* Brand Button */}
              <button
                onClick={() => setActiveTab('brands')}
                className={`relative z-10 px-7 py-3 rounded-full text-sm font-extrabold transition-colors duration-300 ${
                  activeTab === 'brands' 
                    ? 'text-white' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                For Brands
              </button>

              {/* Animated Sliding Background Indicator */}
              <motion.div
                className="absolute inset-y-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                layout
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{
                  left: activeTab === 'creators' ? '6px' : 'calc(50% + 2px)',
                  width: 'calc(50% - 8px)'
                }}
              />
            </div>

            {/* Dynamic Annotation Arrow Label */}
            <div className="absolute left-full ml-4 hidden sm:flex items-center gap-1 font-mono text-xs select-none">
              <svg className="w-5 h-5 text-blue-600 -rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className={`font-bold tracking-wide transition-colors ${
                activeTab === 'brands' ? 'text-blue-600' : 'text-blue-400'
              }`}>
                {activeTab === 'creators' ? 'Brand?' : 'Creator?'}
              </span>
            </div>

          </div>

          {/* Dynamic Headline */}
          <h2 className={`text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-snug max-w-4xl transition-colors duration-500 ${
            activeTab === 'brands' ? 'text-slate-900' : 'text-white'
          }`}>
            {activeTab === 'creators' ? (
              <>
                Find opportunities across
                <SocialPillCapsule />
                make viral content, and start earning on Orbit Labz.
              </>
            ) : (
              <>
                Launch converting campaigns across
                <SocialPillCapsule />
                scale your brand, and acquire customers with Orbit Labz.
              </>
            )}
          </h2>

          <p className={`text-sm sm:text-base max-w-xl transition-colors duration-500 ${
            activeTab === 'brands' ? 'text-slate-600' : 'text-slate-400'
          }`}>
            {activeTab === 'creators' 
              ? "Elevate your personal brand, boost watch time retention, and monetize your reach with Orbit Labz's elite video production."
              : "Transform your brand's video strategy into a high-converting customer acquisition engine with measurable ROI."
            }
          </p>
        </div>

        {/* Animated Content Cards with Theme Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {(activeTab === 'creators' ? creatorFeatures : brandFeatures).map((feature, i) => (
              <div
                key={i}
                className={`group relative p-6 rounded-2xl transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xl border ${
                  activeTab === 'brands'
                    ? 'bg-white border-slate-200 hover:border-blue-500 hover:shadow-2xl'
                    : 'bg-white/[0.03] border-white/10 hover:border-blue-500/40 hover:bg-white/[0.06] backdrop-blur-sm'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`p-2.5 rounded-xl border transition-transform group-hover:scale-110 ${
                      activeTab === 'brands'
                        ? 'bg-blue-50 border-blue-200'
                        : 'bg-blue-600/10 border-blue-500/20'
                    }`}>
                      {feature.icon}
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                      activeTab === 'brands'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                    }`}>
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold transition-colors ${
                    activeTab === 'brands' ? 'text-slate-900 group-hover:text-blue-600' : 'text-white group-hover:text-blue-300'
                  }`}>
                    {feature.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${
                    activeTab === 'brands' ? 'text-slate-600' : 'text-slate-400'
                  }`}>
                    {feature.desc}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>{activeTab === 'creators' ? 'Learn more' : 'Explore Solution'}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Customized Banner for Active Tab */}
        <div className={`rounded-3xl p-8 sm:p-10 border transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-8 ${
          activeTab === 'brands'
            ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white border-blue-700 shadow-2xl'
            : 'bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-black border-blue-500/20 shadow-[0_0_40px_rgba(37,99,235,0.15)] text-white'
        }`}>
          
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeTab === 'creators' ? 'Creator Growth Accelerator' : 'Enterprise Brand Engine'}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {activeTab === 'creators' 
                ? "Ready to turn your videos into viral assets?" 
                : "Want predictable organic customer growth for your brand?"}
            </h3>

            <p className="text-xs sm:text-sm text-slate-200">
              {activeTab === 'creators'
                ? "Get a customized content strategy and sample video edit tailored specifically to your channel."
                : "Schedule a 1-on-1 strategy call with our brand content directors to get a custom ROI blueprint."}
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="flex-shrink-0 px-8 py-4 rounded-full bg-white text-blue-600 hover:bg-slate-100 font-extrabold text-sm shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <span>{activeTab === 'creators' ? 'Apply as Creator' : 'Request Brand Growth Deck'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
};
