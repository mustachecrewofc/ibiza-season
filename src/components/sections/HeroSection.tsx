export default function HeroSection() {
  return (
    <div className="relative bg-[#1B1B1B] overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <section className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[32px] grid grid-rows-[1fr_auto] lg:grid-rows-[1fr_auto_1fr] relative z-10 min-h-[680px] lg:min-h-[760px]">
        {/* Spacer top (lg only) */}
        <div className="hidden lg:block" />

        {/* Main content */}
        <div className="pt-[100px] lg:pt-0 pb-4">
          <h1 className="pt-12 self-center text-center font-bold text-[#F8F4EC] text-5xl leading-[54px] tracking-tight md:text-[96px] md:leading-[112px] md:-tracking-[2.5px] lg:pt-0 lg:pb-20 lg:text-[110px] lg:leading-[142px] lg:-tracking-[4.4px] [text-wrap:balance]">
            Crie apps que as pessoas<br className="hidden lg:block" /> realmente encontram
          </h1>
        </div>

        {/* Subtitle + CTA */}
        <div className="pt-8 pb-6 flex flex-col items-start justify-end md:pt-8 md:pb-[55px]">
          <p className="max-w-[416px] -tracking-[0.16px] text-[#D1D5DB] text-base leading-relaxed">
            Apps da Lovable já saem prontos para busca, encontráveis no Google e em ferramentas de IA
            como ChatGPT, Claude e Perplexity. Sem precisar saber SEO.
          </p>
          <button
            type="button"
            className="mt-6 h-[44px] flex items-center px-5 rounded-full bg-[#F9F4EB] text-base font-medium -tracking-[0.32px] text-[#1B1B1B] border-0 transition-colors hover:bg-white cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F9F4EB]/60 focus-visible:outline-none"
          >
            Comece a construir
          </button>
        </div>
      </section>
    </div>
  );
}
