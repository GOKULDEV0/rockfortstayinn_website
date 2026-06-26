import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import emailjs from '@emailjs/browser'

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const rooms = [
  {
    id: 1,
    type: 'Executive Room',
    title: 'Executive Room',
    desc: 'One private, fully-furnished bedroom in our 3-bedroom apartment. The hall and kitchen are comfortable shared common areas — ideal for solo corporate professionals.',
    size: 'Private Bedroom',
    guests: '1-2 Guests',
    price: '₹ 1000',
    period: '/ month',
    features: ['Private Bedroom', 'Shared Hall', 'Shared Kitchen', 'Free Breakfast', 'OTT Smart TV (Hall)', 'AC', 'Wi-Fi'],
    tag: 'Most Flexible',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'top-right',
    note: 'Hall & Kitchen shared with other guests in the apartment.',
  },
  {
    id: 2,
    type: 'Deluxe Suite',
    title: 'Deluxe Suite',
    desc: 'Two private bedrooms in our apartment, with the hall and kitchen as shared common areas. Great for two colleagues from the same company staying together.',
    size: '2 Private Bedrooms',
    guests: '2-4 Guests',
    price: '₹ 2000',
    period: '/ month',
    features: ['2 Private Bedrooms', 'Shared Hall', 'Shared Kitchen', 'Free Breakfast', 'OTT Smart TV (Hall)', '2 ACs', 'Wi-Fi'],
    tag: 'Great for Colleagues',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'bottom-left',
    note: 'Hall & Kitchen shared — ideal for teams from the same company.',
  },
  {
    id: 3,
    type: 'Grand Residence',
    title: 'Grand Residence',
    desc: 'Book the entire 3-bedroom apartment exclusively for your family or group. You get complete private use of all 3 bedrooms, the hall, and the fully-equipped kitchen.',
    size: 'Entire Apartment',
    guests: 'Up to 6 Guests',
    price: '₹ 3000',
    period: '/ month',
    features: ['3 Private Bedrooms', 'Exclusive Hall', 'Private Kitchen', 'Free Breakfast', 'OTT Smart TV (Hall)', '3 ACs', 'Washing Machine', 'Parking'],
    tag: 'Best for Families',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'top-left',
    note: 'Entire apartment exclusively yours — no sharing.',
  },
]

/* ── Enquiry Modal ── */
function EnquiryModal({ room, onClose }) {
  const today = new Date().toISOString().split('T')[0]
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    room: room.title,
    checkin: '', checkout: '', message: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => {
      const next = { ...prev, [name]: value }
      // Keep checkout min in sync with checkin
      if (name === 'checkin' && next.checkout && next.checkout < value) {
        next.checkout = value
      }
      return next
    })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus('error')
      return
    }
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:     form.name,
          phone:    form.phone,
          email:    form.email || 'Not provided',
          room:     form.room,
          checkin:  form.checkin  || 'Not specified',
          checkout: form.checkout || 'Not specified',
          message:  form.message  || 'No special requests',
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  // Lock body scroll when modal open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
  function close() {
    if (typeof document !== 'undefined') document.body.style.overflow = ''
    onClose()
  }

  return (
    <div className="modal-overlay" onClick={close}>
      <motion.div
        className="modal-box"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 60 }}
        transition={{ duration: 0.28 }}
        onClick={e => e.stopPropagation()}
      >
        {/* ── Sticky Header ── */}
        <div className="modal-header">
          <div className="modal-header-text">
            <span className="modal-room-tag">✦ {room.title}</span>
            <h3 className="modal-title">Send Enquiry</h3>
          </div>
          <button className="modal-close" onClick={close} aria-label="Close">✕</button>
        </div>

        {status === 'success' ? (
          /* Success screen — scrollable area + sticky footer */
          <>
            <div className="modal-body modal-success">
              <div className="modal-success-icon">✓</div>
              <h4>Enquiry Sent!</h4>
              <p>Thank you! We've received your booking request and will contact you shortly.</p>
              <p className="modal-urgent">For urgent booking: <strong>+91 82207 57067</strong></p>
            </div>
            <div className="modal-footer">
              <button className="btn-gold modal-submit-btn" onClick={close}>Close</button>
            </div>
          </>
        ) : (
          /* Form — scrollable body + sticky footer, both inside <form> */
          <form className="modal-form-container" onSubmit={handleSubmit} noValidate>
            <div className="modal-body">

              {/* Row 1: Full Name (full width) */}
              <div className="modal-form-group">
                <label htmlFor="m-name">Full Name *</label>
                <input id="m-name" name="name" type="text"
                  placeholder="Enter your full name"
                  value={form.name} onChange={handleChange} autoComplete="name" />
              </div>

              {/* Row 2: Phone + Email */}
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="m-phone">Contact Number *</label>
                  <input id="m-phone" name="phone" type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone} onChange={handleChange} autoComplete="tel" />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="m-email">Email Address *</label>
                  <input id="m-email" name="email" type="email"
                    placeholder="you@example.com"
                    value={form.email} onChange={handleChange} autoComplete="email" />
                </div>
              </div>

              {/* Row 3: Room Type + (empty / full-width) */}
              <div className="modal-form-group">
                <label htmlFor="m-room">Room Type *</label>
                <select id="m-room" name="room" value={form.room} onChange={handleChange}>
                  <option value="Executive Room">Executive Room (1 Bedroom, Shared Hall &amp; Kitchen)</option>
                  <option value="Deluxe Suite">Deluxe Suite (2 Bedrooms, Shared Hall &amp; Kitchen)</option>
                  <option value="Grand Residence">Grand Residence (Full 3-Bedroom Apartment)</option>
                </select>
              </div>

              {/* Row 4: Check-in + Check-out */}
              <div className="modal-form-row">
                <div className="modal-form-group">
                  <label htmlFor="m-checkin">Check-in Date *</label>
                  <input id="m-checkin" name="checkin" type="date"
                    value={form.checkin} onChange={handleChange}
                    min={today} />
                </div>
                <div className="modal-form-group">
                  <label htmlFor="m-checkout">Check-out Date *</label>
                  <input id="m-checkout" name="checkout" type="date"
                    value={form.checkout} onChange={handleChange}
                    min={form.checkin || today} />
                </div>
              </div>

              {/* Row 5: Message */}
              <div className="modal-form-group">
                <label htmlFor="m-message">Special Requests / Message</label>
                <textarea id="m-message" name="message" rows={3}
                  placeholder="Any special requirements or questions..."
                  value={form.message} onChange={handleChange} />
              </div>

              {status === 'error' && (
                <p className="modal-error">
                  ⚠️ {!form.name.trim() || !form.phone.trim()
                    ? 'Please fill in your Name and Contact Number.'
                    : 'Could not send. Please call +91 82207 57067 directly.'}
                </p>
              )}
            </div>

            {/* ── Sticky Footer ── */}
            <div className="modal-footer">
              <button type="button" className="modal-cancel-btn" onClick={close}>Cancel</button>
              <button type="submit" className="btn-gold modal-submit-btn"
                disabled={status === 'sending'}>
                {status === 'sending'
                  ? <><span className="modal-spinner" /> Sending…</>
                  : 'Send Enquiry →'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  )
}

