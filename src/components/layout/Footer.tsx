import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-8 w-8 text-primary-300" />
              <span className="ml-2 text-xl font-bold text-white">Fresh Greens</span>
            </div>
            <p className="text-primary-100 mb-4">
              Farm-fresh vegetables and groceries delivered straight to your doorstep.
              Supporting local farmers since 2025.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-primary-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-primary-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-primary-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-100 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-primary-100 hover:text-white transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-primary-100 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-primary-100 hover:text-white transition-colors">
                  Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-100 hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-300 mt-0.5 mr-2" />
                <span className="text-primary-100">Mumbai, India -  Tanush, Satyam, Nishita, Shreyansh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-300 mr-2" />
                <span className="text-primary-100">(+91) 123-4567-890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-300 mr-2" />
                <a href="mailto:info@freshgreens.com" className="text-primary-100 hover:text-white transition-colors">
                  info@freshgreens.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-10 pt-6 text-center text-primary-200">
          <p>&copy; {new Date().getFullYear()} Fresh Greens. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;