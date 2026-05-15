import { useState } from 'react';
import { useInView } from '../../hooks/useInView';

const faqs = [
  { q: 'Who can submit?', a: 'Producers from anywhere in the world. Independent, signed, established or new — what matters is the music. We accept Techno, House, Tech House, Melodic Techno, Progressive, Minimal and Afro House.' },
  { q: 'Is there a submission fee?', a: 'No. Submitting to the VA World Cup is 100% free. We never charge artists to consider their work.' },
  { q: 'Do tracks need to be unreleased?', a: 'Yes. All submitted material must be unreleased and exclusive to the VA World Cup compilation. Tracks already published on any platform won\'t be considered.' },
  { q: 'When is the deadline?', a: 'The submission deadline is March 31, 2026. Selected artists will be contacted directly via email by April 30, 2026.' },
  { q: 'How are tracks selected?', a: 'Mustache Crew\'s A&R team listens to every submission. Selection is based on production quality, originality, and how the track fits the global narrative of the compilation.' },
  { q: 'What about royalties?', a: 'Selected artists sign a fair distribution agreement with transparent royalty splits. You keep your publishing rights — we only handle the master release for the VA edition.' },
  { q: 'Do I need to live in a specific country?', a: 'No. The VA World Cup is fully international and remote. Past editions have featured artists from Brazil, Germany, Mexico, UK, Argentina, Italy, Spain, Japan and more.' },
  { q: 'What happens after I\'m selected?', a: 'You\'ll get a contract, then we coordinate mastering, artwork and metadata. Release happens simultaneously worldwide on all major DSPs with a full promo campaign rolled out by the label.' },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border-t border-[#2A2A3E] ${index === faqs.length - 1 ? 'border-b' : ''}`}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-8 group"
        aria-expanded={open}
      >
        <span className="text-base md:text-lg font-medium text-[#F0EDE6] group-hover:text-[#F5C842] transition-colors -tracking-[0.3px]">
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 5l5 5 5-5" stroke="#F5C842" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[400px] pb-5' : 'max-h-0'}`}>
        <p className="text-sm md:text-base leading-relaxed text-[#8A8A9A] max-w-[680px]">{a}</p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="faq" className="container py-16 md:py-24">
      <h2 className={`text-[40px] md:text-[56px] lg:text-[72px] font-black -tracking-[1.5px] text-[#F0EDE6] mb-10 md:mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        Frequently asked
      </h2>
      <div className={`max-w-[780px] transition-all duration-700 delay-150 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {faqs.map((item, i) => <FAQItem key={item.q} q={item.q} a={item.a} index={i} />)}
      </div>
    </section>
  );
}
