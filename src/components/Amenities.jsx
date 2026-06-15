import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Amenities.css'

const amenities = [
  { icon: '🛜', title: 'High-Speed WiFi', desc: 'Blazing fast internet for work and streaming, always reliable.' },
  { icon: '❄️', title: 'Air Conditioning', desc: 'Individual climate control in every room for perfect comfort.' },
  { icon: '📺', title: 'Smart TV', desc: 'Premium Smart TVs with OTT access — Netflix, Prime & more.' },
  { icon: '🍳', title: 'Fully Equipped Kitchen', desc: 'Cook your own meals with all utensils, appliances and gas provided.' },
  { icon: '👕', title: 'Washing Machine', desc: 'In-unit washer and dryer for complete laundry convenience.' },
  { icon: '🔒', title: '24/7 Security', desc: 'Round-the-clock CCTV and gated security for your peace of mind.' },
  { icon: '🚗', title: 'Parking Space', desc: 'Dedicated parking for two-wheelers and four-wheelers.' },
  { icon: '🛏️', title: 'Premium Linen', desc: 'Hotel-grade mattresses, pillows, and fresh crisp linens.' },
  { icon: '⚡', title: 'Power Backup', desc: 'Uninterrupted power supply ensures zero disruption to your stay.' },
  { icon: '🧹', title: 'Housekeeping', desc: 'Regular housekeeping service to keep your space immaculate.' },
  { icon: '📍', title: 'Prime Location', desc: 'Strategically located near IT parks, SIPCOT & major highways.' },
  { icon: '📞', title: '24/7 Support', desc: 'Our team is always available for any assistance, day or night.' },
]

function Amenities() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="amenities section-padding" id="amenities">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Every Luxury. Every Comfort.</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            We've thought of everything so you don't have to. Move in and feel at home from day one.
          </p>
        </motion.div>

        <div className="amenities-grid">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              className="amenity-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="amenity-icon">{item.icon}</div>
              <div className="amenity-content">
                <h4 className="amenity-title">{item.title}</h4>
                <p className="amenity-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Amenities
