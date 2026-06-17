import Link from 'next/link'
import About from '../src/components/About'

function AboutPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>About Us</span>
          </nav>
          <span className="section-label">OUR STORY</span>
          <h1>A Heritage of<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Hospitality</em></h1>
          <p>Over two decades of dedicated service, crafted for those who refuse to compromise on comfort, quality, and care.</p>
        </div>
      </div>
      <About />
    </main>
  )
}

export default AboutPage
