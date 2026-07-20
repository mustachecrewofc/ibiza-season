const items = [
  // VA World Cup 2026 — freshest results
  { pos: '#6',  label: 'Overall Top 100',           album: 'World Cup 2026' },
  { pos: '#1',  label: 'House',                     album: 'World Cup 2026' },
  { pos: '#1',  label: 'Afro House',                album: 'World Cup 2026' },
  { pos: '#1',  label: 'Melodic House & Techno',    album: 'World Cup 2026' },
  { pos: '#1',  label: 'Techno Raw / Hypnotic',     album: 'World Cup 2026' },
  { pos: '#1',  label: 'Minimal / Deep Tech',       album: 'World Cup 2026' },
  { pos: '#1',  label: 'Electronica',               album: 'World Cup 2026' },
  { pos: '#1',  label: 'Bass House',                album: 'World Cup 2026' },
  { pos: '#1',  label: 'Indie Dance',              album: 'World Cup 2026' },
  { pos: '#1',  label: 'Funky / Jackin\' House',    album: 'World Cup 2026' },
  { pos: '#1',  label: 'Hip-Hop / R&B',            album: 'World Cup 2026' },
  { pos: '#2',  label: 'Dance',                     album: 'World Cup 2026' },
  { pos: '#2',  label: 'Tech House',                album: 'World Cup 2026' },
  { pos: '#2',  label: 'Deep House',                album: 'World Cup 2026' },
  // Past VA highlights
  { pos: '#1',  label: 'Electronica',              album: 'Brazilian Carnival' },
  { pos: '#1',  label: '140 / Deep Dubstep',        album: 'Brazilian Carnival' },
  { pos: '#2',  label: 'Dubstep',                   album: 'Xmas 2025' },
  { pos: '#4',  label: 'Peak Time Techno',          album: 'Xmas 2025' },
  { pos: '#38', label: 'Overall Top 100',           album: 'Xmas 2025' },
  { pos: '#58', label: 'Overall Top 100',           album: 'Brazilian Carnival' },
];

const doubled = [...items, ...items];

export default function MarqueeSection() {
  return (
    <div className="relative overflow-hidden bg-[#0E223D] select-none py-0">
      {/* Top border glow */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(73,183,201,0.35) 30%, rgba(73,183,201,0.35) 70%, transparent)' }} />

      <div className="py-3.5">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0E223D, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0E223D, transparent)' }} />

        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 45s linear infinite' }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 px-5">
              <span className="text-[#49B7C9] font-black text-sm tabular-nums">{item.pos}</span>
              <span className="text-[#F7F3EB]/70 text-sm font-medium">{item.label}</span>
              <span className="text-[#9DB2C7] text-xs">· {item.album}</span>
              <span className="text-[#1E3A5F] mx-1">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(73,183,201,0.35) 30%, rgba(73,183,201,0.35) 70%, transparent)' }} />
    </div>
  );
}
