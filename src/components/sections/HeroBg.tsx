/**
 * Two-layer scroll reveal:
 * - Back layer  (sticky, cream): "começo" stays put, revealed as front layer scrolls away
 * - Front layer (absolute, dark): arches + gradient + "Construir é só o" — slides up and off
 *
 * The 200vh outer container gives exactly 1 viewport-height of "scroll travel" to the
 * dark front layer before it fully exits, matching the sticky back layer's lock range.
 */
export default function HeroBg() {
  return (
    <div style={{ position: 'relative', height: '200vh' }}>

      {/* ── BACK LAYER: cream "começo" — sticky, stays centred while dark layer scrolls away ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: '#FCFBF8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(80px, 16vw, 220px)',
            fontWeight: 700,
            color: '#1C1C1C',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            margin: 0,
            userSelect: 'none',
          }}
        >
          começo
        </h2>
      </div>

      {/* ── FRONT LAYER: dark overlay — arch shapes + gradient + text. Scrolls off top. ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 10,
          overflow: 'hidden',
          background: '#1B1B1B',
        }}
      >
        {/* Colorful radial glow — fills lower 70% */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '72%',
            background:
              'radial-gradient(ellipse 105% 90% at 50% 72%, #c084fc 0%, #818cf8 18%, #60a5fa 34%, #f472b6 62%, #fb923c 82%, transparent 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
            background:
              'radial-gradient(ellipse 65% 55% at 26% 75%, #a78bfa 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 74% 60%, #fb7185 0%, transparent 55%)',
            opacity: 0.65,
          }}
        />

        {/* Left arch */}
        <div
          style={{
            position: 'absolute', left: '8%', bottom: '-4%',
            width: '34%', height: '72%',
            background: '#1B1B1B',
            borderRadius: '50% 50% 36% 36% / 58% 58% 28% 28%',
          }}
        />
        {/* Center arch — tallest */}
        <div
          style={{
            position: 'absolute', left: '50%', transform: 'translateX(-50%)', bottom: '-4%',
            width: '40%', height: '82%',
            background: '#1B1B1B',
            borderRadius: '50% 50% 38% 38% / 58% 58% 30% 30%',
          }}
        />
        {/* Right arch */}
        <div
          style={{
            position: 'absolute', right: '8%', bottom: '-4%',
            width: '34%', height: '72%',
            background: '#1B1B1B',
            borderRadius: '50% 50% 36% 36% / 58% 58% 28% 28%',
          }}
        />

        {/* "Construir é só o" — inside the center arch near the bottom */}
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            paddingBottom: '18%',
            zIndex: 20,
          }}
        >
          <p
            style={{
              color: 'white',
              fontWeight: 700,
              fontSize: 'clamp(22px, 3.2vw, 48px)',
              lineHeight: 1.1,
              textAlign: 'center',
              position: 'relative',
              zIndex: 20,
            }}
          >
            Construir é só o
          </p>
        </div>
      </div>

    </div>
  );
}
