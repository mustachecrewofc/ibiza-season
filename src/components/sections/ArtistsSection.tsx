import { useInView } from '../../hooks/useInView';

const featured = [
  { name: 'Malik Mustache',  image: 'https://i.scdn.co/image/ab6761610000e5ebcdb8a3d7312f34d47019e731', spotify: 'https://open.spotify.com/artist/5FcXaC6DLXy2s4HFGqERWU' },
  { name: 'Bashh',           image: 'https://i.scdn.co/image/ab6761610000e5eb1b6d65447948ad2ddf1ca9b6', spotify: 'https://open.spotify.com/artist/4fHQ6hDkFSYn6a36YhP1xv' },
  { name: 'Christian Cross', image: 'https://i.scdn.co/image/ab6761610000e5eb77ac1be64266651e437a5bd7', spotify: 'https://open.spotify.com/artist/4DzEMNTxFIRPdngJMzbLkw' },
  { name: 'DV Beats',        image: 'https://i.scdn.co/image/ab6761610000e5eb77ccc243ba94625ad204971f', spotify: 'https://open.spotify.com/artist/204Z8pOa8yC3UdWQ1GyS50' },
  { name: 'Franz Colmer',    image: 'https://i.scdn.co/image/ab6761610000e5eb78d7fd76a4b65f8f86393c3e', spotify: 'https://open.spotify.com/artist/5mds9PGSL0dFTrSUc88qun' },
  { name: 'Brandon Szabo',   image: 'https://i.scdn.co/image/ab6761610000e5eb8903291960d73c0b4758ef90', spotify: 'https://open.spotify.com/artist/3dDVCf5OQOiCGbGPPRnqtU' },
];

const others = [
  { name: '303GREG',          image: 'https://i.scdn.co/image/ab6761610000e5eb55030010dd19e2c6881b6e8a', spotify: 'https://open.spotify.com/artist/7r7hokdjOWqvscBby85wlO' },
  { name: 'BrainUp',          image: 'https://i.scdn.co/image/ab6761610000e5eb423aadb0f81a6fc28fe8ceaa', spotify: 'https://open.spotify.com/artist/0NgVKPGCI8ICnFAoZ0x2ID' },
  { name: 'Cosmic Synthwave', image: 'https://i.scdn.co/image/ab6761610000e5eb6c87520444cc93fb05e42030', spotify: 'https://open.spotify.com/artist/1HijmXw0nZNp2iQvXbCwKH' },
  { name: 'Cupid',            image: 'https://i.scdn.co/image/ab67616d0000b273ae2adaa0eeaefe8223c2fe86', spotify: 'https://open.spotify.com/artist/25jz6GaRGJBunKkLvpn0Ar' },
  { name: 'Delilah Gunn',     image: 'https://i.scdn.co/image/ab6761610000e5eb6ba5048c6d44e58241715dc0', spotify: 'https://open.spotify.com/artist/7zGoGUY7nXRMt5qkxmPpIs' },
  { name: 'Dreamcap',         image: 'https://i.scdn.co/image/ab6761610000e5eb127b1f71f16475c34bef3bb4', spotify: 'https://open.spotify.com/artist/6Lmq0c7dUgDUzcTWkW95Ce' },
  { name: 'Dutxe',            image: 'https://i.scdn.co/image/ab6761610000e5eb20eea854d083096fdf0408fd', spotify: 'https://open.spotify.com/artist/7pMHBRv5oY7pHuXfQ0WLCs' },
  { name: 'Eccentric Auds',   image: 'https://i.scdn.co/image/ab67616d0000b273d3306822157785b974c8fe6a', spotify: 'https://open.spotify.com/artist/02VcXC4eBTgsKLXT1JXlv9' },
  { name: 'Echo',             image: 'https://i.scdn.co/image/397489fba8899aa52cadb0f62662603f96065446', spotify: 'https://open.spotify.com/artist/0fgYKF9Avljex0L9Wt5b8Z' },
  { name: 'Gweilo',           image: 'https://i.scdn.co/image/ab6761610000e5eb695f8f23744992ccdee4d62e', spotify: 'https://open.spotify.com/artist/3qZOJWrQNCsxmrYq2471mW' },
  { name: 'Hermetik',         image: 'https://i.scdn.co/image/ab6761610000e5ebe3e19b8256fd635023cc290c', spotify: 'https://open.spotify.com/artist/1FmEmDwLdGuCpU94S8dh2L' },
  { name: 'K-One Musik',      image: 'https://i.scdn.co/image/ab67616d0000b2734fbfdec44b3eeae36b61d59e', spotify: 'https://open.spotify.com/artist/0mhgEySJPV19dxyPVEvp4h' },
  { name: 'Kalish',           image: 'https://i.scdn.co/image/ab6761610000e5eb59fdd76ca2d8568569b62cb4', spotify: 'https://open.spotify.com/artist/65doqcAdxEtQefS8ta3fQK' },
  { name: 'Kipper G',         image: 'https://i.scdn.co/image/ab6761610000e5ebc6228fa1e87ff849c0bf6ff2', spotify: 'https://open.spotify.com/artist/30MAdYnUYz3OkkoBQbdN1s' },
  { name: 'Konekt',           image: 'https://i.scdn.co/image/ab67616d0000b273e54dfa22bc76371351f0a31a', spotify: 'https://open.spotify.com/artist/2PPi1gPolYz1Qe8PeHlxPN' },
  { name: 'Mad Robot Society',image: 'https://i.scdn.co/image/ab67616d0000b27367221406923970ec42e52069', spotify: 'https://open.spotify.com/artist/3Vu9TpZf0U7WSc8aJvRnpc' },
  { name: 'Metro Subway',     image: 'https://i.scdn.co/image/ab6761610000e5eb013a89b560a1e648fc2b23c5', spotify: 'https://open.spotify.com/artist/5DbLOniq4OMyGOx1fkaxGq' },
  { name: 'Michael Jay',      image: 'https://i.scdn.co/image/ab6761610000e5ebe521ff14c6625f1585533e47', spotify: 'https://open.spotify.com/artist/3ykeXEythIVIQBmJEwHsVY' },
  { name: 'RIVT',             image: 'https://i.scdn.co/image/ab6761610000e5ebbb4baece051963c7625826b0', spotify: 'https://open.spotify.com/artist/3UseytaGTLuvLYcfhcWsb2' },
  { name: 'SevenEver',        image: 'https://i.scdn.co/image/ab6761610000e5eb214c85a3b6b9e4b7800d0c71', spotify: 'https://open.spotify.com/artist/4Y6akvUaVTWw81IWcBNyDl' },
  { name: 'Tonye',            image: 'https://i.scdn.co/image/ab6761610000e5ebe9b2e13d7e665f379e24d702', spotify: 'https://open.spotify.com/artist/3ldrOz3iIpQYYLQLVUG3K1' },
  { name: 'Tristex (BR)',     image: 'https://i.scdn.co/image/ab67616d0000b273402114e116a874a963a1a6c9', spotify: 'https://open.spotify.com/artist/15vlJucJmUUOGUPn8Iw6xU' },
  { name: 'UFO Dance',        image: 'https://i.scdn.co/image/ab6761610000e5ebb20b7758db670a54d48b2758', spotify: 'https://open.spotify.com/artist/36ePFYwQswdkVITCVaiKj7' },
];

