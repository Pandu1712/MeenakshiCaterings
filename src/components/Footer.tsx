import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-orange-950 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-amber-100">Meenakshi Caterings</h3>
            <p className="text-amber-200 mb-4 leading-relaxed">
              Creating memorable dining experiences with authentic flavors and exceptional service for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-amber-800 p-2 rounded-full hover:bg-amber-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Home</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">About Us</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Services</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Gallery</a></li>
              <li><a href="#" className="text-amber-200 hover:text-amber-100 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-100">Our Services</h4>
            <ul className="space-y-2 text-amber-200">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Social Gatherings</li>
              <li>Festival Catering</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-amber-100">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-amber-300 flex-shrink-0" />
                <p className="text-amber-200">123 Catering Street, Food District, Chennai, Tamil Nadu</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <p className="text-amber-200">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <p className="text-amber-200">info@meenakshicaterings.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-amber-300 flex-shrink-0" />
                <p className="text-amber-200">Mon - Sun: 8:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-300">
            &copy; {new Date().getFullYear()} Meenakshi Caterings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
