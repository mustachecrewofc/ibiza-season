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
            'radial-gradient(ellipse 120% 80% at 10% 80%, rgba(245,200,66,0.18) 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 90% 20%, rgba(230,59,46,0.15) 0%, transparent 50%), #060A06',
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 flex flex-col items-center text-center">
        <p className={`text-[#22C55E] font-semibold text-sm tracking-[0.2em] uppercase mb-6 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          3 chart campaigns. 30 artists. Beatport proven.
        </p>

        <h2
          className={`font-black text-[#F0EDE6] leading-[1.05] -tracking-[2px] max-w-[900px] transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ fontSize: 'clamp(48px, 6vw, 88px)' }}
        >
          Ready to write<br/>your <span className="text-[#22C55E]">chapter?</span>
        </h2>

        <p className={`mt-6 max-w-[580px] text-[#728A72] text-base md:text-lg leading-relaxed transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Forty years from now, you'll either remember being part of this
          — or you'll remember not submitting.
          30 spots. One deadline. The World Cup window opens once.
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="#submit"
            className="h-[52px] flex items-center px-7 rounded-full bg-[#F5C842] text-[#060612] text-base font-bold hover:bg-[#FFD75A] transition-colors"
          >
            Submit Your Track — Free →
          </a>
          <p className="text-sm text-[#728A72]">No fee now. €299 only if accepted.</p>
        </div>

        <p className={`mt-8 text-xs text-[#728A72] transition-all duration-700 delay-300 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          Submission is free  ·  Review within 7 days  ·  All genres welcome  ·  Deadline August 15, 2026
        </p>
      </div>
    </section>
  );
}
