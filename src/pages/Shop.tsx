import React, { useState, useEffect } from 'react';
import { Filter, RefreshCw } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import Button from '../components/ui/Button';
import { products, categories, getProductsByCategory } from '../data/products';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    let result = getProductsByCategory(selectedCategory);
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) || 
        product.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
  };

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          {/* Mobile Filters Toggle */}
          <div className="w-full md:hidden mb-4">
            <Button 
              variant="outline"
              fullWidth
              onClick={() => setShowFilters(!showFilters)}
              leftIcon={<Filter className="h-4 w-4" />}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>

          {/* Sidebar Filters */}
          <aside className={`w-full md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
            <div className="bg-white p-6 rounded-lg shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Filter Products</h3>
                <button 
                  onClick={resetFilters}
                  className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
                >
                  <RefreshCw className="h-3 w-3 mr-1" /> Reset
                </button>
              </div>
              
              <div className="mb-4">
                <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  id="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div>
                <h4 className="font-medium text-neutral-700 mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label 
                      key={category.id} 
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={() => setSelectedCategory(category.id)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300"
                      />
                      <span className="ml-2 text-neutral-700">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Shop Fresh Produce</h1>
            
            <div className="mb-6 flex justify-between items-center">
              <p className="text-neutral-700">
                Showing {filteredProducts.length} products
              </p>
              <select className="border border-neutral-300 rounded-md p-2 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option value="relevance">Most Relevant</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Alphabetically</option>
              </select>
            </div>
            
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;