import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

export default function CTASection() {
  const { ref, inView } = useInView();
  const [value, setValue] = useState('');

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-24 md:py-36"
    >
      {/* Soft blue-lavender radial glow — matches original subtle bg */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 120% 80% at 10% 80%, #93c5fd44 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 90% 20%, #c4b5fd33 0%, transparent 50%), #FCFBF8' }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2
          className={`font-bold text-[#1B1B1B] leading-[1.05] -tracking-[2px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}
        >
          Pronto(a) para criar?
        </h2>

        {/* Builder-style input — matches original with + button, Build dropdown, mic, send */}
        <div
          className={`mt-10 w-full max-w-[600px] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="bg-white border border-[#E8E4DC] rounded-2xl shadow-sm overflow-hidden">
            <div className="px-4 pt-4 pb-2">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Peça a Lovable para criar uma"
                className="w-full bg-transparent text-[#1B1B1B] placeholder-[#aaa] text-base outline-none"
              />
            </div>
            <div className="flex items-center justify-between px-3 pb-3 pt-1">
              {/* Left: + button */}
              <button className="w-7 h-7 rounded-full border border-[#E0DDD6] flex items-center justify-center text-[#73726F] hover:bg-[#F5F2EC] transition-colors text-lg leading-none">
                +
              </button>
              {/* Right: Build dropdown + mic + send */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1 text-sm text-[#1B1B1B] font-medium bg-[#F5F2EC] rounded-full px-3 py-1.5 hover:bg-[#ECEAE4] transition-colors">
                  Build
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4l4 4 4-4" stroke="#73726F" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-[#73726F] hover:text-[#1B1B1B] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#1B1B1B] flex items-center justify-center hover:bg-[#333] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 4l0 16M5 11l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
