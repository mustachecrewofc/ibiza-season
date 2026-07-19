import { useInView } from '../../hooks/useInView';
import { PortfolioGallery } from '../ui/portfolio-gallery';
import { ChartCarousel } from '../ui/chart-carousel';
import wcOverall6 from '@/assets/wc-overall-6.jpeg';
import wcFunky1 from '@/assets/wc-funky-1.jpeg';
import wcHouse1 from '@/assets/wc-house-1.jpeg';
import wcHiphop1 from '@/assets/wc-hiphop-1.jpeg';
import wcAfrohouse1 from '@/assets/wc-afrohouse-1.jpeg';
import wcMelodic1 from '@/assets/wc-melodic-1.jpeg';
import wcMinimal1 from '@/assets/wc-minimal-1.jpeg';
import wcElectronica1 from '@/assets/wc-electronica-1.jpeg';
import wcTechno1 from '@/assets/wc-techno-1.jpeg';
import wcIndiedance1 from '@/assets/wc-indiedance-1.jpeg';
import wcBasshouse1 from '@/assets/wc-basshouse-1.jpeg';
import wcDance2 from '@/assets/wc-dance-2.jpeg';
import wcTechhouse2 from '@/assets/wc-techhouse-2.jpeg';
import wcDeephouse2 from '@/assets/wc-deephouse-2.jpeg';
import proofOverall from '@/assets/proof-overall.jpg';
import proofProgressive from '@/assets/proof-progressive.jpg';
import proofPeaktime from '@/assets/proof-peaktime.jpg';
import proofHouse from '@/assets/proof-house.jpg';
import proofTechhouse from '@/assets/proof-techhouse.jpg';
import proofDubstep from '@/assets/proof-dubstep.jpg';
import proofElectronica from '@/assets/proof-electronica.jpg';
import xmasDubstep2 from '@/assets/xmas-dubstep-2.png';
import xmasHouse7 from '@/assets/xmas-house-7.png';
import euroFunky4 from '@/assets/euro-funky-4.jpg';
import euroDubstep3 from '@/assets/euro-dubstep-3.jpg';
import euroAfrohouse8 from '@/assets/euro-afrohouse-8.jpg';
import euroProgressive15 from '@/assets/euro-progressive-15.jpg';
import euroDeephouse20 from '@/assets/euro-deephouse-20.jpg';
import carnivalOverall from '@/assets/carnival-overall.jpg';
import carnivalElectronica from '@/assets/carnival-electronica.jpg';
import carnivalProgressive from '@/assets/carnival-progressive.jpg';
import carnivalHouse from '@/assets/carnival-house.jpg';
import carnivalTechhouse from '@/assets/carnival-techhouse.jpg';
import carnivalDance from '@/assets/carnival-dance.jpg';
import carnivalPeaktime from '@/assets/carnival-peaktime.jpg';
import carnivalElectro from '@/assets/carnival-electro.jpg';
import carnivalBassHouse from '@/assets/carnival-bass-house.jpg';
import carnivalDeepDubstep from '@/assets/carnival-deepdubstep.jpg';

