import React, { useState, useRef, useEffect } from 'react';
import { Search, TrendingUp, Clock, XCircle } from 'lucide-react';

interface TrendingSearch {
  id: number;
  term: string;
}



export const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Sample trending searches - replace with your actual data
  const trendingSearches: TrendingSearch[] = [
    { id: 1, term: 'Wireless Earbuds' },
    { id: 2, term: 'Smart Watches' },
    { id: 3, term: 'Laptop Accessories' },
    { id: 4, term: 'Gaming Consoles' },
  ];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement your search logic here
      console.log('Searching for:', searchQuery);
      setShowDropdown(false);
    }
  };
  
  const handleSelectSearchTerm = (term: string) => {
    setSearchQuery(term);
    setShowDropdown(false);
    // Implement your search logic here
    console.log('Selected search term:', term);
  };
  
  return (
    <div ref={searchRef} className="relative w-full max-w-xl">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Search 
            size={18} 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          
          <input
            type="text"
            placeholder="Search for Products, Brands and More"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowDropdown(true)}
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-10 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
          />
          
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setShowDropdown(true);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <XCircle size={16} />
            </button>
          )}
        </div>
      </form>
      
      {showDropdown && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="p-4">
            <h3 className="text-xs font-medium text-gray-500 mb-3">Trending Searches</h3>
            <ul className="space-y-2">
              {trendingSearches.map((search) => (
                <li key={search.id}>
                  <button 
                    onClick={() => handleSelectSearchTerm(search.term)}
                    className="flex items-center w-full px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    <TrendingUp size={14} className="text-primary-500 mr-2" />
                    <span>{search.term}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};