function RoomCard({ room, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <motion.div
        ref={ref}
        className="room-card"
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
      >
        <div className="room-image-area">
          <div
            className="room-image-placeholder"
            style={{ backgroundImage: `url(${room.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className={`room-accent ${room.accentPos}`} />
          </div>
          {room.tag && <span className="room-tag">{room.tag}</span>}
        </div>

        <div className="room-body">
          <div className="room-meta">
            <span className="room-guests">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              {room.guests}
            </span>
            <span className="room-sqft">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M3 9h18M9 21V9"/>
              </svg>
              {room.size}
            </span>
          </div>

          <h3 className="room-title">{room.title}</h3>
          <p className="room-desc">{room.desc}</p>

          <div className="room-note">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            {room.note}
          </div>

          <div className="room-features">
            {room.features.map(f => (
              <span key={f} className="room-feature">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {f}
              </span>
            ))}
          </div>

          <div className="room-footer">
            <button
              className="room-book-btn full-width"
              onClick={() => setShowModal(true)}
            >
              Enquire Now
            </button>
          </div>
        </div>
      </motion.div>

      {showModal && <EnquiryModal room={room} onClose={() => setShowModal(false)} />}
    </>
  )
}

function Rooms() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section className="rooms section-padding" id="rooms">
      <div className="container">
        <motion.div
          ref={headerRef}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Accommodation</span>
          <h2 className="section-title">Flexible Rooms for Every Need</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Our 3-bedroom apartment offers complete flexibility. Book one room, two rooms, or the entire apartment — the hall and kitchen are shared common areas, making it perfect for corporate professionals and families alike.
          </p>
        </motion.div>

        {/* How It Works Banner */}
        <div className="how-it-works">
          <div className="hiw-item">
            <span className="hiw-icon">🏠</span>
            <div>
              <h4>3-Bedroom Apartment</h4>
              <p>One full apartment with 3 private bedrooms</p>
            </div>
          </div>
          <div className="hiw-arrow">→</div>
          <div className="hiw-item">
            <span className="hiw-icon">🛏️</span>
            <div>
              <h4>Book 1, 2, or All 3</h4>
              <p>Choose based on your group size and budget</p>
            </div>
          </div>
          <div className="hiw-arrow">→</div>
          <div className="hiw-item">
            <span className="hiw-icon">🍳</span>
            <div>
              <h4>Shared Common Areas</h4>
              <p>Hall & kitchen shared between room guests</p>
            </div>
          </div>
        </div>

        <div className="rooms-grid">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
