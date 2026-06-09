const items = [
  { pos: '#1',  label: 'Electronica',              album: 'Brazilian Carnival' },
  { pos: '#1',  label: '140 / Deep Dubstep',        album: 'Brazilian Carnival' },
  { pos: '#2',  label: 'Bass House',                album: 'Brazilian Carnival' },
  { pos: '#2',  label: 'Dance',                     album: 'Brazilian Carnival' },
  { pos: '#2',  label: 'Dubstep',                   album: 'Xmas 2025' },
  { pos: '#2',  label: 'Electro',                   album: 'Brazilian Carnival' },
  { pos: '#2',  label: 'Funky / Jackin\' House',    album: 'Brazilian Carnival' },
  { pos: '#3',  label: 'Dubstep',                   album: 'Euro Tour' },
  { pos: '#3',  label: 'Techno Raw / Hypnotic',     album: 'Brazilian Carnival' },
  { pos: '#4',  label: 'Funky / Jackin\' House',    album: 'Euro Tour' },
  { pos: '#4',  label: 'Progressive House',         album: 'Xmas 2025' },
  { pos: '#4',  label: 'Peak Time Techno',          album: 'Xmas 2025' },
  { pos: '#5',  label: 'Progressive House',         album: 'Brazilian Carnival' },
  { pos: '#7',  label: 'House',                     album: 'Xmas 2025' },
  { pos: '#8',  label: 'Afro House',                album: 'Euro Tour' },
  { pos: '#9',  label: 'Tech House',                album: 'Xmas 2025' },
  { pos: '#15', label: 'Progressive House',         album: 'Euro Tour' },
  { pos: '#20', label: 'Deep House',                album: 'Euro Tour' },
  { pos: '#38', label: 'Overall Top 100',           album: 'Xmas 2025' },
  { pos: '#58', label: 'Overall Top 100',           album: 'Brazilian Carnival' },
];

const doubled = [...items, ...items];

export default function MarqueeSection() {
  return (
    <div className="relative overflow-hidden bg-[#060A06] select-none py-0">
      {/* Top border glow */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35) 30%, rgba(34,197,94,0.35) 70%, transparent)' }} />

      <div className="py-3.5">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #060A06, transparent)' }} />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #060A06, transparent)' }} />

        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: 'marquee 45s linear infinite' }}
        >
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-2.5 px-5">
              <span className="text-[#22C55E] font-black text-sm tabular-nums">{item.pos}</span>
              <span className="text-[#F0EDE6]/70 text-sm font-medium">{item.label}</span>
              <span className="text-[#728A72] text-xs">· {item.album}</span>
              <span className="text-[#182B18] mx-1">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom border glow */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35) 30%, rgba(34,197,94,0.35) 70%, transparent)' }} />
    </div>
  );
}
