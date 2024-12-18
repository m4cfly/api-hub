import { useNavigate } from 'react-router-dom'
import drage from '../assets/drage.png'  // Tilføj denne import
import '../styles/ThankYou.css'

function ThankYou() {
  const navigate = useNavigate()

  return (
    <div className="thank-you-container">
      <div className="thank-you-box">
        <h2>Thank You for Your Order!</h2>
        
        <div className="dragon-image">
          <img 
            src={drage}  // Brug den importerede drage
            alt="Cute dragon with pizza" 
            className="dragon"
          />
        </div>

        <div className="message">
          <p>Your delicious pizza is on its way!</p>
          <p>Expected delivery time: 30-45 minutes</p>
        </div>

        <button 
          onClick={() => navigate('/')}
          className="back-home-button"
        >
          Order More Pizza
        </button>
      </div>
    </div>
  )
}

export default ThankYou