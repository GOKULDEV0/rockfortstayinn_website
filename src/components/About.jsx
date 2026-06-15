import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const values = [
  { icon: '✦', title: 'Luxury Redefined', desc: 'We believe premium living should be accessible. Every apartment reflects our commitment to world-class comfort.' },
  { icon: '✦', title: 'Trust & Transparency', desc: 'No hidden charges, no surprises. What you see is exactly what you get — and more.' },
  { icon: '✦', title: 'Location Advantage', desc: 'Situated in Hirondini Park, Oragadam — minutes from major IT parks, SIPCOT, and the GST Road.' },
  { icon: '✦', title: 'Personalized Service', desc: 'Every guest is treated as family. Our team anticipates your needs before you ask.' },
]

function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            ref={ref}
            className="about-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Born From a Passion<br />For Exceptional Living</h2>
            <div className="gold-divider" />
            <p className="about-text">
              Rockfort Stay Inn was founded with a single vision: to bridge the gap between the warmth of home and the luxury of a five-star hotel. Nestled in the heart of Hirondini Park, Oragadam, we serve professionals, families, and travelers who refuse to compromise on quality.
            </p>
            <p className="about-text">
              Whether you're here for a night, a month, or longer — our fully furnished apartments are ready to welcome you. Every corner has been designed with intention, every amenity chosen with care.
            </p>

            <div className="about-highlight">
              <div className="highlight-bar" />
              <blockquote>
                "We don't just offer a place to stay. We offer a place to <em>live</em>."
              </blockquote>
            </div>

            <div className="about-numbers">
              {[
                { n: '3+', l: 'Room Types' },
                { n: '100%', l: 'Furnished' },
                { n: '5★', l: 'Service' },
              ].map(item => (
                <div key={item.l} className="about-number">
                  <span className="an-value">{item.n}</span>
                  <span className="an-label">{item.l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="about-right">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="value-card"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
              >
                <span className="value-icon">{v.icon}</span>
                <div>
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-desc">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
