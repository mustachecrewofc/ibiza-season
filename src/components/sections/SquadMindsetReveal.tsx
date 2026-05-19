import { useInView } from '../../hooks/useInView';
import logoWhite from '@/assets/mustache-crew-white.png';

export default function SquadMindsetReveal() {
  const { ref, inView } = useInView({ threshold: 0.05 });
  const sectionHeight = '220vh';

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} style={{ position: 'relative', height: sectionHeight }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* Green gradient bg */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 90% 75% at 50% 30%, #F5C842 0%, #4ADE80 28%, #22C55E 58%, #14532d 100%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container flex h-screen flex-col items-center px-6 pb-8 pt-[10vh] text-center overflow-y-auto">
          <div className="max-w-5xl w-full flex flex-col items-center">

            {/* Label */}
            <div className={`mb-4 text-xs font-bold uppercase tracking-[2px] text-[#14532d]/70 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              The Squad
            </div>

            {/* Heading */}
            <h2
              className={`font-black text-[#060A06] leading-[0.95] transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ fontSize: 'clamp(38px, 6vw, 96px)' }}
            >
              30 artists.<br/><span className="text-[#F0EDE6]">One heartbeat.</span>
            </h2>
            <p className={`mx-auto mt-4 max-w-[680px] text-base leading-relaxed text-[#060A06]/85 md:text-[20px] transition-all duration-700 delay-150 ${inView ? 'opacity-100' : 'opacity-0'}`}>
              When 30 artists push simultaneously — same week, same energy, same goal —
              the algorithm notices. That's not theory. That's the mechanic we've exploited three times already.
            </p>

            {/* Comparison cards: 1 vs 30 */}
            <div className={`mt-8 w-full flex flex-col md:flex-row items-center md:items-stretch gap-4 md:gap-0 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {/* Solo */}
              <div style={{
                background: 'rgba(6,10,6,0.55)',
                border: '1px solid rgba(240,237,230,0.15)',
                borderRadius: '20px',
                padding: '28px 28px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backdropFilter: 'blur(8px)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(240,237,230,0.45)' }}>
                  Solo release
                </div>
                <div style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900, color: 'rgba(240,237,230,0.35)', lineHeight: 1, letterSpacing: '-3px' }}>
                  1
                </div>
                <div style={{ fontSize: '14px', color: 'rgba(240,237,230,0.5)', lineHeight: 1.5 }}>
                  chart credit per purchase.<br/>One voice. Easy to ignore.
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '6px', flexWrap: 'wrap', paddingTop: '8px' }}>
                  <div style={{ width: '18px', height: '18px', borderRadius: '4px', background: 'rgba(240,237,230,0.25)' }} />
                </div>
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px', minWidth: '52px' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ transform: 'rotate(90deg)' }} className="md:[transform:rotate(0deg)]">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* VA */}
              <div style={{
                background: 'rgba(6,10,6,0.65)',
                border: '1px solid #22C55E',
                borderRadius: '20px',
                padding: '28px 28px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 0 40px rgba(34,197,94,0.18)',
              }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#22C55E' }}>
                  Mustache Gang World Cup 2026
                </div>
                <div style={{ fontSize: 'clamp(44px, 6vw, 72px)', fontWeight: 900, color: '#22C55E', lineHeight: 1, letterSpacing: '-3px' }}>
                  30
                </div>
                <div style={{ fontSize: '14px', color: '#F0EDE6', lineHeight: 1.5 }}>
                  chart credits per purchase.<br/>Thirty voices — all at once.
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '5px', flexWrap: 'wrap', paddingTop: '8px' }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} style={{ width: '18px', height: '18px', borderRadius: '4px', background: '#22C55E', opacity: 0.6 + (i % 3) * 0.13 }} />
                  ))}
                </div>
              </div>
            </div>

            {/* Math card */}
            <div className={`mt-5 w-full rounded-2xl border border-[#060A06]/20 bg-[#060A06]/40 p-5 text-left backdrop-blur-sm md:p-6 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F0EDE6]">The math behind the mission</p>
              <h3 className="mt-1.5 text-lg font-extrabold leading-tight text-[#F0EDE6] md:text-[22px]">
                Momentum becomes math — not luck.
              </h3>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <div className="rounded-xl border border-[#F0EDE6]/15 bg-[#060A06]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">Minimum baseline</p>
                  <p className="mt-1.5 text-[#F0EDE6]/80 text-[13px]">30 artists × 1 purchase each</p>
                  <p className="mt-2 text-xl font-black text-[#22C55E]">= 900 chart votes</p>
                  <p className="mt-1 text-[11px] text-[#F0EDE6]/50">at 30× multiplier per album</p>
                </div>
                <div className="rounded-xl border border-[#F5C842]/30 bg-[#060A06]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F5C842]/70">With squad support</p>
                  <p className="mt-1.5 text-[#F0EDE6]/80 text-[13px]">Each artist mobilises 10 fans</p>
                  <p className="mt-2 text-xl font-black text-[#F5C842]">= 9,000+ chart votes</p>
                  <p className="mt-1 text-[11px] text-[#F0EDE6]/50">same release week</p>
                </div>
                <div className="rounded-xl border border-[#F0EDE6]/15 bg-[#060A06]/40 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#F0EDE6]/55">EDMArmy + SoundCloud</p>
                  <p className="mt-1.5 text-[#F0EDE6]/80 text-[13px]">300k + 2M external reach</p>
                  <p className="mt-2 text-xl font-black text-[#22C55E]">Velocity spike</p>
                  <p className="mt-1 text-[11px] text-[#F0EDE6]/50">exactly when it matters</p>
                </div>
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-[#F0EDE6]/70">
                That concentrated pressure in a single 7-day window is exactly what Beatport's algorithm rewards.
                One artist can't create it. <span className="text-[#22C55E] font-semibold">A squad can.</span>
              </p>
            </div>

            <div className="mt-5 flex items-center justify-center">
              <img src={logoWhite} alt="Mustache Crew" className="h-8 w-auto invert md:h-10" />
            </div>

          </div>
        </div>
      </div>

      {/* Top overlay (dark section above) */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '72vh', zIndex: 10, overflow: 'hidden', background: '#060A06',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'linear-gradient(#F5C842 1px, transparent 1px), linear-gradient(90deg, #F5C842 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '2px',
          background: 'linear-gradient(90deg, transparent, rgba(245,200,66,0.6), transparent)',
        }} />
      </div>
    </div>
  );
}
