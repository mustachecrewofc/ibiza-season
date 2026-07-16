export default function HeroBg() {
  return (
    <div style={{ position: 'relative', height: '200vh' }}>
      {/* BACK LAYER */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          background: 'linear-gradient(135deg, #F7F3EB 0%, #EADCC8 100%)',
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
            fontWeight: 900,
            color: '#C96B4B',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            margin: 0,
            userSelect: 'none',
          }}
        >
          Let your<br/>sound play.
        </h2>
      </div>

      {/* FRONT LAYER */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100vh',
          zIndex: 10,
          overflow: 'hidden',
          background: '#0E223D',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(#D9B45B 1px, transparent 1px), linear-gradient(90deg, #D9B45B 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 20,
          }}
        >
          <p
            style={{
              color: '#F7F3EB',
              fontWeight: 800,
              fontSize: 'clamp(40px, 8vw, 110px)',
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              textAlign: 'center',
              margin: 0,
            }}
          >
            The world<br/>is watching.
          </p>
        </div>
      </div>
    </div>
  );
}
