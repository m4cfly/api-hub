// src/components/Navbar.jsx
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import '../styles/Navbar.css'

function Navbar() {
  const { cartItems } = useCart()

  return (
    
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
                <Link to="/">Home</Link>
               <Link to="/vision">Vision</Link>
               <Link to="/endpoints">Endpoints</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/">Order</Link>
        </div>
        <div className="nav-right">
          <Link to="/profile">Profile</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar