import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Leaf, ArrowLeft, Heart, Share2, Plus, Minus } from 'lucide-react';
import Button from '../components/ui/Button';
import { getProductById } from '../data/products';
import { useCart } from '../contexts/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'nutrition' | 'origin'>('description');
  
  const product = id ? getProductById(id) : undefined;

  useEffect(() => {
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="pt-24 pb-16 min-h-screen container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="mb-6 text-neutral-600">The product you're looking for doesn't exist or has been removed.</p>
          <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(Math.max(1, Math.min(newQuantity, product.stock)));
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
      category: product.category,
      unit: product.unit
    });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-neutral-600 hover:text-neutral-900 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </button>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2 h-[400px] md:h-auto relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.organic && (
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-sm font-semibold px-3 py-1 rounded-full flex items-center">
                  <Leaf className="h-4 w-4 mr-1" />
                  Organic
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="md:w-1/2 p-6 md:p-8">
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">{product.name}</h1>
              
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold text-neutral-900">${product.price.toFixed(2)}</span>
                <span className="ml-2 text-neutral-600">/ {product.unit}</span>
              </div>
              
              <p className="text-neutral-700 mb-6">{product.description}</p>
              
              {/* Actions */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-neutral-300 rounded-md w-fit">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="p-2 text-neutral-600 hover:text-neutral-900"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 text-neutral-800 min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="p-2 text-neutral-600 hover:text-neutral-900"
                    aria-label="Increase quantity"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-neutral-500 mt-1">
                  {product.stock} {product.unit}s available
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button
                  onClick={handleAddToCart}
                  leftIcon={<ShoppingCart className="h-5 w-5" />}
                  fullWidth
                >
                  Add to Cart
                </Button>
                
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none"
                    aria-label="Add to wishlist"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 sm:flex-none"
                    aria-label="Share product"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="border-t border-neutral-200 pt-6">
                <div className="flex space-x-4 border-b border-neutral-200">
                  <button
                    className={`pb-2 ${
                      activeTab === 'description'
                        ? 'border-b-2 border-primary-600 text-primary-700 font-medium'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    onClick={() => setActiveTab('description')}
                  >
                    Description
                  </button>
                  <button
                    className={`pb-2 ${
                      activeTab === 'nutrition'
                        ? 'border-b-2 border-primary-600 text-primary-700 font-medium'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    onClick={() => setActiveTab('nutrition')}
                  >
                    Nutrition
                  </button>
                  <button
                    className={`pb-2 ${
                      activeTab === 'origin'
                        ? 'border-b-2 border-primary-600 text-primary-700 font-medium'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                    onClick={() => setActiveTab('origin')}
                  >
                    Origin
                  </button>
                </div>
                
                <div className="py-4">
                  {activeTab === 'description' && (
                    <p className="text-neutral-700">{product.description}</p>
                  )}
                  
                  {activeTab === 'nutrition' && (
                    <div>
                      <h3 className="font-semibold mb-2">Nutrition Facts</h3>
                      <ul className="space-y-2">
                        {product.nutritionFacts?.calories && (
                          <li className="flex justify-between">
                            <span className="text-neutral-600">Calories:</span>
                            <span className="font-medium">{product.nutritionFacts.calories} kcal</span>
                          </li>
                        )}
                        {product.nutritionFacts?.protein && (
                          <li className="flex justify-between">
                            <span className="text-neutral-600">Protein:</span>
                            <span className="font-medium">{product.nutritionFacts.protein}g</span>
                          </li>
                        )}
                        {product.nutritionFacts?.carbs && (
                          <li className="flex justify-between">
                            <span className="text-neutral-600">Carbohydrates:</span>
                            <span className="font-medium">{product.nutritionFacts.carbs}g</span>
                          </li>
                        )}
                        {product.nutritionFacts?.fiber && (
                          <li className="flex justify-between">
                            <span className="text-neutral-600">Fiber:</span>
                            <span className="font-medium">{product.nutritionFacts.fiber}g</span>
                          </li>
                        )}
                        {product.nutritionFacts?.vitamin && (
                          <li className="flex justify-between">
                            <span className="text-neutral-600">Vitamins:</span>
                            <span className="font-medium">{product.nutritionFacts.vitamin}</span>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'origin' && (
                    <div>
                      <h3 className="font-semibold mb-2">Product Origin</h3>
                      <p className="text-neutral-700">
                        {product.origin || 'Information not available'}
                      </p>
                      <p className="mt-2 text-neutral-700">
                        {product.organic ? 'This product is certified organic.' : 'This product is conventionally grown.'}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;