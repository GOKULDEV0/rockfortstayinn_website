import { useState, useEffect } from 'react'
import './EnquiryButton.css'

function EnquiryButton() {
  const [isOpen, setIsOpen] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    roomType: 'Single Room',
    guests: '1',
    checkin: '',
    duration: '1',
    checkout: '',
    message: '',
  })

  // Set default checkin to today
  useEffect(() => {
    const today = new Date()
    const yyyy = today.getFullYear()
    const mm = String(today.getMonth() + 1).padStart(2, '0')
    const dd = String(today.getDate()).padStart(2, '0')
    setFormData(prev => ({ ...prev, checkin: `${yyyy}-${mm}-${dd}` }))
  }, [])

  // Auto-calculate checkout when checkin or duration changes
  useEffect(() => {
    if (formData.checkin && parseInt(formData.duration) > 0) {
      const checkinDate = new Date(formData.checkin)
      const checkoutDate = new Date(checkinDate.getTime() + parseInt(formData.duration) * 24 * 60 * 60 * 1000)
      const yyyy = checkoutDate.getFullYear()
      const mm = String(checkoutDate.getMonth() + 1).padStart(2, '0')
      const dd = String(checkoutDate.getDate()).padStart(2, '0')
      setFormData(prev => ({ ...prev, checkout: `${yyyy}-${mm}-${dd}` }))
    }
  }, [formData.checkin, formData.duration])

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, contact, email, roomType, guests, checkin, duration, checkout, message } = formData

    if (!name || !contact || !email || !checkin) {
      alert('Please fill in all mandatory fields.')
      return
    }

    const recipient = 'karthik@rockfortstayinn.com'
    const subject = encodeURIComponent(`Booking Enquiry from ${name} — ${roomType}`)
    const body = encodeURIComponent(
      `Dear Rockfort Stay Inn Team,\n\n` +
      `I would like to enquire about room availability. Please find my details below:\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `  GUEST DETAILS\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `  Full Name       : ${name}\n` +
      `  Contact Number   : ${contact}\n` +
      `  Email Address    : ${email}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `  BOOKING PREFERENCES\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `  Room Type        : ${roomType}\n` +
      `  Number of Guests : ${guests}\n` +
      `  Check-in Date    : ${checkin}\n` +
      `  Duration         : ${duration} Night(s)\n` +
      `  Check-out Date   : ${checkout}\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `  ADDITIONAL MESSAGE\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `${message || 'No additional message.'}\n\n` +
      `Looking forward to your response.\n\n` +
      `Warm regards,\n${name}\n${contact}`
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`

    setIsOpen(false)
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
      <div className={`enquiry-overlay ${isOpen ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false) }}>
        <div className="enquiry-modal">
          <button className="enquiry-close" onClick={() => setIsOpen(false)} aria-label="Close">×</button>

          <div className="enquiry-modal-header">
            <h3>
              <svg viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
              Book Your Stay
            </h3>
            <p>Fill in your booking details below. Your enquiry will be emailed directly to our reservations team.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="enquiry-form-grid">

              {/* Full Name */}
              <div className="enquiry-form-group full-width">
                <label>Full Name <span className="required-star">*</span></label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
              </div>

              {/* Contact */}
              <div className="enquiry-form-group">
                <label>Contact Number <span className="required-star">*</span></label>
                <input type="tel" name="contact" value={formData.contact} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
              </div>

              {/* Email */}
              <div className="enquiry-form-group">
                <label>Email Address <span className="required-star">*</span></label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" required />
              </div>

              {/* Room Type */}
              <div className="enquiry-form-group">
                <label>Room Type <span className="required-star">*</span></label>
                <select name="roomType" value={formData.roomType} onChange={handleChange}>
                  <option value="Single Room">Single Room (1 Bedroom, Shared Hall &amp; Kitchen)</option>
                  <option value="Two Rooms">Two Rooms (2 Bedrooms, Shared Hall &amp; Kitchen)</option>
                  <option value="Full Apartment">Full Apartment (All 3 Bedrooms, Private Use)</option>
                  <option value="Long Stay Package">Long Stay Package (Monthly)</option>
                  <option value="Corporate Bulk Booking">Corporate Bulk Booking</option>
                </select>
              </div>

              {/* Number of Guests */}
              <div className="enquiry-form-group">
                <label>Number of Guests</label>
                <input type="number" name="guests" value={formData.guests} onChange={handleChange} min="1" max="10" />
              </div>

              {/* Check-in Date */}
              <div className="enquiry-form-group">
                <label>Check-in Date <span className="required-star">*</span></label>
                <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} required />
              </div>

              {/* Duration */}
              <div className="enquiry-form-group">
                <label>Duration (Nights) <span className="required-star">*</span></label>
                <input type="number" name="duration" value={formData.duration} onChange={handleChange} min="1" required />
              </div>

              {/* Checkout (auto-calculated) */}
              <div className="enquiry-form-group full-width">
                <label>Check-out Date (Auto-Calculated)</label>
                <input type="date" name="checkout" value={formData.checkout} readOnly />
              </div>

              {/* Message */}
              <div className="enquiry-form-group full-width">
                <label>Special Requests / Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Any special requirements, dietary needs, airport pickup, etc." />
              </div>
            </div>

            <div className="enquiry-submit-area">
              <button type="submit" className="enquiry-submit-btn">
                <svg viewBox="0 0 24 24"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>
                <span>Send Enquiry</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EnquiryButton
