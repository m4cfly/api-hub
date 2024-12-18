import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './pages/Login';
import CreateUser from './pages/CreateUser';
import Cart from './pages/Cart';
import Delivery from './pages/Delivery';
import Profile from './pages/Profile';
import ThankYou from './pages/ThankYou';
import Vision from './pages/Vision';
import Endpoints from './pages/Endpoints';
import './styles/App.css'

const AppContent = () => {
  const location = useLocation();

  // Dynamically set the document title based on the current route
  useEffect(() => {
    const titles = {
      '/': 'Home - Pizza Shop',
      '/menu': 'Menu - Browse Pizzas',
      '/login': 'Login - Access Your Account',
      '/register': 'Register - Join Us',
      '/cart': 'Your Cart - Pizza Shop',
      '/delivery': 'Delivery - Pizza Shop',
      '/profile': 'Profile - Pizza Shop',
      '/thankyou': 'Thank You - Order Confirmation',
      '/vision': 'Our Vision - Pizza Shop',
      '/endpoints': 'API Endpoints - Pizza Shop',
    };
    document.title = titles[location.pathname] || 'Pizza Shop';
  }, [location]);

  return (
    <div className="app">
      <Header />
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<CreateUser />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/endpoints" element={<Endpoints />} />
          {/* Fallback route for undefined paths */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  );
}

export default App;
