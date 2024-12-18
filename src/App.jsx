import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import Navbar from './components/NavBar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Login from './pages/Login'
import CreateUser from './pages/CreateUser'
import Cart from './pages/Cart'
import Delivery from './pages/Delivery'
import Profile from './pages/Profile'
import ThankYou from './pages/ThankYou'

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Header />
          <Navbar />
          <Routes>
          <Route path="/vision" element={<Vision />} />
          <Route path="/endpoints" element={<Endpoints />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<CreateUser />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/thankyou" element={<ThankYou />} />
          
          </Routes>
        </div>
      </CartProvider>
    </Router>
  )
}

export default App