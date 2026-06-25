import Head from 'next/head'
import Link from 'next/link'
import Amenities from '../src/components/Amenities'

function AmenitiesPage() {
  return (
    <>
      <Head>
        <title>Amenities & Facilities | Free Breakfast, Wi-Fi, AC & More | Rockfort Stay Inn</title>
        <meta name="description" content="Rockfort Stay Inn offers free breakfast, high-speed Wi-Fi, AC in all rooms, fully equipped kitchen, washing machine, 24/7 security, parking, and power backup in Oragadam, Chennai." />
        <link rel="canonical" href="https://www.rockfortstayinn.com/amenities" />
      </Head>
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
    </>
  )
}

export default AmenitiesPage
