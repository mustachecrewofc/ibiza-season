import { useEffect, useState } from 'react';
import { useInView } from '../../hooks/useInView';
import logoWhite from '@/assets/mustache-crew-white.png';
import mustacheIcon from '@/assets/mustache-icon.png';

type Msg = {
  author: string;
  role?: string;
  isCrew?: boolean;
  content: string;
  color?: string;
  delay: number;
};

const messages: Msg[] = [
  {
    author: 'Mustache Crew',
    role: 'A&R · admin',
    isCrew: true,
    content: "Squad, it's official — Mustache Gang World Cup 2026 drops July 17, 2 days before the Final. 30 artists, one coordinated push. Pre-save links go live tomorrow at 11AM CET. Are we ready?",
    delay: 600,
  },
  {
    author: 'Carlos Mendez',
    role: 'Tech House · MX',
    color: '#1E5AA8',
    content: "LET'S GO — Stories already drafted, posting the second the link drops. This is THE one.",
    delay: 1800,
  },
  {
    author: 'Sofia Lindqvist',
    role: 'Melodic Techno · SE',
    color: '#D9B45B',
    content: "My track is mastered and loaded. Pre-save banner in bio, reel cut for launch day. Squad energy.",
    delay: 3000,
  },
  {
    author: 'TechnoMike',
    role: 'Peak Time · DE',
    color: '#49B7C9',
    content: "Just hit my mailing list — 12k subs primed for the drop. Let's chart this thing.",
    delay: 4200,
  },
  {
    author: 'Lua Ferreira',
    role: 'Afro House · BR',
    color: '#E78E6D',
    content: "Linha de comunicação aberta com a galera do Brasil — vamos empurrar forte na semana de lançamento!",
    delay: 5400,
  },
  {
    author: 'Mustache Crew',
    role: 'A&R · admin',
    isCrew: true,
    content: "That's the squad mindset. 30 artists, one drop, one push. We run the war room — you bring the heat. World Cup window is ours.",
    delay: 6800,
  },
];

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#49B7C9] opacity-60" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#49B7C9]" />
    </span>
  );
}

