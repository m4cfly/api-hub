import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/CreateUser.css'

function CreateUser() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Validering
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address')
      return
    }

    try {
      // Her kan du tilføje dit API kald når du har en backend
      console.log('User created:', {
        username: formData.username,
        email: formData.email,
        password: formData.password
      })

      // Redirect til login siden
      navigate('/login')
      
    } catch (error) {
      setError('Could not create user. Please try again.')
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  return (
    <div className="create-user-page">
      <div className="create-user-box">
        <h2>Create a user</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Choose username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Write username..."
              required
            />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Write your email..."
              required
            />
          </div>

          <div className="form-group">
            <label>Input password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Write password..."
              required
            />
          </div>

          <div className="form-group">
            <label>Input password again</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Write password again..."
              required
            />
          </div>

          <button type="submit" className="register-button">
            REGISTER
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser