import { useInView } from '../../hooks/useInView';

const useCases = [
  {
    title: 'Lance um app novo que o Google consegue indexar',
    desc: 'Seu app novo já vem com SSR pronto. Metatags, dados Open Graph e dados estruturados serão sinalizados na revisão de SEO e podem ser adicionados em um clique.',
  },
  {
    title: 'Torne um app existente descobrível sem mudar nada',
    desc: 'A pré-renderização já está ativa. Seu conteúdo agora fica acessível para crawlers — sem migração e sem trabalho manual.',
  },
  {
    title: 'Pergunte "para quais termos eu ranqueio?" e receba uma resposta real',
    desc: 'Digite a pergunta no chat e receba seus rankings reais de palavras-chave com dados da Semrush.',
  },
  {
    title: 'Encontre oportunidades de palavra-chave e crie páginas para capturá-las',
    desc: 'A Semrush mostra os termos que as pessoas usam para encontrar apps como o seu, e então cria landing pages para esses termos — direto no chat.',
  },
  {
    title: 'Faça seu app ser recomendado por ferramentas de busca por IA',
    desc: 'A Lovable otimiza sua estrutura de conteúdo com markdown estruturado, para que seus apps sejam legíveis pelo ChatGPT, Perplexity e outras respostas com IA.',
  },
  {
    title: 'Rode uma revisão completa de SEO sempre que precisar',
    desc: 'Compare seu app com boas práticas antes ou depois de publicar. Corrija problemas em um clique e deixe o agente cuidar disso por você.',
  },
];

export default function WhatsPossibleSection() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container py-20 md:py-28">
      <h2
        className={`font-bold text-[#1B1B1B] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(52px, 8vw, 120px)' }}
      >
        O que é possível com os recursos de SEO da Lovable
      </h2>

      <div className="mt-8 grid gap-3 md:mt-12 md:grid-cols-2">
        {useCases.map((uc, i) => (
          <div
            key={uc.title}
            className={`p-1 rounded-[22px] bg-[#ECEAE4] md:rounded-[28px] transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: inView ? `${i * 80 + 150}ms` : '0ms' }}
          >
            <div className="h-full px-5 py-5 md:p-[23px] md:pr-[39px] flex flex-col gap-y-3 md:gap-y-4 rounded-[18px] border border-[#D8D6CF] bg-[#F7F4ED] md:rounded-[24px]">
              <h3 className="text-xl leading-[24px] font-bold -tracking-[0.2px] text-pretty text-[#282827] md:text-2xl md:leading-[120%] md:-tracking-[0.24px]">
                {uc.title}
              </h3>
              <p className="text-base leading-[22px] text-[#73726F]">{uc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
