import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Rooms from '../components/Rooms'
import Amenities from '../components/Amenities'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import EnquiryButton from '../components/EnquiryButton'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Rooms />
        <Amenities />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
      <EnquiryButton />
    </>
  )
}

export default Home
