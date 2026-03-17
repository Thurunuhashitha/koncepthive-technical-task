import { useState, useRef } from "react";

export default function Contact() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const validate = () => {
    const e = {};
    if (!fields.name.trim() || fields.name.trim().length < 2)
      e.name = "Please enter your full name (min 2 characters).";
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
      e.email = "Please enter a valid email address.";
    if (!fields.message.trim() || fields.message.trim().length < 10)
      e.message = "Message must be at least 10 characters.";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) { setErrors(v); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1400);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div>
            <p className="section-label reveal">Get In Touch</p>
            <h2 className="contact__heading reveal reveal-delay-1">
              Ready To <span className="accent-text">Start?</span>
            </h2>
            <p className="contact__body reveal reveal-delay-2">
              Fill in the form and one of our team will reach out within 24 hours.
              No pressure, no commitment — just a conversation about your goals.
            </p>

            <div className="contact__info-items">
              {[
                { icon: "📍", label: "Location", value: "45 Galle Road, Colombo 03, Sri Lanka" },
                { icon: "📞", label: "Phone", value: "+94 11 234 5678" },
                { icon: "✉️", label: "Email", value: "hello@fitnesssc.lk" },
                { icon: "🕐", label: "Hours", value: "Mon–Sun · 5:00 AM – 11:00 PM" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className={`contact__info-item reveal reveal-delay-${i + 2}`}
                >
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    <div className="contact__info-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <div className="contact-form">
              <div className={`form-success${submitted ? " show" : ""}`}>
                <div className="form-success__icon">✓</div>
                <div className="form-success__title">Message Sent!</div>
                <p className="form-success__text">
                  Thanks, {fields.name.split(" ")[0] || "champion"}! We'll be in touch within 24 hours.
                  Get ready to forge something great.
                </p>
              </div>

              {!submitted && (
                <form onSubmit={handleSubmit} noValidate ref={formRef}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      id="name" name="name" type="text"
                      className={`form-input${errors.name ? " error" : ""}`}
                      placeholder="e.g. Marcus Aurelius"
                      value={fields.name} onChange={handleChange} autoComplete="name"
                    />
                    <span className="form-error">{errors.name}</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      id="email" name="email" type="email"
                      className={`form-input${errors.email ? " error" : ""}`}
                      placeholder="you@example.com"
                      value={fields.email} onChange={handleChange} autoComplete="email"
                    />
                    <span className="form-error">{errors.email}</span>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Your Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message" name="message"
                      className={`form-textarea${errors.message ? " error" : ""}`}
                      placeholder="Tell us about your fitness goals, questions about membership, or anything else..."
                      value={fields.message} onChange={handleChange}
                    />
                    <span className="form-error">{errors.message}</span>
                  </div>

                  <button type="submit" className="btn-primary form-submit" disabled={loading}>
                    {loading ? "Sending…" : "Send Message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
