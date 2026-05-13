const footerColumns = [
  {
    title: 'Empresa',
    links: [
      { label: 'Carreiras', href: '#' },
      { label: 'Imprensa e mídia', href: '#' },
      { label: 'Empresas', href: '#' },
      { label: 'Segurança', href: '#' },
      { label: 'Parcerias', href: '#' },
    ],
  },
  {
    title: 'Produto',
    links: [
      { label: 'Preços', href: '#' },
      { label: 'Desconto para estudantes', href: '#' },
      { label: 'para Fundadores', href: '#' },
      { label: 'para Gerentes de Produto', href: '#' },
      { label: 'para Designers', href: '#' },
      { label: 'para Marketing', href: '#' },
      { label: 'Integrações', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Status', href: '#' },
    ],
  },
  {
    title: 'Recursos',
    links: [
      { label: 'Aprender', href: '#' },
      { label: 'Modelos', href: '#' },
      { label: 'Guias', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Suporte', href: '#' },
      { label: 'Avaliações', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de privacidade', href: '#' },
      { label: 'Política de cookies', href: '#' },
      { label: 'Termos gerais', href: '#' },
      { label: 'Reportar abuso', href: '#' },
    ],
  },
  {
    title: 'Comunidade',
    links: [
      { label: 'Torne-se um parceiro', href: '#' },
      { label: 'Afiliados', href: '#' },
      { label: 'Discord', href: '#' },
      { label: 'Reddit', href: '#' },
      { label: 'X / Twitter', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="pb-10 px-4 md:px-8"
      style={{
        background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 25%, #c084fc 50%, #e879f9 70%, #f472b6 90%, #fb7185 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="bg-[#FCFBF8] rounded-3xl px-8 py-10 md:px-12 md:py-12 shadow-sm">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {/* Logo column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-6">
                <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                  <path d="M20 6C14 6 9 11 9 17c0 4 2 7.5 5 9.5L20 34l6-7.5c3-2 5-5.5 5-9.5 0-6-5-11-11-11z" fill="url(#footer-logo-grad)"/>
                  <defs>
                    <linearGradient id="footer-logo-grad" x1="9" y1="6" x2="31" y2="34" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FF6B35"/>
                      <stop offset="50%" stopColor="#E040FB"/>
                      <stop offset="100%" stopColor="#4E93FF"/>
                    </linearGradient>
                  </defs>
                </svg>
              </a>
              <button className="flex items-center gap-2 text-sm text-[#73726F] border border-[#D8D6CF] rounded-full px-3 py-1.5 hover:bg-[#ECEAE4] transition-colors">
                <span>🌐</span>
                <span>PT-BR</span>
              </button>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-[#1B1B1B] mb-4 tracking-tight">{col.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-[#73726F] hover:text-[#1B1B1B] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-6 border-t border-[#D8D6CF] flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#73726F]">© 2025 Lovable. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#73726F] hover:text-[#1B1B1B] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-[#73726F] hover:text-[#1B1B1B] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
