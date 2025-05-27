import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, RefreshCw, ShoppingCart, Heart } from 'lucide-react';
import { mockProducts } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { useCart } from '../context/CartContext';

export const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary-600 hover:text-primary-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link to="/products" className="text-gray-500 hover:text-gray-700">Products</Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className="aspect-square rounded-lg overflow-hidden bg-gray-100"
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-accent-500 transition-colors">
                    <Heart size={24} />
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline">
                  {product.discountPrice ? (
                    <>
                      <span className="text-3xl font-bold text-gray-900">
                        ${product.discountPrice.toFixed(2)}
                      </span>
                      <span className="ml-2 text-lg text-gray-500 line-through">
                        ${product.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-gray-600">{product.description}</p>

                <div className="space-y-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1/3">Availability:</div>
                    <div className={product.stock > 0 ? 'text-success-600' : 'text-error-600'}>
                      {product.stock > 0 ? `In Stock (${product.stock} units)` : 'Out of Stock'}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-1/3">Category:</div>
                    <div>{product.category}</div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    size="lg"
                    fullWidth
                    disabled={product.stock === 0}
                    onClick={handleAddToCart}
                    leftIcon={<ShoppingCart size={20} />}
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center space-x-4 text-sm">
                  <Truck className="w-5 h-5 text-gray-400" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  <span>2-year warranty included</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <RefreshCw className="w-5 h-5 text-gray-400" />
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t border-gray-200">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex">
                    <div className="w-1/3 text-gray-600">{key}:</div>
                    <div className="w-2/3 text-gray-900">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};