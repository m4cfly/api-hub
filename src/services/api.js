const API_URL = 'https://api.pizzas.bytecode.dk/api'

export const api = {
  getPizzas: async () => {
    const response = await fetch(`${API_URL}/pizza-orders/mine`)
    if (!response.ok) {
      throw new Error('Kunne ikke hente dine pizza ordrer')
    }
    return response.json()
  },

  createOrder: async (orderData) => {
    const response = await fetch(`${API_URL}/pizza-orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData)
    })
    if (!response.ok) {
      throw new Error('Kunne ikke oprette Pizza Ordre')
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