import { useState } from 'react'
import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Delivery.css'

function Delivery() {
  const navigate = useNavigate()
  const { cartItems, clearCart } = useCart()
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setDeliveryInfo(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // Her kan du tilføje API kald til backend
      console.log('Ordre afsendt:', { items: cartItems, delivery: deliveryInfo })
      clearCart()
      navigate('/')
    } catch (error) {
      console.error('Fejl ved afsendelse af ordre:', error)
    }
  }

  return (
    <div className="delivery">
      <h2>Leverings Information</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Navn:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={deliveryInfo.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Adresse:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={deliveryInfo.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefon:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={deliveryInfo.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={deliveryInfo.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="order-summary">
          <h3>Ordre Oversigt</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="order-item">
              <span>{item.pizza}</span>
              {item.comments && <p>Kommentar: {item.comments}</p>}
            </div>
          ))}
        </div>

        <button type="submit">Bekræft Ordre</button>
      </form>
    </div>
  )
}

export default Delivery