const worldCupItems = [
  { id: 'wc-overall',     image: wcOverall6,     badge: '#6',  label: 'Overall Top 100 Releases', featured: true, alt: 'VA World Cup 2026 — #6 Beatport Overall Top 100 Releases' },
  { id: 'wc-house',       image: wcHouse1,       badge: '#1',  label: 'House Releases',                            alt: 'VA World Cup 2026 — #1 House Releases' },
  { id: 'wc-afrohouse',   image: wcAfrohouse1,   badge: '#1',  label: 'Afro House Releases',                       alt: 'VA World Cup 2026 — #1 Afro House Releases' },
  { id: 'wc-melodic',     image: wcMelodic1,     badge: '#1',  label: 'Melodic House & Techno Releases',           alt: 'VA World Cup 2026 — #1 Melodic House & Techno Releases' },
  { id: 'wc-techno',      image: wcTechno1,      badge: '#1',  label: 'Techno (Raw / Deep / Hypnotic) Releases',   alt: 'VA World Cup 2026 — #1 Techno (Raw / Deep / Hypnotic) Releases' },
  { id: 'wc-minimal',     image: wcMinimal1,     badge: '#1',  label: 'Minimal / Deep Tech Releases',              alt: 'VA World Cup 2026 — #1 Minimal / Deep Tech Releases' },
  { id: 'wc-electronica', image: wcElectronica1, badge: '#1',  label: 'Electronica / Downtempo Releases',          alt: 'VA World Cup 2026 — #1 Electronica / Downtempo Releases' },
  { id: 'wc-basshouse',   image: wcBasshouse1,   badge: '#1',  label: 'Bass House Releases',                       alt: 'VA World Cup 2026 — #1 Bass House Releases' },
  { id: 'wc-indiedance',  image: wcIndiedance1,  badge: '#1',  label: 'Indie Dance Releases',                      alt: 'VA World Cup 2026 — #1 Indie Dance Releases' },
  { id: 'wc-funky',       image: wcFunky1,       badge: '#1',  label: "Funky / Groove / Jackin' House Releases",   alt: "VA World Cup 2026 — #1 Funky / Groove / Jackin' House Releases" },
  { id: 'wc-hiphop',      image: wcHiphop1,      badge: '#1',  label: 'Hip-Hop / R&B Releases',                    alt: 'VA World Cup 2026 — #1 Hip-Hop / R&B Releases' },
  { id: 'wc-dance',       image: wcDance2,       badge: '#2',  label: 'Dance Releases',                            alt: 'VA World Cup 2026 — #2 Dance Releases' },
  { id: 'wc-techhouse',   image: wcTechhouse2,   badge: '#2',  label: 'Tech House Releases',                       alt: 'VA World Cup 2026 — #2 Tech House Releases' },
  { id: 'wc-deephouse',   image: wcDeephouse2,   badge: '#2',  label: 'Deep House Releases',                       alt: 'VA World Cup 2026 — #2 Deep House Releases' },
];

const euroImages = [
  { src: euroDubstep3,      alt: 'Mustache Gang Euro Tour — #3 Dubstep Releases' },
  { src: euroFunky4,        alt: 'Mustache Gang Euro Tour — #4 Funky / Groove / Jackin\' House Releases' },
  { src: euroAfrohouse8,    alt: 'Mustache Gang Euro Tour — #8 Afro House Releases' },
  { src: euroProgressive15, alt: 'Mustache Gang Euro Tour — #15 Progressive House Releases' },
  { src: euroDeephouse20,   alt: 'Mustache Gang Euro Tour — #20 Deep House Releases' },
];

const xmasImages = [
  { src: proofOverall, alt: 'Mustache Gang Xmas — #38 Beatport Overall Top 100' },
  { src: proofProgressive, alt: 'Mustache Gang Xmas — #4 Progressive House Releases' },
  { src: proofPeaktime, alt: 'Mustache Gang Xmas — #4 Techno (Peak Time / Driving) Releases' },
  { src: proofHouse, alt: 'Mustache Gang Xmas — #7 House Releases' },
  { src: proofTechhouse, alt: 'Mustache Gang Xmas — #9 Tech House Releases' },
  { src: proofDubstep, alt: 'Mustache Gang Xmas — #2 Dubstep Releases' },
  { src: proofElectronica, alt: 'Mustache Gang Xmas — #2 Electronica / Downtempo Releases' },
];

const carnivalImages = [
  { src: carnivalOverall, alt: 'Brazilian Carnival — #58 Beatport Overall Top 100' },
  { src: carnivalElectronica, alt: 'Brazilian Carnival — #1 Electronica / Downtempo Releases' },
  { src: carnivalDeepDubstep, alt: 'Brazilian Carnival — #1 140 / Deep Dubstep / Grime Releases' },
  { src: carnivalDance, alt: 'Brazilian Carnival — #2 Dance Releases' },
  { src: carnivalElectro, alt: 'Brazilian Carnival — #2 Electro (Classic / Detroit / Modern) Releases' },
  { src: carnivalBassHouse, alt: 'Brazilian Carnival — #2 Bass House Releases' },
  { src: carnivalPeaktime, alt: 'Brazilian Carnival — #4 Techno (Peak Time / Driving) Releases' },
  { src: carnivalProgressive, alt: 'Brazilian Carnival — #5 Progressive House Releases' },
  { src: carnivalHouse, alt: 'Brazilian Carnival — #10 House Releases' },
  { src: carnivalTechhouse, alt: 'Brazilian Carnival — #14 Tech House Releases' },
];

