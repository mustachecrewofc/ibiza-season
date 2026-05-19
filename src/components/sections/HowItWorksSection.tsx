import { useInView } from '../../hooks/useInView';

const steps = [
  {
    title: 'Submit free — any genre.',
    desc: 'Send your best, most finished track. SoundCloud link, WeTransfer, or Dropbox. Include your artist name and Spotify profile. Zero cost, zero commitment at this stage. We listen to everything.',
  },
  {
    title: 'We review in 7 days.',
    desc: "Every submission gets a real listen. You'll hear back either way — accepted or not. Selection is based on track quality, energy, fit with the World Cup theme, and genre balance across the lineup.",
  },
  {
    title: 'Join the squad. Lock your spot.',
    desc: 'Accepted artists receive the agreement, artwork brief, and campaign timeline. Confirm your spot (€299) and join the private Telegram war room with the full squad. From here, you\'re not solo anymore.',
  },
  {
    title: 'Execute together. Chart together.',
    desc: 'Pre-save launch, release day coordination, daily crew direction — every artist pushes simultaneously. The machine runs. You ride it. One unit, one campaign, one historic moment to hit the charts.',
  },
];

export default function HowItWorksSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="how-it-works"
      className="container py-20 md:py-28"
    >
      <div className="mb-3 text-xs font-bold uppercase tracking-[2px] text-[#728A72]">
        O processo
      </div>
      <h2
        className={`font-black text-[#F0EDE6] leading-[0.95] -tracking-[3px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
        style={{ fontSize: 'clamp(48px, 7vw, 96px)' }}
      >
        Four steps from<br/>demo to <span className="text-[#22C55E]">Beatport chart.</span>
      </h2>
      <p className="mt-5 max-w-[560px] text-[#728A72] text-base md:text-lg">
        Simple. Transparent. No fine print. Submission is always free — €299 only if you're selected and you say yes.
      </p>

      <div className="mt-12 md:mt-16 grid gap-4 md:grid-cols-2 md:gap-5">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className={`relative bg-[#0C140C] border border-[#182B18] rounded-2xl p-7 md:p-8 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: inView ? `${i * 100 + 100}ms` : '0ms' }}
          >
            <div
              className="text-[#22C55E] font-black leading-none mb-5 -tracking-[2px]"
              style={{ fontSize: 'clamp(48px, 6vw, 72px)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#F0EDE6] mb-3 -tracking-[0.4px]">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-[#728A72] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}