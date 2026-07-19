import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Button from "../components/ui/Button.jsx";
import { sendAdminMail, sendUserMail } from "../utils/sendMail.js";

import bgImage from "../assets/images/baground.jpeg";

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
  color: "var(--color-charcoal)",
  marginBottom: 10,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
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

    const details = `Phone: ${form.phone}\n` + `Message: ${form.message}`;

    try {
      await Promise.all([
        sendAdminMail({
          formType: "Contact Us",
          name: form.name,
          email: form.email,
          phone: form.phone,
          details,
        }),
        sendUserMail({
          pageName: "Contact Us Form",
          name: form.name,
          email: form.email,
          details,
        }),
      ]);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong, please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section
        className="section"
        style={{
          position: "relative",
          background: "var(--color-charcoal)",
          overflow: "hidden",
        }}
      >
        <img
          src={bgImage}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.3,
          }}
        />
        <SectionHeading
          light
          eyebrow="Reach Us"
          title="Contact Us"
          subtitle="We're here to help — reach out on WhatsApp, Email, or visit our showroom in Varanasi."
        />
      </section>

      <section
        className="section container contact-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}
      >
        {/* Column 1: Map */}
        <div>
          <div
            className="contact-map"
            style={{
              minHeight: 380,
              border: "1px solid var(--color-line)",
            }}
          >
            <iframe
              title="Nature Atmosphere Showroom Location"
              src="https://www.google.com/maps?q=D.17/15,+Bhuteshwar+Gali,+Dashaswamedh,+Bangali+Tola,+Varanasi,+Uttar+Pradesh+221001&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 380, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Column 2: Form */}
        <div>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div
                className="accent-script"
                style={{ fontSize: 22, color: "var(--color-gold)" }}
              >
                Thank you.
              </div>
              <p style={{ marginTop: 12, color: "var(--color-smoke)" }}>
                Your message has been received. Our team will contact you shortly via WhatsApp or Email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 24 }}>
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
              <div>
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{ ...inputStyle, resize: "vertical" }}
                  name="message"
                  rows={3}
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              {error && <p style={{ color: "crimson" }}>{error}</p>}
              <div style={{ textAlign: "center" }}>
                <Button type="submit" variant="outline-dark" disabled={sending}>
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>

      <section
        className="section container"
        style={{
          borderTop: "1px solid var(--color-line)",
          paddingTop: 40,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          textAlign: "center",
        }}
      >
        <div>
          <div className="eyebrow">Speak To Us</div>
          <h2 style={{ marginTop: 18, fontSize: 28 }}>Krishna</h2>
          <p style={{ marginTop: 20, color: "var(--color-smoke)", lineHeight: 1.9 }}>
            +91 93368 12007<br />
            +91 94156 18386<br />
            natureatmospheree@gmail.com
          </p>
          <p style={{ marginTop: 16, color: "var(--color-smoke)" }}>
            Monday – Sunday · Open 24 Hours
          </p>
        </div>
        <div>
          <div className="eyebrow">Visit The Showroom</div>
          <p style={{ marginTop: 20, color: "var(--color-smoke)", lineHeight: 1.9 }}>
            D. 17/15, Bhuteshwar Gali,<br />
            Dashaswamedh, Bangali Tola,<br />
            Varanasi, Uttar Pradesh 221001
          </p>
        </div>
      </section>
    </>
  );
}
