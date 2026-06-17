import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Rooms.css'

const rooms = [
  {
    id: 1,
    type: 'Single Room',
    title: 'Single Room Stay',
    desc: 'One private, fully-furnished bedroom in our 3-bedroom apartment. The hall and kitchen are comfortable shared common areas — ideal for solo corporate professionals.',
    size: 'Private Bedroom',
    guests: '1-2 Guests',
    price: 'Contact Us',
    period: '/ month',
    features: ['Private Bedroom', 'Shared Hall', 'Shared Kitchen', 'Smart TV', 'AC', 'High-Speed Wi-Fi'],
    tag: 'Most Flexible',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'top-right',
    note: 'Hall & Kitchen shared with other guests in the apartment.',
  },
  {
    id: 2,
    type: '2 Rooms',
    title: 'Two-Room Stay',
    desc: 'Two private bedrooms in our apartment, with the hall and kitchen as shared common areas. Great for two colleagues from the same company staying together.',
    size: '2 Private Bedrooms',
    guests: '2-4 Guests',
    price: '₹ 2000',
    period: '/ month',
    features: ['2 Private Bedrooms', 'Shared Hall', 'Shared Kitchen', '2 ACs', 'Smart TV', 'High-Speed Wi-Fi'],
    tag: 'Great for Colleagues',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'bottom-left',
    note: 'Hall & Kitchen shared — ideal for teams from the same company.',
  },
  {
    id: 3,
    type: 'Full Apartment',
    title: 'Full 3-Bedroom Apartment',
    desc: 'Book the entire 3-bedroom apartment exclusively for your family or group. You get complete private use of all 3 bedrooms, the hall, and the fully-equipped kitchen.',
    size: 'Entire Apartment',
    guests: 'Up to 6 Guests',
    price: 'Contact Us',
    period: '/ month',
    features: ['3 Private Bedrooms', 'Exclusive Hall', 'Private Full Kitchen', '3 ACs', 'Washing Machine', 'Parking'],
    tag: 'Best for Families',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'top-left',
    note: 'Entire apartment exclusively yours — no sharing.',
  },
]

function RoomCard({ room, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
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
          style={{
            backgroundImage: `url(${room.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
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
          <div className="room-price">
            <span className="price-amount">{room.price}</span>
            <span className="price-period">{room.period}</span>
          </div>
          <a
            href={`https://wa.me/918220757067?text=Hi, I'm interested in the ${room.title} at Rockfort Stay Inn`}
            target="_blank"
            rel="noreferrer"
            className="room-book-btn"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </motion.div>
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
