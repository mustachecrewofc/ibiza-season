import { useInView } from '../../hooks/useInView';

const TOTAL_SPOTS = 30;
const SPOTS_TAKEN = 18; // update as submissions come in

export default function CTASection() {
  const { ref, inView } = useInView();
  const remaining = TOTAL_SPOTS - SPOTS_TAKEN;
  const pct = Math.round((SPOTS_TAKEN / TOTAL_SPOTS) * 100);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="submit"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 120% 80% at 10% 80%, rgba(217,180,91,0.15) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 90% 20%, rgba(73,183,201,0.10) 0%, transparent 50%), #0E223D',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">

        <p className={`text-[#49B7C9] font-semibold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          3 chart campaigns · 30 artists · Beatport proven
        </p>

        <h2
          className={`font-black text-[#F7F3EB] leading-[1.05] -tracking-[2px] max-w-[860px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          Send your demo.<br/><span className="text-[#49B7C9]">Join the squad.</span>
        </h2>

        <p className={`mt-6 max-w-[520px] text-[#9DB2C7] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          We listen to every demo personally and respond within 7 days.
          On July 17, your track drops alongside 29 others — and the chart push begins.
        </p>

        {/* Spots progress bar */}
        <div className={`mt-10 w-full max-w-[480px] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#F7F3EB]">
              {SPOTS_TAKEN} spots confirmed
            </span>
            <span className="text-sm font-bold text-[#49B7C9]">
              {remaining} remaining
            </span>
          </div>
          <div className="h-2.5 w-full rounded-full bg-[#1E3A5F] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#49B7C9] to-[#D9B45B] transition-all duration-1000 ease-out"
              style={{ width: inView ? `${pct}%` : '0%', transitionDelay: '400ms' }}
            />
          </div>
          <p className="mt-2 text-xs text-[#9DB2C7] text-center">
            {TOTAL_SPOTS} spots max · Submit by July 10 · Releases July 17, 2026
          </p>
        </div>

        <div
          className={`mt-8 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="/submit"
            className="h-[52px] flex items-center px-8 rounded-full bg-[#D9B45B] text-[#0E223D] text-base font-bold hover:bg-[#E8C77A] transition-colors"
          >
            Send Your Demo — Free →
          </a>
        </div>

        <p className={`mt-6 text-xs text-[#9DB2C7] transition-all duration-700 delay-400 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          All genres welcome · All countries welcome · Deadline July 10
        </p>
      </div>
    </section>
  );
}
