import { NavLink } from 'react-router-dom'
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer-root" style={{ background: 'var(--color-charcoal-soft)', color: 'var(--color-ivory-dim)', padding: '90px 32px 30px' }}>
      <div
        className="container footer-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: 60,
        }}
      >
        <div>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: 'var(--color-ivory)' }}>
              NATURE <span style={{ color: 'var(--color-gold-light)' }}>ATMOSPHERE</span>
            </div>
            <div className="accent-script" style={{ fontSize: 12, color: 'var(--color-smoke)', marginTop: 4 }}>
              A Unit of Rajmani Devi
            </div>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.8, color: 'var(--color-smoke)' }}>
            Premium wellness and handicraft store based in Varanasi, India — handmade incense,
            essential oils, gemstones, silver jewellery, bronze statues and more, delivered worldwide.
          </p>
          <div style={{ display: 'flex', gap: 14, marginTop: 20 }}>
            {[
              { icon: <FaWhatsapp size={18} />, href: 'https://wa.me/919336812007' },
              { icon: <FaFacebookF size={16} />, href: 'https://facebook.com' },
              { icon: <FaInstagram size={17} />, href: 'https://instagram.com' },
            ].map(({ icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                style={{
                  width: 36, height: 36,
                  borderRadius: '50%',
                  border: '1px solid rgba(176,141,63,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--color-gold-light)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(176,141,63,0.15)'; e.currentTarget.style.borderColor = 'var(--color-gold)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(176,141,63,0.4)'; }}
              >{icon}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 22, fontWeight: 400 }}>
            Explore
          </h4>
          <NavLink to="/" style={{ display: 'block', fontSize: 13.5, marginBottom: 12 }}>Home</NavLink>
          <NavLink to="/about" style={{ display: 'block', fontSize: 13.5, marginBottom: 12 }}>About Us</NavLink>
          <NavLink to="/inquiry" style={{ display: 'block', fontSize: 13.5, marginBottom: 12 }}>Inquiry</NavLink>
          <NavLink to="/contact" style={{ display: 'block', fontSize: 13.5, marginBottom: 12 }}>Contact Us</NavLink>
        </div>

        <div>
          <h4 style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 22, fontWeight: 400 }}>
            Contact
          </h4>
          <div style={{ fontSize: 13.5, marginBottom: 12 }}>+91 93368 12007</div>
          <div style={{ fontSize: 13.5, marginBottom: 12 }}>+91 94156 18386</div>
          <div style={{ fontSize: 13.5, marginBottom: 12 }}>natureatmospheree@gmail.com</div>
        </div>

        <div>
          <h4 style={{ fontSize: 11.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: 22, fontWeight: 400 }}>
            Visit Us
          </h4>
          <div style={{ fontSize: 13.5, marginBottom: 12 }}>
            D. 17/15, Bhuteshwar Gali,<br />
            Dashaswamedh, Bangali Tola,<br />
            Varanasi, Uttar Pradesh 221001
          </div>
          <div style={{ fontSize: 13.5 }}>Open Daily · 24 Hours</div>
        </div>
      </div>

      <div
        className="container"
        style={{
          marginTop: 70,
          paddingTop: 26,
          borderTop: '1px solid rgba(176,141,63,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          fontSize: 11.5,
          color: 'var(--color-smoke)',
          letterSpacing: '0.05em',
        }}
      >
        <div>© {new Date().getFullYear()} Nature Atmosphere. All rights reserved.</div>
        <div>Powered by TCP IT Solution.</div>
      </div>
    </footer>
  )
}
