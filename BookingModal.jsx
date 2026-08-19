import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Orbit } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [type, setType] = useState('creator');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    link: '',
    goal: 'Scale Short Form'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0d0f17] border border-blue-500/30 p-6 sm:p-8 space-y-6 shadow-[0_0_60px_rgba(37,99,235,0.4)]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">Strategy Call Requested!</h3>
            <p className="text-xs text-slate-300">
              Our content director will review your submission and email you custom audit details within 24 hours.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Orbit className="w-6 h-6 text-blue-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Orbit Labz Strategy Call</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">Scale Your Content Presence</h3>
              <p className="text-xs text-slate-400">Select your profile type to customize your consultation.</p>
            </div>

            {/* Type Selector */}
            <div className="grid grid-cols-2 gap-3 p-1 rounded-2xl bg-white/5 border border-white/10">
              <button
                type="button"
                onClick={() => setType('creator')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  type === 'creator'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For Creators
              </button>
              <button
                type="button"
                onClick={() => setType('brand')}
                className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                  type === 'brand'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                For Brands
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Aniket Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="aniket@orbitlabz.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {type === 'creator' ? 'Social Channel Link / Instagram Handle' : 'Brand Website / Domain'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={type === 'creator' ? '@aniket.creator' : 'orbitlabz.com'}
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-xs tracking-wide shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Strategy Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
