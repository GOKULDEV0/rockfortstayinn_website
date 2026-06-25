import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const INIT_FORM = { name: '', email: '', phone: '', room: '', checkin: '', checkout: '', message: '' }

function Contact() {
  const ref     = useRef(null)
  const formRef = useRef(null)
  const inView  = useInView(ref, { once: true })

  const [form, setForm]     = useState(INIT_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY })
      setStatus('success')
      setForm(INIT_FORM)
    } catch {
      setStatus('error')
    }
  }

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
        </svg>
      ),
      label: 'Call / WhatsApp',
      value: '+91 82207 57067',
      href: 'tel:+918220757067',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      ),
      label: 'Email Us',
      value: 'karthik@rockfortstayinn.com',
      href: 'mailto:karthik@rockfortstayinn.com',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Address',
      value: 'Hirondini Park, Oragadam Industrial Corridor, Chennai — 602 105',
      href: 'https://maps.app.goo.gl/Ph5QfHFsaHPzfzqd6',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: 'Availability',
      value: 'Open 24/7 · Managed directly by the owner',
      href: null,
    },
  ]

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's Plan Your Stay</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Reach out directly to our owner for the fastest response. We handle all bookings personally — no middlemen, no hidden charges.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {contactItems.map(item => (
              item.href ? (
                <a key={item.label} href={item.href} className="contact-item"
                   target={item.href.startsWith('http') ? '_blank' : undefined}
                   rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </a>
              ) : (
                <div key={item.label} className="contact-item no-link">
                  <div className="contact-icon">{item.icon}</div>
                  <div className="contact-details">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              )
            ))}

            <a
              href="https://wa.me/918220757067?text=Hi, I'd like to book a stay at Rockfort Stay Inn, Oragadam"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp — Fastest Response
            </a>
          </motion.div>

          <motion.div
            className="contact-map"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="map-embed-wrapper">
              <iframe
                src="https://maps.google.com/maps?q=12.8151983,79.9588173&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '420px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rockfort Stay Inn Location — Hirondini Park, Oragadam, Chennai"
              />
              <a
                href="https://maps.app.goo.gl/3ZwD6k71SqtC5XeRA"
                target="_blank"
                rel="noreferrer"
                className="map-open-link"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Enquiry Form ── */}
        <motion.div
          className="enquiry-form-wrap"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="enquiry-form-header">
            <span className="section-label">Send an Enquiry</span>
            <h3 className="enquiry-form-title">Book Your Stay</h3>
            <p className="enquiry-form-sub">Fill the form below and we'll get back to you within a few hours.</p>
          </div>

          {status === 'success' ? (
            <div className="form-success">
              <span className="form-success-icon">✓</span>
              <h4>Enquiry Sent Successfully!</h4>
              <p>Thank you! We've received your enquiry and will contact you shortly at the number or email you provided.</p>
              <button className="btn-gold" onClick={() => setStatus('idle')}>Send Another Enquiry</button>
            </div>
          ) : (
            <form ref={formRef} className="enquiry-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" type="text"
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone / WhatsApp *</label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone} onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email" name="email" type="email"
                    placeholder="your@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="room">Room Preference</label>
                  <select id="room" name="room" value={form.room} onChange={handleChange}>
                    <option value="">Select a room type</option>
                    <option value="Executive Room (1 Bedroom)">Executive Room — 1 Bedroom</option>
                    <option value="Deluxe Suite (2 Bedrooms)">Deluxe Suite — 2 Bedrooms</option>
                    <option value="Grand Residence (Full Apartment)">Grand Residence — Full Apartment</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="checkin">Check-in Date</label>
                  <input
                    id="checkin" name="checkin" type="date"
                    value={form.checkin} onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout">Check-out Date</label>
                  <input
                    id="checkout" name="checkout" type="date"
                    value={form.checkout} onChange={handleChange}
                    min={form.checkin || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="form-group form-group-full">
                <label htmlFor="message">Message / Special Requests</label>
                <textarea
                  id="message" name="message" rows={4}
                  placeholder="Any special requirements, questions, or additional details..."
                  value={form.message} onChange={handleChange}
                />
              </div>

              {status === 'error' && (
                <p className="form-error">Something went wrong. Please try WhatsApp or call us directly.</p>
              )}

              <button
                type="submit"
                className="form-submit-btn btn-gold"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <><span className="form-spinner" /> Sending…</>
                ) : (
                  'Send Enquiry →'
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
