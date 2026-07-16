export default function PayChip({ label }) {
  return (
    <div
      style={{
        border: '1px solid var(--color-line)',
        color: 'var(--color-ivory-dim)',
        padding: '12px 22px',
        fontSize: 12,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
      }}
    >
      {label}
    </div>
  )
}
