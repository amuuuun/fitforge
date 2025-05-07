import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, Dumbbell } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `px-3 py-2 rounded-md text-base font-medium transition-colors ${
      isActive 
        ? 'text-accent font-semibold' 
        : 'text-dark/80 hover:text-accent'
    }`;

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Dumbbell size={28} className="text-primary" />
          <span className="text-xl font-bold text-dark">FitForge</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses}>Home</NavLink>
          <NavLink to="/register" className={navLinkClasses}>Membership</NavLink>
          <NavLink to="/supplements" className={navLinkClasses}>Supplements</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
        </div>

        {/* Cart & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative p-2" aria-label="View Cart">
            <ShoppingCart size={24} className="text-dark" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-accent rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button 
            className="md:hidden p-2" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
          <div className="container py-4 flex flex-col space-y-2">
            <NavLink to="/" className={navLinkClasses} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/register" className={navLinkClasses} onClick={closeMenu}>Membership</NavLink>
            <NavLink to="/supplements" className={navLinkClasses} onClick={closeMenu}>Supplements</NavLink>
            <NavLink to="/contact" className={navLinkClasses} onClick={closeMenu}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;