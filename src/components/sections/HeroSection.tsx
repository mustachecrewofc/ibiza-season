const VIDEO_ID = 'rh2MzkDRtLY';

export default function HeroSection() {

  return (
    <>
      <div className="relative bg-[#0E223D] overflow-hidden">

        {/* Mediterranean sunset sky — deep marine at top fading to warm horizon */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, #0E223D 0%, #0E223D 35%, #16345C 62%, #2B4A73 78%, rgba(201,107,75,0.35) 92%, rgba(217,180,91,0.4) 100%)',
          }}
          aria-hidden="true"
        />

        {/* Setting sun disc on the horizon */}
        <div
          className="absolute bottom-[-140px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(217,180,91,0.55) 0%, rgba(231,142,109,0.35) 45%, transparent 70%)',
            filter: 'blur(30px)',
          }}
          aria-hidden="true"
        />

        {/* Soft turquoise sea shimmer */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(73,183,201,0.10) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />

        {/* Fluid wave lines near the horizon */}
        <svg
          className="absolute bottom-0 left-0 w-full pointer-events-none opacity-25"
          height="120" viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none"
          aria-hidden="true"
        >
          <path d="M0 60 Q 240 30 480 60 T 960 60 T 1440 60" stroke="#D9B45B" strokeWidth="1.5" />
          <path d="M0 85 Q 240 55 480 85 T 960 85 T 1440 85" stroke="#E78E6D" strokeWidth="1.2" />
          <path d="M0 108 Q 240 82 480 108 T 960 108 T 1440 108" stroke="#49B7C9" strokeWidth="1" />
        </svg>

        <section className="relative z-10 flex flex-col items-center text-center px-4 pt-20 pb-10 md:pt-24 md:pb-14">

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#49B7C9]/30 bg-[#49B7C9]/08 text-[#49B7C9] text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-[#49B7C9] animate-pulse" />
            <span>30 Artists · Coordinated Chart Push · World Cup Edition</span>
          </div>

          {/* Title */}
          <h1 className="flex flex-col items-center text-center font-black text-[#F7F3EB] leading-[0.88] -tracking-[2px] md:-tracking-[3.5px]">
            <span style={{ fontSize: 'clamp(38px, 5.5vw, 82px)' }}>MUSTACHE GANG</span>

            {/* Handwritten star + brush underline */}
            <span className="relative inline-block">
              <span
                className="font-handwritten text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage: 'linear-gradient(115deg, #D9B45B 0%, #E78E6D 46%, #49B7C9 96%)',
                  fontSize: 'clamp(72px, 12vw, 168px)',
                  lineHeight: 1.3,
                  paddingTop: '0.34em',
                  paddingBottom: '0.34em',
                  marginTop: '-0.42em',
                  marginBottom: '-0.34em',
                  filter: 'drop-shadow(0 10px 34px rgba(217,180,91,0.20))',
                }}
              >
                Ibiza Season
              </span>
              {/* subtle brush stroke */}
              <svg
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                style={{ bottom: '0.34em', width: '92%', height: '22px' }}
                viewBox="0 0 400 22" preserveAspectRatio="none" fill="none" aria-hidden="true"
              >
                <path
                  d="M6 13 C 90 4, 150 18, 220 9 S 350 5, 394 12"
                  stroke="url(#brush)" strokeWidth="3.5" strokeLinecap="round"
                  style={{ opacity: 0.7 }}
                />
                <defs>
                  <linearGradient id="brush" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#D9B45B" />
                    <stop offset="50%" stopColor="#E78E6D" />
                    <stop offset="100%" stopColor="#49B7C9" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Video — inline embed */}
          <div
            className="mt-8 w-full max-w-[720px] rounded-2xl overflow-hidden"
            style={{
              boxShadow: '0 0 0 1px rgba(73,183,201,0.25), 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(73,183,201,0.10)',
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
            <p className="text-[#9DB2C7] text-base md:text-lg leading-relaxed">
              Everything about the campaign is below —<br className="hidden md:block" />
              the strategy, the proof, and every detail you need to decide.
            </p>

            <a
              href="/submit"
              className="h-[48px] flex items-center px-7 rounded-full bg-[#D9B45B] text-base font-bold text-[#0E223D] transition-colors hover:bg-[#E8C77A] focus-visible:ring-2 focus-visible:ring-[#D9B45B]/60 focus-visible:outline-none"
            >
              Send Your Demo →
            </a>

            <p className="text-sm text-[#9DB2C7]">
              Submit by <span className="text-[#49B7C9] font-semibold">July 10</span>
              &nbsp;·&nbsp;
              Releases <span className="text-[#D9B45B] font-semibold">July 17, 2026</span>
            </p>

            {/* Scroll cue */}
            <div className="mt-2 flex flex-col items-center gap-1.5 opacity-40">
              <span className="text-[10px] uppercase tracking-[2.5px] text-[#9DB2C7]">scroll to explore</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9DB2C7" strokeWidth="2" strokeLinecap="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
          </div>

        </section>
      </div>
    </>
  );
}
