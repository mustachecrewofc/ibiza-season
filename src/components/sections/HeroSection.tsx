const VIDEO_ID = 'rh2MzkDRtLY';

export default function HeroSection() {

  return (
    <>
      <div className="relative bg-[#060A06] overflow-hidden">

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(34,197,94,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.6) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
          aria-hidden="true"
        />

        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(34,197,94,0.13) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />

        <section className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-10 md:pt-24 md:pb-14">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/08 text-[#22C55E] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>30 Artists · Coordinated Chart Push · World Cup Edition</span>
          </div>

          {/* Title */}
          <h1
            className="font-black text-[#F0EDE6] leading-[0.88] -tracking-[2px] md:-tracking-[3.5px]"
            style={{ fontSize: 'clamp(38px, 5.5vw, 82px)' }}
          >
            MUSTACHE GANG<br />
            <span className="text-[#22C55E]">WORLD CUP VA</span>
          </h1>

          {/* Video — inline embed */}
          <div
            className="mt-8 w-full max-w-[720px] rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 0 0 1px rgba(34,197,94,0.25), 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(34,197,94,0.10)',
            }}
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                title="Mustache Gang World Cup 2026 — VA Breakdown"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Hook — connects to the rest of the page */}
          <div className="mt-10 flex flex-col items-center gap-5 max-w-[560px]">
            <p className="text-[#728A72] text-base md:text-lg leading-relaxed">
              Everything about the campaign is below —<br className="hidden md:block" />
              the strategy, the proof, and every detail you need to decide.
            </p>

            <a
              href="/submit"
              className="h-[48px] flex items-center px-7 rounded-full bg-[#F5C842] text-base font-bold text-[#060612] transition-colors hover:bg-[#FFD75A] focus-visible:ring-2 focus-visible:ring-[#F5C842]/60 focus-visible:outline-none"
            >
              Send Your Demo →
            </a>

            <p className="text-sm text-[#728A72]">
              Submit by <span className="text-[#22C55E] font-semibold">July 10</span>
              &nbsp;·&nbsp;
              Releases <span className="text-[#F5C842] font-semibold">July 17, 2026</span>
            </p>

            {/* Scroll cue */}
            <div className="mt-2 flex flex-col items-center gap-1.5 opacity-40">
              <span className="text-[10px] uppercase tracking-[2.5px] text-[#728A72]">scroll to explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#728A72" strokeWidth="2" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
