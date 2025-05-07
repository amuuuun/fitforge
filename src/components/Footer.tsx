import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell size={24} className="text-accent" />
              <span className="text-xl font-bold">FitForge</span>
            </div>
            <p className="text-gray-300 text-sm">
              Transforming lives through fitness and wellness since 2015. Join our community and start your fitness journey today.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-accent transition-colors">Membership</Link>
              </li>
              <li>
                <Link to="/supplements" className="text-gray-300 hover:text-accent transition-colors">Supplements Store</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300">123 guecif,maroc</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">(212) 719081360</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-gray-300">aminelmarraki7@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between text-gray-300">
                <span>Monday - Friday:</span>
                <span>5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Saturday:</span>
                <span>6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>Sunday:</span>
                <span>7:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-6">
        <div className="container text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} FitForge Gym. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;