import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const faqs = [
  { q: 'Como a nova tecnologia se compara à anterior?', a: 'Apps novos são criados com TanStack Start, que oferece renderização completa no servidor (SSR). Isso significa que suas páginas são renderizadas como HTML completo antes de chegarem ao navegador, para que mecanismos de busca e crawlers de IA possam ler e indexar seu conteúdo imediatamente. Apps criados na tecnologia anterior (React e Tailwind CSS) usam pré-renderização, que gera snapshots de HTML estático para crawlers acessarem.' },
  { q: 'Posso migrar meu projeto existente para renderização no servidor?', a: 'Ainda não. Projetos existentes recebem pré-renderização automaticamente, o que torna seu conteúdo acessível para crawlers. SSR completo está disponível no momento apenas para novos projetos criados com TanStack Start.' },
  { q: 'Quanto custa conversar com dados da Semrush?', a: 'Conversar com dados da Semrush usa seus créditos normais de build e não tem custo extra até 15 de agosto de 2026. Não é preciso ter conta Semrush nem cobrança separada.' },
  { q: 'Quanto custa rodar uma revisão de SEO?', a: 'Rodar uma revisão de SEO é gratuito em todos os planos. Aplicar as recomendações (corrigir problemas) usa créditos normais de build, como qualquer outra edição no builder.' },
  { q: 'Quais planos têm acesso a esses recursos?', a: 'Todos. SSR, pré-renderização e revisão de SEO são gratuitos em todos os planos, incluindo o gratuito. Dados da Semrush no chat também estão disponíveis para todos os usuários e usam créditos normais de build.' },
  { q: 'Preciso de uma conta Semrush?', a: 'Não. Todo usuário da Lovable tem acesso a dados de busca da Semrush diretamente no chat do builder por meio dos créditos de build.' },
  { q: 'O que é visibilidade em busca por IA?', a: 'Ferramentas de IA como ChatGPT, Claude e Perplexity estão se tornando uma forma importante de descobrir produtos e serviços. A Lovable otimiza a estrutura de conteúdo do seu app para que essas ferramentas consigam ler, entender e recomendar seu app.' },
  { q: 'Isso funciona para apps existentes ou só para novos?', a: 'Ambos, mas de formas diferentes. Apps novos recebem SSR completo. Apps existentes recebem pré-renderização. A revisão de SEO e o chat com Semrush funcionam para todos os apps.' },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-t border-[#E8E4DC] ${index === faqs.length - 1 ? 'border-b' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-8 group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-medium text-[#1B1B1B] group-hover:text-[#282827] -tracking-[0.3px]">
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 5l5 5 5-5" stroke="#73726F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[400px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm md:text-base leading-relaxed text-[#73726F] max-w-[680px]">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="container py-16 md:py-24">
      <h2 className={`text-[40px] md:text-[56px] lg:text-[72px] font-bold -tracking-[1.5px] text-[#1B1B1B] mb-10 md:mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        Perguntas frequentes
      </h2>
      <div className={`max-w-[780px] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {faqs.map((item, i) => <FAQItem key={item.q} q={item.q} a={item.a} index={i} />)}
      </div>
    </section>
  );
}
