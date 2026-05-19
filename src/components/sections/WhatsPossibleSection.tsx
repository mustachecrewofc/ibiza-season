import { useInView } from '../../hooks/useInView';

const infrastructure = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    stat: '300k+',
    label: 'EDMArmy community',
    desc: 'Active fanbase across social media channels — real ears, real engagement, not just follower counts.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>
      </svg>
    ),
    stat: '30k+',
    label: 'Spotify monthly listeners',
    desc: 'Your single gets its own Spotify release under your profile — not just buried in a compilation.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
      </svg>
    ),
    stat: '~2M',
    label: 'SoundCloud repost reach',
    desc: 'Our partner repost network pushes your track to ~2 million SoundCloud followers — real DJs, real discovery.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    stat: 'Full',
    label: 'media kit per track',
    desc: 'Cover art, SoundCloud + Facebook covers, YouTube video, Instagram Story video, pre-save video. All made for you.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    stat: 'Press',
    label: 'blog & media coverage',
    desc: 'Blog posts, editorial features, and press coverage timed to the release window — extending reach beyond the algorithm.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    ),
    stat: 'Top',
    label: 'Beatport chart mission',
    desc: 'Coordinated release timing, pre-save sync, and day-one velocity push engineered for Beatport New Releases and Genre Charts.',
  },
];

function InfraCard({ icon, stat, label, desc, index, inView }: {
  icon: React.ReactNode;
  stat: string;
  label: string;
  desc: string;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`p-1 rounded-[22px] bg-[#0C140C] md:rounded-[28px] transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: inView ? `${index * 80 + 150}ms` : '0ms' }}
    >
      <div className="h-full px-5 py-5 md:p-6 flex flex-col gap-y-3 rounded-[18px] border border-[#182B18] bg-[#060A06] md:rounded-[24px]">
        <div className="flex items-start justify-between gap-3">
          <div className="text-[#22C55E]">{icon}</div>
          <div className="text-right">
            <div className="text-[#22C55E] font-black text-xl -tracking-[1px] leading-none">{stat}</div>
          </div>
        </div>
        <h3 className="text-lg md:text-xl leading-snug font-bold -tracking-[0.3px] text-[#F0EDE6]">
          {label}
        </h3>
        <p className="text-sm leading-relaxed text-[#728A72]">{desc}</p>
      </div>
    </div>
  );
}

export default function WhatsPossibleSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container py-20 md:py-28">
      <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
        The infrastructure
      </div>
      <h2
        className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(42px, 6.5vw, 88px)' }}
      >
        The machine is<br/><span className="text-[#22C55E]">already running.</span>
      </h2>
      <p className="mt-5 max-w-[640px] text-[#728A72] text-base md:text-lg leading-relaxed">
        You bring the track. We bring everything else — a decade of network,
        built tool by tool, platform by platform. Every asset, every channel,
        every contact activated the moment you join the squad.
      </p>

      <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
        {infrastructure.map((item, i) => (
          <InfraCard key={item.label} {...item} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
