import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { ProductCard } from '../components/products/ProductCard';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { mockProducts } from '../data/mockData';
import { Product } from '../types';

export const ProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    minPrice: '',
    maxPrice: '',
    inStock: false,
    onSale: false,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(products.map(p => p.category)));

  useEffect(() => {
    let result = [...products];

    // Apply search query
    if (searchQuery) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    // Apply price range
    if (filters.minPrice) {
      result = result.filter(p => (p.discountPrice || p.price) >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(p => (p.discountPrice || p.price) <= Number(filters.maxPrice));
    }

    // Apply stock filter
    if (filters.inStock) {
      result = result.filter(p => p.stock > 0);
    }

    // Apply sale filter
    if (filters.onSale) {
      result = result.filter(p => p.discountPrice !== undefined);
    }

    setFilteredProducts(result);
  }, [searchQuery, filters, products]);

  const handleFilterChange = (key: string, value: string | boolean) => {
    setFilters(prev => {
      const newFilters = { ...prev, [key]: value };
      if (key === 'category') {
        setSearchParams(value ? { category: value as string } : {});
      }
      return newFilters;
    });
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      minPrice: '',
      maxPrice: '',
      inStock: false,
      onSale: false,
    });
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <label key={category} className="flex items-center">
                        <input
                          type="radio"
                          name="category"
                          checked={filters.category === category}
                          onChange={() => handleFilterChange('category', category)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                        />
                        <span className="ml-2 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={filters.minPrice}
                      onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                    />
                    <Input
                      type="number"
                      placeholder="Max"
                      value={filters.maxPrice}
                      onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                    />
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                  </label>
                </div>

                {/* Deals */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Deals</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.onSale}
                      onChange={(e) => handleFilterChange('onSale', e.target.checked)}
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">On Sale</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Filter Bar */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    leftIcon={<Search size={18} />}
                    fullWidth
                  />
                </div>
                <Button
                  variant="outline"
                  className="md:hidden"
                  onClick={() => setIsFilterOpen(true)}
                  leftIcon={<SlidersHorizontal size={18} />}
                >
                  Filters
                </Button>
              </div>
            </div>

            {/* Active Filters */}
            {(filters.category || filters.minPrice || filters.maxPrice || filters.inStock || filters.onSale) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {filters.category && (
                  <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Category: {filters.category}
                    <button
                      onClick={() => handleFilterChange('category', '')}
                      className="ml-2 hover:text-primary-800"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                {(filters.minPrice || filters.maxPrice) && (
                  <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center">
                    Price: ${filters.minPrice || '0'} - ${filters.maxPrice || '∞'}
                    <button
                      onClick={() => {
                        handleFilterChange('minPrice', '');
                        handleFilterChange('maxPrice', '');
                      }}
                      className="ml-2 hover:text-primary-800"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                {filters.inStock && (
                  <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center">
                    In Stock Only
                    <button
                      onClick={() => handleFilterChange('inStock', false)}
                      className="ml-2 hover:text-primary-800"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                {filters.onSale && (
                  <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center">
                    On Sale
                    <button
                      onClick={() => handleFilterChange('onSale', false)}
                      className="ml-2 hover:text-primary-800"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or search query</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsFilterOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl">
            <div className="h-full flex flex-col">
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-6">
                  {/* Mobile Categories */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <label key={category} className="flex items-center">
                          <input
                            type="radio"
                            name="category"
                            checked={filters.category === category}
                            onChange={() => handleFilterChange('category', category)}
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300"
                          />
                          <span className="ml-2 text-sm text-gray-700">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Price Range */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Price Range</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Mobile Availability */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Availability</h3>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.inStock}
                        onChange={(e) => handleFilterChange('inStock', e.target.checked)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                    </label>
                  </div>

                  {/* Mobile Deals */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-900 mb-3">Deals</h3>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.onSale}
                        onChange={(e) => handleFilterChange('onSale', e.target.checked)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">On Sale</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="border-t p-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant="outline"
                    onClick={clearFilters}
                    fullWidth
                  >
                    Clear All
                  </Button>
                  <Button
                    onClick={() => setIsFilterOpen(false)}
                    fullWidth
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};