import Head from 'next/head'
import Link from 'next/link'
import Rooms from '../src/components/Rooms'

function RoomsPage() {
  return (
    <>
      <Head>
        <title>Rooms & Pricing | Single, 2-Room & Full Apartment | Rockfort Stay Inn Oragadam</title>
        <meta name="description" content="Book a single room, two rooms, or the full 3-bedroom apartment at Rockfort Stay Inn, Oragadam. Flexible pricing starting ₹1000/month. Ideal for corporate professionals & families." />
        <link rel="canonical" href="https://www.rockfortstayinn.com/rooms" />
      </Head>
      <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Rooms</span>
          </nav>
          <span className="section-label">ACCOMMODATION</span>
          <h1>Choose Your<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Perfect Space</em></h1>
          <p>From intimate executive suites to expansive two-bedroom family apartments — every room is fully furnished and ready from day one.</p>
        </div>
      </div>
      <Rooms />
    </main>
    </>
  )
}

export default RoomsPage
