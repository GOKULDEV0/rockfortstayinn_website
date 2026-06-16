import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import '../index.css'

function Home() {
  return (
    <main>
      <Hero />
      
      {/* ABOUT TEASER BLOCK */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-label">ABOUT US</span>
          <h2 className="section-title">A Heritage of Hospitality</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px auto' }}>
            With over two decades of expert hotel management experience, we deliver an unmatched standard of service. Our apartments are designed to offer total privacy and comfort for long-term corporate guests and families alike.
          </p>
          <Link to="/about" className="btn-outline" style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* ROOMS TEASER BLOCK */}
      <section className="section-padding" style={{ backgroundColor: 'var(--dark-2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-label">ACCOMMODATION</span>
          <h2 className="section-title">Spaces Designed for Living</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 50px auto' }}>
            From cozy executive suites to expansive two-bedroom family apartments, every room features a fully equipped kitchen, separate living areas, and premium amenities to ensure a seamless stay.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '50px' }}>
            <div style={{ border: '1px solid var(--white-10)', padding: '40px 20px', backgroundColor: 'var(--dark)' }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>1BHK Deluxe</h3>
              <Link to="/rooms" className="gold-text" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                View Room Details &rarr;
              </Link>
            </div>
            <div style={{ border: '1px solid var(--white-10)', padding: '40px 20px', backgroundColor: 'var(--dark)' }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>2BHK Luxury</h3>
              <Link to="/rooms" className="gold-text" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                View Room Details &rarr;
              </Link>
            </div>
            <div style={{ border: '1px solid var(--white-10)', padding: '40px 20px', backgroundColor: 'var(--dark)' }}>
              <h3 style={{ color: 'var(--white)', fontSize: '1.4rem', marginBottom: '20px', fontFamily: 'var(--font-display)' }}>Executive Suite</h3>
              <Link to="/rooms" className="gold-text" style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
                View Room Details &rarr;
              </Link>
            </div>
          </div>
          
          <Link to="/rooms" className="btn-primary">
            <span>Explore All Rooms</span>
          </Link>
        </div>
      </section>

      {/* CONTACT TEASER BLOCK */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="section-title">We Are Here To Assist</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 40px auto' }}>
            Planning a corporate bulk booking or a monthly stay? Our management team is ready to provide custom rates and organize a flawless arrival experience for you.
          </p>
          <Link to="/contact" className="btn-outline" style={{ color: 'var(--gold)', borderColor: 'var(--gold)' }}>
            Contact Us Now
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Home
