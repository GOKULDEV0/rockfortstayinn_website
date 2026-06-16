import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EnquiryButton from './components/EnquiryButton'
import ScrollToTop from './components/ScrollToTop'

// Pages
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import RoomsPage from './pages/RoomsPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import AmenitiesPage from './pages/AmenitiesPage'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      <EnquiryButton />
    </Router>
  )
}

export default App
