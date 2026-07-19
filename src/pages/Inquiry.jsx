import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import inquiryBg from "../assets/video/video.mp4";
import { sendAdminMail, sendUserMail } from "../utils/sendMail.js";

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--color-line)",
  padding: "14px 4px",
  fontFamily: "var(--font-body)",
  fontSize: 14.5,
  color: "var(--color-charcoal)",
  outline: "none",
};

const labelStyle = {
  display: "block",
  fontSize: 11.5,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--color-smoke)",
  marginBottom: 10,
};

const categories = [
  "Handmade Incense",
  "Essential Oils",
  "Aroma Oils",
  "Gemstones & Crystals",
  "Silver Jewellery",
  "Bronze Statues",
  "Singing Bowls",
  "Rudraksha",
  "Banarasi Silk Sarees",
  "Silk Shawls & Scarves",
  "Handicrafts",
  "Minerals",
  "Spices",
  "Spiritual & Meditation Products",
];

export default function Inquiry() {
  const [form, setForm] = useState({
    name: "",
    country: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");

    const details =
      `Country: ${form.country}\n` +
      `Category: ${form.category}\n` +
      `Message: ${form.message}`;

    try {
      await Promise.all([
        sendAdminMail({
          formType: "Inquiry",
          name: form.name,
          email: form.email,
          phone: form.phone,
          details,
        }),
        sendUserMail({
          pageName: "Inquiry Form",
          name: form.name,
          email: form.email,
          details,
        }),
      ]);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Kuch gadbad ho gayi, dobara try karein.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "46vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          color: "var(--color-ivory)",
          background: "var(--color-charcoal)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={inquiryBg} type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(33,29,27,0.92) 20%, rgba(33,29,27,0.6) 60%, rgba(110,20,35,0.4) 100%)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <SectionHeading
            light
            eyebrow="Get in Touch"
            title="Send Us an Inquiry"
            subtitle="Tell us what you're looking for and our team will respond on WhatsApp and Email."
          />
        </div>
      </section>

      <section className="section container" style={{ maxWidth: 720 }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <div
              className="accent-script"
              style={{ fontSize: 24, color: "var(--color-gold)" }}
            >
              Thank you.
            </div>
            <p style={{ marginTop: 16, color: "var(--color-smoke)" }}>
              Your inquiry has been received. We'll reach out on WhatsApp or
              Email shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 32 }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                style={inputStyle}
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div
              className="inquiry-row"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 32,
              }}
            >
              <div>
                <label style={labelStyle}>Country</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="country"
                  required
                  value={form.country}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input
                  style={inputStyle}
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                style={inputStyle}
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label style={labelStyle}>Product Category</label>
              <select
                style={inputStyle}
                name="category"
                required
                value={form.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                style={{ ...inputStyle, resize: "vertical" }}
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>
            {error && <p style={{ color: "crimson" }}>{error}</p>}
            <div style={{ textAlign: "center" }}>
              <Button type="submit" variant="outline-dark" disabled={sending}>
                {sending ? "Sending..." : "Submit Inquiry"}
              </Button>
            </div>
          </form>
        )}
      </section>
    </>
  );
}
