import { useInView } from '../../hooks/useInView';

export default function LetLovableFixSection() {
  const { ref, inView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="container pt-20 pb-20 md:pt-28 md:pb-[138px]"
    >
      <h2
        className={`max-w-[360px] text-[48px] leading-[52px] font-black -tracking-[1.44px] text-[#F0EDE6] md:max-w-[520px] md:text-[64px] md:leading-[70px] md:-tracking-[1.92px] lg:max-w-[700px] lg:text-[96px] lg:leading-[110%] lg:-tracking-[2.88px] transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        and the <span className="text-[#F5C842]">crew</span> handles the rest
      </h2>

      <div
        className={`mt-10 md:mt-20 lg:mt-[172px] grid gap-y-10 md:grid-cols-2 md:gap-x-[45px] transition-all duration-700 delay-150 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="max-w-[360px] text-lg leading-[23px] font-[500] -tracking-[0.36px] text-[#8A8A9A] md:max-w-[409px] md:text-2xl md:leading-[109%] md:-tracking-[0.48px]">
          You send the music. Mustache Crew Records takes care of mastering, artwork,
          distribution, promo and global push.
        </div>

        <div>
          {[
            {
              title: 'Full promo package',
              desc: 'Animated cover art, IG reels, YouTube visualizer, premiere coverage on tastemaker channels, and dedicated push on the official VA World Cup playlists.',
            },
            {
              title: 'Worldwide community',
              desc: 'Selected artists join the Mustache Crew global network — a private Discord with producers, DJs and label staff from 30+ countries collaborating, swapping stems and booking gigs.',
            },
          ].map((item, i) => (
            <div key={item.title} className={`py-5 md:py-6 ${i > 0 ? 'border-t border-[#2A2A3E]' : ''}`}>
              <h3 className="text-xl leading-[24px] font-semibold -tracking-[0.4px] text-[#F0EDE6] md:text-2xl md:leading-[109%] md:-tracking-[0.48px]">
                {item.title}
              </h3>
              <p className="mt-2 max-w-[360px] text-base leading-[21px] font-[500] -tracking-[0.32px] text-[#8A8A9A] md:mt-2.5 md:max-w-[379px] md:text-lg md:leading-[109%]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
