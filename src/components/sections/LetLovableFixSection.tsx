import { useInView } from '../../hooks/useInView';

export default function LetLovableFixSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container pt-20 pb-20 md:pt-28 md:pb-[138px]"
    >
      <h2
        className={`max-w-[360px] text-[48px] leading-[52px] font-bold -tracking-[1.44px] text-[#1B1B1B] md:max-w-[430px] md:text-[64px] md:leading-[70px] md:-tracking-[1.92px] lg:max-w-[495px] lg:text-[96px] lg:leading-[110%] lg:-tracking-[2.88px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        e deixe a Lovable corrigir por você
      </h2>

      <div
        className={`mt-10 md:mt-20 lg:mt-[172px] grid gap-y-10 md:grid-cols-2 md:gap-x-[45px] transition-all duration-700 delay-150 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        {/* Left: description */}
        <div className="max-w-[360px] text-lg leading-[23px] font-[500] -tracking-[0.36px] text-[#73726F] md:max-w-[409px] md:text-2xl md:leading-[109%] md:-tracking-[0.48px]">
          A Lovable pode revisar a descoberta do seu app quando você quiser: performance, metadados,
          estrutura de conteúdo e mais.
        </div>

        {/* Right: feature items */}
        <div>
          {[
            {
              title: 'Revisão de SEO e busca por IA sob demanda',
              desc: 'Rode uma revisão antes de publicar ou sempre que quiser verificar. Cobre performance, qualidade de metadados, estrutura de headings, alt text de imagens, tags canônicas, tags Open Graph, robots e status do sitemap. Gratuito em todos os planos.',
            },
            {
              title: 'Correções em um clique',
              desc: 'Corrija as recomendações em um clique, usando créditos normais de build.',
            },
          ].map((item, i) => (
            <div key={item.title} className={`py-5 md:py-6 ${i > 0 ? 'border-t border-[#D8D6CF]' : ''}`}>
              <h3 className="text-xl leading-[24px] font-[500] -tracking-[0.4px] text-[#1B1B1B] md:text-2xl md:leading-[109%] md:-tracking-[0.48px]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[360px] text-base leading-[21px] font-[500] -tracking-[0.32px] text-[#73726F] md:mt-2.5 md:max-w-[379px] md:text-lg md:leading-[109%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
