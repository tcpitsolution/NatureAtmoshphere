import { useState } from 'react'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Button from '../components/ui/Button.jsx'

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--color-line)',
  padding: '14px 4px',
  fontFamily: 'var(--font-body)',
  fontSize: 14.5,
  color: 'var(--color-charcoal)',
  outline: 'none',
}

const labelStyle = {
  display: 'block',
  fontSize: 11.5,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--color-smoke)',
  marginBottom: 10,
}

const categories = [
  'Handmade Incense',
  'Essential Oils',
  'Aroma Oils',
  'Gemstones & Crystals',
  'Silver Jewellery',
  'Bronze Statues',
  'Singing Bowls',
  'Rudraksha',
  'Banarasi Silk Sarees',
  'Silk Shawls & Scarves',
  'Handicrafts',
  'Minerals',
  'Spices',
  'Spiritual & Meditation Products',
]

export default function Inquiry() {
  const [form, setForm] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    category: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // NOTE: Wire this up to your email/WhatsApp API endpoint.
    // The client requires every inquiry to reach both WhatsApp and Email.
    setSubmitted(true)
  }

  return (
    <>
      <section className="section" style={{ background: 'var(--color-charcoal)' }}>
        <SectionHeading light eyebrow="Get in Touch" title="Send Us an Inquiry" subtitle="Tell us what you're looking for and our team will respond on WhatsApp and Email." />
      </section>

      <section className="section container" style={{ maxWidth: 720 }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div className="accent-script" style={{ fontSize: 24, color: 'var(--color-gold)' }}>
              Thank you.
            </div>
            <p style={{ marginTop: 16, color: 'var(--color-smoke)' }}>
              Your inquiry has been received. We'll reach out on WhatsApp or Email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 32 }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input style={inputStyle} type="text" name="name" required value={form.name} onChange={handleChange} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
              <div>
                <label style={labelStyle}>Country</label>
                <input style={inputStyle} type="text" name="country" required value={form.country} onChange={handleChange} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input style={inputStyle} type="tel" name="phone" required value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input style={inputStyle} type="email" name="email" required value={form.email} onChange={handleChange} />
            </div>
            <div>
              <label style={labelStyle}>Product Category</label>
              <select style={inputStyle} name="category" required value={form.category} onChange={handleChange}>
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea style={{ ...inputStyle, resize: 'vertical' }} name="message" rows={4} required value={form.message} onChange={handleChange} />
            </div>
            <div>
              <Button type="submit" variant="outline-dark">Submit Inquiry</Button>
            </div>
          </form>
        )}
      </section>
    </>
  )
}
