import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Leaf, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { getItemCount } = useCart();
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    // Close the mobile menu after logout
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-primary-600" />
            <span className="ml-2 text-xl font-bold text-primary-800">Fresh Greens</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-800 hover:text-primary-600 transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-neutral-800 hover:text-primary-600 transition-colors">
              Shop
            </Link>
          </nav>

          {/* Search, Cart, User Icons and Logout */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-neutral-700 hover:text-primary-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="p-2 text-neutral-700 hover:text-primary-600 transition-colors relative">
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="p-2 text-neutral-700 hover:text-primary-600 transition-colors">
                  <User className="h-5 w-5" />
                </Link>
                <button 
                  onClick={handleLogout}
                  className="p-2 text-neutral-700 hover:text-primary-600 transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </>
            ) : (
              <Link to="/login" className="p-2 text-neutral-700 hover:text-primary-600 transition-colors">
                <User className="h-5 w-5" />
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Link to="/cart" className="p-2 text-neutral-700 mr-2 relative">
              <ShoppingCart className="h-5 w-5" />
              {getItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {getItemCount()}
                </span>
              )}
            </Link>
            <button 
              onClick={toggleMenu}
              className="p-2 text-neutral-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg p-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-neutral-800 hover:text-primary-600 transition-colors py-2">
                Home
              </Link>
              <Link to="/shop" className="text-neutral-800 hover:text-primary-600 transition-colors py-2">
                Shop
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to="/profile" className="text-neutral-800 hover:text-primary-600 transition-colors py-2">
                    My Profile
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="text-left text-neutral-800 hover:text-primary-600 transition-colors py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to="/login" className="text-neutral-800 hover:text-primary-600 transition-colors py-2">
                  Login / Register
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;