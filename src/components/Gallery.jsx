import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'


const galleryItems = [
  { id: 1, label: 'Living Room', span: 'wide', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 2, label: 'Master Bedroom', span: 'normal', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 3, label: 'Kitchen', span: 'normal', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 4, label: 'Dining Area', span: 'normal', image: 'https://images.unsplash.com/photo-1617806118233-18e1c0945594?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 5, label: 'Bathroom', span: 'normal', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 6, label: 'Balcony View', span: 'wide', image: 'https://images.unsplash.com/photo-1502672260266-1c1f2d9368ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
  { id: 7, label: 'Work Desk', span: 'normal', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { id: 8, label: 'Building Lobby', span: 'normal', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
]

function Gallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [hovered, setHovered] = useState(null)

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Visual Tour</span>
          <h2 className="section-title">Experience the Space</h2>
          <div className="gold-divider" />
          <p className="section-subtitle">
            A glimpse into the luxurious interiors crafted for your stay. Add your own photos to bring this gallery to life.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              className={`gallery-item ${item.span === 'wide' ? 'wide' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="gallery-placeholder"
                style={{ 
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
              </div>

              <AnimatePresence>
                {hovered === item.id && (
                  <motion.div
                    className="gallery-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="gallery-label">{item.label}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="gallery-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ✨ These are open-source premium images.
        </motion.p>
      </div>
    </section>
  )
}

export default Gallery
