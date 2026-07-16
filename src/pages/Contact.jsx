import SectionHeading from '../components/ui/SectionHeading.jsx'

export default function Contact() {
  return (
    <>
      <section className="section" style={{ background: 'var(--color-charcoal)' }}>
        <SectionHeading light eyebrow="Reach Us" title="Contact Us" subtitle="We're here to help — reach out on WhatsApp, Email, or visit our showroom in Varanasi." />
      </section>

      <section className="section container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
        <div>
          <div className="eyebrow">Speak To Us</div>
          <h2 style={{ marginTop: 18, fontSize: 28 }}>Krishna</h2>
          <p style={{ marginTop: 20, color: 'var(--color-smoke)', lineHeight: 1.9 }}>
            +91 93368 12007<br />
            +91 94156 18386<br />
            natureatmospheree@gmail.com
          </p>

          <div className="eyebrow" style={{ marginTop: 40 }}>Visit The Showroom</div>
          <p style={{ marginTop: 20, color: 'var(--color-smoke)', lineHeight: 1.9 }}>
            D. 17/15, Bhuteshwar Gali,<br />
            Dashaswamedh, Bangali Tola,<br />
            Varanasi, Uttar Pradesh 221001
          </p>

          <div className="eyebrow" style={{ marginTop: 40 }}>Hours</div>
          <p style={{ marginTop: 20, color: 'var(--color-smoke)' }}>Monday – Sunday · Open 24 Hours</p>
        </div>

        <div style={{ minHeight: 380, background: 'var(--color-ivory-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-line)' }}>
          {/* Replace with an embedded Google Map iframe using the client's Maps link */}
          <span style={{ color: 'var(--color-smoke)', fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Google Map Embed
          </span>
        </div>
      </section>
    </>
  )
}
