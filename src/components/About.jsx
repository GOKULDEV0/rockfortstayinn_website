import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'


const values = [
  { icon: '✦', title: 'Flexible Accommodation', desc: 'Book one room, two rooms, or the entire 3-bedroom apartment. You only pay for what you need — no more, no less.' },
  { icon: '✦', title: 'Corporate-Ready', desc: 'Strategically located in Hirondini Park, Oragadam — minutes from Renault-Nissan, Daimler India, Yamaha, and Royal Enfield.' },
  { icon: '✦', title: 'Home-Like Comfort', desc: 'A fully-furnished apartment with a shared hall and kitchen, making long corporate stays feel just like home.' },
  { icon: '✦', title: 'Trusted Management', desc: 'Directly managed by our founder with 20+ years in hotel management — ensuring quality, cleanliness, and prompt service every day.' },
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
              Rockfort Stay Inn is a family-run service apartment in Hirondini Park, Oragadam, managed directly by our founder who brings over <strong style={{ color: 'var(--gold)' }}>20 years of active hotel management experience</strong>. When he saw the growing demand for quality accommodation near Oragadam's booming industrial corridor, he transformed his 3-bedroom house into a premium service apartment.
            </p>
            <p className="about-text">
              Our unique model gives you complete flexibility — a single corporate professional can book just one private room, while a family or project team can book two or all three rooms. The hall and fully-equipped kitchen are comfortable shared spaces, making extended stays both practical and affordable.
            </p>

            <div className="about-highlight">
              <blockquote>
                "We don't just offer a place to stay. We offer a place to <em>live</em> — comfortably, affordably, and with the care of a family."
              </blockquote>
            </div>

            <div className="about-numbers">
              {[
                { n: '20+', l: 'Years Hotel Experience' },
                { n: '3', l: 'Bedroom Apartment' },
                { n: '24/7', l: 'Direct Management' },
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

            {/* Location Note */}
            <motion.div
              className="value-card location-card"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="value-icon">📍</span>
              <div>
                <h4 className="value-title">Nearby Corporates</h4>
                <p className="value-desc">Renault-Nissan · Daimler India · Yamaha · Royal Enfield · Schwing Stetter · SIPCOT Industrial Park</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
