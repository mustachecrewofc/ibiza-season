import { useInView } from '../../hooks/useInView';

const useCases = [
  {
    title: 'Custom artwork & visuals',
    desc: 'Each selected track gets dedicated cover design plus an animated visualizer for IG reels, TikTok and YouTube — built by our in-house art team.',
  },
  {
    title: 'Worldwide distribution',
    desc: 'Beatport, Spotify, Apple Music, SoundCloud, Tidal, Deezer, Amazon Music and more. Full ISRC, metadata and royalty splits handled.',
  },
  {
    title: 'Mastering by industry pros',
    desc: 'Tracks are mastered to club & streaming standards by engineers who work with major labels — at no cost to selected artists.',
  },
  {
    title: 'Editorial & playlist push',
    desc: 'Curated submission to Spotify, Apple Music and SoundCloud editorial teams plus placement on the official VA World Cup playlists.',
  },
  {
    title: 'Premiere & press coverage',
    desc: 'Official premieres on tastemaker channels, magazine features, podcast spots and DJ support tracking from established names in the scene.',
  },
  {
    title: 'A global crew, for life',
    desc: 'Once you\'re in, you\'re part of the Mustache Crew family. Private Discord, collab opportunities, gig leads, and a network spanning 30+ countries.',
  },
];

export default function WhatsPossibleSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container py-20 md:py-28">
      <h2
        className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(52px, 8vw, 120px)' }}
      >
        What selected artists <span className="text-[#F5C842]">get</span>
      </h2>

      <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2">
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className={`p-1 rounded-[22px] bg-[#13131F] md:rounded-[28px] transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: inView ? `${i * 80 + 150}ms` : '0ms' }}
          >
            <div className="h-full px-5 py-5 md:p-[23px] md:pr-[39px] flex flex-col gap-y-3 md:gap-y-4 rounded-[18px] border border-[#2A2A3E] bg-[#0A0A0F] md:rounded-[24px]">
              <h3 className="text-xl leading-[24px] font-bold -tracking-[0.2px] text-pretty text-[#F0EDE6] md:text-2xl md:leading-[120%] md:-tracking-[0.24px]">
                {uc.title}
              </h3>
              <p className="text-base leading-[22px] text-[#8A8A9A]">{uc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
