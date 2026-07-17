import Button from '../components/ui/Button.jsx'
import bgImage from '../assets/images/baground.jpeg'
import imgPeacockDiya from '../assets/images/Peacock Diya with Bells.png'
import imgHangingDiya from '../assets/images/raditional Hanging Diya with Bells.png'
import imgRudrakshaMala from '../assets/images/hiva Rudraksha Mala.png'
import imgSilverChain from '../assets/images/Silver Box Chain Necklace.png'
import imgSilverKada from '../assets/images/Silver Gemstone Kada.png'
import imgBeadMala from '../assets/images/Silver Bead Mala.png'
import imgRudrakshaSilver from '../assets/images/Rudraksha & Silver Bead Necklace.png'
import imgBrassBell from '../assets/images/Antique Brass Hand Bell.png'
import imgShowroom from '../assets/images/showroom.jpeg'
import React from 'react'
import Divider from '../components/ui/Divider.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import WhyCard from '../components/ui/WhyCard.jsx'
import CategoryCard from '../components/ui/CategoryCard.jsx'
import PayChip from '../components/ui/PayChip.jsx'
import useInView from '../hooks/useInView.js'

const categories = [
  { tag: "Mor Design Hanging Diya", title: "Peacock Diya with Bells", image: imgPeacockDiya },
  { tag: "Wall Hanging Oil Lamp", title: "Traditional Hanging Diya with Bells", image: imgHangingDiya },
  { tag: "Certified Rudraksha Japa Mala", title: "Shiva Rudraksha Mala", image: imgRudrakshaMala },
  { tag: "Sterling Silver Chain", title: "Silver Box Chain Necklace", image: imgSilverChain },
  { tag: "Stone Studded Silver Kada", title: "Silver Gemstone Kada / Bracelet", image: imgSilverKada },
  { tag: "Silver Prayer Necklace", title: "Silver Bead Mala / Necklace", image: imgBeadMala },
  { tag: "Rudraksha Silver Mala", title: "Rudraksha & Silver Bead Necklace", image: imgRudrakshaSilver },
  { tag: "Temple Prayer Bell / Ghanti with Elephant Design", title: "Antique Brass Hand Bell", image: imgBrassBell },
]

const paymentMethods = ['Visa', 'Mastercard', 'Amex', 'JCB', 'RuPay', 'UPI', 'Net Banking', 'Debit / Credit Cards', 'Cash']

const delays = ['anim-d1','anim-d2','anim-d3','anim-d4','anim-d5','anim-d6','anim-d7','anim-d8']

