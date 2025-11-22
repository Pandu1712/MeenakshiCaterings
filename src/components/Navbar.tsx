import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar = ({ onNavigate, currentPage }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Menu', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
   <nav className="bg-[#EADABC] shadow-lg sticky top-0 z-50 border-b-2 border-[#875724]">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      
      <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNavigate('home')}>
        
        {/* Logo Circle with Your Brown Colors */}
        <div className="bg-gradient-to-br from-[#875724] to-[#6A431E] p-2.5 rounded-full shadow-md">
          <img
            src="/logoMeenakshi1.jpg"
            alt="Logo"
            className="h-10 w-10 object-contain rounded-full"
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-[#875724]">
            Meenakshi Caterings
          </h1>
          <p className="text-xs font-medium text-[#6A431E]">Taste the Tradition</p>
        </div>

      </div>

      <div className="hidden md:flex items-center space-x-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === item.id
                ? 'bg-[#875724] text-white shadow-md'
                : 'text-[#875724] hover:bg-[#F3E6CC] hover:text-[#6A431E]'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 rounded-lg text-[#875724] hover:bg-[#F3E6CC] transition-colors"
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

    </div>
  </div>

  {isMenuOpen && (
    <div className="md:hidden bg-[#F6EBDD] border-t border-[#D8C4A1] shadow-inner">
      <div className="px-4 py-3 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
              currentPage === item.id
                ? 'bg-[#875724] text-white shadow-md'
                : 'text-[#875724] hover:bg-[#F3E6CC]'
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  )}
</nav>

  );
};

export default Navbar;
