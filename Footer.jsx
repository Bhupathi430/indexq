import React from 'react';
import { Orbit, ArrowUp, Globe } from 'lucide-react';

export const Footer = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-slate-400 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.6)]">
                <Orbit className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">ORBIT<span className="text-blue-500">LABZ</span></span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Orbit Labz is a high-converting content agency scaling brands and entrepreneurs with short-form and long-form video edits.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a href="https://orbitlabz.com" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold hover:underline">
                <Globe className="w-3.5 h-3.5" />
                <span>orbitlabz.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#switcher" className="hover:text-blue-400 transition-colors">For Content Creators</a></li>
              <li><a href="#switcher" className="hover:text-blue-400 transition-colors">For Enterprise Brands</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Short-Form Virality Engine</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">YouTube Video Essays</a></li>
            </ul>
          </div>

          {/* Agency */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Agency</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpenBooking} className="hover:text-blue-400 transition-colors">Get Started</button></li>
              <li><a href="#switcher" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="mailto:hello@orbitlabz.com" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-4">
            <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Scale Your Reach</h4>
            <p className="text-xs text-slate-400">
              Get our weekly breakdown of viral hook structures & editing breakdowns directly to your inbox.
            </p>
            
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
              />
              <button
                onClick={onOpenBooking}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs whitespace-nowrap shadow-lg"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Orbit Labz (orbitlabz.com). All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
