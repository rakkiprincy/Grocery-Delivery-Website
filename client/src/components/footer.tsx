import { ShoppingCart, Facebook, Twitter, Instagram, Phone, Mail, Clock, MapPin, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <ShoppingCart className="text-fresh-green h-8 w-8" />
              <h3 className="text-2xl font-bold">FreshCart</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's fastest growing grocery delivery platform. Fresh groceries delivered to your door in 30 minutes across 50+ cities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 hover:text-fresh-green cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 hover:text-fresh-green cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 hover:text-fresh-green cursor-pointer transition-colors" />
              <Linkedin className="h-6 w-6 hover:text-fresh-green cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop Categories</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Fresh Vegetables & Fruits</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dairy Products & Eggs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meat & Seafood</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pantry & Staples</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Organic & Health Foods</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help & FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Return & Refund Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Delivery Information</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <div>+91 1800-123-4567</div>
                  <div className="text-sm text-gray-500">Toll-free support</div>
                </span>
              </p>
              <p className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <div>support@freshcart.in</div>
                  <div className="text-sm text-gray-500">Customer support</div>
                </span>
              </p>
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <div>Cyber City, Gurgaon</div>
                  <div className="text-sm text-gray-500">Haryana, India</div>
                </span>
              </p>
              <p className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  <div>24/7 Customer Support</div>
                  <div className="text-sm text-gray-500">Always here to help</div>
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 FreshCart Technologies Pvt. Ltd. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>Made in India 🇮🇳</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
