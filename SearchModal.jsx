import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

export const SearchModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const quickLinks = [
    { title: "For Creators - Personal Brand Growth", section: "#switcher", category: "Creators" },
    { title: "For Brands - Organic Funnels & UGC", section: "#switcher", category: "Brands" },
    { title: "Short-Form Virality Package", section: "#services", category: "Services" },
    { title: "YouTube Video Essay Production", section: "#services", category: "Services" },
    { title: "Scripting & Hook Engineering", section: "#services", category: "Services" },
  ];

  const filteredLinks = query.trim() === ''
    ? quickLinks
    : quickLinks.filter(l => l.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-transparent animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0d0f17]/95 border border-blue-500/40 backdrop-blur-2xl overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)]">
        
        {/* Transparent Search Header Input */}
        <div className="p-3.5 border-b border-white/10 flex items-center gap-3 bg-transparent">
          <Search className="w-4 h-4 text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Type to search services, creator options..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-white text-xs font-medium focus:outline-none placeholder:text-slate-400"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Results */}
        <div className="p-3 space-y-1.5 max-h-72 overflow-y-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-1">Quick Results</p>
          {filteredLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.section}
              onClick={onClose}
              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-600/20 border border-transparent text-xs text-slate-200 hover:text-white group transition-all"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="font-semibold">{item.title}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] bg-blue-600/20 text-blue-400 font-mono">
                  {item.category}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};