function Dots() {
  return (
    <div className="flex gap-1 items-center py-1">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#D9B45B] animate-[loading-dot_1.4s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
}

function Avatar({ msg }: { msg: Msg }) {
  if (msg.isCrew) {
    return (
      <div className="relative flex-shrink-0">
        <div
          className="w-9 h-9 rounded-full bg-[#D9B45B] flex items-center justify-center shadow-sm"
          style={{ boxShadow: '0 0 0 2px rgba(217,180,91,0.25), 0 0 12px rgba(217,180,91,0.15)' }}
        >
          <img src={mustacheIcon} alt="" className="w-6 h-6 object-contain" />
        </div>
      </div>
    );
  }
  const initials = msg.author.split(' ').map(s => s[0]).slice(0, 2).join('');
  return (
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-[#0E223D] text-xs font-bold shadow-sm"
      style={{ background: `linear-gradient(135deg, ${msg.color}, ${msg.color}bb)` }}
    >
      {initials}
    </div>
  );
}

export default function ChatSemrushSection({ hideHero = false }: { hideHero?: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.12 });
  const [visible, setVisible] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!inView || started) return;
    setStarted(true);
    messages.forEach((m, i) => {
      setTimeout(() => setVisible(p => [...p, i]), m.delay);
    });
  }, [inView, started]);

  const show = (i: number) => visible.includes(i);
  const showTyping = (i: number) => visible.length === i && i < messages.length;

  const heroAnim = (delay: number, fromY = 20): React.CSSProperties => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : `translateY(${fromY}px)`,
    transition: `opacity 0.7s ease, transform 0.7s ease`,
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative overflow-hidden">
      {!hideHero && (
        <>
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 90% 55% at 50% 0%, rgba(217,180,91,0.22) 0%, rgba(73,183,201,0.30) 35%, rgba(21,58,99,0.40) 65%, transparent 90%)',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, #0E223D 0%, transparent 15%, transparent 75%, #0E223D 100%)' }}
            aria-hidden="true"
          />
        </>
      )}

      <div ref={ref as unknown as React.RefObject<HTMLDivElement>} className="relative z-10">
        {!hideHero && (
          <div className="container pt-24 md:pt-32 pb-14 text-center">

            {/* Badge */}
            <div style={heroAnim(0)} className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#49B7C9]/35 bg-[#49B7C9]/10 text-[#49B7C9] text-xs font-bold uppercase tracking-[2px]">
                <PulseDot />
                The inner circle
              </span>
            </div>

            {/* Heading */}
            <h2
              style={{ ...heroAnim(120, 24), fontSize: 'clamp(36px, 5.5vw, 76px)' }}
              className="font-black text-[#F7F3EB] leading-[1.0] -tracking-[2.5px]"
            >
              You've been releasing alone.<br />
              <span className="text-[#49B7C9]">Not anymore.</span>
            </h2>

            {/* Subtitle */}
            <p
              style={heroAnim(250)}
              className="mt-5 text-[#F7F3EB]/75 text-base md:text-lg max-w-[540px] mx-auto leading-relaxed"
            >
              This Telegram group is where 30 artists from across the world coordinate
              the biggest push of their careers. Campaign strategy, launch day activation,
              real-time updates — and a network that will still be in your contacts long after the charts.
            </p>

            {/* Logo + label */}
            <div style={heroAnim(380)} className="mt-10 flex flex-col items-center gap-2">
              <img src={logoWhite} alt="Mustache Crew" className="h-10 w-auto opacity-70" />
              <p className="text-[#F7F3EB]/45 text-xs max-w-[360px] leading-relaxed">
                A record label since 2018, specialized in launching and promoting tracks in the electronic music scene.
              </p>
            </div>

          </div>
        )}

        {/* Chat window area */}
        <div
          className="relative"
          style={{ background: hideHero ? '#0E223D' : 'linear-gradient(to bottom, transparent 0%, #0E223D 14%)' }}
        >
          <div className={`container max-w-[680px] pb-20 ${hideHero ? 'pt-24 md:pt-32' : 'pt-10'}`}>

            {/* Chat window */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 0 1px rgba(73,183,201,0.15), 0 24px 64px -12px rgba(0,0,0,0.6)',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                transitionDelay: hideHero ? '0ms' : '460ms',
              }}
            >
              {/* Telegram header */}
              <div className="flex items-center gap-3 bg-[#122C4E] border-b border-[#1a2e1a] px-4 py-3">
                <div
                  className="w-10 h-10 rounded-full bg-[#D9B45B] flex items-center justify-center flex-shrink-0"
                  style={{ boxShadow: '0 0 0 2px rgba(217,180,91,0.20)' }}
                >
                  <img src={mustacheIcon} alt="" className="w-7 h-7 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#F7F3EB] text-sm truncate">Mustache Gang WC 2026 — Squad</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <PulseDot />
                    <p className="text-[10px] text-[#49B7C9]">30 members · 28 online</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9DB2C7" strokeWidth="2" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                  <span className="text-[10px] font-semibold text-[#9DB2C7] bg-[#0E223D]/60 border border-[#1E3A5F] px-2 py-0.5 rounded-full">Telegram</span>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-[#102845] px-3 py-4 flex flex-col gap-3 min-h-[380px]">
                {messages.map((msg, i) =>
                  show(i) ? (
                    <div
                      key={i}
                      className="flex gap-2.5 items-start animate-[chat-message_0.35s_ease-out_forwards]"
                    >
                      <Avatar msg={msg} />
                      <div className="max-w-[82%]">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span
                            className="text-xs font-bold"
                            style={{ color: msg.isCrew ? '#D9B45B' : msg.color }}
                          >
                            {msg.author}
                          </span>
                          {msg.role && (
                            <span className="text-[9px] text-[#9DB2C7]/70 uppercase tracking-wide">
                              {msg.role}
                            </span>
                          )}
                        </div>
                        <div
                          className="text-[14px] leading-relaxed px-3.5 py-2.5 rounded-xl rounded-tl-[4px]"
                          style={
                            msg.isCrew
                              ? {
                                  background: 'rgba(217,180,91,0.08)',
                                  border: '1px solid rgba(217,180,91,0.20)',
                                  borderLeft: '2.5px solid rgba(217,180,91,0.60)',
                                  color: '#F7F3EB',
                                }
                              : {
                                  background: '#143156',
                                  border: '1px solid rgba(247,243,235,0.06)',
                                  color: '#F7F3EB',
                                }
                          }
                        >
                          {msg.content}
                        </div>
                      </div>
                    </div>
                  ) : showTyping(i) ? (
                    <div key={`typing-${i}`} className="flex gap-2.5 items-center pl-11">
                      <span className="text-[11px] text-[#9DB2C7]/70 italic">{msg.author} is typing</span>
                      <Dots />
                    </div>
                  ) : null
                )}
              </div>
            </div>

            {/* Callout — green left border */}
            <div
              className="mt-6 rounded-2xl border border-[#1E3A5F] bg-[#13294A] overflow-hidden"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
                transitionDelay: hideHero ? '200ms' : '680ms',
              }}
            >
              <div className="flex">
                <div className="w-1 bg-[#49B7C9] rounded-l-full flex-shrink-0" />
                <div className="flex items-start gap-3 px-5 py-4">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#49B7C9" strokeWidth="2.2" className="mt-0.5 flex-shrink-0">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                  <div>
                    <p className="font-bold text-[#F7F3EB] text-sm">The conversation is already happening.</p>
                    <p className="text-[#9DB2C7] text-sm mt-1 leading-relaxed">
                      The only question is whether your name is in it.
                      All genres, all countries —{' '}
                      <span className="font-medium text-[#49B7C9]">30 spots, no exceptions</span>.
                      Deadline to apply:{' '}
                      <span className="text-[#D9B45B] font-medium">July 10, 2026</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          {/* Bridge to Journey */}
          <div
            className="mt-8 flex flex-col items-center gap-2"
            style={{
              opacity: inView ? 1 : 0,
              transition: 'opacity 0.7s ease',
              transitionDelay: hideHero ? '400ms' : '800ms',
            }}
          >
            <p className="text-sm text-[#9DB2C7] text-center">
              This is your squad. Here's how you join it.
            </p>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9DB2C7" strokeWidth="2" strokeLinecap="round" className="opacity-50">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
