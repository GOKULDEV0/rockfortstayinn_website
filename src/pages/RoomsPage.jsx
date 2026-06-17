import { Link } from 'react-router-dom'
import Rooms from '../components/Rooms'

function RoomsPage() {
  return (
    <main>
      <div className="page-banner">
        <div className="container page-banner-inner">
          <nav className="page-breadcrumb">
            <Link to="/">Home</Link>
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
  )
}

export default RoomsPage
