import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


const teasers = [
  {
    id: 'about',
    eyebrow: 'ABOUT US',
    heading: 'A Heritage of Hospitality',
    text: 'With over two decades of expert hotel management, our founder built Rockfort Stay Inn to bridge the gap between the warmth of home and the luxury of a five-star hotel. We serve corporate executives, families, and long-stay guests who refuse to compromise on quality.',
    cta: 'Read Our Full Story',
    link: '/about',
    bg: false,
    stat: [
      { num: '20+', label: 'Years Experience' },
      { num: '100%', label: 'Fully Furnished' },
      { num: '24/7', label: 'Guest Support' },
    ],
  },
]

const roomTeasers = [
  {
    type: 'Executive Room',
    desc: 'One private, fully-furnished bedroom in our 3-bedroom apartment. The hall and kitchen are shared common areas — ideal for solo corporate professionals.',
    tag: 'Most Flexible',
    features: ['Private Bedroom', 'Shared Hall', 'Shared Kitchen', 'Free Breakfast', 'AC'],
    link: '/rooms',
  },
  {
    type: 'Deluxe Suite',
    desc: 'Two private bedrooms with shared hall and kitchen. Perfect for two colleagues from the same company staying together comfortably.',
    tag: 'Best for Colleagues',
    features: ['2 Private Bedrooms', 'Shared Hall', 'Shared Kitchen', 'Free Breakfast', '2 ACs'],
    link: '/rooms',
  },
  {
    type: 'Grand Residence',
    desc: 'Book all 3 bedrooms exclusively for your family or group. Complete private use of the entire apartment — bedrooms, hall, and kitchen.',
    tag: 'Best for Families',
    features: ['3 Bedrooms', 'Private Hall', 'Private Kitchen', 'Free Breakfast', 'Parking'],
    link: '/rooms',
  },
]

const amenityTeaser = [
  { icon: '🛜', label: 'High-Speed Wi-Fi' },
  { icon: '❄️', label: 'AC in all rooms' },
  { icon: '🍳', label: 'Equipped Kitchen' },
  { icon: '📺', label: 'OTT Smart TV (Hall)' },
  { icon: '👕', label: 'Washing Machine' },
  { icon: '🔒', label: '24/7 Security' },
  { icon: '🚗', label: 'Free Parking' },
  { icon: '🛏️', label: 'Premium Linen' },
  { icon: '⚡', label: 'Power Backup' },
  { icon: '🧹', label: 'Housekeeping' },
]

const faqs = [
  {
    q: 'What types of rooms are available at Rockfort Stay Inn?',
    a: 'We offer three flexible booking options in our 3-bedroom apartment: an Executive Room (one private bedroom), a Deluxe Suite (two private bedrooms), or the Grand Residence (all 3 bedrooms exclusively). The hall and kitchen are comfortable shared common areas.',
  },
  {
    q: 'What are the check-in and check-out timings?',
    a: 'Check-in time is 12:00 PM (noon) and check-out time is 11:00 AM. Early check-in or late check-out can be arranged on request, subject to availability.',
  },
  {
    q: 'Is breakfast included in the stay?',
    a: 'Yes! Complimentary morning breakfast is included for all guests. Other meals are available on a paid basis.',
  },
  {
    q: 'Where is Rockfort Stay Inn located?',
    a: 'We are located at Hirondini Park, Oragadam Industrial Corridor, Chennai, Tamil Nadu — 602 105. We are just minutes away from Renault-Nissan, Daimler India, Yamaha, Royal Enfield, and SIPCOT Industrial Park.',
  },
  {
    q: 'Is Rockfort Stay Inn suitable for long-term corporate stays?',
    a: 'Absolutely. Rockfort Stay Inn is specifically designed for corporate professionals on long-term projects near the Oragadam industrial zone. We offer monthly pricing, flexible room configurations, and direct owner management for a home-away-from-home experience.',
  },
  {
    q: 'How do I make a booking?',
    a: 'The fastest way to book is via WhatsApp at +91 82207 57067. You can also email us at karthik@rockfortstayinn.com. We handle all bookings personally — no middlemen, no hidden charges.',
  },
  {
    q: 'Is parking available at Rockfort Stay Inn?',
    a: 'Yes, dedicated parking for both two-wheelers and four-wheelers is available on the premises at no extra charge.',
  },
  {
    q: 'What ID proof is required at check-in?',
    a: 'All guests must present a valid government-issued photo ID at check-in. Accepted IDs include Aadhaar Card, Driving License, and Passport. Foreign nationals must present a valid Passport.',
  },
]

