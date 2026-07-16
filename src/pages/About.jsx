import SectionHeading from '../components/ui/SectionHeading.jsx'
import Divider from '../components/ui/Divider.jsx'

export default function About() {
  return (
    <>
      <section
        style={{
          position: 'relative',
          minHeight: '46vh',
          display: 'flex',
          alignItems: 'center',
          color: 'var(--color-ivory)',
          background: 'var(--color-charcoal)',
        }}
      >
        <img
          src="/shop-photo.png"
          alt="Nature Atmosphere showroom"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow">About Nature Atmosphere</div>
          <h1 style={{ fontSize: 'clamp(34px,5vw,58px)', color: 'var(--color-ivory)', marginTop: 20 }}>
            Our Story
          </h1>
        </div>
      </section>

      <section className="section container" style={{ maxWidth: 780, textAlign: 'center' }}>
        <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-smoke)' }}>
          Nature Atmosphere is a premium wellness and handicraft store based in Varanasi, India. We
          specialise in authentic handmade incense, pure essential oils, aroma oils, gemstones,
          crystals, silver jewellery, bronze statues, singing bowls, Rudraksha, Banarasi silk
          products, handicrafts, minerals, spices, and spiritual wellness products. We serve
          customers from India and across the world.
        </p>
        <div style={{ margin: '50px 0' }}>
          <Divider />
        </div>
        <p style={{ fontSize: 17, lineHeight: 1.9, color: 'var(--color-smoke)' }}>
          Our mission is to bring the finest handcrafted and natural products from Varanasi to
          customers worldwide, preserving India's traditional craftsmanship and natural heritage in
          every piece we offer.
        </p>
      </section>

      <section className="section" style={{ background: 'var(--color-ivory-dim)' }}>
        <SectionHeading eyebrow="Meet the Owner" title="Krishna" subtitle="A Unit of Rajmani Devi, Varanasi" />
      </section>
    </>
  )
}
