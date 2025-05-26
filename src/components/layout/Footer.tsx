// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// export const Footer: React.FC = () => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-primary-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="space-y-4">
//             <h3 className="text-2xl font-bold">TechGadget</h3>
//             <p className="text-gray-300 max-w-xs">
//               Your premium destination for cutting-edge technology and gadgets.
//               Discover innovation at its finest.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-300 hover:text-white transition-colors">
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-300 hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
//                   News
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           {/* Account */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Account</h4>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/login" className="text-gray-300 hover:text-white transition-colors">
//                   Sign In
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/register" className="text-gray-300 hover:text-white transition-colors">
//                   Register
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/account/orders" className="text-gray-300 hover:text-white transition-colors">
//                   Order History
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/cart" className="text-gray-300 hover:text-white transition-colors">
//                   Cart
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/account" className="text-gray-300 hover:text-white transition-colors">
//                   My Account
//                 </Link>
//               </li>
//             </ul>
//           </div>
          
//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <MapPin size={20} className="mr-2 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-300">
//                   1234 Tech Avenue<br />
//                   San Francisco, CA 94107
//                 </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={20} className="mr-2 flex-shrink-0" />
//                 <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
//                   (555) 123-4567
//                 </a>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={20} className="mr-2 flex-shrink-0" />
//                 <a href="mailto:info@techgadget.com" className="text-gray-300 hover:text-white transition-colors">
//                   info@techgadget.com
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-10 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm">
//               &copy; {currentYear} TechGadget. All rights reserved.
//             </p>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link to="/privacy-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link to="/terms-of-service" className="text-gray-400 text-sm hover:text-white transition-colors">
//                 Terms of Service
//               </Link>
//               <Link to="/shipping-policy" className="text-gray-400 text-sm hover:text-white transition-colors">
//                 Shipping Policy
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg lg:text-2xl font-bold">TechGadget</h3>
            <p className="text-gray-300 text-xs lg:text-base max-w-xs">
              Your premium destination for cutting-edge technology and gadgets.
              Discover innovation at its finest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Account */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/account/orders" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/account" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-base lg:text-lg font-semibold mb-3 lg:mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs lg:text-base">
                  1234 Tech Avenue<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@techgadget.com" className="text-gray-300 hover:text-white transition-colors text-xs lg:text-base">
                  info@techgadget.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 lg:mt-10 pt-4 lg:pt-6">
          <div className="flex flex-col space-y-4 lg:flex-row lg:justify-between lg:items-center lg:space-y-0">
            <p className="text-gray-400 text-xs lg:text-sm text-center lg:text-left">
              &copy; {currentYear} TechGadget. All rights reserved.
            </p>
            <div className="flex flex-col items-center space-y-2 lg:flex-row lg:space-y-0 lg:space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 text-xs lg:text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 text-xs lg:text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/shipping-policy" className="text-gray-400 text-xs lg:text-sm hover:text-white transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};