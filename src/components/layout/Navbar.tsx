import { useState } from 'react';
import logoWhite from '@/assets/mustache-crew-white.png';

const navLinks = [
  { label: 'The Mission', href: '#mission' },
  { label: 'Proof', href: '#proof' },
  { label: 'Community', href: '#community' },
  { label: 'The Journey', href: '#journey' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 h-[60px] bg-[#0E223D]/85 backdrop-blur-md border-b border-[#D9B45B]/20">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <img src={logoWhite} alt="Mustache Crew Records" className="h-10 w-auto invert" />
        <span className="font-bold text-[#F7F3EB] text-lg tracking-tight hidden sm:inline">Mustache Crew Records</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3 py-1.5 text-sm text-[#9DB2C7] hover:text-[#F7F3EB] transition-colors rounded-lg hover:bg-[#13294A]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA buttons */}
      <div className="hidden md:flex items-center gap-2">
        <a href="/submit" className="h-[36px] px-4 rounded-full bg-[#D9B45B] text-sm font-semibold text-[#0E223D] hover:bg-[#E8C77A] transition-colors flex items-center">
          Submit Your Track
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-[#9DB2C7]"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {mobileOpen ? (
            <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
          ) : (
            <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0E223D] border-b border-[#1E3A5F] py-4 px-4 flex flex-col gap-1 shadow-sm">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-3 py-2 text-sm text-[#9DB2C7] hover:text-[#F7F3EB] rounded-lg hover:bg-[#13294A]">
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-[#1E3A5F]">
            <a href="/submit" className="flex-1 py-2 text-sm text-center font-semibold bg-[#D9B45B] text-[#0E223D] rounded-full">Submit Your Track</a>
          </div>
        </div>
      )}
    </header>
  );
}
