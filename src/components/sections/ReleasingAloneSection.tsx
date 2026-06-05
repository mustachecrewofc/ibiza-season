import { useInView } from '../../hooks/useInView';

export default function ReleasingAloneSection() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#060A06] py-20 md:py-28 overflow-hidden"
    >
      {/* Top connector line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #182B18)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10 max-w-[800px]">

        {/* Three lines — fading opacity = music fading into silence */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.9s ease, transform 0.9s ease',
          }}
        >
          <p
            className="font-black text-[#F0EDE6] leading-[1.1] -tracking-[2px]"
            style={{ fontSize: 'clamp(30px, 4.5vw, 58px)' }}
          >
            You spent months on that track.
          </p>
          <p
            className="font-black leading-[1.1] -tracking-[2px] mt-1"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 58px)',
              color: 'rgba(240,237,230,0.28)',
            }}
          >
            You mastered it. You released it.
          </p>
          <p
            className="font-black leading-[1.1] -tracking-[2px] mt-1"
            style={{
              fontSize: 'clamp(30px, 4.5vw, 58px)',
              color: 'rgba(240,237,230,0.09)',
            }}
          >
            Then — nothing.
          </p>
        </div>

        {/* Supporting paragraph */}
        <p
          className="mt-10 text-[#728A72] text-base md:text-lg leading-relaxed max-w-[560px]"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease',
            transitionDelay: '220ms',
          }}
        >
          100,000 tracks are uploaded to streaming platforms every single day.
          One voice — no matter how good — gets swallowed by the volume.
          Not a talent problem. A numbers problem.
        </p>

        {/* Pivot divider */}
        <div
          className="mt-10 flex items-center gap-5"
          style={{
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.8s ease',
            transitionDelay: '420ms',
          }}
        >
          <div className="h-px flex-1 bg-[#182B18]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#22C55E]">
            There is another way
          </span>
          <div className="h-px flex-1 bg-[#182B18]" />
        </div>

      </div>

      {/* Bottom connector line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #182B18, transparent)' }}
        aria-hidden="true"
      />
    </section>
  );
}
