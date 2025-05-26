// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
// import { Button } from '../ui/Button';
// import { useAuth } from '../../context/AuthContext';
// import { useCart } from '../../context/CartContext';

// export const Header: React.FC = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const { user, isAuthenticated, logout } = useAuth();
//   const { itemCount } = useCart();
//   const location = useLocation();

//   // Check if we're on a transparent header page (home)
//   const isTransparentPage = location.pathname === '/';

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Navigation links
//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Products', path: '/products' },
//     { name: 'About Us', path: '/about' },
//     { name: 'News', path: '/news' },
//     { name: 'Contact', path: '/contact' },
//   ];

//   // Determine header styles based on scroll and page
//   const headerStyles = clsx(
//     'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
//     isScrolled || !isTransparentPage
//       ? 'bg-white shadow-md py-2'
//       : 'bg-transparent py-4'
//   );

//   const navLinkStyles = clsx(
//     'text-base font-medium transition-colors text-gray-700 hover:text-primary-600'
//   );

//   return (
//     <header className={headerStyles}>
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <span className={clsx(
//               'text-2xl font-bold',
//               isScrolled || !isTransparentPage ? 'text-primary-900' : ''
//             )}>
//               TechGadget
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={clsx(
//                   navLinkStyles,
//                   location.pathname === link.path && 'text-primary-600 font-semibold'
//                 )}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Actions */}
//           <div className="hidden md:flex items-center space-x-4">
//             <button className={clsx(
//               'p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100'
//             )}>
//               <Search size={20} />
//             </button>
            
//             <Link to="/cart" className="relative">
//               <button className={clsx(
//                 'p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100'
//               )}>
//                 <ShoppingCart size={20} />
//               </button>
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Link>
            
//             {isAuthenticated ? (
//               <div className="relative group">
//                 <Link to="/account">
//                   <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-300">
//                     {user?.avatar ? (
//                       <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="w-full h-full object-cover" />
//                     ) : (
//                       <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold">
//                         {user?.firstName?.[0]}{user?.lastName?.[0]}
//                       </div>
//                     )}
//                   </div>
//                 </Link>
//                 <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
//                   <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</Link>
//                   <Link to="/account/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
//                   <button 
//                     onClick={logout}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                   >
//                     Sign out
//                   </button>
//                 </div>
//               </div>
//             ) : (
//               <Link to="/login">
//                 <Button 
//                   // variant={isScrolled || !isTransparentPage ? "primary" : "ghost"}
//                   size="sm"
//                   leftIcon={<User size={16} />}
//                 >
//                   Sign In
//                 </Button>
//               </Link>
//             )}
//           </div>
          
//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <Link to="/cart" className="relative mr-4">
//               <button className={clsx(
//                 'pt-1  rounded-full transition-colors text-gray-600 hover:bg-gray-100'
//               )}>
//                 <ShoppingCart size={20} />
//               </button>
//               {itemCount > 0 && (
//                 <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {itemCount}
//                 </span>
//               )}
//             </Link>
            
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className={clsx(
//                 'p-2 rounded-md text-gray-600 hover:bg-gray-100'
//               )}
//             >
//               {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="px-4 pt-2 pb-4 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={clsx(
//                   'block px-3 py-2 rounded-md text-base font-medium bg-primary-50 text-primary-600'
//                 )}
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </Link>
//             ))}
            
//             <div className="pt-2 border-t border-gray-200">
//               {isAuthenticated ? (
//                 <>
//                   <Link
//                     to="/account"
//                     className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <User size={20} className="mr-2" />
//                     My Account
//                   </Link>
//                   <button
//                     onClick={() => {
//                       logout();
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     Sign out
//                   </button>
//                 </>
//               ) : (
//                 <Link
//                   to="/login"
//                   className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   <User size={20} className="mr-2" />
//                   Sign In
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// // Import clsx for conditional class merging
// function clsx(...classes: (string | boolean | undefined)[]) {
//   return classes.filter(Boolean).join(' ');
// }

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
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white',
    isScrolled || !isTransparentPage
      ? 'bg-white shadow-md py-2'
      : 'bg-transparent py-4'
  );

  const navLinkStyles = clsx(
    'text-sm lg:text-base font-medium transition-colors text-gray-700 hover:text-primary-600'
  );

  return (
    <header className={headerStyles}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <span className={clsx(
              'text-xl sm:text-2xl font-bold',
              isScrolled || !isTransparentPage ? 'text-primary-900' : ''
            )}>
              TechGadget
            </span>
          </Link>

          {/* Desktop Navigation - Show from large screens up */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
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

          {/* Tablet Navigation - Show on medium screens only */}
          <nav className="hidden md:flex lg:hidden space-x-4">
            {navLinks.slice(0, 3).map((link) => (
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
            {/* More menu for remaining items */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-primary-600 flex items-center">
                More
                <svg className="ml-1 h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-40 py-1 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center space-x-2 md:space-x-3 lg:space-x-4">
            {/* Search - Hide on smaller tablet screens */}
            <button className={clsx(
              'hidden md:block p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100'
            )}>
              <Search size={18} className="lg:w-5 lg:h-5" />
            </button>
            
            <Link to="/cart" className="relative">
              <button className={clsx(
                'p-2 rounded-full transition-colors text-gray-600 hover:bg-gray-100'
              )}>
                <ShoppingCart size={18} className="lg:w-5 lg:h-5" />
              </button>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-4 w-4 lg:h-5 lg:w-5 flex items-center justify-center text-[10px] lg:text-xs">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <Link to="/account">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full overflow-hidden border-2 border-primary-300">
                    {user?.avatar ? (
                      <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary-100 flex items-center justify-center text-primary-700 font-semibold text-xs lg:text-sm">
                        {user?.firstName?.[0]}{user?.lastName?.[0]}
                      </div>
                    )}
                  </div>
                </Link>
                <div className="absolute right-0 mt-2 w-44 lg:w-48 py-2 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
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
                  size="sm"
                  leftIcon={<User size={14} className="lg:w-4 lg:h-4" />}
                  className="text-xs px-3 py-1.5 lg:text-sm lg:px-4 lg:py-2"
                >
                  <span className="hidden md:inline">Sign In</span>
                  <span className="md:hidden">Login</span>
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button and cart */}
          <div className="flex items-center sm:hidden">
            <Link to="/cart" className="relative mr-3">
              <button className={clsx(
                'p-1.5 rounded-full transition-colors text-gray-600 hover:bg-gray-100'
              )}>
                <ShoppingCart size={18} />
              </button>
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  {itemCount}
                </span>
              )}
            </Link>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'p-1.5 rounded-md text-gray-600 hover:bg-gray-100'
              )}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Tablet/Small Desktop menu button */}
          <div className="hidden sm:flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={clsx(
                'ml-2 p-2 rounded-md text-gray-600 hover:bg-gray-100 md:hidden'
              )}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
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
            
            {/* Search in mobile menu */}
            <button className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
              <Search size={20} className="mr-2" />
              Search
            </button>
            
            <div className="pt-2 border-t border-gray-200 mt-2">
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

      {/* Tablet menu (for md screens) */}
      {isMobileMenuOpen && (
        <div className="hidden sm:block lg:hidden md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.slice(3).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  'block px-3 py-2 rounded-md text-sm font-medium',
                  location.pathname === link.path 
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-700 hover:bg-gray-50'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
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