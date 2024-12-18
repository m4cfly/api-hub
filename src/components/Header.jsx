// src/components/Header.jsx
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="header-link">
          <img src={logo} alt="Luigi's Pizza" className="logo" />
          <h1>OH MAMMA MIA</h1>
        </Link>
        <p className="contact-info">Luigispizzaria@cphbusiness.dk</p>
      </div>
    </header>
  )
}

export default Header