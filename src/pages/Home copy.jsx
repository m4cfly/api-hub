import { useState } from 'react'
import { useCart } from '../context/CartContext'
import '../styles/Home.css'

function Home() {
  const [selectedPizza, setSelectedPizza] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [comments, setComments] = useState('')
  const { addToCart } = useCart()

  const pizzaOptions = [
    'Margherita',
    'Hawaii',
    'Pepperoni',
    'Quattro Formaggi',
    'Vegetarian',
    'BBQ Chicken',
    'Marinara',
    'Calzone'
  ]

  const typeOptions = [
    'Family Size',
    'Regular Size',
    'Kids Size',
    'Gluten Free',
    'Extra Cheese',
    'Thin Crust',
    'Thick Crust'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (selectedPizza && selectedType) {
      const newOrder = {
        pizza: selectedPizza,
        type: selectedType,
        comments: comments
      }
      
      addToCart(newOrder)
      
      // Reset form
      setSelectedPizza('')
      setSelectedType('')
      setComments('')
    }
  }

  return (
    <div className="home-page">
      <div className="home-container">
        <h2>Fancy some good pizza?</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <select
              value={selectedPizza}
              onChange={(e) => setSelectedPizza(e.target.value)}
              required
            >
              <option value="">-- CHOOSE PIZZA FROM MENU --</option>
              {pizzaOptions.map((pizza, index) => (
                <option key={index} value={pizza}>
                  {pizza}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              required
            >
              <option value="">-- CHOOSE TYPE FROM OPTIONS --</option>
              {typeOptions.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Any allergies or changes you want to make?</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Any comments..."
            />
          </div>

          <button type="submit" className="add-to-order-btn">
            ADD TO ORDER
          </button>
        </form>
      </div>
    </div>
  )
}

export default Home