import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/inquiry', label: 'Inquiry' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(33,29,27,0.92)',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px' }}
      >
        <NavLink to="/" style={{ display: 'flex', flexDirection: 'column', color: 'var(--color-ivory)' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.08em' }}>
            NATURE <span style={{ color: 'var(--color-gold-light)' }}>ATMOSPHERE</span>
          </span>
          <span
            className="accent-script"
            style={{ fontSize: 12, color: 'var(--color-smoke)', marginTop: 4 }}
          >
            A Unit of Rajmani Devi
          </span>
        </NavLink>

        <nav className="nav-links-desktop" style={{ display: 'flex', gap: 44 }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontSize: 12.5,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--color-gold-light)' : 'var(--color-ivory-dim)',
              })}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/inquiry" className="btn btn-ghost" style={{ display: 'none' }} id="nav-cta">
          Enquire Now
        </NavLink>

        <button
          onClick={() => setOpen(!open)}
          className="menu-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--color-ivory)',
            fontSize: 22,
          }}
        >
          &#9776;
        </button>
      </div>

      {open && (
        <div style={{ padding: '0 32px 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{ color: 'var(--color-ivory-dim)', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase' }}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
