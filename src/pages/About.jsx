import SectionHeading from "../components/ui/SectionHeading.jsx";
import Divider from "../components/ui/Divider.jsx";
import useInView from "../hooks/useInView.js";
import atmoshphere from "../assets/images/atmoshphere.jpeg";

const reviews = [
  {
    name: "Rishi Srivastava",
    time: "1 month ago",
    text: "Best place for oils, perfume, silver, gems and lots of special statues.",
  },
  {
    name: "Vicky Gupta",
    time: "1 month ago",
    text: "Good shop and very good price they give me.",
  },
  {
    name: "Francisco Gómez Baquedano",
    time: "1 month ago",
    text: "The best treat ever, with Krishna.",
  },
  {
    name: "Anjali Mehra",
    time: "2 months ago",
    text: "Quality wise this is a very genuine place — everything is first hand, highly recommend!",
  },
];

const delays = ["anim-d1", "anim-d2", "anim-d3", "anim-d4"];

function Star({ filled = true }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill={filled ? "var(--color-gold)" : "none"}
      stroke="var(--color-gold)"
      strokeWidth="1.2"
    >
      <polygon points="12 2 15.09 8.63 22 9.24 16.5 14.14 18.18 21 12 17.27 5.82 21 7.5 14.14 2 9.24 8.91 8.63 12 2" />
    </svg>
  );
}

export default function About() {
  const [heroRef, heroInView]       = useInView();
  const [intro1Ref, intro1InView]   = useInView();
  const [intro2Ref, intro2InView]   = useInView();
  const [ratingRef, ratingInView]   = useInView();
  const [cardsRef, cardsInView]     = useInView();
  const [ownerRef, ownerInView]     = useInView();

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "46vh",
          display: "flex",
          alignItems: "center",
          color: "var(--color-ivory)",
          background: "var(--color-charcoal)",
        }}
      >
        <img
          src={atmoshphere}
          alt="Nature Atmosphere showroom"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }} ref={heroRef}>
          <div className={`eyebrow anim-hidden ${heroInView ? "anim-fade-up anim-d1" : ""}`} style={{ animationFillMode: "both" }}>
            About Nature Atmosphere
          </div>
          <h1
            className={`anim-hidden ${heroInView ? "anim-fade-up anim-d2" : ""}`}
            style={{
              fontSize: "clamp(34px,5vw,58px)",
              color: "var(--color-ivory)",
              marginTop: 20,
              animationFillMode: "both",
            }}
          >
            Our Story
          </h1>
        </div>
      </section>

      <section
        className="section container"
        style={{ maxWidth: 780, textAlign: "center" }}
      >
        <p
          ref={intro1Ref}
          className={`anim-hidden ${intro1InView ? "anim-fade-up anim-d1" : ""}`}
          style={{ fontSize: 17, lineHeight: 1.9, color: "var(--color-smoke)", animationFillMode: "both" }}
        >
          Nature Atmosphere is a premium wellness and handicraft store based in
          Varanasi, India. We specialise in authentic handmade incense, pure
          essential oils, aroma oils, gemstones, crystals, silver jewellery,
          bronze statues, singing bowls, Rudraksha, Banarasi silk products,
          handicrafts, minerals, spices, and spiritual wellness products. We
          serve customers from India and across the world.
        </p>
        <div style={{ margin: "50px 0" }}>
          <Divider />
        </div>
        <p
          ref={intro2Ref}
          className={`anim-hidden ${intro2InView ? "anim-fade-up anim-d1" : ""}`}
          style={{ fontSize: 17, lineHeight: 1.9, color: "var(--color-smoke)", animationFillMode: "both" }}
        >
          Our mission is to bring the finest handcrafted and natural products
          from Varanasi to customers worldwide, preserving India's traditional
          craftsmanship and natural heritage in every piece we offer.
        </p>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section
        className="section"
        style={{ background: "var(--color-ivory-dim)" }}
      >
        <SectionHeading
          eyebrow="What Our Customers Say"
          title="Loved By Our Customers"
          subtitle="Real experiences from our customers in Varanasi and around the world."
        />

        <div
          ref={ratingRef}
          className={`container anim-hidden ${ratingInView ? "anim-fade-up anim-d1" : ""}`}
          style={{ textAlign: "center", marginBottom: 50, animationFillMode: "both" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 6,
              marginBottom: 10,
            }}
          >
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} />
            ))}
          </div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 26,
              color: "var(--color-charcoal)",
            }}
          >
            5.0
          </div>
          <div
            style={{
              fontSize: 13,
              color: "var(--color-smoke)",
              marginTop: 4,
              letterSpacing: "0.05em",
            }}
          >
            Based on 20 Google Reviews
          </div>
        </div>

        <div
          ref={cardsRef}
          className="container reviews-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 26,
          }}
        >
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className={`anim-hidden ${cardsInView ? `anim-scale-in ${delays[i]}` : ""}`}
              style={{
                background: "var(--color-ivory)",
                border: "1px solid var(--color-line)",
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
                animationFillMode: "both",
              }}
            >
              <div style={{ display: "flex", gap: 3 }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} />
                ))}
              </div>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.75,
                  color: "var(--color-charcoal)",
                  flex: 1,
                }}
              >
                "{r.text}"
              </p>
              <div>
                <div
                  style={{
                    fontSize: 13.5,
                    fontWeight: 500,
                    color: "var(--color-charcoal)",
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "var(--color-smoke)",
                    marginTop: 2,
                  }}
                >
                  {r.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--color-ivory-dim)" }}
      >
        <div
          ref={ownerRef}
          className={`anim-hidden ${ownerInView ? "anim-fade-up anim-d1" : ""}`}
          style={{ animationFillMode: "both" }}
        >
          <SectionHeading
            eyebrow="Meet the Owner"
            title="Krishna"
            subtitle="A Unit of Rajmani Devi, Varanasi"
          />
        </div>
      </section>
    </>
  );
}
