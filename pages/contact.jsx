import Head from 'next/head'
import Link from 'next/link'
import Contact from '../src/components/Contact'

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Book Your Stay | Rockfort Stay Inn Oragadam Chennai</title>
        <meta name="description" content="Contact Rockfort Stay Inn at +91 82207 57067 or via WhatsApp for bookings, corporate packages, and custom rate enquiries. Located at Hirondini Park, Oragadam, Chennai." />
        <link rel="canonical" href="https://www.rockfortstayinn.com/contact" />
      </Head>
      <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <span>Contact</span>
          </nav>
          <span className="section-label">GET IN TOUCH</span>
          <h1>Let's Plan<br /><em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Your Stay</em></h1>
          <p>Our team is available 24/7 to assist you with bookings, corporate packages, and any special requests you may have.</p>
        </div>
      </div>
      <Contact />
    </main>
    </>
  )
}

export default ContactPage
