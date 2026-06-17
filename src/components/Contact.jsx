import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

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
            <div className="map-placeholder">
              <div className="map-inner">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <p>Hirondini Park</p>
                <span>Oragadam Industrial Corridor<br />Chennai, Tamil Nadu — 602 105</span>
                <div className="map-nearby">
                  <p className="map-nearby-title">Nearby Corporates</p>
                  <div className="map-nearby-tags">
                    <span>Renault-Nissan</span>
                    <span>Daimler India</span>
                    <span>Yamaha</span>
                    <span>Royal Enfield</span>
                    <span>Schwing Stetter</span>
                    <span>SIPCOT</span>
                  </div>
                </div>
                <a
                  href="https://maps.app.goo.gl/Ph5QfHFsaHPzfzqd6"
                  target="_blank"
                  rel="noreferrer"
                  className="map-link"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
