export default function Button({ children, variant = 'primary', href, onClick, type = 'button' }) {
  const cls = `btn btn-${variant}`
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  )
}
