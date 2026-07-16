export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="section-head">
      <div className="eyebrow center">{eyebrow}</div>
      <h2 style={light ? { color: 'var(--color-ivory)' } : undefined}>{title}</h2>
      {subtitle && (
        <p style={light ? { color: 'var(--color-ivory-dim)' } : undefined}>{subtitle}</p>
      )}
    </div>
  )
}
