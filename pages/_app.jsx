import { useEffect } from 'react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import EnquiryButton from '../src/components/EnquiryButton'
import '../src/index.css'
import '../src/components/About.css'
import '../src/components/Amenities.css'
import '../src/components/Contact.css'
import '../src/components/EnquiryButton.css'
import '../src/components/Footer.css'
import '../src/components/Gallery.css'
import '../src/components/Hero.css'
import '../src/components/Navbar.css'
import '../src/components/Rooms.css'
import '../pages/Home.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Basic fix for next.js hydration matching window sizes if needed
  }, [])

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <EnquiryButton />
    </>
  )
}
