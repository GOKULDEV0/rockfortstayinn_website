import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Amenities.css'

const amenities = [
  { icon: '🥐', title: 'Free Breakfast', desc: 'Complimentary morning breakfast for all guests. Other meals are available on a paid basis.' },
  { icon: '🛜', title: 'High-Speed Wi-Fi', desc: 'Blazing fast internet for work calls, streaming, and daily use — always reliable.' },
  { icon: '❄️', title: 'Air Conditioning', desc: 'Individual AC units in every private bedroom for perfect personal comfort.' },
  { icon: '📺', title: 'Smart TV', desc: 'Premium Smart TV in the shared hall — Netflix, Prime, and all OTT platforms.' },
  { icon: '🍳', title: 'Fully Equipped Kitchen', desc: 'Shared kitchen with gas stove, utensils, and all appliances needed to cook your own meals.' },
  { icon: '👕', title: 'Washing Machine', desc: 'In-unit washing machine available for all guests sharing the apartment.' },
  { icon: '🔒', title: '24/7 Security', desc: 'CCTV surveillance and gated entry throughout the premises for your safety.' },
  { icon: '🚗', title: 'Parking Space', desc: 'Dedicated parking for two-wheelers and four-wheelers available on premises.' },
  { icon: '🛏️', title: 'Premium Bedding', desc: 'Every bedroom has a quality mattress, pillows, and fresh linen — hotel-grade comfort.' },
  { icon: '⚡', title: 'Power Backup', desc: 'Uninterrupted power supply ensures zero disruption to your stay.' },
  { icon: '🧹', title: 'Regular Housekeeping', desc: 'Common areas and rooms kept clean and tidy with scheduled housekeeping service.' },
  { icon: '🏠', title: 'Shared Common Hall', desc: 'Spacious, furnished living hall shared comfortably between all guests in the apartment.' },
  { icon: '📞', title: 'Direct Owner Support', desc: 'Our founder is directly reachable 24/7 for any assistance, maintenance, or special requests.' },
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
            Every bedroom is fully furnished and private. The hall and kitchen are shared, well-maintained common areas — stocked and ready so you can move in and feel at home from day one.
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
