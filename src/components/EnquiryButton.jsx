import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const INIT = { name: '', phone: '', email: '', room: '', checkin: '', checkout: '', message: '' }

function EnquiryButton() {
  const [isOpen, setIsOpen]   = useState(false)
  const [form, setForm]       = useState(INIT)
  const [status, setStatus]   = useState('idle') // idle | sending | success | error
  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => {
      const next = { ...prev, [name]: value }
      if (name === 'checkin' && next.checkout && next.checkout < value) next.checkout = value
      return next
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) { setStatus('error'); return }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) { setStatus('error'); return }
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name:     form.name,
        phone:    form.phone,
        email:    form.email    || 'Not provided',
        room:     form.room     || 'Not specified',
        checkin:  form.checkin  || 'Not specified',
        checkout: form.checkout || 'Not specified',
        message:  form.message  || 'No special requests',
      }, { publicKey: PUBLIC_KEY })
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  function handleClose() {
    setIsOpen(false)
    // Reset form after close animation
    setTimeout(() => { setForm(INIT); setStatus('idle') }, 300)
  }

  return (
    <>
      {/* ── Floating Action Button ── */}
      <button className="enquiry-fab" onClick={() => setIsOpen(true)} aria-label="Open booking enquiry form">
        <svg viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="1.5"/>
          <polyline points="22,6 12,13 2,6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
        Enquire Now
      </button>

      {/* ── Modal Overlay ── */}
      {isOpen && (
        <div className="enquiry-overlay open" onClick={e => { if (e.target === e.currentTarget) handleClose() }}>
          <div className="enquiry-modal">

            {/* ── Sticky Header ── */}
            <div className="enquiry-modal-header">
              <div className="enquiry-modal-header-text">
                <span className="enquiry-modal-label">✦ Book Your Stay</span>
                <h3>Send Enquiry</h3>
              </div>
              <button className="enquiry-close" onClick={handleClose} aria-label="Close">✕</button>
            </div>

            {status === 'success' ? (
              <>
                <div className="enquiry-modal-body enquiry-success">
                  <div className="enquiry-success-icon">✓</div>
                  <h4>Enquiry Sent!</h4>
                  <p>Thank you! We've received your booking request and will contact you shortly.</p>
                  <p className="enquiry-urgent">For urgent booking: <strong>+91 82207 57067</strong></p>
                </div>
                <div className="enquiry-modal-footer">
                  <button className="enquiry-submit-btn" onClick={handleClose}>Close</button>
                </div>
              </>
            ) : (
              <form className="enquiry-form-container" onSubmit={handleSubmit} noValidate>
                <div className="enquiry-modal-body">

                  {/* Full Name */}
                  <div className="eq-form-group">
                    <label htmlFor="eq-name">Full Name *</label>
                    <input id="eq-name" name="name" type="text"
                      placeholder="Enter your full name"
                      value={form.name} onChange={handleChange} autoComplete="name" />
                  </div>

                  {/* Contact Number + Email */}
                  <div className="eq-form-row">
                    <div className="eq-form-group">
                      <label htmlFor="eq-phone">Contact Number *</label>
                      <input id="eq-phone" name="phone" type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={handleChange} autoComplete="tel" />
                    </div>
                    <div className="eq-form-group">
                      <label htmlFor="eq-email">Email Address</label>
                      <input id="eq-email" name="email" type="email"
                        placeholder="you@example.com"
                        value={form.email} onChange={handleChange} autoComplete="email" />
                    </div>
                  </div>

                  {/* Room Type */}
                  <div className="eq-form-group">
                    <label htmlFor="eq-room">Room Preference</label>
                    <select id="eq-room" name="room" value={form.room} onChange={handleChange}>
                      <option value="">Select a room type</option>
                      <option value="Executive Room (1 Bedroom)">Executive Room — 1 Bedroom</option>
                      <option value="Deluxe Suite (2 Bedrooms)">Deluxe Suite — 2 Bedrooms</option>
                      <option value="Grand Residence (Full Apartment)">Grand Residence — Full Apartment</option>
                    </select>
                  </div>

                  {/* Check-in + Check-out */}
                  <div className="eq-form-row">
                    <div className="eq-form-group">
                      <label htmlFor="eq-checkin">Check-in Date</label>
                      <input id="eq-checkin" name="checkin" type="date"
                        value={form.checkin} onChange={handleChange} min={today} />
                    </div>
                    <div className="eq-form-group">
                      <label htmlFor="eq-checkout">Check-out Date</label>
                      <input id="eq-checkout" name="checkout" type="date"
                        value={form.checkout} onChange={handleChange}
                        min={form.checkin || today} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="eq-form-group">
                    <label htmlFor="eq-message">Message / Special Requests</label>
                    <textarea id="eq-message" name="message" rows={3}
                      placeholder="Any special requirements or questions..."
                      value={form.message} onChange={handleChange} />
                  </div>

                  {status === 'error' && (
                    <p className="eq-error">
                      ⚠️ {!form.name.trim() || !form.phone.trim()
                        ? 'Please fill in your Name and Contact Number.'
                        : 'Could not send. Please call +91 82207 57067 directly.'}
                    </p>
                  )}
                </div>

                {/* ── Sticky Footer ── */}
                <div className="enquiry-modal-footer">
                  <button type="button" className="eq-cancel-btn" onClick={handleClose}>Cancel</button>
                  <button type="submit" className="enquiry-submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <><span className="eq-spinner" /> Sending…</>
                    ) : (
                      <>
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/>
                        </svg>
                        Send Enquiry
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default EnquiryButton
