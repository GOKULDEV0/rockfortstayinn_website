import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Rooms.css'

const rooms = [
  {
    id: 1,
    type: 'Studio',
    title: 'Studio Suite',
    desc: 'A perfectly curated space blending work and leisure. Ideal for solo travelers and business professionals seeking smart luxury.',
    size: '350 sq.ft',
    guests: '2 Guests',
    price: '₹ XXXX',
    period: '/ night',
    features: ['King Bed', 'Smart TV', 'Kitchenette', 'High-Speed WiFi', 'AC', 'Work Desk'],
    tag: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'top-right',
  },
  {
    id: 2,
    type: '1BHK',
    title: '1 Bedroom Suite',
    desc: 'Generous living with a separate bedroom, full kitchen, and a spacious lounge — perfect for couples and extended stays.',
    size: '650 sq.ft',
    guests: '3 Guests',
    price: '₹ XXXX',
    period: '/ night',
    features: ['King Bed', 'Full Kitchen', 'Living Room', 'Smart TV', 'Washing Machine', 'AC'],
    tag: 'Best Value',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'bottom-left',
  },
  {
    id: 3,
    type: '2BHK',
    title: '2 Bedroom Suite',
    desc: 'The ultimate family retreat. Two private bedrooms, a fully equipped kitchen, and premium furnishings throughout.',
    size: '1100 sq.ft',
    guests: '6 Guests',
    price: '₹ XXXX',
    period: '/ night',
    features: ['2 Bedrooms', 'Full Kitchen', 'Dining Area', '2 Smart TVs', 'Washer/Dryer', '2 ACs'],
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    accentPos: 'top-left',
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
            <span className="price-from">From</span>
            <span className="price-amount">{room.price}</span>
            <span className="price-period">{room.period}</span>
          </div>
          <a
            href={`https://wa.me/918220757067?text=Hi, I'm interested in the ${room.title} at Rockfort Stay Inn`}
            target="_blank"
            rel="noreferrer"
            className="room-book-btn"
          >
            Book Now
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
          <span className="section-label">Accommodations</span>
          <h2 className="section-title">Choose Your Perfect Space</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            From intimate studios to expansive family suites — every apartment is fully furnished and thoughtfully designed for your comfort.
          </p>
        </motion.div>

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
