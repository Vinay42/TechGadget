import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { itemCount } = useCart();
  const location = useLocation();

  // Check if we're on a transparent header page (home)
  const isTransparentPage = location.pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  // Determine header styles based on scroll and page
  const headerStyles = clsx(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled || !isTransparentPage
      ? 'bg-white shadow-md py-2'
      : 'bg-transparent py-4'
  );

  const navLinkStyles = clsx(
    'text-base font-medium transition-colors',
    isScrolled || !isTransparentPage
      ? 'text-gray-700 hover:text-primary-600'
      : 'text-white hover:text-gray-200'
  );

  return (
    <header className={headerStyles}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={clsx(
              'text-2xl font-bold',
              isScrolled || !isTransparentPage ? 'text-primary-900' : 'text-white'
            )}>
              TechGadget
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  navLinkStyles,
                  location.pathname === link.path && 'text-primary-600 font-semibold'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className={clsx(
              'p-2 rounded-full transition-colors',
              isScrolled || !isTransparentPage
                ? 'text-gray-600 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}>
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="relative">
              <button className={clsx(
                'p-2 rounded-full transition-colors',
                isScrolled || !isTransparentPage
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}>
                <ShoppingCart size={20} />
              </button>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <Link to="/account">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-300">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </div>
                    )}
                  </div>
                </Link>
                <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</Link>
                  <Link to="/account/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <Button 
                  variant={isScrolled || !isTransparentPage ? "primary" : "ghost"}
                  size="sm"
                  leftIcon={<User size={16} />}
                >
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4">
              <button className={clsx(
                'p-2 rounded-full transition-colors',
                isScrolled || !isTransparentPage
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}>
                <ShoppingCart size={20} />
              </button>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'p-2 rounded-md',
                isScrolled || !isTransparentPage
                  ? 'text-gray-600 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  location.pathname === link.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="pt-2 border-t border-gray-200">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/account"
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User size={20} className="mr-2" />
                    My Account
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={20} className="mr-2" />
                  Sign In
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Import clsx for conditional class merging
function clsx(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}