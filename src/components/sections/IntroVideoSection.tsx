import { useInView } from '../../hooks/useInView';

const tagRows = [
  ['Keyword analysis', 'Robots.txt', 'Chat with Semrush data', 'AI readability', 'SSR', 'Better SEO', 'Pre-rendering'],
  ['Better SEO', 'SSR', 'Pre-rendering', 'Sitemaps', 'Chat with Semrush data', 'Audit backlinks', 'Schema markup'],
  ['Chat with Semrush data', 'Better SEO', 'SSR', 'AI readability', 'Keyword analysis', 'Pre-rendering', 'Robots.txt'],
  ['Edit backlinks', 'Robots.txt', 'AI readability', 'Keyword analysis', 'Pre-rendering', 'SSR', 'Sitemaps'],
];

function TagRow({ tags, reverse = false }: { tags: string[]; reverse?: boolean }) {
  const doubled = [...tags, ...tags];
  return (
    <div className="relative overflow-hidden w-full py-1.5">
      <div
        className="flex gap-3 w-max"
        style={{
          animation: `marquee-${reverse ? 'reverse' : 'forward'} 28s linear infinite`,
        }}
      >
        {doubled.map((tag, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-5 py-2 rounded-full text-white text-sm font-semibold"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1.5px solid transparent',
              backgroundClip: 'padding-box',
              boxShadow: '0 0 0 1.5px rgba(200,100,255,0.35), inset 0 0 12px rgba(180,80,255,0.08)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function IntroVideoSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container py-12 md:py-20 flex flex-col items-center"
    >
      {/* Subtext */}
      <p
        className={`max-w-[520px] text-center text-[#73726F] text-base md:text-lg leading-relaxed -tracking-[0.36px] mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
      >
        Você construiu algo que merece ser encontrado.
        <br />
        Agora a Lovable ajuda você a fechar a lacuna entre{' '}
        <span className="text-[#1B1B1B] font-medium">"publicado"</span> e{' '}
        <span className="text-[#1B1B1B] font-medium">"descoberto"</span>, direto de onde você construiu.
      </p>

      {/* Video card */}
      <div
        className={`w-full max-w-[960px] transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            aspectRatio: '16 / 9',
            background: 'linear-gradient(135deg, #0d0d14 0%, #130d1a 50%, #0d1020 100%)',
          }}
        >
          {/* Subtle gradient glow in bg */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(168,85,247,0.12) 0%, transparent 70%)',
            }}
          />

          {/* Marquee rows */}
          <div className="absolute inset-0 flex flex-col justify-center gap-1 py-8">
            {tagRows.map((row, i) => (
              <TagRow key={i} tags={row} reverse={i % 2 === 1} />
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#0d0d14] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#0d0d14] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#0d0d14] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0d0d14] to-transparent z-10 pointer-events-none" />

          {/* Center: Lovable logo + play button */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button
              type="button"
              aria-label="Play video"
              className="flex flex-col items-center gap-4 group"
            >
              <div className="flex items-center gap-3">
                {/* Colorful Lovable heart logo */}
                <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
                  <path d="M20 6C14 6 9 11 9 17c0 4 2 7.5 5 9.5L20 34l6-7.5c3-2 5-5.5 5-9.5 0-6-5-11-11-11z" fill="url(#logo-grad)"/>
                  <defs>
                    <linearGradient id="logo-grad" x1="9" y1="6" x2="31" y2="34" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF6B35"/>
                      <stop offset="50%" stopColor="#E040FB"/>
                      <stop offset="100%" stopColor="#4E93FF"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-white text-2xl md:text-3xl font-bold tracking-tight">Lovable</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors backdrop-blur-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                  <path d="M8 5.14v14l11-7-11-7z"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-forward {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
