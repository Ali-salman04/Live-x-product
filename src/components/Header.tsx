import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/', isRoute: true },
    { label: 'Services', href: '#services', isRoute: false },
    { label: 'About', href: '#about', isRoute: false },
    { label: 'Careers', href: '/careers', isRoute: true },
    { label: 'Courses', href: '#courses', isRoute: false },
    { label: 'Products', href: '#products', isRoute: false },
    { label: 'Portfolio', href: '#portfolio', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Live-X
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-cyan-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-cyan-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#quote"
              className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Get a Quote
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            {navItems.map((item) => (
              item.isRoute ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-cyan-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={`block text-sm font-medium transition-colors hover:text-cyan-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              )
            ))}
            <a
              href="#quote"
              className="block text-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;