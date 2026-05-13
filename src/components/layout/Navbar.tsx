import { useState } from 'react';

const navLinks = [
  { label: 'Soluções', href: '#' },
  { label: 'Recursos', href: '#' },
  { label: 'Comunidade', href: '#' },
  { label: 'Empresas', href: '#' },
  { label: 'Preços', href: '#' },
  { label: 'Segurança', href: '#' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 h-[60px] bg-[#FCFBF8]/90 backdrop-blur-md border-b border-[#E8E4DC]">
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
        {/* Lovable colorful logo */}
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 3C8.477 3 4 7.477 4 13c0 3.5 1.793 6.587 4.52 8.43L14 25l5.48-3.57C22.207 19.587 24 16.5 24 13c0-5.523-4.477-10-10-10z" fill="url(#logo-grad)"/>
          <defs>
            <linearGradient id="logo-grad" x1="4" y1="3" x2="24" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF6B35"/>
              <stop offset="50%" stopColor="#E040FB"/>
              <stop offset="100%" stopColor="#4E93FF"/>
            </linearGradient>
          </defs>
        </svg>
        <span className="font-bold text-[#1B1B1B] text-lg tracking-tight">Lovable</span>
      </a>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="px-3 py-1.5 text-sm text-[#73726F] hover:text-[#1B1B1B] transition-colors rounded-lg hover:bg-[#ECEAE4]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* CTA buttons */}
      <div className="hidden md:flex items-center gap-2">
        <button className="px-4 py-2 text-sm text-[#73726F] hover:text-[#1B1B1B] transition-colors">
          Login
        </button>
        <button className="h-[36px] px-4 rounded-full bg-[#1B1B1B] text-sm font-medium text-[#F8F4EC] hover:bg-[#282827] transition-colors">
          Começar
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-[#73726F]"
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
        <div className="absolute top-full left-0 right-0 bg-[#FCFBF8] border-b border-[#E8E4DC] py-4 px-4 flex flex-col gap-1 shadow-sm">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="px-3 py-2 text-sm text-[#73726F] hover:text-[#1B1B1B] rounded-lg hover:bg-[#ECEAE4]">
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 mt-3 pt-3 border-t border-[#E8E4DC]">
            <button className="flex-1 py-2 text-sm text-[#73726F] border border-[#D8D6CF] rounded-full">Login</button>
            <button className="flex-1 py-2 text-sm font-medium bg-[#1B1B1B] text-[#F8F4EC] rounded-full">Começar</button>
          </div>
        </div>
      )}
    </header>
  );
}
