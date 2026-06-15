import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo.png'
import './Navbar.css'

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'rooms', label: 'Rooms' },
  { to: 'amenities', label: 'Amenities' },
  { to: 'gallery', label: 'Gallery' },
  { to: 'about', label: 'About' },
  { to: 'contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="Rockfort Stay Inn Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/918220757067?text=Hi, I'd like to book a stay at Rockfort Stay Inn"
              target="_blank"
              rel="noreferrer"
              className="nav-book-btn"
            >
              Book Now
            </a>
          </li>
        </ul>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