const issues = [
  { label: 'VA World Cup 2026 — #6 Beatport Overall Top 100 Releases', status: 'ok', badge: '👑 #6 Overall' },
  { label: 'VA World Cup — #1 House · #1 Afro House · #1 Melodic House & Techno', status: 'ok', badge: '#1 Genres' },
  { label: 'VA World Cup — #1 Techno · #1 Minimal · #1 Electronica · #1 Bass House', status: 'ok', badge: '10× #1' },
  { label: 'VA World Cup — #2 Dance · #2 Tech House · #2 Deep House', status: 'ok', badge: 'Multi-chart' },
  { label: 'Mustache Gang Xmas — #38 Overall · Brazilian Carnival — #58 Overall', status: 'ok', badge: 'Every VA charts' },
  { label: 'Chart positions held for 10+ days across all VA campaigns', status: 'ok', badge: '10+ days' },
  { label: 'Artists from past VAs booked for shows after their chart run', status: 'ok', badge: 'Bookings' },
  { label: 'SoundCloud repost network ≈ 2 million followers · EDMArmy 300k+', status: 'ok', badge: 'Verified' },
];

function StatusIcon() {
  return (
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-[#D9B45B]/15 flex-shrink-0">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="#D9B45B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  );
}

export default function SEOReviewSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="proof" className="container pt-20 pb-10 md:pt-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        <div className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="absolute -left-4 top-2 md:top-6 w-20 h-20 md:w-28 md:h-28 pointer-events-none" aria-hidden="true">
            <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 90 L55 20 L65 60 L100 45 Z" fill="url(#ptr-grad)" opacity="0.95"/>
              <defs>
                <linearGradient id="ptr-grad" x1="30" y1="20" x2="100" y2="90" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#D9B45B"/>
                  <stop offset="100%" stopColor="#49B7C9"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="pl-14 md:pl-16 mb-3 text-xs font-bold uppercase tracking-[2px] text-[#9DB2C7]">
            Proof. Not promises.
          </div>
          <h2
            className="font-black text-[#F7F3EB] leading-[1.05] -tracking-[2px] pl-14 md:pl-16"
            style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
          >
            We've done this before.<br/><span className="text-[#49B7C9]">Four times.</span>
          </h2>
          <p className="mt-6 pl-14 md:pl-16 text-[#9DB2C7] text-base md:text-lg leading-relaxed max-w-[460px]">
            Our latest VA — World Cup 2026 — just hit{' '}
            <span className="text-[#D9B45B] font-semibold">#6 on the Beatport Overall Top 100</span>{' '}
            and took <span className="text-[#F7F3EB] font-semibold">#1 in ten genre charts</span> at
            the same time. House, Afro House, Melodic Techno, Bass House — all of them, number one.
            Four VA campaigns, four chart runs. Real screenshots, real positions — not projections.
          </p>
          <a
            href="https://www.instagram.com/mustachecrew/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 ml-14 md:ml-16 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#1E3A5F] text-sm text-[#F7F3EB] hover:bg-[#13294A] transition-colors"
          >
            📷 Watch the highlights on Instagram ↗
          </a>
        </div>

        <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="bg-[#13294A] rounded-2xl border border-[#1E3A5F] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#1E3A5F] flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#F7F3EB] text-sm">Label achievements</p>
                <p className="text-[#9DB2C7] text-xs mt-0.5">Highlights from previous VA editions.</p>
              </div>
              <span className="h-8 px-3 rounded-lg bg-[#D9B45B] text-[#0E223D] text-xs font-bold flex items-center">
                Since 2018
              </span>
            </div>

            <div className="divide-y divide-[#1E3A5F]">
              {issues.map((item) => (
                <div key={item.label} className="flex items-center gap-3 px-5 py-3">
                  <StatusIcon />
                  <span className="text-sm text-[#F7F3EB] flex-1">{item.label}</span>
                  {item.badge && (
                    <span className="text-xs bg-[#D9B45B]/15 text-[#49B7C9] px-2 py-0.5 rounded-full font-medium">{item.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* World Cup gallery — the freshest, biggest result comes first */}
      <div className={`mt-16 md:mt-24 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex flex-col gap-2 mb-6 md:mb-8 max-w-[640px]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9B45B]/15 border border-[#D9B45B]/50 text-[#D9B45B] text-xs font-bold uppercase tracking-wider">
              🏆 VA World Cup 2026 — Fresh results
            </span>
            <span className="text-[#9DB2C7] text-xs hidden sm:inline">14 Beatport chart placements</span>
          </div>
          <p className="text-[#9DB2C7] text-sm leading-relaxed">
            <span className="text-[#D9B45B] font-semibold">#6 Overall Top 100</span> — our best position ever —
            plus <span className="text-[#F7F3EB] font-semibold">ten #1 genre charts</span> in a single campaign.
          </p>
        </div>
        <ChartCarousel items={worldCupItems} />
      </div>

      {/* Xmas gallery */}
      <div className={`mt-16 md:mt-24 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#49B7C9]/15 border border-[#49B7C9]/40 text-[#FF8A7A] text-xs font-bold uppercase tracking-wider">
            🎅 Mustache Gang Xmas 2025
          </span>
          <span className="text-[#9DB2C7] text-xs hidden sm:inline">8 Beatport chart placements</span>
        </div>
        <PortfolioGallery images={xmasImages} spacing="-space-x-24 md:-space-x-28" />
      </div>

      {/* Brazilian Carnival gallery */}
      <div className={`mt-12 md:mt-20 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9B45B]/15 border border-[#D9B45B]/40 text-[#49B7C9] text-xs font-bold uppercase tracking-wider">
            🇧🇷 Brazilian Carnival VA
          </span>
          <span className="text-[#9DB2C7] text-xs hidden sm:inline">12 Beatport chart placements</span>
        </div>
        <PortfolioGallery
          images={carnivalImages}
          variant="straight"
          cardSize={200}
          spacing="-space-x-10 md:-space-x-12"
        />
      </div>

      {/* Euro Tour gallery — last */}
      <div className={`mt-12 md:mt-20 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-2 md:mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/40 text-[#3B82F6] text-xs font-bold uppercase tracking-wider">
            🌍 Mustache Gang Euro Tour
          </span>
          <span className="text-[#9DB2C7] text-xs hidden sm:inline">9 Beatport chart placements</span>
        </div>
        <PortfolioGallery images={euroImages} spacing="-space-x-20 md:-space-x-24" />
      </div>

      {/* Inline CTA after proof */}
      <div className={`mt-14 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-5 rounded-2xl"
          style={{
            background: 'rgba(73,183,201,0.05)',
            border: '1px solid rgba(73,183,201,0.18)',
          }}
        >
          <div>
            <p className="font-bold text-[#F7F3EB] text-sm">Four times proven. Now it's your turn.</p>
            <p className="text-[#9DB2C7] text-xs mt-0.5">Submit by September 18 · Releases October 2, 2026</p>
          </div>
          <a
            href="/submit"
            className="flex-shrink-0 h-[40px] px-5 rounded-full bg-[#D9B45B] text-sm font-bold text-[#0E223D] hover:bg-[#E8C77A] transition-colors flex items-center gap-2"
          >
            Send Your Demo →
          </a>
        </div>
      </div>

      {/* Bridge to Community */}
      <div className={`mt-12 flex flex-col items-center gap-2 transition-all duration-700 delay-600 ${inView ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-[#9DB2C7] text-center">
          Behind every one of those chart runs, the same group chat was the engine.
        </p>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9DB2C7" strokeWidth="2" strokeLinecap="round" className="opacity-50">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
