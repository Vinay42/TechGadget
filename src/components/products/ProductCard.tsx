import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { Button } from '../ui/Button';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'horizontal';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  variant = 'default' 
}) => {
  const { addItem } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };
  
  const discountPercentage = product.discountPrice 
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100) 
    : 0;
  
  if (variant === 'horizontal') {
    return (
      <Link to={`/products/${product.id}`} className="group">
        <div className="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg border border-gray-100">
          <div className="relative md:w-1/3">
            {product.discountPrice && (
              <div className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                {discountPercentage}% OFF
              </div>
            )}
            {product.stock <= 5 && product.stock > 0 && (
              <div className="absolute top-2 right-2 bg-warning-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                Low Stock
              </div>
            )}
            {product.stock === 0 && (
              <div className="absolute top-2 right-2 bg-error-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                Out of Stock
              </div>
            )}
            <div className="w-full h-48 md:h-full bg-gray-100 overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="flex flex-col flex-grow p-4 md:p-6">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">{product.category}</span>
                <h3 className="mt-1 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
              </div>
              <button 
                className="p-2 text-gray-400 hover:text-accent-500 transition-colors rounded-full hover:bg-gray-100"
                onClick={(e) => e.preventDefault()}
              >
                <Heart size={18} />
              </button>
            </div>
            
            <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
            
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
            </div>
            
            <div className="mt-auto pt-4 flex items-center justify-between">
              <div className="flex items-center">
                {product.discountPrice ? (
                  <>
                    <span className="text-lg font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                    <span className="ml-2 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  </>
                ) : (
                  <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              <Button
                size="sm"
                disabled={product.stock === 0}
                rightIcon={<ShoppingCart size={16} />}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md transition-shadow hover:shadow-lg border border-gray-100 overflow-hidden h-full flex flex-col">
        <div className="relative">
          {product.discountPrice && (
            <div className="absolute top-2 left-2 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
              {discountPercentage}% OFF
            </div>
          )}
          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-2 right-2 bg-warning-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
              Low Stock
            </div>
          )}
          {product.stock === 0 && (
            <div className="absolute top-2 right-2 bg-error-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
              Out of Stock
            </div>
          )}
          <div className="h-48 bg-gray-100 overflow-hidden">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between">
            <span className="text-xs font-medium text-primary-600 uppercase tracking-wider">{product.category}</span>
            <button 
              className="p-1 text-gray-400 hover:text-accent-500 transition-colors rounded-full"
              onClick={(e) => e.preventDefault()}
            >
              <Heart size={16} />
            </button>
          </div>
          
          <h3 className="mt-1 text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
          
          <div className="flex items-center mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
          </div>
          
          <div className="mt-auto pt-3 flex items-center justify-between">
            <div className="flex items-center">
              {product.discountPrice ? (
                <>
                  <span className="text-base font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
                  <span className="ml-1 text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </>
              ) : (
                <span className="text-base font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <Button
              size="sm"
              disabled={product.stock === 0}
              onClick={handleAddToCart}
              variant="ghost"
              className="p-1"
            >
              <ShoppingCart size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};