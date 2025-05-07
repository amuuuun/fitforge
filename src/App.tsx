import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RegistrationPage from './pages/RegistrationPage';
import SupplementsPage from './pages/SupplementsPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="register" element={<RegistrationPage />} />
            <Route path="supplements" element={<SupplementsPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;