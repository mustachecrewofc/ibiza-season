import { useInView } from '../../hooks/useInView';

export default function CTASection() {
  const { ref, inView } = useInView();

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
            'radial-gradient(ellipse 120% 80% at 10% 80%, rgba(245,200,66,0.18) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 90% 20%, rgba(230,59,46,0.15) 0%, transparent 50%), #0A0A0F',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <p className={`text-[#F5C842] font-semibold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          29+ artists · 5 continents · 1 stage
        </p>

        <h2
          className={`font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] max-w-[900px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          Ready to <span className="text-[#F5C842]">represent your sound</span>?
        </h2>

        <p className={`mt-6 max-w-[560px] text-[#8A8A9A] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Send your unreleased track to the VA World Cup 2026.
          Free to submit. Worldwide release. Real distribution.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="#submit"
            className="h-[52px] flex items-center px-7 rounded-full bg-[#F5C842] text-[#060612] text-base font-bold hover:bg-[#FFD75A] transition-colors"
          >
            Submit Your Track →
          </a>
          <a
            href="#about"
            className="h-[52px] flex items-center px-7 rounded-full border border-[#2A2A3E] text-[#F0EDE6] text-base font-medium hover:bg-[#13131F] transition-colors"
          >
            Learn About the Label
          </a>
        </div>

        <p className={`mt-8 text-xs text-[#8A8A9A] transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          ⏱ Deadline: March 31, 2026 · Selection notified by April 30, 2026
        </p>
      </div>
    </section>
  );
}
