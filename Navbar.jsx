import React, { useState, useRef, useEffect } from 'react';
import { Search, Orbit, ChevronDown, Menu, X, ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';

export const Navbar = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef(null);

  const searchResults = [
    { title: "For Creators - Personal Brand Growth", section: "#switcher", category: "Creators" },
    { title: "For Brands - Organic Funnels & UGC", section: "#switcher", category: "Brands" },
    { title: "Short-Form virality & Content Engine", section: "#services", category: "Services" },
    { title: "YouTube Video Essay Production", section: "#services", category: "Services" },
    { title: "Scripting & Hook Engineering", section: "#services", category: "Services" },
  ];

  const filteredResults = searchQuery.trim() === ''
    ? searchResults
    : searchResults.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/') {
        const activeElem = document.activeElement;
        if (activeElem && (activeElem.tagName === 'INPUT' || activeElem.tagName === 'TEXTAREA')) {
          return;
        }
        e.preventDefault();
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#070709]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-[0_0_20px_rgba(37,99,235,0.6)] group-hover:scale-105 transition-transform duration-300">
            <Orbit className="w-6 h-6 text-white animate-spin-slow" />
            <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md group-hover:blur-lg transition-all" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">ORBIT</span>
              <span className="font-extrabold text-xl tracking-tight text-blue-500 font-sans">LABZ</span>
            </div>
            <span className="text-[10px] tracking-widest text-slate-400 font-semibold uppercase -mt-1">Content Agency</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#switcher" className="hover:text-white transition-colors flex items-center gap-1 group">
            Platform <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:rotate-180 transition-transform" />
          </a>
          <a href="#switcher" className="hover:text-blue-400 transition-colors">For Creators</a>
          <a href="#switcher" className="hover:text-blue-400 transition-colors">For Brands</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
        </nav>

        {/* Center Transparent Search Bar with Direct Typing */}
        <div className="hidden md:block relative flex-1 max-w-sm mx-4">
          <div className={`relative flex items-center px-3.5 py-2 rounded-full border transition-all duration-300 bg-transparent ${
            isSearchFocused 
              ? 'border-blue-500 ring-2 ring-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
              : 'border-white/20 hover:border-white/40'
          }`}>
            <Search className="w-4 h-4 text-blue-400 shrink-0 mr-2.5" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search opportunities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full bg-transparent text-white text-xs font-medium placeholder:text-slate-400 focus:outline-none"
            />
            {searchQuery ? (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-slate-400 hover:text-white p-0.5 ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white/10 text-slate-300 rounded border border-white/10 shrink-0 ml-1">
                /
              </kbd>
            )}
          </div>

          {/* Floating Transparent Results Dropdown */}
          {isSearchFocused && (
            <div className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-[#0d0f17]/95 border border-blue-500/30 backdrop-blur-xl shadow-2xl p-3 space-y-1.5 z-50 animate-in fade-in slide-in-from-top-2">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2.5 py-1">Quick Suggestions</p>
              {filteredResults.length > 0 ? (
                filteredResults.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.section}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-600/20 text-xs text-slate-200 hover:text-white group transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-blue-600/20 text-blue-400 font-mono">
                      {item.category}
                    </span>
                  </a>
                ))
              ) : (
                <div className="px-3 py-2 text-xs text-slate-400">No matching results found</div>
              )}
            </div>
          )}
        </div>

        {/* Right Action */}
        <div className="hidden sm:flex items-center gap-4">
          <button 
            onClick={onOpenBooking}
            className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs tracking-wide uppercase transition-all duration-300 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 rounded-full animate-pulse-slow" />
            <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all">
              <span>Get Started</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#070709]/95 backdrop-blur-2xl px-4 py-6 space-y-4 animate-in slide-in-from-top-4">
          <div className="relative flex items-center px-4 py-3 rounded-xl bg-transparent border border-white/20">
            <Search className="w-4 h-4 text-blue-400 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-white text-xs font-medium placeholder:text-slate-400 focus:outline-none"
            />
          </div>
          
          <div className="flex flex-col space-y-3 font-medium text-slate-200 pt-2">
            <a href="#switcher" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors py-1">Platform Overview</a>
            <a href="#switcher" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors py-1">For Creators</a>
            <a href="#switcher" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors py-1">For Brands</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-400 transition-colors py-1">Agency Services</a>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
