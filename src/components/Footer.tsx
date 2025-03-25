
import { Link } from 'react-router-dom';
import { Wallet, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center">
              <Wallet className="h-8 w-8 text-blue-300" />
              <span className="ml-2 text-2xl font-bold">
                <span className="text-blue-300">Quest</span>Era
              </span>
            </div>
            <p className="mt-4 text-blue-100">
              Making financial education fun and accessible for students from Class 1 to 12.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-blue-100 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="text-blue-100 hover:text-white transition-colors">
                  Curriculum
                </Link>
              </li>
              <li>
                <Link to="/game-center" className="text-blue-100 hover:text-white transition-colors">
                  Game Center
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-blue-100 hover:text-white transition-colors">
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/help" className="text-blue-100 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="text-blue-100 hover:text-white transition-colors">
                  For Teachers
                </Link>
              </li>
              <li>
                <Link to="/parents" className="text-blue-100 hover:text-white transition-colors">
                  For Parents
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-blue-100 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-blue-200" />
                <span className="text-blue-100">contact@questera.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-blue-200" />
                <span className="text-blue-100">+91 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-200" />
                <span className="text-blue-100">Bangalore, India</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-400 transition-colors shadow-md">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-blue-200">
              © {new Date().getFullYear()} QuestEra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-blue-200 hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-blue-200 hover:text-white">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-blue-200 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;