export default function Home() {
  const [introRef, introInView]       = useInView()
  const [whyRef, whyInView]           = useInView()
  const [catRef, catInView]           = useInView()
  const [aboutImgRef, aboutImgInView] = useInView()
  const [aboutTxtRef, aboutTxtInView] = useInView()
  const [payRef, payInView]           = useInView()
  const [ctaRef, ctaInView]           = useInView()

  return (
    <>
      {/* HERO */}
      <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center', color: 'var(--color-ivory)', overflow: 'hidden' }}>
        <img
          src={bgImage}
          alt="Nature Atmosphere showroom, Varanasi"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'saturate(0.9) brightness(0.55)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(33,29,27,0.94) 12%, rgba(33,29,27,0.55) 48%, rgba(110,20,35,0.35) 100%)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow anim-fade-up anim-d1" style={{ animationFillMode: 'both' }}>Varanasi, India · Est. Handicraft &amp; Wellness House</div>
          <h1 className="anim-fade-up anim-d2" style={{ fontSize: 'clamp(40px,6vw,76px)', maxWidth: '14ch', lineHeight: 1.08, color: 'var(--color-ivory)', marginTop: 26, animationFillMode: 'both' }}>
            Discover Nature.<br />
            <em className="accent-script" style={{ color: 'var(--color-gold-light)' }}>Experience</em> Wellness.
          </h1>
          <p className="anim-fade-up anim-d3" style={{ marginTop: 26, maxWidth: '44ch', fontSize: 16.5, lineHeight: 1.75, color: 'var(--color-ivory-dim)', animationFillMode: 'both' }}>
            Authentic handmade incense, essential oils, gemstones, silver jewellery, bronze statues
            and Banarasi silk — handcrafted in the heart of Varanasi and shipped to the world.
          </p>
          <div className="anim-fade-up anim-d4 hero-btns" style={{ display: 'flex', gap: 20, marginTop: 44, flexWrap: 'wrap', animationFillMode: 'both' }}>
            <Button variant="primary" href="#categories">Explore Collection</Button>
            <Button variant="ghost" href="/inquiry">Make an Inquiry</Button>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <div
        ref={introRef}
        className="intro-strip"
        style={{ background: 'var(--color-charcoal)', color: 'var(--color-ivory)', padding: '70px 32px', textAlign: 'center' }}
      >
        <div className={`accent-script anim-hidden ${introInView ? 'anim-fade-up anim-d1' : ''}`} style={{ fontSize: 22, color: 'var(--color-gold-light)', animationFillMode: 'both' }}>
          "Bringing the finest handcrafted &amp; natural products from Varanasi to the world."
        </div>
        <p className={`anim-hidden ${introInView ? 'anim-fade-up anim-d2' : ''}`} style={{ maxWidth: '60ch', margin: '18px auto 0', color: 'var(--color-ivory-dim)', fontSize: 14.5, animationFillMode: 'both' }}>
          NATURE ATMOSPHERE &nbsp;·&nbsp; RAJMANI DEVI &nbsp;·&nbsp; VARANASI, UTTAR PRADESH &nbsp;·&nbsp; TRUSTED INTERNATIONALLY
        </p>
      </div>

      {/* WHY CHOOSE US */}
      <section className="section">
        <SectionHeading eyebrow="Why Choose Us" title={<>Crafted with intention,<br />trusted across the world</>} />
        <div
          ref={whyRef}
          className="container why-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--color-line)', border: '1px solid var(--color-line)' }}
        >
          {[
            { label: "Authentic", title: "Genuine Indian Craft", text: "Every piece is sourced and handmade using traditional techniques passed through generations." },
            { label: "Premium",   title: "Handmade Quality",    text: "Carefully selected materials — from pure oils to fine silver — with no shortcuts taken." },
            { label: "Global",    title: "Worldwide Shipping",  text: "Trusted by customers across India and internationally, with secure delivery to your door." },
            { label: "Secure",    title: "Safe Online Payment", text: "Multiple trusted payment options and encrypted checkout for complete peace of mind." },
          ].map((w, i) => (
            <div key={w.label} className={`anim-hidden ${whyInView ? `anim-fade-up ${delays[i]}` : ''}`} style={{ animationFillMode: 'both' }}>
              <WhyCard label={w.label} title={w.title} text={w.text} />
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* PRODUCT CATEGORIES */}
      <section className="section" id="categories" style={{ background: 'var(--color-ivory-dim)' }}>
        <SectionHeading
          eyebrow="Our Collections"
          title="Product Categories"
          subtitle="From sacred incense to fine Banarasi silk — each collection carries the craft of Varanasi."
        />
        <div
          ref={catRef}
          className="container cat-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 26 }}
        >
          {categories.map((c, i) => (
            <div key={c.title} className={`anim-hidden ${catInView ? `anim-scale-in ${delays[i]}` : ''}`} style={{ animationFillMode: 'both' }}>
              <CategoryCard tag={c.tag} title={c.title} image={c.image} />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="container section about-snippet" style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', gap: 80, alignItems: 'center' }}>
        <div ref={aboutImgRef} className={`anim-hidden ${aboutImgInView ? 'anim-fade-up anim-d1' : ''}`} style={{ position: 'relative', animationFillMode: 'both' }}>
          <img src={imgShowroom} alt="Inside the Nature Atmosphere showroom" className="about-snippet-img" style={{ width: '100%', height: 480, objectFit: 'cover' }} />
        </div>
        <div ref={aboutTxtRef} className={`anim-hidden ${aboutTxtInView ? 'anim-fade-up anim-d2' : ''}`} style={{ animationFillMode: 'both' }}>
          <div className="eyebrow">About Us</div>
          <h2 style={{ fontSize: 'clamp(28px,3.4vw,42px)', lineHeight: 1.2, marginTop: 18 }}>
            Preserving India's craft.<br />Sharing it with the world.
          </h2>
          <p style={{ marginTop: 24, color: 'var(--color-smoke)', fontSize: 15.5, lineHeight: 1.85 }}>
            Nature Atmosphere is dedicated to preserving India's traditional craftsmanship and natural
            heritage. Every product is carefully selected for authenticity, quality, and spiritual value.
          </p>
          <Button variant="outline-dark" href="/about">Read Our Story</Button>
        </div>
      </section>

      {/* TRUST / PAYMENTS */}
      <section className="section" style={{ background: 'var(--color-charcoal)', color: 'var(--color-ivory)', textAlign: 'center' }}>
        <SectionHeading light eyebrow="Secure Checkout" title="Shop with confidence" subtitle="We accept all major payment methods for a smooth experience, wherever you are." />
        <div
          ref={payRef}
          className="container"
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 14 }}
        >
          {paymentMethods.map((p, i) => (
            <div key={p} className={`anim-hidden ${payInView ? `anim-fade-up ${delays[Math.min(i, 7)]}` : ''}`} style={{ animationFillMode: 'both' }}>
              <PayChip label={p} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA BAND */}
      <section
        ref={ctaRef}
        style={{ background: 'var(--color-maroon)', color: 'var(--color-ivory)', textAlign: 'center', padding: '100px 32px' }}
      >
        <div className={`accent-script anim-hidden ${ctaInView ? 'anim-fade-up anim-d1' : ''}`} style={{ fontSize: 26, color: 'var(--color-gold-light)', animationFillMode: 'both' }}>
          Have a question about our products?
        </div>
        <h2 className={`anim-hidden ${ctaInView ? 'anim-fade-up anim-d2' : ''}`} style={{ fontSize: 'clamp(28px,3.6vw,44px)', marginTop: 16, color: 'var(--color-ivory)', animationFillMode: 'both' }}>Send Us an Inquiry</h2>
        <p className={`anim-hidden ${ctaInView ? 'anim-fade-up anim-d3' : ''}`} style={{ maxWidth: '50ch', margin: '20px auto 0', color: 'rgba(247,241,230,0.8)', animationFillMode: 'both' }}>
          Tell us what you're looking for — incense, silk, jewellery, or a custom order — and our team
          will respond on WhatsApp and Email.
        </p>
        <div className={`anim-hidden ${ctaInView ? 'anim-fade-up anim-d4' : ''}`} style={{ marginTop: 38, animationFillMode: 'both' }}>
          <Button variant="primary" href="/inquiry">Go to Inquiry Form</Button>
        </div>
      </section>
    </>
  )
}