function FaqItem({ faq, i }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      className="faq-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
    >
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{faq.q}</span>
        <svg
          className={`faq-chevron${open ? ' open' : ''}`}
          width="20" height="20" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function Home() {
  return (
    <>
      <Head>
        <title>Rockfort Stay Inn | Luxury Service Apartments in Oragadam, Chennai</title>
        <meta name="description" content="Rockfort Stay Inn offers premium service apartments at Hirondini Park, Oragadam, Chennai. Book Single Room, 2 Rooms, or Full Apartment — ideal for corporate stays & families." />
        <meta name="keywords" content="service apartments Chennai, service apartments Oragadam, Rockfort Stay Inn, corporate stay Chennai, short stay Oragadam, furnished apartments Oragadam" />
        <link rel="canonical" href="https://www.rockfortstayinn.com/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <main className="home-main">

      {/* ===== ABOUT TEASER BLOCK ===== */}
      <section className="teaser-block">
        <div className="container">
          <div className="teaser-two-col">
            <motion.div
              className="teaser-text-col"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="teaser-eyebrow">ABOUT US</span>
              <h2 className="teaser-heading">A Heritage<br />of Hospitality</h2>
              <div className="teaser-divider" />
              <p className="teaser-text">
                With over two decades of expert hotel management, our founder built Rockfort Stay Inn to bridge the gap between the warmth of home and the luxury of a five-star hotel. We serve corporate executives, families, and long-stay guests who refuse to compromise on quality.
              </p>
              <div className="teaser-stats-row">
                <div className="teaser-stat"><span className="ts-num">20+</span><span className="ts-label">Years Experience</span></div>
                <div className="teaser-stat"><span className="ts-num">100%</span><span className="ts-label">Fully Furnished</span></div>
                <div className="teaser-stat"><span className="ts-num">24/7</span><span className="ts-label">Guest Support</span></div>
              </div>
              <Link href="/about" className="teaser-cta-btn">
                Read Our Full Story
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </motion.div>

            <motion.div
              className="teaser-visual-col"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="teaser-image-frame">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Rockfort Stay Inn Premium Service Apartment — Oragadam Chennai"
                  width={800}
                  height={480}
                  style={{ width: '100%', height: '480px', objectFit: 'cover', display: 'block' }}
                  priority
                />
                <div className="teaser-image-badge">
                  <span className="tib-num">5★</span>
                  <span className="tib-label">Service</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== ROOMS TEASER BLOCK ===== */}
      <section className="teaser-block teaser-dark">
        <div className="container">
          <motion.div
            className="teaser-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="teaser-eyebrow">ACCOMMODATION</span>
            <h2 className="teaser-heading">Spaces Designed<br />for Living</h2>
            <div className="teaser-divider center" />
            <p className="teaser-text centered">
              From cozy executive suites to expansive two-bedroom family apartments, every room is fully furnished and designed to make you feel completely at home from day one.
            </p>
          </motion.div>

          <div className="rooms-teaser-grid">
            {roomTeasers.map((room, i) => (
              <motion.div
                key={room.type}
                className="room-teaser-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <div className="rtc-tag">{room.tag}</div>
                <h3 className="rtc-type">{room.type}</h3>
                <p className="rtc-desc">{room.desc}</p>
                <ul className="rtc-features">
                  {room.features.map(f => (
                    <li key={f}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/rooms" className="rtc-btn">
                  View Room Details →
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="teaser-center-cta">
            <Link href="/rooms" className="btn-primary">
              <span>Explore All Rooms & Pricing</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== AMENITIES TEASER BLOCK ===== */}
      <section className="teaser-block">
        <div className="container">
          <motion.div
            className="teaser-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="teaser-eyebrow">FACILITIES</span>
            <h2 className="teaser-heading">Every Luxury.<br />Every Comfort.</h2>
            <div className="teaser-divider center" />
            <p className="teaser-text centered">
              We've thought of everything so you don't have to. Move in and feel completely at home from day one.
            </p>
          </motion.div>

          <div className="amenity-teaser-grid">
            {amenityTeaser.map((a, i) => (
              <motion.div
                key={a.label}
                className="ats-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <span className="ats-icon">{a.icon}</span>
                <span className="ats-label">{a.label}</span>
              </motion.div>
            ))}
          </div>

          <div className="teaser-center-cta">
            <Link href="/amenities" className="teaser-cta-btn">
              See All Amenities →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="teaser-block">
        <div className="container">
          <motion.div
            className="teaser-header-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="teaser-eyebrow">FAQ</span>
            <h2 className="teaser-heading">Frequently Asked<br />Questions</h2>
            <div className="teaser-divider center" />
            <p className="teaser-text centered">
              Everything you need to know before booking your stay at Rockfort Stay Inn, Oragadam.
            </p>
          </motion.div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT / CTA BANNER BLOCK ===== */}
      <section className="teaser-cta-banner">
        <div className="container">
          <motion.div
            className="cta-banner-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="teaser-eyebrow light">GET IN TOUCH</span>
            <h2 className="cta-banner-title">Ready to Book<br />Your Perfect Stay?</h2>
            <p className="cta-banner-text">
              Planning a corporate bulk booking, monthly stay, or a family visit? Our management team is available 24/7 and ready to provide custom rates and a flawless arrival experience.
            </p>
            <div className="cta-banner-btns">
              <a
                href="https://wa.me/918220757067?text=Hi, I'd like to book a stay at Rockfort Stay Inn"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <span>Book via WhatsApp</span>
              </a>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
    </>
  )
}

export default Home
