import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const navLinks = ["Home", "Services", "About me", "Portfolio", "Contact me"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#121212] text-white px-6 py-4 font-lato fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or blank spacer */}
        <div className="font-bold text-base md:text-lg">
          {/* Use an actual logo or initials here if needed */}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              onClick={() => handleLinkClick(item)}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className={`text-sm transition ${
                activeLink === item ? 'text-orange-500' : 'text-gray-300'
              } hover:text-orange-500`}
            >
              {item}
            </a>
          ))}
          <button className="ml-4 bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600 transition">
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-4 flex flex-col gap-4 text-sm text-gray-300 bg-[#121212] pb-4">
          {navLinks.map((item, idx) => (
            <a
              key={idx}
              onClick={() => handleLinkClick(item)}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
              className={`hover:text-orange-500 ${
                activeLink === item ? 'text-orange-500' : ''
              }`}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition w-fit">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
}
