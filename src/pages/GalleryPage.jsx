import { Link } from 'react-router-dom'
import Gallery from '../components/Gallery'

function GalleryPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <span>Gallery</span>
          </nav>
          <span className="section-label">GALLERY</span>
          <h1>A Glimpse of<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Premium Living</em></h1>
          <p>Explore our beautifully furnished spaces, thoughtfully designed for maximum comfort and luxury.</p>
        </div>
      </div>
      <Gallery />
    </main>
  )
}

export default GalleryPage
