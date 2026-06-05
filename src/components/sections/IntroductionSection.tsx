import { useInView } from '../../hooks/useInView';

export default function IntroductionSection() {
  const { ref, inView } = useInView({ threshold: 0.08 });

  const anim = (delay: number, fromY = 24): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${fromY}px)`,
    transition: `opacity 0.75s ease, transform 0.75s ease`,
    transitionDelay: `${delay}ms`,
  });

  const pillars = [
    {
      num: '01',
      accent: '#F5C842',
      accentRgb: '245,200,66',
      title: 'A community, not just a compilation',
      body: 'Everyone here is committed — same goal, same launch day, same energy. This isn\'t just a track submission. It\'s a squad built around accountability and the mindset to make things happen.',
    },
    {
      num: '02',
      accent: '#22C55E',
      accentRgb: '34,197,94',
      title: 'One purchase. Thirty chart votes.',
      body: 'When anyone buys the VA album, all 30 tracks get pushed up the chart simultaneously. That\'s not a trick — that\'s how Beatport works. We use it intentionally, every time.',
    },
    {
      num: '03',
      accent: '#22C55E',
      accentRgb: '34,197,94',
      title: 'Your audience works for everyone.',
      body: 'Your fans buy the album and cast 30 votes — for you and the other 29 artists. Their fans do the same for you. Alone, you get 1 push. Together, you get a coordinated flood.',
    },
    {
      num: '04',
      accent: '#F5C842',
      accentRgb: '245,200,66',
      title: 'We\'ve done this. Three times.',
      body: '#38 Beatport Overall. #1 Electronica. #1 Deep Dubstep. #2 Bass House. Each campaign sharpens the playbook. We know exactly what it takes — and we\'re doing it again.',
    },
  ];

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Subtle glow top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 container">

        {/* Label */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateX(0)' : 'translateX(-16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
            transitionDelay: '0ms',
          }}
          className="mb-7 flex items-center gap-3"
        >
          <div className="h-px w-6 bg-[#22C55E]" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#22C55E]">
            The mission
          </span>
        </div>

        {/* Main headline */}
        <h2
          style={{ ...anim(80, 36), fontSize: 'clamp(44px, 7.5vw, 108px)' }}
          className="font-black text-[#F0EDE6] leading-[0.92] -tracking-[3px] max-w-[960px]"
        >
          30 artists.<br />
          One goal:<br />
          <span className="text-[#22C55E]">Beatport Top 100.</span>
        </h2>

        {/* Manifesto paragraph */}
        <p
          style={anim(220)}
          className="mt-8 text-[#F0EDE6]/65 text-base md:text-xl leading-relaxed max-w-[660px]"
        >
          Mustache Gang World Cup isn't a random compilation.
          It's a{' '}
          <span className="text-[#F0EDE6]/90 font-semibold">coordinated community of artists</span>{' '}
          who all want the same thing — and who know that the only way to get there is together.
          You bring your audience. Everyone does the same.
          And on July 17, the chart gets flooded.
        </p>

        {/* 4 pillars — 2x2 grid */}
        <div
          style={anim(360)}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden cursor-default"
              style={{
                background: 'rgba(12,20,12,0.70)',
                border: '1px solid rgba(240,237,230,0.07)',
                backdropFilter: 'blur(12px)',
                transition: 'border-color 0.3s ease, background 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `rgba(${p.accentRgb},0.22)`;
                el.style.background = 'rgba(12,20,12,0.90)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = 'rgba(240,237,230,0.07)';
                el.style.background = 'rgba(12,20,12,0.70)';
              }}
            >
              <div className="flex">
                <div
                  className="w-1 flex-shrink-0"
                  style={{ background: p.accent, opacity: 0.55 }}
                />
                <div className="px-6 py-6">
                  <div
                    className="font-black text-[11px] mb-3 uppercase tracking-[2px]"
                    style={{ color: p.accent, opacity: 0.65 }}
                  >
                    {p.num}
                  </div>
                  <p className="font-bold text-[#F0EDE6] text-sm md:text-[15px] mb-2 leading-snug">
                    {p.title}
                  </p>
                  <p className="text-[#F0EDE6]/50 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom manifesto callout */}
        <div
          style={anim(560, 16)}
          className="mt-10 rounded-2xl text-center px-8 py-7"
          onMouseEnter={() => {}}
          onMouseLeave={() => {}}
        >
          <div
            style={{
              background: 'rgba(240,237,230,0.02)',
              border: '1px solid rgba(240,237,230,0.07)',
              borderRadius: '16px',
              padding: '28px 32px',
            }}
          >
            <p
              className="font-black uppercase tracking-[2.5px] mb-2"
              style={{ color: 'rgba(240,237,230,0.30)', fontSize: '11px' }}
            >
              Alone, your release disappears into the noise.
            </p>
            <p
              className="font-black text-[#F0EDE6] leading-tight -tracking-[1px]"
              style={{ fontSize: 'clamp(20px, 3vw, 32px)' }}
            >
              Together, we make the charts{' '}
              <span className="text-[#22C55E]">impossible to ignore.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
