import Head from 'next/head'
import Link from 'next/link'
import Gallery from '../src/components/Gallery'

function GalleryPage() {
  return (
    <>
      <Head>
        <title>Photo Gallery | Rockfort Stay Inn Premium Apartments Oragadam Chennai</title>
        <meta name="description" content="Browse the photo gallery of Rockfort Stay Inn — luxury furnished apartments in Oragadam, Chennai. View bedrooms, living rooms, kitchen, and premium interiors." />
        <link rel="canonical" href="https://www.rockfortstayinn.com/gallery" />
      </Head>
      <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link href="/">Home</Link>
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
    </>
  )
}

export default GalleryPage