function ArtistBubble({ name, image, spotify, featured = false, delay = 0, inView = false }: {
  name: string; image: string; spotify: string; featured?: boolean; delay?: number; inView?: boolean;
}) {
  return (
    <a
      href={spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-2.5 group cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.92)',
        transition: 'opacity 0.55s ease, transform 0.55s ease',
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Avatar ring */}
      <div
        className="relative flex-shrink-0"
        style={{
          width: featured ? '88px' : '72px',
          height: featured ? '88px' : '72px',
        }}
      >
        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: featured
              ? 'radial-gradient(circle, rgba(245,200,66,0.35) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(34,197,94,0.30) 0%, transparent 70%)',
            transform: 'scale(1.25)',
          }}
        />
        {/* Border */}
        <div
          className="absolute inset-0 rounded-full transition-all duration-300"
          style={{
            border: featured ? '2px solid rgba(245,200,66,0.55)' : '2px solid rgba(34,197,94,0.25)',
            boxShadow: featured
              ? '0 0 16px rgba(245,200,66,0.20)'
              : '0 0 10px rgba(34,197,94,0.10)',
          }}
        />
        {/* Photo */}
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover"
          style={{ filter: featured ? 'none' : 'brightness(0.88)' }}
          onError={e => {
            (e.currentTarget as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=182B18&color=22C55E&size=88`;
          }}
        />
        {/* Spotify icon on hover */}
        <div className="absolute inset-0 rounded-full flex items-center justify-center bg-[#060A06]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 backdrop-blur-[2px]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#1DB954">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.52-.972c3.632-1.102 8.147-.568 11.233 1.328a.78.78 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 11-.543-1.792c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 01-.955 1.61z"/>
          </svg>
        </div>
      </div>

      {/* Name */}
      <span
        className="text-center leading-tight transition-colors duration-200 group-hover:text-[#F0EDE6]"
        style={{
          fontSize: featured ? '13px' : '11px',
          fontWeight: featured ? 600 : 500,
          color: featured ? 'rgba(240,237,230,0.85)' : 'rgba(240,237,230,0.50)',
          maxWidth: featured ? '88px' : '72px',
        }}
      >
        {name}
      </span>
    </a>
  );
}

export default function ArtistsSection() {
  const { ref, inView } = useInView({ threshold: 0.08 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(34,197,94,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container relative z-10">

        {/* Label */}
        <div
          className="mb-6 flex items-center justify-center gap-3"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease' }}
        >
          <div className="h-px w-8 bg-[#22C55E]/40" />
          <span className="text-[10px] font-black uppercase tracking-[3px] text-[#22C55E]">
            Artists who participated
          </span>
          <div className="h-px w-8 bg-[#22C55E]/40" />
        </div>

        {/* Subtitle */}
        <p
          className="text-center text-[#728A72] text-sm mb-12"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease', transitionDelay: '80ms' }}
        >
          29 artists across previous VA campaigns — this is the squad that made it happen.
        </p>

        {/* Featured row */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10">
          {featured.map((a, i) => (
            <ArtistBubble key={a.name} {...a} featured delay={100 + i * 60} inView={inView} />
          ))}
        </div>

        {/* Divider */}
        <div
          className="mx-auto mb-10 h-px max-w-[400px]"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.20), transparent)',
            opacity: inView ? 1 : 0,
            transition: 'opacity 0.5s ease',
            transitionDelay: '500ms',
          }}
        />

        {/* Rest of artists */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-7">
          {others.map((a, i) => (
            <ArtistBubble key={a.name} {...a} delay={520 + i * 40} inView={inView} />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-12 text-center text-xs text-[#728A72]/60"
          style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.5s ease', transitionDelay: '900ms' }}
        >
          Will your name be here after World Cup 2026?
        </p>

      </div>
    </section>
  );
}
