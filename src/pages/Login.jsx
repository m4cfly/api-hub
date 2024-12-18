import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    try {
      const response = await fetch('http://localhost:YOUR_PORT/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        throw new Error('Login failed')
      }

      const data = await response.json()
      localStorage.setItem('token', data.token)
      navigate('/')
      
    } catch (error) {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login to order</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Write username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Write username..."
              required
            />
          </div>

          <div className="form-group">
            <label>Write password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Write password..."
              required
            />
          </div>

          <button type="submit" className="login-button">
            LOGIN
          </button>
        </form>

        <div className="register-link">
          <p>Don't have an account?</p>
          <Link to="/register" className="register-button">
            REGISTER HERE
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login