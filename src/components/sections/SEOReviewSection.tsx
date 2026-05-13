import { useInView } from '../../hooks/useInView';

const issues = [
  { label: 'Search results show messy or truncated text', status: 'error' },
  { label: 'Sitemap needs attention', status: 'warning' },
  { label: 'Social link previews are cluttered or generic', status: 'warning' },
  { label: 'Schema markup missing', status: 'info' },
  { label: 'Website is reachable', status: 'ok' },
  { label: 'Robots.txt is valid', status: 'ok' },
  { label: 'AI descriptions are missing', status: 'ok', badge: 'Fixed' },
  { label: 'Basic SEO is configured', status: 'ok' },
  { label: 'Pages are indexable', status: 'ok' },
];

function StatusIcon({ status }: { status: string }) {
  if (status === 'error') return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-100 flex-shrink-0">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 2v4m0 2h.01" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
  );
  if (status === 'warning') return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-100 flex-shrink-0">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 2v4m0 2h.01" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
  );
  if (status === 'info') return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="4" stroke="#60a5fa" strokeWidth="1.5"/><path d="M6 5v4" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
  );
  return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
}

export default function SEOReviewSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container pt-20 pb-10 md:pt-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* LEFT: large heading + colorful pointer SVG */}
        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Colorful star/arrow cursor SVG */}
          <div className="absolute -left-4 top-2 md:top-6 w-20 h-20 md:w-28 md:h-28 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 90 L55 20 L65 60 L100 45 Z" fill="url(#ptr-grad)" opacity="0.9"/>
              <defs>
                <linearGradient id="ptr-grad" x1="30" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#c084fc"/>
                  <stop offset="50%" stopColor="#f472b6"/>
                  <stop offset="100%" stopColor="#fb923c"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2
            className="font-bold text-[#1B1B1B] leading-[1.05] -tracking-[2px] pl-14 md:pl-16"
            style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          >
            Rode uma revisão de SEO e busca por IA quando quiser
          </h2>
        </div>

        {/* RIGHT: SEO review UI card */}
        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-white rounded-2xl border border-[#E8E4DC] shadow-sm overflow-hidden">
            {/* Card header */}
            <div className="px-5 py-4 border-b border-[#F0EDE6] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#1B1B1B] text-sm">Your SEO review</p>
                <p className="text-[#aaa] text-xs mt-0.5">A few important issues to fix.</p>
              </div>
              <button className="h-8 px-3 rounded-lg bg-[#4E93FF] text-white text-xs font-medium hover:bg-blue-500 transition-colors">
                Try to fix all
              </button>
            </div>

            {/* Issues list */}
            <div className="divide-y divide-[#F5F2EC]">
              {issues.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-5 py-3">
                  <StatusIcon status={item.status} />
                  <span className="text-sm text-[#282827] flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
                  )}
                  {(item.status === 'error' || item.status === 'warning' || item.status === 'info') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
