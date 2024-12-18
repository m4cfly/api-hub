const API_URL = 'http://localhost:YOUR_BACKEND_PORT'

export const api = {
  getPizzas: async () => {
    const response = await fetch(`${API_URL}/pizzas`)
    if (!response.ok) {
      throw new Error('Kunne ikke hente pizzaer')
    }
    return response.json()
  },

  createOrder: async (orderData) => {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    })
    if (!response.ok) {
      throw new Error('Kunne ikke oprette ordre')
    }
    return response.json()
  },

  login: async (credentials) => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    })
    if (!response.ok) {
      throw new Error('Login fejlede')
    }
    return response.json()
  }
}