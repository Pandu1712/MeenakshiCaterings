import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#875724] text-[#EADABC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Meenakshi Caterings</h3>
            <p className="text-[#EADABC] mb-4 leading-relaxed">
              Creating memorable dining experiences with authentic flavors and exceptional service for over a decade.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-[#6c461a] p-2 rounded-full hover:bg-[#573714] transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-[#6c461a] p-2 rounded-full hover:bg-[#573714] transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-[#6c461a] p-2 rounded-full hover:bg-[#573714] transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#About" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#Contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-[#EADABC]">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Social Gatherings</li>
              <li>Festival Catering</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact Info</h4>

            <div className="space-y-4">

              {/* Address 1 */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-white" />
                <p className="text-[#EADABC]">
                  MIG 650 & 651, Mayuri Estate, KPHB Colony 3rd Phase, Kukatpally, Hyderabad
                </p>
              </div>

              {/* Address 2 */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-white" />
                <p className="text-[#EADABC]">
                  Opp Indis One City, RTO Office Lane,<br />
                  KPHB Colony 4th Phase, Kukatpally, Hyderabad - 500072
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-white" />
                <p className="text-[#EADABC] leading-relaxed">
                  +91 96522 22005 <br />
                  +91 63024 49489
                </p>
              </div>

              {/* Timings */}
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 mt-1 text-white" />
                <p className="text-[#EADABC]">Mon - Sun: 8:00 AM - 10:00 PM</p>
              </div>

            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-[#6c461a] mt-10 pt-6 text-center">
          <p className="text-[#EADABC]">
            &copy; {new Date().getFullYear()} Meenakshi Caterings. All rights reserved.
          </p>
        </div>

        {/* StaffArc Credit */}
        <div className="border-t border-black mt-6 pt-5 text-center text-sm">
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#EADABC] font-semibold hover:underline"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
