import Link from 'next/link'
import Amenities from '../src/components/Amenities'

function AmenitiesPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Amenities</span>
          </nav>
          <span className="section-label">FACILITIES</span>
          <h1>Every Luxury.<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Every Comfort.</em></h1>
          <p>We've thought of everything so you don't have to. Move in and feel completely at home from day one.</p>
        </div>
      </div>
      <Amenities />
    </main>
  )
}

export default AmenitiesPage
