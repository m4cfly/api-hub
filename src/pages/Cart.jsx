import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'
import '../styles/Cart.css'

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  // Prisliste for pizzaer (dette kunne også komme fra en API/context)
  const pizzaPrices = {
    'Margherita': 90,
    'Hawaii': 95,
    'Pepperoni': 100,
    'Quattro Formaggi': 110
    // Tilføj flere pizzaer og priser efter behov
  }

  // Beregn subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + (pizzaPrices[item.pizza] || 0)
    }, 0)
  }

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate('/delivery')
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add some delicious pizzas to your order!</p>
        <button onClick={() => navigate('/')}>Go to Menu</button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h2>Your Current Order</h2>
        
        <div className="order-summary">
          <p className="items-count">Number of items: {cartItems.length}</p>
          
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="item-info">
                  <h3>{item.pizza}</h3>
                  {item.type && <p className="item-type">{item.type}</p>}
                  {item.comments && <p className="item-comments">Note: {item.comments}</p>}
                </div>
                
                <div className="item-price-actions">
                  <p className="item-price">{pizzaPrices[item.pizza]} kr</p>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-totals">
            <div className="subtotal">
              <span>Subtotal:</span>
              <span>{calculateSubtotal()} kr</span>
            </div>
          </div>

          <div className="cart-actions">
            <button 
              onClick={clearCart}
              className="clear-cart-button"
            >
              Clear Cart
            </button>
            <button 
              onClick={handleCheckout}
              className="checkout-button"
            >
              Pay for Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart