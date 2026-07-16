export default function WhyCard({ label, title, text }) {
  return (
    <div
      style={{
        background: 'var(--color-ivory)',
        padding: '48px 34px',
        textAlign: 'left',
        border: '1px solid var(--color-line)',
      }}
    >
      <div className="accent-script" style={{ color: 'var(--color-gold)', fontSize: 15 }}>
        {label}
      </div>
      <h3 style={{ fontSize: 19, marginTop: 16, fontWeight: 400 }}>{title}</h3>
      <p style={{ marginTop: 12, fontSize: 13.5, color: 'var(--color-smoke)', lineHeight: 1.7 }}>
        {text}
      </p>
    </div>
  )
}
