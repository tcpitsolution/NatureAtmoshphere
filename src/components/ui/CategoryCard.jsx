export default function CategoryCard({ tag, title, image }) {
  return (
    <div className="frame-card" style={{ aspectRatio: '3 / 3.6' }}>
      {image && (
        <img
          src={image}
          alt={title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />
      )}
      <div className="tint"></div>
      <div
        className="fill"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'repeating-linear-gradient(135deg, rgba(176,141,63,0.06) 0 2px, transparent 2px 14px)',
          zIndex: 1,
        }}
      ></div>
      <div className="frame"></div>
      <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, zIndex: 3 }}>
        <div className="accent-script" style={{ color: 'var(--color-gold-light)', fontSize: 13 }}>
          {tag}
        </div>
        <h3 style={{ color: 'var(--color-ivory)', fontSize: 20, marginTop: 8, fontWeight: 400 }}>
          {title}
        </h3>
      </div>
    </div>
  )
}
